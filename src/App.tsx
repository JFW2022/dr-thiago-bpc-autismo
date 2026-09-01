import React from 'react';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { RightsGrid } from './components/RightsGrid';
import { InssDeniedSection } from './components/InssDeniedSection';
import { EligibilityQuiz } from './components/EligibilityQuiz';
import { ProcessTimeline } from './components/ProcessTimeline';
import { AboutLawyer } from './components/AboutLawyer';
import { Testimonials } from './components/Testimonials';
import { FaqAccordion } from './components/FaqAccordion';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { useScrollReveal } from './hooks/useScrollReveal';

export const App: React.FC = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen flex flex-col bg-brand-warmBg text-slate-800 overflow-x-hidden">
      <TopBar />
      <Header />
      <main className="flex-1">
        <Hero />
        <RightsGrid />
        <InssDeniedSection />
        <EligibilityQuiz />
        <ProcessTimeline />
        <AboutLawyer />
        <Testimonials />
        <FaqAccordion />
        <CtaBanner />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
