// Servidor local: sirve public/ con URLs limpias (como Vercel) y la función /api/chat.
// Uso: node dev-server.mjs  (con GEMINI_API_KEY en .env.local para usar la IA real)
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Variables locales (GEMINI_API_KEY, GEMINI_MODEL) desde .env.local, que no se sube al repositorio
const HERE = path.dirname(fileURLToPath(import.meta.url));
const envFile = path.join(HERE, ".env.local");
if (fs.existsSync(envFile)) {
  for (const line of fs.readFileSync(envFile, "utf8").split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
}
const { default: chat } = await import("./api/chat.js");

const ROOT = path.join(HERE, "public");
const PORT = Number(process.env.PORT) || 4321;
const TYPES = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".json": "application/json", ".png": "image/png", ".jpg": "image/jpeg", ".webp": "image/webp", ".svg": "image/svg+xml", ".mp4": "video/mp4", ".xml": "application/xml", ".txt": "text/plain" };

function resolveFile(urlPath) {
  const clean = path.normalize(decodeURIComponent(urlPath)).replace(/^([/\\])+/, "");
  const candidates = [clean, clean + ".html", path.join(clean, "index.html")];
  for (const c of candidates) {
    const full = path.join(ROOT, c);
    if (full.startsWith(ROOT) && fs.existsSync(full) && fs.statSync(full).isFile()) return full;
  }
  return null;
}

http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  if (url.pathname === "/api/chat") {
    let raw = "";
    for await (const chunk of req) raw += chunk;
    try { req.body = raw ? JSON.parse(raw) : {}; } catch { req.body = {}; }
    res.status = (code) => { res.statusCode = code; return res; };
    res.json = (obj) => { res.setHeader("Content-Type", "application/json"); res.end(JSON.stringify(obj)); };
    return chat(req, res);
  }
  const file = resolveFile(url.pathname);
  if (!file) {
    res.writeHead(404, { "Content-Type": TYPES[".html"] });
    return fs.createReadStream(path.join(ROOT, "404.html")).pipe(res);
  }
  const type = TYPES[path.extname(file)] || "application/octet-stream";
  const stat = fs.statSync(file);
  const range = req.headers.range;
  // Los videos necesitan respuestas parciales para poder reproducirse
  if (range && type === "video/mp4") {
    const [s, e] = range.replace("bytes=", "").split("-");
    const start = Number(s), end = e ? Number(e) : stat.size - 1;
    res.writeHead(206, { "Content-Type": type, "Content-Range": `bytes ${start}-${end}/${stat.size}`, "Accept-Ranges": "bytes", "Content-Length": end - start + 1 });
    return fs.createReadStream(file, { start, end }).pipe(res);
  }
  res.writeHead(200, { "Content-Type": type, "Content-Length": stat.size, "Cache-Control": "no-cache" });
  fs.createReadStream(file).pipe(res);
}).listen(PORT, () => console.log(`IEC en http://localhost:${PORT}`));
