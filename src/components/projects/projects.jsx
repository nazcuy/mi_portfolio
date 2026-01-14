import React from 'react';
import { useNavigate } from 'react-router-dom';
import './projects.css';
import { projectsData } from '../../data/projectsData.js';

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