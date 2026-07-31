'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { HERO_STATS } from '@/lib/constants';
import { ArrowRight, Play } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { useCounter } from '@/hooks/useCounter';

function HeroStat({ value, suffix, label, delay = '0s' }: { value: number; suffix: string; label: string; delay?: string }) {
  const { ref, isInView } = useInView({ threshold: 0.5 });
  const count = useCounter({ end: value, enabled: isInView, duration: 1500 });

  return (
    <div ref={ref} className="glass rounded-xl p-4 text-center animate-float" style={{ animationDelay: delay }}>
      <div className="text-2xl md:text-3xl font-bold text-white font-[family-name:var(--font-heading)]">
        {count}<span className="text-accent">{suffix}</span>
      </div>
      <p className="text-xs text-gray-300 mt-1">{label}</p>
    </div>
  );
}

export function Hero() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Gradient (animated fallback for video) */}
      <div className="absolute inset-0 bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary" />
        {/* Decorative grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Accent glow */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-[100px]" />
      </div>

      {/* Dark overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="relative z-10 container-custom w-full pt-16 pb-10 sm:pt-24 sm:pb-16">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center min-h-[75vh] md:min-h-[85vh]">
          {/* Left: Text */}
          <div className="space-y-4 sm:space-y-6">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-[11px] sm:text-xs md:text-sm text-gray-300 ${
                isInView ? 'animate-fade-up' : 'opacity-0'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Premium Elevator Solutions Since 2005
            </div>

            {/* Heading */}
            <h1
              className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-[family-name:var(--font-heading)] leading-[1.15] ${
                isInView ? 'animate-fade-up delay-100' : 'opacity-0'
              }`}
            >
              Engineering{' '}
              <span className="gradient-text">Vertical</span>{' '}
              <br className="hidden sm:block" />
              Mobility
            </h1>

            {/* Subheading */}
            <p
              className={`text-xs sm:text-sm md:text-base text-gray-300 max-w-xl leading-relaxed ${
                isInView ? 'animate-fade-up delay-200' : 'opacity-0'
              }`}
            >
              Premium Passenger, Hospital, Freight, Home &amp; Commercial Elevator
              Solutions — Built for{' '}
              <span className="text-accent font-semibold">Safety</span> &amp;{' '}
              <span className="text-accent font-semibold">Performance</span>.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex items-center gap-2.5 sm:gap-3 ${
                isInView ? 'animate-fade-up delay-300' : 'opacity-0'
              }`}
            >
              <Button variant="accent" size="md" href="/contact">
                Get Free Quote
                <ArrowRight size={14} className="sm:w-4 sm:h-4" />
              </Button>
              <Button variant="outline" size="md" href="/products">
                Explore Products
              </Button>
            </div>

            {/* Mobile/Tablet Stats Cards Grid */}
            <div
              className={`grid grid-cols-3 gap-2 pt-1 lg:hidden ${
                isInView ? 'animate-fade-up delay-350' : 'opacity-0'
              }`}
            >
              {HERO_STATS.map((stat, i) => (
                <div key={i} className="glass rounded-lg p-2 sm:p-3 text-center border border-white/5 shadow-md">
                  <div className="text-base sm:text-xl font-bold text-accent font-[family-name:var(--font-heading)]">
                    {stat.value}
                    <span className="text-accent">{stat.suffix}</span>
                  </div>
                  <p className="text-[9px] sm:text-xs text-gray-300 mt-0.5 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div
              className={`flex items-center gap-3 sm:gap-6 pt-1 ${
                isInView ? 'animate-fade-up delay-400' : 'opacity-0'
              }`}
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-accent sm:w-3.5 sm:h-3.5" strokeWidth="2.5">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div className="text-[11px] sm:text-xs md:text-sm text-gray-400 leading-tight">
                  <span className="text-white font-semibold">ISO 9001:2015</span>
                  <br />
                  Certified
                </div>
              </div>
              <div className="w-px h-7 bg-white/20" />
              <div className="text-[11px] sm:text-xs md:text-sm text-gray-400 leading-tight">
                Trusted by <span className="text-accent font-semibold">250+</span> Corporates
              </div>
            </div>
          </div>

          {/* Right: Floating Stats & Visual (Only Desktop) */}
          <div className="hidden lg:flex flex-col items-center justify-center relative">
            <div className="relative w-64 xl:w-72 h-[420px]">
              {/* Elevator visual showcase */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                <Image
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=800&auto=format&fit=crop"
                  alt="RRL Elevators Glass Elevator Showcase"
                  fill
                  priority
                  sizes="300px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs text-accent font-mono bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                  <span>RRL MOBILITY</span>
                  <span className="font-bold animate-pulse">● LIVE</span>
                </div>
              </div>

              {/* Floating stat cards with safe positioning */}
              <div className="absolute -left-12 xl:-left-16 top-10 w-32 xl:w-36 z-10">
                <HeroStat value={HERO_STATS[0].value} suffix={HERO_STATS[0].suffix} label={HERO_STATS[0].label} delay="0s" />
              </div>
              <div className="absolute -right-8 xl:-right-12 top-1/2 -translate-y-1/2 w-32 xl:w-36 z-10">
                <HeroStat value={HERO_STATS[1].value} suffix={HERO_STATS[1].suffix} label={HERO_STATS[1].label} delay="0.6s" />
              </div>
              <div className="absolute -left-8 xl:-left-10 bottom-12 w-32 xl:w-36 z-10">
                <HeroStat value={HERO_STATS[2].value} suffix={HERO_STATS[2].suffix} label={HERO_STATS[2].label} delay="1.2s" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--background)] to-transparent" />
    </section>
  );
}
