'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { HOME_FAQ } from '@/lib/constants';
import { useInView } from '@/hooks/useInView';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section className="py-14 sm:py-20 bg-[#F8FAFC] text-[#0F172A] relative overflow-hidden">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#1A4B75]/10 border border-[#0082C8]/30 text-[#0082C8] text-[11px] font-bold uppercase tracking-wider">
            <HelpCircle size={13} className="text-[#0082C8]" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#0F172A] font-[family-name:var(--font-heading)] leading-tight">
            Everything You Need to Know About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0082C8] to-[#1A4B75]">
              RR Elevators
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-gray-600 max-w-lg mx-auto leading-relaxed">
            Clear technical answers regarding safety compliance, ARD battery backup, power savings, and project timelines.
          </p>
        </div>

        <div ref={ref} className="max-w-2xl mx-auto space-y-2.5">
          {HOME_FAQ.map((item, i) => (
            <div
              key={i}
              className={`bg-white border border-gray-200/90 rounded-lg overflow-hidden shadow-xs transition-all ${
                openIndex === i ? 'border-[#0082C8]/50 shadow-sm ring-1 ring-[#0082C8]/20' : 'hover:border-gray-300'
              } ${isInView ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-3.5 sm:p-4 text-left cursor-pointer group"
                aria-expanded={openIndex === i}
              >
                <span className="text-xs sm:text-sm font-bold text-[#0F172A] pr-3 group-hover:text-[#0082C8] transition-colors leading-snug">
                  {item.question}
                </span>
                <div
                  className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 transition-all ${
                    openIndex === i ? 'bg-[#0082C8] text-white rotate-180' : 'bg-gray-100 text-gray-500 group-hover:bg-[#0082C8]/10 group-hover:text-[#0082C8]'
                  }`}
                >
                  <ChevronDown size={13} />
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-80' : 'max-h-0'
                }`}
              >
                <div className="px-3.5 pb-3.5 sm:px-4 sm:pb-4 pt-1 text-xs text-gray-600 leading-relaxed border-t border-gray-100">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
