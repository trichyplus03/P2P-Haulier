import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ShieldCheck, Users, Globe2, Award } from 'lucide-react';

function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const RunningCounter = ({ from = 0, to, duration = 1500, suffix = '' }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let startTime = null;
          const animate = (time) => {
            if (!startTime) startTime = time;
            const progress = Math.min((time - startTime) / duration, 1);
            setCount(Math.floor(progress * (to - from) + from));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => { observer.disconnect(); };
  }, [from, to, duration]);

  return <span ref={ref} className="font-mono">{formatNumber(count)}{suffix}</span>;
};

function TiltCard({ children, delay }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-60, 60], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-60, 60], [-8, 8]), { stiffness: 200, damping: 20 });

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
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay }}
      style={{
        perspective: '800px',
        transformStyle: 'preserve-3d',
        WebkitTransformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          WebkitTransformStyle: 'preserve-3d',
          backgroundColor: 'rgba(37, 99, 235, 0.12)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
        }}
        className="p-6 rounded-2xl border border-brand-blue/15 flex flex-col justify-between hover:border-brand-blue/40 transition-colors duration-300 h-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default function TrustMetrics() {
  const metrics = [
    { icon: Users, title: 'Active Clients', value: 1250, suffix: '+', desc: 'Enterprise partners trusting our ecosystem daily.' },
    { icon: Globe2, title: 'Kilometers Covered', value: 450000, suffix: ' km', desc: 'Heavy linehaul distribution across primary commercial grids.' },
    { icon: ShieldCheck, title: 'SLA Success Rate', value: 99, suffix: '%', desc: 'Precision timing verified via programmatic ledger checkpoints.' },
    { icon: Award, title: 'Fleet Strength', value: 350, suffix: '+', desc: 'Multi-modal transport vehicles active on public telemetry.' },
  ];

  return (
    <section
      className="pt-16 pb-6 max-w-7xl mx-auto px-4 relative z-10 mt-12"
      style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {metrics.map((metric, idx) => (
          <TiltCard key={metric.title} delay={idx * 0.03}>
            <div>
              <div
                className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-brand-orange mb-4"
                style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
              >
                <metric.icon className="w-5 h-5" />
              </div>
              <p className="text-xs font-bold tracking-widest text-[#94A3B8] uppercase mb-1">{metric.title}</p>
              <h3 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-2">
                <RunningCounter to={metric.value} suffix={metric.suffix} />
              </h3>
            </div>
            <p className="text-sm text-gray-500 font-light leading-relaxed">{metric.desc}</p>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}