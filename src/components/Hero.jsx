import { useState, useEffect } from "react";
import { heroImages } from "../data/data";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Efecto para cambiar la imagen automáticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, []);

  const currentImage = heroImages[currentImageIndex];

  return (
    <section className="relative w-full h-[94vh] flex items-center justify-left overflow-hidden">
      {/* Carrusel de Imágenes de Fondo */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
            className={`absolute inset-0 w-full h-full object-cover
                        transition-opacity duration-1000 ease-in-out animate-slow-zoom
                        ${
                          index === currentImageIndex
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
            alt={image.alt}
          />
        ))}
        {/* Gradiente para mejorar la legibilidad del texto */}
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent"></div>
      </div>

      {/* Contenido (H1, P, Botones) */}
      <div className="relative z-10 max-w-300 mx-auto px-6 w-full">
        <div className="max-w-150 text-left">
          <h1 className="text-white text-5xl md:text-7xl font-display mb-6 leading-tight">
            Tu hogar <br />
            <span className="text-gold">frente al mar</span>
          </h1>

          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-125 font-body">
            Avenida Costanera y Calle 49. <br />
            Disfrutá la mejor ubicación de Santa Teresita con todo el confort
            que merecés.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#departamentos"
              className="px-8 py-4 bg-gold text-white font-bold uppercase text-sm tracking-widest rounded-full hover:bg-gold-hover transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
            >
              Ver Departamentos
            </a>
            <a
              href="https://wa.me/5491162929023"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white text-white font-bold uppercase text-sm tracking-widest rounded-full hover:bg-white/10 transition-all transform hover:scale-105 flex items-center gap-2"
            >
              Consultar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
