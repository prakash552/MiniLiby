// src/components/SearchBar.js

import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search Query:", query);
    // yahan search logic ya API call aayega future me
  };

  return (
    <div className="searchbar-container">
      <form onSubmit={handleSearch} className="searchbar-form">
        <input
          type="text"
          placeholder="Search books, authors, categories..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">🔍</button>
      </form>
    </div>
  );
}

export default SearchBar;
