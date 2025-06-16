import React, { useContext } from 'react';
import '../../styles/user/Wishlist.css'; // Importing Wishlist CSS
import { WishlistContext } from '../../Context/WishlistContext';
import { useCart } from '../../Context/CartContext';

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  const { addToCart } = useCart();

  const moveToCart = (book) => {
    addToCart(book);
    removeFromWishlist(book.id);
  };

  return (
    <div className="wishlist-container">
      <h2>❤️ Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p className="empty-wishlist">Your wishlist is empty. Start exploring books!</p>
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
