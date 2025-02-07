import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import HomePage from './pages/HomePage';
import LoginForm from './components/auth/LoginForm';
import VotingBooth from './components/voting/VotingBooth';
import AdminDashboard from './components/admin/AdminDashboard';
import SuccessPage from './components/voting/SuccessPage';
import FeaturesPage from './pages/FeaturesPage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';
import About from './components/home/About';
import DevDashboard from './pages/DevDashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] to-[#4a1d96]">
        <Navbar />
        <div className="pt-12">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/vote" element={<VotingBooth />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/dev" element={<DevDashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;