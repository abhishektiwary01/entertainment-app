import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './frontend/components/Home';
import MoviePage from './frontend/components/MoviePage';
import TvSeries from './frontend/components/TvSeries';
import Bookmarks from './frontend/components/Bookmarks';
import DetailPage from './frontend/components/DetailPage';
import Loginpage from './frontend/components/Loginpage';
import SignUp from './frontend/components/SignUp'
const App = () => {
    return (
        <Router>
            <div className="relative h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
                <Routes>
                    <Route path="/" element={<Loginpage />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/movie" element={<MoviePage />} />
                    <Route path="/tvseries" element={<TvSeries />} />
                    <Route path="/bookmarks" element={<Bookmarks />} />
                    <Route path="/detailpage" element={<DetailPage />} />
                    <Route path="/Loginpage" element={<Loginpage />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
