import React from 'react';
import { MessageCircle } from 'lucide-react';

export const AboutLawyer: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-brand-navy to-brand-navyDark text-white border-t border-brand-taupe/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Image / Profile Card with Official Logo */}
          <div className="md:col-span-5 text-center">
            <div className="relative inline-block">
              <div className="rounded-2xl bg-gradient-to-tr from-brand-taupe/40 to-brand-navyLight p-1 shadow-2xl mx-auto max-w-sm">
                <div className="w-full h-full rounded-2xl bg-brand-navyCard flex flex-col items-center justify-center p-6 text-center border border-brand-taupe/30 space-y-4">
                  <img
                    src="/logo-thiago-andrade.jpg"
                    alt="Dr. Thiago Andrade - Advocacia Especializada"
                    className="w-full max-w-[260px] h-auto object-contain rounded-lg shadow-md"
                  />
                  <div>
                    <span className="font-heading font-bold text-lg text-white block">Dr. Thiago Andrade</span>
                    <span className="text-xs text-brand-taupeLight font-semibold block mt-0.5">Advogado Trabalhista & Previdenciário</span>
                    <span className="text-[11px] text-slate-400 mt-2 block">Rio de Janeiro / Atendimento Nacional</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bio Content */}
          <div className="md:col-span-7 space-y-6">
            <span className="text-brand-taupeLight font-bold text-xs uppercase tracking-widest">Compromisso Ético & Humano</span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white">
              Uma advocacia combativa e focada na proteção de quem mais precisa
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Sabemos que por trás de cada pedido de benefício existe uma família que enfrenta altos custos diários e não pode esperar pela burocracia do Estado. O escritório <strong>Thiago Andrade Advocacia</strong> atua com rigor técnico e sensibilidade humana perante a Justiça Federal.
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Nossa missão é combater os indeferimentos arbitrários do INSS e assegurar a dignidade, o amparo financeiro e o direito integral de crianças, jovens e adultos no espectro autista e de suas mães e cuidadores.
            </p>
            <div className="pt-4">
              <a
                href="https://wa.me/5521981822004?text=Ol%C3%A1%2C%20Dr.%20Thiago%20Andrade!%20Gostaria%20de%20conversar%20diretamente%20sobre%20o%20caso%20do%20meu%20filho."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-taupe hover:bg-brand-taupeLight text-brand-navyDark font-bold px-6 py-3.5 rounded-xl shadow-lg transition-colors text-sm"
              >
                <MessageCircle className="size-4" />
                <span>Falar com o Dr. Thiago Andrade</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
