import React from 'react';
import { MessageCircle, MapPin } from 'lucide-react';

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
          <a href="#inss-negou" className="hover:text-brand-amberLight transition-colors">INSS Negou?</a>
          <a href="#simulador" className="hover:text-brand-amberLight transition-colors">Simulador</a>
          <a href="#como-funciona" className="hover:text-brand-amberLight transition-colors">Como Funciona</a>
          <a href="#sobre" className="hover:text-brand-amberLight transition-colors">O Escritório</a>
          <a href="#faq" className="hover:text-brand-amberLight transition-colors">Dúvidas</a>
        </nav>

        {/* CTA Button Header & RJ Location */}
        <div className="flex items-center gap-4">
          <div className="hidden xl:flex items-center gap-1.5 text-xs text-slate-300 border-r border-slate-700 pr-4">
            <MapPin className="size-3.5 text-brand-amber" />
            <span>Rio de Janeiro - RJ</span>
          </div>
          <a
            href="https://wa.me/5521981822004?text=Ol%C3%A1%2C%20Dr.%20Thiago%20Andrade!%20Gostaria%20de%20avaliar%20o%20BPC%2FLOAS%20para%20meu%20filho%20autista."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-whatsapp hover:bg-brand-whatsappHover text-slate-950 font-bold px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="size-4 fill-slate-950" />
            <span className="hidden sm:inline">WhatsApp: (21) 98182-2004</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>

      </div>
    </header>
  );
};
