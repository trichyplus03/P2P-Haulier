import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Navigation } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } }
};

export default function Hero() {
  return (
    <section id="home" className="relative pt-48 pb-24 px-4 max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="lg:col-span-6 space-y-8"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-blue/50 text-xs font-semibold tracking-wider text-blue-400 uppercase"
            style={{ backgroundColor: 'rgba(30, 64, 175, 0.3)' }}
          >
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            Next-Gen Fleet Management
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-black tracking-tight leading-[1.1]"
          >
            Smart Logistics <br />
            {/* Fix: bg-clip-text needs -webkit- prefix for iOS Safari */}
            <span
              style={{
                backgroundImage: 'linear-gradient(to right, var(--color-brand-orange, #F6921E), #fb923c, #ffffff)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
              }}
            >
              Built For Modern
            </span>{' '}
            <br />
            Enterprise.
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-[#94A3B8] max-w-xl font-light leading-relaxed"
          >
            Technology-driven transportation, autonomous freight forwarding, architectural warehousing,
            and supply chain solutions across India.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl bg-brand-orange text-black font-bold flex items-center gap-2 hover:bg-orange-500 transition-colors duration-300 shadow-xl shadow-brand-orange/20"
              /* Removed hover:scale-[1.02] — causes repaint jank on iOS Safari */
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              Get Free Quote <ArrowUpRight className="w-5 h-5" />
            </a>
            <a
              href="#technology"
              className="px-8 py-4 rounded-xl border border-white/10 text-white font-medium flex items-center gap-2 hover:bg-white/10 transition-colors duration-300"
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                /* Fix: backdrop-blur needs -webkit- prefix */
                WebkitBackdropFilter: 'blur(4px)',
                backdropFilter: 'blur(4px)',
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              Track Shipment
            </a>
          </motion.div>
        </motion.div>

        {/* HERO IMAGE CONTAINER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          className="lg:col-span-6 relative"
        >
          <div
            className="relative rounded-2xl border border-white/10 p-4 shadow-2xl overflow-hidden group"
            style={{
              backgroundColor: 'rgba(17, 24, 39, 0.4)',
              /* Fix: backdrop-blur needs -webkit- prefix */
              WebkitBackdropFilter: 'blur(24px)',
              backdropFilter: 'blur(24px)',
            }}
          >
            <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="text-xs text-gray-500 ml-2 font-mono">p2p-live-telemetry.io</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-md bg-green-500/10 text-green-400 font-mono">
                Operational
              </span>
            </div>

            <div
              className="h-[360px] w-full rounded-xl relative overflow-hidden border border-white/5 flex flex-col justify-between p-4"
              style={{ backgroundColor: 'rgba(3, 7, 18, 0.8)' }}
            >
              <div className="absolute inset-0 z-0">
                <img
                  src="/img2.jpg"
                  alt="P2P Heavy Commercial Fleet Lineup"
                  className="w-full h-full object-cover opacity-45 transition-transform duration-700"
                  /* Fix: group-hover:scale-105 on img causes GPU repaint on iOS — use a wrapper div instead */
                  style={{
                    WebkitTransform: 'translateZ(0)',
                    transform: 'translateZ(0)',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent" />
              </div>

              {/* LIVE ROUTE OVERLAY */}
              <svg
                className="absolute inset-0 w-full h-full p-0 pointer-events-none z-10"
                viewBox="0 0 400 200"
              >
                <path
                  d="M 20 150 Q 120 30, 220 110 T 380 40"
                  fill="none"
                  stroke="rgba(30, 41, 59, 0.5)"
                  strokeWidth="3"
                />
                {/* Fix: array syntax for animate can break on iOS — use keyframes object form */}
                <motion.path
                  d="M 20 150 Q 120 30, 220 110 T 380 40"
                  fill="none"
                  stroke="#F6921E"
                  strokeWidth="3"
                  strokeDasharray="10, 10"
                  animate={{ strokeDashoffset: [0, -20] }}
                  transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
                />
              </svg>

              <div className="flex justify-between relative z-20">
                <div
                  className="border border-white/10 p-2.5 rounded-lg"
                  style={{
                    backgroundColor: 'rgba(17,24,39,0.9)',
                    WebkitBackdropFilter: 'blur(12px)',
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Origin</p>
                  <p className="text-xs font-semibold text-white">Chennai Hub</p>
                </div>
                <div
                  className="border border-white/10 p-2.5 rounded-lg text-right"
                  style={{
                    backgroundColor: 'rgba(17,24,39,0.9)',
                    WebkitBackdropFilter: 'blur(12px)',
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Destination</p>
                  <p className="text-xs font-semibold text-white">Mumbai Terminal</p>
                </div>
              </div>

              <div
                className="relative z-20 border border-white/5 p-3 rounded-lg flex items-center justify-between"
                style={{
                  backgroundColor: 'rgba(17,24,39,0.8)',
                  WebkitBackdropFilter: 'blur(12px)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-brand-orange/10 text-brand-orange">
                    <Navigation className="w-4 h-4 rotate-45" />
                  </div>
                  <div>
                    <p className="text-xs font-bold">TN-01-PQ-9844</p>
                    <p className="text-[10px] text-gray-400">En route • ETA 2.5 hrs</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-mono font-bold text-green-400">1,040 km / 1,200 km</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -inset-4 bg-gradient-to-tr from-brand-blue/30 to-brand-orange/10 rounded-3xl blur-2xl z-[-1] opacity-60" />
        </motion.div>
      </div>
    </section>
  );
}