import { motion } from 'motion/react';
import Capacitaciones from '../components/Capacitaciones';

export default function TrainingPage() {
  return (
    <div className="pt-20">
      {/* Page Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-bold">Oferta académica IEC</span>
            </div>
            <h1 className="text-5xl md:text-7xl display-title text-white">
              Habilidades para el <span className="text-cyan-400">mundo real.</span>
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed font-light">
              Impulsamos propuestas formativas orientadas a la aplicación práctica, la empleabilidad, la innovación y el desarrollo de capacidades concretas.
            </p>
            <div className="flex gap-4">
              <a href="#oferta-academica" className="px-8 py-4 bg-cyan-500 text-white rounded-xl font-bold hover:bg-cyan-400 transition-all glow-cyan active:scale-95 text-center">
                Ver cursos
              </a>
              <a 
                href="https://wa.me/543434664964" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-8 py-4 glass border border-white/10 text-white rounded-xl font-bold hover:bg-white/5 transition-all active:scale-95"
              >
                Pedir información
              </a>
            </div>
          </motion.div>

          <div className="relative">
             <div className="aspect-video rounded-[3rem] overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
                <img 
                  src="../image/capacitaciones-hero.jpg" 
                  alt="Formación IEC"
                  className="w-full h-full object-cover"
                />
             </div>
             <div className="absolute -bottom-10 -left-10 w-64 p-8 glass glow-cyan rounded-3xl hidden md:block">
                <p className="text-xs text-white leading-relaxed font-medium">Cursos diseñados para combinar conocimiento técnico y acompañamiento formativo.</p>
             </div>
          </div>
        </div>
      </section>

      <Capacitaciones />

      {/* CTA Section */}
      <section className="py-24 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-6">
           <div className="p-12 md:p-20 rounded-[3.5rem] bg-zinc-900 border border-white/5 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                <span className="text-cyan-400 font-bold tracking-widest text-xs uppercase">IEC Formación</span>
                <h2 className="text-4xl md:text-5xl display-title text-white">¿Querés lanzar una capacitación o sumarte a una de nuestras propuestas?</h2>
                <p className="text-zinc-500 font-light text-lg">
                  Podemos ayudarte a elegir el programa adecuado, adaptar contenidos o coordinar una propuesta formativa para grupos, instituciones o empresas.
                </p>
                <a 
                  href="https://wa.me/543434664964" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-10 py-5 bg-white text-black rounded-2xl font-bold hover:bg-cyan-400 transition-all active:scale-95 inline-block"
                >
                  Consultar ahora
                </a>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}

