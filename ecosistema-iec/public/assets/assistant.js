// Asistente IEC: isla superior que se expande en un panel con orbe animado.
// Consultas por chat o por voz (Web Speech API), respuestas en streaming desde
// /api/chat y, si la función no está disponible, desde una base local de respuestas.
(function () {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const canSpeak = "speechSynthesis" in window;
  const STORE = "iec-ai";
  const SUGGESTIONS = [
    "¿Cuáles son las últimas capacitaciones del año?",
    "¿Qué es la Inteligencia Operativa?",
    "Quiero capacitar a mi equipo",
    "¿Hay cursos para chicos y adolescentes?",
    "¿Quiénes forman el ecosistema?",
    "¿Dónde están y cómo me inscribo?",
  ];
  const WA_CURSOS = "https://wa.me/5493434295937";
  const WA_EMPRESAS = "https://wa.me/5493434664964";

  // Respuestas locales para cuando /api/chat no está disponible
  const LOCAL = [
    { k: ["instagram", "linkedin", "redes", "seguir", "red social"], a: "Seguinos en Instagram como @iecparana y en LinkedIn como IEC Instituto privado en Economía del Conocimiento: ahí publicamos cursos, eventos y novedades. [Instagram](https://www.instagram.com/iecparana/) [LinkedIn](https://www.linkedin.com/company/iec-instituto-privado-en-economia-del-conocimiento/)" },
    { k: ["lescano", "pablo"], a: "Pablo Lescano lleva el desarrollo institucional y las relaciones políticas y comerciales del ecosistema: articula con el sector público, empresas e instituciones. [Quiénes somos](/quienes-somos)" },
    { k: ["whattson", "quién sos", "quien sos", "quién eres", "tu nombre", "cómo te llamás", "como te llamas"], a: "¡Soy Whattson, el robot asistente del IEC! Te ayudo con cursos, fechas, Inteligencia Operativa y todo lo que quieras saber del Ecosistema IEC & Co+nexus. [Quiénes somos](/quienes-somos)" },
    { k: ["nivel ii", "nivel 2", "avanzad", "agente"], a: "Experto en IA Nivel II es la última comisión del año, en formato intensivo: lunes y jueves de 16 a 18 h, del 16/11 al 10/12 (8 clases). Es para profundizar en agentes, asistentes y automatización. ¡Quedan pocos lugares! [Ver programa](/experto_ia_nivel_2) [Reservar mi lugar](" + WA_CURSOS + ")" + WA_CURSOS + ")" },
    { k: ["ia", "inteligencia artificial", "experto", "curso", "empiez", "pronto", "comisi", "último", "ultimo", "fin de año", "intensivo"], a: "¡Son las últimas capacitaciones del año! Experto en IA Nivel I y II se dictan en formato intensivo: dos clases por semana (lunes y jueves) durante un mes, del 16/11 al 10/12. Nivel I: lunes de 16 a 18 h y jueves de 14 a 16 h. Nivel II: lunes y jueves de 16 a 18 h. [Últimas del año](/capacitaciones#experto-ia-1) [Reservar mi lugar](" + WA_CURSOS + ")" },
    { k: ["chic", "niñ", "kids", "adolesc", "teen", "robót", "robot"], a: "Sí: Robótica Kids es un taller los sábados de 10 a 12 h, y Programador Teens con IA es los miércoles de 14 a 16 h. Los dos son talleres continuos, así que se pueden sumar en cualquier momento. [Robótica Kids](/robotica_kids) [Programador Teens](/programador_teens_ia)" },
    { k: ["io", "operativa", "smarteo", "implement", "empresa", "diagnóst", "automatiz"], a: "La Inteligencia Operativa convierte la tecnología en resultados medibles: relevamos tus procesos, diseñamos la solución, La FactorIA la desarrolla y la medimos antes y después con la metodología SMARTEO 3.0. Para empezar, pedí un diagnóstico. [Qué es la IO](/inteligencia-operativa) [Pedir diagnóstico](" + WA_EMPRESAS + ")" },
    { k: ["equipo", "in company", "capacitar a mi", "institución", "empleados"], a: "Armamos capacitaciones in company adaptadas a las tareas reales de tu equipo, en IEC o en tu organización, y se pueden combinar con la implementación de Inteligencia Operativa. [Pedir propuesta](" + WA_EMPRESAS + ") [Ver capacitaciones](/capacitaciones)" },
    { k: ["quién", "quien", "conexus", "co+nexus", "ecosistema", "equipo de", "factoria"], a: "El Ecosistema IEC & Co+nexus une a IEC, el Instituto privado en Economía del Conocimiento, que forma, desarrolla, implementa y mide, con Co+nexus, que diagnostica, ordena, vincula y orquesta. La FactorIA es nuestro equipo de desarrollo. [Quiénes somos](/quienes-somos)" },
    { k: ["dónde", "donde", "dirección", "ubic", "inscrib", "contact", "whatsapp", "precio", "cuesta", "valor"], a: "Estamos en Gualeguaychú 449, Paraná. Para inscripciones y valores de los cursos escribinos al WhatsApp de capacitaciones; para empresas, al de Inteligencia Operativa. [WhatsApp cursos](" + WA_CURSOS + ") [Contacto](/contacto)" },
    { k: ["qgis", "revit", "bim", "arquitect", "mapa"], a: "QGIS Inicial empieza el lunes 16/11 de 18 a 20 h (8 clases) y Revit + IA el martes 17/11 de 18 a 21 h. [QGIS](/qgis) [Revit + IA](/revit_ia)" },
    { k: ["odont", "médic", "medic", "secretar", "salud", "consultorio"], a: "Secretariado Odontológico Inteligente tiene comisión los lunes de 14 a 16 h (desde el 16/11) y los jueves de 16 a 18 h (desde el 19/11). Secretariado Médico Inteligente arranca el lunes 16/11. [Ver capacitaciones](/capacitaciones?area=salud)" },
    { k: ["weekclass", "intensiv", "semana"], a: "La WeekClass De 0 a Producción es una semana intensiva, del 16 al 20 de noviembre de 14 a 17 h: de la idea a una solución funcional con IA. [Ver WeekClass](/weekendclass)" },
    { k: ["confían", "confian", "clientes", "casos"], a: "Trabajamos con Mutual Eco, el Instituto Bioquímico Privado, SIL, CeCIP, American English Institute, Dr Tecno, Aroma, Unimédica, FEMER, la Municipalidad de Paraná y más. [Ver casos](/confian)" },
  ];

  const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  function localAnswer(q) {
    const n = norm(q);
    let best = null, score = 0;
    LOCAL.forEach((e) => {
      const s = e.k.reduce((acc, k) => acc + (n.includes(norm(k)) ? k.length : 0), 0);
      if (s > score) { score = s; best = e; }
    });
    return best ? best.a : "Puedo contarte sobre los cursos, la Inteligencia Operativa, el equipo y cómo inscribirte. Si preferís hablar con una persona, escribinos por WhatsApp. [WhatsApp cursos](" + WA_CURSOS + ") [WhatsApp empresas](" + WA_EMPRESAS + ")";
  }

  /* ---------- Estado ---------- */
  let history = [];
  try { history = JSON.parse(sessionStorage.getItem(STORE) || "[]"); } catch (e) {}
  const save = () => { try { sessionStorage.setItem(STORE, JSON.stringify(history.slice(-20))); } catch (e) {} };
  let state = "idle";
  let speakReplies = false;
  let level = 0; // nivel de audio 0..1 para el orbe

  /* ---------- DOM ---------- */
  const icon = {
    mic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>',
    send: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    voice: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"/></svg>',
    reset: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg>',
  };
  // Whattson, el robot asistente de IEC, armado por piezas para animarlo
  const W = "/img/whattson/";
  const bot = (size) => `<span class="wh wh--${size}" aria-hidden="true">
          <span class="wh__float">
            <img class="wh__arm wh__arm--rest" src="${W}arm-rest.png" alt="">
            <img class="wh__body" src="${W}body.png" alt="">
            <i class="wh__core"></i>
            <span class="wh__head">
              <img src="${W}head.png" alt="">
              <svg class="wh__face" viewBox="0 0 112 76">
                <path class="wh__corner" d="M10 18v-6a4 4 0 0 1 4-4h8M90 8h8a4 4 0 0 1 4 4v6M102 58v6a4 4 0 0 1-4 4h-8M22 68h-8a4 4 0 0 1-4-4v-6"/>
                <g class="wh__eyes">
                  <g class="wh__eye wh__eye--l"><path class="wh__happy" d="M27 42 Q37 29 47 42"/><circle class="wh__dot" cx="37" cy="37" r="7"/></g>
                  <g class="wh__eye wh__eye--r"><path class="wh__happy" d="M65 42 Q75 29 85 42"/><circle class="wh__dot" cx="75" cy="37" r="7"/></g>
                </g>
                <rect class="wh__mouth" x="48" y="52" width="16" height="5" rx="2.5"/>
              </svg>
            </span>
            <img class="wh__arm wh__arm--wave" src="${W}arm-wave.png" alt="">
          </span>
          <i class="wh__shadow"></i>
        </span>`;
  const root = document.createElement("div");
  root.className = "ai";
  root.dataset.state = "idle";
  root.innerHTML = `
    <div class="ai__dock">
      <button class="ai__pill" type="button" aria-expanded="false" aria-controls="ai-panel">
        ${bot("sm")}
        <span class="ai__hint"><b>Preguntale a Whattson</b><span class="ai__rot" aria-hidden="true"><span>${SUGGESTIONS[0]}</span></span></span>
        <kbd aria-hidden="true">/</kbd>
      </button>
      <button class="ai__quick" type="button" aria-label="Preguntar por voz">${icon.mic}</button>
    </div>
    <section class="ai__panel" id="ai-panel" role="dialog" aria-modal="false" aria-label="Whattson, asistente de consultas IEC" hidden>
      <div class="ai__head">
        ${bot("lg")}
        <div class="ai__title">
          <span class="ai__k">Whattson · Asistente IEC</span>
          <strong class="ai__status" aria-live="polite">¿En qué te ayudo?</strong>
        </div>
        <div class="ai__tools">
          <button class="ai__icon ai__voice" type="button" aria-pressed="false" aria-label="Responder en voz alta" title="Responder en voz alta">${icon.voice}</button>
          <button class="ai__icon ai__reset" type="button" aria-label="Nueva conversación" title="Nueva conversación">${icon.reset}</button>
          <button class="ai__icon ai__close" type="button" aria-label="Cerrar asistente">${icon.close}</button>
        </div>
      </div>
      <div class="ai__log" aria-live="polite"></div>
      <div class="ai__chips"></div>
      <form class="ai__form">
        <button class="ai__mic" type="button" aria-label="Hablar">${icon.mic}<span class="ai__wave" aria-hidden="true"><i></i><i></i><i></i></span></button>
        <input class="ai__input" type="text" autocomplete="off" maxlength="600" placeholder="Escribí tu consulta o tocá el micrófono" aria-label="Tu consulta">
        <button class="ai__send" type="submit" aria-label="Enviar">${icon.send}</button>
      </form>
      <p class="ai__note">Respuestas generadas con IA. Confirmá fechas e inscripciones por WhatsApp.</p>
    </section>`;
  document.body.appendChild(root);

  const $ = (s) => root.querySelector(s);
  const pill = $(".ai__pill"), panel = $(".ai__panel"), log = $(".ai__log"), chips = $(".ai__chips");
  const form = $(".ai__form"), input = $(".ai__input"), statusEl = $(".ai__status");
  const micBtn = $(".ai__mic"), quickBtn = $(".ai__quick"), voiceBtn = $(".ai__voice");
  if (!SR) { micBtn.disabled = true; micBtn.title = "Tu navegador no permite dictar: escribí tu consulta"; quickBtn.hidden = true; }
  if (!canSpeak) voiceBtn.hidden = true;

  const STATUS = { idle: "¿En qué te ayudo?", listening: "Te escucho…", thinking: "Pensando…", speaking: "Respondiendo…" };
  function setState(s) {
    state = s;
    root.dataset.state = s;
    statusEl.textContent = STATUS[s];
  }

  /* ---------- Sugerencias que rotan en la isla ---------- */
  const rot = $(".ai__rot");
  let ri = 0;
  if (!reduced) {
    setInterval(() => {
      if (root.classList.contains("is-open")) return;
      ri = (ri + 1) % SUGGESTIONS.length;
      const next = document.createElement("span");
      next.textContent = SUGGESTIONS[ri];
      next.className = "is-next";
      rot.appendChild(next);
      requestAnimationFrame(() => {
        rot.firstElementChild.classList.add("is-out");
        next.classList.remove("is-next");
      });
      setTimeout(() => { if (rot.children.length > 1) rot.firstElementChild.remove(); }, 600);
    }, 3800);
  }
  window.addEventListener("scroll", () => root.classList.toggle("is-compact", window.scrollY > 160), { passive: true });

  /* ---------- Mensajes ---------- */
  const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;
  const safeHref = (h) => /^\/[\w\-./?=&#]*$/.test(h) || /^https:\/\/wa\.me\/\d+/.test(h) || /^https:\/\/www\.(instagram|linkedin)\.com\//.test(h) || /^mailto:/.test(h);
  function renderText(el, text) {
    el.textContent = "";
    const body = document.createElement("p");
    const links = [];
    let last = 0;
    text.replace(LINK, (m, label, href, idx) => {
      body.append(text.slice(last, idx));
      if (safeHref(href)) links.push([label, href]); else body.append(label);
      last = idx + m.length;
      return m;
    });
    body.append(text.slice(last).replace(/\[[^\]]*$/, ""));
    el.appendChild(body);
    if (links.length) {
      const row = document.createElement("div");
      row.className = "ai__links";
      links.forEach(([label, href]) => {
        const a = document.createElement("a");
        a.href = href;
        a.textContent = label;
        if (href.startsWith("http")) { a.target = "_blank"; a.rel = "noopener"; }
        row.appendChild(a);
      });
      el.appendChild(row);
    }
  }
  function addMsg(role, text) {
    const el = document.createElement("div");
    el.className = `ai__msg ai__msg--${role}`;
    if (role === "assistant") renderText(el, text); else el.textContent = text;
    log.appendChild(el);
    log.scrollTop = log.scrollHeight;
    return el;
  }
  function renderChips() {
    chips.textContent = "";
    const pool = history.length ? SUGGESTIONS.slice(2, 5) : SUGGESTIONS.slice(0, 4);
    pool.forEach((s) => {
      const b = document.createElement("button");
      b.type = "button";
      b.textContent = s;
      b.addEventListener("click", () => ask(s, false));
      chips.appendChild(b);
    });
  }
  function renderHistory() {
    log.textContent = "";
    if (!history.length) {
      addMsg("assistant", "¡Hola! Soy Whattson, el robot asistente del Ecosistema IEC & Co+nexus. Preguntame por cursos, fechas, Inteligencia Operativa o cómo inscribirte. Podés escribir o hablarme.");
    }
    history.forEach((m) => addMsg(m.role, m.content));
    renderChips();
  }

  /* ---------- Consulta ---------- */
  let busy = false;
  async function ask(text, byVoice) {
    text = text.trim();
    if (!text || busy) return;
    busy = true;
    if (byVoice && canSpeak) setVoice(true);
    stopSpeaking();
    history.push({ role: "user", content: text });
    save();
    addMsg("user", text);
    input.value = "";
    chips.textContent = "";
    setState("thinking");
    const el = addMsg("assistant", "");
    el.classList.add("is-typing");
    let answer = "";
    try {
      const r = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages: history }) });
      if (!r.ok || !r.body) throw new Error(r.status === 503 ? "sin-clave" : "error-" + r.status);
      const reader = r.body.getReader();
      const dec = new TextDecoder();
      let buf = "";
      for (;;) {
        const { value, done } = await reader.read();
        if (done) break;
        buf += dec.decode(value, { stream: true });
        const parts = buf.split("\n\n");
        buf = parts.pop();
        for (const p of parts) {
          const line = p.trim();
          if (!line.startsWith("data:")) continue;
          const ev = JSON.parse(line.slice(5));
          if (ev.error && !answer) throw new Error(ev.error);
          if (ev.t) { answer += ev.t; el.classList.remove("is-typing"); renderText(el, answer); log.scrollTop = log.scrollHeight; }
        }
      }
      if (!answer) throw new Error("empty");
    } catch (e) {
      answer = localAnswer(text);
      // Avisar que respondió la base local, no la IA
      const note = root.querySelector(".ai__note");
      note.classList.add("is-offline");
      note.textContent = e.message === "sin-clave"
        ? "Modo básico: la IA no está conectada (falta GEMINI_API_KEY en el servidor)."
        : "Modo básico: la IA no respondió (" + e.message + "). Contesto con la información del sitio.";
      console.warn("Whattson: respuesta local por", e.message);
      el.classList.remove("is-typing");
      renderText(el, answer);
    }
    history.push({ role: "assistant", content: answer });
    save();
    renderChips();
    busy = false;
    if (speakReplies) speak(answer); else setState("idle");
  }

  /* ---------- Voz: dictado ---------- */
  let rec = null, micStream = null, analyser = null, audioCtx = null;
  async function startMeter() {
    try {
      micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      analyser = audioCtx.createAnalyser();
      analyser.fftSize = 256;
      audioCtx.createMediaStreamSource(micStream).connect(analyser);
    } catch (e) { analyser = null; }
  }
  function stopMeter() {
    if (micStream) micStream.getTracks().forEach((t) => t.stop());
    if (audioCtx) audioCtx.close();
    micStream = analyser = audioCtx = null;
  }
  function listen() {
    if (!SR) return;
    if (rec) { rec.stop(); return; }
    open();
    stopSpeaking();
    rec = new SR();
    rec.lang = "es-AR";
    rec.interimResults = true;
    rec.maxAlternatives = 1;
    let finalText = "";
    rec.onresult = (e) => {
      let interim = "";
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const t = e.results[i][0].transcript;
        if (e.results[i].isFinal) finalText += t; else interim += t;
      }
      input.value = (finalText + interim).trim();
    };
    rec.onerror = (e) => {
      if (e.error === "not-allowed" || e.error === "service-not-allowed") statusEl.textContent = "Activá el permiso del micrófono para hablarme";
    };
    rec.onend = () => {
      rec = null;
      stopMeter();
      root.classList.remove("is-listening");
      if (finalText.trim() || input.value.trim()) ask(finalText.trim() || input.value, true);
      else if (state === "listening") setState("idle");
    };
    root.classList.add("is-listening");
    setState("listening");
    startMeter();
    rec.start();
  }

  /* ---------- Voz: respuestas habladas ---------- */
  function pickVoice() {
    const voices = speechSynthesis.getVoices();
    return voices.find((v) => /es-AR/i.test(v.lang)) || voices.find((v) => /es-(419|US|MX)/i.test(v.lang)) || voices.find((v) => /^es/i.test(v.lang));
  }
  function speak(text) {
    if (!canSpeak) { setState("idle"); return; }
    const plain = text.replace(LINK, "$1").replace(/https?:\/\/\S+/g, "");
    const u = new SpeechSynthesisUtterance(plain);
    const v = pickVoice();
    if (v) u.voice = v;
    u.lang = v ? v.lang : "es-AR";
    u.rate = 1.04;
    u.onstart = () => setState("speaking");
    u.onboundary = () => { level = 0.9; };
    u.onend = u.onerror = () => { if (state === "speaking") setState("idle"); };
    speechSynthesis.speak(u);
  }
  function stopSpeaking() { if (canSpeak) speechSynthesis.cancel(); }
  function setVoice(on) {
    speakReplies = on;
    voiceBtn.setAttribute("aria-pressed", String(on));
    if (!on) stopSpeaking();
  }

  /* ---------- Abrir y cerrar ---------- */
  function open() {
    if (root.classList.contains("is-open")) return;
    renderHistory();
    panel.hidden = false;
    void panel.offsetWidth; // aplica el estado inicial antes de animar
    requestAnimationFrame(() => root.classList.add("is-open"));
    pill.setAttribute("aria-expanded", "true");
    setTimeout(() => input.focus({ preventScroll: true }), 250);
    setTimeout(() => greet(bigBot), 300);
  }
  function close() {
    if (!root.classList.contains("is-open")) return;
    if (rec) rec.abort();
    stopSpeaking();
    root.classList.remove("is-open");
    pill.setAttribute("aria-expanded", "false");
    setState("idle");
    setTimeout(() => { if (!root.classList.contains("is-open")) panel.hidden = true; }, 450);
    pill.focus({ preventScroll: true });
  }
  pill.addEventListener("click", open);
  quickBtn.addEventListener("click", listen);
  micBtn.addEventListener("click", listen);
  $(".ai__close").addEventListener("click", close);
  voiceBtn.addEventListener("click", () => setVoice(!speakReplies));
  $(".ai__reset").addEventListener("click", () => { history = []; save(); stopSpeaking(); renderHistory(); input.focus(); });
  form.addEventListener("submit", (e) => { e.preventDefault(); ask(input.value, false); });
  document.addEventListener("keydown", (e) => {
    const typing = /INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName) || document.activeElement.isContentEditable;
    if (e.key === "/" && !typing) { e.preventDefault(); open(); }
    if (e.key === "Escape" && root.classList.contains("is-open")) close();
  });
  document.addEventListener("pointerdown", (e) => { if (root.classList.contains("is-open") && !root.contains(e.target)) close(); });

  /* ---------- Nivel de audio: mueve la boca, la luz del pecho y las orejas de Whattson ---------- */
  const data = new Uint8Array(128);
  let smooth = 0, tt = 0;
  function frame() {
    requestAnimationFrame(frame);
    if (document.hidden) return;
    tt += 0.1;
    let target = 0;
    if (state === "listening") {
      if (analyser) {
        analyser.getByteTimeDomainData(data);
        let sum = 0;
        for (let i = 0; i < data.length; i++) { const v = (data[i] - 128) / 128; sum += v * v; }
        target = Math.min(1, Math.sqrt(sum / data.length) * 6);
      } else target = 0.4 + Math.sin(tt) * 0.2;
    } else if (state === "speaking") { level *= 0.88; target = 0.2 + level * 0.8; }
    else if (state === "thinking") target = 0.3;
    smooth += (target - smooth) * 0.25;
    root.style.setProperty("--ai-level", smooth.toFixed(3));
  }
  frame();

  // Saludo con el brazo al abrir el panel y cada tanto en la isla
  function greet(el) {
    if (reduced || !el) return;
    el.classList.remove("is-greeting");
    void el.offsetWidth;
    el.classList.add("is-greeting");
    setTimeout(() => el.classList.remove("is-greeting"), 2600);
  }
  const smallBot = root.querySelector(".wh--sm"), bigBot = root.querySelector(".wh--lg");
  setTimeout(() => greet(smallBot), 1200);
  setInterval(() => { if (!root.classList.contains("is-open")) greet(smallBot); }, 9000);
})();
