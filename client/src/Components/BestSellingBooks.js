import React from 'react';
import './BestSellingBooks.css'; // CSS file for BestSellingBooks component
import { useCart } from '../Context/CartContext'; // Adjust path if needed

const books = [
  { id: 1, title: 'The Silent Patient', author: 'Alex Michaelides', price: 499, image: '/assets/book1.jpg' },
  { id: 2, title: 'Atomic Habits', author: 'James Clear', price: 399, image: '/assets/book2.jpg' },
  { id: 3, title: 'Rich Dad Poor Dad', author: 'Robert Kiyosaki', price: 350, image: '/assets/book3.jpg' },
  { id: 4, title: 'Ikigai', author: 'Francesc Miralles', price: 299, image: '/assets/book4.jpg' },
  { id: 5, title: 'Think Like a Monk', author: 'Jay Shetty', price: 449, image: '/assets/book5.jpg' },
  { id: 6, title: 'Do It Today', author: 'Darius Foroux', price: 299, image: '/assets/book6.jpg' },
  { id: 7, title: 'The Alchemist', author: 'Paulo Coelho', price: 399, image: '/assets/book7.jpg' },
  { id: 8, title: 'Deep Work', author: 'Cal Newport', price: 420, image: '/assets/book8.jpg' },
  { id: 9, title: 'The Psychology of Money', author: 'Morgan Housel', price: 360, image: '/assets/book9.jpg' },
  { id: 10, title: 'Can’t Hurt Me', author: 'David Goggins', price: 499, image: '/assets/book10.jpg' },
  { id: 11, title: 'Wings of Fire', author: 'APJ Abdul Kalam', price: 270, image: '/assets/book11.jpg' },
  { id: 12, title: 'Start With Why', author: 'Simon Sinek', price: 390, image: '/assets/book12.jpg' },
];

const BestSellingBooks = () => {
  const { addToCart } = useCart();

  return (
    <section className="best-selling-section">
      <h2 className="section-title">🔥 Best Selling Books</h2>
      <div className="book-grid">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p className="author">by {book.author}</p>
            <p className="price">₹{book.price}</p>
            <button className="add-btn" onClick={() => addToCart(book)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellingBooks;
