import { services } from "../data/data";

const Services = () => {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-250 mx-auto px-4">
        {/* Título de Sección */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif md:text-4xl text-ocean mb-4">
            Servicios Incluidos
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-slate-500 text-sm md:text-base max-w-lg mx-auto">            Todos nuestros departamentos cuentan con estos servicios para
            brindar la máxima comodidad durante tu estadía.
          </p>
        </div>

        <ul className="flex flex-wrap justify-center gap-4">
          {services.map((service, index) => (
            <li
              key={index}
              className="group flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg w-[calc(50%-1rem)] md:w-[calc(25%-1rem)] transition-all duration-300 hover:bg-ocean-light hover:-translate-y-1"
            >
              <i
                className={`fas ${service.icon} text-3xl text-gold mb-3 transition-transform group-hover:scale-110`}
              ></i>
              <p className="text-ocean font-bold text-center text-[11px] md:text-xs uppercase tracking-wider">                {service.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
