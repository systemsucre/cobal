import React, { useState, } from 'react';
import { Monitor, Shield, Cpu, Bus, X, Play, FolderGit, Layers, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { useBarra } from '../hooks/useBarra'
import Barra from './components/Barra'

import fondo from '../img/fondo1.png';

// 1. Definimos la interfaz para las ventanas activas
type WindowType = 'proyectos' | 'seguridad' | 'hardware' | 'contamax' | null;

// 2. Interfaz para los iconos del escritorio
interface DesktopIconProps {
  icon: React.ReactNode;
  label: string;
  onClick: (e: React.MouseEvent) => void;
}

const CobalOS: React.FC = () => {
  // --- ESTADOS TIPADOS ---
  const { setStartMenuOpen } = useBarra()
  const navigate = useNavigate();



  // Función para cerrar popups al hacer clic en el escritorio
  const handleDesktopClick = () => {
    setStartMenuOpen(false);
  };

  // 1. Definimos la interfaz exacta para asegurar que TypeScript entienda la estructura
  interface ProductData {
    nombre: string;
    icono: React.ComponentType<{ size?: number; className?: string }>; // Tipado estricto para iconos lucide
    version: string;
    descripcion: string;
    modulos: string[];
    roles: string[];
    caracteristicas: string[];
    terminos: string[];
  }

  // 2. Tipamos el array explícitamente con la interfaz : ProductData[]
  const productosMenu: ProductData[] = [
    {
      nombre: "SISTEMA CONTAMAX",
      icono: TrendingUp, // Pasamos el componente directamente sin renderizar
      version: "3.2",
      descripcion: "Plataforma de inteligencia predictiva y blindaje financiero de clase mundial, diseñada para el control absoluto del flujo de caja, mitigación de riesgos operativos y automatización de auditorías forenses.",
      modulos: [
        "Módulo de Ingresos",
        "Módulo de Boletas (Gastos)",
        "Arquitectura Central de Cajas",
        "Motor de Inteligencia Predictiva",
        "Liquidación de Honorarios",
        "Reportabilidad Instantánea"
      ],
      roles: [
        "Admin",
        "Gerente",
        "Cajero Central",
        "Cajero",
        "Supervisor",
        "Contador"
      ],
      caracteristicas: [
        "Algoritmo de Correlación de Pearson (r) para indexación matemática de costo/ganancia.",
        "Modelos de regresión lineal avanzados para la proyección predictiva de utilidad neta a mes vencido.",
        "Monitoreo automatizado del Índice de Eficiencia Operativa (IEO) con semáforos de alerta de riesgo.",
        "Logs de sistema inmutables con huella digital (User, Timestamp, Device) para control estricto antifraude.",
        "Afectación automática de saldo real en milisegundos para auditorías instantáneas multicaja.",
        "Filtro inteligente de anomalías (Outliers) para el aislamiento automático de gastos extraordinarios."
      ],
      terminos: [
        "Licencia de uso corporativo sujeta a la cantidad de terminales y sucursales declaradas en el contrato comercial.",
        "Gobernanza Antifraude: Los registros logs de auditoría forense son inmutables y no podrán ser modificados ni eliminados bajo ningún nivel de credenciales.",
        "La veracidad y respaldo de las boletas de gasto ingresadas en el sistema son responsabilidad exclusiva del operador asignado a la caja.",
        "El cálculo predictivo e Índices de Eficiencia Operativa se ejecutan de manera local basándose estrictamente en los datos históricos introducidos."
      ]
    },
    {
      nombre: "SISTEMA CONTABLE JURIDICO",
      icono: FolderGit, // Pasamos el componente directamente sin renderizar

      version: "2.5",
      descripcion: "Ecosistema de gestión e infraestructura legal multiempresa, optimizado para la centralización, vinculación transversal de expedientes y blindaje de carteras de clientes.",
      modulos: [
        "Gestión de Identidad (KYC)",
        "Vinculación Transversal",
        "Registro de Propiedades",
        "Control de Trámites",
        "Historial Inmutable"
      ],
      roles: [
        "Admin",
        "Gerente",
        "Abogado Titular",
        "Asistente Legal",
        "Auditor"
      ],
      caracteristicas: [
        "Estrategia KYC (Know Your Customer) integrada para el registro indexado de perfiles civiles y fiscales (NIT / C.I.).",
        "Vinculación operativa nativa que conecta expedientes jurídicos directamente con flujos de caja y facturación.",
        "Control de accesos basado en roles (RBAC) para la protección estricta de datos maestros y secreto profesional.",
        "Arquitectura basada en UUIDs para asegurar registros únicos libres de duplicidad de cuentas.",
        "Historial de actualizaciones inmutable con trazabilidad total del operador responsable del movimiento."
      ],
      terminos: [
        "Acuerdo estricto de confidencialidad y secreto profesional respecto a los datos maestros de clientes y empleadores centralizados.",
        "El acceso y la manipulación de expedientes legales quedan restringidos de acuerdo al rol de seguridad asignado (RBAC).",
        "Se prohíbe el uso de la base de datos de carteras integradas para fines externos al objeto del bufete o consorcio legal titular.",
        "El resguardo de los documentos adjuntos en el registro de propiedades es corresponsabilidad del administrador del servidor local."
      ]
    },
    {
      nombre: "SISTEMA VENTA DE PASAJES",
      icono: Bus, // Pasamos el componente directamente sin renderizar

      version: "1.8",
      descripcion: "Plataforma de administración e ingeniería financiera institucional para la emisión automatizada, control de recaudaciones y reportabilidad express de alta dirección.",
      modulos: [
        "Control de Recaudación",
        "Emisión Express de Recibos",
        "Consolidación Transversal",
        "Filtros Avanzados",
        "Auditoría de Cierres"
      ],
      roles: [
        "Admin",
        "Gerente",
        "Auxiliar de Caja",
        "Auditor Externo"
      ],
      caracteristicas: [
        "Integración nativa con ExcelJS para la exportación de matrices financieras y balances unificados sin pérdida de formato.",
        "Generación instantánea de reportes PDF con firmas digitales y sellos de verificación integrados.",
        "Cierre de caja express optimizado para la liquidación de turnos operativos en entornos de alta demanda.",
        "Buscador inteligente indexado con filtros de jerarquía y estados operativos en tiempo real."
      ],
      terminos: [
        "Licencia homologada para la gestión contable interna. No transfiere derechos de comercialización del motor de reportes ExcelJS.",
        "Cada recibo express emitido adquiere un folio digital único y correlativo que invalida alteraciones o duplicaciones.",
        "Los cierres de caja consolidados se consideran declaraciones juradas operativas una vez finalizado el turno del auxiliar.",
        "La exportación de datos a hojas de cálculo externas es auditable por el perfil del Administrador del Sistema."
      ]
    },
    {
      nombre: "Cobal OS Core",
      icono: Layers, // Pasamos el componente directamente sin renderizar

      version: "3.0",
      descripcion: "Entorno operativo web y núcleo de telemetría industrial de Cobal, diseñado con interfaces HUD inmunes a colisiones de estilos y optimizado para la integración de hardware y automatización remota.",
      modulos: [
        "Escritorio Virtual (OS)",
        "Central de Comunicaciones",
        "Telemetría de Hardware",
        "Seguridad perimetral",
        "Control de Procesos Web"
      ],
      roles: [
        "Root Admin",
        "Ingeniero de Sistemas",
        "Operador de Consola"
      ],
      caracteristicas: [
        "Blindaje de estilos nativos e interfaces flotantes con aislamiento completo contra interferencias de CSS externo.",
        "Buffer de datos securizado en cliente que purga la memoria del localStorage al destruir la instancia de sesión.",
        "Entorno de barra de tareas inteligente tipo HUD con despliegue dinámico por interacciones sutiles (Hover/Click).",
        "Pasarela de transmisión de datos cifrada y mapeada para el despacho automático de requerimientos a ingeniería."
      ],
      terminos: [
        "Uso exclusivo para la administración, monitoreo de procesos internos y telemetría de hardware de Cobal Engineering Corp.",
        "La pasarela de transmisión de requerimientos recopila únicamente datos de texto ingresados explícitamente por el operador.",
        "Queda prohibida la inyección de código o la alteración del búfer temporal de datos en local del cliente de manera maliciosa.",
        "La destrucción de la instancia de sesión o cierre de pestaña purga y destruye automáticamente las claves efímeras del sistema."
      ]
    },






    
  ];

  // En tu función de selección:
  const handleSelectProduct = (producto: ProductData) => {
    // 1. Clonamos el objeto y eliminamos la referencia del componente de React 
    // para que el localStorage no se rompa al hacer el stringify
    const { icono, ...datosParaGuardar } = producto;

    localStorage.setItem('cobal_selected_product', JSON.stringify(datosParaGuardar));
    setStartMenuOpen(false);
    navigate('/detalles-de-producto');
  };
  return (
    // <div
    //   className="h-screen w-full overflow-hidden relative font-sans select-none bg-[#f0F4F8]"
    //   onClick={handleDesktopClick}
    // >

    <div
      className="h-screen w-full overflow-hidden relative font-sans select-none bg-slate-950 bg-cover bg-center bg-no-repeat"
      onClick={handleDesktopClick}
      style={{
        backgroundImage: `url(${fondo})`,
      }}

    >
      {/* --- ICONOS DEL ESCRITORIO (FLUJO VERTICAL EXTENSIBLE DE ARRIBA HACIA ABAJO) --- */}
      <div className="absolute top-0 left-0 p-6 h-[calc(100vh-48px)] grid grid-flow-col grid-rows-[repeat(auto-fill,minmax(105px,1fr))] gap-y-4 gap-x-3 z-10 max-w-full">
        {productosMenu.map((prod, index) => (
          <DesktopIcon
            key={index}
            icon={<prod.icono />}
            label={prod.nombre}
            onClick={(e) => {
              e.stopPropagation(); // Evita colisiones con el click del desktop
              handleSelectProduct(prod);
            }}
          />
        ))}
      </div>
      < Barra />
    </div >
  );
};

interface DesktopIconProps {
  icon: React.ReactNode;
  label: string;
  onClick: (e: React.MouseEvent) => void;
}

const DesktopIcon = ({ icon, label, onClick }: DesktopIconProps) => (
  <button
    onClick={onClick}
    className="flex flex-col items-center gap-2.5 p-2 rounded-xl transition-all duration-300 group w-24 outline-none select-none focus:scale-95"
  >
    {/* CONTENEDOR EFECTO METAL PLATINO + BISELADO + SOMBRA INTERNA */}
    <div className="w-16 h-16 rounded-[18px] relative flex items-center justify-center transition-all duration-300
      /* Gradiente metálico base */
      bg-gradient-to-b from-[#A0A5B0] via-[#787D88] to-[#4A4E57]
      /* Biselado superior claro y borde inferior oscuro simulando 3D */
      border-t border-white/40 border-b border-black/50 border-x border-slate-400/30
      /* Sombras: Externa suave y Sombra interna (inset) para profundidad metálica */
      shadow-[0_4px_10px_rgba(0,0,0,0.4),inset_0_2px_3px_rgba(255,255,255,0.4),inset_0_-3px_6px_rgba(0,0,0,0.3)]
      
      /* EFECTO HOVER: Brillo perimetral Ámbar/Oro idéntico a la imagen */
      group-hover:shadow-[0_0_20px_6px_rgba(212,174,54,0.35),inset_0_2px_3px_rgba(255,255,255,0.5)]
      group-hover:from-[#B8BDC9] group-hover:to-[#5A5E68]"
    >
      {/* Capa de reflejo de luz superior interna */}
      <div className="absolute top-[1px] left-1/2 -translate-x-1/2 w-[85%] h-[40%] bg-gradient-to-b from-white/20 to-transparent rounded-t-[14px] pointer-events-none" />

      {/* ICONO CENTRAL: Efecto Cromo Grabado (Sombra difuminada) */}
      <div className="text-slate-200 drop-shadow-[0_2px_3px_rgba(0,0,0,0.65)] group-hover:text-white group-hover:scale-105 transition-all duration-300 z-10 flex items-center justify-center">
        {React.cloneElement(icon as React.ReactElement, { size: 28, strokeWidth: 1.8 })}
      </div>
    </div>

    {/* ETIQUETA / TEXTO HUD */}
 <span className="text-[10px] text-slate-200 font-mono font-bold tracking-widest uppercase text-center w-full whitespace-normal break-words px-1 drop-shadow-[0_2px_2px_rgba(0,0,0,1)] group-hover:text-[#D4AE36] transition-colors duration-200">
  {label}
</span>
  </button>
);

export default CobalOS;