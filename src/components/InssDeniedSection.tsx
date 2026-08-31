import React from 'react';
import { AlertTriangle, MessageCircle, FileText, CheckCircle2 } from 'lucide-react';

export const InssDeniedSection: React.FC = () => {
  const whatsappUrl = "https://wa.me/5521981822004?text=Ol%C3%A1.%20Meu%20pedido%20de%20BPC%20foi%20negado%20pelo%20INSS%20e%20gostaria%20de%20analisar%20meu%20caso.";

  return (
    <section id="inss-negou" className="py-16 md:py-20 bg-gradient-to-r from-brand-navyDark via-brand-navy to-brand-navyDark text-white border-y border-brand-amber/30 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-navy p-8 sm:p-12 rounded-3xl border border-brand-amber/40 shadow-2xl relative reveal-scale">
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            
            {/* Left Icon / Warning Badge */}
            <div className="shrink-0 text-center">
              <div className="size-20 sm:size-24 rounded-2xl bg-brand-amber/20 border border-brand-amber/40 flex items-center justify-center text-brand-amber mx-auto shadow-inner">
                <AlertTriangle className="size-10 sm:size-12 text-brand-amber" />
              </div>
            </div>

            {/* Content & Action */}
            <div className="flex-1 space-y-4 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-amber/20 text-brand-amberLight text-xs font-bold uppercase tracking-wider">
                <FileText className="size-3.5" />
                Caminho para Reversão
              </div>

              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-3xl text-white tracking-tight uppercase">
                SEU PEDIDO DE BPC FOI NEGADO PELO INSS?
              </h2>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
                Uma negativa não significa necessariamente que o caso terminou. É importante entender por que o benefício foi negado e analisar a documentação apresentada ao INSS.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-brand-amber to-brand-amberDark text-slate-950 font-extrabold text-sm sm:text-base px-8 py-4 rounded-xl shadow-xl hover:brightness-110 transition-all uppercase tracking-wide"
                >
                  <MessageCircle className="size-5 fill-slate-950" />
                  <span>QUERO ANALISAR A NEGATIVA DO INSS</span>
                </a>
              </div>

              <div className="pt-2 flex items-center justify-center md:justify-start gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5 text-brand-amber" /> Análise do motivo da recusa
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5 text-brand-amber" /> Revisão de laudos e renda
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
