import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './BookDetail.css';
import books from '../../data/booksData';
import { useCart } from '../../Context/CartContext';
import { useWishlist } from '../../Context/WishlistContext';
import RelatedBooksCarousel from './RelatedBooksCarousel';

const BookDetail = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const book = books.find((b) => b.id === bookId);

  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  const [quantity, setQuantity] = useState(1);
  const [buyNowClicked, setBuyNowClicked] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [bookId]);

  if (!book) return <h2>Book not found.</h2>;

  const handleBuyNow = () => {
    setBuyNowClicked(true);
    addToCart({ ...book, quantity });
    setTimeout(() => {
      alert('Proceeding to payment gateway...');
      setBuyNowClicked(false);
    }, 800);
  };

  return (
    <div className="book-detail-container">
      <div className="book-main">
        <img className="book-image" src={book.image} alt={book.title} />
        <div className="book-info">
          <h2>{book.title}</h2>
          <p className="author">by {book.author}</p>
          <p className="price">₹{book.price}</p>
          <p className="rating">⭐ {book.rating} / 5</p>
          <p className="description">{book.description}</p>

          <div className="quantity-section">
            <label>Qty:</label>
            <input
              type="number"
              value={quantity}
              min="1"
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
          </div>

          <div className="action-buttons">
            <button className="cart-btn" onClick={() => addToCart({ ...book, quantity })}>
              Add to Cart
            </button>
            <button className="wishlist-btn" onClick={() => addToWishlist(book)}>
              ❤️ Wishlist
            </button>
            <button className="buy-btn" onClick={handleBuyNow} disabled={buyNowClicked}>
              {buyNowClicked ? 'Processing...' : 'Buy Now'}
            </button>
          </div>
        </div>
      </div>

      <div className="review-section">
        <h3>Customer Reviews</h3>
        {book.reviews && book.reviews.length > 0 ? (
          <ul>
            {book.reviews.map((review, i) => (
              <li key={i}><strong>{review.user}:</strong> {review.comment}</li>
            ))}
          </ul>
        ) : (
          <p>No reviews yet.</p>
        )}
        <textarea placeholder="Write your review..." className="review-box"></textarea>
        <button className="submit-review-btn">Submit Review</button>
      </div>

      <RelatedBooksCarousel currentBookId={bookId} />
    </div>
  );
};

export default BookDetail;
