import React from 'react';
import ProductGrid from '../components/ProductGrid';
import { funkos } from '../data/funkos';

const Novedades = () => {
  // Filtramos la base de datos para mostrar solo los que tienen el badge 'Nuevo'
  const funkosNuevos = funkos.filter(funko => funko.badge === 'Nuevo');
  const funkosExclusivos = funkos.filter(funko => funko.badge === 'Exclusivo');

  return (
    <div style={{ paddingTop: '2rem' }}>
      
      <div className="container" style={{ textAlign: 'center', marginBottom: '2px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--text-main)' }}>Novedades del Mes</h1>
        <p style={{ color: 'var(--text-light)', fontSize: '1.2rem' }}>
          Descubre los últimos Funkos que acaban de llegar a nuestra tienda. ¡No te los pierdas!
        </p>
      </div>

      {/* Reutilizamos el ProductGrid, pero solo le pasamos los Funkos Nuevos */}
      <ProductGrid funkos={funkosNuevos} />
      <div className="container" style={{ textAlign: 'center', marginBottom: '2px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--text-main)' }}>Exclusivos del Mes</h1>
        <p style={{ color: 'var(--text-light)', fontSize: '1.2rem' }}>
          Descubre los últimos Funkos que son exclusivos de nuestra tienda. ¡No te los pierdas!
        </p>
      </div>
      <ProductGrid funkos={funkosExclusivos} />
    </div>
  );
};

export default Novedades;
