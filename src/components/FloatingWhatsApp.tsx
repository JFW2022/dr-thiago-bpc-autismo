import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <a
        href="https://wa.me/5521981822004?text=Ol%C3%A1%2C%20Dr.%20Thiago%20Andrade!%20Vim%20pelo%20site%20e%20gostaria%20de%20uma%20orienta%C3%A7%C3%A3o%20sobre%20o%20BPC%20Autismo."
        target="_blank"
        rel="noopener noreferrer"
        className="pulse-whatsapp flex items-center justify-center size-14 sm:size-16 rounded-full bg-brand-whatsapp text-white shadow-2xl hover:scale-110 transition-transform duration-300"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="size-8 fill-white" />
      </a>
    </div>
  );
};
