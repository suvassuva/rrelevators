'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { HOME_FAQ } from '@/lib/constants';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useInView } from '@/hooks/useInView';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-[var(--background)]">
      <div className="container-custom">
        <SectionHeader
          label="FAQ"
          title="Frequently Asked Questions"
          description="Find answers to common questions about our elevator solutions, installation process, and maintenance services."
        />

        <div ref={ref} className="max-w-3xl mx-auto space-y-2.5 sm:space-y-3">
          {HOME_FAQ.map((item, i) => (
            <div
              key={i}
              className={`bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg sm:rounded-xl overflow-hidden ${
                isInView ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-3.5 sm:p-5 text-left cursor-pointer group"
              >
                <span className="text-xs sm:text-sm md:text-base font-semibold text-[var(--foreground)] pr-3 group-hover:text-accent transition-colors">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-64' : 'max-h-0'
                }`}
              >
                <p className="px-3.5 pb-3.5 sm:px-5 sm:pb-5 text-xs sm:text-sm text-muted leading-relaxed">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
