import React from 'react';
import { Phone, Mail } from 'lucide-react';

const links1 = ['Linehaul Logistics', 'Interstate FTL', 'Cold Chain Matrix', 'Custom Port Clearance', 'Dynamic Warehousing'];
const links2 = ['API Documentation', 'Telemetry Streams', 'Predictive Mapping', 'Integrations Hub', 'Platform Security'];

const inputStyle = {
  backgroundColor: '#030712',
  fontSize: '16px',
  color: 'white',
};

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-white/5 pt-24 pb-12 relative z-10 overflow-hidden"
      style={{ backgroundColor: 'rgba(3,7,18,0.97)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none -z-0"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.015) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div
        className="absolute top-0 left-0 w-[500px] h-[400px] pointer-events-none -z-0"
        style={{ background: 'radial-gradient(ellipse at top left, rgba(37,99,235,0.07) 0%, transparent 65%)' }}
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] pointer-events-none -z-0"
        style={{ background: 'radial-gradient(ellipse at bottom right, rgba(246,146,30,0.05) 0%, transparent 65%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-16 pb-16 relative z-10">
        <div
          className="lg:col-span-5 space-y-6 border border-white/5 p-8 rounded-2xl"
          style={{
            backgroundColor: 'rgba(17,24,39,0.35)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
          }}
        >
          <h4 className="text-xl font-bold tracking-tight">Initiate System Onboarding</h4>
          <form className="space-y-4" onSubmit={e => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Corporate Name"
                autoComplete="organization"
                className="w-full px-4 py-3 border border-white/10 rounded-xl focus:outline-none focus:border-brand-orange transition-colors"
                style={inputStyle}
              />
              <input
                type="email"
                placeholder="Corporate Email"
                autoComplete="email"
                className="w-full px-4 py-3 border border-white/10 rounded-xl focus:outline-none focus:border-brand-orange transition-colors"
                style={inputStyle}
              />
            </div>
            <input
              type="text"
              placeholder="Approximate Monthly FTL Volume"
              className="w-full px-4 py-3 border border-white/10 rounded-xl focus:outline-none focus:border-brand-orange transition-colors"
              style={inputStyle}
            />
            <textarea
              placeholder="Outline specific route requirements..."
              rows={3}
              className="w-full px-4 py-3 border border-white/10 rounded-xl focus:outline-none focus:border-brand-orange transition-colors resize-none"
              style={inputStyle}
            />
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-brand-orange text-black font-bold text-sm tracking-wide uppercase shadow-lg hover:bg-orange-500 transition-colors"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              Submit Diagnostic Request
            </button>
          </form>
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h5 className="text-xs font-bold uppercase tracking-widest text-brand-orange">Capabilities</h5>
            <ul className="space-y-2.5 text-sm text-gray-400 font-light">
              {links1.map(item => (
                <li key={item} className="hover:text-white transition-colors cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="text-xs font-bold uppercase tracking-widest text-blue-400">Architecture</h5>
            <ul className="space-y-2.5 text-sm text-gray-400 font-light">
              {links2.map(item => (
                <li key={item} className="hover:text-white transition-colors cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-4 col-span-2 md:col-span-1">
            <h5 className="text-xs font-bold uppercase tracking-widest text-white">Corporate HQ</h5>
            <p className="text-xs text-gray-400 leading-relaxed font-light">
              P2P Haulier & Services Private Limited<br />
              Industrial Distribution Corridor,<br />
              Chennai, Tamil Nadu, India.
            </p>
            <div className="space-y-2 pt-2 text-xs text-gray-400 font-mono">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-brand-orange" />
                +91 44 2948 4839
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                ops@p2phaulier.in
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 font-mono gap-4 relative z-10">
        <p>© 2026 P2P Haulier & Services. All operational rights reserved.</p>
        <div className="flex gap-6">
          <span className="hover:text-white cursor-pointer transition-colors">Security Architecture</span>
          <span className="hover:text-white cursor-pointer transition-colors">SLA Framework Agreements</span>
        </div>
      </div>
    </footer>
  );
}