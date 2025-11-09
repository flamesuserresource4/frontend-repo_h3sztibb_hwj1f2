import React from 'react';
import { Briefcase, Code2, Rocket, Mail } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">About</h2>
          <p className="mt-4 text-white/80 leading-relaxed">
            I'm a product-minded developer focused on delightful, performant interfaces. I blend
            modern 3D, motion, and solid engineering to ship experiences people remember.
          </p>
        </div>
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
          <ul className="space-y-3 text-white/80">
            <li>• WebGL & 3D interfaces with Spline/Three</li>
            <li>• React, TypeScript, Tailwind</li>
            <li>• Design systems and micro-interactions</li>
            <li>• Shipping end-to-end from concept to launch</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  const items = [
    {
      title: 'Hackathon Finalist',
      org: 'Multiple events',
      period: '2023–2025',
      points: [
        'Built real-time apps with sockets and serverless backends',
        'Led UI/UX for teams, focusing on accessibility and polish',
      ],
    },
    {
      title: 'Frontend Engineer',
      org: 'Freelance',
      period: 'Ongoing',
      points: [
        'Crafted interactive portfolios and product sites',
        'Optimized performance and SEO with best practices',
      ],
    },
  ];

  return (
    <section id="experience" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-white flex items-center gap-3"><Briefcase size={24}/> Experience & Hackathons</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <div className="flex items-center justify-between">
                <div className="text-white font-medium">{item.title} · <span className="text-white/70">{item.org}</span></div>
                <div className="text-white/60 text-sm">{item.period}</div>
              </div>
              <ul className="mt-4 space-y-2 text-white/80 list-disc list-inside">
                {item.points.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  const groups = [
    { name: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind'] },
    { name: 'Languages', items: ['JavaScript', 'Python', 'C/C++'] },
    { name: 'Mobile', items: ['React Native', 'Expo'] },
    { name: 'Design', items: ['Figma', 'Spline'] },
    { name: 'Tools', items: ['Git', 'Vite', 'Framer Motion'] },
    { name: 'Cloud & Platforms', items: ['Vercel', 'Firebase', 'Netlify'] },
  ];

  return (
    <section id="skills" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-white flex items-center gap-3"><Code2 size={24}/> Technical Skills</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {groups.map((g) => (
            <div key={g.name} className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <div className="text-white font-medium">{g.name}</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span key={s} className="rounded-full bg-white/10 px-3 py-1 text-sm text-white/90">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  const projects = [
    {
      title: 'Interactive Portfolio',
      desc: 'Immersive 3D hero, animated backgrounds, and smooth scrolling sections.',
      tags: ['React', 'Spline', 'Tailwind'],
      link: '#',
    },
    {
      title: 'Realtime Collab Tool',
      desc: 'Lightweight whiteboard with presence and cursors.',
      tags: ['React', 'Socket.io'],
      link: '#',
    },
    {
      title: 'Mobile UI Kit',
      desc: 'Cross-platform components with delightful motion.',
      tags: ['React Native', 'Expo'],
      link: '#',
    },
  ];

  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-white flex items-center gap-3"><Rocket size={24}/> Projects</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition">
              <div className="text-white font-medium group-hover:text-white">{p.title}</div>
              <p className="mt-2 text-white/70 text-sm">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-white/80">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-white flex items-center gap-3"><Mail size={24}/> Contact</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6 text-white/80">
            <p>Email: <a className="text-white" href="mailto:naman.sinha.dev@mail.com">naman.sinha.dev@mail.com</a></p>
            <p className="mt-2">Based in India · Open to remote roles and freelance</p>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white hover:bg-white/20 transition"
            >
              Download Resume
            </a>
          </div>
          <form className="rounded-2xl bg-white/5 border border-white/10 p-6 space-y-4" onSubmit={(e)=>e.preventDefault()}>
            <div>
              <label className="block text-sm text-white/70">Name</label>
              <input className="mt-1 w-full rounded-md bg-white/10 px-3 py-2 text-white placeholder-white/50 outline-none border border-white/10 focus:border-violet-400" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm text-white/70">Email</label>
              <input type="email" className="mt-1 w-full rounded-md bg-white/10 px-3 py-2 text-white placeholder-white/50 outline-none border border-white/10 focus:border-violet-400" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm text-white/70">Message</label>
              <textarea rows={4} className="mt-1 w-full rounded-md bg-white/10 px-3 py-2 text-white placeholder-white/50 outline-none border border-white/10 focus:border-violet-400" placeholder="How can I help?" />
            </div>
            <button className="rounded-full bg-violet-500/90 px-5 py-2.5 text-white hover:bg-violet-500 transition">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}
