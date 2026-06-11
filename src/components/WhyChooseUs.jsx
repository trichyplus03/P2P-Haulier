import React from 'react';

const cardStyle = {
  backgroundColor: 'rgba(17,24,39,0.2)',
  WebkitBackdropFilter: 'blur(12px)',
  backdropFilter: 'blur(12px)',
};

export default function WhyChooseUs() {
  return (
    <section className="py-32 px-4 max-w-7xl mx-auto relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
        <div className="text-xs font-bold tracking-widest text-brand-orange uppercase">Strategic Leverage</div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight">Built For Mission-Critical Logistics</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-8 rounded-2xl border border-white/5 md:col-span-2 space-y-4" style={cardStyle}>
          <div className="w-10 h-10 rounded-xl text-blue-400 flex items-center justify-center font-bold"
            style={{ backgroundColor: 'rgba(37,99,235,0.3)' }}
          >01</div>
          <h3 className="text-2xl font-bold">Pan India Coverage Logistics Network</h3>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            We interconnect multiple major trading zones seamlessly. Our deep geographical network reach covers vital economic corridors across India, facilitating rapid regional cross-dock transitions.
          </p>
        </div>

        <div className="p-8 rounded-2xl border border-white/5 space-y-4" style={cardStyle}>
          <div className="w-10 h-10 rounded-xl text-brand-orange flex items-center justify-center font-bold"
            style={{ backgroundColor: 'rgba(246,146,30,0.1)' }}
          >02</div>
          <h3 className="text-2xl font-bold">Absolute Visibility</h3>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            Every single vehicle asset emits constant location tracking markers, verified instantly inside your operational dashboards.
          </p>
        </div>

        <div className="p-8 rounded-2xl border border-white/5 space-y-4" style={cardStyle}>
          <div className="w-10 h-10 rounded-xl text-purple-400 flex items-center justify-center font-bold"
            style={{ backgroundColor: 'rgba(168,85,247,0.1)' }}
          >03</div>
          <h3 className="text-2xl font-bold">Secure Systems</h3>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            Rigidly enforced lock protocols protecting heavy industrial goods and sensitive raw inputs safely.
          </p>
        </div>

        <div className="p-8 rounded-2xl border border-white/5 md:col-span-2 space-y-4" style={cardStyle}>
          <div className="w-10 h-10 rounded-xl text-emerald-400 flex items-center justify-center font-bold"
            style={{ backgroundColor: 'rgba(16,185,129,0.1)' }}
          >04</div>
          <h3 className="text-2xl font-bold">Dedicated Solution Support Engineering</h3>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            Forget waiting through mechanical voice queues. We provide enterprise-level logistics account engineers actively monitoring exception workflows to maximize fulfillment reliability.
          </p>
        </div>
      </div>
    </section>
  );
}