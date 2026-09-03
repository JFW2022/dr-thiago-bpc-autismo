import React from 'react';
import { ShieldCheck, MapPin, Clock } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <aside className="bg-brand-navyDark text-slate-300 text-xs py-2 px-4 border-b border-brand-amber/15">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center size-2 rounded-full bg-brand-amber animate-ping" />
          <span className="font-medium text-slate-200">
            Acolhimento Jurídico Especializado em Autismo (TEA) & BPC/LOAS
          </span>
        </div>
        <div className="hidden md:flex items-center gap-5 text-xs text-slate-400">
          <span className="flex items-center gap-1.5 text-slate-300">
            <MapPin className="size-3.5 text-brand-amber" /> Rio de Janeiro - RJ (Atendimento Nacional)
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="size-3.5 text-brand-amber" /> Advocacia Regularizada
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="size-3.5 text-brand-amber" /> Análise Prévia Sem Custo
          </span>
        </div>
      </div>
    </aside>
  );
};
