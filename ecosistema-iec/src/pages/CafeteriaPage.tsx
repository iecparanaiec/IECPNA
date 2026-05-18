import { motion } from 'motion/react';
import { Coffee, Users, Calendar, ArrowRight, Utensils, Heart } from 'lucide-react';

export default function CafeteriaPage() {
  const details = [
    {
      title: "Un ambiente cálido y con estilo",
      desc: "CafeterIA Oliva ofrece un entorno cuidado, armónico y acogedor, pensado para que cada persona pueda disfrutar del lugar.",
      img: "../image/detalle-cafe-1.jpg"
    },
    {
      title: "Un lugar para encontrarse",
      desc: "Ya sea para una charla, una reunión o una tarde distinta, el espacio invita al encuentro y a compartir buenos momentos.",
      img: "../image/detalle-cafe-2.jpg"
    },
    {
      title: "Experiencias que dejan huella",
      desc: "Escenario de eventos, actividades y experiencias que conecten personas, ideas y propuestas en un ambiente con identidad.",
      img: "../image/detalle-cafe-3.jpg"
    }
  ];

  const events = [
    {
      date: "15 de mayo · 18:30 hs",
      title: "Encuentro de comunidad y networking",
      desc: "Un espacio para conectar personas, ideas y proyectos en un entorno relajado."
    },
    {
      date: "22 de mayo · 17:00 hs",
      title: "Taller temático / experiencia especial",
      desc: "Propuesta ideal para mostrar actividades vinculadas a formación o recreación."
    },
    {
      date: "29 de mayo · 19:30 hs",
      title: "Noche de evento o presentación",
      desc: "Lanzamientos, encuentros institucionales o presentaciones integradas."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6B8E23]/10 border border-[#6B8E23]/20">
              <Coffee className="w-3 h-3 text-[#6B8E23]" />
              <span className="text-[10px] uppercase tracking-widest text-[#6B8E23] font-bold">CafeterIA Oliva</span>
            </div>
            <h1 className="text-5xl md:text-7xl display-title text-white">
              Un espacio <span className="text-gradient-olive">cálido</span> y con identidad.
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed font-light">
              Pensado para disfrutar buenos momentos, encontrarse con otros y vivir una experiencia cálida, moderna y con identidad. Combina ambiente, estilo y versatilidad.
            </p>
            <div className="flex gap-4">
              <a href="#galeria" className="px-8 py-4 bg-[#6B8E23] text-white rounded-xl font-bold hover:bg-[#556B2F] transition-all glow-olive active:scale-95 text-center">
                Ver el espacio
              </a>
              <a href="#eventos" className="px-8 py-4 glass border border-white/10 text-white rounded-xl font-bold hover:bg-white/5 transition-all active:scale-95 text-center">
                Próximos eventos
              </a>
            </div>
          </motion.div>

          <div className="relative">
             <div className="aspect-[4/3] rounded-[3rem] overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
                <img 
                  src="../image/cafeteria-hero.jpg" 
                  alt="CafeterIA Oliva Hero"
                  className="w-full h-full object-cover"
                />
             </div>
             <div className="absolute -bottom-10 -right-10 w-64 p-8 glass glow-olive rounded-3xl hidden md:block">
                <p className="text-xs text-white leading-relaxed font-medium">Un entorno versátil y preparado para experiencias gastronómicas y comunidad.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Triptych Gallery */}
      <section className="py-24 bg-zinc-950/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="text-[#6B8E23] font-mono text-sm uppercase tracking-[0.3em]">Identidad</span>
            <h2 className="text-4xl md:text-5xl display-title text-white mt-4">Un lugar pensado para disfrutar, encontrarse y compartir.</h2>
          </div>
          
          <div className="grid grid-cols-12 gap-6 h-[600px]">
             <div className="col-span-8 rounded-[3rem] overflow-hidden border border-white/10">
                <img src="../image/triptico-cafe-1.jpg" className="w-full h-full object-cover" alt="Gallery 1" />
             </div>
             <div className="col-span-4 flex flex-col gap-6">
                <div className="flex-1 rounded-[2.5rem] overflow-hidden border border-white/10">
                   <img src="../image/triptico-cafe-2.jpg" className="w-full h-full object-cover" alt="Gallery 2" />
                </div>
                <div className="flex-1 rounded-[2.5rem] overflow-hidden border border-white/10">
                   <img src="../image/triptico-cafe-3.jpg" className="w-full h-full object-cover" alt="Gallery 3" />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Split Concept */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
             <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/10">
                <img src="../image/cafeteria-concepto.jpg" className="w-full h-full object-cover" alt="Concept" />
             </div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 p-8 glass-dark rounded-3xl border-white/10 glow-olive">
                <h4 className="text-white font-bold mb-2">Un centro de experiencias</h4>
                <p className="text-[10px] text-zinc-400 leading-relaxed capitalize">Una experiencia integrada al ecosistema IEC.</p>
             </div>
          </div>
          <div className="space-y-8">
            <span className="text-[#6B8E23] font-mono text-sm uppercase tracking-[0.3em]">Nuestra esencia</span>
            <h2 className="text-4xl md:text-5xl display-title text-white">Una experiencia para disfrutar en cada visita.</h2>
            <p className="text-zinc-400 text-lg font-light leading-relaxed">
              Nace como un lugar para encontrarse, relajarse y vivir momentos agradables en un ambiente cuidado, moderno y con personalidad.
            </p>
            <ul className="space-y-4">
              {[
                { t: "Espacio cálido", d: "Generamos experiencias agradables y cercanas." },
                { t: "Formato versátil", d: "Apto para talleres, reuniones y acciones especiales." },
                { t: "Conexión IEC", d: "Unidad integrada al ecosistema de transformación." }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="mt-1 w-5 h-5 rounded-full bg-[#6B8E23]/20 flex items-center justify-center border border-[#6B8E23]/30">
                    <Heart className="w-3 h-3 text-[#6B8E23]" />
                  </div>
                  <div>
                    <strong className="text-white text-sm block">{item.t}</strong>
                    <p className="text-zinc-500 text-xs">{item.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Detail Gallery */}
      <section className="py-24 bg-black/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-display font-bold text-white mb-6">Detalles que hacen la diferencia</h2>
            <p className="text-zinc-400">Rincones y atmósferas que hacen única a CafeterIA Oliva.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {details.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-64 rounded-3xl overflow-hidden mb-6 border border-white/5 grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.title} />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#6B8E23] transition-colors">{item.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="eventos" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-[#6B8E23] font-mono text-sm uppercase tracking-[0.3em]">Agenda</span>
              <h2 className="text-4xl md:text-5xl display-title text-white mt-4">Lo que se viene.</h2>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl glass border-white/5 hover:border-[#6B8E23]/30 transition-all flex flex-col"
              >
                <div className="flex items-center gap-2 text-[#6B8E23] text-xs font-bold mb-6">
                  <Calendar className="w-4 h-4" />
                  <span>{event.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 flex-1">{event.title}</h3>
                <p className="text-zinc-500 text-sm mb-8">{event.desc}</p>
                <a 
                  href="https://wa.me/543434664964?text=Hola! Me interesa participar en un evento en CafeterIA Oliva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest hover:gap-4 transition-all"
                >
                  Quiero participar <ArrowRight className="w-4 h-4 text-[#6B8E23]" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="p-12 md:p-20 rounded-[3.5rem] bg-zinc-900 border border-white/5 text-center relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#6B8E23]/20 to-transparent" />
             <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                <span className="text-[#6B8E23] font-bold tracking-widest text-xs uppercase">Reservas & Eventos</span>
                <h2 className="text-4xl md:text-5xl display-title text-white">¿Querés organizar una actividad o reservar el espacio?</h2>
                <p className="text-zinc-500">Coordinamos acciones, encuentros y experiencias personalizadas.</p>
                <a 
                  href="https://wa.me/543434664964" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-10 py-5 bg-[#6B8E23] text-white rounded-2xl font-bold hover:bg-[#556B2F] transition-all glow-olive active:scale-95 inline-block"
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

