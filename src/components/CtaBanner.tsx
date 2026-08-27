import React from 'react';
import { MessageCircle } from 'lucide-react';

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-brand-navy via-brand-navyCard to-brand-navy text-white text-center border-t border-brand-gold/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-white">
          Não aceite a negativa do INSS como a última palavra
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
          Lute pelo benefício de 1 salário mínimo e pelos direitos do seu filho. Faça uma avaliação gratuita agora mesmo.
        </p>
        <div>
          <a
            href="https://wa.me/558591822489?text=Ol%C3%A1%2C%20Dr.%20Thiago!%20Gostaria%20de%20iniciar%20a%20avalia%C3%A7%C3%A3o%20do%20BPC%20do%20meu%20filho."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 shimmer-btn text-brand-navy font-extrabold text-base px-8 py-4 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <MessageCircle className="size-5 fill-brand-navy" />
            <span>Falar no WhatsApp com o Escritório</span>
          </a>
        </div>
      </div>
    </section>
  );
};
