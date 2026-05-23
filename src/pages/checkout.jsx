import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import './checkout.css';

const Checkout = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Gastos de envío ficticios
  const shippingCost = totalPrice > 1000 ? 0 : 99;
  const finalTotal = totalPrice + shippingCost;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simular procesamiento de pago de 2 segundos
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
    }, 2000);
  };

  if (cartItems.length === 0 && !isSuccess) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '6rem 0' }}>
        <h2>Tu carrito está vacío</h2>
        <p style={{ margin: '1rem 0 2rem' }}>Añade algunos Funkos antes de proceder al pago.</p>
        <Link to="/catalogo" className="btn-secondary" style={{ padding: '1rem 2rem' }}>Ir al Catálogo</Link>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="container" style={{ padding: '6rem 0' }}>
        <div className="success-message">
          <div className="success-icon">✓</div>
          <h1 style={{ marginBottom: '1rem' }}>¡Pago Exitoso!</h1>
          <p style={{ color: 'var(--text-light)', marginBottom: '2rem' }}>
            Tu orden ha sido confirmada. Como esto es solo un portafolio, no se han realizado cargos reales. ¡Gracias por probar el flujo de compra!
          </p>
          <Link to="/" className="btn-primary" style={{ display: 'inline-block' }}>Volver al Inicio</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="container checkout-container">
        
        {/* Formulario de Simulación */}
        <form className="checkout-form" onSubmit={handleSubmit}>
          
          <h2 className="checkout-section-title">Información de Envío</h2>
          <div className="form-row">
            <div className="form-group">
              <label>Nombre</label>
              <input type="text" required placeholder="John" />
            </div>
            <div className="form-group">
              <label>Apellido</label>
              <input type="text" required placeholder="Doe" />
            </div>
          </div>
          <div className="form-group">
            <label>Dirección de Envío</label>
            <input type="text" required placeholder="Calle Falsa 123" />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Ciudad</label>
              <input type="text" required placeholder="Ciudad de México" />
            </div>
            <div className="form-group">
              <label>Código Postal</label>
              <input type="text" required placeholder="00000" />
            </div>
          </div>

          <h2 className="checkout-section-title" style={{ marginTop: '2rem' }}>Método de Pago (Simulación)</h2>
          <div className="form-group card-element">
            <label>Número de Tarjeta</label>
            <input type="text" required placeholder="4242 4242 4242 4242" maxLength="19" />
            <div className="card-icons">💳</div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Vencimiento (MM/AA)</label>
              <input type="text" required placeholder="12/25" maxLength="5" />
            </div>
            <div className="form-group">
              <label>CVC</label>
              <input type="text" required placeholder="123" maxLength="3" />
            </div>
          </div>

          <button type="submit" className="btn-pay" disabled={isProcessing}>
            {isProcessing ? 'Procesando...' : `Pagar $${finalTotal.toFixed(2)} MXN`}
          </button>
        </form>

        {/* Resumen de Compra */}
        <div className="checkout-summary">
          <h2 className="checkout-section-title">Resumen de tu Orden</h2>
          <div style={{ marginBottom: '1.5rem', maxHeight: '300px', overflowY: 'auto' }}>
            {cartItems.map(item => (
              <div key={item.id} style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px', objectFit: 'contain', background: '#f8f9fa', borderRadius: '8px' }} />
                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{item.name}</p>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.8rem' }}>Cant: {item.quantity}</p>
                </div>
                <p style={{ fontWeight: 'bold' }}>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
          
          <div className="summary-item">
            <span>Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="summary-item">
            <span>Envío {shippingCost === 0 && '(¡Gratis!)'}</span>
            <span>${shippingCost.toFixed(2)}</span>
          </div>
          
          <div className="summary-total">
            <span>Total</span>
            <span style={{ color: 'var(--primary-color)' }}>${finalTotal.toFixed(2)}</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Checkout;
