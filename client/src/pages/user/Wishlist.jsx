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
          <img src="/assets/empty.png" alt="Empty Wishlist" loading="lazy" />
          <p className="empty-wishlist">🧺 Your wishlist is empty!</p>
          <p className="wishlist-suggestion">
            Browse bestsellers and add your favorites here.
          </p>
          <button
            className="shop-books-btn"
            onClick={() => navigate('/')}
          >
            📚 Shop Books Now
          </button>
        </div>
      ) : (
        <div className="wishlist-grid">
          {wishlist.map((book) => {
            const discount = Math.floor(Math.random() * 21) + 10; // 10% to 30%
            const originalPrice = Math.floor(book.price * (100 + discount) / 100);

            return (
              <div className="wishlist-card" key={book.id}>
                <img
                  src={book.image}
                  alt={book.title}
                  className="wishlist-img"
                  loading="lazy"
                />

                <div className="wishlist-info">
                  <span className="wishlist-badge">🔥 {discount}% OFF</span>
                  <h3 title={book.title}>{book.title}</h3>
                  <p>{book.author}</p>

                  <div className="price-section">
                    <span className="discounted-price">₹{book.price}</span>
                    <span className="original-price">₹{originalPrice}</span>
                  </div>

                  <p className="stock-status">📦 In Stock</p>
                  <div className="rating-stars">⭐️⭐️⭐️⭐️☆</div>

                  <div className="wishlist-actions">
                    <button
                      className="move-btn"
                      onClick={() => moveToCart(book)}
                      title="Move this book to cart"
                    >
                      🛒 Move to Cart
                    </button>
                    <button
                      className="remove-btn"
                      onClick={() => removeFromWishlist(book.id)}
                      title="Remove this book from wishlist"
                    >
                      ❌ Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Wishlist;

