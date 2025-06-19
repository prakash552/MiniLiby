import React, { useState } from 'react';
import Navbar from '../../Components/user/Navbar';
import SearchBar from '../../Components/user/SearchBar';
import Footer from '../../Components/user/Footer';
import '../../styles/user/BooksPage.css';
import { useCart } from '../../Context/CartContext'; 
import { useWishlist } from '../../Context/WishlistContext'; // ✅ Added
import { Link } from 'react-router-dom';
import books from '../../data/books';

const booksData = books; // Assuming books is an array of book objects
// If books is imported from a file, ensure it is an array of book objects
// If books is an array of objects, you can directly use it as shown above

const BooksPage = () => {
  const { addToCart } = useCart();
  const { wishlistItems: wishlist, addToWishlist } = useWishlist(); // ✅ fixed

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
              <option value="pramchand">M.c Prem Chandra</option>
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
            <option value="Self-Help">Self- Helf</option>
            <option value="Finance">Finance</option>
            <option value="Philosophy">Philosophy</option>
            <option value="Adventure">Adventure</option>
            <option value="Thriller">Thriller</option>
            <option value="Science">Science</option>
            <option value="Fiction">Fiction</option>
            <option value="History">History</option>
            <option value="Biography">Biography</option>
            <option value="Technology">Technology</option>
            <option value="Health">Health</option>
            <option value="Cooking">Cooking</option>
            <option value="Travel">Travel</option>
            <option value="Children">Children</option>
            <option value="Comics">Comics</option>
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
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Marathi">Marathi</option>
            <option value="Gujarati">Gujarati</option>
            <option value="Bengali">Bengali</option>
            <option value="Tamil">Tamil</option>    
            <option value="Telugu">Telugu</option>
            <option value="Kannada">Kannada</option>
            <option value="Malayalam">Malayalam</option>
            <option value="Punjabi">Punjabi</option>
            <option value="Urdu">Urdu</option>
            <option value="Assamese">Assamese</option>
            <option value="Konkani">Konkani</option>    
            <option value="Sanskrit">Sanskrit</option>
            <option value="Marwari">Marwari</option>
            <option value="Maithili">Maithili</option>
           
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
            filteredBooks.map((book) => {
              const isInWishlist = wishlist.some(item => item.id === book.id);

              return (
                <div key={book.id} className="book-card">
                  <Link to={`/book/${book.id}`} className="book-link">
                  <img src={book.image} alt={book.title} />
                  <h4>{book.title}</h4>
                  <p>By {book.author}</p>
                  <p className="book-description">{book.description}</p>
                
                 
                  <div className="book-meta">
                    <span className="rating">{'★'.repeat(book.rating)}</span>
                    <span className="price">₹{book.price}</span>
                  </div>
                   </Link>
                  <div className="book-actions">
                    <button onClick={() => addToCart(book)}>Add to Cart</button>
                    <button
                      className="wishlist-btn"
                      onClick={() => !isInWishlist && addToWishlist(book)}
                      disabled={isInWishlist}
                    >
                      {isInWishlist ? "❤️ In Wishlist" : "❤️ Wishlist"}
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BooksPage;
