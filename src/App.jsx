import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './frontend/pages/Home'; // Import the Home page component
import MoviePage from './frontend/pages/MoviePage'; // Import the MoviePage component
import TvSeries from './frontend/pages/TvSeries'; // Import the TvSeries component
import Bookmarks from './frontend/pages/Bookmarks'; // Import the Bookmarks page component
import DetailPage from './frontend/pages/DetailPage'; // Import the DetailPage component
import Loginpage from './frontend/pages/Loginpage'; // Import the Loginpage component
import SignUp from './frontend/pages/SignUp'; // Import the SignUp component

// Define the App component
const App = () => {
    return (
        // Set up the Router for routing in the app
        <Router>
            {/* Main container for the app with a background gradient and full-height */}
            <div className="relative min-h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
                {/* Define the routing rules */}
                <Routes>
                    {/* Route for the root path, renders the Loginpage component */}
                    <Route path="/" element={<Loginpage />} />
                    {/* Route for the /home path, renders the Home component */}
                    <Route path="/home" element={<Home />} />
                    {/* Route for the /movie path, renders the MoviePage component */}
                    <Route path="/movie" element={<MoviePage />} />
                    {/* Route for the /tvseries path, renders the TvSeries component */}
                    <Route path="/tvseries" element={<TvSeries />} />
                    {/* Route for the /bookmarks path, renders the Bookmarks component */}
                    <Route path="/bookmarks" element={<Bookmarks />} />
                    {/* Route for the /detailpage path, renders the DetailPage component */}
                    <Route path="/detailpage" element={<DetailPage />} />
                    {/* Route for the /loginpage path, renders the Loginpage component */}
                    <Route path="/loginpage" element={<Loginpage />} />
                    {/* Route for the /signup path, renders the SignUp component */}
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
