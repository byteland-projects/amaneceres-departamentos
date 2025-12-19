const Services = () => {
  const allServices = [
    { icon: "fa-wifi", label: "Wi-Fi Alta Velocidad" },
    { icon: "fa-tv", label: "Smart TV con Cable" },
    { icon: "fa-car", label: "Cochera Cubierta" },
    { icon: "fa-fire", label: "Gas Natural" },
    { icon: "fa-snowflake", label: "Heladera con Freezer" },
    { icon: "fa-utensils", label: "Cocina Equipada" },
    { icon: "fa-wind", label: "Ventiladores" },
    { icon: "fa-braille", label: "Parrilla Individual" },
  ];

  return (
    <section id="servicios" className="py-16 bg-white px-[5%] border-b border-slate-100">
      <div className="max-w-5xl mx-auto">
        
        {/* Cabecera */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-ocean mb-3">
            Servicios Incluidos
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-4"></div>
          <p className="text-slate-500 text-sm md:text-base max-w-lg mx-auto">
            Todas nuestras unidades están equipadas para brindar la máxima comodidad durante su estadía.
          </p>
        </div>

        {/* Grid de Servicios */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {allServices.map((service, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-6 bg-slate-50 rounded-xl border border-transparent hover:border-gold/30 hover:bg-white hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-3 group-hover:scale-110 transition-transform duration-300">
                <i className={`fas ${service.icon} text-lg text-gold`}></i>
              </div>
              <p className="text-ocean font-bold text-center text-[11px] md:text-xs uppercase tracking-wider">
                {service.label}
              </p>
            </div>
          ))}
        </div>

        {/* Nota al pie de servicios */}
        <div className="mt-12 text-center">
          <p className="text-[11px] text-slate-400 italic">
            * Las sábanas y toallas no están incluidas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;