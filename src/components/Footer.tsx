


import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import LogoLight from "../img/logo-light.webp";
// 1. Importamos el hook que diseñamos
import { useOficica } from "../hooks/oficina";
import { useAreas } from "../hooks/areas";

const Footer = () => {
  // 2. Consumimos los datos de las entidades
  const { entidades, loading, error } = useOficica();
  const { areas } = useAreas(); // Si quieres mostrar áreas dinámicamente también

  // 3. Tomamos la primera entidad como la principal para mostrar en el Footer
  // Si no hay datos aún, usamos un objeto vacío para evitar errores
  const principal = entidades.length > 0 ? entidades[0] : null;

  return (
    <footer className="text-white" style={{ backgroundColor: "#100422" }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Info de la Compañía */}
          <div className="space-y-4">
            <img src={LogoLight} width={200} alt="Logo | LawEdge" />
            <p className="text-gray-300 leading-relaxed">
              {principal?.labelFooter || "Somos una firma de abogados comprometida con la excelencia y la justicia en Sucre, Bolivia." }
            </p>
          </div>

          {/* Enlaces Rápidos (Se mantiene igual) */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-law-gold">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Sobre nosotros", path: "#" },
                { name: "Servicios", path: "#" },
                { name: "Abogados", path: "#" },
                { name: "Testimonios", path: "#" },
                { name: "Blog", path: "#" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-law-gold transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Áreas de Práctica (Se mantiene igual) */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-law-gold">Áreas de Práctica</h4>
            <ul className="space-y-2">
              {areas.map((area) => (
                <li key={area.id}>
                  <Link to="#" className="text-gray-300 hover:text-law-gold transition-colors duration-200">
                    {area.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Información de Contacto DINÁMICA */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-law-gold">
              Información de Contacto
            </h4>
            
            {loading ? (
              <p className="text-gray-400 text-sm animate-pulse">Cargando datos...</p>
            ) : principal ? (
              <div className="space-y-3">
                {/* Dirección Dinámica */}
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-law-gold mt-1 flex-shrink-0" />
                  <div className="text-gray-300">
                    <p className="font-bold text-white">{principal.nombre}</p>
                    <p>{principal.direccion || "Dirección no disponible"}</p>
                    <p>Sucre, Bolivia</p>
                  </div>
                </div>

                {/* Teléfono / Celular Dinámico */}
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-law-gold" />
                  <p className="text-gray-300">
                    {principal.celular || principal.telefono || "(+591) 700 00000"}
                  </p>
                </div>

                {/* Correo Dinámico */}
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-law-gold" />
                  <p className="text-gray-300">{principal.correo || "contacto@juridica.com"}</p>
                </div>

                {/* Horarios (Estaticos o puedes añadirlos al backend) */}
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-law-gold mt-1" />
                  <div className="text-gray-300 text-sm">
                    <p>Lunes a viernes: 8:00 a 18:00</p>
                    <p>Emergencias: 24/7</p>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-red-400 text-sm italic">Error al cargar datos de contacto.</p>
            )}
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} {principal?.nombreCorto || "Juridica"}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;