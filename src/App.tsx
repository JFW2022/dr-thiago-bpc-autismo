import React from 'react';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { RightsGrid } from './components/RightsGrid';
import { EligibilityQuiz } from './components/EligibilityQuiz';
import { ProcessTimeline } from './components/ProcessTimeline';
import { AboutLawyer } from './components/AboutLawyer';
import { FaqAccordion } from './components/FaqAccordion';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-brand-warmBg text-slate-800">
      <TopBar />
      <Header />
      <main className="flex-1">
        <Hero />
        <RightsGrid />
        <EligibilityQuiz />
        <ProcessTimeline />
        <AboutLawyer />
        <FaqAccordion />
        <CtaBanner />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
