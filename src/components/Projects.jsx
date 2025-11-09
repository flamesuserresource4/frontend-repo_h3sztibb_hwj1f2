import React from 'react';

const projects = [
  {
    title: 'Interactive 3D Landing',
    description: 'A Spline-powered hero with dynamic lighting and smooth parallax.',
    tags: ['React', 'Spline', 'Framer Motion'],
    link: '#',
  },
  {
    title: 'Realtime Dashboard',
    description: 'Streaming analytics widgets with delightful micro-interactions.',
    tags: ['Vite', 'Tailwind', 'WebSockets'],
    link: '#',
  },
  {
    title: 'Design System',
    description: 'Accessible components and tokens for multi-brand platforms.',
    tags: ['Design Tokens', 'Storybook', 'TypeScript'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(1000px_circle_at_0%_0%,rgba(79,70,229,0.15),transparent_50%)] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.link}
              className="group rounded-xl border border-white/10 bg-white/5 hover:bg-white/[0.08] transition shadow-lg shadow-black/20 overflow-hidden"
            >
              <div className="p-5">
                <h3 className="text-xl font-semibold group-hover:text-white/95">
                  {p.title}
                </h3>
                <p className="mt-2 text-white/70">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/10 border border-white/10 text-white/80">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
