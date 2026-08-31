import React from 'react';
import { MapPin, FileSearch } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 bg-brand-navy/95 backdrop-blur-md border-b border-brand-amber/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between">
        
        {/* Official Logo Display */}
        <a href="#" className="flex items-center gap-3 group transition-transform duration-300 hover:scale-[1.02]">
          <img
            src="/logo-thiago-andrade-horizontal.jpg"
            alt="Thiago Andrade - Advogado Trabalhista & Previdenciário"
            className="h-10 sm:h-13 w-auto object-contain rounded-md shadow-sm border border-brand-amber/20"
          />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-200">
          <a href="#direitos" className="hover:text-brand-amberLight transition-colors">Direitos no Autismo</a>
          <a href="#inss-negou" className="hover:text-brand-amberLight transition-colors font-semibold text-brand-amber">INSS Negou?</a>
          <a href="#simulador" className="hover:text-brand-amberLight transition-colors">Questionário</a>
          <a href="#como-funciona" className="hover:text-brand-amberLight transition-colors">Como Funciona</a>
          <a href="#sobre" className="hover:text-brand-amberLight transition-colors">Dr. Thiago Andrade</a>
          <a href="#faq" className="hover:text-brand-amberLight transition-colors">Dúvidas</a>
        </nav>

        {/* CTA Button Header & RJ Location */}
        <div className="flex items-center gap-4">
          <div className="hidden xl:flex items-center gap-1.5 text-xs text-slate-300 border-r border-slate-700 pr-4">
            <MapPin className="size-3.5 text-brand-amber" />
            <span>Rio de Janeiro - RJ</span>
          </div>
          <a
            href="#simulador"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-amber to-brand-amberDark text-slate-950 font-extrabold px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 uppercase tracking-wider"
          >
            <FileSearch className="size-4" />
            <span>VERIFICAR MEU CASO</span>
          </a>
        </div>

      </div>
    </header>
  );
};
