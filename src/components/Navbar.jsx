import React from 'react';
import { FileDown, User } from 'lucide-react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const RESUME_URL = 'https://drive.google.com/uc?export=download&id=1Wko1e3-1PIFaP-1W7Sk5iP5z6Ck2sY4G';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/20 bg-white/10 border-b border-white/10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="#home" className="font-semibold tracking-tight text-white">
          Naman<span className="text-violet-300">Sinha</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-white/80 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a
            href={RESUME_URL}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white hover:bg-white/20 transition"
            aria-label="Download Resume"
          >
            <FileDown size={18} />
            <span className="hidden sm:inline">Resume</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-violet-500/90 px-4 py-2 text-white hover:bg-violet-500 transition"
          >
            <User size={18} />
            <span className="hidden sm:inline">Hire Me</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
