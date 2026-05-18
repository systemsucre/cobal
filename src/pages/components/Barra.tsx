import React, { useState, useEffect } from 'react';
import { Box, ExternalLink, Wifi } from 'lucide-react';
import { useBarra } from '@/hooks/useBarra';
import { useNavigate } from 'react-router-dom';



const Barra: React.FC = () => {
  const { startMenuOpen, setStartMenuOpen } = useBarra()
  const [time, setTime] = useState<Date>(new Date());

  const navigate = useNavigate()

  // Reloj en tiempo real
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Función para cerrar popups al hacer clic en el escritorio
  const handleDesktopClick = () => {
    setStartMenuOpen(false);
  };

  // Estructura de catálogo de productos compatible con la telemetría de ProductDetail.tsx
  const links = [
    {
      nombre: "Contactos",
      link: '/contactos',
      label: '->'
    },
    {
      nombre: "Quienes somos",
      link: '/quienes-somos',
      label: '->'
    },
    {
      nombre: "Terminos y Condiciones",
      link: '/Terminos-y-condiciones',
      label: '->'
    },
    {
      nombre: "SEGURIDAD DE CLIENTES",
      link: '/seguridad-de-clientes',
      label: '->'
    }
  ];
  // Función de transmisión y ruteo dinámico para los productos
  const handleSelectProduct = (link: typeof links[0]) => {

    // 2. Cerramos el menú de inicio
    setStartMenuOpen(false);

    // 3. Despachamos la navegación a la pantalla de telemetría de producto
    navigate(link.link);
  };

  return (
    <div
      onClick={handleDesktopClick}

    >

      {/* --- MENÚ DE INICIO --- */}
      {startMenuOpen && (
        <div
          className="absolute bottom-14 left-2 w-80 bg-[#1B0738]/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl p-6 z-50"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
            <div className="w-10 h-10 bg-[#D4AE36] rounded-full flex items-center justify-center text-[#1B0738] font-bold">C</div>
            <div>
              <p className="text-white font-bold text-sm">COBAL</p>
              <p className="text-[#D4AE36] text-[10px] uppercase">INFORMACIONES</p>
            </div>
          </div>
          <p
            className="text-slate-300 hover:bg-white/5 hover:text-white p-2 rounded-lg cursor-pointer text-sm flex items-center gap-2.5 transition-all font-mono group"
            onClick={() => navigate('/')}>
            INICIO
          </p>

          {links.map((prod, index) => (
            <li
              key={index}
              onClick={() => handleSelectProduct(prod)}
              className="text-slate-300 hover:bg-white/5 hover:text-white p-2 rounded-lg cursor-pointer text-sm flex items-center gap-2.5 transition-all font-mono group"
            >
              <ExternalLink size={14} className="text-slate-500 group-hover:text-[#D4AE36] transition-colors" />
              <div className="flex-1 truncate">
                <span className="font-semibold">{prod.nombre}</span>
                <span className="text-[10px] text-slate-500 ml-2">{prod.label}</span>
              </div>
            </li>
          ))}
        </div>
      )}

      {/* --- ENTORNO DE LA BARRA DE TAREAS INTELIGENTE (SIN FONDOS SÓLIDOS) --- */}
      <div className="absolute bottom-0 left-0 w-full h-12 z-50 group">

        {/* 1. BOTÓN DE INICIO: COMPLETAMENTE TRANSPARENTE CON SOMBREADO INTELIGENTE */}
        <div className="absolute bottom-0 left-0 h-12 w-14 flex items-center justify-center z-50 select-none">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setStartMenuOpen(!startMenuOpen);
            }}
            className={`p-2 rounded-xl transition-all duration-300 active:scale-95 flex items-center justify-center
        ${startMenuOpen
                ? 'bg-[#D4AE36]/10 shadow-[0_0_20px_rgba(212,174,54,0.3)] scale-105'
                : 'hover:bg-white/5 hover:shadow-[0_-4px_15px_rgba(255,255,255,0.05),0_0_15px_rgba(212,174,54,0.15)]'
              }
      `}
            title="Menú Cobal OS"
          >
            {/* Icono de menú minimalista con sombreado de profundidad interno */}
            <div className="grid grid-cols-2 gap-0.5 w-5 h-5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              <div className="bg-[#D4AE36] rounded-sm"></div>
              <div className="bg-[#D4AE36]/90 rounded-sm"></div>
              <div className="bg-[#D4AE36]/80 rounded-sm"></div>
              <div className="bg-[#D4AE36]/60 rounded-sm"></div>
            </div>
          </button>
        </div>

        {/* 2. PANEL DE INFORMACIÓN COMPLEMENTARIO (RELOJ Y WIFI FLOTANTES)
      Se eliminó el bg, border y backdrop-blur. Ahora el texto flota con sombra para no perder contraste. */}
        <div className={`absolute bottom-0 left-0 w-full h-12 flex items-center pl-16 pr-6 justify-end transition-all duration-500 ease-in-out z-40
    ${startMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-3 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto'
          }
  `}>

          {/* Contenedor de datos con drop-shadow para asegurar legibilidad sobre cualquier fondo de pantalla */}
          <div className="flex items-center gap-4 text-white text-xs font-mono select-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            <Wifi size={14} className="text-slate-300/80" />
            <div className="text-right leading-none">
              <p className="font-bold tracking-wide">{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
              <p className="text-[9px] text-slate-400 font-semibold mt-0.5">{time.toLocaleDateString()}</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};


export default Barra;