'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Users,
  Eye,
  PackageCheck,
  Stethoscope,
  RefreshCw,
  Headphones,
  ArrowRight,
  CheckCircle2,
  SlidersHorizontal,
  X,
  PhoneCall,
} from 'lucide-react';
import { SERVICES_LIST, CONTACT } from '@/lib/constants';
import { useInView } from '@/hooks/useInView';
import type { ElevatorService } from '@/types';

const serviceIcons = {
  Users,
  Eye,
  PackageCheck,
  Stethoscope,
  RefreshCw,
  Headphones,
};

export function Services() {
  const { ref } = useInView({ threshold: 0.1 });
  const [selectedService, setSelectedService] = useState<ElevatorService | null>(null);

  const handleInquire = (serviceTitle: string) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });

      // If project type select exists, select corresponding option
      const selectEl = document.getElementById('projectType') as HTMLSelectElement | null;
      if (selectEl) {
        if (serviceTitle.includes('Passenger') || serviceTitle.includes('Capsule')) {
          selectEl.value = 'Commercial';
        } else if (serviceTitle.includes('Freight')) {
          selectEl.value = 'Industrial';
        } else if (serviceTitle.includes('AMC') || serviceTitle.includes('Modernization')) {
          selectEl.value = 'AMC';
        } else {
          selectEl.value = 'Residential';
        }
      }
    }
  };

  return (
    <section id="services" ref={ref} className="py-14 sm:py-20 bg-[#0F172A] text-white relative overflow-hidden">
      {/* Background Grid Pattern & Cyan Accent Lighting */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#1A4B75]/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 container-custom">
        {/* Section Header - Compact & Aligned */}
        <div className="max-w-2xl xl:max-w-3xl mx-auto text-center space-y-3 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#1A4B75]/40 border border-[#0082C8]/40 text-[#0082C8] text-[11px] font-bold uppercase tracking-wider">
            <SlidersHorizontal size={13} className="text-[#0082C8]" />
            <span>Engineered Systems &amp; Lifecycle</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white font-[family-name:var(--font-heading)] leading-tight">
            Our Core Vertical{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0082C8] via-[#38BDF8] to-[#1A4B75]">
              Mobility Services
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
            From precision gearless passenger lifts to high-tonnage industrial freight systems and round-the-clock
            AMC emergency dispatch. Explore our certified portfolio below.
          </p>
        </div>

        {/* 6 Interactive Service Cards - Compact & Sleek */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {SERVICES_LIST.map((service, index) => {
            const Icon = serviceIcons[service.icon as keyof typeof serviceIcons] || Users;

            return (
              <div
                key={service.id}
                className="group relative bg-[#131E35] rounded-xl overflow-hidden border border-[#1E2E4E] hover:border-[#0082C8] transition-all duration-300 flex flex-col justify-between shadow-md hover:shadow-[0_10px_25px_-5px_rgba(0,130,200,0.25)] hover:-translate-y-1"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {/* Visual Image Header - Authentic RR Elevators Installation */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0A101D]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131E35] via-[#131E35]/40 to-transparent" />

                  {/* Icon badge floating on top left */}
                  <div className="absolute top-2.5 left-2.5 z-10">
                    <div className="w-8 h-8 rounded-lg bg-[#0F172A]/85 backdrop-blur-md border border-[#0082C8]/40 text-[#38BDF8] flex items-center justify-center shadow-md">
                      <Icon size={16} />
                    </div>
                  </div>

                  {/* System tag floating on top right */}
                  <div className="absolute top-2.5 right-2.5 z-10">
                    <span className="text-[9.5px] font-mono font-bold bg-[#0F172A]/85 backdrop-blur-md px-2 py-0.5 rounded text-gray-300 border border-white/10">
                      {`0${index + 1} / SYS`}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-4.5 flex-1 flex flex-col justify-between">
                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-[family-name:var(--font-heading)] text-white mb-1.5 group-hover:text-[#38BDF8] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-300 leading-relaxed mb-3">
                      {service.tagline}
                    </p>

                  {/* Core Specifications Box - Compact */}
                  <div className="p-3 rounded-lg bg-[#0F172A] border border-[#1E2E4E] mb-3.5 space-y-1.5">
                    <div className="text-[9px] uppercase font-mono tracking-wider text-[#0082C8] font-bold">
                      Core Technical Specs
                    </div>
                    <div className="space-y-1">
                      {service.specs.slice(0, 3).map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-center justify-between text-[11px]">
                          <span className="text-gray-400">{spec.label}:</span>
                          <span className="font-semibold text-gray-200 text-right">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <ul className="space-y-1 mb-4">
                    {service.keyFeatures.slice(0, 2).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-1.5 text-[11px] text-gray-300">
                        <CheckCircle2 size={13} className="text-[#0082C8] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                  {/* Card Actions - Refined small buttons */}
                  <div className="pt-3 border-t border-[#1E2E4E] flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="text-[11px] font-semibold text-[#38BDF8] hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>Full Specs</span>
                    <ArrowRight size={12} />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleInquire(service.title)}
                    className="px-3 py-1 rounded-md bg-[#0082C8]/20 hover:bg-[#0082C8] text-[#38BDF8] hover:text-white text-[10.5px] font-bold uppercase tracking-wider border border-[#0082C8]/40 transition-all cursor-pointer"
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            </div>
          );
          })}
        </div>
      </div>

      {/* Full Specs Modal Dialog */}
      {selectedService && (
        <div
          className="fixed inset-0 z-[120] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedService(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-[#0F172A] border border-[#0082C8]/50 rounded-xl max-w-md w-full overflow-hidden shadow-2xl relative text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div className="relative aspect-[16/8] w-full overflow-hidden bg-[#0A101D]">
              <Image
                src={selectedService.image}
                alt={selectedService.title}
                fill
                unoptimized
                sizes="500px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent" />
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="absolute top-3 right-3 w-7 h-7 rounded-lg bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors"
                aria-label="Close Specs Modal"
              >
                <X size={15} />
              </button>
              <div className="absolute bottom-3 left-4 right-4">
                <span className="text-[10px] font-mono text-[#0082C8] uppercase font-bold tracking-wider">
                  Technical Specification Sheet
                </span>
                <h3 className="text-lg sm:text-xl font-black font-[family-name:var(--font-heading)] text-white mt-0.5">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <div className="p-5 sm:p-6 space-y-4">

            <p className="text-xs text-gray-300 leading-relaxed">
              {selectedService.description}
            </p>

            {/* Complete Specs Table */}
            <div className="space-y-1.5 border border-[#1E2E4E] rounded-lg p-3 bg-[#131E35]">
              <div className="text-[10px] font-mono uppercase text-[#0082C8] font-bold pb-1.5 border-b border-[#1E2E4E]">
                Engineering Specifications
              </div>
              {selectedService.specs.map((sp, idx) => (
                <div key={idx} className="flex items-center justify-between py-1 text-[11px] border-b border-white/5 last:border-0">
                  <span className="text-gray-400 font-medium">{sp.label}</span>
                  <span className="font-semibold text-white">{sp.value}</span>
                </div>
              ))}
            </div>

            {/* All Features */}
            <div>
              <div className="text-[10px] uppercase font-mono text-gray-400 mb-1.5 font-semibold">
                Standard Inclusions &amp; Safety
              </div>
              <ul className="space-y-1">
                {selectedService.keyFeatures.map((kf, idx) => (
                  <li key={idx} className="flex items-center gap-1.5 text-xs text-gray-300">
                    <CheckCircle2 size={13} className="text-[#0082C8] shrink-0" />
                    <span>{kf}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal Actions */}
            <div className="pt-2 flex items-center justify-between gap-2.5">
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#131E35] border border-[#1E2E4E] text-xs font-semibold text-gray-300 hover:text-white"
              >
                <PhoneCall size={13} className="text-[#0082C8]" />
                <span>Call Engineer</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  const serviceName = selectedService.title;
                  setSelectedService(null);
                  handleInquire(serviceName);
                }}
                className="flex-1 py-2 px-3 rounded-lg bg-gradient-to-r from-[#0082C8] to-[#1A4B75] text-white text-xs font-bold uppercase tracking-wider hover:brightness-110 shadow-md text-center"
              >
                Request Quotation
              </button>
            </div>
          </div>
        </div>
      </div>
    )}
    </section>
  );
}
