import { useEffect } from "react";
import { Link } from "react-router-dom";

const Legales = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const secciones = [
    {
      titulo: "Términos y Condiciones de Reserva",
      items: [
        "Las reservas se formalizan mediante un depósito o transferencia del 30% del valor total de la estadía.",
        "El saldo restante deberá ser cancelado en efectivo o transferencia al momento del Check-in, sin excepción.",
        "En caso de cancelación con menos de 15 días de anticipación, la seña no será reembolsable.",
        "Se solicitará un depósito de garantía reembolsable al ingresar para cubrir eventuales daños o roturas."
      ]
    },
    {
      titulo: "Normas de la Casa",
      items: [
        "La capacidad máxima de personas por departamento debe respetarse según lo declarado en la reserva.",
        "Horario de silencio: de 14:00 a 16:00 y de 22:00 a 08:00.",
        "No se aceptan mascotas de ningún tipo o tamaño.",
        "Prohibido fumar dentro de las unidades habitacionales."
      ]
    },
    {
      titulo: "Política de Privacidad",
      items: [
        "Los datos personales solicitados (Nombre, DNI, Teléfono) se utilizan exclusivamente para la gestión de reservas y registro de huéspedes.",
        "Amaneceres Deptos se compromete a no compartir ni vender su información a terceros.",
        "Sus datos serán resguardados siguiendo estándares de seguridad para evitar accesos no autorizados."
      ]
    }
  ];

  return (
    <main className="bg-gray-50 pt-16 pb-20 px-6 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-16 rounded-2xl shadow-sm border border-gray-100">
        
        {/* Encabezado de la página */}
        <header className="mb-12 border-b border-gray-100 pb-8 text-left">
          <Link to="/" className="text-gold font-bold uppercase text-xs tracking-[0.2em] hover:text-ocean transition-colors mb-4 inline-block">
            ← Volver al Inicio
          </Link>
          <h1 className="text-4xl md:text-5xl font-display text-ocean mt-4">
            Información <span className="text-gold">Legal</span>
          </h1>
          <p className="text-gray-500 mt-4 text-sm font-body">
            Última actualización: Diciembre 2025
          </p>
        </header>

        {/* Contenido Dinámico */}
        <div className="space-y-12">
          {secciones.map((seccion, index) => (
            <section key={index} className="animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: `${index * 150}ms` }}>
              <h2 className="text-xl font-bold text-ocean uppercase tracking-wider mb-6 flex items-center gap-3">
                <span className="w-8 h-0.5 bg-gold"></span>
                {seccion.titulo}
              </h2>
              <ul className="space-y-4">
                {seccion.items.map((item, i) => (
                  <li key={i} className="flex gap-4 text-gray-600 leading-relaxed font-body">
                    <span className="text-gold font-bold">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* Footer de Legales */}
        <footer className="mt-16 pt-8 border-t border-gray-100 text-center">
          <p className="text-gray-400 text-sm">
            Si tiene alguna duda sobre estos términos, por favor contáctenos vía WhatsApp.
          </p>
        </footer>
      </div>
    </main>
  );
};

export default Legales;