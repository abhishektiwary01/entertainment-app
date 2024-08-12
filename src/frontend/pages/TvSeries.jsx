import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import { CiBookmarkCheck } from 'react-icons/ci'; 
import { FaRegCirclePlay } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom'; 

// Component for displaying individual TV cards
const TvSeriesCard = ({ title, description, image, year, cast, rating, duration, onBookmarkClick }) => {
  
  const navigate = useNavigate(); 

   // Function to handle the play button click
  const handlePlayClick = () => {
    navigate('/detailpage', { 
      state: { 
        movie: { 
          title, 
          description, 
          image, 
          Year: year, 
          cast, 
          rating, 
          duration 
        } 
      } 
    });
  };


  return (
    <div className="relative bg-transparent shadow-lg rounded-lg m-3 ml-4 h-44 w-60 max-w-md group">
      <img src={image} alt={title} className="w-full h-32 object-cover rounded-xl" />
      <h2 className="text-lg font-bold text-white mt-2">{title}</h2>
      <p className="text-white text-xs">{description}</p>
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
        <button 
          aria-label={`Bookmark ${title}`} 
          onClick={onBookmarkClick} 
          className='absolute top-2 right-2 p-2 rounded-full bg-gray-700 hover:bg-gray-600 focus:bg-red-500 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
          role="button"
        >
          <CiBookmarkCheck className='text-2xl text-gray-200 hover:text-gray-700 focus:text-white transition-colors' />
        </button>
        <button 
          onClick={handlePlayClick} 
          className="flex items-center justify-center space-x-2 p-2 rounded-full bg-transparent group-hover:bg-slate-200 transition-colors"
        >
          <FaRegCirclePlay className="text-2xl text-transparent group-hover:text-black transition-colors" />
          <p className="text-xs sm:text-sm text-transparent group-hover:text-black font-bold transition-colors">Play</p>
        </button>
      </div>
    </div>
  );
};

const TvSeries = () => {
  const [tvSeriesCards, setTvSeriesCards] = useState([]);

  useEffect(() => {
    axios.get('https://www.omdbapi.com/?i=tt3896198&apikey=d4a9f7e&s=tv+series')
      .then(response => {
        if (response.data.Response === "True") {
          const filteredCards = response.data.Search.filter(item => item.Poster !== "N/A")
            .map(item => ({
              title: item.Title,
              description: item.Year,
              image: item.Poster,
              year: item.Year, // Adding year
              cast: "John Doe, Jane Smith", // Placeholder cast
              rating: "8.5/10", // Placeholder rating
              duration: "2h 15m" // Placeholder duration
            }));
          setTvSeriesCards(filteredCards);
        } else {
          console.error('Error fetching data:', response.data.Error);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

 
  return (
    <div>
      <Navbar />
      <SearchBar />
      <div className="p-4 ml-10">
        <h1 className="text-2xl text-start text-white p-4 ml-16">TV Series</h1>
        <div className="flex flex-wrap justify-start ml-16">
          {tvSeriesCards.map((card, index) => (
            <TvSeriesCard
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
              year={card.year}
              cast={card.cast}
              rating={card.rating}
              duration={card.duration}
              onBookmarkClick={() => handleBookmarkClick(card.title)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default TvSeries;
