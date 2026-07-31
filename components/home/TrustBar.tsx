'use client';

import {
  ShieldCheck,
  HardHat,
  Gem,
  FileCheck,
  Siren,
  Award,
} from 'lucide-react';
import { TRUST_ITEMS } from '@/lib/constants';
import { useInView } from '@/hooks/useInView';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  ShieldCheck,
  HardHat,
  Gem,
  FileCheck,
  Siren,
  Award,
};

export function TrustBar() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-6 sm:py-8 bg-[var(--background)] relative -mt-8 sm:-mt-16 z-20">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-4">
          {TRUST_ITEMS.map((item, i) => {
            const Icon = iconMap[item.icon] || ShieldCheck;
            return (
              <div
                key={item.title}
                className={`flex flex-col items-center text-center p-2.5 sm:p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] card-hover ${
                  isInView ? 'animate-fade-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-accent/10 flex items-center justify-center mb-2 sm:mb-3">
                  <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-accent" />
                </div>
                <h3 className="text-xs sm:text-sm font-semibold text-[var(--foreground)] leading-tight">{item.title}</h3>
                {item.description && (
                  <p className="text-[10px] sm:text-xs text-muted mt-0.5 leading-tight">{item.description}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
