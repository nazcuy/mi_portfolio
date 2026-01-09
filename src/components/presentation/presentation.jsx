import React from "react";
import "./presentation.css";

function Presentation() {
  return (
    <section id="presentation">
      <div className="presentation-container">
        {/* Rectángulo superior derecho - Texto en UNA línea */}
        <div className="rectangle-top-right">
          <div className="single-line">
            <span className="bold-text">DESARROLLADOR</span>
            <span className="normal-text"> DE SOFTWARE</span>
          </div>
        </div>
        
        {/* Rectángulo inferior izquierdo - Texto en UNA línea */}
        <div className="rectangle-bottom-left">
          <div className="single-line">
            <span className="bold-text">AZCUY</span>
            <span className="normal-text"> NICOLÁS</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Presentation;