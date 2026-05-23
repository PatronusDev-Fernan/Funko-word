import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="inicio">
      <div className="hero-blob"></div>
      <div className="container">
        <div className="hero-content">
          <span className="hero-tag">Nueva Colección 2026</span>
          <h1 className="hero-title">
            Encuentra tu próximo <span>Funko</span> favorito
          </h1>
          <p className="hero-description">
            Descubre las ediciones limitadas, los clásicos que todos buscan y completa esa colección de la que estás tan orgulloso.
          </p>
          <div className="hero-buttons">
            <a href="#catalogo" className="btn-primary">Ver Catálogo</a>
            <a href="#novedades" className="btn-secondary">Explorar Ofertas</a>
          </div>
        </div>
        <div className="hero-image">
          {/* Placeholder image that looks clean for hero */}
          <img 
            src="/Deadpool.jpg" 
            alt="Funko Destacado" 
            className="hero-img-element"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
