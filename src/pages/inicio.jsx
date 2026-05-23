import React from 'react';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import { funkos } from '../data/funkos';

const Inicio = () => {
  return (
    <>
      <Hero />
      <ProductGrid 
        title="Colección Destacada"
        subtitle="Los Funkos más buscados y exclusivos en un solo lugar."
        funkos={funkos.slice(0, 4)} 
      />
    </>
  );
};

export default Inicio;
