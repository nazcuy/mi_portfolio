import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';

import logo from '../../assets/images/Nicolas-Azcuy.jpg';

function Navbar() {
  return (
    <nav id="navbar" className="navbar">
      <div className="navbar-container">

        <Link to="/#presentation" className="navbar-brand">

          <div className="navbar-logo">
            <img
              src={logo}
              alt="Nicolás Azcuy"
              style={{ width: '100%', height: '100%' }}
            />
          </div>

          {/* Icono del currículum: se conserva para vincular el PDF */}
          <div className="curriculum">
            <img
              width="45"
              height="45"
              src="https://img.icons8.com/wired/64/resume.png"
              alt="Currículum"
            />
          </div>

        </Link>

        <ul className="navbar-menu">

          <li>
            <Link to="/#proyectos" className="navbar-link">
              Proyectos
            </Link>
          </li>

          <li>
            <Link to="/#stack" className="navbar-link">
              Stack Tecnológico
            </Link>
          </li>

          <li>
            <Link to="/#circular-timeline" className="navbar-link">
              Sobre mí
            </Link>
          </li>

          <li>
            <Link to="/#contacto" className="navbar-link">
              Contacto
            </Link>
          </li>

          <li>
            <a
              href="https://github.com/nazcuy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Nicolás Azcuy"
            >
              <img
                className="icon-github"
                width="45"
                height="45"
                src="https://img.icons8.com/wired/64/FFFFFF/github.png"
                alt=""
              />
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/nicolas-azcuy-prog/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Nicolás Azcuy"
            >
              <img
                className="icon-linkedin"
                width="45"
                height="45"
                src="https://img.icons8.com/wired/64/FFFFFF/linkedin--v1.png"
                alt=""
              />
            </a>
          </li>

        </ul>

      </div>
    </nav>
  );
}

export default Navbar;