import React from 'react';
import { MessageCircle, ShieldCheck, MapPin, Users, Award } from 'lucide-react';

export const AboutLawyer: React.FC = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-gradient-to-b from-brand-navy via-brand-navyDark to-brand-navy text-white border-t border-brand-amber/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Official Seal & Cover Visual Card */}
          <div className="md:col-span-5 text-center">
            <div className="relative inline-block">
              <div className="rounded-3xl bg-gradient-to-tr from-brand-amber to-brand-navyLight p-1 shadow-2xl mx-auto max-w-sm">
                <div className="w-full h-full rounded-3xl bg-brand-navyCard flex flex-col items-center justify-center p-8 text-center border border-brand-amber/30 space-y-5">
                  <div className="relative">
                    <img
                      src="/logo-thiago-andrade-stamp.jpg"
                      alt="Selo Oficial Thiago Andrade Advocacia"
                      className="size-36 sm:size-44 rounded-full object-cover shadow-2xl border-2 border-brand-amber"
                    />
                    <div className="absolute bottom-0 right-0 bg-brand-whatsapp text-slate-950 p-2 rounded-full shadow-lg">
                      <ShieldCheck className="size-5" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-heading font-extrabold text-xl text-white">Thiago Andrade Advocacia</h3>
                    <span className="text-xs text-brand-amberLight font-semibold block mt-1">Advocacia Trabalhista & Previdenciária</span>
                    <span className="inline-flex items-center gap-1 text-[11px] text-slate-300 mt-2 bg-brand-navyDark/80 px-3 py-1 rounded-full border border-slate-700">
                      <MapPin className="size-3 text-brand-amber" /> Rio de Janeiro - RJ
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 w-full pt-3 border-t border-slate-700/80 text-left text-xs">
                    <div className="bg-brand-navyDark/60 p-2.5 rounded-lg border border-slate-800">
                      <span className="text-brand-amber font-bold block text-sm">Online</span>
                      <span className="text-slate-400">Todo o Brasil</span>
                    </div>
                    <div className="bg-brand-navyDark/60 p-2.5 rounded-lg border border-slate-800">
                      <span className="text-brand-amber font-bold block text-sm">Presencial</span>
                      <span className="text-slate-400">Rio de Janeiro</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Official Bio Content */}
          <div className="md:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-amber/20 text-brand-amberLight text-xs font-bold uppercase tracking-wider">
              <Award className="size-3.5" />
              Atendimento Humanizado & Responsável
            </div>

            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight">
              Uma advocacia comprometida em transformar direitos em amparo real para sua família
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              O escritório <strong>Thiago Andrade Advocacia</strong> nasceu com o propósito de oferecer suporte jurídico técnico, transparente e profundamente acolhedor para famílias atípicas que enfrentam a burocracia estatal e as negativas do INSS.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Com atuação sediada no <strong>Rio de Janeiro</strong> e atendimento 100% digital estruturado para todo o Brasil, cuidamos de cada detalhe documental — da análise de relatórios médicos e terapêuticos até a sustentação perante a Justiça Federal — assegurando que você e seu filho tenham a atenção que merecem.
            </p>

            {/* Feature Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-200">
              <div className="flex items-center gap-2.5">
                <Users className="size-4 text-brand-amber shrink-0" />
                <span>Acompanhamento direto pelo WhatsApp</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="size-4 text-brand-amber shrink-0" />
                <span>Conduta pautada no Código de Ética da OAB</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="https://wa.me/5521981822004?text=Ol%C3%A1%2C%20Dr.%20Thiago%20Andrade!%20Gostaria%20de%20conversar%20diretamente%20sobre%20o%20caso%20do%20meu%20filho."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-brand-amber to-brand-amberDark text-slate-950 font-bold px-7 py-4 rounded-xl shadow-xl hover:brightness-110 transition-all text-sm"
              >
                <MessageCircle className="size-4 fill-slate-950" />
                <span>Falar no WhatsApp com o Dr. Thiago Andrade</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
