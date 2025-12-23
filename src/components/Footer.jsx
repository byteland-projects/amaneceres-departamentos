import { Link } from "react-router-dom";
import { whatsappNumber } from "../data/data";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer id="contacto" className="w-full bg-[#111] text-[#888] pt-16 pb-8">
      <div className="max-w-300 mx-auto px-6">
        <div className="flex flex-wrap gap-10 mb-12">
          {/* Contacto */}
          <div className="flex-1 min-w-62.5">
            <h3 className="text-gold text-left font-display text-xl mb-2">
              Contacto
            </h3>
            <div className="w-10 h-0.5 bg-gold mb-6"></div>

            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <i className="fas fa-map-marker-alt text-gold"></i>
                <span>Av. Costanera y Calle 49, Santa Teresita</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-phone text-gold"></i>
                <span>
                  {`+${whatsappNumber.slice(0, 2)} ${whatsappNumber.slice(2, 3)} ${whatsappNumber.slice(3, 4)} ${whatsappNumber.slice(4, 5)} ${whatsappNumber.slice(5, 9)}-${whatsappNumber.slice(9)}`}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fab fa-whatsapp text-gold"></i>
                <a href={`https://wa.me/${whatsappNumber}?text=Hola! Me interesa hacer una reserva.`} target="_blank" rel="noopener noreferrer" className="hover:text-white hover:pl-2 transition-all duration-300 italic">WhatsApp para reservas</a>
              </li>
            </ul>
          </div>

          {/* Departamentos */}
          <div className="flex-1 min-w-50">
            <h3 className="text-gold text-left font-display text-xl mb-2">
              Departamentos
            </h3>
            <div className="w-10 h-0.5 bg-gold mb-6"></div>
            <ul className="space-y-2 text-sm text-left">
              {[
                "Depto chico (3 pers.)",
                "Depto grande (6 pers.)",
                "Depto grande (6 pers.)",
                "Depto Intermedio",
              ].map((depto) => (
                <li key={depto}>
                  <HashLink
                    smooth
                    to="/#departamentos"
                    className="hover:text-white hover:pl-2 transition-all duration-300 italic block"
                  >
                    {depto}
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="flex-1 min-w-50">
            <h3 className="text-gold text-left font-display text-xl mb-2">
              Enlaces
            </h3>
            <div className="w-10 h-0.5 bg-gold mb-6"></div>
            <ul className="space-y-2 text-sm text-left">
              {[
                { label: "Información", id: "informacion" },
                { label: "Servicios", id: "servicios" },
                { label: "Ubicación", id: "ubicacion" },
              ].map((link) => (
                <li key={link.id}>
                  <HashLink
                    smooth
                    to={`/#${link.id}`}
                    className="hover:text-white hover:pl-2 transition-all duration-300 block"
                  >
                    {link.label}
                  </HashLink>
                </li>
              ))}
              <li>
                <Link to="/legales" className="hover:text-gold transition-colors italic">
                  Términos y Privacidad
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright corregido */}
        <div className="border-t border-white/10 pt-8 text-center text-xs">
          <p className="font-bold text-gray-500 uppercase tracking-widest mb-2">
            Amaneceres Deptos Santa Teresita - Alquileres Directos
          </p>
          <p>
            © {new Date().getFullYear()} Sitio desarrollado por{" "}
            <a
              href="https://byteland.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-white transition-colors duration-300 font-semibold"
            >
              Byteland
            </a>
            . Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
