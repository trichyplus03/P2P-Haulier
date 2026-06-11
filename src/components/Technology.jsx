import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const techCards = [
  { title: "Real-time Telemetry Maps", metrics: "15ms latency updates", features: ["Live Coordinate Streams", "Automated Geo-fencing alerts", "Hardware level GPS arrays"] },
  { title: "Dynamic Route Optimizers", metrics: "14% Average fuel cuts", features: ["Predictive traffic adaptation", "Consolidated hub planning", "Weather system warning bypass"] },
  { title: "Predictive Analytics Systems", metrics: "99.2% Predictive precision", features: ["Machine learning ETA models", "Automated breakdown detection", "Maintenance cycle projection"] }
];

export default function Technology() {
  return (
    <section id="technology" className="py-32 max-w-7xl mx-auto px-4 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
        <div className="text-xs font-bold tracking-widest text-brand-orange uppercase">SaaS Architecture</div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight">Logistics Powered By Code</h2>
        <p className="text-[#94A3B8] text-lg font-light">Eliminate uncertainty with structural telemetry pipelines metrics tracking toolsets.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {techCards.map((tech, idx) => (
          <div
            key={idx}
            className="p-8 rounded-2xl border border-white/5 flex flex-col justify-between hover:border-white/10 transition-all duration-300 group"
            style={{
              // Fix: bg-gray-900/20 + backdrop-blur-md opacity shorthand unreliable on older Safari
              backgroundColor: 'rgba(17,24,39,0.2)',
              WebkitBackdropFilter: 'blur(12px)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <div>
              <span
                className="text-[10px] uppercase font-mono font-bold tracking-widest text-brand-orange px-2.5 py-1 rounded-md"
                style={{ backgroundColor: 'rgba(246,146,30,0.1)' }}
              >
                {tech.metrics}
              </span>
              <h3 className="text-xl font-bold mt-4 mb-6">{tech.title}</h3>
              <ul className="space-y-3">
                {tech.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-sm text-[#94A3B8]">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-8 border-t border-white/5 mt-8 flex items-center justify-between text-xs font-mono text-gray-500 group-hover:text-white transition-colors duration-200">
              <span>MODULE_ID // 0{idx + 1}</span>
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>
          </div>
        ))}
      </div>

      {/* PROCESS FLOW BANNER */}
      <div
        className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-white/5 p-8 rounded-3xl"
        style={{
          backgroundColor: 'rgba(17,24,39,0.1)',
          WebkitBackdropFilter: 'blur(12px)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <div className="lg:col-span-5 space-y-6">
          <div className="w-2 h-2 rounded-full bg-brand-orange" />
          <h3 className="text-2xl font-bold tracking-tight text-white">Full-Stack Freight Interfaces</h3>
          <p className="text-[#94A3B8] text-sm leading-relaxed font-light">
            Manage order manifests programmatically. From local sorting lines to long-distance dispatch coordination paths, view exactly how freight clusters travel inside your network grids with automated verification notifications.
          </p>
        </div>
        <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative bg-white flex items-center justify-center p-4">
          <img
            src="/img1.jpg"
            alt="P2P App Booking Workflow Graphic Illustration"
            className="w-full h-auto object-contain max-h-[380px] rounded-lg"
            style={{
              WebkitTransform: 'translateZ(0)',
              transform: 'translateZ(0)',
            }}
          />
        </div>
      </div>
    </section>
  );
}