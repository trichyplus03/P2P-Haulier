import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin } from 'lucide-react';

const regionalHubs = [
  { id: 'delhi', name: 'Delhi NCR Hub', x: '45%', y: '25%', stats: '82 active loads • SLA 99.4%' },
  { id: 'mumbai', name: 'Mumbai Terminal', x: '25%', y: '58%', stats: '114 active loads • SLA 99.1%' },
  { id: 'bengaluru', name: 'Bengaluru Hub', x: '35%', y: '78%', stats: '76 active loads • SLA 99.6%' },
  { id: 'chennai', name: 'Chennai Dock Terminal', x: '45%', y: '82%', stats: '94 active loads • SLA 99.2%' },
  { id: 'kolkata', name: 'Kolkata Cross-Dock', x: '75%', y: '45%', stats: '52 active loads • SLA 98.9%' },
];

export default function CoverageNetwork() {
  const [hoveredHub, setHoveredHub] = useState(null);

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
          className="lg:col-span-7 p-6 rounded-2xl border border-white/5 relative overflow-hidden h-[380px] flex flex-col justify-between"
          style={{
            backgroundColor: 'rgba(17,24,39,0.35)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
          }}
        >
          {/* Map Grid Canvas Area */}
          <div className="relative w-full flex-1 min-h-[220px]">
            {/* SVG Interconnecting Routes */}
            <svg className="absolute inset-0 w-full h-full stroke-blue-500/10 fill-none" strokeWidth="1.5">
              {/* Route lines */}
              <line x1="45%" y1="25%" x2="25%" y2="58%" />
              <line x1="25%" y1="58%" x2="35%" y2="78%" />
              <line x1="35%" y1="78%" x2="45%" y2="82%" />
              <line x1="45%" y1="82%" x2="75%" y2="45%" />
              <line x1="75%" y1="45%" x2="45%" y2="25%" />
              <line x1="25%" y1="58%" x2="45%" y2="82%" />
              <line x1="45%" y1="25%" x2="35%" y2="78%" />

              {/* Active flowing data coordinate streams */}
              <motion.line
                x1="45%" y1="25%" x2="25%" y2="58%"
                className="stroke-brand-orange/40"
                strokeWidth="2"
                strokeDasharray="6, 8"
                animate={{ strokeDashoffset: [0, -28] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />
              <motion.line
                x1="25%" y1="58%" x2="45%" y2="82%"
                className="stroke-brand-orange/40"
                strokeWidth="2"
                strokeDasharray="6, 8"
                animate={{ strokeDashoffset: [0, 28] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              />
              <motion.line
                x1="45%" y1="82%" x2="75%" y2="45%"
                className="stroke-brand-orange/40"
                strokeWidth="2"
                strokeDasharray="6, 8"
                animate={{ strokeDashoffset: [0, -28] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
              />
            </svg>

            {/* Hub interactive nodes */}
            {regionalHubs.map(hub => {
              const isHovered = hoveredHub?.id === hub.id;
              return (
                <div
                  key={hub.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group p-4"
                  style={{ left: hub.x, top: hub.y }}
                  onMouseEnter={() => setHoveredHub(hub)}
                  onMouseLeave={() => setHoveredHub(null)}
                >
                  <div className="relative">
                    {/* Ring ping */}
                    <span className={`absolute -inset-1.5 rounded-full bg-brand-orange/30 animate-ping transition-transform duration-300 ${isHovered ? 'scale-150 bg-brand-orange/50' : ''}`} />
                    {/* Inner point dot */}
                    <div className={`w-3.5 h-3.5 rounded-full border border-white/20 transition-all duration-300 ${isHovered ? 'bg-white scale-125 shadow-[0_0_12px_#ffffff]' : 'bg-brand-orange'}`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Telemetry metadata log block */}
          <div
            className="w-full border-t border-white/5 pt-4 mt-2 flex items-center justify-between min-h-[58px]"
          >
            <AnimatePresence mode="wait">
              {hoveredHub ? (
                <motion.div
                  key={hoveredHub.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15 }}
                  className="flex items-center gap-4 w-full"
                >
                  <div className="p-2 rounded-lg bg-brand-orange/10 border border-brand-orange/20 text-brand-orange flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-mono font-bold text-white uppercase tracking-wider">{hoveredHub.name}</p>
                    <p className="text-[11px] text-green-400 font-mono mt-0.5">{hoveredHub.stats}</p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="default-telemetry"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15 }}
                  className="flex items-center gap-4 w-full text-left"
                >
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">Telemetry Interface Matrix</p>
                    <p className="text-[11px] text-gray-500 font-mono mt-0.5">Hover on a node to load coordinates and current SLA parameters.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}