'use client';

import { useInView } from '@/hooks/useInView';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import { ArrowRight, Target, Eye, Heart } from 'lucide-react';

export function AboutPreview() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-24 bg-[var(--background)]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Left: Image */}
          <div className={`relative ${isInView ? 'animate-slide-left' : 'opacity-0'}`}>
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] bg-secondary group">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop"
                alt="RRL Elevators Engineering & Manufacturing"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Visual with logo overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30 flex items-center justify-center p-6">
                <div className="text-center space-y-2 sm:space-y-3">
                  <div className="bg-white/90 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-2xl inline-block border border-white/20">
                    <Image
                      src="/images/logo.png"
                      alt="RRL Elevators"
                      width={160}
                      height={50}
                      className="h-10 sm:h-14 w-auto mx-auto object-contain"
                    />
                  </div>
                  <p className="text-gray-200 text-xs sm:text-sm font-semibold tracking-wide drop-shadow-md">
                    State-of-the-Art Manufacturing &amp; Engineering
                  </p>
                </div>
              </div>
            </div>
            {/* Accent decoration */}
            <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-24 h-24 sm:w-32 sm:h-32 border-3 sm:border-4 border-accent/30 rounded-xl sm:rounded-2xl -z-10" />
            {/* Experience badge */}
            <div className="absolute -bottom-4 -left-3 sm:-bottom-6 sm:-left-6 bg-accent text-primary rounded-xl sm:rounded-2xl p-2.5 sm:p-4 shadow-xl">
              <div className="text-xl sm:text-3xl font-bold font-[family-name:var(--font-heading)]">20+</div>
              <div className="text-xs sm:text-sm font-semibold">Years</div>
            </div>
          </div>

          {/* Right: Content */}
          <div className={`space-y-4 sm:space-y-6 ${isInView ? 'animate-slide-right' : 'opacity-0'}`}>
            <span className="inline-block text-xs sm:text-sm font-semibold tracking-wider uppercase text-accent">
              About RRL Elevators
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] text-[var(--foreground)] leading-tight">
              Engineering Excellence{' '}
              <span className="gradient-text">Since 2005</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-muted leading-relaxed">
              RRL Elevators is a leading elevator solutions provider with over two decades of
              experience in designing, manufacturing, and installing premium elevator systems
              across India. We combine cutting-edge technology with unwavering commitment to
              safety and quality.
            </p>

            {/* Mission / Vision / Values */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {[
                { icon: Target, title: 'Mission', desc: 'Delivering safe, innovative vertical mobility' },
                { icon: Eye, title: 'Vision', desc: 'India\'s most trusted elevator brand' },
                { icon: Heart, title: 'Values', desc: 'Safety, quality, innovation & integrity' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="text-center p-2 sm:p-3 rounded-lg sm:rounded-xl bg-[var(--section-alt)]">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent mx-auto mb-1 sm:mb-2" />
                  <h4 className="text-xs sm:text-sm font-semibold text-[var(--foreground)]">{title}</h4>
                  <p className="text-[10px] sm:text-xs text-muted mt-0.5 leading-tight">{desc}</p>
                </div>
              ))}
            </div>

            <Button variant="primary" href="/about">
              Learn More <ArrowRight size={14} className="sm:w-4 sm:h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
