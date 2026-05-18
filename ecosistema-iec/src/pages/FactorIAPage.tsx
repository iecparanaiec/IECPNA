import { motion } from 'motion/react';
import { 
  Code2, 
  Cpu, 
  Globe, 
  Rocket, 
  Layers, 
  Zap, 
  ShieldCheck, 
  Clock,
  Layout,
  Terminal,
  Workflow,
  Search,
  CheckCircle2,
  Users,
  MessageSquare,
  TrendingDown,
  ShoppingBag,
  Store
} from 'lucide-react';

const TEAM = [
  { name: "Goró Agustín", role: "Founder & CEO", specialty: "Strategic Direction & AI Architecture", img: "../image/equipo-1.jpg" },
  { name: "Yusleydi Castillo", role: "Normalización y Estructuración de Datos", specialty: "Limpieza y normalización de bases de datos para entrenamiento de agentes de IA.", img: "../image/equipo-22.jpg" },
  { name: "Pablo Becker", role: "Director de Ventas y Dirección Comercial", specialty: "Expansión estratégica y gestión de vínculos comerciales con el sector local.", img: "../image/equipo-33.jpg" },
  { name: "Daniel Carbonell", role: "Programador Frontend", specialty: "Desarrollo de interfaces visuales de alta precisión y lógica de navegación.", img: "../image/equipo-44.jpg" },
  { name: "Rocio Riffel", role: "Frontend Specialist UI/UX & React", specialty: "Diseño de experiencias intuitivas y desarrollo escalable sobre React.", img: "../image/equipo-55.jpg" },
  { name: "Raúl Brizuela", role: "Testing & Despliegue", specialty: "Control de calidad en laboratorio y subida de proyectos a producción.", img: "../image/equipo-66.jpg" }
];

const STACK = [
  {
    title: "Desarrollo Base",
    desc: "v0.app — Plataforma de generación de interfaces visuales que acelera la construcción inicial, garantizando estructuras modernas.",
    icon: Layout
  },
  {
    title: "Optimización IA",
    desc: "Claude IA — Inteligencia artificial avanzada para optimización de código, generación de textos comerciales y refinamiento continuo.",
    icon: Cpu
  },
  {
    title: "Control de Versiones",
    desc: "Repositorio Git — Sistema obligatorio de versionado que documenta cada cambio, permite rollback inmediato y asegura trazabilidad.",
    icon: Terminal
  },
  {
    title: "Hosting Profesional",
    desc: "Infraestructura Propia — Servidores optimizados de la factorIA con publicación controlada, garantizando seguridad y rendimiento.",
    icon: Globe
  }
];

const SOLUTIONS = [
  { 
    title: "Landing Comercial", 
    desc: "Diseñada específicamente para conversión directa con llamado a la acción dominante.", 
    icon: Rocket,
    mockups: ["../image/mockup-landing-1.jpg", "../image/mockup-landing-2.jpg", "../image/mockup-landing-3.jpg"]
  },
  { 
    title: "Web Institucional", 
    desc: "Presentación profesional de tu empresa con servicios completos y canales de contacto.", 
    icon: Layers,
    mockups: ["../image/mockup-inst-1.jpg", "../image/mockup-inst-2.jpg", "../image/mockup-inst-3.jpg"]
  },
  { 
    title: "Catálogo Digital", 
    desc: "Productos organizados por categorías con imágenes, descripciones y consulta directa.", 
    icon: Search,
    mockups: ["../image/mockup-cat-1.jpg", "../image/mockup-cat-2.jpg", "../image/mockup-cat-3.jpg"]
  },
  { 
    title: "Tienda Online (E-commerce)", 
    desc: "Carrito de compras simple y funcional enfocado en la experiencia de venta digital.", 
    icon: ShoppingBag,
    mockups: ["../image/mockup-eco-1.jpg", "../image/mockup-eco-2.jpg", "../image/mockup-eco-3.jpg"]
  }
];

