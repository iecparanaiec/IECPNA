import Solutions from '../components/Solutions';
import Smarteo from '../components/Smarteo';

export default function SolutionsPage() {
  return (
    <div className="pt-20">
      <Solutions />
      <Smarteo />
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-white">Integraciones a medida</h2>
            <p className="text-zinc-500 mt-4">Cada empresa es un mundo; cada ecosistema es único.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Dashboards de BI con IA",
              "Automatización de Atención al Cliente",
              "Arquitectura de Datos Estructurados",
              "Sistemas de Smart Meeting",
              "Integración de CRM e Impulso de Ventas",
              "Consultoría en Gestión del Cambio"
            ].map((sol, idx) => (
              <div key={idx} className="p-8 rounded-3xl glass border-white/5 hover:border-cyan-500/30 transition-all">
                <h4 className="text-lg font-bold text-white mb-2">{sol}</h4>
                <p className="text-zinc-500 text-xs leading-relaxed">
                  Implementación profesional con enfoque en retorno de inversión y escalabilidad técnica.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
