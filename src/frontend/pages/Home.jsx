import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import { CiBookmarkCheck } from 'react-icons/ci';
import { FaRegCirclePlay } from 'react-icons/fa6';
import { useAppContext } from '../../contexts/AppContext.jsx';

// Individual Movie Card
const CardsData = ({ title, description, image, year, cast, rating, duration }) => {
  const navigate = useNavigate();
  const { bookmarks, addBookmark, removeBookmark } = useAppContext();

  const isBookmarked = bookmarks.some(bookmark => bookmark.title === title);

  const handleBookmark = () => {
    if (isBookmarked) {
      removeBookmark(title);
    } else {
      addBookmark({ title, description, image, year, cast, rating, duration });
    }
  };

  const handlePlayClick = () => {
    navigate('/detailpage', {
      state: {
        movie: { title, description, image, Year: year, cast, rating, duration }
      }
    });
  };

  return (
    <div className="bg-transparent shadow-lg rounded-lg h-40 w-60 ml-28 sm:ml-32 xl:ml-8 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 relative group overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover rounded-xl" />
      <div className="absolute bottom-0 p-2 bg-gradient-to-t from-black via-transparent to-transparent w-full text-white text-shadow-lg">
        <h2 className="text-xs sm:text-sm md:text-lg lg:text-xl font-bold">{title}</h2>
        <p className="text-xs sm:text-sm">{description}</p>
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          aria-label={`Bookmark ${title}`}
          className={`absolute top-2 right-2 p-2 rounded-full ${isBookmarked ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-700 hover:bg-gray-600'}`}
          onClick={handleBookmark}
        >
          <CiBookmarkCheck className="text-xl sm:text-2xl text-white" />
        </button>
        <button
          onClick={handlePlayClick}
          className="flex items-center justify-center space-x-2 mb-6 p-2 rounded-3xl bg-transparent group-hover:bg-slate-200 transition-colors"
        >
          <FaRegCirclePlay className="text-xl sm:text-2xl md:text-3xl text-transparent group-hover:text-black" />
          <p className="text-xs sm:text-sm md:text-base text-transparent group-hover:text-black font-bold">Play</p>
        </button>
      </div>
    </div>
  );
};

// Recommended Card
const RecommendedCard = ({ title, description, image, year, cast, rating, duration }) => {
  const navigate = useNavigate();
  const { bookmarks, addBookmark, removeBookmark } = useAppContext();

  const isBookmarked = bookmarks.some(bookmark => bookmark.title === title);

  const handleBookmark = () => {
    if (isBookmarked) {
      removeBookmark(title);
    } else {
      addBookmark({ title, description, image, year, cast, rating, duration });
    }
  };

  const handlePlayClick = () => {
    navigate('/detailpage', {
      state: {
        movie: { title, description, image, Year: year, cast, rating, duration }
      }
    });
  };

  return (
    <div className="bg-transparent shadow-lg rounded-lg ml-28 sm:ml-32 xl:ml-8 w-60 h-48 sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/5 relative group overflow-hidden">
      <img src={image} alt={title} className="w-full h-32 object-cover rounded-xl" />
      <div className="absolute inset-0 flex flex-col justify-end p-2 bg-gradient-to-t from-black via-transparent to-transparent text-white">
        <h2 className="text-xs sm:text-sm md:text-lg lg:text-xl font-bold">{title}</h2>
        <p className="text-xs sm:text-sm">{description}</p>
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          aria-label={`Bookmark ${title}`}
          className={`absolute top-2 right-2 p-2 rounded-full ${isBookmarked ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-700 hover:bg-gray-600'}`}
          onClick={handleBookmark}
        >
          <CiBookmarkCheck className="text-xl sm:text-2xl text-white" />
        </button>
        <button
          onClick={handlePlayClick}
          className="flex items-center justify-center space-x-2 p-2 rounded-3xl bg-transparent group-hover:bg-slate-200 transition-colors"
        >
          <FaRegCirclePlay className="text-xl sm:text-2xl md:text-3xl text-transparent group-hover:text-black" />
          <p className="text-xs sm:text-sm md:text-base text-transparent group-hover:text-black font-bold">Play</p>
        </button>
      </div>
    </div>
  );
};

// CardContainer to fetch and render cards
const CardContainer = () => {
  const [cardsData, setCardsData] = useState([]);
  const [recommendedCards, setRecommendedCards] = useState([]);

  useEffect(() => {
    axios.get('https://www.omdbapi.com/?i=tt3896198&apikey=d4a9f7e&s=Tv+series')
      .then(response => {
        const movies = response.data.Search || [];
        const filteredMovies = movies.filter(movie => movie.Poster !== 'N/A');

        const trendingCards = filteredMovies.slice(0, 3).map(movie => ({
          title: movie.Title,
          description: `Year: ${movie.Year}`,
          image: movie.Poster,
          year: movie.Year,
          cast: "John Doe, Jane Smith",
          rating: "8.5/10",
          duration: "2h 15m"
        }));

        const recommendedCards = filteredMovies.slice(3).map(movie => ({
          title: movie.Title,
          description: `Year: ${movie.Year}`,
          image: movie.Poster,
          year: movie.Year,
          cast: "John Doe, Jane Smith",
          rating: "8.5/10",
          duration: "2h 15m"
        }));

        setCardsData(trendingCards);
        setRecommendedCards(recommendedCards);
      })
      .catch(error => console.error('Error fetching movie data:', error));
  }, []);

  return (
    <div className="mx-auto max-w-full lg:max-w-screen-xl">
      <h1 className="text-2xl sm:text-3xl text-start text-white ml-28 sm:ml-32 xl:ml-8 p-4">Trending</h1>
      <div className="flex flex-wrap justify-start gap-8">
        {cardsData.map((card, index) => (
          <CardsData key={index} {...card} />
        ))}
      </div>
      <h1 className="text-2xl sm:text-3xl text-start text-white ml-28 sm:ml-32 xl:ml-8 p-4 mt-4">Recommended for you</h1>
      <div className="flex flex-wrap justify-start gap-4">
        {recommendedCards.map((card, index) => (
          <RecommendedCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

// Home Component
const Home = () => {
  return (
    <div>
      <SearchBar />
      <CardContainer />
      <Navbar />
    </div>
  );
};

export default Home;
