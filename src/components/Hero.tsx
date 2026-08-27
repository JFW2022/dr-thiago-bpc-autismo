import React from 'react';
import { HeartHandshake, CheckCircle2, Calculator, MessageCircle, Lock, Award, FileCheck, AlertTriangle, XCircle, Scale, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-brand-navy via-brand-navyDark to-brand-navy text-white pt-10 pb-20 md:py-24 overflow-hidden border-b border-brand-amber/20">
      {/* Dynamic Background Light Accents */}
      <div className="particle w-3 h-3 top-1/4 left-10" />
      <div className="particle w-4 h-4 top-1/2 right-16" style={{ animationDelay: '2s' }} />
      <div className="particle w-2 h-2 top-3/4 left-1/3" style={{ animationDelay: '4s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Stamp Badge & Tagline */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand-navyCard border border-brand-amber/30 text-brand-amberLight text-xs sm:text-sm font-semibold shadow-md">
              <img
                src="/logo-thiago-andrade-stamp.jpg"
                alt="Selo Thiago Andrade"
                className="size-5 rounded-full object-cover"
              />
              <span>Atendimento Humanizado & Responsável em Todo o Brasil</span>
            </div>

            {/* Main Headline H1 */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-5xl tracking-tight leading-[1.18]">
              Seu filho tem <span className="text-gradient-amber">Autismo (TEA)</span> e o INSS negou o benefício <span className="text-white underline decoration-brand-amber decoration-4 underline-offset-8">BPC/LOAS?</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              O escritório <strong>Thiago Andrade Advocacia</strong> atua com dedicação integral perante a Justiça Federal para anular negativas indevidas do INSS. As despesas reais com tratamentos multidisciplinares, medicamentos e terapias são abatidas da renda familiar para garantir <strong>1 salário mínimo todo mês</strong> e o <strong>pagamento de todos os atrasados</strong>.
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
                <span>Atendimento presencial no RJ e 100% online nacional</span>
              </div>
            </div>

            {/* Hero Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#simulador"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 shimmer-btn text-slate-950 font-extrabold text-base px-8 py-4 rounded-xl shadow-xl hover:scale-[1.03] transition-transform duration-300"
              >
                <Calculator className="size-5" />
                <span>Simular Viabilidade do BPC</span>
              </a>
              <a
                href="https://wa.me/5521981822004?text=Ol%C3%A1%2C%20Dr.%20Thiago%20Andrade!%20Gostaria%20de%20uma%20avalia%C3%A7%C3%A3o%20urgente%20sobre%20o%20BPC%20do%20meu%20filho%20com%20Autismo."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-base px-6 py-4 rounded-xl border border-brand-amber/30 transition-colors"
              >
                <MessageCircle className="size-5 text-brand-whatsapp" />
                <span>WhatsApp: (21) 98182-2004</span>
              </a>
            </div>

            {/* Badges Bar */}
            <div className="pt-6 border-t border-brand-amber/20 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-300">
              <span className="flex items-center gap-1.5"><ShieldCheck className="size-4 text-brand-amber" /> OAB Regularizada</span>
              <span className="flex items-center gap-1.5"><Lock className="size-4 text-brand-amber" /> Sigilo Total</span>
              <span className="flex items-center gap-1.5"><Award className="size-4 text-brand-amber" /> Defesa Especializada em TEA</span>
              <span className="flex items-center gap-1.5"><FileCheck className="size-4 text-brand-amber" /> Avaliação Documental Sem Custo</span>
            </div>

          </div>

          {/* Hero Right Card */}
          <div className="lg:col-span-5">
            <div className="glass-navy p-6 sm:p-8 rounded-2xl border border-brand-amber/30 shadow-2xl relative">
              <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-brand-amber to-brand-amberDark text-slate-950 font-bold text-xs uppercase px-4 py-1 rounded-full shadow-md">
                Informativo para Mães e Pais
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/logo-thiago-andrade-stamp.jpg"
                  alt="Thiago Andrade Selo"
                  className="size-12 rounded-full border border-brand-amber/40 shadow-inner"
                />
                <div>
                  <h3 className="font-heading font-bold text-base text-white">Thiago Andrade Advocacia</h3>
                  <span className="text-xs text-brand-amberLight font-medium">Reversão de Negativas do INSS</span>
                </div>
              </div>
              
              <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                O sistema eletrônico do INSS costuma emitir indeferimentos automáticos por alegação de renda ou falta de incapacidade. <strong>Veja como a Justiça restaura o direito:</strong>
              </p>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-200 mb-6">
                <li className="flex items-start gap-2.5 bg-brand-navyDark/40 p-2.5 rounded-lg border border-slate-700">
                  <XCircle className="size-4 text-rose-400 shrink-0 mt-0.5" />
                  <div><strong>Superação do critério de renda:</strong> O Juiz desconta todos os gastos com terapias, médicos e remédios.</div>
                </li>
                <li className="flex items-start gap-2.5 bg-brand-navyDark/40 p-2.5 rounded-lg border border-slate-700">
                  <XCircle className="size-4 text-rose-400 shrink-0 mt-0.5" />
                  <div><strong>Autismo Grau 1:</strong> A Lei Berenice Piana equipara o autista à pessoa com deficiência sem distinção de grau.</div>
                </li>
                <li className="flex items-start gap-2.5 bg-brand-navyDark/40 p-2.5 rounded-lg border border-slate-700">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div><strong>Valores Atrasados:</strong> Pagamento acumulado com juros e correção desde o primeiro requerimento.</div>
                </li>
              </ul>

              <a
                href="https://wa.me/5521981822004?text=Ol%C3%A1%2C%20Dr.%20Thiago%20Andrade!%20O%20INSS%20negou%20meu%20pedido%20de%20BPC%20e%20quero%20reverter%20na%20Justi%C3%A7a."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-amber to-brand-amberDark text-slate-950 font-bold py-3.5 px-4 rounded-xl shadow-lg hover:brightness-110 transition-all text-sm"
              >
                <Scale className="size-4" />
                <span>Reverter Negativa com Dr. Thiago Andrade</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
