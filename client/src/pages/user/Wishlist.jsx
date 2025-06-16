// src/pages/user/Wishlist.jsx

import React from 'react';
import '../../styles/user/Wishlist.css';
import { useWishlist } from '../../Context/WishlistContext';
import { useCart } from '../../Context/CartContext';
import { useNavigate } from 'react-router-dom';

const Wishlist = () => {
  const { wishlistItems: wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const moveToCart = (book) => {
    addToCart(book);
    removeFromWishlist(book.id);
  };

  return (
    <div className="wishlist-container">
      <h2>❤️ Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <div className="empty-wishlist-box">
          <p className="empty-wishlist">🧺 Your wishlist is empty!</p>
          <p className="wishlist-suggestion">
            Browse bestsellers and add your favorites here.
          </p>
          <button className="shop-books-btn" onClick={() => navigate('/')}>
            📚 Shop Books Now
          </button>
        </div>
      ) : (
        <div className="wishlist-grid">
          {wishlist.map((book) => (
            <div className="wishlist-card" key={book.id}>
              <img src={book.image} alt={book.title} />
              <div className="wishlist-info">
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                <p>₹{book.price}</p>
                <div className="wishlist-actions">
                  <button className="move-btn" onClick={() => moveToCart(book)}>🛒 Move to Cart</button>
                  <button className="remove-btn" onClick={() => removeFromWishlist(book.id)}>❌ Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
