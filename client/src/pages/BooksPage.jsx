import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import SearchBar from '../Components/SearchBar';
import Footer from '../Components/Footer';
import '../styles/BooksPage.css';
import { useCart } from '../Context/CartContext'; 

const booksData = [
  {
    id: 1,
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    price: 399,
    rating: 5,
    category: 'Finance',
    language: 'English',
    image: '/assets/books/money.jpg',
  },
  {
    id: 2,
    title: 'Atomic Habits',
    author: 'James Clear',
    price: 499,
    rating: 4,
    category: 'Self-Help',
    language: 'English',
    image: '/assets/books/atomic.jpg',
  },
  {
    id: 3,
    title: 'Ikigai',
    author: 'Francesc Miralles',
    price: 299,
    rating: 4,
    category: 'Philosophy',
    language: 'English',
    image: '/assets/books/ikigai.jpg',
  },
  {
    id: 4,
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    price: 450,
    rating: 4,
    category: 'Thriller',
    language: 'English',
    image: '/assets/books/silent_patient.jpg',
    

  },
  {
    id: 5,
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki',
    price: 350,
    rating: 5,
    category: 'Finance',
  },
  {
    id:7,
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    price: 299,
    rating: 5,
    language: 'English',
    category: 'Adventure',
    image: '/assets/books/alchemist.jpg',
  },
  // Add more books...
];

const BooksPage = () => {
  const { addToCart } = useCart();
  const defaultFilter = {
    price: 1000,
    rating: 0,
    author: '',
    category: '',
    language: '',
    search: '',
  };

  const [filters, setFilters] = useState(defaultFilter);
  const [tempFilters, setTempFilters] = useState(defaultFilter);

  const uniqueAuthors = [...new Set(booksData.map((b) => b.author))];
  const uniqueCategories = [...new Set(booksData.map((b) => b.category))];
  const uniqueLanguages = [...new Set(booksData.map((b) => b.language))];

  const filteredBooks = booksData.filter((book) => {
    return (
      book.price <= filters.price &&
      book.rating >= filters.rating &&
      (filters.author === '' || book.author === filters.author) &&
      (filters.category === '' || book.category === filters.category) &&
      (filters.language === '' || book.language === filters.language) &&
      book.title.toLowerCase().includes(filters.search.toLowerCase())
    );
  });

  return (
    <>
      <Navbar />
      <SearchBar />

      <div className="books-page">
        <div className="sidebar">
          <h3>Filters</h3>

          <label>Search Book:</label>
          <input
            type="text"
            placeholder="Search by title..."
            value={tempFilters.search}
            onChange={(e) => setTempFilters({ ...tempFilters, search: e.target.value })}
          />

          <label>Max Price: ₹{tempFilters.price}</label>
          <input
            type="range"
            min="100"
            max="1000"
            value={tempFilters.price}
            onChange={(e) => setTempFilters({ ...tempFilters, price: parseInt(e.target.value) })}
          />

          <label>Minimum Rating:</label>
          <select
            value={tempFilters.rating}
            onChange={(e) => setTempFilters({ ...tempFilters, rating: parseInt(e.target.value) })}
          >
            <option value={0}>All</option>
            <option value={3}>3★ & above</option>
            <option value={4}>4★ & above</option>
            <option value={5}>5★ only</option>
          </select>

          <label>Author:</label>
          <select
            value={tempFilters.author}
            onChange={(e) => setTempFilters({ ...tempFilters, author: e.target.value })}
          >
            <option value="">All</option>
            {uniqueAuthors.map((author) => (
              <option key={author} value={author}>{author}</option>
            ))}
          </select>

          <label>Category:</label>
          <select
            value={tempFilters.category}
            onChange={(e) => setTempFilters({ ...tempFilters, category: e.target.value })}
          >
            <option value="">All</option>
            {uniqueCategories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <label>Language:</label>
          <select
            value={tempFilters.language}
            onChange={(e) => setTempFilters({ ...tempFilters, language: e.target.value })}
          >
            <option value="">All</option>
            {uniqueLanguages.map((lang) => (
              <option key={lang} value={lang}>{lang}</option>
            ))}
          </select>

          <div className="filter-buttons">
             <button className="reset-btn" onClick={() => {
              setFilters(defaultFilter);
              setTempFilters(defaultFilter);
            }}>
              Reset Filters
            </button>
            <button className="apply-btn" onClick={() => setFilters({ ...tempFilters })}>
              Apply Filters
            </button>
           
          </div>
        </div>

        <div className="book-list">
          {filteredBooks.length === 0 ? (
            <p className="no-books">No books found matching the filters.</p>
          ) : (
            filteredBooks.map((book) => (
              <div key={book.id} className="book-card">
                <img src={book.image} alt={book.title} />
                <h4>{book.title}</h4>
                <p>By {book.author}</p>
                <div className="book-meta">
                  <span className="rating">{'★'.repeat(book.rating)}</span>
                  <span className="price">₹{book.price}</span>
                </div>
                 <button onClick={() => addToCart(book)}>Add to Cart</button>
              </div>
            ))
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BooksPage;
