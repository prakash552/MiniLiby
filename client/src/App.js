import React from 'react';
import { Routes, Route } from 'react-router-dom'; // ❌ Removed BrowserRouter here
import './App.css';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import ContactPage from './pages/ContactPage';
import BooksPage from './pages/BooksPage';
import Authors from './pages/Authors'; // Importing Authors page
import AuthPage from './pages/AuthPage'; // Importing Authors page
import CartPage from './pages/CartPage';

// Context
import { CartProvider } from './Context/CartContext';

function App() {
  return (
    // ✅ Just use Routes, not BrowserRouter again
    <CartProvider>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />    
          <Route path="/authors" element={<Authors />} /> {/* Added Authors route */} 
          <Route path="/BooksPage" element={<BooksPage />} />
          <Route path="/auth" element={<AuthPage />} /> {/* Added Auth route */}
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
