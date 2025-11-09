import React from 'react';
import BackgroundFX from './components/BackgroundFX';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { About, Experience, Skills, Projects, Contact } from './components/Sections';

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(40%_40%_at_50%_0%,#1f1433_0%,#0b0b14_60%)] text-white">
      <BackgroundFX />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="relative z-10 border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-4 text-white/60 text-sm">
          © {new Date().getFullYear()} Naman Sinha · Creative Developer
        </div>
      </footer>
    </div>
  );
}
