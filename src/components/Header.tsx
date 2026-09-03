import React from 'react';
import { FileSearch } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 bg-brand-navy/95 backdrop-blur-md border-b border-brand-amber/20 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        
        {/* Official Logo */}
        <a href="#" className="flex-shrink-0 flex items-center group transition-transform duration-300 hover:scale-[1.02]">
          <img
            src="/logo-thiago-andrade-horizontal.jpg"
            alt="Thiago Andrade Advocacia"
            className="h-11 sm:h-12 w-auto object-contain rounded-lg shadow-sm"
          />
        </a>

        {/* Clean Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-slate-200">
          <a
            href="#direitos"
            className="hover:text-brand-amberLight transition-colors whitespace-nowrap"
          >
            Direitos TEA
          </a>
          <a
            href="#inss-negou"
            className="text-brand-amber hover:text-brand-amberLight transition-colors font-semibold whitespace-nowrap"
          >
            INSS Negou?
          </a>
          <a
            href="#simulador"
            className="hover:text-brand-amberLight transition-colors whitespace-nowrap"
          >
            Questionário
          </a>
          <a
            href="#sobre"
            className="hover:text-brand-amberLight transition-colors whitespace-nowrap"
          >
            Equipe Jurídica
          </a>
          <a
            href="#depoimentos"
            className="hover:text-brand-amberLight transition-colors whitespace-nowrap"
          >
            Depoimentos
          </a>
          <a
            href="#faq"
            className="hover:text-brand-amberLight transition-colors whitespace-nowrap"
          >
            Dúvidas
          </a>
        </nav>

        {/* CTA Button Header (Clean, single-line, no wrapping) */}
        <div className="flex-shrink-0">
          <a
            href="#simulador"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-amber to-brand-amberDark text-slate-950 font-extrabold px-6 py-3 rounded-full text-xs sm:text-sm shadow-md hover:shadow-xl hover:brightness-110 transition-all duration-300 hover:scale-105 whitespace-nowrap uppercase tracking-wider"
          >
            <FileSearch className="size-4 shrink-0" />
            <span>VERIFICAR MEU CASO</span>
          </a>
        </div>

      </div>
    </header>
  );
};
