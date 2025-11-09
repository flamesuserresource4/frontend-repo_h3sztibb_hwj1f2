import { Rocket, User, FileDown } from 'lucide-react';
import React from 'react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/10 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-white/90 hover:text-white transition-colors">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 to-fuchsia-500 text-white">
            <Rocket size={18} />
          </span>
          <span className="font-semibold tracking-tight">Naman Sinha</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="text-white/70 hover:text-white transition-colors">About</a>
          <a href="#experience" className="text-white/70 hover:text-white transition-colors">Experience</a>
          <a href="#skills" className="text-white/70 hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="text-white/70 hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="https://drive.google.com/file/d/1WbnSUS8kpuVoXtuEG6fq1DKRsDhsuPsX/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-md bg-white/10 hover:bg-white/15 text-white border border-white/10 transition-colors"
          >
            <FileDown size={16} /> Resume
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-md bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 text-white transition-colors">
            <User size={16} /> Hire Me
          </a>
        </div>
      </div>
    </header>
  );
}
