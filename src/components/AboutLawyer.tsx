import React from 'react';
import { UserCheck, MessageCircle } from 'lucide-react';

export const AboutLawyer: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-navy text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Image / Profile Card */}
          <div className="md:col-span-5 text-center">
            <div className="relative inline-block">
              <div className="size-64 sm:size-72 rounded-2xl bg-gradient-to-tr from-brand-gold to-brand-navyLight p-1 shadow-2xl mx-auto">
                <div className="w-full h-full rounded-2xl bg-brand-navyCard flex flex-col items-center justify-center p-6 text-center border border-brand-gold/30">
                  <UserCheck className="size-20 text-brand-gold mb-3" />
                  <span className="font-heading font-bold text-xl text-white">Dr. Thiago</span>
                  <span className="text-xs text-brand-goldLight mt-1 font-semibold">Advogado Especialista em TEA</span>
                  <span className="text-[11px] text-slate-400 mt-2">Inscrição na Ordem dos Advogados do Brasil</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bio Content */}
          <div className="md:col-span-7 space-y-6">
            <span className="text-brand-gold font-bold text-xs uppercase tracking-widest">Compromisso Ético & Humano</span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white">
              Uma advocacia focada na garantia dos direitos de quem mais precisa
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Sabemos que por trás de cada processo existe uma família que não pode esperar. O escritório do Dr. Thiago atua de forma firme e especializada perante a Justiça Federal para combater os indeferimentos arbitrários do INSS.
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Nossa missão é garantir que o Estado cumpra o seu dever constitucional de amparo e dignidade às pessoas com Transtorno do Espectro Autista e seus cuidadores.
            </p>
            <div className="pt-4">
              <a
                href="https://wa.me/558591822489?text=Ol%C3%A1%2C%20Dr.%20Thiago!%20Gostaria%20de%20conversar%20diretamente%20sobre%20o%20caso%20do%20meu%20filho."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-goldLight text-brand-navy font-bold px-6 py-3.5 rounded-xl shadow-lg transition-colors text-sm"
              >
                <MessageCircle className="size-4" />
                <span>Falar com o Dr. Thiago</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
