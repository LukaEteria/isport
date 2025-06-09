import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ArticlePage from './assets/ArticlePage';

// ახალი გვერდები
import FootballPage from './pages/FootballPage';
import BasketballPage from './pages/BasketballPage';
import TennisPage from './pages/TennisPage';
import CombatSportsPage from './pages/CombatSportsPage';
import RugbyPage from './pages/Rugby';
import OtherPage from './pages/Other';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element={<ArticlePage />} />

        {/* დამატებული გვერდები */}
        <Route path="/football" element={<FootballPage />} />
        <Route path="/basketball" element={<BasketballPage />} />
        <Route path="/tennis" element={<TennisPage />} />
        <Route path="/combatsports" element={<CombatSportsPage />} />
        <Route path="/rugby" element={<RugbyPage />} />
        <Route path="/other" element={<OtherPage />} />
      </Routes>
    </Router>
  );
}

export default App;
