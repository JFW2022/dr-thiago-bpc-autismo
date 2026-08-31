import React from 'react';
import { CheckCircle2, ArrowDown, FileSearch } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-brand-navy via-brand-navyDark to-brand-navy text-white pt-10 pb-20 md:py-24 overflow-hidden border-b border-brand-amber/20">
      {/* Dynamic Background Light Accents */}
      <div className="particle w-3 h-3 top-1/4 left-10" />
      <div className="particle w-4 h-4 top-1/2 right-16" style={{ animationDelay: '2s' }} />
      <div className="particle w-2 h-2 top-3/4 left-1/3" style={{ animationDelay: '4s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content (Enters from Left) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left reveal-left">
            
            {/* Stamp Badge & Tagline */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand-navyCard border border-brand-amber/30 text-brand-amberLight text-xs sm:text-sm font-semibold shadow-md">
              <img
                src="/logo-thiago-andrade-stamp.jpg"
                alt="Selo Thiago Andrade"
                className="size-5 rounded-full object-cover"
              />
              <span>Atendimento Humanizado & Especializado em BPC/LOAS</span>
            </div>

            {/* Main Headline H1 */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-5xl tracking-tight leading-[1.18]">
              Seu filho tem <span className="text-gradient-amber">autismo?</span> Veja se ele pode ter direito ao <span className="text-white underline decoration-brand-amber decoration-4 underline-offset-8">BPC/LOAS.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              O BPC pode garantir <strong>um salário mínimo mensal</strong> à pessoa com deficiência que preencha os requisitos. Faça uma avaliação inicial do seu caso.
            </p>

            {/* Benefit Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 text-sm text-slate-200 text-left">
              <div className="flex items-center gap-2.5 bg-brand-navyCard/60 p-2.5 rounded-lg border border-brand-amber/15">
                <CheckCircle2 className="size-5 text-brand-amber shrink-0" />
                <span>Autismo Leve (Nível 1), Moderado ou Severo</span>
              </div>
              <div className="flex items-center gap-2.5 bg-brand-navyCard/60 p-2.5 rounded-lg border border-brand-amber/15">
                <CheckCircle2 className="size-5 text-brand-amber shrink-0" />
                <span>Dedução de gastos com terapias (ABA, Fono, TO)</span>
              </div>
              <div className="flex items-center gap-2.5 bg-brand-navyCard/60 p-2.5 rounded-lg border border-brand-amber/15">
                <CheckCircle2 className="size-5 text-brand-amber shrink-0" />
                <span>Não exige tempo prévio de contribuição</span>
              </div>
              <div className="flex items-center gap-2.5 bg-brand-navyCard/60 p-2.5 rounded-lg border border-brand-amber/15">
                <CheckCircle2 className="size-5 text-brand-amber shrink-0" />
                <span>Atendimento no Rio de Janeiro e em todo o Brasil</span>
              </div>
            </div>

            {/* Clean Single CTA Button (Leads directly to Quiz/Simulador) */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start">
              <a
                href="#simulador"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 shimmer-btn text-slate-950 font-extrabold text-base px-10 py-4 rounded-xl shadow-xl hover:scale-[1.03] transition-transform duration-300 uppercase tracking-wide"
              >
                <FileSearch className="size-5" />
                <span>VERIFICAR MEU CASO</span>
                <ArrowDown className="size-4 animate-bounce" />
              </a>
            </div>

          </div>

          {/* Hero Right Visual Card */}
          <div className="lg:col-span-5 reveal-right delay-200">
            <div className="glass-navy p-6 sm:p-8 rounded-2xl border border-brand-amber/30 shadow-2xl relative">
              <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-brand-amber to-brand-amberDark text-slate-950 font-bold text-xs uppercase px-4 py-1 rounded-full shadow-md">
                Guia Rápido
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/logo-thiago-andrade-stamp.jpg"
                  alt="Thiago Andrade Selo"
                  className="size-12 rounded-full border border-brand-amber/40 shadow-inner"
                />
                <div>
                  <h3 className="font-heading font-bold text-base text-white">Thiago Andrade Advocacia</h3>
                  <span className="text-xs text-brand-amberLight font-medium">Direito Previdenciário & TEA</span>
                </div>
              </div>
              
              <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                Entenda os 3 pilares essenciais para solicitar o benefício do BPC/LOAS para o autismo:
              </p>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-200 mb-6">
                <li className="flex items-start gap-2.5 bg-brand-navyDark/40 p-2.5 rounded-lg border border-slate-700">
                  <CheckCircle2 className="size-4 text-brand-amber shrink-0 mt-0.5" />
                  <div><strong>1. Diagnóstico Clínico:</strong> Laudos e relatórios médicos atualizados com o CID de TEA.</div>
                </li>
                <li className="flex items-start gap-2.5 bg-brand-navyDark/40 p-2.5 rounded-lg border border-slate-700">
                  <CheckCircle2 className="size-4 text-brand-amber shrink-0 mt-0.5" />
                  <div><strong>2. Análise de Renda Real:</strong> Consideração e abatimento dos gastos com tratamentos contínuos.</div>
                </li>
                <li className="flex items-start gap-2.5 bg-brand-navyDark/40 p-2.5 rounded-lg border border-slate-700">
                  <CheckCircle2 className="size-4 text-brand-amber shrink-0 mt-0.5" />
                  <div><strong>3. Avaliação Documental:</strong> Revisão especializada antes de submeter o pedido.</div>
                </li>
              </ul>

              <a
                href="#simulador"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-amber to-brand-amberDark text-slate-950 font-bold py-3.5 px-4 rounded-xl shadow-lg hover:brightness-110 transition-all text-sm uppercase tracking-wide"
              >
                <span>Fazer Avaliação Inicial Gratuita</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
