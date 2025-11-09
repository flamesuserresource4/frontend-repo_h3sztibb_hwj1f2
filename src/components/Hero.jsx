import React, { useRef } from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const sectionRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty('--mx', `${x}px`);
    el.style.setProperty('--my', `${y}px`);
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[90vh] w-full overflow-hidden text-white bg-black"
      style={{
        // Cursor-reactive moving gradient (no grain)
        background:
          'radial-gradient(600px circle at var(--mx,50%) var(--my,40%), rgba(139, 92, 246, 0.22), transparent 40%), radial-gradient(1200px circle at 50% 0%, rgba(59, 130, 246, 0.12), transparent 55%)',
      }}
    >
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-24 pb-32">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs uppercase tracking-wider text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
            UI/UX Designer & Frontend Developer
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Naman Sinha
          </h1>
          <p className="mt-4 text-white/85 text-lg">
            I’m an aspiring Frontend and Android App Developer passionate about turning creative ideas into sleek, interactive digital experiences. Curious by nature, I explore new tools and technologies to push the boundaries of design and code. I love crafting intuitive interfaces and building impactful products that solve real-world problems.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 px-5 py-3 font-semibold text-white shadow-lg shadow-fuchsia-500/20 hover:brightness-110 transition"
            >
              View Projects
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/10 px-5 py-3 font-medium text-white/90 hover:bg-white/15 transition"
            >
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