export default function FactorIAPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <h1 className="text-5xl md:text-7xl display-title text-white">
                Factor<span className="text-cyan-400">IA</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-zinc-300 font-light">
                Redefiniendo el Comercio mediante Inteligencia Productiva
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed font-light">
                No hacemos "páginas web". Diseñamos ecosistemas operativos que transforman la manera en que un comercio local interactúa con su mercado, reduciendo drásticamente los costos innecesarios y potenciando la eficiencia mediante IA.
              </p>
                <div className="flex gap-4">
                  <a 
                    href="https://wa.me/543434664964?text=Hola! Quiero conocer la propuesta de FactorIA" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-8 py-4 bg-cyan-500 text-white rounded-xl font-bold hover:bg-cyan-400 transition-all glow-cyan active:scale-95 text-center"
                  >
                    Ver Propuesta
                  </a>
                  <a href="#equipo" className="px-8 py-4 glass border border-white/10 text-white rounded-xl font-bold hover:bg-white/5 transition-all active:scale-95 text-center">
                    Nuestro Equipo
                  </a>
                </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col gap-6"
            >
              <div className="aspect-video rounded-[3rem] overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
                <img 
                  src="../image/ia2.jpg" 
                  alt="FactorIA Hero"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 glass glow-cyan rounded-3xl border border-white/10 max-w-sm ml-auto">
                <p className="text-xs text-white leading-relaxed font-medium text-center">Transformación digital estratégica para el comercio del futuro.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Smarteo & Centros de Costo */}
      <section className="py-24 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6">
                  <TrendingDown className="w-6 h-6" />
                </div>
                <h2 className="text-4xl font-display text-white">El Concepto de Smarteo: Optimización Real</h2>
                <p className="text-zinc-400 leading-relaxed font-light">
                  En el comercio tradicional, la carga impositiva, el alquiler, los servicios (agua, gas, luz) y los costos operativos fijos pesan directamente sobre el producto en vidriera. 
                </p>
                <div className="p-6 rounded-2xl bg-zinc-900 border border-white/5 space-y-4">
                  <h4 className="text-white font-bold">Reducción de Centros de Costo</h4>
                  <p className="text-zinc-500 text-sm font-light leading-relaxed">
                    Nuestra metodología de Smarteo traslada la presencia de la empresa a la red, optimizando los centros de costo que no agregan valor al producto final. Menos infraestructura física ociosa, más eficiencia digital.
                  </p>
                </div>
             </div>
             <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Impuestos", val: "Optimización Fiscal" },
                  { label: "Logística", val: "Distribución Inteligente" },
                  { label: "Fijos", val: "Reducción de Alquiler" },
                  { label: "Operativos", val: "Automatización 24/7" }
                ].map((stat, idx) => (
                  <div key={idx} className="p-8 rounded-[2.5rem] glass border-white/5 flex flex-col justify-center gap-2">
                    <span className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest">{stat.label}</span>
                    <span className="text-white font-bold leading-tight">{stat.val}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Seccion Agente de IA */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1 order-2 md:order-1">
              <div className="grid grid-cols-2 gap-6">
                <div className="p-8 rounded-3xl bg-cyan-500/5 border border-cyan-500/10 space-y-4 h-fit">
                  <MessageSquare className="w-8 h-8 text-cyan-400" />
                  <h3 className="text-white font-bold">Atención 24/7</h3>
                  <p className="text-zinc-500 text-xs font-light">Nunca pierdas una venta. Tu agente responde consultas instantáneamente a cualquier hora.</p>
                </div>
                <div className="p-8 rounded-3xl bg-zinc-900 border border-white/5 space-y-4 h-fit mt-12">
                  <Clock className="w-8 h-8 text-zinc-600" />
                  <h3 className="text-white font-bold">Gestión de Turnos</h3>
                  <p className="text-zinc-500 text-xs font-light">Automatiza tu agenda. El agente coordina citas sin errores ni demoras humanas.</p>
                </div>
              </div>
            </div>
            <div className="flex-1 space-y-8 order-1 md:order-2">
              <span className="text-cyan-400 font-bold tracking-widest text-xs uppercase">Tecnología de Vanguardia</span>
              <h2 className="text-4xl md:text-5xl display-title text-white">Tu Comercio con Agente de IA</h2>
              <p className="text-zinc-400 text-lg leading-relaxed font-light">
                Un agente de IA no es un chatbot básico. Es un cerebro digital capaz de entender el lenguaje natural de tus clientes, asesorarlos sobre productos y cerrar ventas o agendar turnos de manera autónoma.
              </p>
              <p className="text-zinc-500 font-light">
                Incorporamos de serie un agente especializado en todas nuestras soluciones web. Revoluciona la atención al cliente eliminando esperas y filtrando oportunidades reales de negocio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Propuesta de Valor / Pricing */}
      <section id="propuesta" className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl display-title text-white">Inversión Inteligente</h2>
            <p className="text-zinc-500 mt-4 font-light">Soluciones de alto impacto diseñadas para el mercado local.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-12 rounded-[3.5rem] glass border-white/5 space-y-8 hover:border-cyan-500/20 transition-all flex flex-col">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">Institucionales / Landing</h3>
                <p className="text-zinc-500 text-sm font-light">Ideal para prestadores de servicios y empresas que buscan posicionamiento.</p>
              </div>
              <div className="mt-auto">
                <span className="text-5xl font-display font-black text-white">$300.000</span>
                <span className="text-zinc-600 text-sm font-mono ml-2">ARS + MANT.</span>
              </div>
              <ul className="space-y-3 pt-6 border-t border-white/5">
                {[
                  "Agente de IA (Atención/Turnos)",
                  "Diseño Responsive Premium",
                  "SEO Básico Configurado",
                  "Hosting Profesional Incluido"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs text-zinc-400">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-12 rounded-[3.5rem] bg-zinc-900 border border-cyan-500/30 space-y-8 relative overflow-hidden flex flex-col">
              <div className="absolute top-8 right-8 px-3 py-1 bg-cyan-500 text-white text-[10px] uppercase font-bold rounded-full tracking-widest">Recomendado</div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">E-commerce Completo</h3>
                <p className="text-zinc-500 text-sm font-light">Tu tienda online lista para vender productos con catálogo y checkout.</p>
              </div>
              <div className="mt-auto">
                <span className="text-5xl font-display font-black text-cyan-400">$500.000</span>
                <span className="text-zinc-600 text-sm font-mono ml-2">ARS + MANT.</span>
              </div>
              <ul className="space-y-3 pt-6 border-t border-white/5">
                {[
                  "Agente de IA de Atención y Venta",
                  "Gestión de Stock y Catálogo",
                  "Pasarela de Pagos Integrada",
                  "Acceso Gratis a ComercIA Inteligente"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs text-zinc-400">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ComercIA Inteligente App Section */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="p-12 md:p-20 rounded-[3.5rem] bg-zinc-900 border border-white/5 flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                <Store className="w-4 h-4 text-cyan-400" />
                <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-bold">App ComercIA Inteligente</span>
              </div>
              <h2 className="text-4xl md:text-5xl display-title text-white leading-tight">
                El Ecosistema Comercial Local en tu Mano
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed font-light">
                Hemos desarrollado una plataforma integral donde la comunidad puede buscar no solo negocios, sino productos específicos. 
                ¿Dónde consigo un serrucho? Nuestra app le mostrará instantáneamente las ferreterías locales que lo tienen en stock.
              </p>
              <div className="p-6 bg-black/40 rounded-2xl border border-white/5 font-light text-sm text-zinc-500">
                <span className="text-cyan-400 font-bold">Beneficio Exclusivo:</span> El acceso y presencia en esta app es totalmente <span className="text-white font-bold">GRATUITO</span> para todos los comercios que desarrollen su sitio web con la FactorIA.
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="w-full aspect-square bg-gradient-to-br from-cyan-500/20 to-transparent absolute blur-3xl -z-10" />
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Búsqueda por Rubro",
                  "Búsqueda por Producto",
                  "Geolocalización Local",
                  "Integración Directa"
                ].map((item, idx) => (
                  <div key={idx} className="p-8 rounded-3xl glass border border-white/5 flex flex-col gap-4 group hover:border-cyan-500/20 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-600 group-hover:text-cyan-400 transition-colors">
                      <Search className="w-5 h-5" />
                    </div>
                    <span className="text-white font-bold text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portafolio de Soluciones - Grid icons & Gallery */}
      <section className="py-24 bg-zinc-950/30 font-sans">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
              <span className="text-zinc-600 font-mono text-sm uppercase tracking-[0.3em]">Portafolio de Maquetas</span>
              <h2 className="text-4xl md:text-5xl display-title text-white mt-4">Nuestros Modelos de Producción</h2>
          </div>
          
          <div className="space-y-24">
            {SOLUTIONS.map((sol, idx) => (
              <div key={idx} className="space-y-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-8">
                  <div className="flex gap-6 items-center">
                    <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                      <sol.icon className="w-8 h-8" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-3xl font-bold text-white">{sol.title}</h3>
                      <p className="text-zinc-500 font-light">{sol.desc}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-cyan-400/50">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-[10px] uppercase tracking-widest font-bold">Maquetas Disponibles</span>
                  </div>
                </div>

                <div className="flex justify-center py-20">
                  <motion.div 
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    className="relative w-full max-w-sm md:max-w-xl aspect-[4/3] flex items-center justify-center"
                  >
                    {sol.mockups.map((img, imgIdx) => (
                      <motion.div 
                        key={imgIdx}
                        variants={{
                          rest: { 
                            x: (imgIdx - 1) * 40, 
                            rotate: (imgIdx - 1) * 12, 
                            scale: imgIdx === 1 ? 1.05 : 0.9,
                            zIndex: imgIdx === 1 ? 20 : 10,
                            translateY: imgIdx === 1 ? -30 : 20,
                            opacity: 1
                          },
                          hover: { 
                            x: (imgIdx - 1) * (window.innerWidth < 768 ? 100 : 220), 
                            rotate: 0, 
                            scale: 1,
                            zIndex: 30,
                            translateY: 0,
                            opacity: 1
                          }
                        }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        className="absolute w-48 md:w-64 aspect-[4/5] rounded-[2.5rem] overflow-hidden glass border-white/10 shadow-2xl group flex-shrink-0"
                      >
                        <img 
                          src={img} 
                          alt={`${sol.title} Mockup ${imgIdx + 1}`}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800";
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                           <span className="text-white text-[10px] font-bold tracking-widest uppercase">Variante {imgIdx + 1}</span>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="equipo" className="py-24 bg-zinc-950/80- relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-4">
              <Users className="text-cyan-400 w-6 h-6" />
              <span className="text-zinc-600 font-mono text-sm uppercase tracking-[0.3em]">Talento FactorIA</span>
            </div>
            <h2 className="text-4xl md:text-5xl display-title text-white">Especialistas en Desarrollo Web & IA</h2>
            <p className="text-zinc-500 mt-6 max-w-2xl font-light">
              Nuestra unidad de desarrollo está liderada por nuestro CEO y un equipo integrado por especialistas orientados a la excelencia operativa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM.map((dev, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-[3rem] glass border border-white/5 hover:border-cyan-500/20 transition-all group flex flex-col items-center text-center"
              >
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-8 border-4 border-white/5 group-hover:border-cyan-500/30 transition-all duration-500 shadow-2xl">
                  <img 
                    src={dev.img} 
                    alt={dev.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${dev.name}`;
                    }}
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-bold text-xl mb-1 group-hover:text-cyan-400 transition-colors">{dev.name}</h4>
                    <p className="text-cyan-400 text-xs uppercase tracking-widest font-bold">{dev.role}</p>
                  </div>
                  <div className="w-8 h-px bg-white/10 mx-auto" />
                  <p className="text-zinc-500 text-sm font-light leading-relaxed">{dev.specialty}</p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/5 w-full">
                  <div className="flex justify-center gap-2">
                    <Code2 className="w-4 h-4 text-zinc-700" />
                    <Terminal className="w-4 h-4 text-zinc-700" />
                    <Cpu className="w-4 h-4 text-zinc-700" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack Tecnológico */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-zinc-600 font-mono text-sm uppercase tracking-[0.3em]">Tecnología</span>
            <h2 className="text-4xl md:text-5xl display-title text-white mt-4">Stack Tecnológico de Última Generación</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {STACK.map((item, idx) => (
              <div key={idx} className="p-10 rounded-[3rem] glass border-white/5 hover:border-white/10 transition-all flex gap-8">
                <div className="w-16 h-16 rounded-2xl bg-zinc-900 flex-shrink-0 flex items-center justify-center text-zinc-500 border border-white/5 shadow-inner">
                  <item.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-zinc-500 text-sm font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8">
            <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-bold">Workflow</span>
          </div>
          <h2 className="text-4xl md:text-5xl display-title text-white mb-20 text-center">Flujo de Producción Estandarizado</h2>
          
          <div className="grid md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              { step: "Ingreso", icon: Clock },
              { step: "Preparación", icon: Workflow },
              { step: "Producción", icon: Code2 },
              { step: "Control QA", icon: ShieldCheck },
              { step: "Cambios", icon: CheckCircle2 },
              { step: "Publicación", icon: Rocket },
              { step: "Cierre", icon: CheckCircle2 }
            ].map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="p-6 rounded-3xl glass border border-white/5 relative z-10 hover:border-cyan-500/20 transition-all">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-500/20">
                    <step.icon className="w-5 h-5 text-zinc-600 group-hover:text-cyan-400" />
                  </div>
                  <p className="text-white font-bold text-xs uppercase tracking-wider">{step.step}</p>
                </div>
                {idx < 6 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-px bg-white/10 z-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
           <div className="p-12 md:p-20 rounded-[3.5rem] bg-zinc-900 border border-white/5 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                <h2 className="text-4xl md:text-5xl display-title text-white">¿Necesitás una web comercial de alta calidad?</h2>
                <p className="text-zinc-500 font-light text-lg">
                  Nuestra factoría está lista para procesar tu proyecto y entregártelo en 30 días bajo estándares de calidad premium.
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <a 
                    href="https://wa.me/543434664964" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-10 py-5 bg-white text-black rounded-2xl font-bold hover:bg-cyan-400 transition-all active:scale-95 shadow-xl inline-block"
                  >
                    Solicitar Presupuesto
                  </a>
                  <a 
                    href="https://wa.me/543434664964" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-10 py-5 glass border border-white/10 text-white rounded-2xl font-bold hover:bg-white/5 transition-all inline-block"
                  >
                    Ver demo comercial
                  </a>
                </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}

