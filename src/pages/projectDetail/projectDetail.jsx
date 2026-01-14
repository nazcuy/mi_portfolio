import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './projectDetail.css';
import { projectsData } from '../../data/projectsData.js';

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const projectId = parseInt(id);
  
  const project = projectsData.find(p => p.id === projectId);

  const handleBack = () => {
    navigate('/');
    // Pequeño delay para asegurar que el componente cargue antes de scrollear
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
          <button className="back-button" onClick={handleBack}>← Volver al Inicio</button>
          <h1 className="project-detail-title">Proyecto no encontrado</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <div className="project-detail-container">
        
        {/* Botón de regreso */}
        <button className="back-button" onClick={handleBack}>
          ← Volver a Proyectos
        </button>

        {/* Encabezado */}
        <header className="project-header">
          <h1 className="project-detail-title">{project.title}</h1>
          <div className="tech-badges">
            {project.technologies?.map((tech, index) => (
              <span key={index} className="badge">{tech}</span>
            ))}
          </div>
        </header>

        {/* 2. Sección de Video (YouTube/Vimeo) */}
        {project.videoUrl && (
          <section className="project-video-section">
            <h2 className="detail-subtitle">Video Demostrativo</h2>
            <div className="video-wrapper">
              <iframe 
                src={project.videoUrl} 
                title="Explainer Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </section>
        )}

        {/* 3. Sección de Galería de Fotos */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="project-gallery-section">
            <h2 className="detail-subtitle">Capturas de Pantalla</h2>
            <div className="project-gallery-grid">
              {project.gallery.map((img, index) => (
                <img 
                  key={index} 
                  src={img} 
                  alt={`${project.title} screenshot ${index}`} 
                  className="gallery-image"
                />
              ))}
            </div>
          </section>
        )}

        {/* Contenido de texto principal */}
        <div className="project-detail-content">
          <section className="description-block">
            <h2 className="detail-subtitle">Descripción del Proyecto</h2>
            {project.fullDescription.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </section>

          {/* Sección de Desafío (Valor agregado) */}
          {project.challenge && (
            <section className="challenge-block">
              <h2 className="detail-subtitle">El Desafío</h2>
              <p>{project.challenge}</p>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;