import { motion } from 'motion/react';
import { ArrowRight, Play, Cpu, Shield, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] opacity-50" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        
        {/* Animated Lines/Grid */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
          <div className="w-full h-full border-[0.5px] border-white/5 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/20 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-[10px] sm:text-xs font-bold tracking-widest text-zinc-400 uppercase">
            Innovación Tecnológica de Alto Nivel
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight tracking-tighter text-white mb-8"
        >
          Transformamos empresas en <br />
          <span className="text-gradient">ecosistemas inteligentes.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 font-light leading-relaxed mb-12"
        >
          Consultoría estratégica, implementación de IA y automatización para liderar la era digital.
          Elevamos tu modelo de negocio hacia el futuro.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="https://wa.me/543434664964"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-5 rounded-full bg-white text-black font-bold hover:bg-cyan-400 hover:text-black transition-all flex items-center justify-center gap-2 shadow-2xl shadow-white/5 active:scale-95"
          >
            Contactar por WhatsApp <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Tech Badges */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-24 flex flex-wrap items-center justify-center gap-12 grayscale"
        >
          <div className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-default">
            <Cpu className="w-6 h-6" /> <span className="font-display font-medium">AUTOMATION</span>
          </div>
          <div className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-default">
            <Shield className="w-6 h-6" /> <span className="font-display font-medium">CYBERSECURITY</span>
          </div>
          <div className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-default">
            <Globe className="w-6 h-6" /> <span className="font-display font-medium">CLOUD SCALE</span>
          </div>
        </motion.div>
      </div>

      {/* Hero Bottom Shadow */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent z-10" />
    </section>
  );
}
