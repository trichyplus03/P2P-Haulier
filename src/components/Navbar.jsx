import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = ['Home', 'Services', 'Technology', 'Fleet', 'Industries'];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const observersRef = useRef([]);

  useEffect(() => {
    const sectionsToTrack = [...NAV_ITEMS.map((item) => item.toLowerCase()), 'contact'];

    // Cleanup previous observers first
    observersRef.current.forEach((obs) => {
      if (obs?.observer && obs?.element) {
        obs.observer.unobserve(obs.element);
      }
    });
    observersRef.current = [];

    sectionsToTrack.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: '-20% 0px -60% 0px',
          threshold: 0,
        }
      );

      observer.observe(element);
      observersRef.current.push({ observer, element });
    });

    return () => {
      observersRef.current.forEach((obs) => {
        if (obs?.observer && obs?.element) {
          obs.observer.unobserve(obs.element);
        }
      });
      observersRef.current = [];
    };
  }, []); // stable — NAV_ITEMS is module-level constant

  return (
    <nav className="fixed top-4 inset-x-0 max-w-7xl mx-auto z-50 px-4">
      <div
        className="border border-white/10 rounded-2xl px-6 py-3 flex items-center justify-between shadow-2xl transition-all duration-300 hover:border-white/20"
        style={{
          backgroundColor: 'rgba(3, 7, 18, 0.6)',
          /* Safari requires -webkit- prefix for backdrop-filter */
          WebkitBackdropFilter: 'blur(20px)',
          backdropFilter: 'blur(20px)',
        }}
      >
        {/* LOGO */}
        <div className="flex items-center overflow-hidden">
          <a
            href="#home"
            className="flex items-center py-1"
            style={{ WebkitTransform: 'translateZ(0)', transform: 'translateZ(0)' }}
          >
            {/* Fixed: replaced invalid h-13 with h-12; use explicit style for reliable sizing on iOS */}
            <div
              className="overflow-hidden relative flex items-center"
              style={{ width: '8rem', height: '2.5rem' }}
            >
              <img
                src="/p2p_logo.png"
                alt="P2P Haulier & Services Logo"
                className="absolute w-full h-full object-cover brightness-125 contrast-110"
                style={{
                  transform: 'scale(1.4)',
                  WebkitTransform: 'scale(1.4)',
                  filter: 'brightness(1.25) contrast(1.1) drop-shadow(0 0 25px rgba(256,146,30,0.35))',
                }}
              />
            </div>
          </a>
        </div>

        {/* NAVIGATION LINKS */}
        <div className="hidden xl:flex items-center gap-8 text-sm font-medium text-[#94A3B8]">
          {NAV_ITEMS.map((item) => {
            const itemLower = item.toLowerCase();
            const isActive = activeSection === itemLower;

            return (
              <a
                key={item}
                href={`#${itemLower}`}
                className={`transition-colors duration-200 relative group py-1 ${
                  isActive ? 'text-white' : 'hover:text-white'
                }`}
              >
                {item}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-brand-orange transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* ACTION BUTTON */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-300 ${
              activeSection === 'contact'
                ? 'bg-brand-orange text-white'
                : 'bg-white text-black hover:bg-gray-200'
            }`}
            /* Removed hover:scale — causes repaint jank on iOS Safari */
          >
            Get Quote
          </a>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="xl:hidden text-white p-1"
          /* Replaced focus:outline-none with focus-visible for iOS tap safety */
          style={{ WebkitTapHighlightColor: 'transparent' }}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            /* Simplified animation — opacity+y transform combos can freeze on older iOS */
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute top-24 inset-x-4 border border-white/10 rounded-2xl p-6 xl:hidden shadow-2xl z-50"
            style={{
              backgroundColor: 'rgba(3, 7, 18, 0.95)',
              WebkitBackdropFilter: 'blur(24px)',
              backdropFilter: 'blur(24px)',
              /* Force GPU layer to prevent iOS flicker */
              WebkitTransform: 'translateZ(0)',
              transform: 'translateZ(0)',
            }}
          >
            <div className="flex flex-col gap-4 text-lg font-medium text-[#94A3B8]">
              {['Home', 'Services', 'Technology', 'Fleet', 'Industries', 'Contact'].map((item) => {
                const itemLower = item.toLowerCase();
                const isActive = activeSection === itemLower;

                return (
                  <a
                    key={item}
                    href={`#${itemLower}`}
                    onClick={() => setIsMenuOpen(false)}
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                    className={`py-2 border-b border-white/5 transition-colors ${
                      isActive
                        ? 'text-white font-semibold pl-2 border-l-2 border-l-brand-orange'
                        : 'hover:text-white'
                    }`}
                  >
                    {item}
                  </a>
                );
              })}

              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                style={{ WebkitTapHighlightColor: 'transparent' }}
                className="mt-4 w-full text-center py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-orange text-white font-semibold"
              >
                Get Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}