import { motion } from 'motion/react';
import { Twitter, Linkedin, Instagram, Github, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-20">
          <div className="max-w-xs space-y-6">
            <a href="/" className="flex items-center">
              <span className="font-display font-black text-xl md:text-2xl tracking-tighter text-white uppercase whitespace-nowrap">
                ECOSISTEMA <span className="text-cyan-400 font-black">IEC</span>
              </span>
            </a>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Transformando el paradigma empresarial mediante automatización inteligente y consultoría de vanguardia.
            </p>
            <div className="flex items-center gap-4">
              {[Twitter, Linkedin, Instagram, Github].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/20 transition-all font-bold">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 lg:gap-24">
            <div className="space-y-6">
              <h5 className="text-xs font-bold text-white uppercase tracking-widest">Navegación</h5>
              <ul className="space-y-4">
                {['Soluciones', 'Smarteo', 'Capacitaciones', 'Domotica'].map(i => (
                  <li key={i}><a href={`#${i.toLowerCase()}`} className="text-zinc-500 text-sm hover:text-cyan-400 transition-colors">{i === 'Domotica' ? 'Domótica' : i}</a></li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h5 className="text-xs font-bold text-white uppercase tracking-widest">Compañía</h5>
              <ul className="space-y-4">
                {['Nosotros', 'Eventos', 'Prensa', 'Legal'].map(i => (
                  <li key={i}><a href="#" className="text-zinc-500 text-sm hover:text-cyan-400 transition-colors">{i}</a></li>
                ))}
              </ul>
            </div>
            <div className="hidden sm:block space-y-6">
              <h5 className="text-xs font-bold text-white uppercase tracking-widest">Oficina</h5>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Gualeguaychú 449,<br />
                Paraná, Entre Ríos.<br />
                T: +54 3434664964
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-6">
          <p className="text-zinc-600 text-[10px] font-mono">
            &copy; {new Date().getFullYear()} ECOSISTEMA IEC. ADVANCED ECOSYSTEMS. ALL RIGHTS RESERVED.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-[10px] uppercase font-bold tracking-widest group"
          >
            Back to Top <ArrowUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
