import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustMetrics from './components/TrustMetrics';
import Services from './components/Services';
import About from './components/About';
import Technology from './components/Technology';
import FleetShowcase from './components/FleetShowcase';
import WhyChooseUs from './components/WhyChooseUs';
import Industries from './components/Industries';
import ProcessTimeline from './components/ProcessTimeline';
import Testimonials from './components/Testimonials';
import CoverageNetwork from './components/CoverageNetwork';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-white font-sans antialiased selection:bg-brand-orange selection:text-black overflow-x-hidden">

      {/* GLOBAL AMBIENT GLOWS
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute rounded-full"
          style={{
            top: '-10%', left: '-10%',
            width: '50vw', height: '50vw',
            // Fix: bg-brand-blue/20 with blur — use rgba + filter for reliable iOS rendering
            backgroundColor: 'rgba(37,99,235,0.2)',
            filter: 'blur(120px)',
            WebkitFilter: 'blur(120px)',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            top: '30%', right: '-10%',
            width: '45vw', height: '45vw',
            backgroundColor: 'rgba(249,115,22,0.05)',
            filter: 'blur(150px)',
            WebkitFilter: 'blur(150px)',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            bottom: '10%', left: '10%',
            width: '60vw', height: '60vw',
            backgroundColor: 'rgba(37,99,235,0.1)',
            filter: 'blur(180px)',
            WebkitFilter: 'blur(180px)',
          }}
        />
       
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(31,41,55,0.065) 1px, transparent 1px), linear-gradient(to bottom, rgba(31,41,55,0.065) 1px, transparent 1px)',
            backgroundSize: '4rem 4rem',
          }}
        />
      </div> */}

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <TrustMetrics />
        <Services />
        <About />
        <Technology />
        <FleetShowcase />
        <WhyChooseUs />
        <Industries />
        <ProcessTimeline />
        <Testimonials />
        <CoverageNetwork />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}