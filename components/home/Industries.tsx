'use client';

import {
  Home,
  Building2,
  Hospital,
  Hotel,
  Plane,
  TrainFront,
  ShoppingBag,
  Factory,
  GraduationCap,
} from 'lucide-react';
import { INDUSTRIES } from '@/lib/constants';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useInView } from '@/hooks/useInView';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Home,
  Building2,
  Hospital,
  Hotel,
  Plane,
  TrainFront,
  ShoppingBag,
  Factory,
  GraduationCap,
};

export function Industries() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-[var(--section-alt)]">
      <div className="container-custom">
        <SectionHeader
          label="Industries"
          title="Industries We Serve"
          description="Our elevator solutions power vertical mobility across diverse sectors and building types."
        />

        <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-4">
          {INDUSTRIES.map((industry, i) => {
            const Icon = iconMap[industry.icon] || Building2;
            return (
              <div
                key={industry.name}
                className={`group flex flex-col items-center text-center p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] card-hover cursor-default ${
                  isInView ? 'animate-fade-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-accent/10 flex items-center justify-center mb-2.5 sm:mb-4 group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-xs sm:text-sm font-semibold text-[var(--foreground)] mb-0.5">{industry.name}</h3>
                <p className="text-[10px] sm:text-xs text-muted leading-tight">{industry.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
