import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const { totalItems, toggleCart } = useCart();

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-logo">
          Funko<span>Store</span>
        </Link>
        <ul className="navbar-links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/catalogo">Catálogo</Link></li>
          <li><Link to="/novedades">Novedades</Link></li>
        </ul>
        <button className="btn-cart" onClick={toggleCart}>
            Carrito ({totalItems})
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
