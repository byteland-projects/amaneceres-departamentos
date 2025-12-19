import React from "react";
import depa1 from "../assets/departamento7.jpg";
import depa2 from "../assets/departamento12.jpg";
import depa3 from "../assets/departamento13.jpg";
import depa4 from "../assets/departamentomedio.jpg";

const Departments = () => {
  const departments = [
    {
      id: "7",
      title: "Departamento 7",
      capacity: "Hasta 3 personas",
      price: "85.000",
      image: depa1,
      description: "Acogedor con vista directa al mar. Ideal para parejas o familias pequeñas.",
      size: "45 m²",
      badge: "Vista al Mar",
    },
    {
      id: "12",
      title: "Departamento 12",
      capacity: "6 personas",
      price: "95.000",
      image: depa2,
      description: "Amplio, ideal para familias. Espacios integrados y gran luminosidad.",
      size: "85 m²",
      badge: "Ideal Familias",
    },
    {
      id: "13",
      title: "Departamento 13",
      capacity: "6 personas",
      price: "95.000",
      image: depa3,
      description: "Totalmente equipado. La mejor vista panorámica y todos los servicios.",
      size: "85 m²",
      badge: "Premium",
    },
    {
      id: "Intermedio",
      title: "Departamento Intermedio",
      capacity: "4-5 personas",
      price: "Consultar",
      image: depa4,
      description: "Equilibrio perfecto entre espacio y confort, ubicado estratégicamente.",
      size: "65 m²",
      badge: "Más buscado",
    },
  ];

  return (
    <section id="departamentos" className="py-16 bg-slate-50 px-[5%]">
      <div className="max-w-5xl mx-auto">
        
        {/* Cabecera reducida */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-ocean mb-3">
            Departamentos Disponibles
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-4"></div>
          <p className="text-slate-600 max-w-xl mx-auto text-base">
            Unidades frente al mar con equipamiento completo.
          </p>
        </div>

        {/* Grid de Departamentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {departments.map((dept) => (
            <div
              key={dept.id}
              className="bg-white rounded-xl overflow-hidden shadow-md group hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col"
            >
              {/* Contenedor de Imagen */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={dept.image}
                  alt={dept.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80";
                  }}
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-ocean/90 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest backdrop-blur-sm">
                    {dept.badge}
                  </span>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6 flex flex-col grow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-serif text-ocean leading-tight">
                    {dept.title}
                  </h3>
                  <div className="text-right">
                    <p className="text-gold font-bold text-xl">${dept.price}</p>
                    <p className="text-[10px] text-slate-400 uppercase tracking-tighter">por noche</p>
                  </div>
                </div>

                <p className="text-slate-500 text-sm mb-4 line-clamp-2 italic leading-relaxed">
                  "{dept.description}"
                </p>

                {/* Características */}
                <div className="grid grid-cols-3 gap-2 py-4 border-y border-slate-50 mb-5">
                  <div className="flex flex-col items-center">
                    <i className="fas fa-users text-gold text-sm mb-1"></i>
                    <span className="text-[11px] font-medium text-slate-500">{dept.capacity}</span>
                  </div>
                  <div className="flex flex-col items-center border-x border-slate-100">
                    <i className="fas fa-expand-arrows-alt text-gold text-sm mb-1"></i>
                    <span className="text-[11px] font-medium text-slate-500">{dept.size}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <i className="fas fa-water text-gold text-sm mb-1"></i>
                    <span className="text-[11px] font-medium text-slate-500">Vista al Mar</span>
                  </div>
                </div>

                {/* Botón WhatsApp */}
                <a
                  href={`https://wa.me/5491162929023?text=Consulta por ${dept.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full bg-[#25D366] hover:bg-[#128c7e] text-white py-3 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-sm"
                >
                  <i className="fab fa-whatsapp text-lg"></i>
                  CONSULTAR DISPONIBILIDAD
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departments;