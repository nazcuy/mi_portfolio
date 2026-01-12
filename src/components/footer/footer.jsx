import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer id="contacto" className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Sobre Nicolás Azcuy</h3>
            <p>
              Cooperativa de Trabajadores Informáticos comprometida con la excelencia
              tecnológica y el trabajo colaborativo desde hace más de una década.
            </p>
          </div>
          <div className="footer-section">
            <h3>Información de Contacto</h3>
            <p>📞 +54 11 3076-6950</p>
            <p>✉️ nico.azcuy@gmail.com</p>
          </div>
          <div className="footer-section">
            <h3>Horario de Atención</h3>
            <p>Lunes a Viernes: 9:00 - 18:00</p>
            <p>Sábados: 9:00 - 13:00</p>
            <p>Domingos: Cerrado</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Cooperativa de Trabajadores Informáticos "Código Fidel". Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
