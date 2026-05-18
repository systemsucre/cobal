import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Cpu, X, Terminal, Layers, Users, Sliders, Box, FileText, Scale } from 'lucide-react';
import Barra from './components/Barra';
import { useBarra } from '@/hooks/useBarra';

// Interfaces estrictas actualizadas para soportar términos dinámicos
interface ProductData {
  nombre: string;
  version?: string;
  descripcion?: string;
  modulos: string[];
  roles: string[];
  caracteristicas?: string[];
  terminos?: string[]; // Nueva propiedad para las cláusulas legales desde localStorage
}

const ProductDetail: React.FC = () => {
  const navigate = useNavigate();
  const { setStartMenuOpen } = useBarra();
  const [producto, setProducto] = useState<ProductData | null>(null);

  // Carga de datos desde el LocalStorage al inicializar el componente
  useEffect(() => {
    const dataTemporal = localStorage.getItem('cobal_selected_product');
    if (dataTemporal) {
      try {
        setProducto(JSON.parse(dataTemporal));
      } catch (error) {
        console.error("Error analizando el paquete de datos del producto:", error);
      }
    }
  }, []);

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
            COBAL SYSTEM OS - TELEMETRÍA DE PRODUCTO
          </span>
          <button
            onClick={() => navigate(-1)}
            className="text-white hover:text-white hover:bg-red-600 p-1.5 rounded transition-all duration-200"
            title="Regresar al listado"
          >
            <X size={16} />
          </button>
        </div>

        {/* CUERPO DE LA VENTANA INTERNA - SCROLLABLE Y CON ACABADO PLATINO */}
        <div className="flex-1 p-6 lg:p-10 text-white overflow-y-auto bg-gradient-to-b from-slate-900 via-[#1E293B] to-[#0F172A] flex flex-col items-center">
          
          {producto ? (
            <div className="w-full max-w-5xl flex flex-col items-center">
              
              {/* Encabezado Dinámico del Sistema */}
              <div className="text-center max-w-2xl mb-8">
                <p className="text-xs font-bold text-[#D4AE36] uppercase tracking-widest mb-1 font-mono">
                  FICHA TÉCNICA // VERSIÓN {producto.version || '3.0'}
                </p>
                <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-slate-300 to-slate-400 tracking-tight uppercase">
                  {producto.nombre}
                </h2>
                <p className="text-slate-400 text-sm mt-2 max-w-xl mx-auto leading-relaxed">
                  {producto.descripcion || "Especificaciones de arquitectura de software y empaquetamiento modular propietario."}
                </p>
              </div>

              {/* Grid de Contenido Superior: Módulos, Roles y Telemetría */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full items-stretch mb-6">
                
                {/* Columna Izquierda: Bloque de Módulos e Infraestructura */}
                <div className="flex flex-col gap-5 justify-between">
                  
                  {/* Panel de Módulos Activos */}
                  <div className="flex-1 bg-slate-800/40 border border-slate-700/60 rounded-xl p-5 hover:border-slate-500/50 hover:bg-slate-800/60 transition-all shadow-md flex flex-col">
                    <div className="flex items-center gap-3 mb-4 border-b border-slate-700/50 pb-2">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-slate-200 to-slate-400 flex items-center justify-center text-slate-900 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        <Layers size={20} />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-200">Arquitectura Modular</h3>
                        <p className="text-[10px] font-bold text-[#D4AE36] uppercase tracking-wider">Estructura del Sistema</p>
                      </div>
                    </div>
                    
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2 overflow-y-auto max-h-[160px] pr-1">
                      {producto.modulos && producto.modulos.length > 0 ? (
                        producto.modulos.map((modulo, index) => (
                          <div key={index} className="bg-slate-900/60 border border-slate-700/80 rounded-lg p-2 flex items-center gap-2 font-mono text-xs text-slate-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#2E7559] flex-shrink-0"></div>
                            <span className="truncate">{modulo}</span>
                          </div>
                        ))
                      ) : (
                        <p className="text-xs text-slate-500 italic">No se detectaron módulos instalados.</p>
                      )}
                    </div>
                  </div>

                  {/* Panel de Gobierno de Roles (RBAC) */}
                  <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-5 hover:border-slate-500/50 hover:bg-slate-800/60 transition-all shadow-md">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-slate-200 to-slate-400 flex items-center justify-center text-slate-900 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                        <Users size={18} />
                      </div>
                      <h3 className="text-sm font-bold text-slate-200">Políticas de Acceso (RBAC)</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {producto.roles && producto.roles.length > 0 ? (
                        producto.roles.map((rol, index) => (
                          <span key={index} className="text-[10px] uppercase font-bold tracking-wider font-mono bg-slate-900/80 border border-slate-700 text-slate-400 px-2.5 py-1 rounded-md">
                            🔒 {rol}
                          </span>
                        ))
                      ) : (
                        <span className="text-xs text-slate-500 italic">Acceso global no restringido.</span>
                      )}
                    </div>
                  </div>

                </div>

                {/* Columna Derecha: Características Avanzadas y Telemetría */}
                <div className="bg-slate-800/30 border border-slate-700/60 rounded-2xl p-6 flex flex-col justify-between shadow-xl relative overflow-hidden backdrop-blur-sm">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-slate-400/5 rounded-full blur-2xl pointer-events-none"></div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-slate-200 flex items-center gap-2 border-b border-slate-700/50 pb-2 font-mono">
                      <Cpu size={18} className="text-[#D4AE36]" /> TELEMETRÍA_INTEGRATION
                    </h3>

                    <div className="space-y-3 overflow-y-auto max-h-[200px] pr-1">
                      {producto.caracteristicas && producto.caracteristicas.length > 0 ? (
                        producto.caracteristicas.map((feat, index) => (
                          <div key={index} className="flex gap-3 items-start">
                            <div className="mt-1 text-[#D4AE36] flex-shrink-0"><Sliders size={14} /></div>
                            <div>
                              <p className="text-xs text-slate-300 font-sans leading-relaxed">{feat}</p>
                            </div>
                          </div>
                        ))
                      ) : (
                        <>
                          <div className="flex gap-3 items-start">
                            <div className="mt-1 text-[#D4AE36] flex-shrink-0"><Terminal size={14} /></div>
                            <div>
                              <h4 className="text-xs uppercase tracking-wider font-bold text-slate-300">Blindaje de Estilos Nativos</h4>
                              <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                                Formularios e interfaces web inmunes a colisiones de CSS externo.
                              </p>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <button 
                    onClick={(e) => { e.stopPropagation(); navigate(-1); }}
                    className="w-full mt-4 bg-gradient-to-r from-slate-300 via-slate-200 to-slate-400 text-slate-950 font-bold uppercase text-xs tracking-widest p-2.5 rounded-lg shadow-lg hover:from-slate-200 hover:to-slate-300 transition-all active:scale-[0.98] border border-white/20"
                  >
                    Cerrar Ficha Técnica
                  </button>
                </div>

              </div>

              {/* --- NUEVA SECCIÓN INFERIOR: TÉRMINOS Y CONDICIONES DEL PRODUCTO --- */}
              <div className="w-full bg-slate-800/20 border border-slate-700/50 rounded-2xl p-6 shadow-xl backdrop-blur-sm relative overflow-hidden">
                <div className="flex items-center gap-3 mb-4 border-b border-slate-700/50 pb-2.5">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-slate-300 to-slate-500 flex items-center justify-center text-slate-950 shadow-[0_0_10px_rgba(255,255,255,0.05)]">
                    <FileText size={18} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-200 flex items-center gap-2">
                      Términos de Licencia y Gobernanza Legal
                    </h3>
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Product Compliance Matrix</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-xs text-slate-400 leading-relaxed overflow-y-auto max-h-[150px] pr-1">
                  {producto.terminos && producto.terminos.length > 0 ? (
                    producto.terminos.map((termino, index) => (
                      <div key={index} className="bg-slate-900/40 border border-slate-800 rounded-xl p-3.5 flex gap-3 items-start hover:border-slate-700/50 transition-colors">
                        <Scale size={16} className="text-[#D4AE36] flex-shrink-0 mt-0.5" />
                        <p>{termino}</p>
                      </div>
                    ))
                  ) : (
                    <>
                      {/* Cláusulas estándar de Cobal por defecto si el LocalStorage no envía términos */}
                      <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-3.5 flex gap-3 items-start">
                        <Scale size={16} className="text-[#D4AE36] flex-shrink-0 mt-0.5" />
                        <p>
                          <strong className="text-slate-300 block mb-0.5">Licenciamiento Propietario:</strong>
                          Este sistema constituye propiedad intelectual de Cobal. Se prohíbe la alteración, descompilación o distribución no autorizada de sus módulos ejecutables.
                        </p>
                      </div>
                      <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-3.5 flex gap-3 items-start">
                        <Scale size={16} className="text-[#D4AE36] flex-shrink-0 mt-0.5" />
                        <p>
                          <strong className="text-slate-300 block mb-0.5">Trazabilidad Obligatoria:</strong>
                          El uso de este software genera bitácoras de auditoría (*Logs*) inmutables. El cliente asume la responsabilidad legal por operaciones bajo roles autorizados.
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>

            </div>
          ) : (
            /* Estado de Carga / Buffer de Datos no Encontrado */
            <div className="flex-1 flex flex-col items-center justify-center text-center font-mono">
              <Box size={40} className="text-slate-600 animate-bounce mb-3" />
              <p className="text-sm text-slate-400">Sincronizando bus de datos locales...</p>
              <p className="text-[10px] text-slate-600 mt-1 uppercase">Esperando asignación en localStorage: 'cobal_selected_product'</p>
            </div>
          )}

          {/* Pie de Firma de Seguridad */}
          <div className="mt-8 flex items-center gap-2 text-[10px] text-slate-500 font-mono tracking-widest uppercase">
            <Shield size={12} className="text-slate-500" /> Cobal Repository Audit System
          </div>

        </div>
      </div>
      <Barra />
    </div>
  );
};

export default ProductDetail;