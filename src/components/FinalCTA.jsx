import React from 'react';
import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50, rotateX: 10 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        style={{
          perspective: '1200px',
          transformOrigin: 'bottom center',
        }}
      >
        <div
          className="relative rounded-3xl border border-brand-blue/40 p-12 md:p-20 text-center overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #030712 0%, rgba(37,99,235,0.2) 50%, #111827 100%)',
            boxShadow: '0 24px 64px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
            WebkitTransform: 'translate3d(0,0,0)',
            transform: 'translate3d(0,0,0)',
          }}
        >
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.18) 0%, transparent 70%)' }}
          />
          <div
            className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)' }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />

          <div className="max-w-2xl mx-auto space-y-8 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-black tracking-tight leading-none"
            >
              Ready To Move Smarter?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[#94A3B8] text-base md:text-lg font-light leading-relaxed"
            >
              Optimize your logistics operations, lower execution friction parameters, and scale shipping volumes through technology-driven transportation frameworks.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center gap-4 pt-2"
            >
              <a
                href="#contact"
                className="px-8 py-4 rounded-xl bg-white text-black font-bold flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors duration-300"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                Request Enterprise Quote
              </a>
              <a
                href="#contact"
                className="px-8 py-4 rounded-xl border border-white/10 text-white font-medium hover:bg-white/10 transition-colors duration-300"
                style={{ backgroundColor: 'rgba(255,255,255,0.05)', WebkitTapHighlightColor: 'transparent' }}
              >
                Contact Strategy Team
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}