'use client';

import {
  Wrench,
  Settings,
  Hammer,
  RefreshCw,
  MessageSquare,
  ClipboardCheck,
} from 'lucide-react';
import { HOME_SERVICES } from '@/lib/constants';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useInView } from '@/hooks/useInView';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Wrench,
  Settings,
  Hammer,
  RefreshCw,
  MessageSquare,
  ClipboardCheck,
};

export function ServicesGrid() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-[var(--section-alt)]">
      <div className="container-custom">
        <SectionHeader
          label="Our Services"
          title="Comprehensive Elevator Solutions"
          description="From installation to lifetime maintenance, we provide end-to-end elevator services with unmatched quality and reliability."
        />

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5 md:gap-6">
          {HOME_SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] || Wrench;
            return (
              <Link
                key={service.title}
                href="/services"
                className={`group relative bg-[var(--card-bg)] rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-[var(--card-border)] card-hover overflow-hidden ${
                  isInView ? 'animate-fade-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-accent/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold font-[family-name:var(--font-heading)] text-[var(--foreground)] mb-1.5 sm:mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed mb-3">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-accent text-xs sm:text-sm font-semibold group-hover:gap-2 transition-all">
                    Learn More <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
