/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { ScrollProgress } from './components/ScrollProgress';
import { Hero } from './components/Hero';
import { WhoWeAre } from './components/WhoWeAre';
import { WhatWeDo } from './components/WhatWeDo';
import { OurWork } from './components/OurWork';
import { HowWeWork } from './components/HowWeWork';
import { ProductShowcase } from './components/ProductShowcase';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ServicePillar } from './types';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [selectedPillar, setSelectedPillar] = useState<ServicePillar | null>(null);

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#faf9f7] text-[#1a1c1b] font-['Inter'] relative">
      {/* High-End Splash Screen with bottom-to-top gradient reveal */}
      {showSplash && (
        <SplashScreen
          forceShow={showSplash}
          onComplete={() => setShowSplash(false)}
        />
      )}

      {/* Spring-smoothed top scroll progress indicator */}
      <ScrollProgress />

      {/* Main Content Sections */}
      <main className="w-full flex flex-col">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Who We Are */}
        <WhoWeAre />

        {/* Section 3: What We Do */}
        <WhatWeDo onSelectPillar={(pillar) => setSelectedPillar(pillar)} />

        {/* Section 4: Our Work */}
        <OurWork />

        {/* Section 5: How We Work */}
        <HowWeWork />

        {/* Section 6: Product in Development (Deep Burgundy Showcase) */}
        <ProductShowcase />

        {/* Section 7: Contact Form */}
        <ContactSection />
      </main>

      {/* Section 8: Footer */}
      <Footer />

      {/* Interactive Project/Service Inspection Modal */}
      <ProjectModal
        pillar={selectedPillar}
        onClose={() => setSelectedPillar(null)}
        onContactClick={handleScrollToContact}
      />
    </div>
  );
}
