import React from 'react';

const projects = [
  {
    title: 'MindMate',
    description:
      'A mental health assistant and counselling platform with a resource hub, AI chatbot, and community groups.',
    tags: ['HTML', 'CSS', 'ReactJS', 'JavaScript'],
    link: 'https://hpsc.tiiny.site',
  },
  {
    title: 'AI Credit Score Manager',
    description:
      'Computes AI-approved credit scores using day-to-day utility bill signals like electricity and mobile payments.',
    tags: ['HTML', 'CSS', 'ReactJS', 'JavaScript'],
    link: 'https://creditscore-main.onrender.com',
  },
  {
    title: 'Bus/Train Ticket Booking System',
    description:
      'Smart ticketing and seat management with booking and downloadable tickets, plus mock payment flows.',
    tags: ['HTML', 'CSS', 'ReactJS', 'JavaScript'],
    link: 'https://booksmmart.netlify.app',
  },
  {
    title: 'TruthLensAI',
    description:
      'Detects fake news and surfaces credible sources with transparency and trust scores for web content.',
    tags: ['HTML', 'CSS', 'ReactJS', 'JavaScript'],
    link: 'https://truth-guard-ai-08a116dd.base44.app',
  },
  {
    title: 'Cricscard',
    description:
      'Live cricket and football scores, plus standings and points tables for multiple leagues worldwide.',
    tags: ['HTML', 'CSS', 'ReactJS', 'JavaScript'],
    link: 'https://cricscard.netlify.app',
  },
  {
    title: 'Juswipe (Upcoming)',
    description:
      'A personalized news swiping app that learns preferences via left/right swipes across 10+ countries in multiple languages.',
    tags: ['React Native', 'Flutter'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(1000px_circle_at_0%_0%,rgba(79,70,229,0.15),transparent_50%)] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target={p.link !== '#' ? '_blank' : undefined}
              rel={p.link !== '#' ? 'noreferrer' : undefined}
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
