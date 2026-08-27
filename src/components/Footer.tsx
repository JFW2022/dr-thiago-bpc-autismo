import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navyDark text-slate-400 text-xs py-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <img
            src="/logo-thiago-andrade.jpg"
            alt="Thiago Andrade - Advogado Trabalhista & Previdenciário"
            className="h-10 w-auto object-contain rounded border border-brand-taupe/20 mx-auto"
          />
        </div>
        <p className="max-w-2xl mx-auto leading-relaxed text-slate-400">
          Atuação ética em conformidade com o Código de Ética e Disciplina da OAB. Este site possui caráter meramente informativo e de esclarecimento de direitos fundamentais.
        </p>
        <p className="text-slate-500">
          &copy; {new Date().getFullYear()} Thiago Andrade Advocacia. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
