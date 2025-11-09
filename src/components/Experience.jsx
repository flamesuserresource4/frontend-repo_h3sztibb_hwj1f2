import React from 'react';

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold">Experience & Hackathons</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Work Experience</h3>
            <div className="rounded-xl border border-white/10 bg-white/[0.05] p-5">
              <div className="flex items-center justify-between">
                <p className="font-medium">UI/UX Designer & Frontend Developer — Youth India Foundation</p>
                <span className="text-sm text-white/70">May 2025 – July 2025</span>
              </div>
              <ul className="list-disc list-inside mt-2 text-white/80 space-y-1">
                <li>Helped design, refine, and develop the organization’s website.</li>
                <li>Partnered on UI/UX enhancements and front-end implementation.</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Hackathon Experience</h3>
            <div className="space-y-4">
              <div className="rounded-xl border border-white/10 bg-white/[0.05] p-5">
                <p className="font-medium">SIH 2025 (Smart India Hackathon)</p>
                <p className="text-white/70 text-sm">Cleared internal round; ranked Top 30 among 220 teams. Frontend Lead for a mental health counselling platform, submitted to National Portal.</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.05] p-5">
                <p className="font-medium">Riidl Incuverse 2025</p>
                <p className="text-white/70 text-sm">Built a personal finance app to track savings with intelligent recommendations.</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.05] p-5">
                <p className="font-medium">Google Gen AI Hackathon</p>
                <p className="text-white/70 text-sm">Enhanced a counselling platform with personalized AI-driven features.</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.05] p-5">
                <p className="font-medium">VW Mobilothon 5.0 (Results Awaited)</p>
                <p className="text-white/70 text-sm">Proposed a real-time parking app to find and book nearby spots. Served as Team Lead.</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.05] p-5">
                <p className="font-medium">Mumbai Hacks 2025 (Upcoming Grand Finale)</p>
                <p className="text-white/70 text-sm">Leading a team to build an Agentic AI system to combat misinformation and promote credible news.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
