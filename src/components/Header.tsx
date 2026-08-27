import React from 'react';
import { Scale, MessageCircle } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 bg-brand-navy/95 backdrop-blur-md border-b border-brand-gold/20 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo / Monogram */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="size-11 rounded-lg bg-gradient-to-br from-brand-gold to-brand-goldDark flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
            <Scale className="size-6 text-brand-navy" />
          </div>
          <div>
            <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-white block leading-none">DR. THIAGO</span>
            <span className="text-[11px] font-semibold tracking-widest text-brand-goldLight uppercase">Advocacia Previdenciária & TEA</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#direitos" className="hover:text-brand-gold transition-colors">Direitos no Autismo</a>
          <a href="#inss-negou" className="hover:text-brand-gold transition-colors">INSS Negou?</a>
          <a href="#simulador" className="hover:text-brand-gold transition-colors">Simulador</a>
          <a href="#como-funciona" className="hover:text-brand-gold transition-colors">Como Funciona</a>
          <a href="#faq" className="hover:text-brand-gold transition-colors">Dúvidas Frequentes</a>
        </nav>

        {/* CTA Button Header */}
        <a
          href="https://wa.me/558591822489?text=Ol%C3%A1%2C%20Dr.%20Thiago!%20Gostaria%20de%20avaliar%20o%20BPC%2FLOAS%20para%20meu%20filho%20autista."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 bg-brand-whatsapp hover:bg-brand-whatsappHover text-brand-navy font-bold px-4 py-2.5 rounded-full text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
        >
          <MessageCircle className="size-4 fill-brand-navy" />
          <span>Falar no WhatsApp</span>
        </a>
      </div>
    </header>
  );
};
