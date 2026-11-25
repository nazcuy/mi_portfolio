import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

import './navBar.css';
import logo from '../../assets/images/Nicolas-Azcuy.jpg';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      id="navbar"
      className={`navbar ${menuOpen ? 'navbar-open' : ''}`}
    >
      <div className="navbar-container">

        {/* Logo y currículum */}
        <div className="navbar-brand-group">

          <Link
            to="/#presentation"
            className="navbar-brand"
            onClick={closeMenu}
            aria-label="Ir al inicio"
          >
            <div className="navbar-logo">
              <img src={logo} alt="Nicolás Azcuy" />
            </div>
          </Link>

          {/* Icono del CV: se conserva para adjuntar el PDF */}
          <div
            className="curriculum"
            title="Currículum"
          >
            <img
              width="45"
              height="45"
              src="https://img.icons8.com/wired/64/resume.png"
              alt="Currículum"
            />
          </div>

        </div>

        {/* Botón del menú hamburguesa */}
        <button
          type="button"
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          aria-controls="navbar-menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navegación */}
        <ul
          id="navbar-menu"
          className={`navbar-menu ${menuOpen ? 'is-open' : ''}`}
        >

          <li>
            <Link
              to="/#proyectos"
              className="navbar-link"
              onClick={closeMenu}
            >
              Proyectos
            </Link>
          </li>

          <li>
            <Link
              to="/#stack"
              className="navbar-link"
              onClick={closeMenu}
            >
              Stack Tecnológico
            </Link>
          </li>

          <li>
            <Link
              to="/#circular-timeline"
              className="navbar-link"
              onClick={closeMenu}
            >
              Sobre mí
            </Link>
          </li>

          <li>
            <Link
              to="/#contacto"
              className="navbar-link"
              onClick={closeMenu}
            >
              Contacto
            </Link>
          </li>

          {/* Redes sociales */}
          <li className="navbar-social">
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