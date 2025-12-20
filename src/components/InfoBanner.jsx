// InfoBanner.jsx

const InfoBanner = () => {
  // Datos locales para no ensuciar el JSX
  const infoItems = [
    { icon: "fa-calendar-check", title: "Estadía Mínima", desc: "Enero y Febrero: Mínimo 6 días" },
    { icon: "fa-clock", title: "Check-In", desc: "12:30 PM a 21:00 PM" },
    { icon: "fa-sign-out-alt", title: "Check-Out", desc: "Hasta las 10:00 AM" },
    { icon: "fa-paw", title: "Mascotas", desc: "No se aceptan mascotas" },
  ];

  return (
    <aside id="informacion" className="relative max-w-250 mx-auto px-4 mt-10 mb-20 scroll-mt-24">
      <div className="bg-ocean rounded-xl p-8 shadow-2xl flex flex-wrap justify-between gap-8 md:gap-4 text-center">
        {infoItems.map((item, index) => (
          <div key={index} className="flex-1 min-w-45">
            <i className={`fas ${item.icon} text-3xl text-gold mb-4 block animate-pulse-slow`}></i>
            <h4 className="text-gold uppercase tracking-wider text-sm mb-2">
              {item.title}
            </h4>
            <p className="text-white text-sm font-medium opacity-90 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default InfoBanner;