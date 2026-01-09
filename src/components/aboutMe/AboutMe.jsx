import React, { useState } from "react";
import "./AboutMe.css";
import CircularText from "../circularText/circularText";
import RotatingText from "../rotatingText/RotatingText";

// Datos para la línea de tiempo
const timelineData = [
  {
    number: "13",
    period: "2023 - Presente",
    title: "Desarrollador Full Stack Freelance",
    description: "Desarrollo de aplicaciones web y móviles para clientes en diversos sectores."
  },
  {
    number: "12", 
    period: "2022 - 2023",
    title: "Sistema de Generación Automatizada de Informes",
    description: "Arquitectura y desarrollo completo de sistema gubernamental."
  },
  {
    number: "11",
    period: "2021 - 2022", 
    title: "Proyectos de Integración IoT",
    description: "Desarrollo de sistemas de seguridad y automatización hogareña."
  },
  {
    number: "10",
    period: "2020 - 2021",
    title: "Sistemas de Gestión Empresarial", 
    description: "Creación de dashboards y herramientas de business intelligence."
  },
  {
    number: "09",
    period: "2019 - 2020",
    title: "Primeros Proyectos Profesionales",
    description: "Desarrollo de aplicaciones móviles y páginas web."
  }
];

function CircularTimeline() {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    setActiveItem(activeItem === index ? null : index);
  };

  return (
    <section id="circular-timeline">
      <div className="circular-timeline-container">
        {/* Columna izquierda - CircularText + Contenido */}
        <div className="circular-timeline-left">
          <div className="circular-timeline-circular-container">
            <CircularText
              text="DESARROLLADOR DE SOFTWARE * APP WEB & MOBILE * AZCUY NICOLÁS * "
              spinDuration={20}
              onHover="speedUp"
              size={300}
              className="circular-timeline-circular"
            />
          </div>
          
          <div className="circular-timeline-content">
            <h1 className="circular-timeline-title">DESARROLLADOR DE SOFTWARE</h1>
            
            <h2 className="circular-timeline-subtitle">
              <span style={{ fontWeight: 700, marginRight: '0.75rem' }}>Nicolás Azcuy</span>
              <RotatingText
                texts={["Frontend", "Backend", "Full Stack", "Apps Mobile", "Páginas Web", "Integración IoT"]}
                mainClassName="rotating-pill"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </h2>
            
            <p className="circular-timeline-description">
              Cuento con experiencia en el desarrollo de aplicaciones para celulares y páginas web. 
              Tengo un perfil orientado a la resolución de problemas técnicos y la implementación de soluciones digitales. 
              Mi trabajo se centra en el desarrollo web y mobile, integrando también conocimientos en electrónica, soporte y sistemas conectados.
            </p>
          </div>
        </div>

        {/* Columna derecha - Línea de tiempo */}
        <div className="timeline-section">
          <h2 className="timeline-title">Trayectoria & Experiencia</h2>
          
          <div className="timeline-grid">
            {timelineData.map((item, index) => (
              <div 
                key={item.number}
                className={`timeline-item ${activeItem === index ? 'active' : ''}`}
                onClick={() => handleItemClick(index)}
              >
                <div className="timeline-content">
                  <div className="timeline-number">{item.number}</div>
                  <div className="timeline-text">
                    <span className="timeline-period">{item.period}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CircularTimeline;