import { motion } from 'motion/react';
import { Target, Lightbulb, Users, BarChart3 } from 'lucide-react';

export default function About() {
  const cards = [
    {
      title: "Visión",
      desc: "Ser el puente global entre las empresas tradicionales y el futuro digital inteligente.",
      icon: Target,
      color: "bg-blue-500/20 text-blue-400"
    },
    {
      title: "Misión",
      desc: "Transformar la productividad mediante la integración de IA y automatización estratégica.",
      icon: Lightbulb,
      color: "bg-cyan-500/20 text-cyan-400"
    },
    {
      title: "Enfoque",
      desc: "Metodologías ágiles y consultoría personalizada para resultados reales y medibles.",
      icon: BarChart3,
      color: "bg-violet-500/20 text-violet-400"
    },
    {
      title: "Diferencial",
      desc: "Ecosistema propio de formación y ejecución tecnológica de vanguardia.",
      icon: Users,
      color: "bg-pink-500/20 text-pink-400"
    }
  ];

  return (
    <section id="quienes-somos" className="py-24 bg-black/40 border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex flex-col">
              <span className="text-zinc-600 font-mono text-sm mb-4 uppercase tracking-[0.3em]">Sobre nosotros</span>
              <h2 className="text-4xl md:text-5xl display-title text-white">
                Lideramos la revolución de la <br />
                <span className="text-gradient">Inteligencia Aplicada.</span>
              </h2>
            </div>
            <p className="text-zinc-400 text-lg font-light leading-relaxed">
              Ecosistema IEC impulsa la vigencia tecnológica permanente. 
              Diseñamos nuevas arquitecturas operativas integrales donde la 
              inteligencia artificial y la automatización potencian cada uno de tus procesos.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <h4 className="text-white font-bold text-4xl mb-2">150+</h4>
                <p className="text-zinc-500 text-sm">Empresas transformadas</p>
              </div>
              <div>
                <h4 className="text-white font-bold text-4xl mb-2">98%</h4>
                <p className="text-zinc-500 text-sm">Eficiencia incremental</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl glass-dark border border-white/5 hover:border-white/10 transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${card.color}`}>
                  <card.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{card.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
