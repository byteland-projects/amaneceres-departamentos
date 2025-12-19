const Info = () => {
  const infoItems = [
    {
      icon: "fa-calendar-check",
      title: "Estadía Mínima",
      detail: "Enero y Febrero",
      subDetail: "Mínimo 6 días de estadía",
    },
    {
      icon: "fa-clock",
      title: "Check-In",
      detail: "12:30 PM a 21:00 PM",
      subDetail: "Ingreso garantizado",
    },
    {
      icon: "fa-sign-out-alt",
      title: "Check-Out",
      detail: "Hasta las 10:00 AM",
      subDetail: "Salida administrativa",
    },
    {
      icon: "fa-paw",
      title: "Mascotas",
      detail: "No se aceptan",
      subDetail: "Sin excepciones",
    },
  ];

  return (
    <section id="informacion" className="py-16 bg-white px-[5%]">
      <div className="max-w-7xl mx-auto">
        <div className="bg-ocean text-white rounded-xl shadow-xl overflow-hidden border-t-4 border-gold">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {infoItems.map((item, index) => (
              <div
                key={index}
                className="p-10 flex flex-col items-center text-center group hover:bg-white/5 transition-colors duration-300"
              >
                {/* Icono */}
                <div className="mb-4 text-gold transition-transform duration-300 group-hover:scale-110">
                  <i className={`fas ${item.icon} text-3xl`}></i>
                </div>

                {/* Título */}
                <h4 className="text-gold text-md font-bold uppercase tracking-widest mb-3">
                  {item.title}
                </h4>

                {/* Detalles */}
                <div className="flex flex-col gap-1">
                  <p className="text-sm md:text-base font-medium leading-tight">
                    {item.detail}
                  </p>
                  {item.subDetail && (
                    <p className="text-xs text-white/70 italic">
                      {item.subDetail}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
