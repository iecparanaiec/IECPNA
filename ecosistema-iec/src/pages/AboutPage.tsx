import { motion } from 'motion/react';
import { 
  Target, 
  Eye, 
  Zap, 
  Settings, 
  Cpu, 
  BarChart3, 
  ShieldCheck, 
  Users, 
  Search,
  Compass,
  Lightbulb,
  Handshake,
  Layers,
  GraduationCap,
  Globe,
  ClipboardList,
  Layout,
  HardHat,
  Coffee
} from 'lucide-react';

export default function AboutPage() {
  const identity = [
    {
      title: "Misión",
      desc: "Impulsar ecosistemas empresariales inteligentes mediante estrategia, innovación, automatización, formación y desarrollo aplicado, generando estructuras más claras, eficientes y sostenibles.",
      icon: Target,
      color: "from-blue-400 to-indigo-600"
    },
    {
      title: "Visión",
      desc: "Ser una organización referente en la construcción de modelos integrales de transformación para empresas, instituciones y equipos que buscan crecer con inteligencia, estructura y proyección.",
      icon: Eye,
      color: "from-cyan-400 to-blue-600"
    },
    {
      title: "Impacto",
      desc: "Trabajamos para que cada implementación produzca mejoras concretas: más claridad operativa, mejor toma de decisiones, mayor capacidad de adaptación y evolución sostenida.",
      icon: Zap,
      color: "from-violet-400 to-purple-600"
    }
  ];

  const values = [
    {
      title: "Visión sistémica",
      desc: "Entendemos la organización como un sistema integrado y sinérgico.",
      icon: Layers
    },
    {
      title: "Innovación aplicada",
      desc: "Usamos tecnología e IA con sentido práctico y orientación real al contexto.",
      icon: Lightbulb
    },
    {
      title: "Compromiso",
      desc: "Nos involucramos con cada proyecto buscando resultados concretos y sostenibles.",
      icon: ShieldCheck
    },
    {
      title: "Claridad",
      desc: "Convertimos complejidad en estructura, orden y criterio de acción.",
      icon: Search
    },
    {
      title: "Aprendizaje continuo",
      desc: "Creemos en la mejora constante de personas, procesos, equipos y organizaciones.",
      icon: GraduationCap
    },
    {
      title: "Trabajo colaborativo",
      desc: "Construimos con otros, articulando capacidades y generando valor compartido.",
      icon: Handshake
    }
  ];

  const team = [
    {
      name: "Goró Agustín",
      role: "Dirección Estratégica",
      desc: "Fundador y CEO de IEC, especializado en Arquitectura de Ecosistemas Empresariales con IA. Lidera el Smarteo de Empresas mediante automatización, rediseño de procesos y transformación digital estratégica.",
      img: "../image/equipo-1.jpg",
      icon: Compass
    },
    {
      name: "Marcelo Perez",
      role: "Desarrollo de Negocios & Gestión Comercial",
      desc: "Socio y Director Comercial de CO+NEXUS, especializado en desarrollo de negocios, relaciones institucionales y crecimiento estratégico mediante tecnología e IA aplicada.",
      img: "../image/equipo-2.jpg",
      icon: Handshake
    },
    {
      name: "Raul Stoppello",
      role: "Arquitectura Estratégica & Desarrollo de Proyectos",
      desc: "Arquitecto especializado en desarrollo de proyectos y estructuras organizacionales para eficiencia y escalabilidad. En CO+NEXUS diseña sistemas de funcionamiento integrando procesos, tecnología y datos.",
      img: "../image/equipo-3.jpg",
      icon: Layers
    },
    {
      name: "Ricardo Carbonell",
      role: "Ingeniería Civil & Desarrollo Estratégico de Proyectos",
      desc: "Ingeniero civil y socio de CO+NEXUS. Especializado en desarrollo estratégico de proyectos, infraestructura y optimización de recursos desde su rol como Growth Partner.",
      img: "../image/equipo-4.jpg",
      icon: HardHat
    },
    {
      name: "María Paula Acebal",
      role: "Desarrollo de Ecosistemas Productivos & Comunicación Estratégica",
      desc: "Especialista en comunicación y gestión de ecosistemas productivos en AvanZia. Enfocada en construir vínculos estratégicos, gestionar información y potenciar entornos colaborativos.",
      img: "../image/equipo-5.jpg",
      icon: Users
    },
    {
      name: "Pablo Lescano",
      role: "Desarrollo Institucional & Comunicación Estratégica",
      desc: "Especialista en desarrollo institucional, articulación gubernamental y comunicación estratégica aplicada a ecosistemas productivos y organizacionales. Enfocado en fortalecer vínculos entre sector público, empresas e iniciativas de impacto.",
      img: "../image/equipo-6.jpg",
      icon: Globe
    },
    {
      name: "Florencia Solari",
      role: "Experiencias Gastronómicas & Ecosistemas de Encuentro",
      desc: "Chef y fundadora de Oliva en IEC. Crea entornos de encuentro mediante experiencias gastronómicas y hospitalidad para potenciar la conexión, el bienestar y la colaboración.",
      img: "../image/equipo-7.jpg",
      icon: Coffee
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-bold">Quiénes somos</span>
            </div>
            <h1 className="text-5xl md:text-7xl display-title text-white">
              Estrategia, <span className="text-cyan-400">innovación</span> y transformación.
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed font-light">
              En IEC trabajamos para diseñar ecosistemas empresariales inteligentes, integrando visión estratégica, procesos, automatización, desarrollo y formación. Ayudamos a organizaciones a crecer con más orden, claridad y eficiencia.
            </p>
            <div className="flex gap-4">
              <a href="#equipo" className="px-8 py-4 bg-white text-black rounded-xl font-bold hover:bg-cyan-400 transition-all active:scale-95 text-center">
                Conocer al equipo
              </a>
              <a 
                href="https://wa.me/543434664964" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-8 py-4 glass border border-white/10 text-white rounded-xl font-bold hover:bg-white/5 transition-all active:scale-95 text-center"
              >
                Hablar con un asesor
              </a>
            </div>
          </motion.div>

          <div className="relative">
             <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
                <img 
                  src="../image/nosotros.jpg" 
                  alt="Equipo IEC"
                  className="w-full h-full object-cover"
                />
             </div>
             <div className="absolute -bottom-10 -right-10 w-64 p-8 glass glow-cyan rounded-3xl hidden md:block">
                <h4 className="text-white font-bold mb-2">IEC</h4>
                <p className="text-xs text-zinc-400 leading-relaxed font-medium">Ingeniería organizacional e innovación aplicada para empresas que buscan evolucionar con criterio.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Identity Grid */}
      <section className="py-24 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-cyan-400 font-mono text-sm uppercase tracking-[0.3em]">Identidad</span>
            <h2 className="text-4xl md:text-5xl display-title text-white mt-4">Una propuesta construida para intervenir de forma integral.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {identity.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 rounded-[2.5rem] glass border-white/5 hover:border-white/10 transition-all group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-8 shadow-lg transform group-hover:rotate-12 transition-transform`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <span className="text-zinc-600 font-mono text-sm uppercase tracking-[0.3em]">Principios</span>
            <h2 className="text-4xl md:text-5xl display-title text-white mt-4">Nuestros valores.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex gap-6 group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-all">
                  <value.icon className="w-5 h-5 text-zinc-400 group-hover:text-cyan-400 transition-colors" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">{value.title}</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed font-light">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="equipo" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-24">
            <span className="text-cyan-400 font-mono text-sm uppercase tracking-[0.3em]">Capital Humano</span>
            <h2 className="text-4xl md:text-5xl display-title text-white mt-4">Siete perfiles complementarios.</h2>
            <p className="text-zinc-500 mt-6 font-light">Nuestro equipo une criterio estratégico, conocimiento técnico y compromiso real.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col"
              >
                <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-6 grayscale group-hover:grayscale-0 transition-all duration-700 border border-white/5">
                  <img src={`../image/equipo-${idx + 1}.jpg`} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center mb-3">
                      <member.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
                <div className="px-2">
                  <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest block mb-2">{member.role}</span>
                  <h4 className="text-xl font-bold text-white mb-3">{member.name}</h4>
                  <p className="text-zinc-500 text-xs leading-relaxed font-light">{member.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
           <div className="p-12 md:p-20 rounded-[3.5rem] bg-zinc-900 border border-white/5 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                <span className="text-cyan-400 font-bold tracking-widest text-xs uppercase">Cultura IEC</span>
                <h2 className="text-4xl md:text-5xl display-title text-white">Creemos en construir organizaciones más inteligentes, humanas y preparadas para evolucionar.</h2>
                <p className="text-zinc-500 font-light text-lg">
                  Buscamos construir estructuras que generen valor sostenido.
                </p>
                <a 
                  href="https://wa.me/543434664964" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-10 py-5 bg-cyan-500 text-white rounded-2xl font-bold hover:bg-cyan-400 transition-all glow-cyan active:scale-95 inline-block"
                >
                  Hablar con IEC
                </a>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
