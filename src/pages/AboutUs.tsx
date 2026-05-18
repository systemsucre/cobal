import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Cpu, Code2, X, Terminal, Target, Layers } from 'lucide-react';
import Barra from './components/Barra';
import { useBarra } from '@/hooks/useBarra';

const AboutUs: React.FC = () => {
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

        {/* CUERPO DE LA VENTANA INTERNA - ENFOQUE PLATINO INDUSTRIAL */}
        <div className="flex-1 p-8 lg:p-12 text-white overflow-y-auto bg-gradient-to-b from-slate-900 via-[#1E293B] to-[#0F172A] flex flex-col items-center">
          
          {/* Encabezado del Módulo */}
          <div className="text-center max-w-2xl mb-10">
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-slate-300 to-slate-400 tracking-tight uppercase">
              Nuestra Identidad / Núcleo
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Conozca la arquitectura técnica, la visión analítica y el equipo detrás del desarrollo de Cobal.
            </p>
          </div>

          {/* Grid de Contenido Principal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl flex-1 items-stretch">
            
            {/* Columna Izquierda: Filosofía e Historia */}
            <div className="flex flex-col gap-4 justify-between">
              
              {/* Bloque: Quiénes Somos */}
              <div className="flex-1 bg-slate-800/40 border border-slate-700/60 rounded-xl p-6 flex flex-col justify-center hover:border-slate-500/50 hover:bg-slate-800/60 transition-all group shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-slate-200 to-slate-400 flex items-center justify-center text-slate-900 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    <Terminal size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#D4AE36] uppercase tracking-wider">Ingeniería Avanzada</p>
                    <h3 className="text-base font-bold text-slate-200">¿Quiénes Somos?</h3>
                  </div>
                </div>
                <p className="text-slate-300 text-sm font-sans leading-relaxed">
                  Somos un laboratorio de desarrollo de software e integración de sistemas enfocado en el blindaje operativo. Diseñamos plataformas analíticas empresariales y herramientas de georreferenciación de alto rendimiento que transforman datos crudos en control comercial absoluto.
                </p>
              </div>

              {/* Bloque: Nuestro Enfoque */}
              <div className="flex-1 bg-slate-800/40 border border-slate-700/60 rounded-xl p-6 flex flex-col justify-center hover:border-slate-500/50 hover:bg-slate-800/60 transition-all group shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-slate-200 to-slate-400 flex items-center justify-center text-slate-900 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    <Code2 size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#D4AE36] uppercase tracking-wider">Desarrollo Propietario</p>
                    <h3 className="text-base font-bold text-slate-200">Nuestra Especialidad</h3>
                  </div>
                </div>
                <p className="text-slate-300 text-sm font-sans leading-relaxed">
                  Nos especializamos en romper la dependencia de software genérico de terceros. Creamos soluciones multiempresa con algoritmos estadísticos del lado del cliente, garantizando interfaces estables, veloces y blindadas contra interferencias externas.
                </p>
              </div>

            </div>

            {/* Columna Derecha: Panel de Misión y Pilares Metálicos */}
            <div className="bg-slate-800/30 border border-slate-700/60 rounded-2xl p-6 flex flex-col justify-between shadow-xl relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-400/5 rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="space-y-5">
                <h3 className="text-lg font-bold text-slate-200 flex items-center gap-2 border-b border-slate-700/50 pb-2">
                  <Cpu size={18} className="text-[#D4AE36]" /> Telemetría de Objetivos
                </h3>

                {/* Pilar 1: Misión */}
                <div className="flex gap-3 items-start">
                  <div className="mt-1 text-[#D4AE36]">
                    <Target size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-bold text-slate-300">Misión Estratégica</h4>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                      Dotar a firmas legales, consultoras y corporaciones de herramientas de software inmutables que mitiguen el fraude interno, optimicen recursos y automaticen la auditoría forense.
                    </p>
                  </div>
                </div>

                {/* Pilar 2: Visión */}
                <div className="flex gap-3 items-start">
                  <div className="mt-1 text-[#D4AE36]">
                    <Layers size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-bold text-slate-300">Visión Tecnológica</h4>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                      Establecer a Cobal como el estándar de desarrollo de sistemas operativos web y de gestión financiera en la región, promoviendo la soberanía tecnológica y el código limpio.
                    </p>
                  </div>
                </div>

                {/* Pilar 3: Valores del Sistema */}
                <div className="flex gap-3 items-start">
                  <div className="mt-1 text-[#D4AE36]">
                    <Shield size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-bold text-slate-300">Cultura de Blindaje</h4>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                      La seguridad y el rendimiento no son características opcionales en nuestros desarrollos; son la infraestructura base sobre la cual se construye cada línea de código.
                    </p>
                  </div>
                </div>
              </div>

              {/* Botón de Cierre de Sesión Informativa */}
              <button 
                onClick={(e) => { e.stopPropagation(); navigate(-1); }}
                className="w-full mt-4 bg-gradient-to-r from-slate-300 via-slate-200 to-slate-400 text-slate-950 font-bold uppercase text-xs tracking-widest p-3 rounded-lg shadow-lg hover:from-slate-200 hover:to-slate-300 transition-all active:scale-[0.98] border border-white/20"
              >
                Regresar al Escritorio
              </button>
            </div>

          </div>

          {/* Pie de Firma de Seguridad */}
          <div className="mt-8 flex items-center gap-2 text-[10px] text-slate-500 font-mono tracking-widest uppercase">
            <Shield size={12} className="text-slate-500" /> Cobal Engineering Corp. v3.0
          </div>

        </div>
      </div>
      <Barra />
    </div>
  );
};

export default AboutUs;