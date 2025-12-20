import { useState, useEffect } from "react";
import { whatsappNumber } from "../data/data";

const DepartmentCard = ({ info }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  // Manejo de teclado (ESC para cerrar, Flechas para navegar)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;
      if (e.key === "Escape") setIsModalOpen(false);
      if (e.key === "ArrowRight") nextImage(e);
      if (e.key === "ArrowLeft") prevImage(e);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, currentImgIndex]);

  // Navegación de imágenes
  const nextImage = (e) => {
    e?.stopPropagation();
    setCurrentImgIndex((prev) => (prev + 1) % info.images.length);
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    setCurrentImgIndex((prev) => (prev - 1 + info.images.length) % info.images.length);
  };

  return (
    <>
      <article className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
        
        {/* Contenedor de Imagen Principal */}
        <div 
          className="relative overflow-hidden aspect-16/10 cursor-pointer group"
          onClick={() => { setIsModalOpen(true); setCurrentImgIndex(0); }}
        >
          <img 
            src={info.images[0]} 
            alt={info.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Overlay con lupa */}
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="bg-white/20 backdrop-blur-md p-3 rounded-full">
               <i className="fas fa-search-plus text-white text-2xl"></i>
            </div>
          </div>
          <span className="absolute top-4 left-4 bg-gold text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm z-10">
            {info.badge}
          </span>
        </div>

        {/* Contenido */}
        <div className="p-6 flex flex-col grow">
          <h3 className="text-2xl font-display text-ocean mb-2">{info.title}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{info.description}</p>
          
          <ul className="space-y-2 mb-6 grow">
            <li className="flex items-center gap-2 text-sm text-gray-700">
              <i className="fas fa-users text-gold w-5 text-center"></i> 
              {info.capacity}
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-700">
              <i className="fas fa-expand-arrows-alt text-ocean w-5 text-center"></i> 
              {info.size}
            </li>
          </ul>

          <div className="mt-auto">
            <div className="text-2xl font-bold text-ocean mb-4">
              ${info.price} <span className="text-sm font-normal text-gray-500">/ día</span>
            </div>
            
            <a 
              href={`https://wa.me/${whatsappNumber}?text=Hola! Me interesa el ${info.title} de Amaneceres Deptos.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25d366] text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-[#128c7e] transition-colors shadow-sm"
            >
              <i className="fab fa-whatsapp text-xl"></i>
              Consultar Disponibilidad
            </a>
          </div>
        </div>
      </article>

      {/* --- MODAL / LIGHTBOX --- */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-3000 bg-black/95 flex items-center justify-center backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Botón Cerrar */}
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white text-4xl z-3050 p-2 transition-colors"
            onClick={() => setIsModalOpen(false)}
          >
            <i className="fas fa-times"></i>
          </button>
          
          {/* Flecha Izquierda */}
          <button 
            className="absolute left-4 md:left-10 z-3050 bg-white/10 hover:bg-gold text-white w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center"
            onClick={prevImage}
          >
            <i className="fas fa-chevron-left text-2xl md:text-3xl"></i>
          </button>

          {/* Imagen Grande */}
          <div className="relative w-full max-w-5xl px-4 flex flex-col items-center">
            <img 
              key={currentImgIndex} 
              src={info.images[currentImgIndex]} 
              className="max-h-[80vh] w-auto object-contain rounded shadow-2xl select-none"
              alt={`Vista ${currentImgIndex + 1}`}
              onClick={(e) => e.stopPropagation()} 
            />
            
            {/* Contador */}
            <div className="mt-6 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/10">
              <p className="text-white text-sm font-medium tracking-widest uppercase">
                {currentImgIndex + 1} <span className="text-gold mx-1">/</span> {info.images.length}
              </p>
            </div>
          </div>

          {/* Flecha Derecha */}
          <button 
            className="absolute right-4 md:right-10 z-3050 bg-white/10 hover:bg-gold text-white w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center"
            onClick={nextImage}
          >
            <i className="fas fa-chevron-right text-2xl md:text-3xl"></i>
          </button>
        </div>
      )}
    </>
  );
};

export default DepartmentCard;