import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo">
          Funko<span>Store</span>
        </div>
        <ul className="footer-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#catalogo">Catálogo</a></li>
          <li><a href="#novedades">Novedades</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} FunkoStore - Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
