import React from 'react';
import { MapPin, Award, CheckCircle2, Scale } from 'lucide-react';

export const AboutLawyer: React.FC = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-gradient-to-b from-brand-navy via-brand-navyDark to-brand-navy text-white border-t border-brand-amber/20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-up">
          <span className="text-brand-amberLight font-bold text-xs sm:text-sm uppercase tracking-widest block mb-2">Quem Cuidará do seu Caso</span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
            Advocacia Especializada & Atendimento Individualizado
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Official Photo & Stamp Visual Card */}
          <div className="md:col-span-5 text-center reveal-left">
            <div className="relative inline-block">
              <div className="rounded-3xl bg-gradient-to-tr from-brand-amber to-brand-navyLight p-1 shadow-2xl mx-auto max-w-sm">
                <div className="w-full h-full rounded-3xl bg-brand-navyCard flex flex-col items-center justify-center p-8 text-center border border-brand-amber/30 space-y-5">
                  <div className="relative">
                    <img
                      src="/logo-thiago-andrade-stamp.jpg"
                      alt="Dr. Thiago Andrade - Advogado OAB RJ 260.276"
                      className="size-40 sm:size-48 rounded-full object-cover shadow-2xl border-4 border-brand-amber"
                    />
                    <div className="absolute bottom-0 right-0 bg-brand-amber text-slate-950 p-2.5 rounded-full shadow-lg">
                      <Scale className="size-5" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-heading font-extrabold text-2xl text-white">Dr. Thiago Andrade</h3>
                    <div className="inline-block mt-1 bg-brand-amber/20 text-brand-amberLight text-xs font-bold px-3 py-1 rounded-full border border-brand-amber/40">
                      Advogado – OAB/RJ 260.276
                    </div>
                    <span className="flex items-center justify-center gap-1.5 text-xs text-slate-300 mt-2.5">
                      <MapPin className="size-3.5 text-brand-amber" /> Rio de Janeiro - RJ
                    </span>
                  </div>

                  {/* Trust Pillars */}
                  <div className="grid grid-cols-2 gap-3 w-full pt-4 border-t border-slate-700/80 text-left text-xs">
                    <div className="bg-brand-navyDark/70 p-3 rounded-xl border border-slate-800">
                      <span className="text-brand-amber font-bold block text-sm">Individualizado</span>
                      <span className="text-slate-400">Atendimento Direto</span>
                    </div>
                    <div className="bg-brand-navyDark/70 p-3 rounded-xl border border-slate-800">
                      <span className="text-brand-amber font-bold block text-sm">Todo o Brasil</span>
                      <span className="text-slate-400">Suporte Digital</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Official Bio & Social Proof Content */}
          <div className="md:col-span-7 space-y-6 reveal-right delay-200">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-amber/20 text-brand-amberLight text-xs font-bold uppercase tracking-wider">
              <Award className="size-3.5" />
              Experiência & Credibilidade
            </div>

            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white leading-tight">
              Dr. Thiago Andrade
              <span className="block text-lg sm:text-xl font-normal text-brand-amberLight mt-1">
                Advogado – OAB/RJ 260.276
              </span>
            </h2>

            <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-medium">
              Atuação em Direito Previdenciário, com atendimento individualizado para análise de BPC/LOAS e outros benefícios.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              O escritório <strong>Thiago Andrade Advocacia</strong> conduz cada caso com rigor técnico e sensibilidade humana, analisando criteriosamente relatórios médicos, laudos terapêuticos e comprovantes de despesas para estruturar pedidos sólidos perante o INSS e a Justiça Federal.
            </p>

            {/* Social Proof & Credibility Points */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 bg-brand-navyDark/60 p-3.5 rounded-xl border border-brand-amber/20">
                <CheckCircle2 className="size-5 text-brand-amber shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200">
                  <strong>Atendimento Direto:</strong> Você fala diretamente com o profissional responsável pela condução do seu caso.
                </span>
              </div>
              <div className="flex items-start gap-3 bg-brand-navyDark/60 p-3.5 rounded-xl border border-brand-amber/20">
                <CheckCircle2 className="size-5 text-brand-amber shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200">
                  <strong>Análise Documental Criteriosa:</strong> Auditoria preventiva de laudos para evitar inconsistências nos órgãos oficiais.
                </span>
              </div>
              <div className="flex items-start gap-3 bg-brand-navyDark/60 p-3.5 rounded-xl border border-brand-amber/20">
                <CheckCircle2 className="size-5 text-brand-amber shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200">
                  <strong>Suporte Transparente:</strong> Comunicação contínua e esclarecimento de cada etapa do processo.
                </span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#simulador"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-brand-amber to-brand-amberDark text-slate-950 font-extrabold px-8 py-4 rounded-xl shadow-xl hover:brightness-110 transition-all text-sm uppercase tracking-wide"
              >
                <span>VERIFICAR MEU CASO COM DR. THIAGO</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
