import React, { useState } from 'react';
import { Shield, Cpu, Bus, X, Play, FolderGit, Layers, TrendingUp, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { useBarra } from '../hooks/useBarra';
import Barra from './components/Barra';

import fondo from '../img/fondo1.png';

// --- INTERFACES ---

interface ProductData {
  nombre: string;
  icono: React.ComponentType<{ size?: number; className?: string }>;
  version: string;
  descripcion: string;
  modulos: string[];
  roles: string[];
  caracteristicas: string[];
  terminos: string[];
}

interface DesktopIconProps {
  icon: React.ReactNode;
  label: string;
  onClick: (e: React.MouseEvent) => void;
}

// --- SUB-COMPONENTE: DESKTOP ICON (ENFOQUE PLATINO INDUSTRIAL LOGRADO) ---

const DesktopIcon = ({ icon, label, onClick }: DesktopIconProps) => (
  <button
    onClick={onClick}
    className="flex flex-col items-center gap-2.5 p-2 rounded-xl transition-all duration-300 group w-24 outline-none select-none active:scale-95"
  >
    {/* CONTENEDOR METÁLICO: Consistencia Platino y Brillo Perimetral HUD */}
    <div className="w-16 h-16 rounded-xl relative flex items-center justify-center transition-all duration-300
      /* Gradiente Platino base calcado de tu Central de Comunicaciones */
      bg-gradient-to-br from-slate-200 to-slate-400 
      border border-slate-100/30
      /* Doble sombra: Profundidad externa y biselado interno sutil */
      shadow-[0_4px_12px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.6)]
      
      /* EFECTO HOVER: Activación de la matriz de inducción Ámbar/Oro de Cobal OS */
      group-hover:shadow-[0_0_20px_6px_rgba(212,174,54,0.4),inset_0_1px_2px_rgba(255,255,255,0.8)]
      group-hover:from-white group-hover:to-slate-300"
    >
      {/* Glaseado reflectivo superior para realismo industrial */}
      <div className="absolute top-[1px] left-1/2 -translate-x-1/2 w-[90%] h-[35%] bg-gradient-to-b from-white/20 to-transparent rounded-t-lg pointer-events-none" />

      {/* ICONO CENTRAL: Contraste oscuro Slate-900 nativo */}
      <div className="text-slate-900 drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)] group-hover:scale-110 transition-all duration-300 z-10 flex items-center justify-center">
        {icon}
      </div>
    </div>

    {/* ETIQUETA HUD: Expuesta completa sin truncar, tipografía Monospace de Cobal */}
    <span className="text-[10px] text-slate-200 font-mono font-bold tracking-widest uppercase text-center w-full whitespace-normal break-words px-1 drop-shadow-[0_2px_3px_rgba(0,0,0,1)] group-hover:text-[#D4AE36] transition-colors duration-200 leading-tight">
      {label}
    </span>
  </button>
);

// --- COMPONENTE PRINCIPAL: COBAL OS ---

