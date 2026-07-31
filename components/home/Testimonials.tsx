'use client';

import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  const testimonial = TESTIMONIALS[current];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-primary relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />

      <div className="container-custom relative z-10">
        <SectionHeader
          label="Testimonials"
          title="What Our Clients Say"
          description="Hear from the businesses and institutions that trust RRL Elevators for their vertical mobility needs."
          light
        />

        <div className="max-w-3xl mx-auto">
          {/* Quote */}
          <div className="relative bg-white/5 rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-12 border border-white/10">
            <Quote className="w-8 h-8 sm:w-12 sm:h-12 text-accent/20 absolute top-4 left-4 sm:top-6 sm:left-6" />

            <div className="relative z-10 text-center">
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4 sm:mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 sm:w-5 sm:h-5 ${i < testimonial.rating ? 'text-accent fill-accent' : 'text-gray-600'}`}
                  />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-xs sm:text-base md:text-xl text-gray-200 leading-relaxed mb-5 sm:mb-8 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div>
                <div className="w-10 h-10 sm:w-14 sm:h-14 mx-auto rounded-full bg-accent/20 flex items-center justify-center mb-2 sm:mb-3">
                  <span className="text-sm sm:text-lg font-bold text-accent">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <h4 className="text-white text-xs sm:text-base font-semibold">{testimonial.name}</h4>
                <p className="text-[11px] sm:text-sm text-gray-400">
                  {testimonial.role}, {testimonial.company}
                </p>
                <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5">{testimonial.location}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <button
              onClick={prev}
              className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-all cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <div className="flex items-center gap-1.5 sm:gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    i === current ? 'bg-accent w-6 sm:w-8' : 'bg-white/30 hover:bg-white/50 w-2'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-all cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
