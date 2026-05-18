import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <div className="pt-20">
      <Contact />
      <section className="pb-24 pt-12">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid md:grid-cols-3 gap-8">
              {[
                { t: "Ubicación", d: "Gualeguaychú 449 Paraná, Entre Rios", s: "Estrategia y Tecnología", href: "https://maps.google.com/?q=Gualeguaychú+449+Paraná+Entre+Rios" },
                { t: "Email", d: "contacto@iec-ia.com.ar", s: "Soporte y Consultas", href: "mailto:contacto@iec-ia.com.ar" },
                { t: "WhatsApp", d: "+54 3434664964", s: "Atención Inmediata", href: "https://wa.me/543434664964" }
              ].map((box, idx) => (
                <a 
                  key={idx} 
                  href={box.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-8 rounded-3xl glass border-white/5 bg-white/[0.01] hover:border-cyan-500/20 transition-all group block"
                >
                  <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-2 block group-hover:text-cyan-400 transition-colors">{box.s}</span>
                  <h4 className="text-white font-bold text-xl mb-2">{box.t}</h4>
                  <p className="text-zinc-400 text-sm">{box.d}</p>
                </a>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
