import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Departamentos", href: "#departamentos" },
    { name: "Información", href: "#informacion" },
    { name: "Servicios", href: "#servicios" },
    { name: "Ubicación", href: "#ubicacion" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className="sticky top-0 w-full bg-white/98 z-1000 shadow-md px-[5%] py-6 flex justify-between items-center">
      <a
        href="#"
        className="flex items-center gap-2 text-xl md:text-2xl font-bold text-ocean tracking-wider"
      >
        <i className="fas fa-umbrella-beach text-gold"></i>
        <span className="uppercase">Amaneceres Deptos</span>
      </a>

      {/* Botón Hamburguesa */}
      <button
        className="md:hidden text-2xl text-ocean focus:outline-none z-1100"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></i>
      </button>

      {/* Menú de Navegación */}
      <ul
        className={`
          fixed md:static top-20 right-0 h-auto w-[80%] max-w-75 md:w-auto md:max-w-none
          bg-white md:bg-transparent shadow-xl md:shadow-none rounded-l-lg md:rounded-none
          flex flex-col md:flex-row gap-6 p-8 md:p-0 transition-all duration-300 ease-in-out
          ${
            isOpen
              ? "right-0 opacity-100"
              : "-right-full opacity-0 md:opacity-100"
          }
        `}
      >
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-[1rem] font-semibold uppercase text-gray-800 hover:text-gold transition-colors duration-300"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;