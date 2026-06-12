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
    <div
      className="min-h-screen text-white font-sans antialiased overflow-x-hidden"
      style={{ backgroundColor: '#030712' }}
    >
      <Navbar />
      <main>
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