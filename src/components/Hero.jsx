import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-[80vh] md:h-[90vh] w-full">
      {/* Spline canvas fills the section */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/6mQsk3Ph4Z1xvV9C/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Overlays are pointer-events-none so Spline remains interactive */}
      <div className="pointer-events-none relative z-10 flex h-full w-full items-center">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              Naman Sinha
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/80">
              Creative developer crafting immersive, performant web experiences.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#projects" className="pointer-events-auto rounded-full bg-white/10 px-5 py-2.5 text-white hover:bg-white/20 transition">View Work</a>
              <a href="#contact" className="pointer-events-auto rounded-full bg-violet-500/90 px-5 py-2.5 text-white hover:bg-violet-500 transition">Contact</a>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle cursor-reactive spotlight */}
      <Spotlight />
    </section>
  );
}

function Spotlight() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      el.style.setProperty('--mx', `${x}%`);
      el.style.setProperty('--my', `${y}%`);
    };
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          'radial-gradient(600px 600px at var(--mx, 50%) var(--my, 40%), rgba(124,58,237,0.18), transparent 60%),\n           radial-gradient(800px 800px at var(--mx, 50%) calc(var(--my, 40%) + 8%), rgba(59,130,246,0.12), transparent 60%)',
      }}
    />
  );
}
