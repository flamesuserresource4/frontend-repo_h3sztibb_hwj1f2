import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <footer className="border-t border-white/10 py-8 text-center text-white/60 bg-black">
        © {new Date().getFullYear()} My Portfolio — Built with love and motion
      </footer>
    </div>
  );
}
