import paga from '../../src/assets/images/ivba.png';
import pba from '../../src/assets/images/min-hab.png';
import tecladoNeon from '../../src/assets/images/teclado-neon.jpg';
import coop from '../../src/assets/images/coop-pnt-fondo.png';
import circuit from '../../src/assets/images/fondo-de-placa-de-circuito.jpg';
import dashboard from '../../src/assets/images/dashboard.png';
import QRconnection from '../../src/assets/images/QRconnection.png';
import connectionOk from '../../src/assets/images/connectionOk.png';
import encuestaEnviadaFront from '../../src/assets/images/encuestaEnviadaFront.png';

const projectsData = [
  {
    id: 1,
    title: 'Portal de Autogestión de Pagos',
    description: 'Solución web para la digitalización de cobros del Instituto de la Vivienda. Implementa un motor de búsqueda por DNI/ID, generación dinámica de comprobantes de pagodescarga de boletas electrónicas e integración con pasarela de pago online Provincia-NET.',
    imageUrl: paga,
    category: 'Desarrollo Web',
    fullDescription: 'Este sistema fue diseñado para...', 
    videoUrl: "https://www.youtube.com/embed/TU_ID", 
    gallery: [paga, pba], 
    technologies: ["React", "Node.js", "MySQL"],
  },
  {
    id: 2,
    title: 'Generador Automatizado de Informes Gubernamentales',
    description: 'Solución escalable diseñada para el Gobierno de la PBA que automatiza la creación masiva de reportes PDF profesionales. Integra flujos de datos desde Excel y Google Sheets, optimizando tiempos de procesamiento y garantizando la consistencia institucional.',
    imageUrl: pba,
    category: 'Automatización',
    fullDescription: 'Este sistema fue diseñado para...', 
    videoUrl: "https://www.youtube.com/embed/TU_ID", 
    gallery: [paga, pba], 
    technologies: ["React", "Node.js", "MySQL"],
  },
  {
    id: 3,
    title: 'Plataforma E-commerce "Martín Fierro"',
    description: 'Desarrollo de comercio electrónico diseñada para potenciar las ventas de la Cooperativa Tecnológica Martín Fierro. Incluye gestión dinámica de productos, pasarela de pagos y una experiencia de usuario optimizada para el sector IT.',
    imageUrl: coop,
    category: 'Desarrollo Web',
    fullDescription: 'Este sistema fue diseñado para...', 
    videoUrl: "https://www.youtube.com/embed/TU_ID", 
    gallery: [paga, pba], 
    technologies: ["React", "Node.js", "MySQL"],
  },
  {
    id: 4,
    title: 'App Móvil de Salud Comunitaria',
    description: 'Aplicación de recolección de datos clínicos con soporte offline para barrios populares. Permite la digitalización de fichas médicas y sincronización centralizada de registros sanitarios.',
    imageUrl: tecladoNeon,
    category: 'Aplicación Móvil',
    fullDescription: 'Este sistema fue diseñado para...', 
    videoUrl: "https://www.youtube.com/embed/TU_ID", 
    gallery: [paga, pba], 
    technologies: ["React", "Node.js", "MySQL"],
  },
  {
    id: 5,
    title: 'PollSender - Sistema de Encuestas Masivas',
    description: 'Automatiza el envío de encuestas a múltiples grupos de app de mensajería simultáneamente.',
    imageUrl: dashboard,
    category: 'Aplicación de escritorio',
    fullDescription: 'PollSender es una solución robusta Full-Stack diseñada para transformar la comunicación unidireccional en una herramienta de gestión de datos y toma de decisiones en tiempo real. Aunque es versátil para diversos sectores, su arquitectura está optimizada para entornos de Seguridad e Higiene (SySO) y Recursos Humanos, donde la verificación de la formación y el cumplimiento de normas es crítica. La aplicación permite a técnicos y coordinadores desplegar encuestas dinámicas a múltiples grupos operativos de forma simultánea, eliminando la carga administrativa del envío manual y centralizando el monitoreo del proceso mediante WebSockets para una trazabilidad total.', 
    videoUrl: "https://www.youtube.com/embed/nxRt_iXuXkc", 
    gallery: [dashboard, QRconnection, connectionOk, encuestaEnviadaFront], 
    technologies: ["React", "Node.js", "Express.js", "Socket.IO", "Puppeteer"],
  },
  {
    id: 6,
    title: 'Seguridad Hogareña IoT',
    description: 'Sistema de seguridad inteligente para gestión remota del hogar.',
    imageUrl: circuit,
    category: 'IoT',
    fullDescription: 'Este sistema fue diseñado para...', 
    videoUrl: "https://www.youtube.com/embed/TU_ID", 
    gallery: [paga, pba], 
    technologies: ["React", "Node.js", "MySQL"],
  },
];

export { projectsData };