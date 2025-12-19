import { useState, useEffect } from "react";
import imagen1 from "../assets/paisaje1.jpg";
import imagen2 from "../assets/paisaje2.jpg";
import imagen3 from "../assets/paisaje3.jpg";
import imagen4 from "../assets/paisaje4.jpg";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [imagen1, imagen2, imagen3, imagen4];

  // Lógica del Carrousel automático
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // Cambia cada 4 segundos
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden flex items-center">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out -z-10 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Overlay oscuro para que el texto resalte */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img
            src={img}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover animate-slow-zoom"
          />
        </div>
      ))}

      {/* Contenido */}
      <div className="container mx-auto px-[7%] z-20">
        <div className="max-w-2xl text-left">
          <h1 className="text-5xl md:text-6xl font-serif leading-tight">
            <span className="text-white block">Tu hogar</span>
            <span className="text-gold block">frente al mar</span>
          </h1>

          <p className="text-white/90 text-lg mt-6 mb-10 font-light max-w-lg leading-relaxed">
            Avenida Costanera y Calle 49. Descubrí la exclusividad de despertar
            con el sonido de las olas en la mejor ubicación de Santa Teresita.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#departamentos"
              className="px-8 py-4 bg-gold text-white font-bold uppercase text-sm tracking-widest rounded-full hover:bg-gold-hover transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
            >
              <i className="fas fa-home"></i> Ver Departamentos
            </a>
            <a
              href="https://wa.me/5491162929023"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 border-2 border-white text-white font-bold uppercase text-sm tracking-widest rounded-full hover:bg-white/10 transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <i className="fab fa-whatsapp"></i> Consultar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
