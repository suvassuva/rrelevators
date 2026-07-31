'use client';

import {
  MessageSquare,
  Search,
  PenTool,
  Factory,
  Wrench,
  CheckCircle,
  Handshake,
  HeartHandshake,
} from 'lucide-react';
import { INSTALLATION_STEPS } from '@/lib/constants';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useInView } from '@/hooks/useInView';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  MessageSquare,
  Search,
  PenTool,
  Factory,
  Wrench,
  CheckCircle,
  HandshakeIcon: Handshake,
  HeartHandshake,
};

export function InstallationProcess() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-[var(--background)]">
      <div className="container-custom">
        <SectionHeader
          label="Our Process"
          title="Installation Process"
          description="A streamlined 8-step process ensuring every installation meets our exacting standards for safety and quality."
        />

        <div ref={ref} className="relative max-w-4xl mx-auto">
          {/* Vertical line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-accent/20 -translate-x-1/2" />

          <div className="space-y-4 md:space-y-0">
            {INSTALLATION_STEPS.map((step, i) => {
              const Icon = iconMap[step.icon] || CheckCircle;
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={step.step}
                  className={`relative md:flex items-center ${
                    isInView ? 'animate-fade-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {/* Left content */}
                  <div className={`md:w-1/2 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pr-12 md:order-last md:text-left md:pl-12'}`}>
                    {isLeft && (
                      <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-4 sm:p-5 card-hover">
                        <div className="flex items-center gap-3 md:justify-end mb-1.5">
                          <span className="text-[11px] sm:text-xs font-bold text-accent bg-accent/10 px-2 py-0.5 rounded">
                            Step {step.step}
                          </span>
                        </div>
                        <h4 className="font-semibold text-[var(--foreground)] text-sm sm:text-base font-[family-name:var(--font-heading)] mb-1">
                          {step.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-muted">{step.description}</p>
                      </div>
                    )}
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-accent items-center justify-center z-10 shadow-lg">
                    <Icon size={16} className="text-primary" />
                  </div>

                  {/* Right content */}
                  <div className={`md:w-1/2 ${!isLeft ? 'md:pl-12' : 'md:pl-12'}`}>
                    {!isLeft && (
                      <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-4 sm:p-5 card-hover">
                        <div className="flex items-center gap-3 mb-1.5">
                          <span className="text-[11px] sm:text-xs font-bold text-accent bg-accent/10 px-2 py-0.5 rounded">
                            Step {step.step}
                          </span>
                        </div>
                        <h4 className="font-semibold text-[var(--foreground)] text-sm sm:text-base font-[family-name:var(--font-heading)] mb-1">
                          {step.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-muted">{step.description}</p>
                      </div>
                    )}
                  </div>

                  {/* Mobile layout */}
                  <div className="md:hidden flex gap-3">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0 shadow-md">
                        <Icon size={14} className="text-primary" />
                      </div>
                      {i < INSTALLATION_STEPS.length - 1 && (
                        <div className="w-0.5 flex-1 bg-accent/30 my-1" />
                      )}
                    </div>
                    <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg p-3 flex-1 mb-2">
                      <span className="text-[10px] font-bold text-accent bg-accent/10 px-1.5 py-0.5 rounded">Step {step.step}</span>
                      <h4 className="font-semibold text-[var(--foreground)] text-xs sm:text-sm mt-1">{step.title}</h4>
                      <p className="text-[11px] sm:text-xs text-muted mt-0.5 leading-snug">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
