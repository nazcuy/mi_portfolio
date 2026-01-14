import React, { useState } from "react";
import "./AboutMe.css";
import CircularText from "../circularText/circularText";
import RotatingText from "../rotatingText/RotatingText";

const timelineData = [
  {
    number: "06",
    period: "2024 - Presente",
    title: "Coordinador Técnico de Desarrollo Web",
    description: "Coordinación del rediseño integral del portal del Ministerio de Hábitat, transformándolo en plataforma de gestión de alta demanda. Integración de pasarelas de pago (ProvinciaNET) y sistemas SIDUV, coordinando equipos internos y externos para modernizar la experiencia de miles de adjudicatarios."
  },
  {
    number: "05",
    period: "2020 - 2024",
    title: "Coordinador de Distribución y Ventas - Prensa y Revistas",
    description: "Coordinación logística y análisis de datos operativos en cooperativa de distribución. Optimización de rutas de entrega, gestión de stock con distribuidoras como Grupo Clarín, y administración de cobranzas, desarrollando lógica de procesos y resolución de problemas en tiempo real."
  },
  {
    number: "04",
    period: "2015 - 2019",
    title: "Secretario General y Coordinador - Consejo Escolar",
    description: "Secretario General del Consejo Escolar de Avellaneda. Liderazgo del personal auxiliar distrital, garantizando continuidad operativa bajo estricto cumplimiento normativo. Auditoría documental, trazabilidad de decisiones y gestión de recursos reportando a presidencia."
  },
  {
    number: "03",
    period: "2014 - 2016",
    title: "Director editorial - Publicación digital",
    description: "Director editorial y product manager de publicación académica 'La BizKocha!'. Lideré concepción, desarrollo y lanzamiento oficial presentado ante intendente y rector universitario. Gestión de equipo de 8 colaboradores y establecimiento de procesos de calidad editorial."
  },
  {
    number: "02",
    period: "2007 - 2014",
    title: "Soporte Técnico Especializado y Operador de Sistemas ERP (SAP)",
    description: "Soporte técnico especializado en Multiradio S.A. combinando diagnóstico de hardware/software móvil con operación de sistemas SAP para gestión de inventarios y logística nacional. Resolución de incidencias críticas y asesoramiento técnico a clientes."
  },
  {
    number: "01",
    period: "2006 - 2007",
    title: "Jefe de equipo de ventas en Ediciones Esmeralda",
    description: "Dirección, motivación y formación de equipo de ventas. Planificación de flujos de trabajo, reclutamiento de agentes, análisis de resultados y gestión de relación con clientes para cumplimiento de metas comerciales."
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
              <span className="subtitle-name">Nicolás Azcuy</span>
              <RotatingText
                texts={["Frontend", "Backend", "Full Stack", "Apps Mobile", "Páginas Web", "Integración IoT"]}
                mainClassName="rotating-text-container"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-200%" }}
                staggerDuration={0.025}
                splitLevelClassName="rotating-text-split"
                elementLevelClassName="rotating-text-element"
                transition={{ type: "spring", damping: 40, stiffness: 300 }}
                rotationInterval={2000}
                splitBy="words"
              />
            </h2>

            <p className="circular-timeline-description">
              Cuento con experiencia en el desarrollo de aplicaciones para celulares y páginas web.
              Tengo un perfil orientado a la resolución de problemas técnicos y la implementación de soluciones digitales.
              Mi trabajo se centra en el desarrollo web y mobile, integrando también conocimientos en electrónica, soporte y sistemas conectados.
            </p>
          </div>
        </div>

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