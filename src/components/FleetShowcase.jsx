import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';

const fleetItems = [
  { 
    name: 'Container Linehaulers', 
    capacity: '32 Ton High-Volume FTL', 
    type: 'heavy', 
    desc: 'Long-haul interstate freight distribution optimized for secure box configurations.', 
    img: '/Linehaulers.png',
    specs: {
      range: '1,200 km operational range',
      tracking: 'GPS + GLONASS real-time stream',
      telemetry: 'Multi-axle pressure & weight checks',
      sla: '99.4% on-time delivery metric'
    }
  },
  { 
    name: 'Heavy Cargo Transports', 
    capacity: 'Multi-Axle Specialized Assets', 
    type: 'heavy', 
    desc: 'Bespoke engineered machinery moving tools structural layout components.', 
    img: '/Cargo.png',
    specs: {
      range: '800 km operational range',
      tracking: 'Dual-active hardware redundancy',
      telemetry: 'Inertial tilt & vibration sensors',
      sla: '98.9% precision movement success'
    }
  },
  { 
    name: 'Cold-Chain Fleet', 
    capacity: 'Thermal-Controlled Units', 
    type: 'heavy', 
    desc: 'Continuous automated environment telemetry logging for pharmaceuticals.', 
    img: '/Cold-Chain-Fleet.png',
    specs: {
      range: '950 km operational range',
      tracking: 'Continuous remote thermal feeds',
      telemetry: 'Automated thermal logging limits',
      sla: '99.9% temperature compliance rate'
    }
  },
  { 
    name: 'Express Delivery Fleet', 
    capacity: '3.5 Ton Fast Dispatch', 
    type: 'express', 
    desc: 'Hyper-localized high frequency urban freight drops handling rapid closeouts.', 
    img: '/Delivery-Fleet.png',
    specs: {
      range: '350 km urban radius range',
      tracking: 'LTE/5G real-time ping arrays',
      telemetry: 'Route geo-fenced safety logging',
      sla: '99.8% customer satisfaction rate'
    }
  },
];

function FleetCard({ item, onClick }) {
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
      onClick={onClick}
      className="cursor-pointer"
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

function FleetModal({ item, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md cursor-default"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
        className="relative w-full max-w-4xl rounded-3xl border border-white/10 p-8 md:p-10 overflow-hidden"
        style={{
          backgroundColor: '#0a0f1e',
          boxShadow: '0 24px 64px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.05)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow backdrop inside modal */}
        <div
          className="absolute -top-20 -right-20 w-48 h-48 rounded-full pointer-events-none -z-10"
          style={{ background: 'radial-gradient(circle, rgba(246,146,30,0.15) 0%, transparent 70%)' }}
        />

        {/* Close button at top right */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full p-2 transition-colors cursor-pointer z-20"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Left side: Image */}
          <div className="md:col-span-5 relative min-h-[240px] md:min-h-[340px] rounded-2xl overflow-hidden border border-white/5 bg-black/40">
            <img src={item.img} alt={item.name} className="absolute inset-0 w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/90 via-[#0a0f1e]/10 to-transparent" />
          </div>

          {/* Right side: Information */}
          <div className="md:col-span-7 flex flex-col justify-between space-y-6">
            <div>
              <span
                className="text-[10px] font-mono font-bold tracking-widest text-brand-orange px-2 py-0.5 rounded"
                style={{ backgroundColor: 'rgba(246,146,30,0.1)' }}
              >
                {item.capacity}
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-white mt-3 leading-tight">{item.name}</h3>
              <p className="text-sm text-gray-300 leading-relaxed font-light mt-3">{item.desc}</p>
            </div>

            <div className="w-full h-px" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }} />

            {/* Technical Specs */}
            <div className="space-y-3">
              <h4 className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest">Technical Specifications</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-white/2 rounded-xl border border-white/5">
                  <p className="text-[10px] text-gray-400 font-mono">OPERATIONAL_RANGE</p>
                  <p className="text-xs text-white font-bold mt-0.5">{item.specs.range}</p>
                </div>
                <div className="p-3 bg-white/2 rounded-xl border border-white/5">
                  <p className="text-[10px] text-gray-400 font-mono">TRACKING_DEVICE</p>
                  <p className="text-xs text-white font-bold mt-0.5">{item.specs.tracking}</p>
                </div>
                <div className="p-3 bg-white/2 rounded-xl border border-white/5">
                  <p className="text-[10px] text-gray-400 font-mono">TELEMETRY_FEEDS</p>
                  <p className="text-xs text-white font-bold mt-0.5">{item.specs.telemetry}</p>
                </div>
                <div className="p-3 bg-white/2 rounded-xl border border-white/5">
                  <p className="text-[10px] text-gray-400 font-mono">SLA_TARGET</p>
                  <p className="text-xs text-green-400 font-bold mt-0.5">{item.specs.sla}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-lg border border-white/10 text-white hover:bg-white/5 text-xs font-semibold tracking-wider transition-all cursor-pointer"
              >
                CLOSE
              </button>
              <a
                href="#contact"
                onClick={onClose}
                className="px-5 py-2.5 rounded-lg bg-brand-orange text-black hover:bg-orange-500 text-xs font-bold tracking-wider transition-all cursor-pointer"
              >
                BOOK ASSET
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function FleetShowcase() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);
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
            className="flex p-1.5 rounded-xl border border-white/10 relative"
            style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
          >
            {['all', 'heavy', 'express'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{ WebkitTapHighlightColor: 'transparent' }}
                className="relative z-10 px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors duration-300 cursor-pointer"
              >
                <span className={activeTab === tab ? 'text-black' : 'text-gray-400 hover:text-white transition-colors duration-300'}>
                  {tab}
                </span>
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 bg-brand-orange rounded-lg -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFleet.map(item => (
            <FleetCard key={item.name} item={item} onClick={() => setSelectedItem(item)} />
          ))}
        </div>
      </div>

      {createPortal(
        <AnimatePresence>
          {selectedItem && (
            <FleetModal item={selectedItem} onClose={() => setSelectedItem(null)} />
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}