// Arma las páginas finales de public/ a partir de fragmentos con encabezado y pie comunes.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import crypto from "node:crypto";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(ROOT, "src", "pages");
const OUT = path.join(ROOT, "public");
const SITE = "https://www.iec-ia.com.ar";

// Versión por contenido: los navegadores guardan /assets una semana, así cada cambio se descarga de nuevo
const ver = (file) => "/assets/" + file + "?v=" + crypto.createHash("md5").update(fs.readFileSync(path.join(OUT, "assets", file))).digest("hex").slice(0, 8);

const NAV = [
  ["capacitaciones", "/capacitaciones", "Capacitaciones"],
  ["io", "/inteligencia-operativa", "Inteligencia Operativa"],
  ["quienes", "/quienes-somos", "Quiénes somos"],
  ["confian", "/confian", "Confían en nosotros"],
  ["novedades", "/novedades", "Novedades"],
  ["contacto", "/contacto", "Contacto"],
];

const arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
const waIcon = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4C2.7 15.6 2.2 13.8 2.2 12 2.2 6.6 6.6 2.2 12 2.2c2.6 0 5.1 1 6.9 2.9 1.8 1.8 2.9 4.3 2.9 6.9 0 5.4-4.4 9.8-9.8 9.8zm8.4-18.2C18.2 1.3 15.2 0 12 0 5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6c1.8 1 3.8 1.5 5.8 1.5 6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.6-8.3z"/></svg>';

// Redes sociales de IEC
const IG = "https://www.instagram.com/iecparana/";
const LI = "https://www.linkedin.com/company/iec-instituto-privado-en-economia-del-conocimiento/";
const IG_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>';
const LI_ICON = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.2 8.65 21 11 21 14v7h-4v-6.2c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.6-2.38 3.27V21H9z"/></svg>';
const SOCIAL = `<div class="social">
          <a class="social__btn" href="${IG}" target="_blank" rel="noopener" aria-label="Instagram de IEC (@iecparana)" title="Instagram">${IG_ICON}</a>
          <a class="social__btn" href="${LI}" target="_blank" rel="noopener" aria-label="LinkedIn de IEC" title="LinkedIn">${LI_ICON}</a>
        </div>`;


const TRANSITION = `
  <div class="pt" aria-hidden="true">
    <div class="pt__panel"></div>
    <div class="pt__mark"><span class="pt__ring"></span><img src="/img/logos/iec.webp" alt="" width="64" height="64"></div>
  </div>`;

const INTRO = `
  <div class="intro" role="status" aria-label="Cargando IEC">
    <div class="intro__bg">
      <div class="intro__grid"></div>
      <canvas class="intro__net" aria-hidden="true"></canvas>
    </div>
    <div class="intro__core">
      <div class="intro__logo">
        <span class="intro__ring"></span><span class="intro__ring intro__ring--2"></span>
        <div class="lg" aria-hidden="true">
          <img class="lg__lines lg__lines--glow" src="/img/logos/iec-lines.webp" alt="" width="512" height="512">
          <img class="lg__lines" src="/img/logos/iec-lines.webp" alt="" width="512" height="512">
          <img class="lg__full" src="/img/logos/iec-512.webp" alt="" width="512" height="512">
          <span class="lg__glint"></span>
        </div>
        <span class="intro__flash"></span>
      </div>
      <div class="intro__name">Ecosistema IEC &amp; Co+nexus</div>
      <div class="intro__tag">Instituto privado en Economía del Conocimiento</div>
      <div class="intro__status">
        <div class="intro__line"><span data-intro-label>Robótica</span><span data-intro-pct>0%</span></div>
        <div class="intro__bar"><i></i></div>
      </div>
    </div>
    <button class="intro__skip" type="button">Saltar</button>
  </div>`;

function header(cur) {
  const links = NAV.map(([k, href, label]) => `<a href="${href}"${k === cur ? ' aria-current="page"' : ""}>${label}</a>`).join("\n        ");
  const mob = NAV.map(([k, href, label], i) => `<a href="${href}"${k === cur ? ' aria-current="page"' : ""}>${label} <small>0${i + 1}</small></a>`).join("\n      ");
  return `
  <a class="skip" href="#main">Saltar al contenido</a>
  <header class="site-header">
    <div class="wrap">
      <a class="brand" href="/" aria-label="IEC, ir al inicio">
        <img src="/img/logos/iec.webp" alt="" width="40" height="40">
        <span>IEC<small>Economía del Conocimiento</small></span>
      </a>
      <nav class="nav" aria-label="Principal">
        ${links}
      </nav>
      <div class="header-cta">
        ${SOCIAL}
        <a class="btn btn--ghost" href="https://wa.me/5493434664964?text=Hola%20IEC%2C%20quiero%20un%20diagn%C3%B3stico%20de%20Inteligencia%20Operativa" target="_blank" rel="noopener">Para empresas</a>
        <a class="btn" href="/capacitaciones">Inscribite</a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Abrir menú"><span></span></button>
      </div>
    </div>
  </header>
  <div class="mobile-menu" id="mobile-menu">
    <nav aria-label="Menú móvil">
      ${mob}
    </nav>
    <div class="mobile-menu__foot">
      ${SOCIAL}
      <a class="btn" href="https://wa.me/5493434295937?text=Hola%20IEC%2C%20quiero%20informaci%C3%B3n" target="_blank" rel="noopener">Consultar por WhatsApp</a>
    </div>
  </div>`;
}

