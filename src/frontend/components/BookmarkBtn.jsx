// BookmarkButton.js
import React, { useState } from 'react';
import { CiBookmarkCheck } from 'react-icons/ci';

const BookmarkButton = ({ isBookmarked, onClick }) => {
  const [bookmarked, setBookmarked] = useState(isBookmarked);

  const handleClick = () => {
    setBookmarked(!bookmarked);
    if (onClick) {
      onClick(!bookmarked);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors ${
        bookmarked ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
      } hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500`}
      aria-label={bookmarked ? 'Unbookmark' : 'Bookmark'}
    >
      <CiBookmarkCheck className="text-2xl" />
    </button>
  );
};

export default BookmarkButton;
