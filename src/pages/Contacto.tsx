import React, { useState, useEffect } from 'react';
import { Monitor, Shield, Cpu, Code2, X, Play, Wifi, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Barra from './components/Barra';
import { useBarra } from '@/hooks/useBarra';


const Contacts: React.FC = () => {
  const navigate = useNavigate();
  const { setStartMenuOpen } = useBarra();



  {/* --- Columna Derecha: Formulario Integrado con Lógica de WhatsApp --- */ }
  const [empresa, setEmpresa] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleTransmitirDatos = (e: React.MouseEvent) => {
    e.stopPropagation(); // Evita cerrar el escritorio por propagación

    // Validación rápida para no enviar mensajes vacíos
    if (!empresa.trim() || !mensaje.trim()) {
      alert("Por favor, rellene ambos campos antes de transmitir.");
      return;
    }

    const numeroTelefono = "59171166513";

    // Estructura del mensaje comercial y técnico
    const textoMensaje = `🛰️ *COBAL SYSTEM OS - TRANSMISIÓN DE DATOS*%0A%0A` +
      `▪️ *ORIGEN/EMPRESA:* ${encodeURIComponent(empresa.trim())}%0A` +
      `▪️ *GLOSA REQUERIMIENTO:*%0A${encodeURIComponent(mensaje.trim())}%0A%0A` +
      `⚙️ _Mensaje enviado desde la Central de Comunicaciones._`;

    // Construcción de la URL de la API de WhatsApp
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroTelefono}&text=${textoMensaje}`;

    // Abre la pestaña de WhatsApp (Web o App móvil)
    window.open(urlWhatsApp, '_blank');
  };



  // Función para cerrar popups al hacer clic en el escritorio
  const handleDesktopClick = () => {
    setStartMenuOpen(false);
  };

  return (
    <div
      className="h-screen w-full overflow-hidden relative font-sans select-none bg-[#f0F4F8]"
      style={{ height: '100vh' }}
      onClick={handleDesktopClick}
    >
      <div className="absolute inset-0 bg-slate-900 border border-white/10 shadow-2xl overflow-hidden z-30 flex flex-col">

        {/* BARRA DE TÍTULO SUPERIOR (Intacta) */}
        <div className="bg-black/60 p-3 flex justify-between items-center px-6 border-b border-white/5 select-none">
          <span className="text-[11px] text-[#D4AE36] font-bold uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 height-2 rounded-full bg-[#D4AE36] animate-ping" style={{ width: '8px', height: '8px' }}></span>
            COBAL SYSTEM OS
          </span>
          <button
            onClick={() => navigate(-1)}
            className="text-white hover:text-white hover:bg-red-600 p-1.5 rounded transition-all duration-200"
            title="Cerrar Ventana"
          >
            <X size={16} />
          </button>
        </div>

        {/* CUERPO DE LA VENTANA INTERNA - ENFOQUE COMERCIAL Y PLATINO */}
        <div className="flex-1 p-8 lg:p-12 text-white overflow-y-auto bg-gradient-to-b from-slate-900 via-[#1E293B] to-[#0F172A] flex flex-col items-center">

          {/* Encabezado del Módulo */}
          <div className="text-center max-w-2xl mb-10">
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-slate-300 to-slate-400 tracking-tight uppercase">
              Central de Comunicaciones
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Establezca contacto directo con ingeniería para soporte, integraciones o consultoría corporativa.
            </p>
          </div>

          {/* Grid de Contenido Principal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl flex-1 items-stretch">

            {/* Columna Izquierda: Tarjetas de Información Estilo Platino */}
            <div className="flex flex-col gap-4 justify-between">

              {/* Bloque de Correo */}
              <div className="flex-1 bg-slate-800/40 border border-slate-700/60 rounded-xl p-5 flex items-center gap-4 hover:border-slate-500/50 hover:bg-slate-800/60 transition-all group shadow-md">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-slate-200 to-slate-400 flex items-center justify-center text-slate-900 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                  <Mail size={22} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-[#D4AE36] uppercase tracking-wider">Canal Oficial</p>
                  <p className="text-sm font-mono text-slate-200 mt-0.5 truncate select-text">contacto@cobal.bo</p>
                </div>
                <a href="mailto:contacto@cobal.bo" className="text-slate-500 hover:text-slate-300 transition-colors p-1">
                  <ExternalLink size={16} />
                </a>
              </div>

              {/* Bloque de Teléfono */}
              <div className="flex-1 bg-slate-800/40 border border-slate-700/60 rounded-xl p-5 flex items-center gap-4 hover:border-slate-500/50 hover:bg-slate-800/60 transition-all group shadow-md">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-slate-200 to-slate-400 flex items-center justify-center text-slate-900 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#D4AE36] uppercase tracking-wider">Línea Directa</p>
                  <p className="text-sm font-mono text-slate-200 mt-0.5 select-text">+591 71166513</p>
                </div>
              </div>

              {/* Bloque de Ubicación */}
              <div className="flex-1 bg-slate-800/40 border border-slate-700/60 rounded-xl p-5 flex items-center gap-4 hover:border-slate-500/50 hover:bg-slate-800/60 transition-all group shadow-md">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-slate-200 to-slate-400 flex items-center justify-center text-slate-900 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#D4AE36] uppercase tracking-wider">Sede Central</p>
                  <p className="text-sm text-slate-200 mt-0.5">Sucre, Chuquisaca - Bolivia</p>
                </div>
              </div>

            </div>

            <div className="bg-slate-800/30 border border-slate-700/60 rounded-2xl p-6 flex flex-col justify-between shadow-xl relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-400/5 rounded-full blur-2xl pointer-events-none"></div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-200 flex items-center gap-2 border-b border-slate-700/50 pb-2">
                  <Cpu size={18} className="text-[#D4AE36]" /> Enviar Requerimiento
                </h3>

                <div>
                  <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">Identificación / Empresa</label>
                  <input
                    type="text"
                    value={empresa}
                    onChange={(e) => setEmpresa(e.target.value)}
                    placeholder="Ej. Estudio Jurídico"
                    className="w-full bg-slate-900/60 border border-slate-700 rounded-lg p-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-slate-400 transition-colors font-mono"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">Glosa de Mensaje</label>
                  <textarea
                    rows={4}
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    placeholder="Describa brevemente los requerimientos técnicos de su organización..."
                    className="w-full bg-slate-900/60 border border-slate-700 rounded-lg p-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-slate-400 transition-colors font-mono resize-none"
                  ></textarea>
                </div>
              </div>

              <button
                onClick={handleTransmitirDatos}
                className="w-full mt-4 bg-gradient-to-r from-slate-300 via-slate-200 to-slate-400 text-slate-950 font-bold uppercase text-xs tracking-widest p-3 rounded-lg shadow-lg hover:from-slate-200 hover:to-slate-300 transition-all active:scale-[0.98] border border-white/20"
              >
                Transmitir Datos
              </button>
            </div>

          </div>

          {/* Pie de Firma de Seguridad */}
          <div className="mt-8 flex items-center gap-2 text-[10px] text-slate-500 font-mono tracking-widest uppercase">
            <Shield size={12} className="text-slate-500" /> Conexión Blindada y Auditada
          </div>

        </div>
      </div>
      <Barra />
    </div>
  );
};

export default Contacts;