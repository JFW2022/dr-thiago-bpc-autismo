import React, { useState, useEffect, useRef } from 'react';
import { Star, MessageSquareQuote, ShieldCheck, FileSearch, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  context: string;
  image?: string;
  fullText?: string[];
}

const testimonials: Testimonial[] = [
  {
    name: 'Lívia & Bernardo',
    context: 'Condução e Atendimento no INSS',
    image: '/depoimento-2.jpg'
  },
  {
    name: 'Marcio Lisboa',
    context: 'Apoio Incansável e Dedicação Integral',
    fullText: [
      'DEPOIMENTO AO DR. THIAGO',
      'Existem momentos na vida em que descobrimos quem realmente está ao nosso lado. E, para mim, o Dr. Thiago foi uma dessas pessoas.',
      'Em um dos momentos mais difíceis e delicados da minha vida, quando me vi diante de uma situação que jamais imaginei enfrentar, o Dr. Thiago não foi apenas o advogado que me representou. Ele foi a pessoa que esteve mais próxima de mim durante todo esse período, transmitindo segurança, tranquilidade e confiança quando eu mais precisava.',
      'Sua atuação profissional foi simplesmente excepcional. Mesmo com o processo ainda em curso, posso afirmar que sua dedicação e seu trabalho foram fundamentais para resolver aquilo que, naquele momento, representava o maior problema da minha vida.',
      'O Dr. Thiago esteve presente de forma incansável. Foi ao Ministério Público, ao cartório, ao fórum e esteve onde fosse necessário, acompanhando cada detalhe, buscando soluções e trabalhando de maneira intensa para que tudo fosse conduzido da melhor forma possível.',
      'Mais do que competência jurídica, encontrei nele comprometimento, humanidade e lealdade.',
      'Em nenhum momento senti que estava enfrentando aquela situação sozinho. Eu sabia que havia alguém trabalhando por mim, defendendo meus interesses e, principalmente, acreditando que eu merecia ter minha história analisada com justiça.',
      'Sua dedicação foi em tempo integral. Não mediu esforços, não se limitou ao horário de trabalho e esteve disponível nos momentos em que mais precisei. Isso, para alguém que está passando por uma situação tão difícil, tem um valor que vai muito além de qualquer contrato profissional.',
      'Por isso, minha gratidão ao Dr. Thiago é enorme. Posso dizer, com absoluta tranquilidade, que tive ao meu lado um profissional extremamente competente, dedicado e incansável, mas também um ser humano que soube estar presente quando eu mais precisava.',
      'Dr. Thiago, muito obrigado por tudo o que fez por mim, pela sua dedicação, pela sua disponibilidade e por nunca medir esforços para me ajudar.',
      'Algumas pessoas simplesmente exercem uma profissão. Outras deixam uma marca na vida daqueles que ajudam. O senhor, sem dúvida alguma, deixou uma marca muito positiva na minha.',
      'Minha eterna gratidão, respeito e admiração.'
    ]
  },
  {
    name: 'Anna',
    context: 'Atendimento Rápido e Vitória Processual',
    image: '/depoimento-4.jpg'
  },
  {
    name: 'Roberto',
    context: 'Dedicação e Competência no Processo',
    image: '/depoimento-6.jpg'
  },
  {
    name: 'Marcio Ribeiro',
    context: 'Profissionalismo e Humanidade',
    image: '/depoimento-3.jpg'
  },
  {
    name: 'Cliente Atendido',
    context: 'Atendimento de Excelência e Esclarecimento de Dúvidas',
    image: '/depoimento-1.jpg'
  }
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(2);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Responsive cards per view (1 on mobile, 2 on desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else {
        setCardsPerView(2);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - cardsPerView);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-white border-t border-slate-200 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 reveal-up">
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

        {/* Carousel Container */}
        <div
          className="relative px-2 sm:px-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            aria-label="Depoimento Anterior"
            className="absolute -left-2 sm:left-0 top-1/2 -translate-y-1/2 z-20 bg-brand-navy/90 hover:bg-brand-amber text-white hover:text-slate-950 p-2.5 sm:p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 border border-brand-amber/30"
          >
            <ChevronLeft className="size-5 sm:size-6" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Próximo Depoimento"
            className="absolute -right-2 sm:right-0 top-1/2 -translate-y-1/2 z-20 bg-brand-navy/90 hover:bg-brand-amber text-white hover:text-slate-950 p-2.5 sm:p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 border border-brand-amber/30"
          >
            <ChevronRight className="size-5 sm:size-6" />
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden py-4">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`
              }}
            >
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className="w-full md:w-1/2 flex-shrink-0 px-3 sm:px-4"
                >
                  <div className="bg-brand-warmBg rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-lg flex flex-col justify-between h-full hover:border-brand-amber/50 transition-all duration-300">
                    
                    {/* Stars Header */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="size-4 sm:size-5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Avaliação 5.0
                      </span>
                    </div>

                    {/* Content Display: Full Text for Marcio Lisboa OR Full WhatsApp Screenshot */}
                    <div className="flex-1 flex flex-col justify-center">
                      {item.fullText ? (
                        <div className="rounded-2xl border-2 border-brand-amber/30 bg-white p-5 sm:p-6 shadow-md text-slate-800 text-xs sm:text-sm leading-relaxed overflow-y-auto max-h-[460px] sm:max-h-[500px] space-y-3 font-sans">
                          <div className="flex items-center gap-2 pb-2 border-b border-slate-200 text-brand-amberDark font-bold uppercase tracking-wider text-xs">
                            <Quote className="size-4" />
                            <span>Depoimento em Carta Aberta</span>
                          </div>
                          {item.fullText.map((paragraph, pIdx) => (
                            <p
                              key={pIdx}
                              className={
                                pIdx === 0
                                  ? 'font-heading font-extrabold text-brand-navy text-sm sm:text-base mb-2'
                                  : pIdx === item.fullText!.length - 1
                                  ? 'font-bold text-slate-900 pt-2 border-t border-slate-100'
                                  : 'text-slate-700 leading-relaxed'
                              }
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      ) : (
                        <div className="relative group overflow-hidden rounded-2xl border-2 border-slate-300 shadow-md bg-slate-950 flex items-center justify-center p-1">
                          <img
                            src={item.image}
                            alt={`Depoimento WhatsApp - ${item.name}`}
                            className="w-full h-auto object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.01]"
                            loading="lazy"
                          />
                        </div>
                      )}
                    </div>

                    {/* Footer Info */}
                    <div className="mt-4 flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-200/80">
                      <span className="font-bold text-slate-900 text-sm">{item.name}</span>
                      <span className="flex items-center gap-1 text-slate-600 font-medium">
                        <ShieldCheck className="size-3.5 text-brand-amber" /> {item.context}
                      </span>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ir para slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? 'w-8 bg-brand-amber'
                    : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

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