const FOOTER = `
  <footer class="site-footer">
    <div class="wrap">
      <div class="footer-top">
        <div>
          <a class="brand" href="/"><img src="/img/logos/iec.webp" alt="" width="40" height="40"><span>IEC<small>Economía del Conocimiento</small></span></a>
          <p>Instituto privado en Economía del Conocimiento. Robótica, Inteligencia Artificial, capacitación e Inteligencia Operativa para personas y organizaciones de Paraná y la región.</p>
          <div class="footer-social">
            <a href="${IG}" target="_blank" rel="noopener">${IG_ICON}<span>Instagram<small>@iecparana</small></span></a>
            <a href="${LI}" target="_blank" rel="noopener">${LI_ICON}<span>LinkedIn<small>IEC · Economía del Conocimiento</small></span></a>
          </div>
        </div>
        <div>
          <h4>Aprender</h4>
          <ul>
            <li><a href="/capacitaciones">Todas las capacitaciones</a></li>
            <li><a href="/capacitaciones?area=ia">Inteligencia Artificial</a></li>
            <li><a href="/capacitaciones?area=programacion">Programación</a></li>
            <li><a href="/capacitaciones?area=chicos">Robótica, teens y kids</a></li>
          </ul>
        </div>
        <div>
          <h4>Ecosistema</h4>
          <ul>
            <li><a href="/inteligencia-operativa">Inteligencia Operativa</a></li>
            <li><a href="/inteligencia-operativa#smarteo">SMARTEO 3.0</a></li>
            <li><a href="/quienes-somos#factoria">La FactorIA</a></li>
            <li><a href="/confian">Confían en nosotros</a></li>
          </ul>
        </div>
        <div>
          <h4>Contacto</h4>
          <ul>
            <li><a href="https://maps.google.com/?q=Gualeguaych%C3%BA+449,+Paran%C3%A1,+Entre+R%C3%ADos" target="_blank" rel="noopener">Gualeguaychú 449, Paraná</a></li>
            <li><a href="mailto:contacto@iec-ia.com.ar">contacto@iec-ia.com.ar</a></li>
            <li><a href="https://wa.me/5493434295937" target="_blank" rel="noopener">WhatsApp cursos</a></li>
            <li><a href="${IG}" target="_blank" rel="noopener">Instagram @iecparana</a></li>
            <li><a href="${LI}" target="_blank" rel="noopener">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-word" aria-hidden="true">IEC · IA · IO</div>
      <div class="footer-bottom">
        <span>© <span data-year>2026</span> IEC · Instituto privado en Economía del Conocimiento</span>
        <span>Paraná, Entre Ríos</span>
      </div>
    </div>
  </footer>
  <a class="wa-float" href="https://wa.me/5493434295937?text=Hola%20IEC%2C%20quiero%20informaci%C3%B3n" target="_blank" rel="noopener" aria-label="Escribinos por WhatsApp">${waIcon}</a>`;

function page(meta, main) {
  const url = SITE + (meta.path === "/" ? "/" : meta.path);
  const jsonld = meta.jsonld ? `\n  <script type="application/ld+json">\n${fs.readFileSync(path.join(SRC, meta.jsonld), "utf8").trim()}\n  </script>` : "";
  const introGuard = meta.intro ? `\n  <script>try{if(sessionStorage.getItem("iec-intro"))document.documentElement.classList.add("intro-seen")}catch(e){}</script>` : "";
  return `<!doctype html>
<html lang="es-AR" class="no-js">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${meta.title}</title>${meta.path === "/404" ? '\n  <meta name="robots" content="noindex">' : ""}
  <meta name="description" content="${meta.description}">
  <link rel="canonical" href="${url}">
  <meta name="theme-color" content="#050505">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="es_AR">
  <meta property="og:site_name" content="IEC · Instituto privado en Economía del Conocimiento">
  <meta property="og:url" content="${url}">
  <meta property="og:title" content="${meta.ogTitle || meta.title}">
  <meta property="og:description" content="${meta.description}">
  <meta property="og:image" content="${SITE}/og-image.jpg">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="icon" type="image/png" href="/favicon.png">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap">
  <link rel="stylesheet" href="${ver("site.css")}">${introGuard}
  <script>try{var n=+sessionStorage.getItem("iec-nav");sessionStorage.removeItem("iec-nav");if(n&&Date.now()-n<3000)document.documentElement.classList.add("pt-enter")}catch(e){}</script>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-R817QWH97R"></script>
  <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-R817QWH97R');</script>${jsonld}
</head>
<body>${meta.intro ? INTRO : ""}${TRANSITION}${header(meta.current)}

${main.replace("{{last-call}}", fs.readFileSync(path.join(SRC, "_last-call.html"), "utf8")).replaceAll("{{arrow}}", arrow).trim()}
${FOOTER}

  <script src="${ver("site.js")}" defer></script>
  <script src="${ver("assistant.js")}" defer></script>${meta.hero3d ? `\n  <script type="module" src="${ver("hero3d.js")}"></script>` : ""}
</body>
</html>
`;
}

for (const file of fs.readdirSync(SRC).filter((f) => f.endsWith(".html") && !f.startsWith("_"))) {
  // Acepta archivos con finales de línea de Windows (CRLF)
  const raw = fs.readFileSync(path.join(SRC, file), "utf8").replace(/\r\n/g, "\n");
  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  const meta = {};
  m[1].split("\n").forEach((l) => { const i = l.indexOf(":"); meta[l.slice(0, i).trim()] = l.slice(i + 1).trim(); });
  meta.intro = meta.intro === "yes";
  meta.hero3d = meta.hero3d === "yes";
  fs.writeFileSync(path.join(OUT, file), page(meta, m[2]));
  console.log("ok", file);
}
