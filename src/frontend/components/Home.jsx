import React from 'react';
import Navbar from './Navbar';
import MainSection from './MainSection';
import SearchBar from './SearchBar';


const Home = () => {
    return (
        <div>
            <Navbar />
            <SearchBar />
            <MainSection />
        </div>
    );
};

export default Home;
