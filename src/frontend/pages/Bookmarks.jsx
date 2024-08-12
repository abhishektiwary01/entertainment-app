import React from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';

const Bookmarkmovie = ({ title, description, image }) => (
  <div className="bg-transparent shadow-lg rounded-lg p-4 w-60 sm:w-1/3 md:w-1/3 lg:w-1/4">
    <img src={image} alt={title} className="w-60 h-32 object-cover rounded-lg" />
    <div className="mt-2">
      <h2 className="text-xl font-bold text-white">{title}</h2>
      <p className="text-white text-xs mb-2">{description}</p>
    </div>
  </div>
);



const Bookmarks = () => {
  const Bookmarkmovies = [
    { title: 'The Great Lands', description: '2019 Movie', image: 'https://www.hdwallpaper.nu/wp-content/uploads/2015/09/479488215.jpg' },
    { title: 'Simpsons', description: '2012 Movie', image: 'https://sm.ign.com/t/ign_latam/screenshot/t/the-simpso/the-simpsons-1989_tpgf.1080.jpg' },
    { title: 'Oppenhiemer', description: '2023 Movie', image: 'https://i.ytimg.com/vi/COZ77BsWm4I/maxresdefault.jpg' },
    { title: 'Interstellar ', description: '2014 Movie', image: 'https://tse3.mm.bing.net/th?id=OIP.JymutQOaBSxOAXmuij9g-wAAAA&pid=Api&P=0&h=180' },
    { title: 'San Andreas ', description: '2015 Movie', image: 'https://tse1.mm.bing.net/th?id=OIP.lp7EEBlliLuCrAx2ivDw1gHaEK&pid=Api&P=0&h=180' },

];


  return (
    <div>
      <Navbar />
      <SearchBar />
      <div className="p-4 ml-28">
      <h1 className="text-2xl text-start text-white ml-3">Bookmarks</h1>
      <div className="flex flex-wrap justify-start">
        {Bookmarkmovies.map((card, index) => (
          <Bookmarkmovie
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>


    </div>
    </div>
  );
};

export default Bookmarks;
