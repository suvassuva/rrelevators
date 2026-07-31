'use client';

import { MessageCircle } from 'lucide-react';
import { CONTACT } from '@/lib/constants';

export function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
    'Hi, I would like to inquire about your elevator solutions.'
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 md:bottom-6 left-4 md:left-6 z-50 w-11 h-11 md:w-14 md:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 animate-pulse-glow"
      aria-label="Chat on WhatsApp"
      style={{ '--tw-shadow-color': 'rgba(37, 211, 102, 0.3)' } as React.CSSProperties}
    >
      <MessageCircle className="w-5 h-5 md:w-6 md:h-6" fill="white" />
    </a>
  );
}
