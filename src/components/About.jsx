import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Users, Activity, Cpu } from 'lucide-react';

export default function About() {
  const bulletPoints = [
    "Comprehensive nationwide physical operational hubs",
    "Advanced live system visibility tracking interfaces",
    "Rigid security protocols safeguarding valuable custom freight"
  ];

  const cardStyle = {
    backgroundColor: 'rgba(17, 24, 39, 0.3)',
    WebkitBackdropFilter: 'blur(4px)',
    backdropFilter: 'blur(4px)',
  };

  return (
    <section className="py-32 border-y border-white/5 relative z-10"
      style={{ backgroundColor: 'rgba(3, 7, 18, 0.2)' }}
    >
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
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
                <div className="mt-1 p-0.5 rounded-full text-brand-orange"
                  style={{ backgroundColor: 'rgba(246,146,30,0.2)' }}
                >
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* BENTO STATISTICS OVERVIEW */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="p-6 rounded-2xl border border-white/5 space-y-2" style={cardStyle}>
              <Award className="w-8 h-8 text-brand-orange" />
              <h4 className="font-bold">Premium Quality</h4>
              <p className="text-xs text-gray-400">Consistently meeting and exceeding rigid customer SLAs.</p>
            </div>
            {/* Fix: translate-y-4 can render incorrectly on older iOS — use marginTop instead */}
            <div className="p-6 rounded-2xl border border-white/5 space-y-2" style={{ ...cardStyle, marginTop: '1rem' }}>
              <Users className="w-8 h-8 text-blue-400" />
              <h4 className="font-bold">Expert Fleet Crew</h4>
              <p className="text-xs text-gray-400">Professional drivers managed programmatically.</p>
            </div>
          </div>
          {/* Fix: -translate-y-4 negative translate can misfire on iOS — use negative marginTop */}
          <div className="space-y-4" style={{ marginTop: '-1rem' }}>
            <div className="p-6 rounded-2xl border border-white/5 space-y-2" style={cardStyle}>
              <Activity className="w-8 h-8 text-emerald-400" />
              <h4 className="font-bold">Continuous Stream</h4>
              <p className="text-xs text-gray-400">24/7 centers maintaining continuous oversight patterns.</p>
            </div>
            <div className="p-6 rounded-2xl border border-white/5 space-y-2" style={{ ...cardStyle, marginTop: '1rem' }}>
              <Cpu className="w-8 h-8 text-purple-400" />
              <h4 className="font-bold">Proprietary API</h4>
              <p className="text-xs text-gray-400">Seamless integration into enterprise enterprise asset tooling.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}