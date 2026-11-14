'use client';

import Image from 'next/image';
import {
  ArrowRight,
  ShieldCheck,
  Activity,
  Clock,
  CheckCircle2,
  CalendarCheck,
} from 'lucide-react';

import { useInView } from '@/hooks/useInView';
import { useCounter } from '@/hooks/useCounter';
import { METRIC_STATS } from '@/lib/constants';

function StatCard({
  value,
  suffix,
  label,
  icon: Icon,
  decimals = 0,
  delay = '0ms',
}: {
  value: number;
  suffix: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  decimals?: number;
  delay?: string;
}) {
  const { ref, isInView } = useInView({ threshold: 0.3 });
  const count = useCounter({ end: value, decimals, enabled: isInView, duration: 1600 });

  return (
    <div
      ref={ref}
      className="relative p-3.5 sm:p-4 xl:p-5 rounded-2xl bg-[#0F172A]/90 border border-[#1E2E4E] hover:border-[#0082C8]/60 transition-all duration-300 group shadow-md hover:shadow-[0_8px_20px_-4px_rgba(0,130,200,0.25)] flex flex-col justify-between"
      style={{ animationDelay: delay }}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] xl:text-[11px] uppercase font-mono tracking-wider text-gray-400 font-medium">
          Metric
        </span>
        <div className="w-7 h-7 xl:w-8 xl:h-8 rounded-lg bg-[#1A4B75]/30 border border-[#0082C8]/30 flex items-center justify-center text-[#0082C8] group-hover:bg-[#0082C8] group-hover:text-white transition-colors">
          <Icon className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
        </div>
      </div>

      <div>
        <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-black text-white font-[family-name:var(--font-heading)] tracking-tight">
          {decimals > 0 ? count.toFixed(decimals) : count}
          <span className="text-[#0082C8]">{suffix}</span>
        </div>
        <p className="text-[11px] sm:text-xs xl:text-[13px] text-gray-300 font-medium mt-0.5 leading-snug">
          {label}
        </p>
      </div>

      <span className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-[#0082C8]/40" />
      <span className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-[#0082C8]/40" />
    </div>
  );
}

export function Hero() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-[90vh] pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 bg-[#070C18] text-white overflow-hidden flex flex-col justify-center"
    >
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      {/* Atmospheric Glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#0082C8]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#1A4B75]/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Unified Hero Editorial Card Container - Clean, Uncluttered & Fully Responsive */}
        <div
          className={`relative w-full rounded-2xl sm:rounded-3xl lg:rounded-[32px] overflow-hidden border border-white/15 bg-gradient-to-br from-[#0B132B] via-[#080E1E] to-[#050914] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] min-h-[500px] sm:min-h-[540px] lg:min-h-[580px] flex flex-col justify-center ${
            isInView ? 'animate-fade-up' : 'opacity-0'
          }`}
        >
          {/* Background Image Layer (Positioned on the Right on Desktop) */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-elevator.webp"
              alt="RR Elevators Precision Installation in Bengaluru"
              fill
              priority
              unoptimized
              className="object-cover object-center lg:object-right brightness-95"
            />

            {/* Seamless Directional Overlays for Crisp Text Legibility */}
            {/* Desktop Gradient: Left-to-Right dark blend across negative space */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#070C19] via-[#070C19]/95 sm:via-[#070C19]/90 lg:via-[#070C19]/80 lg:to-transparent to-[#070C19]/70 pointer-events-none hidden lg:block" />

            {/* Mobile / Tablet Gradient: Soft tint ensuring full readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#070C19]/95 via-[#070C19]/85 to-[#070C19]/95 lg:hidden pointer-events-none" />

            {/* Ambient Cyan glow inside card */}
            <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#0082C8]/15 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* Card Content - Clean, Spaced & Focused */}
          <div className="relative z-10 p-6 sm:p-10 lg:p-14 xl:p-16 flex flex-col justify-center">
            {/* Editorial Content Column */}
            <div className="max-w-xl xl:max-w-2xl space-y-4 sm:space-y-5">
              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[56px] font-black text-white tracking-tight leading-[1.12] font-[family-name:var(--font-heading)]">
                Engineering Vertical{' '}
                <span className="italic font-serif font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#0082C8] to-[#60A5FA]">
                  Excellence.
                </span>
              </h1>

              {/* Two-Paragraph Editorial Copy */}
              <div className="space-y-3 text-xs sm:text-sm md:text-[15px] text-gray-200/90 leading-relaxed font-normal">
                <p>
                  Every vertical transit is an opportunity to move seamlessly, operate whisper-quietly, and elevate architectural prestige. Lasting performance comes from precision engineering, vibration-free gearless traction, and uncompromising safety standards.
                </p>
                <p>
                  At RR Elevators, we engineer high-speed passenger, panoramic glass, and industrial freight elevators across South India. With military-grade ARD automatic rescue safety, regenerative power drives, and dedicated rapid-response dispatch, our systems deliver lifelong vertical reliability.
                </p>
              </div>

              {/* Signature Italic Tagline */}
              <p className="text-xs sm:text-sm italic font-serif text-gray-300/80 pt-0.5">
                Move with precision. Experience quiet power. Elevate your architecture with RR Elevators.
              </p>

              {/* Dual Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3 sm:pt-4">
                {/* Primary CTA */}
                <button
                  type="button"
                  onClick={() => handleScrollTo('contact')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-[#0F172A] hover:bg-slate-100 font-bold text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <span>Book Free Site Inspection</span>
                  <CalendarCheck size={16} className="text-[#0082C8]" />
                </button>

                {/* Secondary CTA */}
                <button
                  type="button"
                  onClick={() => handleScrollTo('services')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-white/40 font-semibold text-xs sm:text-sm backdrop-blur-sm transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Explore Services</span>
                  <ArrowRight size={15} className="text-[#38BDF8]" />
                </button>
              </div>

              {/* Micro Industrial Highlights */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-1 text-[11px] text-gray-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-[#0082C8]" />
                  <span>Zero Pit &amp; MRL Shafts</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-[#0082C8]" />
                  <span>Up to 40% Energy Saved</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-[#0082C8]" />
                  <span>24/7 Breakdown Dispatch</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metric Counter Strip */}
        <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-[#1E2E4E]/80">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 xl:gap-6">
            <StatCard
              value={METRIC_STATS[0].value}
              suffix={METRIC_STATS[0].suffix}
              label={METRIC_STATS[0].label}
              icon={CheckCircle2}
              delay="0ms"
            />
            <StatCard
              value={METRIC_STATS[1].value}
              suffix={METRIC_STATS[1].suffix}
              label={METRIC_STATS[1].label}
              icon={Activity}
              decimals={1}
              delay="100ms"
            />
            <StatCard
              value={METRIC_STATS[2].value}
              suffix={METRIC_STATS[2].suffix}
              label={METRIC_STATS[2].label}
              icon={Clock}
              delay="200ms"
            />
            <StatCard
              value={METRIC_STATS[3].value}
              suffix={METRIC_STATS[3].suffix}
              label={METRIC_STATS[3].label}
              icon={ShieldCheck}
              delay="300ms"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
