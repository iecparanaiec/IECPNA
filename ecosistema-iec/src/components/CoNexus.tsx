import { motion } from 'motion/react';
import { Network, Search, TrendingUp, Users, Zap, Compass, ShieldCheck } from 'lucide-react';

export default function CoNexus() {
  const concepts = [
    {
      id: "01",
      title: "Orquestación del ecosistema",
      desc: "Co+nexus articula capacidades, actores y oportunidades para fortalecer el crecimiento conjunto de las empresas vinculadas al ecosistema IEC.",
      icon: Network
    },
    {
      id: "02",
      title: "Análisis organizacional",
      desc: "El equipo observa procesos, estructura, funcionamiento y necesidades para detectar mejoras, cuellos de botella y posibilidades de evolución.",
      icon: Search
    },
    {
      id: "03",
      title: "Impulso estratégico",
      desc: "Su aporte integra diagnóstico, acompañamiento en decisiones, proyección, orden y construcción de nuevas oportunidades de desarrollo.",
      icon: TrendingUp
    }
  ];

  const team = [
    {
      role: "Marketing y crecimiento",
      name: "Licenciado en Diseño gráfico",
      desc: "Estrategia comercial, posicionamiento y análisis de mercado para la expansión y comunicación del ecosistema.",
      img: "../image/equipo-marketing.jpg"
    },
    {
      role: "Procesos y estructura",
      name: "Arquitecto y Lic. en Procesos",
      desc: "Análisis organizacional y diseño de procesos estructurales para transformar complejidad en capacidad operativa.",
      img: "../image/equipo-procesos.jpg"
    },
    {
      role: "Ingeniería y desarrollo",
      name: "Ingeniero Civil",
      desc: "Visión técnica y proyectual para la planificación y comprensión sistémica de desafíos complejos.",
      img: "../image/equipo-ingenieria.jpg"
    }
  ];

  return (
    <section id="co-nexus" className="py-24 relative bg-black/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section of CoNexus */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#338080]/10 border border-[#338080]/20">
              <span className="text-[10px] uppercase tracking-widest text-[#338080] font-bold">Grow Partner</span>
            </div>
            <h2 className="text-5xl md:text-6xl display-title text-white">
              Un equipo para impulsar el <span className="text-gradient-conexus">ecosistema empresarial.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-xl font-light">
              Co+nexus es una unidad estratégica conformada por perfiles complementarios que trabajan junto a IEC para analizar organizaciones, ordenar procesos y orquestar el desarrollo integral.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://wa.me/543434664964" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-8 py-4 bg-[#338080] text-white rounded-xl font-bold hover:brightness-110 transition-all glow-conexus active:scale-95 text-center"
              >
                Conocer al equipo
              </a>
              <a 
                href="https://wa.me/543434664964" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-8 py-4 glass border border-white/10 text-white rounded-xl font-bold hover:bg-white/5 transition-all active:scale-95 text-center"
              >
                Solicitar reunión
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[3.5rem] glass-dark border-white/10 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#338080]/20 via-transparent to-[#4D5154]/20" />
              <div className="text-center z-10 p-12 w-full">
                <div className="w-48 h-32 md:w-56 md:h-40 bg-zinc-900/50 backdrop-blur-3xl rounded-3xl mx-auto mb-8 flex items-center justify-center border border-white/10 shadow-2xl glow-conexus transform group-hover:scale-110 transition-transform duration-700 overflow-hidden">
                   <img 
                      src="../image/conexus-logo.jpg" 
                      alt="CoNexus Logo" 
                      className="w-full h-full object-contain p-6"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.className = "hidden";
                        const parent = target.parentElement;
                        if (parent) {
                          const icon = document.createElement('div');
                          icon.className = "text-[#338080] font-bold text-4xl tracking-tighter";
                          icon.innerText = "CO+NEXUS";
                          parent.appendChild(icon);
                        }
                      }}
                   />
                </div>
                <p className="text-zinc-500 text-sm italic font-light tracking-wide">Donde la estrategia encuentra la ejecución</p>
              </div>
              
              {/* Decorative nodes */}
              <div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-[#338080] animate-pulse" />
              <div className="absolute bottom-10 right-20 w-3 h-3 rounded-full bg-[#4D5154] animate-pulse delay-75" />
              <div className="absolute top-1/2 right-10 w-2 h-2 rounded-full bg-[#338080] animate-pulse delay-150" />
            </div>
          </motion.div>
        </div>

        {/* Concept Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {concepts.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 rounded-[2.5rem] glass-dark border-white/5 hover:border-[#338080]/30 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#338080]/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-[#338080]/10 transition-colors" />
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:bg-[#338080]/10 group-hover:border-[#338080]/30 transition-all">
                <item.icon className="w-6 h-6 text-zinc-400 group-hover:text-[#338080] transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 transition-colors">{item.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Team Grid */}
        <div className="space-y-16 mb-32">
          <div className="text-center max-w-2xl mx-auto">
             <span className="text-[#338080] font-mono text-xs uppercase tracking-widest mb-4 block group">Expertos del Ecosistema</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Equipo pilar</h2>
            <p className="text-zinc-400 font-light">Tres perfiles claves para pensar organizaciones con mayor profundidad y cercanía.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-[#0A0A0A] border border-white/5 rounded-[3rem] p-4 hover:border-[#338080]/20 transition-all"
              >
                <div className="relative h-80 rounded-[2.5rem] overflow-hidden mb-8 grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img src={member.img} alt={member.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />
                </div>
                <div className="px-6 pb-8">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#338080] block mb-3">{member.role}</span>
                  <h4 className="text-2xl font-display font-bold text-white tracking-tight mb-2">{member.name}</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed font-light">{member.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Impact List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { t: "Diagnóstico profundo", d: "Entendemos profundamente la estructura y las dinámicas reales de la organización.", i: Search },
            { t: "Orden y proyección", d: "Transformamos el desorden en una lógica de crecimiento clara y coherente.", i: Compass },
            { t: "Articulación IEC", d: "Potenciamos la conexión entre análisis estratégico e implementación técnica.", i: Zap },
            { t: "Interdisciplina", d: "Lectura rica e intervención inteligente basada en múltiples perfiles.", i: ShieldCheck }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="space-y-4"
            >
              <item.i className="w-8 h-8 text-[#338080]/50" />
              <h4 className="text-white font-bold text-lg">{item.t}</h4>
              <p className="text-zinc-500 text-sm font-light leading-relaxed">{item.d}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#338080]/5 rounded-full blur-[150px] -z-10" />
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-[#4D5154]/5 rounded-full blur-[100px] -z-10" />
    </section>
  );
}
