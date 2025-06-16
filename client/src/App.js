import React from 'react';
import { Routes, Route } from 'react-router-dom'; // ❌ Removed BrowserRouter here
import './App.css';

// Pages
import Home from './pages/user/Home';
import About from './pages/user/About';
import ContactPage from './pages/user/ContactPage';
import BooksPage from './pages/user/BooksPage';
import Authors from './pages/user/Authors'; // Importing Authors page
import AuthPage from './pages/user/AuthPage'; // Importing Authors page
import CartPage from './pages/user/CartPage';
import Profile from './pages/user/Profile';
import Wishlist from './pages/user/Wishlist'

// Importing CartPage

// Context
import { CartProvider } from './Context/CartContext';
import { UserProvider } from './Context/UserContext';
import { WishlistProvider } from './Context/WishlistContext'; // Importing WishlistProvider

function App() {
  return (
    // ✅ Just use Routes, not BrowserRouter again
    <CartProvider>
    <UserProvider>
    <WishlistProvider> {/* Added WishlistProvider */}
      {/* Removed BrowserRouter here */}
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />    
          <Route path="/authors" element={<Authors />} />  {/* Added Authors route */} 
          <Route path="/wish" element={<Wishlist />} /> {/* Added Wishlist route */}
          <Route path="/BooksPage" element={<BooksPage />} />
          <Route path="/auth" element={<AuthPage />} /> {/* Added Auth route */}
          <Route path="*" element={<h1>404 Not Found</h1>} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </WishlistProvider>
   </UserProvider>
    </CartProvider>
  );
}

export default App;
