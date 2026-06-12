import React from 'react';
import { motion } from 'framer-motion';

const cards = [
  { num: '01', title: 'Pan India Coverage Logistics Network', span: 'md:col-span-2', color: 'text-blue-400', bg: 'rgba(37,99,235,0.3)', desc: 'We interconnect multiple major trading zones seamlessly. Our deep geographical network reach covers vital economic corridors across India, facilitating rapid regional cross-dock transitions.' },
  { num: '02', title: 'Absolute Visibility', color: 'text-brand-orange', bg: 'rgba(246,146,30,0.1)', desc: 'Every single vehicle asset emits constant location tracking markers, verified instantly inside your operational dashboards.' },
  { num: '03', title: 'Secure Systems', color: 'text-purple-400', bg: 'rgba(168,85,247,0.1)', desc: 'Rigidly enforced lock protocols protecting heavy industrial goods and sensitive raw inputs safely.' },
  { num: '04', title: 'Dedicated Solution Support Engineering', span: 'md:col-span-2', color: 'text-emerald-400', bg: 'rgba(16,185,129,0.1)', desc: 'Forget waiting through mechanical voice queues. We provide enterprise-level logistics account engineers actively monitoring exception workflows to maximize fulfillment reliability.' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-32 px-4 max-w-7xl mx-auto relative z-10 overflow-hidden">
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '72px 100%',
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -z-10 pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          marginLeft: '-300px',
          marginTop: '-300px',
          background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
        <div className="text-xs font-bold tracking-widest text-brand-orange uppercase">Strategic Leverage</div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight">Built For Mission-Critical Logistics</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <motion.div
            key={card.num}
            initial={{ opacity: 0, y: 30, rotateX: 15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.25, 1, 0.5, 1] }}
            whileHover={{
              y: -6,
              boxShadow: '0 24px 48px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1)',
              transition: { duration: 0.2 },
            }}
            className={`p-8 rounded-2xl border border-white/5 space-y-4 cursor-default ${card.span || ''}`}
            style={{
              backgroundColor: 'rgba(17,24,39,0.35)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.03)',
              transformOrigin: 'bottom center',
            }}
          >
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${card.color}`}
              style={{ backgroundColor: card.bg }}
            >
              {card.num}
            </div>
            <h3 className="text-2xl font-bold">{card.title}</h3>
            <p className="text-sm text-[#94A3B8] leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}