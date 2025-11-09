import React from 'react';
import { FileDown, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/0 border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-white hover:text-white/90">Naman Sinha</a>

        <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#home" className="hover:text-white">Home</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#experience" className="hover:text-white">Experience</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://drive.google.com/uc?export=download&id=1WbnSUS8kpuVoXtuEG6fq1DKRsDhsuPsX"
            className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/15"
          >
            <FileDown className="h-4 w-4" /> Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400 px-3 py-1.5 text-sm font-medium text-white shadow shadow-fuchsia-500/20"
          >
            <User className="h-4 w-4" /> Hire Me
          </a>
        </div>
      </nav>
    </header>
  );
}
