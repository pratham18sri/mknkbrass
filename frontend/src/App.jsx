import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Homepage from './pages/Homepage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Retailer from './pages/Retailer';
import { ToastProvider } from './context/ToastContext';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <Router>
      <ToastProvider>
        <CartProvider>
          <div className="flex flex-col min-h-screen font-sans bg-brand-cream text-brand-dark">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/shop-retail" element={<Retailer />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </CartProvider>
      </ToastProvider>
    </Router>
  );
}

export default App;
