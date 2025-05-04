// AppContext.jsx
import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);

  // Add a bookmark if not already added
  const addBookmark = (movie) => {
    setBookmarks((prev) => {
      const exists = prev.find((item) => item.title === movie.title);
      return exists ? prev : [...prev, movie];
    });
  };

  // Remove a bookmark by title
  const removeBookmark = (title) => {
    setBookmarks((prev) => prev.filter((item) => item.title !== title));
  };

  return (
    <AppContext.Provider value={{ bookmarks, addBookmark, removeBookmark }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
