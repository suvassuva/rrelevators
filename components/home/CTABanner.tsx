'use client';

import { Phone, FileText, ArrowRight } from 'lucide-react';
import { CONTACT } from '@/lib/constants';
import { useInView } from '@/hooks/useInView';

export function CTABanner() {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-24 bg-gradient-to-r from-primary via-secondary to-primary relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-64 h-64 bg-accent/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className={`text-center max-w-3xl mx-auto ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-[family-name:var(--font-heading)] mb-3 sm:mb-4">
            Need a Reliable{' '}
            <span className="gradient-text">Elevator Solution?</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-lg text-gray-300 mb-6 sm:mb-8 max-w-xl mx-auto leading-relaxed">
            Get Your Free Consultation Today. Our experts are ready to help you find the
            perfect elevator solution for your project.
          </p>

          <div className="flex flex-row items-center justify-center gap-2.5 sm:gap-4">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 sm:px-8 sm:py-3.5 bg-white/10 text-white border border-white/20 rounded-lg font-semibold text-xs sm:text-sm md:text-base hover:bg-white/20 transition-all"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Call Now
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 sm:px-8 sm:py-3.5 bg-accent text-primary rounded-lg font-semibold text-xs sm:text-sm md:text-base hover:bg-accent-hover transition-all shadow-xl hover:shadow-accent/30"
            >
              <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Get Free Quote
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
