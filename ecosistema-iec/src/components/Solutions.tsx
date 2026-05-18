import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { SOLUTIONS } from '../constants';

export default function Solutions() {
  return (
    <section id="soluciones" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl display-title text-white mb-6"
            >
              Soluciones enfocadas en <br />
              <span className="text-cyan-400">resultados exponenciales.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-zinc-400 text-lg leading-relaxed"
            >
              Fusionamos consultoría de alto nivel con las tecnologías más disruptivas para crear ecosistemas operativos imbatibles.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-zinc-600 text-sm font-mono"
          >
            [ V08-VERTICALS_CORE ]
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOLUTIONS.map((solution, idx) => {
            const Icon = (Icons as any)[solution.icon];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="group p-8 rounded-3xl glass border border-white/5 hover:border-cyan-500/30 transition-all duration-500 relative flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Icons.ArrowUpRight className="w-5 h-5 text-cyan-400" />
                </div>

                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-cyan-500/10 group-hover:scale-110 transition-all duration-500">
                    <Icon className="w-7 h-7 text-white group-hover:text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                    {solution.description}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">
                    {solution.category}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />
    </section>
  );
}
