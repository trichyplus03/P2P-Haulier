import React from 'react';

export default function FinalCTA() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto relative z-10">
      <div className="relative rounded-3xl border border-brand-blue/40 p-12 md:p-20 text-center overflow-hidden group"
        style={{
          // Fix: complex gradient with brand vars can fail on iOS — use explicit hex values
          background: 'linear-gradient(to bottom right, #030712, rgba(37,99,235,0.2), #111827)',
        }}
      >
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
          style={{
            // Fix: bg-brand-orange/10 with blur — use rgba + filter instead
            backgroundColor: 'rgba(249,115,22,0.1)',
            filter: 'blur(100px)',
          }}
        />

        <div className="max-w-2xl mx-auto space-y-8 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none">Ready To Move Smarter?</h2>
          <p className="text-[#94A3B8] text-base md:text-lg font-light leading-relaxed">
            Optimize your logistics operations, lower execution friction parameters, and scale shipping volumes through technology-driven transportation frameworks.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl bg-white text-black font-bold flex items-center gap-2 hover:bg-gray-200 transition-colors duration-300"
              // Fix: hover:scale-[1.02] causes jank on iOS — removed
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              Request Enterprise Quote
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl border border-white/10 text-white font-medium hover:bg-white/10 transition-colors duration-300"
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              Contact Strategy Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}