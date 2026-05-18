import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Cpu, X, FileText, Scale, Lock, AlertTriangle } from 'lucide-react';
import Barra from './components/Barra';
import { useBarra } from '@/hooks/useBarra';

const TermsAndConditions: React.FC = () => {
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
          <span className="text-[11px] text-[#D4AE36] font-bold uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 rounded-full bg-[#D4AE36] animate-ping" style={{ width: '8px', height: '8px' }}></span>
            COBAL SYSTEM OS - ESTATUTOS CORPORATIVOS
          </span>
          <button
            onClick={() => navigate(-1)}
            className="text-white hover:text-white hover:bg-red-600 p-1.5 rounded transition-all duration-200"
            title="Cerrar Ventana"
          >
            <X size={16} />
          </button>
        </div>

        {/* CUERPO DE LA VENTANA INTERNA - ENFOQUE PLATINO LEGAL */}
        <div className="flex-1 p-8 lg:p-12 text-white overflow-y-auto bg-gradient-to-b from-slate-900 via-[#1E293B] to-[#0F172A] flex flex-col items-center">
          
          {/* Encabezado del Módulo */}
          <div className="text-center max-w-2xl mb-10">
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-slate-300 to-slate-400 tracking-tight uppercase">
              Términos Generales de Cobal
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Acuerdo marco de servicios tecnológicos, licenciamiento global y propiedad intelectual de Cobal Engineering.
            </p>
          </div>

          {/* Grid de Contenido Principal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl flex-1 items-stretch">
            
            {/* Columna Izquierda: Cláusulas Corporativas de Uso */}
            <div className="flex flex-col gap-4 justify-between overflow-y-auto max-h-[420px] md:max-h-none pr-1 md:pr-0">
              
              {/* Cláusula 1: Propiedad Intelectual de Cobal */}
              <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-5 hover:border-slate-500/50 hover:bg-slate-800/60 transition-all group shadow-md">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-slate-200 to-slate-400 flex items-center justify-center text-slate-900 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                    <Scale size={18} />
                  </div>
                  <h3 className="text-sm font-bold text-slate-200">1. Propiedad Intelectual Corporativa</h3>
                </div>
                <p className="text-slate-400 text-xs font-sans leading-relaxed">
                  Cobal retiene la titularidad exclusiva de todas las patentes, marcas, diseños de interfaz HUD, códigos fuente compilados, algoritmos estadísticos y entornos virtuales desarrollados por la empresa. Las licencias otorgadas facultan únicamente el uso operativo interno de las herramientas, prohibiéndose explícitamente su sublicenciamiento o reventa.
                </p>
              </div>

              {/* Cláusula 2: Servicios y Consultorías */}
              <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-5 hover:border-slate-500/50 hover:bg-slate-800/60 transition-all group shadow-md">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-slate-200 to-slate-400 flex items-center justify-center text-slate-900 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                    <Lock size={18} />
                  </div>
                  <h3 className="text-sm font-bold text-slate-200">2. Alcance de Consultoría y Soporte</h3>
                </div>
                <p className="text-slate-400 text-xs font-sans leading-relaxed">
                  Las integraciones de hardware, consultorías de software multiempresa y desarrollos a medida se rigen bajo Acuerdos de Nivel de Servicio (SLA) específicos. Cobal garantiza la estabilidad técnica estructural y el blindaje nativo de sus plataformas frente a colisiones externas, siempre y cuando no existan modificaciones no autorizadas en el entorno virtual.
                </p>
              </div>

            </div>

            {/* Columna Derecha: Panel de Telemetría Legal y Conformidad */}
            <div className="bg-slate-800/30 border border-slate-700/60 rounded-2xl p-6 flex flex-col justify-between shadow-xl relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-400/5 rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-200 flex items-center gap-2 border-b border-slate-700/50 pb-2 font-mono">
                  <Cpu size={18} className="text-[#D4AE36]" /> CORPORATE_COMPLIANCE
                </h3>

                {/* Notificación de Jurisdicción */}
                <div className="bg-slate-900/60 border border-slate-700/80 rounded-xl p-4 flex gap-3 items-start">
                  <div className="mt-0.5 text-[#D4AE36] flex-shrink-0">
                    <AlertTriangle size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-bold text-slate-300">Marco Legal de Operaciones</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed font-mono">
                      Todas las actividades comerciales, de desarrollo y provisión de sistemas ejecutadas por Cobal se encuentran sujetas y reguladas por las leyes vigentes del Estado Plurinacional de Bolivia, estableciendo como jurisdicción legal la ciudad de Sucre.
                    </p>
                  </div>
                </div>

                {/* Resumen de Responsabilidad */}
                <div className="bg-slate-900/40 rounded-xl p-4 border border-slate-800">
                  <div className="flex items-center gap-2 text-slate-300 text-xs font-bold mb-1">
                    <FileText size={14} className="text-slate-400" /> Aceptación de Términos
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    La navegación o interacción con este entorno operativo, así como la contratación de cualquiera de nuestras soluciones de software, implica el consentimiento inequívoco de estas cláusulas generales de confidencialidad, propiedad y uso ético de la tecnología Cobal.
                  </p>
                </div>
              </div>

              {/* Botón de Retorno Aceptado */}
              <button 
                onClick={(e) => { e.stopPropagation(); navigate(-1); }}
                className="w-full mt-4 bg-gradient-to-r from-slate-300 via-slate-200 to-slate-400 text-slate-950 font-bold uppercase text-xs tracking-widest p-3 rounded-lg shadow-lg hover:from-slate-200 hover:to-slate-300 transition-all active:scale-[0.98] border border-white/20"
              >
                Confirmar y Regresar
              </button>
            </div>

          </div>

          {/* Pie de Firma de Seguridad */}
          <div className="mt-8 flex items-center gap-2 text-[10px] text-slate-500 font-mono tracking-widest uppercase">
            <Shield size={12} className="text-slate-500" /> Cobal Engineering Corp. Legal Matrix
          </div>

        </div>
      </div>
      <Barra />
    </div>
  );
};

export default TermsAndConditions;