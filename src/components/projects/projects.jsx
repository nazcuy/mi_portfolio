import React from 'react';
import { useNavigate } from 'react-router-dom';
import './projects.css';

const projectsData = [
  {
    id: 1,
    title: 'Sistema de Generación Automatizada de Informes para Obras Públicas',
    description: 'Sistema de automatización gubernamental para generación masiva de informes PDF profesionales a partir de datos de Excel y Google Sheets. Automatización completa del proceso de generación de informes para obras públicas paralizadas, eliminando errores manuales y garantizando consistencia en el formato de salida. Mi rol: Arquitectura, desarrollo completo e implementación.'
  },
  {
    id: 2,
    title: 'E-commerce para Cooperativa Tecnológica "Martín Fierro" (en desarrollo)',
    description: 'Plataforma de comercio electrónico para cooperativa tecnológica.'
  },
  {
    id: 3,
    title: 'Sistema de Relevamiento Barrial Sanitario',
    description: 'Aplicación para celulares que permite gestionar la carga de historias clínicas de los barrios populares.'
  },
  {
    id: 4,
    title: 'Sistema de gestión de Farmacia',
    description: 'Sistema de gestión de farmacia que permite la gestión de inventario, ventas y compras.'
  },
  {
    id: 5,
    title: 'Proyecto de seguridad hogareña IoT',
    description: 'Proyecto de seguridad hogareña IoT que permite la gestión de la seguridad de la casa.'
  },
  {
    id: 6,
    title: 'Dashboard de Análisis de Datos',
    description: 'Herramienta de business intelligence con visualizaciones interactivas para la toma de decisiones empresariales.'
  }
];

function Projects() {
  const navigate = useNavigate();

  const handleProjectClick = (id) => {
    navigate(`/project/${id}`);
  };

  return (
    <section id="proyectos" className="section projects">
      <div className="projects-container">
        <h2 className="section-title">Nuestros Proyectos</h2>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="project-image">💻</div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <span className="project-button">Ver Detalles →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
