import React from 'react';
import ProductCard from './ProductCard';
import './ProductGrid.css';

const ProductGrid = ({ funkos, title, subtitle }) => {
  return (
    <section className="product-grid-section">
      <div className="container">
        {(title || subtitle) && (
          <div className="section-header">
            {title && <h2 className="section-title">{title}</h2>}
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </div>
        )}
        <div className="grid-container">
          {funkos.map((funko) => (
            <ProductCard key={funko.id} product={funko} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
