import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Play, Info, Volume2, VolumeX, ArrowRight } from 'lucide-react';

// Reemplaza este ID con el ID real de tu video de Google Drive
const VIDEO_ID = "1_vD-L6PqO-T9uX_0_8pZ_5V-rN_XN"; // Ejemplo: ID que aparece en el link de compartir
const VIDEO_URL = `https://drive.google.com/uc?export=download&id=${VIDEO_ID}`;

export default function VideoBanner() {
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted={isMuted}
          playsInline
          onLoadedData={() => setIsLoaded(true)}
          className={`h-full w-full object-cover transition-opacity duration-1000 ${
            isLoaded ? 'opacity-60' : 'opacity-0'
          }`}
        >
          <source src={VIDEO_URL} type="video/mp4" />
          {/* Fallback en caso de que el video no cargue o sea placeholder */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-circuit-board-animation-1559-large.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay Gradients (Netflix Style) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center pt-24">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/10 mb-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest text-white font-bold">Original Series | ECOSISTEMA IEC</span>
          </div>

          <h1 className="text-5xl md:text-7xl display-title text-white">
            TRANSFORMA <br />
            <span className="text-gradient">TU EMPRESA.</span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-300 font-medium leading-relaxed drop-shadow-lg">
            Consultoría estratégica de alto nivel impulsada por Inteligencia Artificial. 
            Transformamos organizaciones mediante la creación de ecosistemas inteligentes de próxima generación.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a 
              href="https://wa.me/543434664964"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-black rounded-xl font-bold flex items-center gap-3 glow-cyan transition-all hover:bg-cyan-400 active:scale-95"
            >
              Contactar por WhatsApp <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Indicators & Mute Toggle */}
      <div className="absolute bottom-12 right-6 md:right-12 z-20 flex items-center gap-6">
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all backdrop-blur-sm"
          title={isMuted ? "Activar Sonido" : "Silenciar"}
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>

        <div className="hidden md:flex items-center gap-2">
            <div className="w-12 h-[2px] bg-cyan-500 shadow-[0_0_8px_#22d3ee]" />
            <div className="w-4 h-[2px] bg-white/20" />
            <div className="w-4 h-[2px] bg-white/20" />
        </div>
      </div>

      {/* Social Proof Badges Bottom Left */}
      <div className="absolute bottom-12 left-6 z-20 hidden lg:flex items-center gap-8 opacity-40">
        <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">AI Ecosystem [Active]</span>
        <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">Smarteo v2.0</span>
        <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">Secure Cloud</span>
      </div>
    </section>
  );
}
