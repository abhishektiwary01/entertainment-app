import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './frontend/pages/Home';
import MoviePage from './frontend/pages/MoviePage';
import TvSeries from './frontend/pages/TvSeries';
import Bookmarks from './frontend/pages/Bookmarks';
import DetailPage from './frontend/pages/DetailPage';
import Loginpage from './frontend/pages/Loginpage';
import SignUp from './frontend/pages/SignUp';

const App = () => {
    return (
        <Router>
            <div className="relative min-h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
                <Routes>
                    <Route path="/" element={<Loginpage />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/movie" element={<MoviePage />} />
                    <Route path="/tvseries" element={<TvSeries />} />
                    <Route path="/bookmarks" element={<Bookmarks />} />
                    <Route path="/detailpage" element={<DetailPage />} />
                    <Route path="/loginpage" element={<Loginpage />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
