import CoNexus from '../components/CoNexus';

export default function CoNexusPage() {
  return (
    <div className="pt-20">
      <CoNexus />
      <section className="py-24 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-6">
           <div className="p-12 md:p-20 rounded-[3.5rem] glass-dark border-white/10 text-center max-w-5xl mx-auto relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#338080]/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">¿Preparado para un diagnóstico real?</h2>
                <p className="text-zinc-500 mb-12 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                  El equipo grow partner está listo para analizar tu organización y diseñar la hoja de ruta hacia el próximo nivel estratégico.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://wa.me/543434664964" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-10 py-5 bg-[#338080] text-white rounded-2xl font-bold hover:brightness-110 transition-all glow-conexus active:scale-95 inline-block"
                  >
                    Solicitar reunión estratégica
                  </a>
                  <a 
                    href="https://wa.me/543434664964" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-10 py-5 glass border border-white/10 text-white rounded-2xl font-bold hover:bg-white/5 transition-all active:scale-95 inline-block"
                  >
                    Ver metodología
                  </a>
                </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
