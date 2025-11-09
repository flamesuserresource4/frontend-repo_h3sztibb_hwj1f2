import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-slate-950 to-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Let’s build something exceptional</h2>
            <p className="mt-4 text-white/80">
              I’m open to freelance opportunities, collaborations, and speaking gigs. Share a few details
              about your project and I’ll get back to you within 24 hours.
            </p>
            <div className="mt-6 space-y-2 text-white/70">
              <p>Email: <a href="mailto:hello@example.com" className="text-white hover:underline">hello@example.com</a></p>
              <p>Location: Remote / Worldwide</p>
            </div>
          </div>
          <form className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur">
            <label className="block text-sm font-medium text-white/80">Name</label>
            <input className="mt-1 w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-fuchsia-400 text-white" placeholder="Your name" />

            <label className="block text-sm font-medium text-white/80 mt-4">Email</label>
            <input type="email" className="mt-1 w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-fuchsia-400 text-white" placeholder="you@example.com" />

            <label className="block text-sm font-medium text-white/80 mt-4">Message</label>
            <textarea rows="4" className="mt-1 w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-fuchsia-400 text-white" placeholder="Tell me about your project..." />

            <button type="button" className="mt-5 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 px-5 py-3 font-semibold text-white shadow-lg shadow-fuchsia-500/20 hover:brightness-110 transition w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
