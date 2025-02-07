import React from 'react';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Features from '../components/home/Features';
import Team from '../components/home/Team';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] to-[#4a1d96]">
      <Hero />
      <About />
      <Features />
      <Team />
    </div>
  );
}