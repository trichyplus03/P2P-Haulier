import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { CheckCircle2, Award, Users, Activity, Cpu } from 'lucide-react';

function BentoCard({ children, style }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-50, 50], [7, -7]), { stiffness: 180, damping: 22 });
  const rotateY = useSpring(useTransform(x, [-50, 50], [-7, 7]), { stiffness: 180, damping: 22 });

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
    <div style={{ perspective: '800px' }} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <motion.div
        className="p-6 rounded-2xl border border-white/5 space-y-2"
        style={{
          backgroundColor: 'rgba(17,24,39,0.45)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.04)',
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          WebkitTransformStyle: 'preserve-3d',
          ...style,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function About() {
  const bulletPoints = [
    'Comprehensive nationwide physical operational hubs',
    'Advanced live system visibility tracking interfaces',
    'Rigid security protocols safeguarding valuable custom freight',
  ];

  return (
    <section
      className="py-32 border-y border-white/5 relative z-10 overflow-hidden"
      style={{ backgroundColor: 'rgba(3,7,18,0.2)' }}
    >
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none -z-0"
        style={{ background: 'radial-gradient(ellipse at top right, rgba(246,146,30,0.07) 0%, transparent 65%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none -z-0"
        style={{ background: 'radial-gradient(ellipse at bottom left, rgba(37,99,235,0.08) 0%, transparent 65%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-6"
        >
          <div className="text-xs font-bold tracking-widest text-brand-orange uppercase">Corporate Backbone</div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">Driving Logistics Through Technology & Integrity</h2>
          <p className="text-[#94A3B8] text-base leading-relaxed font-light">
            P2P Haulier & Services balances deep operational logistics mastery with cutting-edge analytical tools. We operate a highly synchronized multi-modal transport layout, engineered specifically to wipe away execution blindspots for modern enterprise businesses.
          </p>
          <div className="space-y-4 pt-4">
            {bulletPoints.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="mt-1 p-0.5 rounded-full text-brand-orange" style={{ backgroundColor: 'rgba(246,146,30,0.2)' }}>
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <BentoCard>
              <Award className="w-8 h-8 text-brand-orange" />
              <h4 className="font-bold">Premium Quality</h4>
              <p className="text-xs text-gray-400">Consistently meeting and exceeding rigid customer SLAs.</p>
            </BentoCard>
            <BentoCard style={{ marginTop: '1rem' }}>
              <Users className="w-8 h-8 text-blue-400" />
              <h4 className="font-bold">Expert Fleet Crew</h4>
              <p className="text-xs text-gray-400">Professional drivers managed programmatically.</p>
            </BentoCard>
          </div>
          <div className="space-y-4" style={{ marginTop: '-1rem' }}>
            <BentoCard>
              <Activity className="w-8 h-8 text-emerald-400" />
              <h4 className="font-bold">Continuous Stream</h4>
              <p className="text-xs text-gray-400">24/7 centers maintaining continuous oversight patterns.</p>
            </BentoCard>
            <BentoCard style={{ marginTop: '1rem' }}>
              <Cpu className="w-8 h-8 text-purple-400" />
              <h4 className="font-bold">Proprietary API</h4>
              <p className="text-xs text-gray-400">Seamless integration into enterprise asset tooling.</p>
            </BentoCard>
          </div>
        </div>
      </div>
    </section>
  );
}