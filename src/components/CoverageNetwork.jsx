import React from 'react';
import { MapPin } from 'lucide-react';

export default function CoverageNetwork() {
  return (
    <section className="py-32 max-w-7xl mx-auto px-4 relative z-10 overflow-hidden">
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.018) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />
      <div
        className="absolute top-1/2 right-0 -z-10 pointer-events-none"
        style={{
          width: '500px',
          height: '500px',
          marginTop: '-250px',
          background: 'radial-gradient(ellipse at right, rgba(37,99,235,0.08) 0%, transparent 65%)',
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-6">
          <div className="text-xs font-bold tracking-widest text-brand-orange uppercase">Strategic Footprint</div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">The Indian Economic Grid</h2>
          <p className="text-[#94A3B8] text-sm leading-relaxed font-light">
            We anchor shipping operations across crucial interstate corridors, maintaining structured cross-docking points directly connecting manufacturing centers to major maritime export terminals.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4">
            {[{ val: '28+', label: 'States Interconnected' }, { val: '450+', label: 'Hub Terminals' }].map((s, i) => (
              <div
                key={i}
                className="p-4 border border-white/5 rounded-xl"
                style={{
                  backgroundColor: 'rgba(17,24,39,0.35)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                }}
              >
                <p className="text-2xl font-bold text-white">{s.val}</p>
                <p className="text-[11px] uppercase tracking-wider text-gray-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="lg:col-span-7 p-6 rounded-2xl border border-white/5 relative overflow-hidden h-[380px] flex items-center justify-center"
          style={{
            backgroundColor: 'rgba(17,24,39,0.35)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
          }}
        >
          <div className="absolute inset-0 z-0 opacity-10">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000"
              alt="Network"
              loading="lazy"
              className="w-full h-full object-cover"
              style={{ WebkitTransform: 'translateZ(0)', transform: 'translateZ(0)' }}
            />
          </div>
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle, #F6921E 2px, transparent 2px)',
              backgroundSize: '24px 24px',
            }}
          />

          <div className="space-y-4 text-center relative z-10">
            <div
              className="inline-flex p-3 rounded-full text-blue-400 border border-blue-500/20 animate-bounce"
              style={{ backgroundColor: 'rgba(37,99,235,0.3)', willChange: 'transform' }}
            >
              <MapPin className="w-6 h-6 text-brand-orange" />
            </div>
            <p className="text-xs font-mono tracking-widest text-gray-400 uppercase">Interactive Network Matrix Grid Connected</p>
            <p className="text-[11px] text-gray-500 max-w-xs mx-auto">Seamless asset pooling orchestration active across all major industrial production hubs.</p>
          </div>
        </div>
      </div>
    </section>
  );
}