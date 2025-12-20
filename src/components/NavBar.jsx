import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Información", href: "#informacion" },
    { name: "Departamentos", href: "#departamentos" },
    { name: "Servicios", href: "#servicios" },
    { name: "Ubicación", href: "#ubicacion" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className="sticky top-0 w-full bg-white/95 backdrop-blur-sm z-1000 shadow-sm">
      <div className="max-w-300 mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-ocean text-2xl tracking-tight">
          <i className="fas fa-umbrella-beach text-gold"></i>
          <h1 className="lg:text-2xl text-xl">AMANECERES DEPTOS</h1>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="text-sm uppercase font-bold tracking-widest text-gray-700 hover:text-gold transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-ocean text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`
        md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 overflow-hidden
        ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
      `}>
        <ul className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="block text-sm uppercase font-bold text-ocean hover:text-gold"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;