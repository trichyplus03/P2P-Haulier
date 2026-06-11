import React from 'react';

export default function Industries() {
  const industries = ["Automotive", "FMCG", "Manufacturing", "Retail Systems", "Healthcare", "E-Commerce"];

  return (
    <section id="industries" className="py-32 border-y border-white/5 relative z-10"
      style={{ backgroundColor: 'rgba(3,7,18,0.4)' }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="text-xs font-bold tracking-widest text-brand-orange uppercase">Market Verticals</div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">Tailored Across High-Velocity Sectors</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          {industries.map((ind, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-white/5 text-center space-y-3 group hover:border-white/10 transition-all duration-300"
              style={{
                // Fix: bg-gray-900/20 + backdrop-blur-sm opacity shorthand unreliable on older Safari
                backgroundColor: 'rgba(17,24,39,0.2)',
                WebkitBackdropFilter: 'blur(4px)',
                backdropFilter: 'blur(4px)',
              }}
            >
              {/* Fix: scale-0 + group-hover:scale-100 can fail on iOS — use opacity transition instead */}
              <div className="w-2 h-2 rounded-full bg-brand-orange mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors duration-200">{ind}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}