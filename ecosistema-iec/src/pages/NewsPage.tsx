import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, ArrowRight, X } from 'lucide-react';

interface NewsItem {
  type: string;
  date: string;
  title: string;
  desc: string;
  fullDesc: string;
  img: string;
}

export default function NewsPage() {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  const news: NewsItem[] = [
    {
      type: "Convenio",
      date: "6 de Mayo, 2026",
      title: "Convenio IEC & CeCip: Innovación Local",
      desc: "Impulsando el comercio local con el programa ComercIA Inteligente para más de 300 comercios.",
      fullDesc: "El 6 de Mayo, el IEC firmó un convenio trascendental con el CeCip, impulsando la innovación en el comercio local mediante la aplicación del programa ComercIA Inteligente. Esta iniciativa tiene la capacidad de alcanzar a más de 300 comercios de la ciudad, brindándoles herramientas de IA, automatización y digitalización para transformar su competitividad y eficiencia operativa.",
      img: "../image/noticia-convenio.jpg"
    },
    {
      type: "Capacitación",
      date: "27 de Mayo, 2026",
      title: "Charla: Smartea tu Comercio",
      desc: "La primera charla del ciclo de capacitación tecnológica en el CeCIP.",
      fullDesc: "Este 27 de Mayo se dictará la primer charla en CeCIP denominada 'Smartea tu comercio'. Este evento marca el inicio de una estructura de charlas, capacitaciones y actualizaciones permanentes diseñadas para que los comerciantes locales adopten el concepto de Smarteo y optimicen sus modelos de negocio.",
      img: "../image/noticia-charla.jpg"
    },
    {
      type: "Evento",
      date: "11 y 12 de Junio, 2026",
      title: "IEC en Campus Party Paraná",
      desc: "Espacio exclusivo en el evento tecnológico más grande de Latinoamérica en el CPC.",
      fullDesc: "Durante los días 11 y 12 de Junio, el IEC participará con un espacio exclusivo en Campus Party, el evento de tecnología, innovación y emprendimiento más grande de Latinoamérica. Estaremos presentes en el CPC (Centro Provincial de Convenciones) de Paraná, compartiendo nuestra visión sobre la educación tecnológica y la transformación digital aplicada. Ademas nuestro CEO, Goró Agustín, será uno de los Speakers del evento en el escenario principal.",
      img: "../image/noticia-campus.jpg"
    },
    {
      type: "Masterclass",
      date: "Miércoles 17 de Junio, 2026",
      title: "Masterclass IA: Especial Mujeres Empresarias",
      desc: "Cómo hacer en 1 hora lo que hoy te lleva 10. Especial para mujeres empresarias y profesionales.",
      fullDesc: "Masterclass gratuita sobre Inteligencia Artificial especialmente pensada para mujeres empresarias y profesionales. Aprendé cómo hacer en 1 hora lo que hoy te lleva 10. Miércoles 17/06 de 20:00 a 21:30 hs. Cupos limitados. Instituto IEC · Gualeguaychú 449. En colaboración con CeCIP (Centro Comercial e Industrial de Paraná).",
      img: "../image/evento-masterclass-mujeres.png"
    },
    {
      type: "Masterclass",
      date: "Miércoles 24 de Junio, 2026",
      title: "Masterclass IA: Cómo hacer en 1 hora lo que hoy te lleva 10",
      desc: "Menos teoría, más resultados: taller práctico de IA aplicada a tus tareas diarias.",
      fullDesc: "Masterclass gratuita sobre Inteligencia Artificial. Menos teoría, más resultados: taller práctico de IA aplicada a tus tareas diarias. Aprendé cómo hacer en 1 hora lo que hoy te lleva 10. Miércoles 24/06 de 20:00 a 21:30 hs. Cupos limitados. Instituto IEC · Gualeguaychú 449. En colaboración con JEP (Jóvenes Empresarios Paraná) y CeCIP (Centro Comercial e Industrial de Paraná).",
      img: "../image/evento-masterclass-1hora.png"
    },
    {
      type: "Clase Gratuita",
      date: "Lunes 29 de Junio, 2026",
      title: "IA Kids: Robótica y Programación con IA",
      desc: "Clase gratuita de robótica y programación con inteligencia artificial para niños.",
      fullDesc: "Clase gratuita de robótica y programación con inteligencia artificial pensada para los más chicos. IA Kids es una experiencia diseñada para que los niños descubran el mundo de la tecnología de forma divertida. Lunes 29/06 de 18:00 a 19:30 hs. Cupo limitado. Instituto IEC · Gualeguaychú 449.",
      img: "../image/evento-ia-kids.png"
    },
    {
      type: "Clase Gratuita",
      date: "Martes 30 de Junio, 2026",
      title: "Robótica y Programación para Adolescentes",
      desc: "Clase gratuita de robótica y programación con IA orientada a adolescentes.",
      fullDesc: "Clase gratuita de robótica y programación para adolescentes. Una oportunidad para que los jóvenes se sumerjan en el mundo de la inteligencia artificial, la robótica y la programación de la mano de nuestro equipo. Martes 30/06 de 15:30 a 17:00 hs. Cupo limitado. Instituto IEC · Gualeguaychú 449.",
      img: "../image/evento-clase-adolescentes.png"
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-zinc-600 font-mono text-sm uppercase tracking-[0.3em]">Comunidad IEC</span>
            <h1 className="text-5xl md:text-6xl display-title text-white mt-4">Novedades y Ecosistema</h1>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, idx) => (
              <motion.article 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group rounded-3xl overflow-hidden glass border-white/5 flex flex-col cursor-pointer"
                onClick={() => setSelectedNews(item)}
              >
                <div className="relative h-64 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800";
                    }}
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold text-white uppercase tracking-widest border border-white/10">
                    {item.type}
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-zinc-500 text-xs mb-4">
                    <Calendar className="w-3 h-3" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-8 flex-1">{item.desc}</p>
                  <button className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-widest hover:gap-4 transition-all">
                    Ver más <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de Detalle */}
      <AnimatePresence>
        {selectedNews && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedNews(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-zinc-900 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-3xl"
            >
              <button 
                onClick={() => setSelectedNews(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-white/10 transition-colors z-20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-video w-full relative overflow-hidden">
                <img 
                  src={selectedNews.img} 
                  alt={selectedNews.title} 
                  className="w-full h-full object-cover" 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800";
                  }}
                />
              </div>

              <div className="p-10 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    {selectedNews.type}
                  </span>
                  <div className="flex items-center gap-2 text-zinc-500 text-xs">
                    <Calendar className="w-3 h-3" />
                    <span>{selectedNews.date}</span>
                  </div>
                </div>
                <h2 className="text-3xl font-display font-bold text-white">{selectedNews.title}</h2>
                <p className="text-zinc-400 leading-relaxed font-light">
                  {selectedNews.fullDesc}
                </p>
                <div className="pt-6">
                  <button 
                    onClick={() => setSelectedNews(null)}
                    className="w-full py-4 bg-white text-black font-bold rounded-2xl hover:bg-cyan-400 transition-all active:scale-95"
                  >
                    Entendido
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
