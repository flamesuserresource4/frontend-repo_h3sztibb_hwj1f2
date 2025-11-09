import React from 'react';

// Full-page animated, dreamy gradient background ("fairy" vibes)
// Sits behind all content and slowly shifts hues over time
export default function BackgroundFX() {
  return (
    <>
      <style>{`
        @keyframes hueRotate {
          0% { filter: hue-rotate(0deg) saturate(115%); }
          50% { filter: hue-rotate(180deg) saturate(115%); }
          100% { filter: hue-rotate(360deg) saturate(115%); }
        }
        @keyframes floatMove {
          0% { background-position: 0% 0%, 100% 0%, 0% 100%; }
          50% { background-position: 100% 100%, 0% 100%, 100% 0%; }
          100% { background-position: 0% 0%, 100% 0%, 0% 100%; }
        }
        .fairy-bg {
          position: fixed;
          inset: 0;
          pointer-events: none;
          /* Multiple soft radial gradients for a dreamy canvas */
          background-image:
            radial-gradient(900px 600px at 10% 20%, rgba(186, 230, 253, 0.35), transparent 60%),
            radial-gradient(800px 500px at 90% 10%, rgba(216, 180, 254, 0.35), transparent 60%),
            radial-gradient(900px 600px at 10% 90%, rgba(248, 180, 217, 0.32), transparent 60%),
            radial-gradient(800px 600px at 90% 90%, rgba(191, 219, 254, 0.32), transparent 60%),
            radial-gradient(1200px 900px at 50% 50%, rgba(221, 214, 254, 0.35), transparent 60%);
          background-repeat: no-repeat;
          background-size: 120% 120%, 120% 120%, 120% 120%, 120% 120%, 180% 180%;
          animation: floatMove 30s ease-in-out infinite alternate;
        }
        .fairy-filter {
          position: fixed;
          inset: 0;
          pointer-events: none;
          animation: hueRotate 40s linear infinite;
        }
      `}</style>
      {/* Layer 1: moving soft gradients */}
      <div aria-hidden className="fairy-bg" />
      {/* Layer 2: hue rotate overlay to softly shift colors over time */}
      <div aria-hidden className="fairy-filter" />
    </>
  );
}
