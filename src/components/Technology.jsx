import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const techCards = [
  { title: 'Real-time Telemetry Maps', metrics: '15ms latency updates', features: ['Live Coordinate Streams', 'Automated Geo-fencing alerts', 'Hardware level GPS arrays'] },
  { title: 'Dynamic Route Optimizers', metrics: '14% Average fuel cuts', features: ['Predictive traffic adaptation', 'Consolidated hub planning', 'Weather system warning bypass'] },
  { title: 'Predictive Analytics Systems', metrics: '99.2% Predictive precision', features: ['Machine learning ETA models', 'Automated breakdown detection', 'Maintenance cycle projection'] },
];

export default function Technology() {
  return (
    <section id="technology" className="py-32 max-w-7xl mx-auto px-4 relative z-10">
      <div
        className="absolute inset-0 -z-10 pointer-events-none overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '100% 56px',
        }}
      />
      <div
        className="absolute top-0 left-1/2 -z-10 pointer-events-none"
        style={{
          width: '600px',
          height: '300px',
          marginLeft: '-300px',
          background: 'radial-gradient(ellipse at top, rgba(37,99,235,0.1) 0%, transparent 70%)',
        }}
      />

      <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
        <div className="text-xs font-bold tracking-widest text-brand-orange uppercase">SaaS Architecture</div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight">Logistics Powered By Code</h2>
        <p className="text-[#94A3B8] text-lg font-light">Eliminate uncertainty with structural telemetry pipelines metrics tracking toolsets.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {techCards.map((tech, idx) => (
          <motion.div
            key={tech.title}
            initial={{ opacity: 0, y: 30, rotateX: 12 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.25, 1, 0.5, 1] }}
            whileHover={{
              y: -6,
              boxShadow: '0 24px 48px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.1)',
              transition: { duration: 0.2 },
            }}
            className="p-8 rounded-2xl border border-white/5 flex flex-col justify-between group cursor-default"
            style={{
              backgroundColor: 'rgba(17,24,39,0.35)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
              transformOrigin: 'bottom center',
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
                {tech.features.map(feat => (
                  <li key={feat} className="flex items-center gap-3 text-sm text-[#94A3B8]">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="pt-8 mt-8 flex items-center justify-between text-xs font-mono text-gray-500 group-hover:text-white transition-colors"
              style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
            >
              <span>MODULE_ID // 0{idx + 1}</span>
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-white/5 p-8 rounded-3xl"
        style={{
          backgroundColor: 'rgba(17,24,39,0.25)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
        }}
      >
        <div className="lg:col-span-5 space-y-6">
          <div className="w-2 h-2 rounded-full bg-brand-orange" />
          <h3 className="text-2xl font-bold tracking-tight text-white">Full-Stack Freight Interfaces</h3>
          <p className="text-[#94A3B8] text-sm leading-relaxed font-light">
            Manage order manifests programmatically. From local sorting lines to long-distance dispatch coordination paths, view exactly how freight clusters travel inside your network grids with automated verification notifications.
          </p>
        </div>
        <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white flex items-center justify-center p-4">
          <img src="/img1.jpg" alt="P2P Workflow" loading="lazy" className="w-full h-auto object-contain max-h-[380px] rounded-lg" />
        </div>
      </motion.div>
    </section>
  );
}