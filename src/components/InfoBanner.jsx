const InfoBanner = () => {
  const infoItems = [
    {
      icon: "fa-calendar-check",
      title: "Estadía mínima",
      detail: "Mínimo 6 días",
      subDetail: "Alquiler temporario",
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
      detail: "No se aceptan mascotas",
      subDetail: "Sin excepciones",
    },
  ];

  return (
    <section
      id="informacion"
      className="relative max-w-250 mx-auto px-4 mt-10 mb-20 scroll-mt-24"
      aria-labelledby="info-banner-title"
    >
      {/* Título oculto solo para SEO (Google lo lee, el usuario no lo ve) */}
      <h2 id="info-banner-title" className="sr-only">
        Información sobre el alquiler en Santa Teresita
      </h2>

      <div className="bg-ocean rounded-xl p-8 shadow-2xl flex flex-wrap justify-between gap-8 md:gap-4 text-center border-t-4 border-gold overflow-hidden">
        {infoItems.map((item, index) => (
          <article
            key={index}
            className="flex-1 min-w-45 p-4 -m-4 group hover:bg-white/10 transition-all duration-300 rounded-lg"
          >
            <div
              className="mb-4 text-gold transition-transform duration-300 group-hover:scale-110"
              aria-hidden="true" // Oculta el icono decorativo para lectores de pantalla
            >
              <i
                className={`fas ${item.icon} text-3xl block animate-pulse-slow`}
              ></i>
            </div>

            <h3 className="text-gold uppercase tracking-wider text-base md:text-sm mb-2 font-bold">
              {item.title}
            </h3>

            <div className="flex flex-col gap-1">
              <p className="text-white text-base md:text-sm font-semibold opacity-100 leading-relaxed">
                <strong>{item.detail}</strong>
                {/* Bold para keywords importantes */}
              </p>
              {item.subDetail && (
                <p className="text-sm md:text-xs text-white/80 italic font-normal">
                  {item.subDetail}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default InfoBanner;
