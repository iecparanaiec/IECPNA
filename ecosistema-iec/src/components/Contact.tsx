import { motion } from 'motion/react';
import { Send, CheckCircle2, Loader2, Mail, Phone, MapPin } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 2000);
  };

  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-4xl md:text-6xl display-title text-white mb-6">
                Iniciemos el <br />
                <span className="text-gradient">próximo nivel.</span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
                Estamos listos para auditar tu modelo de negocio y proponer una transformación radical.
              </p>
            </div>

              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Correo", val: "contacto@iec-ia.com.ar", href: "mailto:contacto@iec-ia.com.ar" },
                  { icon: Phone, label: "Teléfono", val: "+54 3434664964", href: "https://wa.me/543434664964" },
                  { icon: MapPin, label: "Ubicación", val: "Gualeguaychú 449 Paraná, Entre Rios", href: "https://maps.google.com/?q=Gualeguaychú+449+Paraná+Entre+Rios" }
                ].map((item, idx) => (
                  <a 
                    key={idx} 
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-6 group cursor-pointer"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-zinc-950 border border-white/5 flex items-center justify-center group-hover:border-cyan-500/30 transition-all">
                      <item.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h5 className="text-xs text-zinc-600 font-bold tracking-widest uppercase">{item.label}</h5>
                      <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">{item.val}</p>
                    </div>
                  </a>
                ))}
              </div>

            {/* Quote */}
            <div className="p-8 rounded-3xl glass-dark border-white/5 italic text-zinc-400 text-sm relative">
              <span className="absolute -top-4 left-6 text-6xl text-cyan-500/20 leading-none">“</span>
              La mejor forma de predecir el futuro es automatizándolo.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-[2.5rem] glass border-white/10"
          >
            {formState === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-6"
              >
                <div className="w-20 h-20 rounded-full bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30">
                  <CheckCircle2 className="w-10 h-10 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje Recibido!</h3>
                  <p className="text-zinc-400">Un consultor tecnológico se pondrá en contacto contigo en las próximas 24 horas.</p>
                </div>
                <button 
                  onClick={() => setFormState('idle')}
                  className="px-8 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all"
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Información Personal</label>
                  <div className="grid grid-cols-2 gap-4">
                    <input 
                      required
                      placeholder="Nombre"
                      className="w-full bg-zinc-950 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500/50 transition-all"
                    />
                    <input 
                      required
                      placeholder="Empresa"
                      className="w-full bg-zinc-950 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500/50 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Contacto</label>
                  <div className="grid grid-cols-2 gap-4">
                    <input 
                      required
                      type="email"
                      placeholder="Email Corporativo"
                      className="w-full bg-zinc-950 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500/50 transition-all"
                    />
                    <input 
                      required
                      type="tel"
                      placeholder="Teléfono"
                      className="w-full bg-zinc-950 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500/50 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Tu Desafío</label>
                  <textarea 
                    required
                    placeholder="Cuéntanos sobre tu proyecto o necesidad..."
                    rows={4}
                    className="w-full bg-zinc-950 border border-white/5 rounded-2xl px-6 py-4 text-white resize-none focus:outline-none focus:border-cyan-500/50 transition-all"
                  />
                </div>

                <button 
                  disabled={formState === 'loading'}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all active:scale-[0.98] disabled:opacity-50"
                >
                  {formState === 'loading' ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>Enviar Propuesta <Send className="w-4 h-4" /></>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
