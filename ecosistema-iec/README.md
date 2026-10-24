# Sitio IEC · iec-ia.com.ar

Ecosistema IEC & Co+nexus · IEC, Instituto privado en Economía del Conocimiento. Sitio estático para Vercel, con el estilo de IEC
(fondo negro, cian → azul → violeta, Space Grotesk, Inter y JetBrains Mono), más una función para el asistente de IA.

## Estructura

- `src/pages/*.html`: contenido de cada página (título y descripción arriba, entre `---`)
- `src/build.mjs`: arma `public/*.html` con el encabezado, menú, pie, intro con el logo animado y la cortina de transición entre pestañas
- `public/`: lo que se publica
  - `assets/site.css`, `assets/site.js`: estilos y comportamiento compartidos
  - `assets/hero3d.js`: objeto 3D de la portada (robot → cerebro → birrete → engranaje), Three.js por CDN
  - `assets/assistant.js`: asistente de consultas (isla superior, chat y voz)
  - `img/`, `video/`: logos, fotos del equipo, egresados y videos de alumnos
  - `experto_ia_nivel_1.html` y demás: páginas de detalle de cada curso (del sitio anterior)
- `api/chat.js`: función de Vercel que responde al asistente (Whattson) con Gemini, con streaming
- `api/_knowledge.js`: información que usa el asistente (cursos, fechas, IO, equipo, contacto). **Actualizarla cuando cambien fechas o cursos.**
- `vercel.json`: URLs limpias y redirecciones de direcciones viejas

## Asistente de IA (Whattson, con Gemini)

- `api/chat.js` llama a la API de Gemini (`streamGenerateContent`) con streaming. Modelo por defecto: `gemini-3.6-flash`.
- **Clave:** crear una en Google AI Studio (https://aistudio.google.com/apikey).
  - En Vercel: Project → Settings → Environment Variables → `GEMINI_API_KEY`. Después, volver a publicar.
  - En local: copiar `.env.local.example` como `.env.local` y pegar la clave. Ese archivo no se sube a git.
- Opcional: `GEMINI_MODEL` para usar otro modelo (por ejemplo `gemini-3.8-flash`).
- Sin clave, Whattson contesta con la base local de `assets/assistant.js` y el panel lo avisa en ámbar ("Modo básico").
- La voz usa el reconocimiento y la síntesis de voz del navegador (Chrome, Edge y Safari).

## Editar

1. Cambiar el contenido en `src/pages/`.
2. Regenerar:

```bash
node src/build.mjs
```

## Ver en local

```bash
npm install
```

```bash
node dev-server.mjs
```

Abre en http://localhost:4321. Con `GEMINI_API_KEY` en `.env.local`, Whattson usa la IA real.

## Publicar

Subir esta carpeta al proyecto de Vercel del dominio iec-ia.com.ar. Vercel toma `public/` según `vercel.json` y publica `api/chat.js` como función.
