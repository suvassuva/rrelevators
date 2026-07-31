'use client';

import {
  Clock,
  ShieldCheck,
  Lightbulb,
  IndianRupee,
  Award,
  Headphones,
} from 'lucide-react';
import { WHY_CHOOSE_US } from '@/lib/constants';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useInView } from '@/hooks/useInView';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Clock,
  ShieldCheck,
  Lightbulb,
  IndianRupee,
  Award,
  Headphones,
};

export function WhyChooseUs() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-[var(--section-alt)]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Left: Content */}
          <div>
            <span className="inline-block text-xs sm:text-sm font-semibold tracking-wider uppercase text-accent mb-2">
              Why Choose Us
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] text-[var(--foreground)] leading-tight mb-4 sm:mb-6">
              The Trusted Name in{' '}
              <span className="gradient-text">Elevator Solutions</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-muted leading-relaxed mb-6 sm:mb-8">
              With over two decades of experience and 1200+ installations across India, we&apos;ve
              built a reputation for excellence, innovation, and unwavering commitment to safety.
            </p>

            <div ref={ref} className="space-y-3 sm:space-y-4">
              {WHY_CHOOSE_US.map((item, i) => {
                const Icon = iconMap[item.icon] || ShieldCheck;
                return (
                  <div
                    key={item.title}
                    className={`flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] card-hover ${
                      isInView ? 'animate-fade-up' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm md:text-base font-semibold text-[var(--foreground)] mb-0.5 sm:mb-1">{item.title}</h4>
                      <p className="text-[11px] sm:text-xs md:text-sm text-muted leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Visual Timeline */}
          <div className="hidden lg:block relative">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent" />

              {/* Timeline items */}
              {[
                { year: '2005', title: 'Company Founded', desc: 'Started with a vision to revolutionize vertical mobility' },
                { year: '2010', title: 'ISO Certification', desc: 'Achieved ISO 9001:2015 quality management certification' },
                { year: '2015', title: '500+ Installations', desc: 'Milestone of 500 successful elevator installations' },
                { year: '2020', title: 'National Expansion', desc: 'Expanded operations across 15+ states in India' },
                { year: '2024', title: '1200+ Projects', desc: 'Continuing to lead with innovation and excellence' },
              ].map((item, i) => (
                <div key={item.year} className="relative pl-16 pb-10 last:pb-0">
                  {/* Dot */}
                  <div className="absolute left-4 top-1 w-5 h-5 rounded-full bg-accent border-4 border-[var(--section-alt)]" />
                  <div className="text-sm font-bold text-accent mb-1">{item.year}</div>
                  <h4 className="font-semibold text-[var(--foreground)] mb-1">{item.title}</h4>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
