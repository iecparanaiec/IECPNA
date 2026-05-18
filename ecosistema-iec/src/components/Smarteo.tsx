import { motion } from 'motion/react';
import { Database, Zap, Activity, ShieldAlert, Cpu, Sparkles } from 'lucide-react';

export default function Smarteo() {
  const steps = [
    { title: "Diagnóstico", icon: Activity, desc: "Evaluamos el flujo actual de datos." },
    { title: "Integración", icon: Database, desc: "Conectamos tu ecosistema digital." },
    { title: "Automatización", icon: Cpu, desc: "Eliminamos tareas repetitivas." },
    { title: "Escalado", icon: Zap, desc: "Potenciamos resultados con IA." }
  ];

  return (
    <section id="smarteo" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            Core Philosophy
          </motion.div>
          <h2 className="text-4xl md:text-6xl display-title text-white mb-8">
            El concepto <span className="text-gradient">Smarteo</span>.
          </h2>
          <p className="text-zinc-400 text-lg font-light leading-relaxed">
            Nuestra metodología propietaria para digitalización inteligente. 
            Es evolucionar hacia la nube otorgando consciencia estratégica a tus datos.
          </p>
        </div>

        {/* Dashboard/Flow Interface */}
        <div className="relative p-1 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10">
          <div className="rounded-[2.4rem] bg-[#0A0A0A] overflow-hidden lg:grid lg:grid-cols-12 min-h-[600px]">
            {/* Sidebar Mockup */}
            <div className="hidden lg:block lg:col-span-3 border-right border-white/5 p-8 bg-zinc-950/40">
              <div className="space-y-6">
                {[1,2,3,4].map(i => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg bg-zinc-800 animate-pulse" />
                    <div className="h-2 w-24 bg-zinc-800 rounded animate-pulse" />
                  </div>
                ))}
                <div className="pt-12">
                  <div className="p-4 rounded-xl glass border-white/10 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-zinc-500 font-bold">STATUS</span>
                      <Sparkles className="w-3 h-3 text-cyan-400" />
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '75%' }}
                        transition={{ duration: 2, delay: 0.5 }}
                        className="h-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]"
                      />
                    </div>
                    <div className="text-[10px] text-zinc-400">82% Optimization Gain</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Flow Content */}
            <div className="lg:col-span-9 p-8 sm:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                {/* Connector Line */}
                <div className="hidden lg:block absolute top-[52px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
                
                {steps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative z-10 text-center space-y-6"
                  >
                    <div className="relative inline-block">
                      <div className="w-24 h-24 rounded-full bg-zinc-950 border border-white/10 flex items-center justify-center mx-auto group hover:border-cyan-500/50 transition-all duration-500 shadow-2xl">
                        <step.icon className="w-10 h-10 text-cyan-400 group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full glass flex items-center justify-center text-xs font-bold text-white">
                        0{idx + 1}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-20 p-8 rounded-3xl bg-zinc-950/60 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8"
              >
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2">¿Listo para el Smarteo?</h4>
                  <p className="text-zinc-500 text-sm mb-6">Lleva tu operatividad al siguiente nivel hoy mismo.</p>
                  <a 
                    href="https://wa.me/543434664964" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-8 py-4 bg-cyan-500 text-white rounded-xl font-bold hover:bg-cyan-400 transition-all inline-block"
                  >
                    Hablar con un experto
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[120px]" />
    </section>
  );
}
