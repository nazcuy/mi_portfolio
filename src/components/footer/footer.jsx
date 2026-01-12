import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="footer">
      <div className="footer-container">
        
        {/* Sección principal */}
        <div className="footer-content">
          
          {/* Columna 1: Información personal */}
          <div className="footer-section">
            <h3>Nicolás Azcuy</h3>
            <p className="footer-description">
              Desarrollador de Software especializado en aplicaciones web y mobile. 
              Apasionado por crear soluciones tecnológicas innovadoras y eficientes.
            </p>
            <div className="footer-location">
              <FaMapMarkerAlt className="footer-icon" />
              <span>Avellaneda, Buenos Aires, Argentina</span>
            </div>
          </div>

          {/* Columna 2: Contacto directo */}
          <div className="footer-section">
            <h3>Contacto</h3>
            <div className="contact-item">
              <FaEnvelope className="footer-icon" />
              <a href="mailto:nico.azcuy@gmail.com" className="contact-link">
                nico.azcuy@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <FaPhone className="footer-icon" />
              <a href="tel:+541130766950" className="contact-link">
                +54 11 3076-6950
              </a>
            </div>
            <div className="footer-social">
              <h4>Conectemos</h4>
              <div className="social-icons">
                <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaGithub />
                </a>
                <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>

          {/* Columna 3: Enlaces rápidos */}
          <div className="footer-section">
            <h3>Enlaces Rápidos</h3>
            <ul className="footer-links">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#proyectos">Proyectos</a></li>
              <li><a href="#habilidades">Habilidades</a></li>
              <li><a href="#experiencia">Experiencia</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

        </div>

        {/* Línea divisoria */}
        <div className="footer-divider"></div>

        {/* Copyright y enlaces legales */}
        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Nicolás Azcuy. Todos los derechos reservados.
          </p>
          <div className="footer-legal">
            <a href="#privacidad" className="legal-link">Política de Privacidad</a>
            <span className="separator">•</span>
            <a href="#terminos" className="legal-link">Términos de Uso</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
