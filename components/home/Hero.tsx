'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  ShieldCheck,
  Activity,
  Clock,
  CheckCircle2,
  CalendarCheck,
  Gauge,
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
      className="relative p-3 sm:p-4 xl:p-5 rounded-xl bg-[#0F172A]/90 border border-[#1E2E4E] hover:border-[#0082C8]/60 transition-all duration-300 group shadow-md hover:shadow-[0_8px_20px_-4px_rgba(0,130,200,0.25)] flex flex-col justify-between"
      style={{ animationDelay: delay }}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] xl:text-[11px] uppercase font-mono tracking-wider text-gray-400 font-medium">
          Metric
        </span>
        <div className="w-7 h-7 xl:w-8 xl:h-8 rounded-md bg-[#1A4B75]/30 border border-[#0082C8]/30 flex items-center justify-center text-[#0082C8] group-hover:bg-[#0082C8] group-hover:text-white transition-colors">
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

      {/* Industrial corner tick marks */}
      <span className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-[#0082C8]/40" />
      <span className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-[#0082C8]/40" />
    </div>
  );
}

export function Hero() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [currentFloor, setCurrentFloor] = useState(1);
  const [imgError, setImgError] = useState(false);

  // Subtle animated elevator floor simulator
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFloor((prev) => (prev >= 24 ? 1 : prev + 1));
    }, 2800);
    return () => clearInterval(interval);
  }, []);

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
      className="relative min-h-[92vh] pt-20 sm:pt-24 pb-12 sm:pb-16 bg-[#0F172A] text-white overflow-hidden flex flex-col justify-center"
    >
      {/* Background Architectural Grid & Subtle Laser Lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/70 via-[#0F172A]/90 to-[#0F172A] pointer-events-none" />

      {/* Atmospheric Cyan & Navy Glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#0082C8]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#1A4B75]/25 rounded-full blur-[160px] pointer-events-none" />

      {/* Vertical movement motion line representing elevator hoistway */}
      <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#0082C8]/30 to-transparent pointer-events-none">
        <div className="w-1.5 h-10 bg-[#0082C8] rounded-full -left-[2px] relative animate-vertical-pulse blur-[1px]" />
      </div>

      <div className="relative z-10 container-custom w-full">
        {/* Top Grid: Equal 50/50 Split for Text and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Typography & Dual CTAs - Equal 50% Width */}
          <div className="space-y-4 sm:space-y-5 lg:space-y-6 flex flex-col justify-center">
            {/* Engineering Status Pill - Sleek & Compact */}
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#131E35] border border-[#0082C8]/40 shadow-[0_0_12px_rgba(0,130,200,0.2)] text-[11px] text-gray-200 w-fit ${
                isInView ? 'animate-fade-up' : 'opacity-0'
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0082C8] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0082C8]"></span>
              </span>
              <span className="font-semibold text-white tracking-wide">
                IS 14665 &amp; ISO 9001:2015 CERTIFIED
              </span>
              <span className="text-gray-400 font-mono">|</span>
              <span className="text-[#38BDF8] font-mono text-[10.5px] font-bold">ARD PROTECTED</span>
            </div>

            {/* High-Impact Headline - Balanced & Crisp */}
            <h1
              className={`text-2xl sm:text-3xl lg:text-[40px] xl:text-[46px] 2xl:text-[50px] font-black tracking-tight leading-[1.15] font-[family-name:var(--font-heading)] ${
                isInView ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: '100ms' }}
            >
              Precision Mobility.{' '}
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#0082C8] via-[#38BDF8] to-[#1A4B75]">
                Engineering Vertical Excellence.
              </span>
            </h1>

            {/* Subheading - Compact & Highly Legible */}
            <p
              className={`text-xs sm:text-sm lg:text-[15px] xl:text-base text-gray-300 max-w-xl xl:max-w-2xl leading-relaxed font-normal ${
                isInView ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: '200ms' }}
            >
              Delivering whisper-quiet, ultra-efficient gearless traction and panoramic glass elevators.
              Engineered with military-grade ARD safety, regenerative power drives, and bespoke architectural
              shaft integrations for high-rises, luxury residences, and industrial hubs.
            </p>

            {/* Dual CTAs - Sleek, Small & Aligned */}
            <div
              className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1 ${
                isInView ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: '300ms' }}
            >
              {/* CTA 1: Book Free Site Inspection -> scrolls to #contact */}
              <button
                type="button"
                onClick={() => handleScrollTo('contact')}
                className="inline-flex items-center justify-center gap-2 px-4.5 py-2.5 rounded-lg bg-gradient-to-r from-[#0082C8] to-[#1A4B75] text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:brightness-110 shadow-[0_3px_15px_rgba(0,130,200,0.35)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <CalendarCheck size={16} className="text-[#38BDF8]" />
                <span>Book Free Site Inspection</span>
              </button>

              {/* CTA 2: View Portfolio -> scrolls to #gallery */}
              <button
                type="button"
                onClick={() => handleScrollTo('gallery')}
                className="inline-flex items-center justify-center gap-1.5 px-4.5 py-2.5 rounded-lg bg-[#131E35] border border-[#1E2E4E] hover:border-[#0082C8] text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#1A2644] transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View Portfolio</span>
                <ArrowRight size={15} className="text-[#0082C8]" />
              </button>
            </div>

            {/* Micro Industrial Certifications & Guarantee */}
            <div
              className={`pt-2 flex flex-wrap items-center gap-y-1.5 gap-x-4 text-[11px] text-gray-400 font-medium ${
                isInView ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: '400ms' }}
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-[#0082C8]" />
                <span>Zero Pit &amp; MRL Shaft Options</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-[#0082C8]" />
                <span>Up to 40% Energy Regeneration</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-[#0082C8]" />
                <span>24/7 Breakdown Dispatch SLA</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Elevator Showcase - Equal 50% Width & Balanced Height */}
          <div
            className={`relative flex items-center justify-center lg:justify-end ${
              isInView ? 'animate-fade-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '250ms' }}
          >
            {/* Architectural Frame Showcase */}
            <div className="relative w-full max-w-lg xl:max-w-xl rounded-2xl bg-gradient-to-b from-[#131E35] to-[#0A101D] p-3 sm:p-3.5 border border-[#1E2E4E] shadow-2xl">
              {/* Live Shaft Telemetry Header - Compact */}
              <div className="flex items-center justify-between px-2.5 py-1.5 bg-[#0F172A] rounded-lg border border-white/5 mb-2.5 text-[11px] font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0082C8] animate-ping" />
                  <span className="text-[#0082C8] font-bold">RR-SHAFT#01</span>
                </div>
                <div className="flex items-center gap-2.5 text-gray-300">
                  <span>VELOCITY: 2.5 m/s</span>
                  <span className="text-white font-bold bg-[#1A4B75]/50 px-1.5 py-0.5 rounded border border-[#0082C8]/30">
                    FL {currentFloor < 10 ? `0${currentFloor}` : currentFloor} / 24
                  </span>
                </div>
              </div>

              {/* Main Image Container with Equal Balanced Height */}
              <div className="relative aspect-[4/3.2] sm:aspect-[4/3] rounded-xl overflow-hidden border border-[#0082C8]/30 group bg-[#0A101D]">
                {!imgError ? (
                  <Image
                    src="/images/unnamed (4).webp"
                    alt="RR Elevators Precision Installation in Bengaluru"
                    fill
                    priority
                    unoptimized
                    onError={() => setImgError(true)}
                    className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                  />
                ) : (
                  /* Fallback Architectural Wireframe Schematic */
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#131E35] to-[#0A101D] text-center">
                    <div className="w-16 h-24 border-2 border-dashed border-[#0082C8]/50 rounded-lg flex flex-col items-center justify-center relative mb-3">
                      <div className="w-10 h-10 border border-[#0082C8] rounded bg-[#0082C8]/20 flex items-center justify-center animate-elevator-bob">
                        <Gauge size={18} className="text-[#38BDF8]" />
                      </div>
                      <div className="absolute -top-1 w-2 h-2 bg-[#0082C8] rounded-full" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#0082C8] uppercase tracking-wider">
                      Panoramic Shaft Visualizer
                    </span>
                    <span className="text-[11px] text-gray-400 mt-1">
                      Multi-Axis Gearless Motor Active
                    </span>
                  </div>
                )}

                {/* Cyber Cyan Glass Shading Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-[#0F172A]/40 pointer-events-none" />

                {/* Laser level alignment mark */}
                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex items-center justify-between px-3 pointer-events-none">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#0082C8]/70 to-transparent" />
                  <span className="px-2 py-0.5 rounded bg-[#0F172A]/90 border border-[#0082C8]/50 text-[9px] font-mono text-[#38BDF8] font-bold">
                    ALIGN: ±1mm
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#0082C8]/70 to-transparent" />
                </div>

                {/* Dynamic Floating Telemetry Pills - Sleek & Compact */}
                <div className="absolute bottom-3 left-3 right-3 space-y-1.5">
                  <div className="p-2 sm:p-2.5 rounded-lg bg-[#0F172A]/90 backdrop-blur-md border border-[#1E2E4E] flex items-center justify-between shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-md bg-[#0082C8]/20 flex items-center justify-center text-[#0082C8] shrink-0">
                        <Gauge size={14} />
                      </div>
                      <div>
                        <div className="text-[9px] uppercase font-bold text-gray-400 leading-none">
                          Drive Mechanism
                        </div>
                        <div className="text-xs font-bold text-white mt-0.5">
                          PMSM Gearless Motor
                        </div>
                      </div>
                    </div>
                    <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-[#0082C8]/20 text-[#38BDF8] border border-[#0082C8]/40">
                      ACTIVE
                    </span>
                  </div>

                  <div className="p-2 rounded-md bg-[#0A101D]/90 backdrop-blur-sm border border-white/10 flex items-center justify-between text-[11px]">
                    <span className="text-gray-300 font-medium">Automatic Rescue Device (ARD)</span>
                    <span className="text-[#38BDF8] font-bold flex items-center gap-1 font-mono text-[10px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0082C8]" />
                      BATTERY 100%
                    </span>
                  </div>
                </div>

                {/* Corner Architectural Brackets */}
                <span className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-[#0082C8]" />
                <span className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-[#0082C8]" />
                <span className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-[#0082C8]" />
                <span className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-[#0082C8]" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metric Counter Strip: 4 Metric Cards */}
        <div className="mt-8 sm:mt-10 xl:mt-14 pt-6 sm:pt-8 border-t border-[#1E2E4E]/80">
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
