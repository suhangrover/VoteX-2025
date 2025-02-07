import React from 'react';
import { motion } from 'framer-motion';
import { Vote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { VideoContainer } from '../ui/video';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between container mx-auto pt-16 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="lg:w-1/2 space-y-8 text-center lg:text-left lg:pr-8 mb-12 lg:mb-0"
      >
        <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
          <Vote className="w-5 h-5 text-purple-400" />
          <span className="text-purple-200">Secure • Transparent • Reliable</span>
        </div>
        
        <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-[1.1]">
          The Future of
          <span className="block bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text mt-4">
            Digital Voting
          </span>
        </h1>
        
        <p className="text-lg lg:text-xl text-gray-300 max-w-2xl">
          Experience secure and transparent voting with blockchain technology. 
          Your vote matters, make it count with VoteX.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <Link
            to="/vote"
            className="w-full sm:w-auto px-8 h-14 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2 text-lg font-medium"
          >
            <Vote className="w-6 h-6" />
            <span>Start Voting</span>
          </Link>
          <Link
            to="/features"
            className="w-full sm:w-auto px-8 h-14 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors flex items-center justify-center text-lg font-medium"
          >
            Learn More
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="lg:w-1/2 w-full"
      >
        <VideoContainer 
          youtubeId="lrzhwXcAYbU"
          posterUrl=""
        />
      </motion.div>
    </div>
  );
}