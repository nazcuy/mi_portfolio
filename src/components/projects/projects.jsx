import React from 'react';
import { useNavigate } from 'react-router-dom';
import './projects.css';
import paga from '../../assets/images/ivba.png';
import pba from '../../assets/images/min-hab.png';
import tecladoNeon from '../../assets/images/teclado-neon.jpg';
import coop from '../../assets/images/coop-pnt-fondo.png';
import circuit from '../../assets/images/fondo-de-placa-de-circuito.jpg';

const projectsData = [
  {
    id: 1,
    title: 'Portal de Autogestión de Pagos',
    description: 'Solución web para la digitalización de cobros del Instituto de la Vivienda. Implementa un motor de búsqueda por DNI/ID, generación dinámica de comprobantes de pagodescarga de boletas electrónicas e integración con pasarela de pago online Provincia-NET.',
    imageUrl: paga,
    category: 'Desarrollo Web'
  },
  {
    id: 2,
    title: 'Generador Automatizado de Informes Gubernamentales',
    description: 'Solución escalable diseñada para el Gobierno de la PBA que automatiza la creación masiva de reportes PDF profesionales. Integra flujos de datos desde Excel y Google Sheets, optimizando tiempos de procesamiento y garantizando la consistencia institucional.',
    imageUrl: pba,
    category: 'Automatización'
  },
  {
    id: 3,
    title: 'Plataforma E-commerce "Martín Fierro"',
    description: 'Desarrollo de comercio electrónico diseñada para potenciar las ventas de la Cooperativa Tecnológica Martín Fierro. Incluye gestión dinámica de productos, pasarela de pagos y una experiencia de usuario optimizada para el sector IT.',
    imageUrl: coop,
    category: 'Desarrollo Web'
  },
  {
    id: 4,
    title: 'App Móvil de Salud Comunitaria',
    description: 'Aplicación de recolección de datos clínicos con soporte offline para barrios populares. Permite la digitalización de fichas médicas y sincronización centralizada de registros sanitarios.',
    imageUrl: tecladoNeon,
    category: 'Aplicación Móvil'
  },
  {
    id: 5,
    title: 'Seguridad Hogareña IoT',
    description: 'Sistema de seguridad inteligente para gestión remota del hogar.',
    imageUrl: circuit,
    category: 'IoT'
  },
];

function Projects() {
  const navigate = useNavigate();

  const handleProjectClick = (id) => {
    navigate(`/project/${id}`);
  };

  return (
    <section id="proyectos" className="section projects">
      <div className="projects-container">
        <h2 className="section-title">Mis Proyectos</h2>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="project-image-container">
                <div 
                  className="project-image"
                  style={{ backgroundImage: `url(${project.imageUrl})` }}
                  alt={project.title}
                />
                <div className="project-overlay"></div>
              </div>
              
              <div className="project-content">
                <div className="project-indicator">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;