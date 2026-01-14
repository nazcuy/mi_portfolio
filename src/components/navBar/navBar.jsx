import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';
import logo from '../../assets/images/Nicolas-Azcuy.jpg';

function Navbar() {
  return (
    <nav id="navbar" className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <div className="navbar-logo">
            <img src={logo} alt="Logo" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className='curriculum'>
              <img width="45" height="45" src="https://img.icons8.com/wired/64/resume.png" alt="resume"/>
          </div>
        </Link>
        <ul className="navbar-menu">
          <li>
            <a href="#proyectos" className="navbar-link">Proyectos</a>
          </li>
          <li>
            <Link to="#stack" className="navbar-link">Stack Tecnológico</Link>
          </li>
          <li>
            <a href="#sobre-mi" className="navbar-link">Sobre mí</a>
          </li>

          <li>
            <a href="#contacto" className="navbar-link">Contacto</a>
          </li>
          <li>
            <Link to="https://github.com/nazcuy">
              <img className="icon-github" width="45" height="45" src="https://img.icons8.com/wired/64/FFFFFF/github.png" alt="github"/>
            </Link>
          </li>
          <li>
            <Link to="https://www.linkedin.com/in/nicolas-azcuy-prog/">
              <img className="icon-linkedin" width="45" height="45" src="https://img.icons8.com/wired/64/FFFFFF/linkedin--v1.png" alt="linkedin--v1"/>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
