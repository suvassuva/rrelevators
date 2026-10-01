'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-20 right-5 z-50 w-8.5 h-8.5 rounded-lg bg-[#0082C8] text-white flex items-center justify-center shadow-md hover:bg-[#006EA9] hover:shadow-[0_0_15px_rgba(0,130,200,0.5)] transition-all duration-300 cursor-pointer border border-white/20 active:scale-95 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <ArrowUp className="w-4 h-4" strokeWidth={2.2} />
    </button>
  );
}
