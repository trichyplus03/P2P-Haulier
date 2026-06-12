import React from 'react';

const reviews = [
  { quote: "Migrating our core FMCG deployment pipeline allocation onto P2P's tracking framework instantly lowered our destination dock wait time metrics by nearly 22%.", author: 'Rohan Mehta', role: 'VP Supply Chain, National Foods' },
  { quote: "Their API integration interface is clean. We get real-time tracking coordinates loaded directly inside our global corporate SAP resource planners without external app jumps.", author: 'Siddharth Nair', role: 'Logistics Controller, Apex Auto Industries' },
  { quote: "Exceptional execution response consistency. P2P acts less like an external transport booking agency and fundamentally functions as a true tech integration partner.", author: 'Priya Sharma', role: 'Director of Operations, Zenith Retail Corp' },
];

export default function Testimonials() {
  return (
    <section
      className="py-32 border-y border-white/5 relative z-10 overflow-hidden"
      style={{ backgroundColor: 'rgba(3,7,18,0.4)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none -z-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div
        className="absolute top-0 left-1/2 pointer-events-none -z-0"
        style={{
          width: '800px',
          height: '250px',
          marginLeft: '-400px',
          background: 'radial-gradient(ellipse at top, rgba(246,146,30,0.05) 0%, transparent 65%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="text-xs font-bold tracking-widest text-brand-orange uppercase">Partner Verification</div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">Validated By Operations Leaders</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map(test => (
            <div
              key={test.author}
              className="p-8 rounded-2xl border border-white/5 flex flex-col justify-between space-y-8"
              style={{
                backgroundColor: 'rgba(17,24,39,0.35)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.03)',
              }}
            >
              <p className="text-sm font-light leading-relaxed text-gray-300 italic">&ldquo;{test.quote}&rdquo;</p>
              <div>
                <h5 className="text-sm font-bold text-white">{test.author}</h5>
                <p className="text-[11px] text-gray-500 font-medium">{test.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}