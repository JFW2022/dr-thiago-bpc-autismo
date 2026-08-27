import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: 1,
    question: '1. Quem tem autismo leve (nível 1 de suporte) pode receber o BPC?',
    answer: 'Sim! A Lei Federal nº 12.764/2012 equipara a pessoa com TEA à pessoa com deficiência para todos os efeitos legais, sem distinção de grau de suporte. O que a perícia judicial avalia é o impacto do autismo no desenvolvimento e nas barreiras sociais da pessoa.'
  },
  {
    id: 2,
    question: '2. A renda da nossa casa passa do limite do INSS. Ainda é possível conseguir?',
    answer: 'Sim! O INSS avalia apenas a renda bruta no sistema automático, mas a Justiça Federal autoriza deduzir todos os gastos mensais comprovados com saúde, como consultas particulares, fonoaudiologia, terapia ocupacional, psicologia ABA, medicamentos contínuos e alimentação especial.'
  },
  {
    id: 3,
    question: '3. Quanto tempo demora uma ação judicial de BPC/LOAS?',
    answer: 'O tempo médio varia conforme a Vara Federal da sua região, mas por tramitar nos Juizados Especiais Federais, o rito costuma ser acelerado. E o mais importante: todo o tempo de espera é pago acumulado e com juros ao final da ação.'
  },
  {
    id: 4,
    question: '4. Preciso pagar algum valor antecipado para iniciar o processo?',
    answer: 'A análise inicial de viabilidade documental é totalmente sem custo. As condições contratuais são transparentes e formalizadas de acordo com o Código de Ética e Disciplina da OAB.'
  }
];

export const FaqAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <span className="text-brand-gold font-bold text-xs sm:text-sm uppercase tracking-widest block mb-2">Esclareça suas Dúvidas</span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-brand-navy">
            Perguntas Frequentes sobre o BPC/LOAS no Autismo
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full p-5 text-left font-heading font-bold text-base text-brand-navy flex items-center justify-between gap-4 bg-brand-warmBg hover:bg-slate-50 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`size-5 text-brand-gold shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="p-5 bg-white text-sm text-slate-600 border-t border-slate-100 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
