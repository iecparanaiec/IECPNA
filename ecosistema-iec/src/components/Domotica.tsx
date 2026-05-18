import { motion } from 'motion/react';
import { 
  Home, 
  Building2, 
  Briefcase, 
  Lightbulb, 
  ShieldCheck, 
  Thermometer, 
  Cpu, 
  Layers,
  ArrowRight,
  Smartphone
} from 'lucide-react';

export default function Domotica() {
  const systems = [
    {
      title: "Smart para hogares",
      desc: "Automatización de iluminación, climatización, persianas, audio y seguridad para una experiencia más cómoda.",
      icon: Home,
      color: "from-cyan-400 to-blue-600",
      features: ["Control desde celular", "Escenas de confort", "Seguridad inteligente"]
    },
    {
      title: "Smart para edificios",
      desc: "Integración de accesos, áreas comunes y control energético para mejorar la administración.",
      icon: Building2,
      color: "from-indigo-400 to-violet-600",
      features: ["Accesos inteligentes", "Gestión centralizada", "Optimización de recursos"]
    },
    {
      title: "Smart para empresas",
      desc: "Soluciones para oficinas y locales donde la automatización mejora la eficiencia y seguridad.",
      icon: Briefcase,
      color: "from-blue-400 to-cyan-600",
      features: ["Control de ambientes", "Automatización operativa", "Integración corporativa"]
    }
  ];

  return (
    <section id="sistemas-smart" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <span className="text-zinc-600 font-mono text-sm uppercase tracking-[0.3em]">Sistemas Smart</span>
          <h2 className="text-4xl md:text-5xl display-title text-white mt-4">Soluciones diseñadas para <span className="text-cyan-400">cada entorno.</span></h2>
          <p className="text-zinc-400 mt-6 max-w-2xl font-light">
            La domótica se adapta a tus necesidades. Desde el confort de tu hogar hasta la eficiencia de tu empresa.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {systems.map((system, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 rounded-[3rem] glass border-white/5 hover:border-white/10 transition-all group relative overflow-hidden"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${system.color} flex items-center justify-center mb-8 shadow-lg transform group-hover:-rotate-6 transition-transform`}>
                <system.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{system.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed font-light mb-8">
                {system.desc}
              </p>
              
              <ul className="space-y-3 mb-8">
                {system.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs text-zinc-400">
                    <div className="w-1 h-1 rounded-full bg-cyan-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Ver más button removed as it was not functional */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

