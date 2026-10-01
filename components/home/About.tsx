'use client';

import Image from 'next/image';
import {
  ShieldCheck,
  Zap,
  Sparkles,
  Cpu,
  CheckCircle2,
  Settings2,
  Lock,
  ExternalLink,
} from 'lucide-react';
import { InstagramIcon } from '@/components/ui/Icons';
import { useInView } from '@/hooks/useInView';
import { ABOUT_FEATURES, SOCIAL_LINKS } from '@/lib/constants';

const featureIcons = {
  safety: ShieldCheck,
  efficiency: Zap,
  cabins: Sparkles,
};

export function About() {
  const { ref } = useInView({ threshold: 0.15 });

  return (
    <section id="about" ref={ref} className="py-14 sm:py-20 bg-[#F8FAFC] text-[#0F172A] relative overflow-hidden">
      {/* Subtle architectural background grid */}
      <div className="absolute inset-0 bg-grid-light opacity-50 pointer-events-none" />

      <div className="relative z-10 container-custom">
        {/* Section Header - Refined & Proportional */}
        <div className="max-w-2xl xl:max-w-3xl mx-auto text-center space-y-3 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#1A4B75]/10 border border-[#0082C8]/30 text-[#0082C8] text-[11px] font-bold uppercase tracking-wider">
            <Settings2 size={13} className="text-[#0082C8]" />
            <span>About RR Elevators</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#0F172A] font-[family-name:var(--font-heading)] leading-tight">
            Engineering Vertical Precision with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0082C8] to-[#1A4B75]">
              Zero Compromise.
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
            For nearly two decades, RR Elevators has stood at the intersection of heavy industrial
            rigor and architectural elegance. Every hoistway, motor drive, and cabin is manufactured
            to micrometer tolerances with advanced Automatic Rescue Devices (ARD), gearless PMSM efficiency,
            and BIS/CE certified safety standards.
          </p>
        </div>

        {/* Core Engineering Benchmarks - Clean, Simple, High-Impact Equal 2-Column Showcase */}
        <div className="mb-10 sm:mb-14 rounded-2xl bg-white border border-gray-200/80 shadow-sm p-5 sm:p-7 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-10 items-center">
            {/* Left Column: Authentic Bengaluru Engineering Hub Photo Card (Equal 50% Width) */}
            <div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-gray-200/90 shadow-md bg-gray-900 group">
                <Image
                  src="/images/unnamed (8).webp"
                  alt="RR Elevators Customer Experience Center & Engineering Hub, SS Towers, Bengaluru"
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-black/20 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0F172A]/85 backdrop-blur-md border border-white/10 text-[10px] font-mono font-bold text-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0082C8] animate-pulse" />
                    Bengaluru Engineering Hub
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-xs font-bold leading-tight drop-shadow">SS Towers, Munnekolala</div>
                  <div className="text-[10px] text-gray-300 font-mono mt-0.5">IS 14665 &amp; BIS Certified Facility</div>
                </div>
              </div>
            </div>

            {/* Right Column: 3 Core Engineering Pillars & Clean Key Stats (Equal 50% Width) */}
            <div className="space-y-4">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#0082C8] block mb-1">
                  Core Engineering Benchmarks
                </span>
                <h3 className="text-lg sm:text-xl font-black text-[#0F172A] font-[family-name:var(--font-heading)] leading-snug">
                  Precision Engineering Built for Zero Downtime
                </h3>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Every elevator manufactured at our Bengaluru facility undergoes rigorous component stress testing and optical jig calibration to guarantee passenger safety and whisper-quiet performance.
                </p>
              </div>

              {/* 3 Pillars List - Clear, Simple, All Visible At A Glance */}
              <div className="space-y-2.5">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50/80 border border-gray-100">
                  <div className="w-7 h-7 rounded-md bg-[#0082C8]/10 text-[#0082C8] flex items-center justify-center shrink-0 mt-0.5">
                    <Lock size={14} />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#0F172A]">Automatic Rescue Device (ARD)</h4>
                    <p className="text-[11px] text-gray-500 mt-0.5 leading-relaxed">
                      Microprocessor-controlled SMF battery rescue guides the car safely to the nearest landing and opens doors automatically during blackouts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50/80 border border-gray-100">
                  <div className="w-7 h-7 rounded-md bg-[#0082C8]/10 text-[#0082C8] flex items-center justify-center shrink-0 mt-0.5">
                    <Zap size={14} />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#0F172A]">Gearless PMSM Efficiency</h4>
                    <p className="text-[11px] text-gray-500 mt-0.5 leading-relaxed">
                      Permanent Magnet Synchronous motors deliver up to 40% energy reduction with ultra-quiet, oil-free direct drive operation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50/80 border border-gray-100">
                  <div className="w-7 h-7 rounded-md bg-[#0082C8]/10 text-[#0082C8] flex items-center justify-center shrink-0 mt-0.5">
                    <Cpu size={14} />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#0F172A]">Precision Steel Chassis</h4>
                    <p className="text-[11px] text-gray-500 mt-0.5 leading-relaxed">
                      Heavy-gauge galvanized steel laser-cut to micrometer tolerances to eliminate vibration harmonics and ensure long-term durability.
                    </p>
                  </div>
                </div>
              </div>

              {/* Clean Metric Badges Strip - Balanced & Never Cramped */}
              <div className="grid grid-cols-3 gap-2.5 pt-1">
                <div className="p-2 sm:p-2.5 rounded-lg bg-[#0F172A] text-white text-center">
                  <div className="text-xs sm:text-sm font-black text-[#38BDF8]">± 0.05 mm</div>
                  <div className="text-[9.5px] text-gray-300 font-mono mt-0.5">Tolerance</div>
                </div>
                <div className="p-2 sm:p-2.5 rounded-lg bg-[#0F172A] text-white text-center">
                  <div className="text-xs sm:text-sm font-black text-[#0082C8]">40% Lower</div>
                  <div className="text-[9.5px] text-gray-300 font-mono mt-0.5">Power Draw</div>
                </div>
                <div className="p-2 sm:p-2.5 rounded-lg bg-[#0F172A] text-white text-center">
                  <div className="text-xs sm:text-sm font-black text-white">&lt; 3s</div>
                  <div className="text-[9.5px] text-gray-300 font-mono mt-0.5">ARD Rescue</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Feature Cards with Authentic Photo Headers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {ABOUT_FEATURES.map((feature) => {
            const Icon = featureIcons[feature.id as keyof typeof featureIcons] || ShieldCheck;

            return (
              <div
                key={feature.id}
                className="relative bg-white rounded-xl overflow-hidden border border-gray-200/90 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
              >
                {/* Visual Image Header */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-900">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-black/20" />

                  <div className="absolute top-2.5 left-2.5 z-10">
                    <div className="w-8 h-8 rounded-lg bg-white/95 backdrop-blur-md text-[#0082C8] flex items-center justify-center shadow-md">
                      <Icon size={16} />
                    </div>
                  </div>

                  <div className="absolute top-2.5 right-2.5 z-10">
                    <span className="text-[9.5px] font-bold font-mono tracking-wider px-2 py-0.5 rounded-full bg-[#0F172A]/85 text-white backdrop-blur-md border border-white/10">
                      {feature.badge}
                    </span>
                  </div>
                </div>

                <div className="p-4.5 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-[family-name:var(--font-heading)] text-[#0F172A] mb-1.5 group-hover:text-[#0082C8] transition-colors">
                      {feature.title}
                    </h3>

                    <p className="text-xs text-gray-600 leading-relaxed mb-3">
                      {feature.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] font-semibold text-[#1A4B75]">
                    <span>{feature.highlight}</span>
                    <CheckCircle2 size={14} className="text-[#0082C8]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Real Craftsmanship & Hoistway Installations Strip */}
        <div className="mt-10 sm:mt-12 p-5 sm:p-6 rounded-2xl bg-white border border-gray-200/90 shadow-md space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-gray-100">
            <div>
              <div className="text-[10px] font-mono uppercase font-bold text-[#0082C8] tracking-wider">
                Bengaluru Facility &amp; On-Site Deployments
              </div>
              <h3 className="text-base sm:text-lg font-black text-[#0F172A] font-[family-name:var(--font-heading)] mt-0.5">
                Authentic Craftsmanship &amp; Custom Cabin Finishes
              </h3>
            </div>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E1306C] hover:text-[#C13584] transition-colors"
            >
              <InstagramIcon size={14} />
              <span>Explore @rr_elevators on Instagram</span>
              <ExternalLink size={12} />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              {
                title: 'Executive Walnut Suite',
                desc: 'Acoustic wood & gold trim',
                src: '/images/unnamed (9).webp',
              },
              {
                title: 'Emerald Lotus Canopy',
                desc: 'Laser-cut false ceiling',
                src: '/images/unnamed (4).webp',
              },
              {
                title: 'Sunburst Bronze Radial',
                desc: 'Artisan etched bronze panels',
                src: '/images/unnamed (6).webp',
              },
              {
                title: 'Cyber Mandala Art',
                desc: 'Sapphire LED backlit canopy',
                src: '/images/unnamed (11).webp',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-900 border border-gray-200/80 shadow-xs"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-2 left-2 right-2 text-white">
                  <div className="text-[11px] font-bold leading-tight drop-shadow">{item.title}</div>
                  <div className="text-[9.5px] text-gray-300 font-mono leading-tight">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
