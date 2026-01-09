import React from 'react';
import { useNavigate } from 'react-router-dom';
import './projects.css';
import tecladoNeon from '../../assets/images/teclado-neon.jpg';

const projectsData = [
  {
    id: 1,
    title: 'Sistema de Generación Automatizada de Informes',
    description: 'Sistema de automatización gubernamental para generación masiva de informes PDF profesionales a partir de datos de Excel y Google Sheets.',
    imageUrl: tecladoNeon,
    category: 'Automatización'
  },
  {
    id: 2,
    title: 'E-commerce Cooperativa "Martín Fierro"',
    description: 'Plataforma de comercio electrónico para cooperativa tecnológica.',
    imageUrl: 'src/assets/images/ecommerce.jpg',
    category: 'Desarrollo Web'
  },
  {
    id: 3,
    title: 'Relevamiento Barrial Sanitario',
    description: 'Aplicación móvil para gestión de historias clínicas en barrios populares.',
    imageUrl: 'src/assets/images/health-app.jpg',
    category: 'Aplicación Móvil'
  },
  {
    id: 4,
    title: 'Sistema de Gestión de Farmacia',
    description: 'Sistema integral para gestión de inventario, ventas y compras farmacéuticas.',
    imageUrl: 'src/assets/images/pharmacy-system.jpg',
    category: 'Sistema de Gestión'
  },
  {
    id: 5,
    title: 'Seguridad Hogareña IoT',
    description: 'Sistema de seguridad inteligente para gestión remota del hogar.',
    imageUrl: 'src/assets/images/iot-security.jpg',
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