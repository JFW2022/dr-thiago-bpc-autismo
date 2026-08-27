import React from 'react';
import { ShieldCheck, Clock } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <aside className="bg-gradient-to-r from-brand-navy via-brand-navyCard to-brand-navy text-slate-200 text-xs sm:text-sm py-2 px-4 border-b border-brand-gold/30">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center size-2 rounded-full bg-brand-gold animate-ping" />
          <span className="font-medium text-brand-goldLight">Acolhimento Jurídico Especializado em Autismo (TEA)</span>
        </div>
        <div className="hidden md:flex items-center gap-4 text-xs text-slate-300">
          <span className="flex items-center gap-1">
            <ShieldCheck className="size-3.5 text-brand-gold" /> Atendimento em Todo o Brasil
          </span>
          <span className="flex items-center gap-1">
            <Clock className="size-3.5 text-brand-gold" /> Análise Documental Sem Custo
          </span>
        </div>
      </div>
    </aside>
  );
};
