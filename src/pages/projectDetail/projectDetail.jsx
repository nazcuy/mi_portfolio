import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './projectDetail.css';

const projectsData = [
  {
    id: 1,
    title: 'Sistema de Gestión Cooperativa',
    fullDescription: `Este sistema de gestión fue desarrollado específicamente para las necesidades únicas de las cooperativas. Incluye módulos para la administración completa de socios, gestión financiera con contabilidad integrada, control de patrimonio y recursos, así como herramientas de comunicación interna.

El sistema cuenta con una interfaz moderna e intuitiva que facilita el trabajo diario de los administradores y directivos. Además, incluye reportes automatizados, gráficos de rendimiento y alertas configurables que ayudan en la toma de decisiones estratégicas.

La plataforma está desarrollada utilizando tecnologías modernas como React para el frontend y Node.js para el backend, garantizando un rendimiento óptimo y una experiencia de usuario fluida.`
  },
  {
    id: 2,
    title: 'E-commerce para Pequeños Comercios',
    fullDescription: `Nuestra solución de comercio electrónico está diseñada pensando en los pequeños comerciantes que desean llevar su negocio al mundo digital sin complicaciones técnicas. La plataforma incluye gestión completa de productos, categorías y inventarios en tiempo real.

El sistema integra múltiples pasarelas de pago locales e internacionales, permitiendo a los comerciantes ofrecer diversas opciones a sus clientes. También incluye herramientas de marketing como cupones de descuento, ofertas por tiempo limitado y programa de fidelización.

La integración con servicios de logística permite el seguimiento de envíos y la generación automática de etiquetas de transporte. Todo esto accesible desde cualquier dispositivo, ya sea computadora, tablet o teléfono móvil.`
  },
  {
    id: 3,
    title: 'App de Seguimiento de Proyectos',
    fullDescription: `Esta aplicación web está orientada a equipos de desarrollo de software que necesitan organizar su trabajo de manera eficiente. Incorpora metodologías ágiles como Scrum y Kanban, permitiendo gestionar sprints, tableros de tareas y métricas de rendimiento.

Los equipos pueden colaborar en tiempo real, asignar tareas, establecer prioridades y hacer seguimiento del progreso del proyecto. La comunicación se facilita mediante comentarios, archivos adjuntos y notificaciones automáticas.

La integración con herramientas de desarrollo populares como GitHub, GitLab y Jira permite una experiencia de trabajo fluida. Los reportes de productividad ayudan a los gerentes de proyecto a identificar cuellos de botella y optimizar procesos.`
  },
  {
    id: 4,
    title: 'Portal de Empleos Cooperativo',
    fullDescription: `Esta plataforma nace con el objetivo de promover la economía solidaria conectando trabajadores con cooperativas de todo el país. El portal permite a los buscadores de empleo crear perfiles profesionales, postular a ofertas laborales y recibir recomendaciones personalizadas.

Las cooperativas pueden publicar vacante, revisar postulaciones y gestionar todo el proceso de selección desde una interfaz centralizada. El sistema incluye verificación de credenciales y recomendaciones basadas en habilidades.

Fomentamos valores cooperativos destacando los principios de trabajo digno, condiciones justas y desarrollo comunitario. Los usuarios pueden explorar cooperativas por sector, ubicación y valores organizacionales.`
  },
  {
    id: 5,
    title: 'Sistema de Facturación Electrónica',
    fullDescription: `Desarrollamos una solución completa de facturación electrónica que cumple con todas las normativas fiscales vigentes. El sistema permite generar, enviar y archivar comprobantes electrónicos de manera segura y eficiente.

La integración con los sistemas de la administración tributaria permite la validación en tiempo real de los comprobantes y la gestión automática de la información para las declaraciones impositivas. Soportamos múltiples tipos de comprobantes: facturas, notas de crédito, notas de débito y recibos.

El sistema incluye gestión de clientes y productos, generación automática de reportes impositivos, y exportación de datos para sistemas contables externos. La seguridad está garantizada mediante encriptación y firmas digitales avanzadas.`
  },
  {
    id: 6,
    title: 'Dashboard de Análisis de Datos',
    fullDescription: `Esta herramienta de business intelligence permite a las empresas transformar datos brutos en información valiosa para la toma de decisiones. El dashboard conecta con múltiples fuentes de datos, incluyendo bases de datos SQL, APIs externas y archivos de hojas de cálculo.

Los usuarios pueden crear visualizaciones interactivas como gráficos de barras, líneas, tartas, mapas de calor y tablas dinámicas. La funcionalidad de arrastrar y soltar facilita la creación de informes personalizados sin necesidad de conocimientos técnicos.

Incluimos capacidades de inteligencia artificial que permiten identificar patrones, tendencias y anomalías en los datos automáticamente. Los informes pueden programarse para envío automático y compartirse con diferentes niveles de acceso según el rol del usuario.`
  }
];

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const projectId = parseInt(id);
  
  const project = projectsData.find(p => p.id === projectId);

  const handleBack = () => {
    navigate('/');
    setTimeout(() => {
      const projectsSection = document.getElementById('proyectos');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  if (!project) {
    return (
      <div className="project-detail">
        <div className="project-detail-container">
          <button className="back-button" onClick={handleBack}>
            ← Volver al Inicio
          </button>
          <h1 className="project-detail-title">Proyecto no encontrado</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <div className="project-detail-container">
        <button className="back-button" onClick={handleBack}>
          ← Volver a Proyectos
        </button>
        <div className="project-detail-header">
          <h1 className="project-detail-title">{project.title}</h1>
        </div>
        <div className="project-detail-image">💻</div>
        <div className="project-detail-content">
          {project.fullDescription.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
