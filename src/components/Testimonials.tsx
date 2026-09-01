import React from 'react';
import { Star, MessageSquareQuote, CheckCircle2, ShieldCheck, FileSearch } from 'lucide-react';

interface Testimonial {
  name: string;
  context: string;
  quote: string;
  image: string;
  revealClass: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Lívia & Bernardo',
    context: 'Atendimento e Condução no INSS',
    quote: 'Gostaria de deixar meu agradecimento pelo excelente trabalho realizado. Desde o primeiro atendimento, fui muito bem recebida, com muita atenção, respeito e profissionalismo. O advogado Thiago demonstrou conhecimento, dedicação e, principalmente, muita paciência para esclarecer todas as minhas dúvidas... Sou muito grata pela forma humana e responsável com que meu caso foi conduzido. Recomendo de olhos fechados!',
    image: '/depoimento-2.jpg',
    revealClass: 'reveal-left delay-100'
  },
  {
    name: 'Cliente Atendido',
    context: 'Atendimento e Esclarecimento de Dúvidas',
    quote: 'Atendimento de excelência, advogado Thiago é muito prestativo, tirou todas as minhas dúvidas. Obrigada Thiago pelo ótimo atendimento!',
    image: '/depoimento-1.jpg',
    revealClass: 'reveal-right delay-200'
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-white border-t border-slate-200 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-up">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-amber/15 text-brand-amberDark text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquareQuote className="size-4 text-brand-amber" />
            Depoimentos Reais
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-brand-navy tracking-tight">
            O Reconhecimento de Quem Já Foi Atendido
          </h2>
          <p className="text-slate-600 mt-4 text-sm sm:text-base leading-relaxed">
            Veja as mensagens e avaliações enviadas diretamente pelas famílias e clientes que confiaram na atuação do <strong>Dr. Thiago Andrade</strong>.
          </p>
        </div>

        {/* Testimonials Grid with Real WhatsApp Screenshots */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`bg-brand-warmBg rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-lg flex flex-col justify-between hover:border-brand-amber/50 transition-all duration-300 ${item.revealClass}`}
            >
              {/* Stars & Header */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                    <CheckCircle2 className="size-3.5" /> Mensagem Verificada
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base text-slate-700 italic leading-relaxed mb-6 font-medium">
                  "{item.quote}"
                </p>
              </div>

              {/* Real WhatsApp Screenshot Preview Frame */}
              <div className="mt-2 pt-6 border-t border-slate-200/80">
                <div className="mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Print da Conversa Original:
                  </span>
                </div>
                <div className="relative group overflow-hidden rounded-2xl border-2 border-slate-300 shadow-md bg-slate-900 max-h-[380px] flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={`Depoimento WhatsApp - ${item.name}`}
                    className="w-full h-auto object-cover object-top max-h-[380px] transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white text-xs font-semibold bg-brand-navy/90 px-3 py-1 rounded-full backdrop-blur-sm">
                      WhatsApp Oficial
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-bold text-slate-800 text-sm">{item.name}</span>
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="size-3.5 text-brand-amber" /> {item.context}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Bottom Banner inside Testimonials */}
        <div className="mt-12 bg-gradient-to-r from-brand-navy via-brand-navyDark to-brand-navy p-8 rounded-3xl border border-brand-amber/30 text-white text-center reveal-up">
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
              Sua família também merece um atendimento dedicado e transparente
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Faça uma verificação inicial sem custos dos documentos e entenda se você tem direito ao benefício.
            </p>
            <div className="pt-2">
              <a
                href="#simulador"
                className="inline-flex items-center justify-center gap-3 shimmer-btn text-slate-950 font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300 uppercase tracking-wide"
              >
                <FileSearch className="size-4" />
                <span>VERIFICAR MEU CASO</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
