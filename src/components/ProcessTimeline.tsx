import React from 'react';

interface Step {
  number: number;
  title: string;
  description: string;
  revealClass: string;
}

const steps: Step[] = [
  {
    number: 1,
    title: 'Contato Inicial',
    description: 'Envio das informações e do histórico pelo WhatsApp de forma acolhedora e sem burocracia.',
    revealClass: 'reveal-left delay-100'
  },
  {
    number: 2,
    title: 'Análise Técnica',
    description: 'Auditoria gratuita dos laudos, relatórios terapêuticos e cálculo da renda líquida per capita.',
    revealClass: 'reveal-left delay-200'
  },
  {
    number: 3,
    title: 'Ajuizamento Rápido',
    description: 'Ingresso com a Ação Judicial perante a Justiça Federal para reverter a decisão do INSS.',
    revealClass: 'reveal-right delay-300'
  },
  {
    number: 4,
    title: 'Vitória & Atrasados',
    description: 'Concessão do benefício de 1 salário mínimo e liberação dos valores acumulados desde o início.',
    revealClass: 'reveal-right delay-400'
  }
];

export const ProcessTimeline: React.FC = () => {
  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-brand-warmBg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-up">
          <span className="text-brand-amberDark font-bold text-xs sm:text-sm uppercase tracking-widest block mb-2">Transparência Total</span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-brand-navy tracking-tight">
            Como Funciona o Atendimento com o Dr. Thiago Andrade
          </h2>
          <p className="text-slate-600 mt-4 text-base">
            Processo simplificado e pensado para quem já tem uma rotina intensa de cuidados com a família.
          </p>
        </div>

        {/* Timeline 4 Steps (Left 2 from left, Right 2 from right) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {steps.map((step) => (
            <div key={step.number} className={`bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative text-center hover:border-brand-amber/40 transition-colors ${step.revealClass}`}>
              <div className="size-12 rounded-full bg-brand-navy text-brand-amber font-heading font-bold text-lg flex items-center justify-center mx-auto mb-4 border-2 border-brand-amber shadow-sm">
                {step.number}
              </div>
              <h3 className="font-heading font-bold text-base text-brand-navy mb-2">{step.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
