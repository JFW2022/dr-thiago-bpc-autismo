import React from 'react';
import { Scale } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-slate-400 text-xs py-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <Scale className="size-5 text-brand-gold" />
          <span className="font-heading font-bold text-sm text-white">DR. THIAGO ADVOCACIA</span>
        </div>
        <p className="max-w-2xl mx-auto leading-relaxed">
          Atuação ética em conformidade com o Código de Ética e Disciplina da OAB. Este site possui caráter meramente informativo e de esclarecimento de direitos fundamentais.
        </p>
        <p className="text-slate-500">
          &copy; {new Date().getFullYear()} Dr. Thiago Advocacia. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
