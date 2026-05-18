import { motion } from 'motion/react';
import { 
  Brain, 
  Code, 
  Gamepad2, 
  Layers, 
  Map as MapIcon, 
  Clock, 
  Users, 
  Layout, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe
} from 'lucide-react';

export default function Capacitaciones() {
  const courses = [
    {
      id: "ia",
      tag: "Inteligencia Artificial",
      title: "Experto en aplicaciones prácticas con IA",
      desc: "Programa orientado a personas, equipos y profesionales que buscan aprender a aplicar la inteligencia artificial en contextos reales. En cada módulo se aborda una herramienta diferente de IA aplicada a la necesidad exclusiva del estudiante.",
      duration: "10 módulos",
      hours: "2 hs por módulo",
      modality: "Presencial / Virtual",
      modules: [
        "Herramientas de IA personalizadas.",
        "Automatización según flujo de trabajo.",
        "Asistentes inteligentes específicos.",
        "Generación de contenido aplicada.",
        "Análisis de datos y productividad.",
        "Integración de lógica de negocio.",
        "Optimización de procesos operativos.",
        "Desarrollo de soluciones a medida.",
        "Seguridad y ética en el uso de IA.",
        "Proyecto de implementación final."
      ],
      icon: Brain,
      color: "from-cyan-400 to-blue-600"
    },
    {
      id: "prog",
      tag: "Programación",
      title: "Programador experto con IA",
      desc: "Formación pensada para desarrollar soluciones digitales combinando lógica de programación, herramientas modernas y asistencia con IA. Integra desarrollo web, automatización, backend y el uso de IA como copiloto técnico.",
      duration: "9 meses",
      hours: "2 hs por semana",
      modality: "Presencial / Virtual",
      modules: [
        "Lógica y fundamentos de programación.",
        "HTML, CSS y estructura de interfaces.",
        "JavaScript aplicado y dinámica web.",
        "Integración con IA para desarrollo asistido.",
        "Automatizaciones, APIs y flujos de trabajo.",
        "Proyecto final y producción de solución funcional."
      ],
      icon: Code,
      color: "from-violet-400 to-indigo-600"
    },
    {
      id: "kids",
      tag: "Infancias y Tecnología",
      title: "Robotica Kids",
      desc: "Propuesta orientada a niños y niñas para acercarlos al pensamiento lógico, la creatividad y la resolución de problemas a través de la tecnología de una forma dinámica, lúdica y formativa.",
      duration: "Formato taller",
      hours: "Sábados 10 a 12 hs",
      modality: "Presencial",
      modules: [
        "Introducción al pensamiento lógico y tecnológico.",
        "Primeros pasos en robótica y ensamblado simple.",
        "Programación básica orientada a juego.",
        "Proyecto integrador y muestra final."
      ],
      icon: Gamepad2,
      color: "from-pink-400 to-rose-600"
    },
    {
      id: "revit",
      tag: "Diseño y Modelado",
      title: "Revit",
      desc: "Curso orientado a incorporar modelado BIM, documentación técnica y organización de proyectos en entornos de arquitectura, ingeniería y construcción con criterios prácticos de uso.",
      duration: "12 módulos",
      hours: "3 hs por módulo",
      modality: "Presencial / Virtual",
      modules: [
        "Entorno Revit y configuración inicial.",
        "Modelado arquitectónico básico.",
        "Familias, componentes y documentación.",
        "Láminas, vistas y organización del proyecto.",
        "Desarrollo de ejercicio o proyecto aplicado."
      ],
      icon: Layers,
      color: "from-amber-400 to-orange-600"
    },
    {
      id: "qgis",
      tag: "Geotecnologías",
      title: "QGIS",
      desc: "Formación para iniciarse o profundizar en sistemas de información geográfica. Aborda análisis espacial, gestión de datos geográficos, mapas temáticos y aplicación en proyectos territoriales.",
      duration: "12 módulos",
      hours: "3 hs por módulo",
      modality: "Presencial / Virtual",
      modules: [
        "Introducción a SIG y entorno de trabajo.",
        "Capas, datos y organización de información.",
        "Análisis espacial y herramientas principales.",
        "Mapas temáticos y visualización.",
        "Aplicación práctica sobre caso real."
      ],
      icon: MapIcon,
      color: "from-emerald-400 to-teal-600"
    }

  ];

  return (
    <section id="oferta-academica" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <span className="text-zinc-600 font-mono text-sm uppercase tracking-[0.3em]">Nuestra Propuesta</span>
          <h2 className="text-4xl md:text-5xl display-title text-white mt-4">Programas formativos con <span className="text-cyan-400">orientación práctica.</span></h2>
          <p className="text-zinc-400 mt-6 max-w-2xl font-light">
            En IEC impulsamos propuestas formativas orientadas a la aplicación práctica, la empleabilidad y la innovación.
          </p>
        </div>

        <div className="space-y-12">
          {courses.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`group relative grid lg:grid-cols-2 gap-0 overflow-hidden rounded-[3rem] border border-white/5 glass transition-all hover:border-white/10 ${
                idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Side */}
              <div className={`relative h-80 lg:h-auto overflow-hidden order-1 ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <img 
                  src={`../image/${course.id}.jpg`} 
                  alt={course.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent lg:hidden" />
                <div className="absolute top-8 left-8">
                  <div className={`px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white uppercase tracking-widest`}>
                    {course.tag}
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className={`p-8 md:p-12 lg:p-16 space-y-8 order-2 ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center shadow-lg`}>
                    <course.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl display-title text-white group-hover:text-cyan-400 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-zinc-400 font-light leading-relaxed">
                    {course.desc}
                  </p>
                </div>

                {/* Course Metadata */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-4 border-t border-white/5">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-zinc-500">
                      <Clock className="w-3 h-3" />
                      <span className="text-[10px] uppercase font-bold tracking-widest">Duración</span>
                    </div>
                    <p className="text-white text-sm font-medium">{course.duration}</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-zinc-500">
                      <Layout className="w-3 h-3" />
                      <span className="text-[10px] uppercase font-bold tracking-widest">Carga</span>
                    </div>
                    <p className="text-white text-sm font-medium">{course.hours}</p>
                  </div>
                  <div className="space-y-1 hidden md:block">
                    <div className="flex items-center gap-2 text-zinc-500">
                      <Globe className="w-3 h-3" />
                      <span className="text-[10px] uppercase font-bold tracking-widest">Modalidad</span>
                    </div>
                    <p className="text-white text-sm font-medium">{course.modality}</p>
                  </div>
                </div>

                {/* Modules List */}
                <div className="space-y-4">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-cyan-400">Estructura Modular</p>
                  <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                    {course.modules.map((mod, i) => (
                      <li key={i} className="flex items-start gap-3 group/item">
                        <div className="mt-1.5 w-1 h-1 rounded-full bg-zinc-700 group-hover/item:bg-cyan-500 transition-colors" />
                        <span className="text-xs text-zinc-500 group-hover/item:text-zinc-300 transition-colors line-clamp-1">{mod}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <a 
                    href={`https://wa.me/543434664964?text=Hola! Me interesa el curso: ${course.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-white text-xs font-bold uppercase tracking-[0.2em] group/btn"
                  >
                    Solicitar Inscripción 
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-black transition-all">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

