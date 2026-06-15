import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight, Navigation } from 'lucide-react';

function MagneticButton({ children, className, href, style }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { stiffness: 100, damping: 10 });
  const springY = useSpring(y, { stiffness: 100, damping: 10 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((clientX - centerX) * 0.22);
    y.set((clientY - centerY) * 0.22);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      className={className}
      style={{
        ...style,
        x: springX,
        y: springY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.a>
  );
}

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } }
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-48 pb-24 px-4 max-w-7xl mx-auto min-h-screen flex flex-col justify-center"
    >
      <div
        className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 60% 30%, rgba(37,99,235,0.13) 0%, transparent 70%)' }}
      />
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      
      {/* Glowing Laser Grid Pulses */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="laser-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#F6921E" stopOpacity="0.8" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <linearGradient id="laser-grad-v" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#2563eb" stopOpacity="0.8" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          
          {/* Horizontal Laser pulses */}
          <motion.line 
            x1="0%" y1="20%" x2="100%" y2="20%" 
            stroke="url(#laser-grad)" strokeWidth="1.5"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          />
          <motion.line 
            x1="0%" y1="60%" x2="100%" y2="60%" 
            stroke="url(#laser-grad)" strokeWidth="1.5"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 14, ease: "linear", delay: 4 }}
          />

          {/* Vertical Laser pulses */}
          <motion.line 
            x1="30%" y1="0%" x2="30%" y2="100%" 
            stroke="url(#laser-grad-v)" strokeWidth="1.5"
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear", delay: 2 }}
          />
          <motion.line 
            x1="75%" y1="0%" x2="75%" y2="100%" 
            stroke="url(#laser-grad-v)" strokeWidth="1.5"
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 16, ease: "linear", delay: 6 }}
          />
        </svg>
      </div>

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
            style={{ backgroundColor: 'rgba(30,64,175,0.3)' }}
          >
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            Next-Gen Fleet Management
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-black tracking-tight leading-[1.1]">
            Smart Logistics <br />
            <span
              style={{
                backgroundImage: 'linear-gradient(to right, #F6921E, #fb923c, #ffffff)',
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

          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-[#94A3B8] max-w-xl font-light leading-relaxed">
            Technology-driven transportation, autonomous freight forwarding, architectural warehousing, and supply chain solutions across India.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
            <MagneticButton
              href="#contact"
              className="px-8 py-4 rounded-xl bg-brand-orange text-black font-bold flex items-center gap-2 hover:bg-orange-500 transition-colors duration-300 cursor-pointer"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              Get Free Quote <ArrowUpRight className="w-5 h-5 flex-shrink-0" />
            </MagneticButton>
            <MagneticButton
              href="#technology"
              className="px-8 py-4 rounded-xl border border-white/10 text-white font-medium flex items-center gap-2 hover:bg-white/10 transition-colors duration-300 cursor-pointer"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)', WebkitTapHighlightColor: 'transparent' }}
            >
              Track Shipment
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          className="lg:col-span-6 relative"
          style={{ perspective: '1200px' }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <motion.div
              initial={{ rotateX: 8, rotateY: -6 }}
              whileInView={{ rotateX: 2, rotateY: -2 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="relative rounded-2xl border border-white/10 p-4 shadow-2xl overflow-hidden"
              style={{
                backgroundColor: 'rgba(10,15,30,0.97)',
                boxShadow: '0 32px 80px rgba(0,0,0,0.7), 0 8px 24px rgba(37,99,235,0.15), inset 0 1px 0 rgba(255,255,255,0.06)',
                transformStyle: 'preserve-3d',
                WebkitTransformStyle: 'preserve-3d',
              }}
            >
              <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'rgba(239,68,68,0.7)' }} />
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'rgba(234,179,8,0.7)' }} />
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'rgba(34,197,94,0.7)' }} />
                  <span className="text-xs text-gray-500 ml-2 font-mono">p2p-live-telemetry.io</span>
                </div>
                <span
                  className="text-[10px] px-2 py-0.5 rounded-md font-mono text-green-400"
                  style={{ backgroundColor: 'rgba(34,197,94,0.1)' }}
                >
                  Operational
                </span>
              </div>

              <div
                className="h-[360px] w-full rounded-xl relative overflow-hidden border border-white/5 flex flex-col justify-between p-4"
                style={{ backgroundColor: 'rgba(3,7,18,0.95)' }}
              >
                <div className="absolute inset-0 z-0">
                  <img
                    src="/img2.jpg"
                    alt="P2P Heavy Commercial Fleet Lineup"
                    className="w-full h-full object-cover opacity-40"
                    style={{ WebkitTransform: 'translateZ(0)', transform: 'translateZ(0)' }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, #030712 20%, rgba(3,7,18,0.3) 60%, transparent 100%)' }}
                  />
                </div>

                <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 400 200">
                  <path d="M 20 150 Q 120 30, 220 110 T 380 40" fill="none" stroke="rgba(30,41,59,0.5)" strokeWidth="3" />
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
                    style={{ backgroundColor: 'rgba(17,24,39,0.95)', boxShadow: '0 4px 12px rgba(0,0,0,0.4)' }}
                  >
                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Origin</p>
                    <p className="text-xs font-semibold text-white">Chennai Hub</p>
                  </div>
                  <div
                    className="border border-white/10 p-2.5 rounded-lg text-right"
                    style={{ backgroundColor: 'rgba(17,24,39,0.95)', boxShadow: '0 4px 12px rgba(0,0,0,0.4)' }}
                  >
                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Destination</p>
                    <p className="text-xs font-semibold text-white">Mumbai Terminal</p>
                  </div>
                </div>

                <div
                  className="relative z-20 border border-white/5 p-3 rounded-lg flex items-center justify-between"
                  style={{ backgroundColor: 'rgba(17,24,39,0.95)', boxShadow: '0 4px 12px rgba(0,0,0,0.4)' }}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md text-brand-orange" style={{ backgroundColor: 'rgba(246,146,30,0.1)' }}>
                      <Navigation className="w-4 h-4 rotate-45" />
                    </div>
                    <div>
                      <p className="text-xs font-bold">TN-01-PQ-9844</p>
                      <p className="text-[10px] text-gray-400">En route • ETA 2.5 hrs</p>
                    </div>
                  </div>
                  <p className="text-xs font-mono font-bold text-green-400">1,040 km / 1,200 km</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <div
            className="absolute -inset-4 rounded-3xl -z-10"
            style={{ background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.15) 0%, rgba(249,115,22,0.05) 60%, transparent 100%)' }}
          />
        </motion.div>
      </div>
    </section>
  );
}