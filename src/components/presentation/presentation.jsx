import React from "react";
/* import CircularText from "../circularText/circularText";
import RotatingText from "../../../src/components/rotatingText/RotatingText.jsx"; */
import "./presentation.css";

function Presentation() {
    return (
    <section id="presentation">
      <div className="presentation-container">
        {/* Rectángulo superior derecho */}
        <div className="rectangle-top-right">
          <div className="line1">DESARROLLADOR</div>
          <div className="line2">DE SOFTWARE</div>
        </div>
        
        {/* Rectángulo inferior izquierdo */}
        <div className="rectangle-bottom-left">
          <div className="line1">AZCUY</div>
          <div className="line2">NICOLÁS</div>
        </div>
        
        {/* Elementos decorativos opcionales */}
        <div className="connecting-line"></div>
        <div className="corner-dot tr"></div>
        <div className="corner-dot bl"></div>
      </div>
    </section>
  );
}

export default Presentation;

    /* return (
    <section id="presentation">
      <div className="presentation-container">
        <CircularText
          text="DESARROLLADOR DE SOFTWARE * APP WEB & MOBILE * AZCUY NICOLÁS * "
          spinDuration={20}
          onHover="speedUp"
          size={300}
          className="presentation-circular"
        />
        <div className="presentation-content">
          <h1 className="presentation-title">DESARROLLADOR DE SOFTWARE</h1>          
          <h2 className="presentation-subtitle">
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
          <p className="presentation-description">
            Cuento con experiencia en el desarrollo de aplicaciones para celulares y páginas web. 
            Tengo un perfil orientado a la resolución de problemas técnicos y la implementación de soluciones digitales. 
            Mi trabajo se centra en el desarrollo web y mobile, integrando también conocimientos en electrónica, soporte y sistemas conectados.
          </p>
        </div>
      </div>
    </section>
  ); */