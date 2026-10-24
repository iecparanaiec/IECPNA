// Asistente de consultas de IEC (Whattson). Recibe el historial del chat y responde
// con Gemini en streaming (eventos SSE propios: {t: texto} ... {done: true}).
import { KNOWLEDGE } from "./_knowledge.js";

const MODEL = process.env.GEMINI_MODEL || "gemini-3.6-flash";
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:streamGenerateContent?alt=sse`;
const MAX_TURNS = 16;
const MAX_CHARS = 1200;
const ALLOWED_ORIGINS = [/^https:\/\/(www\.)?iec-ia\.com\.ar$/, /^https:\/\/[a-z0-9-]+\.vercel\.app$/, /^http:\/\/localhost(:\d+)?$/];

const SYSTEM = `Sos Whattson, el robot asistente de IEC. Respondés las consultas del sitio web del Ecosistema IEC & Co+nexus (IEC: Instituto privado en Economía del Conocimiento, Paraná, Entre Ríos). Atendés por chat y por voz a personas interesadas en cursos y a empresas e instituciones interesadas en Inteligencia Operativa. Si te preguntan quién sos, decí que sos Whattson, el asistente del IEC.

Cómo responder:
- En español rioplatense, cálido y directo, con voseo.
- Breve: dos a cuatro oraciones. Muchas respuestas se leen en voz alta, así que nada de tablas, listas largas ni markdown de formato (sin asteriscos ni negritas).
- Usá solo la información de abajo. Si algo no está (por ejemplo, precios), decilo y ofrecé el WhatsApp que corresponda.
- Cuando sirva, sumá al final uno o dos enlaces con el formato [texto](/ruta), usando solo rutas que aparecen abajo, los enlaces de WhatsApp o los de Instagram y LinkedIn.
- Para inscribirse en cursos: WhatsApp de capacitaciones. Para diagnósticos, implementación o propuestas para equipos: WhatsApp de empresas.
- Si te preguntan algo ajeno a IEC, respondé en una oración y volvé a lo que IEC ofrece.
- Respondé enseguida, sin preámbulos.

Información del ecosistema:
${KNOWLEDGE}`;

// Límite simple por IP en la instancia (mejor esfuerzo, no reemplaza un rate limit real)
const hits = new Map();
function limited(ip) {
  const now = Date.now();
  const list = (hits.get(ip) || []).filter((t) => now - t < 60_000);
  list.push(now);
  hits.set(ip, list);
  return list.length > 12;
}

// Historial del sitio ({role: user|assistant, content}) → formato de Gemini ({role: user|model, parts})
function toContents(raw) {
  if (!Array.isArray(raw)) return null;
  const msgs = raw
    .filter((m) => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string" && m.content.trim())
    .slice(-MAX_TURNS)
    .map((m) => ({ role: m.role === "assistant" ? "model" : "user", parts: [{ text: m.content.slice(0, MAX_CHARS) }] }));
  while (msgs.length && msgs[0].role !== "user") msgs.shift();
  if (!msgs.length || msgs[msgs.length - 1].role !== "user") return null;
  return msgs;
}

// Texto de un fragmento de respuesta (omite partes de razonamiento interno si las hubiera)
function chunkText(data) {
  const parts = data?.candidates?.[0]?.content?.parts || [];
  return parts.filter((p) => typeof p.text === "string" && !p.thought).map((p) => p.text).join("");
}

export default async function handler(req, res) {
  const origin = req.headers.origin || "";
  if (origin && !ALLOWED_ORIGINS.some((r) => r.test(origin))) {
    res.status(403).json({ error: "origin" });
    return;
  }
  if (req.method !== "POST") {
    res.status(405).json({ error: "method" });
    return;
  }
  const key = process.env.GEMINI_API_KEY;
  if (!key) {
    res.status(503).json({ error: "not_configured" });
    return;
  }
  const ip = (req.headers["x-forwarded-for"] || "").split(",")[0].trim() || "local";
  if (limited(ip)) {
    res.status(429).json({ error: "rate_limited" });
    return;
  }
  const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
  const contents = toContents(body.messages);
  if (!contents) {
    res.status(400).json({ error: "messages" });
    return;
  }

  let upstream;
  try {
    upstream = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-goog-api-key": key },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: SYSTEM }] },
        contents,
        generationConfig: { maxOutputTokens: 2048 },
      }),
    });
  } catch (err) {
    res.status(502).json({ error: "network" });
    return;
  }
  if (!upstream.ok || !upstream.body) {
    const detail = await upstream.text().catch(() => "");
    console.error("Gemini", upstream.status, detail.slice(0, 500));
    res.status(502).json({ error: "upstream", status: upstream.status });
    return;
  }

  res.writeHead(200, {
    "Content-Type": "text/event-stream; charset=utf-8",
    "Cache-Control": "no-cache, no-transform",
    Connection: "keep-alive",
  });
  const send = (obj) => res.write(`data: ${JSON.stringify(obj)}\n\n`);

  let sent = 0;
  let blocked = false;
  try {
    const reader = upstream.body.getReader();
    const dec = new TextDecoder();
    let buf = "";
    for (;;) {
      const { value, done } = await reader.read();
      if (done) break;
      buf += dec.decode(value, { stream: true });
      const events = buf.split(/\r?\n\r?\n/);
      buf = events.pop();
      for (const ev of events) {
        const line = ev.split(/\r?\n/).filter((l) => l.startsWith("data:")).map((l) => l.slice(5).trim()).join("");
        if (!line) continue;
        let data;
        try { data = JSON.parse(line); } catch { continue; }
        if (data.promptFeedback?.blockReason) blocked = true;
        const reason = data.candidates?.[0]?.finishReason;
        if (reason && !["STOP", "MAX_TOKENS", "FINISH_REASON_UNSPECIFIED"].includes(reason)) blocked = true;
        const text = chunkText(data);
        if (text) { sent += text.length; send({ t: text }); }
      }
    }
    if (!sent) {
      send({ t: blocked
        ? "Sobre eso no puedo ayudarte. Si querés, te cuento sobre los cursos o la Inteligencia Operativa."
        : "No pude armar la respuesta. Probá de nuevo o escribinos por WhatsApp: [WhatsApp cursos](https://wa.me/5493434295937)" });
    }
    send({ done: true });
  } catch (err) {
    console.error("Gemini stream", err);
    send({ error: "stream" });
  }
  res.end();
}
