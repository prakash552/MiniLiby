import React, { createContext, useState } from 'react';

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (book) => {
    if (!wishlist.some(item => item.id === book.id)) {
      setWishlist([...wishlist, book]);
    }
  };

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter(book => book.id !== id));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
