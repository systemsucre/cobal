import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Cpu, X, AlertTriangle, ShieldCheck, HelpCircle, Eye } from 'lucide-react';
import Barra from './components/Barra';
import { useBarra } from '@/hooks/useBarra';

const ScamAlert: React.FC = () => {
  const navigate = useNavigate();
  const { setStartMenuOpen } = useBarra();

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
        
        {/* BARRA DE TÍTULO SUPERIOR (Consistencia OS) */}
        <div className="bg-black/60 p-3 flex justify-between items-center px-6 border-b border-white/5 select-none">
          <span className="text-[11px] text-red-400 font-bold uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" style={{ width: '8px', height: '8px' }}></span>
            COBAL SECURITY OVERRIDE // ALERTA DE SEGURIDAD
          </span>
          <button
            onClick={() => navigate(-1)}
            className="text-white hover:text-white hover:bg-red-600 p-1.5 rounded transition-all duration-200"
            title="Cerrar Ventana"
          >
            <X size={16} />
          </button>
        </div>

        {/* CUERPO DE LA VENTANA INTERNA - ENFOQUE PLATINO INDUSTRIAL Y ADVERTENCIA */}
        <div className="flex-1 p-8 lg:p-12 text-white overflow-y-auto bg-gradient-to-b from-slate-900 via-[#1E293B] to-[#0F172A] flex flex-col items-center">
          
          {/* Encabezado de Alerta Crítica */}
          <div className="text-center max-w-2xl mb-10 animate-pulse">
            <div className="inline-flex p-3 bg-red-500/10 border border-red-500/30 rounded-xl mb-3 text-red-400">
              <AlertTriangle size={32} />
            </div>
            <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-200 via-slate-100 to-slate-300 tracking-tight uppercase">
              Prevención de Fraudes y Estafas
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Protocolo de protección al usuario contra la suplantación de identidad y canales no autorizados de Cobal.
            </p>
          </div>

          {/* Grid de Contenido Principal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl flex-1 items-stretch">
            
            {/* Columna Izquierda: Modalidades de Estafa Detectadas */}
            <div className="flex flex-col gap-4 justify-between overflow-y-auto max-h-[420px] md:max-h-none pr-1 md:pr-0">
              
              {/* Bloque 1: Canales Falsos */}
              <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-5 hover:border-red-500/30 hover:bg-slate-800/60 transition-all group shadow-md">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-slate-300 to-slate-500 flex items-center justify-center text-slate-900 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                    <Eye size={18} className="group-hover:text-red-500 transition-colors" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-200">Suplantación de Identidad (Phishing)</h3>
                </div>
                <p className="text-slate-400 text-xs font-sans leading-relaxed">
                  Personas malintencionadas podrían usar el nombre de <strong>Cobal</strong> o de nuestros sistemas (como CONTAMAX) en grupos de Telegram, Facebook o correos falsos. Cobal jamás le solicitará contraseñas, tokens ni transferencias de dinero para "desbloquear" licencias fuera de nuestra pasarela.
                </p>
              </div>

              {/* Bloque 2: Cuentas de Cobro No Autorizadas */}
              <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-5 hover:border-red-500/30 hover:bg-slate-800/60 transition-all group shadow-md">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-slate-300 to-slate-500 flex items-center justify-center text-slate-900 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                    <HelpCircle size={18} className="group-hover:text-red-500 transition-colors" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-200">Cobros e Intermediarios Falsos</h3>
                </div>
                <p className="text-slate-400 text-xs font-sans leading-relaxed">
                  Nuestros servicios de consultoría, desarrollo multiempresa e ingeniería se coordinan de manera directa. No trabajamos con intermediarios informales ni gestores externos. Todo pago es respaldado por contratos estrictos firmados y cuentas bancarias corporativas oficiales.
                </p>
              </div>

            </div>

            {/* Columna Derecha: Panel de Canales Verificados y Blindaje */}
            <div className="bg-slate-800/30 border border-slate-700/60 rounded-2xl p-6 flex flex-col justify-between shadow-xl relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-200 flex items-center gap-2 border-b border-slate-700/50 pb-2 font-mono">
                  <Cpu size={18} className="text-[#D4AE36]" /> CANALES_VERIFICADOS
                </h3>

                {/* Bloque Canales Oficiales */}
                <div className="bg-slate-900/60 border border-[#2E7559]/30 rounded-xl p-4 flex gap-3 items-start">
                  <div className="mt-0.5 text-[#2E7559] flex-shrink-0">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-bold text-slate-200">Entorno Seguro de Contacto</h4>
                    <ul className="text-[11px] text-slate-400 mt-1 space-y-1 font-mono">
                      <li>• <strong className="text-slate-300">Sitio Web Único:</strong> Este entorno del OS.</li>
                      <li>• <strong className="text-slate-300">WhatsApp de Ingeniería:</strong> +591 71166513</li>
                      <li>• <strong className="text-slate-300">Canal de Transmisión:</strong> Central de Comunicaciones.</li>
                    </ul>
                  </div>
                </div>

                {/* Reporte Inmediato */}
                <div className="bg-slate-900/40 rounded-xl p-4 border border-slate-800">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-slate-300 flex items-center gap-1.5 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>¿Detectó una irregularidad?
                  </h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
                    Si recibe un mensaje sospechoso, un cobro dudoso o un enlace clonado utilizando la marca Cobal, repórtelo de forma inmediata a través de nuestro botón de transmisión de datos en la sección de contactos para que nuestro equipo proceda al bloqueo perimetral.
                  </p>
                </div>
              </div>

              {/* Botón de Retorno Seguro */}
              <button 
                onClick={(e) => { e.stopPropagation(); navigate(-1); }}
                className="w-full mt-4 bg-gradient-to-r from-slate-300 via-slate-200 to-slate-400 text-slate-950 font-bold uppercase text-xs tracking-widest p-3 rounded-lg shadow-lg hover:from-slate-200 hover:to-slate-300 transition-all active:scale-[0.98] border border-white/20"
              >
                Entendido / Volver al Sistema
              </button>
            </div>

          </div>

          {/* Pie de Firma de Seguridad */}
          <div className="mt-8 flex items-center gap-2 text-[10px] text-slate-500 font-mono tracking-widest uppercase">
            <Shield size={12} className="text-slate-500" /> Cobal Cyber-Defense Layer active
          </div>

        </div>
      </div>
      <Barra />
    </div>
  );
};

export default ScamAlert;