import React, { useState } from "react";
import "./AboutMe.css";
import CircularText from "../circularText/circularText";
import RotatingText from "../rotatingText/RotatingText";

const timelineData = [
  {
    number: "06",
    period: "2024 - Presente",
    title: "Coordinador Técnico de Desarrollo Web",
    description: "Lidero la transformación digital en el Ministerio de Hábitat (PBA), coordinando equipos de desarrollo e integrando pasarelas de pago y sistemas críticos."
  },
  {
    number: "05",
    period: "2020 - 2024",
    title: "Análisis de Datos y Operaciones",
    description: "Optimización de flujos logísticos y análisis de rendimiento en la Cooperativa Los Famosos 50, gestionando la trazabilidad de productos y comunicación digital."
  },
  {
    number: "04",
    period: "2015 - 2019",
    title: "Gestión Operativa y Compliance",
    description: "Secretario General en el Consejo Escolar. Liderazgo de grandes equipos humanos, auditoría documental y garantía de continuidad de servicios distritales."
  },
  {
    number: "03",
    period: "2014 - 2016",
    title: "Dirección Editorial y QA",
    description: "Gestión integral de la publicación 'La BizKocha!', liderando equipos de redacción y asegurando estándares de calidad y procesos de publicación."
  },
  {
    number: "02",
    period: "2007 - 2014",
    title: "Soporte Técnico TI y Sistemas ERP",
    description: "Especialista en Troubleshooting y gestión de inventarios mediante SAP en Multiradio S.A., resolviendo incidencias críticas en hardware y software."
  },
  {
    number: "01",
    period: "2006 - 2007",
    title: "Liderazgo y Gestión Comercial",
    description: "Jefe de equipo en Ediciones Esmeralda. Formación de equipos de ventas y análisis estratégico de resultados en etapas tempranas de mi carrera."
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