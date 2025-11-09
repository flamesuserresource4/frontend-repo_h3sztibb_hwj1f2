import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import BackgroundFX from './components/BackgroundFX';

export default function App() {
  return (
    <div className="min-h-screen text-white relative">
      {/* Dreamy, color-shifting page background */}
      <BackgroundFX />

      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-white/70">
        © {new Date().getFullYear()} Naman Sinha — UI/UX Designer & Frontend Developer
      </footer>
    </div>
  );
}
