import React from 'react';
import { Brain, Receipt, History, Briefcase, FileText, Laptop, ArrowRight } from 'lucide-react';

interface RightCard {
  icon: React.ElementType;
  title: string;
  description: string;
  badge: string;
}

const rights: RightCard[] = [
  {
    icon: Brain,
    title: 'Autismo Leve (Nível 1) tem Direito',
    description: 'A Lei Berenice Piana (Lei 12.764/12) não diferencia níveis de suporte. Qualquer pessoa diagnosticada no espectro possui proteção legal e direito ao benefício assistencial.',
    badge: 'Lei 12.764/12'
  },
  {
    icon: Receipt,
    title: 'Abatimento de Gastos com Terapias',
    description: 'Despesas com psicólogo, fonoaudiólogo, terapeuta ocupacional, medicamentos e fraldas são deduzidas no cálculo judicial de renda por pessoa da família.',
    badge: 'Jurisprudência STF/TNU'
  },
  {
    icon: History,
    title: 'Recebimento dos Valores Atrasados',
    description: 'Ao ganhar a ação na Justiça, o beneficiário recebe a quantia acumulada desde o dia em que o primeiro requerimento foi protocolado no INSS (com correção monetária).',
    badge: 'Direito aos Retroativos'
  },
  {
    icon: Briefcase,
    title: 'Pais Trabalhando Não Impedem o BPC',
    description: 'O fato de um dos pais ter carteira assinada ou ser MEI não anula o direito, desde que a renda líquida por membro familiar atenda aos parâmetros legais ajustados.',
    badge: 'Análise Per Capita'
  },
  {
    icon: FileText,
    title: 'Perícia Biopsicossocial Justa',
    description: 'Na Justiça Federal, a avaliação considera relatórios multidisciplinares completos (escola, terapeutas e médicos) e não apenas uma consulta superficial de 5 minutos.',
    badge: 'Avaliação Global'
  },
  {
    icon: Laptop,
    title: 'Processo 100% Digital e Humanizado',
    description: 'Envio de documentos simplificado por WhatsApp, assinatura digital sem sair de casa e acompanhamento transparente em cada etapa processual.',
    badge: 'Comodidade para a Família'
  }
];

export const RightsGrid: React.FC = () => {
  return (
    <section id="direitos" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-gold font-bold text-xs sm:text-sm uppercase tracking-widest block mb-2">Fundamentação Jurídica Sólida</span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-brand-navy tracking-tight">
            Direitos Garantidos por Lei para Pessoas com Autismo (TEA)
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg">
            Conheça as principais garantias jurídicas que asseguram a concessão do BPC/LOAS mesmo contra as exigências burocráticas do INSS.
          </p>
        </div>

        {/* Rights Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rights.map((item, index) => {
            const Icon = item.icon;
            return (
              <article key={index} className="card-3d bg-brand-warmBg p-6 rounded-2xl border border-slate-200 flex flex-col justify-between h-full">
                <div>
                  <div className="size-12 rounded-xl bg-brand-navy text-brand-gold flex items-center justify-center mb-4">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-brand-navy mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-semibold text-brand-goldDark">
                  <span>{item.badge}</span>
                  <ArrowRight className="size-4" />
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
