// Comportamiento compartido: intro con el logo, encabezado, menú móvil,
// titulares cinéticos, revelado al scroll, contadores, historia de la portada,
// filtros de capacitaciones y formulario de contacto.
(function () {
  const doc = document.documentElement;
  doc.classList.remove("no-js");
  const body = document.body;
  const header = document.querySelector(".site-header");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Intro con el logo de IEC (una vez por sesión) ---------- */
  const intro = document.querySelector(".intro");
  if (intro && !doc.classList.contains("intro-seen")) {
    const bar = intro.querySelector(".intro__bar i");
    const label = intro.querySelector("[data-intro-label]");
    const pct = intro.querySelector("[data-intro-pct]");
    const steps = ["Robótica", "Inteligencia Artificial", "Capacitación en IA", "Inteligencia Operativa"];
    const duration = reduced ? 300 : 3000;
    const t0 = performance.now();
    body.style.overflow = "hidden";
    doc.classList.add("intro-running");
    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      try { sessionStorage.setItem("iec-intro", "1"); } catch (e) {}
      body.style.overflow = "";
      intro.classList.add("is-leaving");
      document.dispatchEvent(new CustomEvent("iec:intro-done"));
      // El logo de la intro vuela hasta el logo del encabezado
      const logo = intro.querySelector(".intro__logo");
      const target = document.querySelector(".site-header .brand img");
      const done = () => { doc.classList.remove("intro-running"); intro.remove(); };
      if (logo && target && !reduced) {
        const a = logo.getBoundingClientRect(), b = target.getBoundingClientRect();
        const dx = b.left + b.width / 2 - (a.left + a.width / 2);
        const dy = b.top + b.height / 2 - (a.top + a.height / 2);
        logo.style.transition = "transform .95s cubic-bezier(.7,0,.2,1)";
        logo.style.transform = `translate(${dx}px, ${dy}px) scale(${b.width / a.width})`;
        setTimeout(done, 980);
      } else {
        done();
      }
    };
    const tick = (now) => {
      if (finished) return;
      const k = Math.min(1, (now - t0) / duration);
      const e = 1 - Math.pow(1 - k, 3);
      if (bar) bar.style.width = `${e * 100}%`;
      if (pct) pct.textContent = `${Math.round(e * 100)}%`;
      if (label) label.textContent = steps[Math.min(steps.length - 1, Math.floor(e * steps.length))];
      if (k < 1) requestAnimationFrame(tick);
      else setTimeout(finish, 250);
    };
    requestAnimationFrame(tick);
    intro.querySelector(".intro__skip")?.addEventListener("click", finish);
    if (!reduced) neuralNet(intro);
  } else if (intro) {
    intro.remove();
  }

  /* ---------- Red neuronal de la intro: señales que viajan capa a capa hasta el logo ---------- */
  function neuralNet(intro) {
    const canvas = intro.querySelector(".intro__net");
    const logo = intro.querySelector(".intro__logo");
    if (!canvas || !logo) return;
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rnd = (a, b) => a + Math.random() * (b - a);
    const angDist = (a, b) => { const d = Math.abs(a - b) % (Math.PI * 2); return d > Math.PI ? Math.PI * 2 - d : d; };
    let w, h, cx, cy, lr, layers = [], edges = [];

    function build() {
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const r = logo.getBoundingClientRect();
      cx = r.left + r.width / 2; cy = r.top + r.height / 2; lr = r.width / 2;
      const small = w < 700;
      const counts = small ? [10, 14, 18, 22] : [12, 18, 24, 30, 36, 42];
      const rMax = Math.min(Math.hypot(w, h) / 2, Math.max(w, h) * (small ? 0.6 : 0.5));
      layers = counts.map((n, i) => {
        const k = (i + 1) / counts.length;
        const radius = lr * 1.3 + (rMax - lr * 1.3) * Math.pow(k, 1.25);
        const off = Math.random() * Math.PI * 2;
        return Array.from({ length: n }, (_, j) => ({
          layer: i, ang: off + (j / n) * Math.PI * 2 + rnd(-0.12, 0.12), rr: radius * rnd(0.92, 1.08),
          x: 0, y: 0, act: 0, size: rnd(2.2, 3.4) - i * 0.18, ph: Math.random() * 6.28, out: [],
        }));
      });
      // Cada neurona se conecta con las 2 o 3 más cercanas de la capa interior; la primera capa, con el logo
      edges = [];
      layers.forEach((ring, i) => ring.forEach((n) => {
        if (i === 0) {
          const e = { a: n, b: { x: 0, y: 0, logo: true, ang: n.ang }, act: 0 };
          edges.push(e); n.out.push(e);
          return;
        }
        const inner = layers[i - 1].slice().sort((p, q) => angDist(p.ang, n.ang) - angDist(q.ang, n.ang)).slice(0, i > 2 ? 2 : 3);
        inner.forEach((m) => { const e = { a: n, b: m, act: 0 }; edges.push(e); n.out.push(e); });
      }));
    }
    function place(time) {
      layers.forEach((ring) => ring.forEach((n) => {
        const breathe = Math.sin(time * 0.0012 + n.ph) * 4;
        n.x = cx + Math.cos(n.ang) * (n.rr + breathe);
        n.y = cy + Math.sin(n.ang) * (n.rr + breathe);
      }));
      edges.forEach((e) => { if (e.b.logo) { e.b.x = cx + Math.cos(e.b.ang) * lr * 0.98; e.b.y = cy + Math.sin(e.b.ang) * lr * 0.98; } });
    }
    let pulses = [];
    function fire(node) {
      if (!node.out.length) return;
      pulses.push({ e: node.out[Math.floor(Math.random() * node.out.length)], p: 0, speed: rnd(1.8, 2.8) });
    }

    const t0 = performance.now();
    let last = t0, spawnAcc = 0, alive = true, logoGlow = 0;
    function frame(now) {
      if (!alive || !intro.isConnected) return;
      requestAnimationFrame(frame);
      const dt = Math.min(0.05, (now - last) / 1000); last = now;
      const el = (now - t0) / 1000;
      place(now);
      // Las señales nacen en la capa exterior
      spawnAcc += dt * (el < 0.4 ? 0 : el < 2.3 ? 26 : 10);
      const outer = layers[layers.length - 1];
      while (spawnAcc > 1) { spawnAcc -= 1; const n = outer[Math.floor(Math.random() * outer.length)]; n.act = 1; fire(n); }

      ctx.clearRect(0, 0, w, h);
      // Las capas aparecen desde afuera hacia adentro
      const appear = (i) => Math.max(0, Math.min(1, (el - (layers.length - 1 - i) * 0.09) / 0.45));

      // Conexiones
      ctx.lineWidth = 1;
      edges.forEach((e) => {
        const a = appear(e.a.layer);
        if (!a) return;
        e.act *= 0.92;
        const alpha = (0.16 + e.act * 0.6) * a;
        const g = ctx.createLinearGradient(e.a.x, e.a.y, e.b.x, e.b.y);
        g.addColorStop(0, `rgba(139,92,246,${alpha})`);
        g.addColorStop(1, `rgba(34,211,238,${alpha})`);
        ctx.strokeStyle = g;
        ctx.beginPath();
        ctx.moveTo(e.a.x, e.a.y);
        ctx.lineTo(e.a.x + (e.b.x - e.a.x) * a, e.a.y + (e.b.y - e.a.y) * a);
        ctx.stroke();
      });

      // Señales con estela
      const next = [];
      pulses.forEach((s) => {
        s.p += dt * s.speed;
        s.e.act = Math.max(s.e.act, 0.9);
        const { a, b } = s.e;
        const p = Math.min(1, s.p), q = Math.max(0, s.p - 0.22);
        const x = a.x + (b.x - a.x) * p, y = a.y + (b.y - a.y) * p;
        const tx = a.x + (b.x - a.x) * q, ty = a.y + (b.y - a.y) * q;
        const g = ctx.createLinearGradient(tx, ty, x, y);
        g.addColorStop(0, "rgba(34,211,238,0)"); g.addColorStop(1, "rgba(165,243,252,.95)");
        ctx.strokeStyle = g; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(tx, ty); ctx.lineTo(x, y); ctx.stroke();
        ctx.fillStyle = "rgba(224,250,255,.95)";
        ctx.beginPath(); ctx.arc(x, y, 2.1, 0, 6.283); ctx.fill();
        if (s.p >= 1) {
          if (b.logo) logoGlow = Math.min(1, logoGlow + 0.12);
          else { b.act = 1; if (Math.random() < 0.85) fire(b); }
        } else next.push(s);
      });
      pulses = next;

      // Neuronas: se iluminan al recibir una señal
      layers.forEach((ring, i) => {
        const a = appear(i);
        if (!a) return;
        ring.forEach((n) => {
          n.act *= 0.93;
          const r = n.size + n.act * 2.6;
          if (n.act > 0.05) {
            const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 6);
            g.addColorStop(0, `rgba(34,211,238,${0.5 * n.act * a})`); g.addColorStop(1, "rgba(34,211,238,0)");
            ctx.fillStyle = g; ctx.beginPath(); ctx.arc(n.x, n.y, r * 6, 0, 6.283); ctx.fill();
          }
          ctx.fillStyle = `rgba(${n.act > 0.3 ? "224,250,255" : "125,211,252"},${(0.55 + n.act * 0.45) * a})`;
          ctx.beginPath(); ctx.arc(n.x, n.y, r, 0, 6.283); ctx.fill();
        });
      });

      // Halo del logo, que se carga con cada señal que llega
      logoGlow *= 0.96;
      if (logoGlow > 0.02) {
        const g = ctx.createRadialGradient(cx, cy, lr * 0.8, cx, cy, lr * 1.9);
        g.addColorStop(0, `rgba(34,211,238,${0.35 * logoGlow})`); g.addColorStop(1, "rgba(34,211,238,0)");
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx, cy, lr * 1.9, 0, 6.283); ctx.fill();
      }
    }
    build();
    window.addEventListener("resize", build);
    requestAnimationFrame(frame);
    document.addEventListener("iec:intro-done", () => setTimeout(() => { alive = false; window.removeEventListener("resize", build); }, 1200), { once: true });
  }

  /* ---------- Transición entre pestañas ---------- */
  if (!reduced) {
    document.addEventListener("click", (e) => {
      const a = e.target.closest && e.target.closest("a[href]");
      if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (a.target && a.target !== "_self") return;
      if (a.hasAttribute("download")) return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin) return;
      // Anclas dentro de la misma página: sin cortina
      if (url.pathname === location.pathname && url.search === location.search) return;
      e.preventDefault();
      try { sessionStorage.setItem("iec-nav", String(Date.now())); } catch (err) {}
      doc.classList.add("pt-leave");
      setTimeout(() => { location.href = url.href; }, 520);
    });
    // Al volver con el botón atrás la página puede venir de caché: se quita la cortina
    window.addEventListener("pageshow", (e) => {
      if (e.persisted) doc.classList.remove("pt-leave", "pt-enter");
    });
    setTimeout(() => doc.classList.remove("pt-enter"), 1200);
  }

  /* ---------- Menú móvil ---------- */
  const toggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  function setMenu(open) {
    body.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    mobileMenu.toggleAttribute("inert", !open);
    body.style.overflow = open ? "hidden" : "";
  }
  if (toggle && mobileMenu) {
    mobileMenu.setAttribute("inert", "");
    toggle.addEventListener("click", () => setMenu(!body.classList.contains("menu-open")));
    mobileMenu.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && body.classList.contains("menu-open")) { setMenu(false); toggle.focus(); } });
  }

  /* ---------- Titulares cinéticos: cada palabra sube desde una máscara ---------- */
  document.querySelectorAll("[data-split]").forEach((el) => {
    let i = 0;
    const walk = (node) => {
      [...node.childNodes].forEach((n) => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach((part) => {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(" ")); return; }
            const w = document.createElement("span");
            w.className = "kw";
            const s = document.createElement("span");
            s.style.setProperty("--i", i++);
            s.textContent = part;
            w.appendChild(s);
            frag.appendChild(w);
          });
          n.replaceWith(frag);
        } else if (n.nodeType === 1 && n.tagName !== "BR") {
          walk(n);
        }
      });
    };
    walk(el);
    // El degradé se pinta por palabra para que no se corte con la máscara
    el.querySelectorAll(".text-gradient").forEach((g) => {
      if (!g.querySelector(".kw")) return;
      g.classList.remove("text-gradient");
      g.querySelectorAll(".kw > span").forEach((s) => s.classList.add("text-gradient"));
    });
  });

  /* ---------- Contadores ---------- */
  function countUp(el) {
    const target = parseFloat(el.dataset.count);
    const dec = +(el.dataset.dec || 0);
    const pre = el.dataset.prefix || "";
    const fmt = (v) => (dec ? v.toFixed(dec).replace(".", ",") : Math.round(v).toString());
    if (reduced) { el.textContent = pre + fmt(target); return; }
    const t0 = performance.now(), dur = 1400;
    const step = (t) => {
      const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 4);
      el.textContent = pre + fmt(target * e);
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  /* ---------- Revelado al hacer scroll ---------- */
  const watched = document.querySelectorAll(".reveal, [data-split], [data-count], .steps, .photos, .measure");
  if ("IntersectionObserver" in window && !reduced) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("is-in");
        if (e.target.dataset.count) countUp(e.target);
        io.unobserve(e.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    const start = () => watched.forEach((el) => { if (!el.closest(".chapter")) io.observe(el); });
    if (document.querySelector(".intro") && !doc.classList.contains("intro-seen")) document.addEventListener("iec:intro-done", start, { once: true });
    else start();
  } else {
    watched.forEach((el) => { el.classList.add("is-in"); if (el.dataset.count) countUp(el); });
  }

  /* ---------- Brillo que sigue al cursor sobre el vidrio ---------- */
  if (matchMedia("(hover: hover)").matches) {
    document.addEventListener("pointermove", (e) => {
      const g = e.target.closest && e.target.closest(".glass");
      if (!g) return;
      const r = g.getBoundingClientRect();
      g.style.setProperty("--lx", `${e.clientX - r.left}px`);
      g.style.setProperty("--ly", `${e.clientY - r.top}px`);
    });
  }

  /* ---------- Historia de la portada ---------- */
  const story = document.querySelector(".story");
  let storyUpdate = null;
  if (story) {
    const chapters = [...story.querySelectorAll(".chapter")];
    const pagerBtns = [...story.querySelectorAll(".story__pager button")];
    const bg = story.querySelector(".story__bg");
    const bar = story.querySelector(".story__bar i");
    const count = story.querySelector("[data-count-story]");
    const n = chapters.length;
    // Fondo y colores de partículas de cada capítulo, dentro de la paleta IEC
    const palette = [
      { bg: [5, 5, 5], glow: "34,211,238", pt: "#22d3ee", ac: "#8b5cf6" },
      { bg: [5, 10, 24], glow: "59,130,246", pt: "#60a5fa", ac: "#22d3ee" },
      { bg: [12, 7, 26], glow: "139,92,246", pt: "#a78bfa", ac: "#22d3ee" },
      { bg: [3, 16, 22], glow: "34,211,238", pt: "#22d3ee", ac: "#34d399" },
    ];
    const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
    let active = -1;

    storyUpdate = function () {
      const rect = story.getBoundingClientRect();
      const range = story.offsetHeight - window.innerHeight;
      const p = range > 0 ? Math.min(1, Math.max(0, -rect.top / range)) : 0;
      // Cada capítulo se sostiene un tramo y luego se transforma en el siguiente
      const x = p * (n - 1);
      const base = Math.min(Math.floor(x), n - 2);
      const t = base + smooth(0.35, 0.85, x - base);
      const idx = Math.min(n - 1, Math.round(t));

      const a = palette[Math.floor(t)], b = palette[Math.min(n - 1, Math.floor(t) + 1)], f = t - Math.floor(t);
      const c = a.bg.map((v, i) => Math.round(v + (b.bg[i] - v) * f));
      const glow = f < 0.5 ? a.glow : b.glow;
      if (bg) bg.style.background = `radial-gradient(60% 70% at 72% 50%, rgba(${glow},.16), transparent 70%), rgb(${c.join(",")})`;
      window.IEC_STORY = { t, color: f < 0.5 ? a.pt : b.pt, accent: f < 0.5 ? a.ac : b.ac };
      if (bar) bar.style.transform = `scaleX(${p})`;

      if (idx !== active) {
        const prev = active;
        chapters.forEach((ch, i) => {
          ch.classList.toggle("is-active", i === idx);
          ch.classList.toggle("is-leaving", i === prev && i !== idx);
          ch.classList.toggle("kw-in", i === idx);
          ch.setAttribute("aria-hidden", String(i !== idx));
          ch.toggleAttribute("inert", i !== idx);
        });
        setTimeout(() => { if (chapters[prev]) chapters[prev].classList.remove("is-leaving"); }, 450);
        pagerBtns.forEach((btn, i) => btn.setAttribute("aria-current", String(i === idx)));
        if (count) count.textContent = String(idx + 1).padStart(2, "0");
        active = idx;
      }
    };

    pagerBtns.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        const range = story.offsetHeight - window.innerHeight;
        const p = i === 0 ? 0 : Math.min(1, (i + 0.05) / (n - 1));
        window.scrollTo({ top: story.offsetTop + p * range, behavior: reduced ? "auto" : "smooth" });
      });
    });
  }

  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      if (storyUpdate) storyUpdate();
      if (header) header.classList.toggle("is-scrolled", window.scrollY > 12);
      ticking = false;
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();

  /* ---------- Filtros de capacitaciones ---------- */
  const filterBar = document.querySelector("[data-filters]");
  if (filterBar) {
    const courses = [...document.querySelectorAll(".course")];
    const empty = document.querySelector("[data-empty]");
    const chips = [...filterBar.querySelectorAll(".chip")];
    chips.forEach((chip) => {
      const f = chip.dataset.filter;
      const total = f === "todas" ? courses.length : courses.filter((c) => c.dataset.cat.split(" ").includes(f)).length;
      const sup = document.createElement("sup");
      sup.textContent = total;
      chip.appendChild(sup);
    });
    function apply(f, push) {
      let shown = 0;
      courses.forEach((c) => {
        const ok = f === "todas" || c.dataset.cat.split(" ").includes(f);
        c.hidden = !ok;
        if (ok) shown++;
      });
      chips.forEach((ch) => ch.setAttribute("aria-pressed", String(ch.dataset.filter === f)));
      if (empty) empty.hidden = shown > 0;
      if (push) history.replaceState(null, "", f === "todas" ? location.pathname : `${location.pathname}?area=${f}`);
    }
    filterBar.addEventListener("click", (e) => {
      const chip = e.target.closest(".chip");
      if (chip) apply(chip.dataset.filter, true);
    });
    const initial = new URLSearchParams(location.search).get("area");
    apply(chips.some((c) => c.dataset.filter === initial) ? initial : "todas", false);
  }

  /* ---------- Videos de alumnos: se reproducen solo cuando están a la vista ---------- */
  const videos = [...document.querySelectorAll("video[data-autoplay]")];
  if (videos.length && "IntersectionObserver" in window) {
    const vio = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        const v = e.target;
        if (e.isIntersecting && !reduced) { const p = v.play(); if (p && p.catch) p.catch(() => {}); }
        else v.pause();
      });
    }, { threshold: 0.35 });
    videos.forEach((v) => vio.observe(v));
  }
  document.querySelectorAll(".vid__sound").forEach((btn) => {
    btn.addEventListener("click", () => {
      const v = btn.closest(".vid").querySelector("video");
      const on = v.muted;
      // Solo un video con sonido a la vez
      videos.forEach((o) => { o.muted = true; });
      document.querySelectorAll(".vid__sound").forEach((b) => { b.setAttribute("aria-pressed", "false"); b.setAttribute("aria-label", "Activar sonido"); });
      v.muted = !on;
      if (on) { const p = v.play(); if (p && p.catch) p.catch(() => {}); }
      btn.setAttribute("aria-pressed", String(on));
      btn.setAttribute("aria-label", on ? "Silenciar" : "Activar sonido");
    });
  });

  /* ---------- Portada: video del ecosistema en el celular ---------- */
  const heroPhone = document.querySelector("[data-hero-phone]");
  if (heroPhone) {
    const hv = heroPhone.querySelector("video");
    let inView = false;
    const sound = heroPhone.querySelector(".hero-phone__sound");
    const fallback = heroPhone.querySelector(".hero-phone__fallback");
    const sync = () => {
      const introOn = doc.classList.contains("intro-running") || (document.querySelector(".intro") && !doc.classList.contains("intro-seen"));
      const show = inView && !document.hidden && !introOn;
      if (show && hv.paused && !hv.error && !reduced) { const p = hv.play(); if (p && p.catch) p.catch(() => {}); }
      if (!show && !hv.paused) hv.pause();
    };
    hv.addEventListener("error", () => { hv.hidden = true; fallback.hidden = false; sound.hidden = true; });
    sound.addEventListener("click", () => {
      const on = hv.muted;
      hv.muted = !on;
      if (on) { const p = hv.play(); if (p && p.catch) p.catch(() => {}); }
      sound.setAttribute("aria-pressed", String(on));
      sound.setAttribute("aria-label", on ? "Silenciar" : "Activar sonido");
    });
    new IntersectionObserver(([e]) => { inView = e.isIntersecting; sync(); }, { threshold: 0.35 }).observe(heroPhone);
    document.addEventListener("visibilitychange", sync);
    document.addEventListener("iec:intro-done", () => setTimeout(sync, 400));
    if (reduced) hv.setAttribute("controls", "");
  }

  /* ---------- Cuenta regresiva de las últimas capacitaciones del año ---------- */
  document.querySelectorAll("[data-countdown]").forEach((box) => {
    const target = new Date(box.dataset.countdown).getTime();
    const out = { d: box.querySelector("[data-cd=d]"), h: box.querySelector("[data-cd=h]"), m: box.querySelector("[data-cd=m]"), s: box.querySelector("[data-cd=s]") };
    const pad = (n) => String(n).padStart(2, "0");
    const tick = () => {
      const left = target - Date.now();
      if (left <= 0) {
        box.classList.add("is-live");
        box.querySelector(".countdown__label").textContent = "¡Ya empezó! Consultá por lugares disponibles";
        Object.values(out).forEach((el) => { el.textContent = "00"; });
        return;
      }
      const s = Math.floor(left / 1000);
      out.d.textContent = pad(Math.floor(s / 86400));
      out.h.textContent = pad(Math.floor((s % 86400) / 3600));
      out.m.textContent = pad(Math.floor((s % 3600) / 60));
      out.s.textContent = pad(s % 60);
      setTimeout(tick, 1000);
    };
    tick();
  });

  /* ---------- Formulario de contacto → WhatsApp ---------- */
  const form = document.querySelector("[data-wa-form]");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const motivo = data.get("motivo");
      const lines = [
        `Hola IEC, soy ${data.get("nombre")}.`,
        data.get("empresa") ? `Empresa / institución: ${data.get("empresa")}.` : "",
        `Consulto por: ${motivo}.`,
        data.get("mensaje") ? `\n${data.get("mensaje")}` : "",
      ].filter(Boolean);
      const phone = motivo === "Capacitaciones" ? form.dataset.waCursos : form.dataset.waEmpresas;
      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
    });
  }

  document.querySelectorAll("[data-year]").forEach((el) => { el.textContent = new Date().getFullYear(); });
})();
