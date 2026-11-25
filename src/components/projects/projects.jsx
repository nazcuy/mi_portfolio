import React from 'react';
import { Link } from 'react-router-dom';
import './projects.css';
import { projectsData } from '../../data/projectsData.js';

function Projects() {
  return (
    <section id="proyectos" className="section projects">
      <div className="projects-container">

        <h2 className="section-title">Mis Proyectos</h2>

        <div className="projects-grid">

          {projectsData.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="project-card"
            >

              <div className="project-image-container">

                <img
                  src={project.imageUrl}
                  alt={`Imagen representativa de ${project.title}`}
                  className="project-image"
                  loading="lazy"
                  decoding="async"
                />

                <div className="project-overlay"></div>

              </div>

              <div className="project-content">

                <div className="project-indicator">
                  {project.category}
                </div>

                <h3 className="project-title">
                  {project.title}
                </h3>

                <p className="project-description">
                  {project.description}
                </p>

              </div>

            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;