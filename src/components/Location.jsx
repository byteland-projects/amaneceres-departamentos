const Location = () => {
  const features = [
    { icon: "fa-umbrella-beach", title: "Frente al mar", desc: "Vista directa a la playa" },
    { icon: "fa-store", title: "Cerca de todo", desc: "Restaurantes y comercios" },
    { icon: "fa-car", title: "Acceso fácil", desc: "Cochera incluida" },
  ];

  return (
    <section id="ubicacion" className="py-20 bg-sand">
      <div className="max-w-300 mx-auto px-4">
        
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif md:text-4xl text-ocean mb-4">Ubicación Privilegiada</h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
          <address className="not-italic">
            <p className="text-lg font-semibold text-gray-700">
              Av. Costanera y Calle 49, Santa Teresita, Buenos Aires
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto mt-2">
              Edificio <strong>Amaneceres Deptos</strong>: Nuestro edificio se encuentra en la mejor zona. Frente al mar, a pasos del centro comercial de Santa Teresita.
            </p>
          </address>
        </div>

        {/* Contenedor del Mapa - Usamos Flex para centrarlo */}
        <div className="flex justify-center mb-12">
          <div className="w-full max-w-225 h-112.5 rounded-2xl border-4 border-gold shadow-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1602.5316469330694!2d-56.68818458732692!3d-36.55258679211209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959c13190b9c6d59%3A0xcab1fcaa6ca4bd56!2sC.%2049%20%26%20Av.%20Costanera%2C%20B7107%20Santa%20Teresita%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1766080687042!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Amaneceres Deptos en Santa Teresita frente al mar"
            ></iframe>
          </div>
        </div>

        {/* Características de la ubicación - Flexbox puro */}
        <div className="flex flex-wrap justify-center gap-6">
          {features.map((f, i) => (
            <div 
              key={i} 
              className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center w-full sm:w-70 border-b-4 border-transparent hover:border-gold transition-all"
            >
              <i className={`fas ${f.icon} text-2xl text-gold mb-3`} aria-hidden="true"></i>
              <h3 className="font-bold text-ocean">{f.title}</h3>
              <p className="text-sm text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Location;