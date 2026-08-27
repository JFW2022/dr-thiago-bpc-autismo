import React, { useState } from 'react';
import { Sparkles, CheckCheck, MessageCircle } from 'lucide-react';

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
    const phone = '558591822489';
    const message = `Olá, Dr. Thiago! Fiz a simulação no site para BPC/LOAS Autismo:%0A- Laudo: ${encodeURIComponent(answers.step1)}%0A- Situação INSS: ${encodeURIComponent(answers.step2)}%0A- Gastos com Saúde: ${encodeURIComponent(answers.step3)}%0AGostaria de saber como proceder!`;
    return `https://wa.me/${phone}?text=${message}`;
  };

  return (
    <section id="simulador" className="py-16 md:py-24 bg-gradient-to-b from-brand-navy via-brand-navyCard to-brand-navy text-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/20 text-brand-goldLight text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="size-3.5" />
            Triagem Interativa Rápida (1 Minuto)
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl">
            Descubra a Viabilidade do BPC/LOAS para o seu Caso
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            Responda a 3 perguntas simples para direcionar seu atendimento ao Dr. Thiago.
          </p>
        </div>

        {/* Quiz Card Container */}
        <div className="glass-navy p-6 sm:p-10 rounded-2xl border border-brand-gold/30 shadow-2xl">
          
          {/* Step 1 */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between text-xs font-bold text-brand-goldLight">
                <span>ETAPA 1 DE 3</span>
                <span>DIAGNÓSTICO & LAUDO</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">O solicitante já possui laudo médico com CID de Autismo (TEA)?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button
                  onClick={() => handleSelect(1, 'Sim, laudo definitivo com CID')}
                  className="p-4 rounded-xl border border-slate-700 bg-brand-navyLight/50 hover:border-brand-gold hover:bg-brand-gold/10 text-left transition-all font-medium text-sm"
                >
                  <span className="block font-bold text-brand-goldLight mb-1">Sim</span>
                  Laudo com CID-10/CID-11
                </button>
                <button
                  onClick={() => handleSelect(1, 'Em processo de investigação/fechamento')}
                  className="p-4 rounded-xl border border-slate-700 bg-brand-navyLight/50 hover:border-brand-gold hover:bg-brand-gold/10 text-left transition-all font-medium text-sm"
                >
                  <span className="block font-bold text-brand-goldLight mb-1">Em Investigação</span>
                  Aguardando consultas
                </button>
                <button
                  onClick={() => handleSelect(1, 'Ainda não tem laudo')}
                  className="p-4 rounded-xl border border-slate-700 bg-brand-navyLight/50 hover:border-brand-gold hover:bg-brand-gold/10 text-left transition-all font-medium text-sm"
                >
                  <span className="block font-bold text-brand-goldLight mb-1">Não</span>
                  Preciso de orientações
                </button>
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between text-xs font-bold text-brand-goldLight">
                <span>ETAPA 2 DE 3</span>
                <span>HISTÓRICO NO INSS</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">Você já deu entrada no pedido pelo INSS?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button
                  onClick={() => handleSelect(2, 'Sim, o INSS já NEGOU o pedido')}
                  className="p-4 rounded-xl border border-slate-700 bg-brand-navyLight/50 hover:border-brand-gold hover:bg-brand-gold/10 text-left transition-all font-medium text-sm"
                >
                  <span className="block font-bold text-rose-400 mb-1">Foi Negado</span>
                  Quero reverter na Justiça
                </button>
                <button
                  onClick={() => handleSelect(2, 'Ainda não dei entrada no INSS')}
                  className="p-4 rounded-xl border border-slate-700 bg-brand-navyLight/50 hover:border-brand-gold hover:bg-brand-gold/10 text-left transition-all font-medium text-sm"
                >
                  <span className="block font-bold text-brand-goldLight mb-1">Nunca dei entrada</span>
                  Primeiro pedido
                </button>
                <button
                  onClick={() => handleSelect(2, 'Em análise no INSS há muito tempo')}
                  className="p-4 rounded-xl border border-slate-700 bg-brand-navyLight/50 hover:border-brand-gold hover:bg-brand-gold/10 text-left transition-all font-medium text-sm"
                >
                  <span className="block font-bold text-amber-400 mb-1">Em Análise</span>
                  Demora excessiva do INSS
                </button>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between text-xs font-bold text-brand-goldLight">
                <span>ETAPA 3 DE 3</span>
                <span>DESPESAS MENSAIS COM SAÚDE</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">A família possui gastos com terapias, remédios, fonoaudiologia ou alimentação especial?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  onClick={() => handleSelect(3, 'Sim, temos gastos significativos comprováveis')}
                  className="p-4 rounded-xl border border-slate-700 bg-brand-navyLight/50 hover:border-brand-gold hover:bg-brand-gold/10 text-left transition-all font-medium text-sm"
                >
                  <span className="block font-bold text-emerald-400 mb-1">Sim, temos gastos</span>
                  Terapias, consultas, remédios, fraldas
                </button>
                <button
                  onClick={() => handleSelect(3, 'Poucos gastos ou uso majoritário do SUS')}
                  className="p-4 rounded-xl border border-slate-700 bg-brand-navyLight/50 hover:border-brand-gold hover:bg-brand-gold/10 text-left transition-all font-medium text-sm"
                >
                  <span className="block font-bold text-brand-goldLight mb-1">Poucos gastos</span>
                  Tratamento pelo SUS / Outros
                </button>
              </div>
            </div>
          )}

          {/* Result Screen */}
          {step === 4 && (
            <div className="text-center space-y-6 py-4">
              <div className="size-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCheck className="size-8" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-white">Perfil Identificado com Sucesso!</h3>
              <p className="text-slate-300 text-sm max-w-lg mx-auto">
                Seus dados indicam forte viabilidade para pleitear o benefício na Justiça com abatimento de custos e busca de valores atrasados.
              </p>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 shimmer-btn text-brand-navy font-extrabold text-base px-8 py-4 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
              >
                <MessageCircle className="size-5 fill-brand-navy" />
                <span>Enviar Resultados para o Dr. Thiago</span>
              </a>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
