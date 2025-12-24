import { useState, useEffect } from "react";
import { whatsappNumber } from "../data/data";

const DepartmentCard = ({ info }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

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

  const nextImage = (e) => {
    e?.stopPropagation();
    setCurrentImgIndex((prev) => (prev + 1) % info.images.length);
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    setCurrentImgIndex(
      (prev) => (prev - 1 + info.images.length) % info.images.length
    );
  };

  const getFriendlyTitle = (id) => {
    const idsChico = ["7", 7];
    const idsGrande = ["12", 12];
    const idsGrande2 = ["13", 13];
    const idsIntermedio = ["Intermedio", "6", 6];

    if (idsChico.includes(id)) return "Departamento Chico";
    if (idsGrande.includes(id)) return "Departamento Grande 1";
    if (idsGrande2.includes(id)) return "Departamento Grande 2";
    if (idsIntermedio.includes(id)) return "Departamento Intermedio";
    return info.title;
  };

  const friendlyTitle = getFriendlyTitle(info.id);

  return (
    <>
      <article className="bg-white rounded-xl overflow-hidden shadow-md group hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col h-full">
        <div
          className="relative h-60 overflow-hidden cursor-pointer"
          onClick={() => {
            setIsModalOpen(true);
            setCurrentImgIndex(0);
          }}
        >
          <img
            src={info.images[0]}
            alt={friendlyTitle}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="bg-white/20 backdrop-blur-md p-3 rounded-full">
              <i className="fas fa-search-plus text-white text-2xl"></i>
            </div>
          </div>
          <div className="absolute top-3 left-3">
            <span className="bg-ocean/90 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest backdrop-blur-sm">
              {info.badge || "Frente al Mar"}
            </span>
          </div>
        </div>

        <div className="p-6 flex flex-col grow">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-serif text-ocean leading-tight">
              {friendlyTitle}
            </h3>
            <div className="text-right">
              <p className="text-gold font-bold text-xl">Consultar</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-tighter">
                Tarifas según fecha
              </p>
            </div>
          </div>

          <p className="text-slate-500 text-sm mb-4 line-clamp-2 italic leading-relaxed">
            "{info.description}"
          </p>

          <div className="grid grid-cols-3 gap-2 py-4 border-y border-slate-50 mb-5">
            <div className="flex flex-col items-center">
              <i className="fas fa-users text-gold text-sm mb-1"></i>
              <span className="text-[11px] font-medium text-slate-500">
                {info.capacity}
              </span>
            </div>
            <div className="flex flex-col items-center border-x border-slate-100">
              <i className="fas fa-expand-arrows-alt text-gold text-sm mb-1"></i>
              <span className="text-[11px] font-medium text-slate-500">
                {info.size}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <i className="fas fa-water text-gold text-sm mb-1"></i>
              <span className="text-[11px] font-medium text-slate-500">
                Vista al Mar
              </span>
            </div>
          </div>

          <a
            href={`https://wa.me/${whatsappNumber}?text=Hola! Me interesa consultar disponibilidad para el ${friendlyTitle}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto w-full bg-[#25D366] hover:bg-[#128c7e] text-white py-3 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-sm"
          >
            <i className="fab fa-whatsapp text-lg"></i>
            CONSULTAR DISPONIBILIDAD
          </a>
        </div>
      </article>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-9999 bg-black/95 flex items-center justify-center backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Botón Cerrar - Superior derecho */}
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white text-4xl p-2 z-60 transition-colors"
            onClick={() => setIsModalOpen(false)}
          >
            <i className="fas fa-times"></i>
          </button>

          {/* Flecha Izquierda - Forzada al frente con z-50 */}
          <button
            className="absolute left-4 md:left-10 bg-white/10 hover:bg-gold text-white w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-colors z-50 shadow-lg"
            onClick={prevImage}
          >
            <i className="fas fa-chevron-left text-2xl"></i>
          </button>

          {/* Contenedor de Imagen */}
          <div className="relative w-full h-full flex flex-col items-center justify-center p-2">
            <img
              src={info.images[currentImgIndex]}
              className="max-h-[85vh] max-w-full object-contain rounded shadow-2xl"
              alt="Galería"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Contador de fotos */}
            <div className="mt-6 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/10">
              <p className="text-white text-sm tracking-widest uppercase">
                {currentImgIndex + 1} <span className="text-gold mx-1">/</span>{" "}
                {info.images.length}
              </p>
            </div>
          </div>

          {/* Flecha Derecha - Forzada al frente con z-50 */}
          <button
            className="absolute right-4 md:right-10 bg-white/10 hover:bg-gold text-white w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-colors z-50 shadow-lg"
            onClick={nextImage}
          >
            <i className="fas fa-chevron-right text-2xl"></i>
          </button>
        </div>
      )}
    </>
  );
};

export default DepartmentCard;
