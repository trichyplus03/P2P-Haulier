import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const workflowSteps = [
  { step: '01', name: 'Instant Booking', desc: 'Upload manifest file formats straight through our enterprise API interface structures.' },
  { step: '02', name: 'Secure Pickup', desc: 'Vehicles check in via digital credentials, logging multi-point inspection checks.' },
  { step: '03', name: 'Intelligent Transit', desc: 'Dynamic route models actively bypass construction lines and traffic block points.' },
  { step: '04', name: 'Live System Tracking', desc: 'Continuous state validation updates directly viewable via target system portals.' },
  { step: '05', name: 'Verified Delivery', desc: 'Digital sign-off matching instantly triggers invoice release logs.' },
];

export default function ProcessTimeline() {
  const containerRef = useRef(null);
  
  // Track scroll progress of the timeline section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Smooth the scroll line animation
  const scaleProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="py-32 max-w-7xl mx-auto px-4 relative z-10 overflow-hidden">
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
        {/* Horizontal timeline line for desktop - passing through the center of 32px (h-8) step indicators at y=40px (top-10) */}
        <div className="absolute top-10 left-10 right-10 h-[2px] bg-white/5 hidden lg:block -z-0">
          <motion.div
            className="h-full bg-brand-orange origin-left shadow-[0_0_12px_rgba(246,146,30,0.5)]"
            style={{ scaleX: scaleProgress }}
          />
        </div>

        {/* Vertical timeline line for mobile - passing through the center of 32px step indicators at x=40px (left-10) */}
        <div className="absolute left-10 top-10 bottom-10 w-[2px] bg-white/5 block lg:hidden -z-0">
          <motion.div
            className="w-full bg-brand-orange origin-top shadow-[0_0_12px_rgba(246,146,30,0.5)]"
            style={{ scaleY: scaleProgress }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
          {workflowSteps.map((proc, idx) => (
            <motion.div
              key={proc.step}
              initial={{ opacity: 0, y: 40, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.25, 1, 0.5, 1] }}
              whileHover={{
                y: -6,
                boxShadow: '0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1)',
                transition: { duration: 0.25 },
              }}
              className="border border-white/5 p-6 rounded-2xl space-y-4 cursor-default"
              style={{
                backgroundColor: 'rgba(17,24,39,0.35)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                transformOrigin: 'bottom center',
                transformStyle: 'preserve-3d',
                WebkitTransformStyle: 'preserve-3d',
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}