import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="mt-4 text-white/80 leading-relaxed">
            I’m an aspiring Frontend and Android App Developer passionate about turning creative ideas into sleek, interactive digital experiences. Curious by nature, I constantly explore new tools and technologies to push the boundaries of creativity and code. I enjoy designing intuitive interfaces and developing impactful products that solve real-world problems.
          </p>
          <div className="mt-6 grid sm:grid-cols-2 gap-4 text-white/80">
            <div>
              <p>Email</p>
              <a href="mailto:get2naman@gmail.com" className="text-white hover:underline">get2naman@gmail.com</a>
            </div>
            <div>
              <p>Phone</p>
              <a href="tel:+918925474810" className="text-white hover:underline">+91 8925474810</a>
            </div>
            <div>
              <p>GitHub</p>
              <a href="https://github.com/get2naman-bit" target="_blank" rel="noreferrer" className="text-white hover:underline">github.com/get2naman-bit</a>
            </div>
            <div>
              <p>LinkedIn</p>
              <a href="https://linkedin.com/in/naman-sinha-986511248" target="_blank" rel="noreferrer" className="text-white hover:underline">linkedin.com/in/naman-sinha-986511248</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
