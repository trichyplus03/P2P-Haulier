import React from 'react';

const workflowSteps = [
  { step: "01", name: "Instant Booking", desc: "Upload manifest file formats straight through our enterprise API interface structures." },
  { step: "02", name: "Secure Pickup", desc: "Vehicles check in via digital credentials, logging multi-point inspection checks." },
  { step: "03", name: "Intelligent Transit", desc: "Dynamic route models actively bypass construction lines and traffic block points." },
  { step: "04", name: "Live System Tracking", desc: "Continuous state validation updates directly viewable via target system portals." },
  { step: "05", name: "Verified Delivery", desc: "Digital sign-off matching instantly triggers invoice release logs." }
];

export default function ProcessTimeline() {
  return (
    <section className="py-32 max-w-7xl mx-auto px-4 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-24 space-y-4">
        <div className="text-xs font-bold tracking-widest text-brand-orange uppercase">The Lifecycle Blueprint</div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight">Streamlined Execution Flow</h2>
      </div>

      <div className="relative">
        {/* Fix: -translate-y-1/2 on absolute line can misfire on iOS — use top + transform via style */}
        <div
          className="absolute left-0 w-full h-[2px] bg-white/5 hidden lg:block"
          style={{ top: '50%', transform: 'translateY(-50%)', WebkitTransform: 'translateY(-50%)' }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
          {workflowSteps.map((proc, pIdx) => (
            <div
              key={pIdx}
              className="border border-white/5 p-6 rounded-2xl space-y-4 hover:border-white/10 transition-colors duration-200"
              style={{
                // Fix: bg-gray-900/30 + backdrop-blur-md opacity shorthand unreliable on older Safari
                backgroundColor: 'rgba(17,24,39,0.3)',
                WebkitBackdropFilter: 'blur(12px)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div
                className="w-8 h-8 rounded-lg font-mono text-xs font-bold flex items-center justify-center border border-blue-500/20 shadow-inner text-blue-400"
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