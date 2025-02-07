import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Vote, Menu, User, Code } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Vote className="w-8 h-8 text-purple-400" />
              <span className="text-xl font-bold text-white hover:text-purple-200 transition-colors">
                VoteX
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/features" className="nav-link">
              Features
            </Link>
            <Link to="/team" className="nav-link">
              Our Team
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
            <Link to="/dev" className="nav-link flex items-center space-x-2">
              <Code className="w-4 h-4" />
              <span>Dev Portal</span>
            </Link>
            <button
              onClick={() => navigate('/admin')}
              className="nav-link"
            >
              Admin
            </button>
            <Link
              to="/vote"
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2"
            >
              <User className="w-4 h-4" />
              <span>Vote Now</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black/90 backdrop-blur-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="mobile-nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="mobile-nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/features"
              className="mobile-nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              to="/team"
              className="mobile-nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Team
            </Link>
            <Link
              to="/contact"
              className="mobile-nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/dev"
              className="mobile-nav-link flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <Code className="w-4 h-4 mr-2" />
              Dev Portal
            </Link>
            <button
              onClick={() => {
                navigate('/admin');
                setIsMenuOpen(false);
              }}
              className="mobile-nav-link w-full text-left"
            >
              Admin
            </button>
            <Link
              to="/vote"
              className="block px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Vote Now
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}