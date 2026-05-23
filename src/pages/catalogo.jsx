import React from 'react';
import ProductGrid from '../components/ProductGrid';
import { funkos } from '../data/funkos';

const Catalogo = () => {
  return (
    <div style={{ paddingTop: '2rem' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--text-main)' }}>Catálogo Completo</h1>
        <p style={{ color: 'var(--text-light)', fontSize: '1.2rem' }}>Explora toda nuestra colección de Funkos exclusivos y regulares.</p>
      </div>
      <ProductGrid funkos={funkos} />
    </div>
  );
};

export default Catalogo;
