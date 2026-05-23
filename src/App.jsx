import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Inicio from './pages/inicio';
import Catalogo from './pages/catalogo';
import Novedades from './pages/novedades';
import Checkout from './pages/checkout';

function App() {
  return (
    <div className="app">
      <Navbar />
      <CartDrawer />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/novedades" element={<Novedades />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
