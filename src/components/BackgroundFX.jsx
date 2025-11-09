import React from 'react';

// Full-viewport dreamy radial gradients with gentle motion and hue rotation
// This layer is non-interactive so it never blocks clicks/drags on the Spline scene
export default function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      <style>{`
        @keyframes floatMove {
          0% { transform: translate3d(0, -2%, 0) scale(1.05); }
          50% { transform: translate3d(0, 2%, 0) scale(1.08); }
          100% { transform: translate3d(0, -2%, 0) scale(1.05); }
        }
        @keyframes hueRotate {
          0% { filter: hue-rotate(0deg) saturate(1.1); }
          50% { filter: hue-rotate(30deg) saturate(1.2); }
          100% { filter: hue-rotate(0deg) saturate(1.1); }
        }
      `}</style>

      <div
        className="absolute -inset-32 opacity-60 blur-3xl"
        style={{
          background:
            'radial-gradient(60% 50% at 20% 30%, rgba(168,85,247,0.55) 0%, rgba(168,85,247,0.0) 60%),\n             radial-gradient(50% 45% at 80% 20%, rgba(59,130,246,0.55) 0%, rgba(59,130,246,0.0) 60%),\n             radial-gradient(60% 60% at 50% 80%, rgba(16,185,129,0.45) 0%, rgba(16,185,129,0.0) 60%)',
          animation: 'floatMove 14s ease-in-out infinite',
        }}
      />

      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            'radial-gradient(100% 100% at 10% 10%, rgba(147,51,234,0.12), transparent 60%),\n             radial-gradient(100% 100% at 90% 0%, rgba(59,130,246,0.10), transparent 60%),\n             radial-gradient(100% 120% at 50% 100%, rgba(34,197,94,0.08), transparent 60%)',
          animation: 'hueRotate 18s linear infinite',
        }}
      />
    </div>
  );
}