const CobalOS: React.FC = () => {
  const { setStartMenuOpen } = useBarra();
  const navigate = useNavigate();

  // Función para cerrar popups al hacer clic en el escritorio
  const handleDesktopClick = () => {
    setStartMenuOpen(false);
  };

  const productosMenu: ProductData[] = [
    {
      nombre: "SISTEMA CONTAMAX",
      icono: TrendingUp,
      version: "3.0",
      descripcion: "Plataforma de inteligencia predictiva y blindaje financiero de clase mundial multiempesa con soporte para varias divisas, diseñada para el control absoluto del flujo de caja, mitigación de riesgos operativos y automatización de reportes.",
      modulos: ["Módulo de Ingresos", "Módulo de Boletas (Gastos)", "Arquitectura Central de Cajas", "Módulo de clientes", "Motor de Inteligencia Predictiva", "Reportabilidad Instantánea", "Módulo deusuarios y configuracion empresarial"],
      roles: ["Super Admin", "Gerente", "Cajero"],
      caracteristicas: ["Algoritmo de Correlación de Pearson (r) para indexación matemática de costo/ganancia.", "Modelos de regresión lineal avanzados para la proyección predictiva de utilidad neta a mes vencido.", "Monitoreo automatizado del Índice de Eficiencia Operativa (IEO) con semáforos de alerta de riesgo."],
      terminos: ["Licencia de uso corporativo sujeta a la cantidad de terminales, y roles declaradas.", "Gobernanza Antifraude: Los registros logs de auditoría forense son inmutables."]
    },
    {
      nombre: "SISTEMA CONTABLE JURIDICO",
      icono: FolderGit,
      version: "2.0",
      descripcion: "Ecosistema de gestión e infraestructura legal empresarial, optimizado para la centralización, vinculación transversal de expedientes y blindaje de carteras de clientes.",
      modulos: ["Gestión de trémites", "Vinculación Transversal ingresos/gastos", "Registro de clientes", "Control de accesos", "reportes y dashboard"],
      roles: ["Super Admin", "Gerente", "administrador", "Asistente Legal"],
      caracteristicas: ["Estrategia KYC (Know Your Customer) integrada para el registro indexado.", "Vinculación operativa que conecta expedientes jurídicos directamente con flujos de caja.", "Control de accesos basado en roles (RBAC) para la protección de datos maestros."],
      terminos: ["Acuerdo estricto de confidencialidad y secreto profesional respecto a los datos maestros.", "El acceso y la manipulación de movimientos de expedientes legales quedan restringidos de acuerdo al rol."]
    },
    {
      nombre: "SISTEMA VENTA DE PASAJES",
      icono: Bus,
      version: "1.0",
      descripcion: "Plataforma centralizada de ingeniería logística y boletaje institucional diseñada para la gestión automatizada de itinerarios, venta y reserva de pasajes, rastreo de encomiendas y auditoría analítica de recaudación en tiempo real.",
      modulos: [
        "Buscador Maestro de Pasajes",
        "Mapeo Dinámico de Asientos",
        "Gestión de Reservas y Venta Express",
        "Módulo de Encomiendas y Carga",
        "Control de Recaudación y Caja",
        "Motor de Reportabilidad Configurable",
        "Auditoría de Cierres y Turnos"
      ],
      roles: [
        "Admin",
        "Secretaria",
        "Chofer",
        "Usuario/pasajero"
      ],
      caracteristicas: [
        "Buscador maestro indexado de alta velocidad para filtrado inmediato de rutas, horarios y disponibilidad de tramos.",
        "Mapeo modular de asientos bidimensional totalmente adaptable para configuraciones de movilidad de cualquier tipo y escala (Cama, Semicama, suites).",
        "Despacho automatizado y generación instantánea de tickets de pasaje con códigos de verificación integrados.",
        "Ecosistema tracking de encomiendas integrado con asignación de guías, control de peso, volumen y estados de entrega.",
        "Matrices de reportes totalmente configurables y segmentadas por sucursal, unidad vehicular, rangos de fecha y operador.",
        "Integración nativa con ExcelJS para la exportación de auditorías de viaje y PDF estructurados para balances de ruta."
      ],
      terminos: [
        "Cada ticket de pasaje o guía de encomienda emitido adquiere un folio digital único correlativo que bloquea alteraciones.",
        "Los cierres de caja consolidados por unidad y sucursal constituyen declaraciones juradas operativas una vez finalizado el turno.",
        "La configuración estructural del mapeo de asientos es responsabilidad exclusiva del Administrador del Sistema.",
        "Licencia homologada para la gestión contable y logística de la flota declarada, sujeta a las sucursales estipuladas en el acuerdo comercial."
      ]
    },
    {
      nombre: "COBAL OS CORE",
      icono: Layers,
      version: "3.0",
      descripcion: "Entorno operativo web y núcleo de telemetría industrial de Cobal, diseñado con interfaces HUD inmunes a colisiones de estilos y optimizado para la integración de hardware y automatización remota.",
      modulos: ["Escritorio Virtual (OS)", "Central de Comunicaciones", "Telemetría de Hardware", "Seguridad perimetral", "Control de Procesos Web"],
      roles: ["Root Admin", "Ingeniero de Sistemas", "Operador de Consola"],
      caracteristicas: ["Blindaje de estilos nativos e interfaces flotantes con aislamiento completo.", "Buffer de datos securizado en cliente que purga la memoria del localStorage al destruir la sesión.", "Entorno de barra de tareas inteligente tipo HUD con despliegue dinámico."],
      terminos: ["Uso exclusivo para la administración, monitoreo de procesos internos y telemetría.", "La pasarela de transmisión de requerimientos recopila únicamente datos de texto."]
    }
  ];

  const handleSelectProduct = (producto: ProductData) => {
    // Aislamiento de componente React antes de la serialización en búfer local
    const { icono, ...datosParaGuardar } = producto;
    localStorage.setItem('cobal_selected_product', JSON.stringify(datosParaGuardar));
    setStartMenuOpen(false);
    navigate('/detalles-de-producto');
  };

  return (
    <div
      className="h-screen w-full overflow-hidden relative font-sans select-none bg-slate-950 bg-cover bg-center bg-no-repeat"
      onClick={handleDesktopClick}
      style={{ backgroundImage: `url(${fondo})` }}
    >
      {/* Capa de profundidad HUD - Gradiente idéntico al fondo de tus ventanas corporativas */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-transparent to-slate-950/70 pointer-events-none z-0" />

      {/* --- REJILLA DE ICONOS (FLUJO VERTICAL INTELIGENTE ANTI-SCROLL) --- */}
      <div className="absolute top-0 left-0 p-6 h-[calc(100vh-48px)] grid grid-flow-col grid-rows-[repeat(auto-fill,minmax(125px,1fr))] gap-y-5 gap-x-2 z-10 max-w-full">
        {productosMenu.map((prod, index) => (
          <DesktopIcon
            key={index}
            icon={<prod.icono size={26} />}
            label={prod.nombre}
            onClick={(e) => {
              e.stopPropagation(); // Previene colisión con el cierre del menú por burbujeo
              handleSelectProduct(prod);
            }}
          />
        ))}
      </div>

      {/* Barra de Tareas Inferior del Sistema */}
      <Barra />
    </div>
  );
};

export default CobalOS;