import React from 'react';

const workflowSteps = [
  { step: '01', name: 'Instant Booking', desc: 'Upload manifest file formats straight through our enterprise API interface structures.' },
  { step: '02', name: 'Secure Pickup', desc: 'Vehicles check in via digital credentials, logging multi-point inspection checks.' },
  { step: '03', name: 'Intelligent Transit', desc: 'Dynamic route models actively bypass construction lines and traffic block points.' },
  { step: '04', name: 'Live System Tracking', desc: 'Continuous state validation updates directly viewable via target system portals.' },
  { step: '05', name: 'Verified Delivery', desc: 'Digital sign-off matching instantly triggers invoice release logs.' },
];

export default function ProcessTimeline() {
  return (
    <section className="py-32 max-w-7xl mx-auto px-4 relative z-10 overflow-hidden">
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 48px)',
        }}
      />
      <div
        className="absolute bottom-0 left-1/2 -z-10 pointer-events-none"
        style={{
          width: '700px',
          height: '300px',
          marginLeft: '-350px',
          background: 'radial-gradient(ellipse at bottom, rgba(37,99,235,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="text-center max-w-3xl mx-auto mb-24 space-y-4">
        <div className="text-xs font-bold tracking-widest text-brand-orange uppercase">The Lifecycle Blueprint</div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight">Streamlined Execution Flow</h2>
      </div>

      <div className="relative">
        <div
          className="absolute left-0 w-full hidden lg:block"
          style={{
            top: '50%',
            height: '2px',
            transform: 'translateY(-50%)',
            WebkitTransform: 'translateY(-50%)',
            backgroundColor: 'rgba(255,255,255,0.05)',
          }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
          {workflowSteps.map(proc => (
            <div
              key={proc.step}
              className="border border-white/5 p-6 rounded-2xl space-y-4 hover:border-white/10 transition-colors duration-200"
              style={{
                backgroundColor: 'rgba(17,24,39,0.35)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
              }}
            >
              <div
                className="w-8 h-8 rounded-lg font-mono text-xs font-bold flex items-center justify-center border border-blue-500/20 text-blue-400"
                style={{ backgroundColor: 'rgba(37,99,235,0.4)' }}
              >
                {proc.step}
              </div>
              <h4 className="text-lg font-bold text-white">{proc.name}</h4>
              <p className="text-xs text-[#94A3B8] leading-relaxed">{proc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}