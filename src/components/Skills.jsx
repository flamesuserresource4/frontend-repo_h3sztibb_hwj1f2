import React from 'react';

const skills = [
  { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
  { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'React Native', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
  { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Canva', logo: 'https://img.icons8.com/color/48/canva.png' },
  { name: 'Wix', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wix/wix-original.svg' },
  { name: 'Visily', logo: 'https://img.icons8.com/?size=512&id=1iETBkYfJ2m0&format=png' },
  { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'Code::Blocks', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Code::Blocks_logo.png' },
  { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold">Technical Skills</h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {skills.map((s) => (
            <div key={s.name} className="group rounded-xl border border-white/10 bg-white/[0.04] p-4 flex flex-col items-center text-center hover:bg-white/[0.07] transition">
              <img src={s.logo} alt={s.name} className="h-10 w-10 object-contain" />
              <span className="mt-3 text-sm text-white/85">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
