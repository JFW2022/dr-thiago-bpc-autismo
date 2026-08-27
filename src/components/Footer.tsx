import React from 'react';
import { MapPin, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navyDark text-slate-400 text-xs py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Brand Display in Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <img
            src="/logo-thiago-andrade-horizontal.jpg"
            alt="Thiago Andrade - Advogado Trabalhista & Previdenciário"
            className="h-11 w-auto object-contain rounded border border-brand-amber/20"
          />
        </div>

        {/* Location & Contact Details */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-slate-300 text-xs">
          <span className="flex items-center gap-1.5">
            <MapPin className="size-4 text-brand-amber" /> Rio de Janeiro - RJ
          </span>
          <a
            href="https://wa.me/5521981822004"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-brand-amber transition-colors"
          >
            <MessageCircle className="size-4 text-brand-whatsapp" /> (21) 98182-2004
          </a>
          <span>Atendimento Presencial & Online em Todo o Brasil</span>
        </div>

        <p className="max-w-2xl mx-auto leading-relaxed text-slate-400">
          Atuação ética e transparente em conformidade com as diretrizes do Código de Ética e Disciplina da OAB. O conteúdo deste site tem caráter estritamente informativo para orientação de direitos fundamentais.
        </p>

        <div className="pt-4 border-t border-slate-800/80 text-slate-500 text-[11px]">
          &copy; {new Date().getFullYear()} Thiago Andrade Advocacia. Todos os direitos reservados.
        </div>

      </div>
    </footer>
  );
};
