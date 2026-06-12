import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const fleetItems = [
  { name: 'Container Linehaulers', capacity: '32 Ton High-Volume FTL', type: 'heavy', desc: 'Long-haul interstate freight distribution optimized for secure box configurations.', img: '/Linehaulers.png' },
  { name: 'Heavy Cargo Transports', capacity: 'Multi-Axle Specialized Assets', type: 'heavy', desc: 'Bespoke engineered machinery moving tools structural layout components.', img: '/Cargo.png' },
  { name: 'Cold-Chain Fleet', capacity: 'Thermal-Controlled Units', type: 'heavy', desc: 'Continuous automated environment telemetry logging for pharmaceuticals.', img: '/Cold-Chain-Fleet.png' },
  { name: 'Express Delivery Fleet', capacity: '3.5 Ton Fast Dispatch', type: 'express', desc: 'Hyper-localized high frequency urban freight drops handling rapid closeouts.', img: '/Delivery-Fleet.png' },
];

function FleetCard({ item }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-80, 80], [10, -10]), { stiffness: 150, damping: 18 });
  const rotateY = useSpring(useTransform(x, [-80, 80], [-10, 10]), { stiffness: 150, damping: 18 });
  const brightness = useSpring(useTransform(x, [-80, 0, 80], [0.9, 1, 1.1]), { stiffness: 150, damping: 18 });

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      style={{ perspective: '900px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="group relative rounded-2xl border border-white/5 overflow-hidden flex flex-col justify-between transition-colors duration-300 hover:border-white/15"
        style={{
          backgroundColor: 'rgba(17,24,39,0.4)',
          height: '380px',
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          WebkitTransformStyle: 'preserve-3d',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        }}
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img
            src={item.img}
            alt={item.name}
            loading="lazy"
            className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500"
            style={{ filter: useTransform(brightness, b => `brightness(${b})`) }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, #030712 30%, rgba(3,7,18,0.6) 65%, transparent 100%)' }}
          />
        </div>

        <div className="p-6 space-y-2 relative z-10">
          <span
            className="text-[10px] font-mono font-bold tracking-widest text-brand-orange px-2 py-0.5 rounded"
            style={{ backgroundColor: 'rgba(246,146,30,0.1)' }}
          >
            {item.capacity}
          </span>
          <h3 className="text-xl font-bold pt-2 text-white">{item.name}</h3>
        </div>

        <div className="p-6 space-y-4 relative z-10">
          <p className="text-xs text-[#94A3B8] leading-relaxed">{item.desc}</p>
          <div className="w-full h-px" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }} />
          <div className="flex items-center justify-between text-[11px] font-mono text-gray-500">
            <span>FLEET_STATUS // AVAILABLE</span>
            <span className="text-green-400">● Online</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function FleetShowcase() {
  const [activeTab, setActiveTab] = useState('all');
  const filteredFleet = fleetItems.filter(item => activeTab === 'all' || item.type === activeTab);

  return (
    <section
      id="fleet"
      className="py-32 border-y border-white/5 relative z-10 overflow-hidden"
      style={{ backgroundColor: 'rgba(3,7,18,0.4)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none -z-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[400px] pointer-events-none -z-0"
        style={{ background: 'radial-gradient(ellipse at bottom right, rgba(246,146,30,0.06) 0%, transparent 65%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <div className="text-xs font-bold tracking-widest text-brand-orange uppercase">High Performance Assets</div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">The P2P Tactical Fleet</h2>
          </div>
          <div
            className="flex p-1.5 rounded-xl border border-white/10"
            style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
          >
            {['all', 'heavy', 'express'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{ WebkitTapHighlightColor: 'transparent' }}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors duration-200 ${activeTab === tab ? 'bg-brand-orange text-black' : 'text-gray-400 hover:text-white'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFleet.map(item => (
            <FleetCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}