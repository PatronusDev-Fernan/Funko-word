import React from 'react';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <article className="product-card">
      {product.badge && <span className="product-badge">{product.badge}</span>}
      <div className="product-image-wrapper">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="product-category">{product.category}</div>
      <h3 className="product-title">{product.name}</h3>
      <div className="product-footer">
        <span className="product-price">${product.price.toFixed(2)}</span>
        <button 
          className="btn-add" 
          aria-label="Añadir al carrito"
          onClick={() => addToCart(product)}
        >
          +
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
