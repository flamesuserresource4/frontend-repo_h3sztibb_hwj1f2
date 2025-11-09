import React from 'react';

const CATEGORIES = [
  {
    title: 'Frontend',
    items: [
      { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Vite', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg' },
      { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
      { name: 'Redux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
    ],
  },
  {
    title: 'Languages',
    items: [
      { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
      { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Dart', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
    ],
  },
  {
    title: 'Mobile',
    items: [
      { name: 'React Native', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
      { name: 'Android', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
    ],
  },
  {
    title: 'Design',
    items: [
      { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'Canva', logo: 'https://img.icons8.com/color/48/canva.png' },
      { name: 'Visily', logo: 'https://img.icons8.com/?size=256&id=1iETBkYfJ2m0&format=png' },
      { name: 'Wix', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wix/wix-original.svg' },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Code::Blocks', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Code::Blocks_logo.png' },
      { name: 'Postman', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
      { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    ],
  },
  {
    title: 'Cloud & Platforms',
    items: [
      { name: 'Netlify', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg' },
      { name: 'Vercel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
      { name: 'Render', logo: 'https://avatars.githubusercontent.com/u/58099972?s=200&v=4' },
      { name: 'GitHub Pages', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    ],
  },
];

function SkillCard({ name, logo }) {
  return (
    <div className="group rounded-xl border border-white/10 bg-white/[0.05] p-4 flex flex-col items-center text-center hover:bg-white/[0.08] transition will-change-transform">
      <img src={logo} alt={name} className="h-10 w-10 object-contain drop-shadow" />
      <span className="mt-3 text-sm text-white/85">{name}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold">Technical Skills</h2>
        <p className="text-white/70 mt-2">A snapshot of the tools and technologies I use across design, web, and mobile.</p>

        <div className="mt-10 space-y-10">
          {CATEGORIES.map((cat) => (
            <div key={cat.title}>
              <h3 className="text-lg font-semibold text-white/90">{cat.title}</h3>
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
                {cat.items.map((s) => (
                  <SkillCard key={s.name} name={s.name} logo={s.logo} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
