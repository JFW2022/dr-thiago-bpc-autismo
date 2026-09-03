import React, { useState, useEffect, useRef } from 'react';
import { Star, MessageSquareQuote, ShieldCheck, FileSearch, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  name: string;
  context: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Lívia & Bernardo',
    context: 'Condução e Atendimento no INSS',
    image: '/depoimento-2.jpg'
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
    name: 'Marcio Lisboa',
    context: 'Apoio Incansável e Dedicação Integral',
    image: '/depoimento-5.jpg'
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
    }, 4500);
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

                    {/* Full WhatsApp Screenshot */}
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="relative group overflow-hidden rounded-2xl border-2 border-slate-300 shadow-md bg-slate-950 flex items-center justify-center p-1">
                        <img
                          src={item.image}
                          alt={`Depoimento WhatsApp - ${item.name}`}
                          className="w-full h-auto object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.01]"
                          loading="lazy"
                        />
                      </div>
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
