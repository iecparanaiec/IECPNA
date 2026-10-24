// Objeto 3D de la portada: una nube de partículas que cambia de forma según el
// capítulo (robot → cerebro de IA → birrete → engranaje de Inteligencia Operativa).
// Lee el estado del scroll desde window.IEC_STORY, que escribe site.js.
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";

const host = document.querySelector("[data-hero3d]");
const stage = document.querySelector(".story__stage");

function webglAvailable() {
  try {
    const c = document.createElement("canvas");
    return !!(window.WebGLRenderingContext && (c.getContext("webgl2") || c.getContext("webgl")));
  } catch (e) {
    return false;
  }
}

if (host && webglAvailable()) {
  init();
} else {
  document.documentElement.classList.add("no-webgl");
}

function init() {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const small = window.matchMedia("(max-width: 900px)").matches;
  const N = small ? 5000 : 9000;

  // Generador con semilla: la forma es igual en cada carga
  let seed = 11;
  const rand = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;
  const gauss = () => {
    const u = rand() || 1e-6, v = rand();
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
  };
  const randDir = () => {
    const x = gauss(), y = gauss(), z = gauss();
    const l = Math.hypot(x, y, z) || 1;
    return [x / l, y / l, z / l];
  };
  const rotX = ([x, y, z], a) => [x, y * Math.cos(a) - z * Math.sin(a), y * Math.sin(a) + z * Math.cos(a)];
  const rotY = ([x, y, z], a) => [x * Math.cos(a) + z * Math.sin(a), y, -x * Math.sin(a) + z * Math.cos(a)];

  // 01 · Robótica: cabeza de robot con ojos, boca, orejas y antena
  function robot() {
    const a = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      const k = rand();
      let p;
      if (k < 0.52) {
        // Cabeza: superelipsoide (caja redondeada)
        const [dx, dy, dz] = randDir();
        const e = 4;
        const s = Math.pow(Math.abs(dx) ** e + Math.abs(dy) ** e + Math.abs(dz) ** e, 1 / e);
        p = [(dx / s) * 1.05, (dy / s) * 0.85, (dz / s) * 0.8];
      } else if (k < 0.72) {
        // Ojos: anillos y pupilas sobre el frente
        const side = rand() < 0.5 ? -1 : 1;
        const t = rand() * Math.PI * 2;
        const ring = rand() < 0.7;
        const r = ring ? 0.24 + 0.02 * gauss() : 0.1 * Math.sqrt(rand());
        p = [side * 0.42 + Math.cos(t) * r, 0.12 + Math.sin(t) * r, 0.82];
      } else if (k < 0.8) {
        // Boca: rejilla
        const row = Math.floor(rand() * 3);
        p = [(rand() - 0.5) * 0.8, -0.34 - row * 0.09, 0.81];
      } else if (k < 0.9) {
        // Orejas: discos laterales
        const side = rand() < 0.5 ? -1 : 1;
        const t = rand() * Math.PI * 2, r = 0.26 * Math.sqrt(rand());
        p = [side * (1.08 + rand() * 0.12), Math.cos(t) * r, Math.sin(t) * r];
      } else {
        // Antena con esfera en la punta
        if (rand() < 0.45) {
          p = [0.015 * gauss(), 0.85 + rand() * 0.42, 0.015 * gauss()];
        } else {
          const [dx, dy, dz] = randDir();
          p = [dx * 0.13, 1.36 + dy * 0.13, dz * 0.13];
        }
      }
      p = rotY(rotX(p, 0.08), -0.35);
      a.set([p[0] * 1.25, p[1] * 1.25 - 0.1, p[2] * 1.25], i * 3);
    }
    return a;
  }

  // 02 · Inteligencia Artificial: cerebro, con puntos sobre los surcos
  function brain() {
    const a = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      const s = i % 2 ? 1 : -1;
      let x, y, z, g;
      do {
        [x, y, z] = randDir();
        g = Math.sin(7 * x + 2.5 * y + 1.3) * Math.sin(6 * y - 2 * z) + 0.6 * Math.sin(9 * z + 4 * x);
      } while (Math.abs(g) > 0.16 && rand() > 0.06);
      const folds = 1 + 0.05 * g;
      const shell = 0.97 + 0.03 * rand();
      x = s * (0.07 + Math.abs(x) * 0.72) * folds * shell;
      y = y * 0.95 * folds * shell;
      z = z * 1.22 * folds * shell;
      if (y < -0.45) y = -0.45 + (y + 0.45) * 0.55;
      a.set([x * 1.45, y * 1.45 + 0.08, z * 1.45], i * 3);
    }
    return a;
  }

  // 03 · Capacitaciones: birrete de graduación con borla
  function cap() {
    const a = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      const k = rand();
      let p;
      if (k < 0.5) {
        // Tablero cuadrado, girado 45°
        const u = rand() * 2 - 1, v = rand() * 2 - 1;
        const edge = rand() < 0.3;
        const uu = edge ? Math.sign(u) : u, vv = edge ? v : v;
        const q = edge && rand() < 0.5 ? [vv, uu] : [uu, vv];
        p = rotY([q[0] * 1.25, 0.32 + 0.02 * rand(), q[1] * 1.25], Math.PI / 4);
      } else if (k < 0.84) {
        // Casquete
        const t = rand() * Math.PI * 2;
        const h = rand();
        const r = 0.78 + 0.02 * gauss();
        p = [Math.cos(t) * r, 0.3 - h * 0.62, Math.sin(t) * r * 0.92];
      } else if (k < 0.88) {
        // Botón
        const [dx, dy, dz] = randDir();
        p = [dx * 0.09, 0.4 + Math.abs(dy) * 0.07, dz * 0.09];
      } else {
        // Cordón hasta la esquina y borla colgando
        const corner = rotY([1.25, 0.34, 0], Math.PI / 4);
        if (rand() < 0.45) {
          const t = rand();
          p = [corner[0] * t, 0.42 - t * 0.08, corner[2] * t];
        } else {
          const t = rand();
          const spread = 0.04 + t * 0.07;
          p = [corner[0] + gauss() * spread, 0.34 - t * 0.9, corner[2] + gauss() * spread];
        }
      }
      p = rotX(p, 0.42);
      a.set([p[0] * 1.15, p[1] * 1.15 + 0.15, p[2] * 1.15], i * 3);
    }
    return a;
  }

  // 04 · Inteligencia Operativa: engranaje con rayos y nodos
  function gear() {
    const a = new Float32Array(N * 3);
    const teeth = 9;
    const outer = (t) => {
      const f = ((t / (Math.PI * 2)) * teeth) % 1;
      return f > 0.2 && f < 0.6 ? 1.46 : 1.1;
    };
    for (let i = 0; i < N; i++) {
      const k = rand();
      const t = rand() * Math.PI * 2;
      let p;
      const face = (rand() < 0.5 ? -1 : 1) * 0.14;
      if (k < 0.5) {
        // Contorno dentado en ambas caras, con los flancos de cada diente
        const f = ((t / (Math.PI * 2)) * teeth) % 1;
        // Un tercio de los puntos dibuja los flancos rectos de cada diente
        let tt = t, R = outer(t);
        if (rand() < 0.35) {
          const tooth = Math.floor(rand() * teeth);
          const edge = rand() < 0.5 ? 0.2 : 0.6;
          tt = ((tooth + edge) / teeth) * Math.PI * 2;
          R = 1.1 + rand() * 0.36;
        }
        p = [Math.cos(tt) * R, Math.sin(tt) * R, face + 0.008 * gauss()];
      } else if (k < 0.62) {
        // Aro interior
        p = [Math.cos(t) * 0.82, Math.sin(t) * 0.82, face + 0.008 * gauss()];
      } else if (k < 0.82) {
        // Rayos hacia el centro
        const spoke = Math.floor(rand() * 6) * (Math.PI / 3);
        const r = 0.3 + rand() * 0.52;
        const w = 0.025 * gauss();
        p = [Math.cos(spoke) * r - Math.sin(spoke) * w, Math.sin(spoke) * r + Math.cos(spoke) * w, face * 0.7];
      } else if (k < 0.92) {
        // Núcleo: anillo y punto central
        const r = rand() < 0.7 ? 0.3 : 0.08 * Math.sqrt(rand());
        p = [Math.cos(t) * r, Math.sin(t) * r, face];
      } else {
        // Paredes laterales del contorno
        const R = outer(t);
        p = [Math.cos(t) * R, Math.sin(t) * R, (rand() * 2 - 1) * 0.14];
      }
      p = rotY(rotX(p, -0.2), 0.3);
      a.set([p[0] * 1.05, p[1] * 1.05, p[2] * 1.05], i * 3);
    }
    return a;
  }

  const shapes = [robot(), brain(), cap(), gear()];
  const rnd = new Float32Array(N);
  const acc = new Float32Array(N);
  for (let i = 0; i < N; i++) {
    rnd[i] = rand();
    acc[i] = rand() < 0.22 ? 1 : 0;
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(shapes[0].slice(), 3));
  shapes.forEach((s, i) => geo.setAttribute("a" + i, new THREE.BufferAttribute(s, 3)));
  geo.setAttribute("rnd", new THREE.BufferAttribute(rnd, 1));
  geo.setAttribute("acc", new THREE.BufferAttribute(acc, 1));

  const uniforms = {
    uT: { value: 0 },
    uTime: { value: 0 },
    uSize: { value: small ? 38 : 44 },
    uPR: { value: 1 },
    uColor: { value: new THREE.Color("#22d3ee") },
    uAccent: { value: new THREE.Color("#8b5cf6") },
  };

  const mat = new THREE.ShaderMaterial({
    uniforms,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexShader: /* glsl */ `
      attribute vec3 a0; attribute vec3 a1; attribute vec3 a2; attribute vec3 a3;
      attribute float rnd; attribute float acc;
      uniform float uT, uTime, uSize, uPR;
      varying float vAlpha; varying float vAcc;
      vec3 pick(float k) {
        if (k < 0.5) return a0;
        if (k < 1.5) return a1;
        if (k < 2.5) return a2;
        return a3;
      }
      void main() {
        float base = floor(uT);
        float f = uT - base;
        float l = clamp((f - rnd * 0.3) / 0.7, 0.0, 1.0);
        l = l * l * (3.0 - 2.0 * l);
        vec3 p = mix(pick(base), pick(min(base + 1.0, 3.0)), l);
        float burst = sin(l * 3.14159);
        p += normalize(p + 1e-4) * burst * (0.3 + 0.6 * rnd);
        p += 0.02 * vec3(sin(uTime * 0.9 + rnd * 40.0), cos(uTime * 0.8 + rnd * 31.0), sin(uTime * 0.7 + rnd * 23.0));
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        float twinkle = 0.75 + 0.25 * sin(uTime * 2.0 + rnd * 60.0);
        gl_PointSize = uSize * uPR * (0.4 + rnd * 0.7 + acc * 0.5) / -mv.z;
        float depth = clamp((-mv.z - 4.2) / 3.8, 0.0, 1.0);
        vAlpha = (0.7 + 0.5 * rnd) * (1.0 - depth * 0.5) * twinkle;
        vAcc = acc;
      }
    `,
    fragmentShader: /* glsl */ `
      uniform vec3 uColor, uAccent;
      varying float vAlpha; varying float vAcc;
      void main() {
        vec2 c = gl_PointCoord - 0.5;
        float d = length(c);
        if (d > 0.5) discard;
        float core = smoothstep(0.5, 0.0, d);
        float a = pow(core, 1.3) * vAlpha;
        gl_FragColor = vec4(mix(uColor, uAccent, vAcc) * a * 1.35, a);
      }
    `,
  });

  const points = new THREE.Points(geo, mat);
  const group = new THREE.Group();
  group.add(points);

  const scene = new THREE.Scene();
  scene.add(group);
  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 50);
  camera.position.set(0, 0, 6.2);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
  renderer.setClearColor(0x000000, 0);
  host.appendChild(renderer.domElement);
  renderer.domElement.setAttribute("aria-hidden", "true");

  let layout = { x: 0, y: 0, s: 1 };
  function resize() {
    const w = host.clientWidth, h = host.clientHeight;
    const pr = Math.min(window.devicePixelRatio || 1, 1.75);
    renderer.setPixelRatio(pr);
    renderer.setSize(w, h, false);
    uniforms.uPR.value = pr * (h / 900);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    const viewH = 2 * camera.position.z * Math.tan((camera.fov * Math.PI) / 360);
    const viewW = viewH * camera.aspect;
    layout = w <= 900
      ? { x: 0, y: viewH * 0.22, s: Math.min(0.85, viewW / 5) }
      : { x: viewW * 0.21, y: 0, s: Math.min(1.05, viewW / 7.2) };
  }
  resize();
  window.addEventListener("resize", resize);

  const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
  window.addEventListener("pointermove", (e) => {
    mouse.tx = e.clientX / window.innerWidth - 0.5;
    mouse.ty = e.clientY / window.innerHeight - 0.5;
  });

  let visible = true;
  if (stage && "IntersectionObserver" in window) {
    new IntersectionObserver(([e]) => { visible = e.isIntersecting; }, { rootMargin: "100px" }).observe(stage);
  }

  const colTmp = new THREE.Color();
  const accTmp = new THREE.Color();
  let curT = 0;
  const clock = new THREE.Clock();

  function frame() {
    requestAnimationFrame(frame);
    if (!visible) return;
    const dt = Math.min(clock.getDelta(), 0.05);
    const time = clock.elapsedTime;
    const st = window.IEC_STORY || { t: 0, color: "#22d3ee", accent: "#8b5cf6" };

    curT += (st.t - curT) * (reduced ? 1 : Math.min(1, dt * 7));
    uniforms.uT.value = curT;
    uniforms.uTime.value = reduced ? 0 : time;
    colTmp.set(st.color);
    accTmp.set(st.accent);
    uniforms.uColor.value.lerp(colTmp, 0.12);
    uniforms.uAccent.value.lerp(accTmp, 0.12);

    mouse.x += (mouse.tx - mouse.x) * 0.05;
    mouse.y += (mouse.ty - mouse.y) * 0.05;
    group.position.set(layout.x, layout.y, 0);
    group.scale.setScalar(layout.s);
    // Cada forma mira al frente en su pausa y gira suave durante la transformación
    const spin = Math.sin((curT % 1) * Math.PI) * 0.9;
    group.rotation.y = (reduced ? 0 : Math.sin(time * 0.35) * 0.35) + spin + mouse.x * 0.4;
    group.rotation.x = mouse.y * 0.25;

    renderer.render(scene, camera);
  }
  frame();
}
