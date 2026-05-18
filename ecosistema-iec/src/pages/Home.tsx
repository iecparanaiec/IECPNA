import { motion } from 'motion/react';
import VideoBanner from '../components/VideoBanner';
import { ArrowRight, Cpu, Zap, Search, ShieldCheck, Database, LayoutPanelLeft } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-0">
      {/* 1. Video Banner */}
      <VideoBanner />

      {/* 2. Intro Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <span className="text-cyan-400 font-mono text-sm uppercase tracking-[0.3em]">Enfoque IEC</span>
            <h2 className="text-5xl md:text-6xl display-title text-white">
              Estructura para <br />
              <span className="text-gradient">crecer mejor.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed font-light">
              IEC diseña e implementa ecosistemas empresariales inteligentes mediante estrategia, automatización, procesos, formación, innovación, eventos y desarrollo tecnológico. Articulamos cada unidad de forma integral para potenciar la operación completa.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="p-6 rounded-2xl glass-dark border-white/5">
                <div className="text-3xl font-bold text-white mb-1">11</div>
                <div className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Unidades integradas</div>
              </div>
              <div className="p-6 rounded-2xl glass-dark border-white/5">
                <div className="text-3xl font-bold text-white mb-1">360°</div>
                <div className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Visión estratégica</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="../image/estrategia.jpg" 
                alt="Estrategia"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 p-8 rounded-3xl glass glow-cyan max-w-xs hidden md:block">
              <h4 className="text-white font-bold mb-2">Ingeniería operativa</h4>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Automatización, estructura, decisiones y evolución continua en un mismo sistema.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Smarteo Section */}
      <section id="smarteo" className="py-24 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-violet-400 font-mono text-sm uppercase tracking-[0.3em]">Metodología Smarteo</span>
            <h2 className="text-4xl md:text-6xl display-title text-white mt-4">
              Pasar de herramientas sueltas <br />
              <span className="text-gradient">a un sistema inteligente.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="p-8 rounded-3xl glass border-white/5">
              <h3 className="text-xl font-bold text-zinc-400 mb-4 tracking-tight">El desafío actual</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                La verdadera transformación supera la digitalización del desorden. Smarteo aporta la arquitectura necesaria para que múltiples herramientas funcionen con total claridad y propósito.
              </p>
            </div>
            <div className="p-8 rounded-3xl glass border-cyan-500/20 bg-cyan-500/[0.02]">
              <h3 className="text-xl font-bold text-cyan-400 mb-4 tracking-tight">Qué sí es</h3>
              <p className="text-zinc-300 text-sm leading-relaxed font-medium">
                Es una metodología de transformación que ordena procesos, datos, responsabilidades, decisiones y sistemas para que la tecnología genere valor real.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { s: "A", t: "Entender", d: "Analizar cómo funciona realmente la empresa: procesos, personas, decisiones y fricciones.", i: Search },
              { s: "B", t: "Ordenar", d: "Definir qué información importa, quién la genera y cómo debe organizarse la lógica del negocio.", i: LayoutPanelLeft },
              { s: "C", t: "Conectar", d: "Integrar sistemas, áreas y equipos para que toda la organización hable un mismo lenguaje.", i: Database }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 space-y-6"
              >
                <div className="text-5xl font-display font-bold text-white/5">{item.s}</div>
                <h4 className="text-xl font-bold text-white">{item.t}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Architecture Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
             <div className="rounded-[3rem] overflow-hidden border border-white/10">
                <img 
                  src="../image/arquitectura.jpg" 
                  alt="Architecture"
                  className="w-full h-full object-cover"
                />
             </div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 p-6 glass-dark rounded-2xl border-white/10 glow-violet">
                <div className="text-[10px] text-violet-400 font-bold uppercase tracking-widest mb-2">Diferencial</div>
                <p className="text-xs text-white leading-relaxed">Smarteo es estructura para decidir mejor.</p>
             </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-8"
          >
            <span className="text-cyan-400 font-mono text-sm uppercase tracking-[0.3em]">La base del ecosistema</span>
            <h2 className="text-4xl md:text-5xl display-title text-white">
              Arquitectura de datos para <br />
              <span className="text-gradient">potenciar la IA.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed font-light">
              En muchas empresas ya existe información valiosa. El desafío está en ordenarla, conectarla y darle una lógica común. Cuando esa estructura está bien diseñada, cada automatización se convierte en una herramienta real de mejora.
            </p>
            <ul className="space-y-4">
              {['Datos confiables para decidir con criterio.', 'Responsables claros para cada flujo.', 'Sistemas integrados que fluyen de manera coordinada.'].map(li => (
                <li key={li} className="flex items-center gap-3 text-zinc-300 text-sm">
                  <ShieldCheck className="w-5 h-5 text-cyan-400" /> {li}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 5. Process Grid */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-head text-center max-w-3xl mx-auto mb-20">
            <span className="text-zinc-600 font-mono text-sm uppercase tracking-[0.3em]">Cómo trabajamos</span>
            <h2 className="text-4xl md:text-5xl display-title text-white mt-4">Una metodología clara</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { n: "01", t: "Relevamiento", d: "Analizamos operación y estructura para entender necesidades." },
              { n: "02", t: "Roadmap", d: "Prioridades y soluciones en una hoja de ruta aplicable." },
              { n: "03", t: "Implementación", d: "Ejecutamos procesos y automatizaciones en la práctica." },
              { n: "04", t: "Adopción", d: "Capacitamos para que la empresa sostenga el ecosistema." }
            ].map((step, idx) => (
              <div key={idx} className="p-8 rounded-3xl border border-white/5 bg-white/[0.01] hover:border-cyan-500/20 transition-all">
                <div className="text-3xl font-display font-bold text-cyan-500/20 mb-6">{step.n}</div>
                <h4 className="text-lg font-bold text-white mb-3">{step.t}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="p-12 md:p-20 rounded-[3rem] glass border-white/10 relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[120px]" />
            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
               <h2 className="text-4xl md:text-6xl display-title text-white">
                 ¿Construimos tu estructura <span className="text-gradient">inteligente?</span>
               </h2>
               <p className="text-zinc-400 text-lg">Si buscás ordenar procesos y profesionalizar equipos, diseñamos una propuesta ajustada a vos.</p>
               <a 
                 href="https://wa.me/543434664964"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-block px-10 py-5 bg-cyan-500 text-white rounded-2xl font-bold hover:bg-cyan-400 transition-all shadow-2xl shadow-cyan-900/40"
               >
                 Contactar ahora
               </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
