import { whatsappNumber } from "../data/data";

const WhatsAppButton = () => {
  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=Hola! Quisiera hacer una consulta.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-2000 bg-[#25d366] text-white w-14 h-14 rounded-full flex items-center justify-center text-3xl shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#128c7e] active:scale-95 group"
      aria-label="Contactar por WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
      
      {/* Tooltip al pasar el mouse */}
      <span className="absolute right-16 bg-white text-gray-800 text-xs font-bold px-3 py-2 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        ¿Consultas? ¡Escribinos!
      </span>
    </a>
  );
};

export default WhatsAppButton;