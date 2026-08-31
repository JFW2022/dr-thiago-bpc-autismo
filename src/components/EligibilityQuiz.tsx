import React, { useState } from 'react';
import { Sparkles, CheckCheck, MessageCircle, ArrowRight } from 'lucide-react';

export const EligibilityQuiz: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [answers, setAnswers] = useState({
    step1: '',
    step2: '',
    step3: ''
  });

  const handleSelect = (currentStep: number, answer: string) => {
    if (currentStep === 1) {
      setAnswers((prev) => ({ ...prev, step1: answer }));
      setStep(2);
    } else if (currentStep === 2) {
      setAnswers((prev) => ({ ...prev, step2: answer }));
      setStep(3);
    } else if (currentStep === 3) {
      setAnswers((prev) => ({ ...prev, step3: answer }));
      setStep(4);
    }
  };

  const getWhatsAppUrl = () => {
    const phone = '5521981822004';
    const message = `Olá, Dr. Thiago Andrade! Preenchi o questionário inicial no site sobre o BPC/LOAS para Autismo:%0A- Laudo/Diagnóstico: ${encodeURIComponent(answers.step1)}%0A- Situação no INSS: ${encodeURIComponent(answers.step2)}%0A- Gastos com Saúde/Terapias: ${encodeURIComponent(answers.step3)}%0A%0AQuero analisar meu caso e entender se o benefício pode ser solicitado.`;
    return `https://wa.me/${phone}?text=${message}`;
  };

  return (
    <section id="simulador" className="py-16 md:py-24 bg-gradient-to-b from-brand-navy via-brand-navyDark to-brand-navy text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header (Reveal Up) */}
        <div className="text-center mb-10 reveal-up">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-amber/20 text-brand-amberLight text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="size-3.5" />
            Avaliação Inicial (1 Minuto)
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl">
            Verifique as Informações Iniciais do seu Caso
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
            Responda a 3 perguntas rápidas para direcionar seu atendimento ao Dr. Thiago Andrade.
          </p>
        </div>

        {/* Quiz Card Container (Reveal Scale & Up) */}
        <div className="glass-navy p-6 sm:p-10 rounded-2xl border border-brand-amber/30 shadow-2xl reveal-scale delay-200">
          
          {/* Progress bar */}
          <div className="w-full bg-slate-800 rounded-full h-1.5 mb-8">
            <div
              className="bg-brand-amber h-1.5 rounded-full transition-all duration-500"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>

          {/* Step 1 */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between text-xs font-bold text-brand-amberLight">
                <span>ETAPA 1 DE 3</span>
                <span>DIAGNÓSTICO & LAUDO</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">O solicitante já possui laudo médico com diagnóstico de Autismo (TEA)?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button
                  onClick={() => handleSelect(1, 'Sim, laudo definitivo com CID')}
                  className="p-4 rounded-xl border border-slate-700 bg-brand-navyCard/60 hover:border-brand-amber hover:bg-brand-amber/10 text-left transition-all font-medium text-sm reveal-left delay-100 group"
                >
                  <span className="block font-bold text-brand-amberLight mb-1 flex items-center justify-between">
                    Sim
                    <ArrowRight className="size-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                  Laudo com CID-10/CID-11
                </button>
                <button
                  onClick={() => handleSelect(1, 'Em processo de investigação/fechamento')}
                  className="p-4 rounded-xl border border-slate-700 bg-brand-navyCard/60 hover:border-brand-amber hover:bg-brand-amber/10 text-left transition-all font-medium text-sm reveal-up delay-200 group"
                >
                  <span className="block font-bold text-brand-amberLight mb-1 flex items-center justify-between">
                    Em Investigação
                    <ArrowRight className="size-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                  Aguardando consultas ou laudo
                </button>
                <button
                  onClick={() => handleSelect(1, 'Ainda não tem laudo')}
                  className="p-4 rounded-xl border border-slate-700 bg-brand-navyCard/60 hover:border-brand-amber hover:bg-brand-amber/10 text-left transition-all font-medium text-sm reveal-right delay-300 group"
                >
                  <span className="block font-bold text-brand-amberLight mb-1 flex items-center justify-between">
                    Não
                    <ArrowRight className="size-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                  Preciso de orientações
                </button>
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between text-xs font-bold text-brand-amberLight">
                <span>ETAPA 2 DE 3</span>
                <span>HISTÓRICO NO INSS</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">Você já deu entrada no pedido pelo INSS?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button
                  onClick={() => handleSelect(2, 'Sim, o INSS já NEGOU o pedido')}
                  className="p-4 rounded-xl border border-slate-700 bg-brand-navyCard/60 hover:border-brand-amber hover:bg-brand-amber/10 text-left transition-all font-medium text-sm group"
                >
                  <span className="block font-bold text-rose-400 mb-1 flex items-center justify-between">
                    Foi Negado pelo INSS
                    <ArrowRight className="size-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                  Gostaria de avaliar a negativa
                </button>
                <button
                  onClick={() => handleSelect(2, 'Ainda não dei entrada no INSS')}
                  className="p-4 rounded-xl border border-slate-700 bg-brand-navyCard/60 hover:border-brand-amber hover:bg-brand-amber/10 text-left transition-all font-medium text-sm group"
                >
                  <span className="block font-bold text-brand-amberLight mb-1 flex items-center justify-between">
                    Nunca dei entrada
                    <ArrowRight className="size-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                  Primeiro requerimento
                </button>
                <button
                  onClick={() => handleSelect(2, 'Em análise no INSS há muito tempo')}
                  className="p-4 rounded-xl border border-slate-700 bg-brand-navyCard/60 hover:border-brand-amber hover:bg-brand-amber/10 text-left transition-all font-medium text-sm group"
                >
                  <span className="block font-bold text-amber-400 mb-1 flex items-center justify-between">
                    Em Análise
                    <ArrowRight className="size-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                  Demora excessiva do INSS
                </button>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between text-xs font-bold text-brand-amberLight">
                <span>ETAPA 3 DE 3</span>
                <span>DESPESAS MENSAIS COM SAÚDE & CUIDADOS</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">A família possui gastos com terapias, remédios, fonoaudiologia ou alimentação especial?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  onClick={() => handleSelect(3, 'Sim, temos gastos significativos com saúde')}
                  className="p-4 rounded-xl border border-slate-700 bg-brand-navyCard/60 hover:border-brand-amber hover:bg-brand-amber/10 text-left transition-all font-medium text-sm group"
                >
                  <span className="block font-bold text-emerald-400 mb-1 flex items-center justify-between">
                    Sim, temos despesas comprováveis
                    <ArrowRight className="size-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                  Terapias (ABA, Fono, TO), medicamentos, fraldas
                </button>
                <button
                  onClick={() => handleSelect(3, 'Poucos gastos ou uso majoritário do SUS')}
                  className="p-4 rounded-xl border border-slate-700 bg-brand-navyCard/60 hover:border-brand-amber hover:bg-brand-amber/10 text-left transition-all font-medium text-sm group"
                >
                  <span className="block font-bold text-brand-amberLight mb-1 flex items-center justify-between">
                    Poucos gastos / SUS
                    <ArrowRight className="size-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                  Tratamento pelo SUS ou poucas despesas
                </button>
              </div>
            </div>
          )}

          {/* Result Screen (Clean, ethical disclaimer & transition) */}
          {step === 4 && (
            <div className="text-center space-y-6 py-4 reveal-scale">
              <div className="size-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCheck className="size-8" />
              </div>
              
              <div className="space-y-3 max-w-xl mx-auto">
                <p className="text-base sm:text-lg text-white font-semibold leading-relaxed">
                  Pelas informações fornecidas, seu caso apresenta pontos que merecem uma análise mais detalhada.
                </p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  O próximo passo é avaliar as informações e os documentos para entender se o benefício pode ser solicitado.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 shimmer-btn text-slate-950 font-extrabold text-base px-9 py-4 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300 uppercase tracking-wide"
                >
                  <MessageCircle className="size-5 fill-slate-950" />
                  <span>QUERO ANALISAR MEU CASO</span>
                </a>
              </div>

              <p className="text-[11px] text-slate-400">
                * O preenchimento deste questionário tem caráter meramente informativo e não determina sozinho a concessão do benefício.
              </p>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
