import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <footer className="border-t border-white/10 py-8 text-center text-white/60 bg-black">
        © {new Date().getFullYear()} Naman Sinha — UI/UX Designer & Frontend Developer
      </footer>
    </div>
  );
}
