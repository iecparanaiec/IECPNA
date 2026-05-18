import { motion } from 'motion/react';
import { Camera, Gamepad2, Layers, Map, Music, Sparkles } from 'lucide-react';

export default function Eventos() {
  const events = [
    { title: "Digital Nature", category: "Reality Virtual", img: "../image/evento-1.jpg" },
    { title: "Future Sounds", category: "3D Mapping", img: "../image/evento-2.jpg" },
    { title: "AI Culture", category: "Interactive Art", img: "../image/evento-3.jpg" },
    { title: "Metaverse Expo", category: "Web3 Experience", img: "../image/evento-4.jpg" }
  ];

  return (
    <section id="eventos" className="py-24 relative bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl display-title text-white mb-6"
          >
            Eventos <span className="text-gradient">Inmersivos</span>
          </motion.h2>
          <p className="text-zinc-400 text-lg max-w-2xl font-light">
            Creamos experiencias sensoriales que fusionan el mundo físico con el digital. 
            Storytelling visual llevado al límite.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-[450px] overflow-hidden rounded-2xl cursor-pointer"
            >
              <img 
                src={event.img} 
                alt={event.title}
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-cyan-400 mb-2">{event.category}</span>
                <h3 className="text-2xl font-bold text-white mb-4">{event.title}</h3>
                <div className="h-0.5 w-0 bg-cyan-400 group-hover:w-full transition-all duration-500" />
              </div>

              {/* Hover Overlay */}
              <div className="absolute top-6 right-6 p-4 rounded-full glass opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
