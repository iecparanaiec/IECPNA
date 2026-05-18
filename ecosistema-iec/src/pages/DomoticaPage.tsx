import { motion } from 'motion/react';
import Domotica from '../components/Domotica';
import { 
  Zap, 
  ShieldCheck, 
  Sun, 
  Thermometer, 
  Lock, 
  Settings, 
  ArrowRight,
  Eye,
  Smartphone,
  Cpu,
  Lightbulb,
  MonitorCheck,
  CheckCircle2
} from 'lucide-react';

export default function DomoticaPage() {
  const applications = [
    { title: "Iluminación inteligente", desc: "Programación de escenas, encendidos automáticos y control remoto para mejorar confort.", icon: Lightbulb },
    { title: "Control de accesos", desc: "Cerraduras inteligentes, porteros y permisos para entradas residenciales o corporativas.", icon: Lock },
    { title: "Seguridad y monitoreo", desc: "Integración de cámaras, sensores y alertas para un mayor control del entorno.", icon: ShieldCheck },
    { title: "Climatización y energía", desc: "Automatización de sistemas y gestión de consumos para un funcionamiento eficiente.", icon: Thermometer },
    { title: "Escenas automáticas", desc: "Configuración de acciones encadenadas según horarios o condiciones ambientales.", icon: Settings },
    { title: "Integración a medida", desc: "Proyectos adaptados al espacio y al nivel de complejidad requerido por cada cliente.", icon: Cpu }
  ];

  const process = [
    { step: "01", title: "Relevamiento", desc: "Analizamos el espacio, las necesidades y las posibilidades técnicas de implementación." },
    { step: "02", title: "Diseño de solución", desc: "Definimos qué integrar, cómo automatizar y qué lógica de uso conviene aplicar." },
    { step: "03", title: "Instalación", desc: "Implementamos los dispositivos, configuraciones y conexiones necesarias." },
    { step: "04", title: "Puesta en marcha", desc: "Probamos, ajustamos y dejamos el sistema listo para usarse de forma simple." }
  ];

  return (
    <div className="pt-20">
      {/* Page Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-bold">Domótica IEC</span>
            </div>
            <h1 className="text-5xl md:text-7xl display-title text-white">
              Tecnología para <span className="text-cyan-400">transformar espacios.</span>
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed font-light">
              Desarrollamos soluciones de domótica pensadas para integrar automatización, control, seguridad, confort y eficiencia en distintos tipos de espacios.
            </p>
            <div className="flex gap-4">
              <a href="#galeria" className="px-8 py-4 bg-cyan-500 text-white rounded-xl font-bold hover:bg-cyan-400 transition-all glow-cyan active:scale-95 text-center">
                Ver proyectos
              </a>
              <a 
                href="https://wa.me/543434664964" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-8 py-4 glass border border-white/10 text-white rounded-xl font-bold hover:bg-white/5 transition-all active:scale-95 text-center"
              >
                Pedir presupuesto
              </a>
            </div>
          </motion.div>

          <div className="relative">
             <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
                <img 
                  src="../image/domotica-hero.jpg" 
                  alt="Domótica Inteligente"
                  className="w-full h-full object-cover"
                />
             </div>
             <div className="absolute -bottom-10 -left-10 w-64 p-8 glass glow-cyan rounded-3xl hidden md:block">
                <p className="text-xs text-white leading-relaxed font-medium">Automatización y control inteligente para espacios que buscan más comodidad y eficiencia.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Triptych Gallery */}
      <section id="galeria" className="py-24 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-zinc-600 font-mono text-sm uppercase tracking-[0.3em]">Domótica aplicada</span>
            <h2 className="text-4xl md:text-5xl display-title text-white mt-4">Instalaciones y resultados reales.</h2>
          </div>
          
          <div className="grid lg:grid-cols-12 gap-6 h-[600px]">
            <div className="lg:col-span-8 rounded-[3rem] overflow-hidden border border-white/5 grayscale hover:grayscale-0 transition-all duration-700">
               <img src="../image/triptico-1.jpg" alt="Smart Home" className="w-full h-full object-cover" />
            </div>
            <div className="lg:col-span-4 flex flex-col gap-6">
               <div className="flex-1 rounded-[2.5rem] overflow-hidden border border-white/5 grayscale hover:grayscale-0 transition-all duration-700">
                  <img src="../image/triptico-2.jpg" alt="Smart Control" className="w-full h-full object-cover" />
               </div>
               <div className="flex-1 rounded-[2.5rem] overflow-hidden border border-white/5 grayscale hover:grayscale-0 transition-all duration-700">
                  <img src="../image/triptico-3.jpg" alt="Smart Device" className="w-full h-full object-cover" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
           <div className="relative group">
              <div className="aspect-[4/3] rounded-[3rem] overflow-hidden border border-white/5 grayscale group-hover:grayscale-0 transition-all duration-700">
                <img src="../image/concepto.jpg" alt="Domotica Concept" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -right-10 p-10 glass rounded-[2.5rem] max-w-xs border border-white/10 glow-cyan">
                <h4 className="text-white font-bold mb-2">Qué es la domótica</h4>
                <p className="text-zinc-400 text-sm font-light">La integración de sistemas inteligentes para controlar y optimizar un espacio.</p>
              </div>
           </div>

           <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-cyan-400 font-mono text-sm uppercase tracking-[0.3em]">Concepto</span>
                <h2 className="text-4xl md:text-5xl display-title text-white">Tecnología para que un espacio funcione de forma inteligente.</h2>
                <p className="text-zinc-400 text-lg font-light leading-relaxed">
                  Permite automatizar y centralizar funciones para mejorar la experiencia de uso. Iluminación, climatización, accesos, seguridad y consumos integrados en una lógica simple.
                </p>
                <p className="text-zinc-500 font-light italic">
                  El objetivo primordial es diseñar un sistema coherente que responda fielmente a las necesidades reales.
                </p>
              </div>

              <div className="grid gap-4">
                {[
                  { title: "Más confort", desc: "Control simple y escenas automatizadas.", icon: Sun },
                  { title: "Más seguridad", desc: "Monitoreo, accesos y alertas inteligentes.", icon: ShieldCheck },
                  { title: "Más eficiencia", desc: "Optimización de consumos y funcionamiento.", icon: Zap }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl glass border border-white/5 group hover:border-cyan-500/20 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500 text-cyan-400 group-hover:text-white transition-all">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">{item.title}</h4>
                      <p className="text-zinc-500 text-sm font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </section>

      {/* Systems Smart Component */}
      <Domotica />

      {/* Applications Grid */}
      <section className="py-24 bg-zinc-950/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <span className="text-zinc-600 font-mono text-sm uppercase tracking-[0.3em]">Aplicaciones posibles</span>
            <h2 className="text-4xl md:text-5xl display-title text-white mt-4">Soluciones de alcance integral.</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-8 rounded-[2.5rem] glass border-white/5 hover:border-white/10 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center mb-6 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/5 transition-all">
                  <app.icon className="w-5 h-5 text-zinc-500 group-hover:text-cyan-400 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{app.title}</h3>
                <p className="text-zinc-500 text-sm font-light leading-relaxed">{app.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Team */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="relative order-2 lg:order-1">
                 <div className="aspect-video rounded-[3rem] overflow-hidden border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-700">
                    <img src="../image/equipo-tecnico.jpg" alt="Technical Team" className="w-full h-full object-cover" />
                 </div>
                 <div className="absolute -top-10 -left-10 w-48 h-48 bg-cyan-500/10 rounded-full blur-[80px]" />
              </div>
              <div className="space-y-8 order-1 lg:order-2">
                <span className="text-zinc-600 font-mono text-sm uppercase tracking-[0.3em]">Equipo técnico</span>
                <h2 className="text-4xl md:text-5xl display-title text-white">Diseño e implementación especializada.</h2>
                <p className="text-zinc-500 font-light text-lg leading-relaxed">
                  Contamos con un equipo de expertos que diseña cada proyecto reforzando confianza y capacidad de ejecución. Nuestra propuesta técnica combina criterio de diseño con conocimiento tecnológico avanzado.
                </p>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                    <span className="text-sm font-bold">Instalación certificada</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                    <span className="text-sm font-bold">Soporte post-venta</span>
                  </div>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-cyan-400 font-mono text-sm uppercase tracking-[0.3em]">Cómo trabajamos</span>
            <h2 className="text-4xl md:text-5xl display-title text-white mt-4">Del diseño a la realidad smart.</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative p-10 rounded-[2.5rem] glass border-white/5 hover:border-white/10 transition-all group"
              >
                <span className="text-7xl font-display font-black text-white/5 absolute top-6 right-6 group-hover:text-cyan-500/10 transition-colors">{item.step}</span>
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{item.title}</h3>
                <p className="text-zinc-500 text-sm font-light leading-relaxed relative z-10">{item.desc}</p>
              </motion.div>
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
                <span className="text-cyan-400 font-bold tracking-widest text-xs uppercase">Domótica IEC</span>
                <h2 className="text-4xl md:text-5xl display-title text-white">¿Querés un presupuesto para automatizar tu espacio?</h2>
                <p className="text-zinc-500 font-light text-lg">
                  Podemos analizar tu caso, relevar el espacio y diseñar una propuesta de domótica ajustada a tus necesidades y presupuesto.
                </p>
                <a 
                  href="https://wa.me/543434664964" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-10 py-5 bg-white text-black rounded-2xl font-bold hover:bg-cyan-400 transition-all active:scale-95 inline-block"
                >
                  Pedir presupuesto ahora
                </a>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}

