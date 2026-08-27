import React from 'react';
import { HeartHandshake, CheckCircle2, Calculator, MessageCircle, Lock, Award, FileCheck, AlertTriangle, XCircle, Scale } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-brand-navy via-brand-navyDark to-brand-navy text-white pt-10 pb-20 md:py-24 overflow-hidden border-b border-brand-taupe/15">
      {/* Particle Light Accents */}
      <div className="particle w-3 h-3 top-1/4 left-10" />
      <div className="particle w-4 h-4 top-1/2 right-16" style={{ animationDelay: '2s' }} />
      <div className="particle w-2 h-2 top-3/4 left-1/3" style={{ animationDelay: '4s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-navyCard border border-brand-taupe/30 text-brand-taupeLight text-xs sm:text-sm font-semibold shadow-inner">
              <HeartHandshake className="size-4 text-brand-taupe" />
              <span>Advocacia Especializada em Defesa das Famílias Atípicas</span>
            </div>

            {/* Main Title (H1 SEO) */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-5xl tracking-tight leading-[1.15]">
              Seu filho tem <span className="text-brand-taupeLight">Autismo (TEA)</span> e o INSS negou o <span className="text-white underline decoration-brand-taupe underline-offset-8">BPC/LOAS?</span>
            </h1>

            {/* Subtitle / Value Prop */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              O escritório do <strong>Dr. Thiago Andrade</strong> atua para reverter negativas injustas do INSS perante a Justiça Federal. Gastos com terapias, fonoaudiologia, medicamentos e cuidados são abatidos da renda para garantir <strong>1 salário mínimo mensal</strong> e todos os <strong>valores retroativos</strong>.
            </p>

            {/* Key Benefit Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-200 text-left">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="size-5 text-brand-taupe shrink-0" />
                <span>Válido para autismo leve, moderado ou severo</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="size-5 text-brand-taupe shrink-0" />
                <span>Abatimento de gastos reais com saúde</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="size-5 text-brand-taupe shrink-0" />
                <span>Não exige contribuição prévia ao INSS</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="size-5 text-brand-taupe shrink-0" />
                <span>Atendimento no Rio de Janeiro e em todo o Brasil</span>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#simulador"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 shimmer-btn text-slate-900 font-extrabold text-base px-8 py-4 rounded-xl shadow-xl hover:scale-[1.03] transition-transform duration-300"
              >
                <Calculator className="size-5" />
                <span>Fazer Simulação de Viabilidade</span>
              </a>
              <a
                href="https://wa.me/5521981822004?text=Ol%C3%A1%2C%20Dr.%20Thiago%20Andrade!%20Gostaria%20de%20uma%20avalia%C3%A7%C3%A3o%20urgente%20sobre%20o%20BPC%20do%20meu%20filho%20com%20Autismo."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-base px-6 py-4 rounded-xl border border-brand-taupe/30 transition-colors"
              >
                <MessageCircle className="size-5 text-brand-whatsapp" />
                <span>Falar com o Dr. Thiago</span>
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-6 border-t border-brand-taupe/20 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-300">
              <span className="flex items-center gap-1.5"><Lock className="size-4 text-brand-taupe" /> Sigilo e Ética OAB</span>
              <span className="flex items-center gap-1.5"><Award className="size-4 text-brand-taupe" /> Thiago Andrade Advocacia</span>
              <span className="flex items-center gap-1.5"><FileCheck className="size-4 text-brand-taupe" /> Análise Documental Sem Custo</span>
            </div>

          </div>

          {/* Hero Interactive Card / Highlight */}
          <div className="lg:col-span-5">
            <div className="glass-navy p-6 sm:p-8 rounded-2xl border border-brand-taupe/30 shadow-2xl relative">
              <div className="absolute -top-3.5 right-6 bg-brand-taupe text-brand-navyDark font-bold text-xs uppercase px-3.5 py-1 rounded-full shadow-md">
                Aviso às Famílias
              </div>
              
              <h3 className="font-heading font-bold text-xl text-white mb-3 flex items-center gap-2">
                <AlertTriangle className="size-5 text-amber-400" />
                O que o INSS costuma negar:
              </h3>
              
              <p className="text-sm text-slate-300 mb-4">
                Muitas mães desistem ao receber a carta de indeferimento do INSS. Porém, <strong>a via judicial corrige essas distorções com base na Lei 12.764/12</strong>:
              </p>

              <ul className="space-y-3 text-sm text-slate-200 mb-6">
                <li className="flex items-start gap-2.5">
                  <XCircle className="size-5 text-rose-400 shrink-0 mt-0.5" />
                  <div><strong>Negativa por renda:</strong> No Judiciário, abatem-se terapias, consultas e medicamentos.</div>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="size-5 text-rose-400 shrink-0 mt-0.5" />
                  <div><strong>Negativa por autismo leve:</strong> A lei assegura o direito em qualquer nível de suporte.</div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="size-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div><strong>Pagamento de Retroativos:</strong> Recebimento de todos os meses desde o primeiro pedido.</div>
                </li>
              </ul>

              <a
                href="https://wa.me/5521981822004?text=Ol%C3%A1%2C%20Dr.%20Thiago%20Andrade!%20O%20INSS%20negou%20meu%20pedido%20de%20BPC%20e%20quero%20reverter%20na%20Justi%C3%A7a."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-taupe hover:bg-brand-taupeLight text-brand-navyDark font-bold py-3.5 px-4 rounded-xl shadow-lg transition-all text-sm"
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
