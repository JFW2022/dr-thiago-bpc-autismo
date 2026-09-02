import React from 'react';
import { CheckCircle2, ArrowDown, FileSearch, Heart, Sparkles } from 'lucide-react';

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

          {/* Hero Right Visual: Therapy Image with Autism Puzzle (Face protected) */}
          <div className="lg:col-span-5 reveal-right delay-200">
            <div className="relative group">
              
              {/* Outer Golden Glow Border */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-brand-amber via-brand-amberLight to-brand-navyLight rounded-3xl blur-md opacity-40 group-hover:opacity-70 transition duration-500" />
              
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-brand-amber/40 shadow-2xl bg-brand-navyCard">
                <img
                  src="/autismo-terapia.jpg"
                  alt="Criança com autismo em sessão de terapia com peças de quebra-cabeça e blocos de desenvolvimento"
                  className="w-full h-[400px] sm:h-[440px] object-cover object-center transform transition duration-700 group-hover:scale-105"
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navyDark/90 via-brand-navyDark/20 to-transparent" />

                {/* Top Badge: Proteção & Acolhimento */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 bg-brand-navy/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-brand-amber/40 text-brand-amberLight text-xs font-bold shadow-lg">
                  <Heart className="size-3.5 fill-brand-amber text-brand-amber" />
                  <span>Acolhimento & Suporte Terapêutico</span>
                </div>

                {/* Bottom Floating Info Card */}
                <div className="absolute bottom-4 inset-x-4 glass-navy p-4 rounded-xl border border-brand-amber/30 text-left shadow-lg">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-bold text-brand-amberLight flex items-center gap-1.5">
                      <Sparkles className="size-3.5 text-brand-amber" />
                      Terapias (ABA, Fono e TO)
                    </span>
                    <span className="text-[11px] text-slate-300 font-semibold bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-md border border-emerald-500/30">
                      Abatimento na Renda
                    </span>
                  </div>
                  <p className="text-xs text-slate-200 leading-snug">
                    Os custos com o desenvolvimento e saúde do seu filho são considerados perante a Justiça para viabilizar o benefício mensal.
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
