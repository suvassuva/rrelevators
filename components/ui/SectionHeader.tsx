'use client';

import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export function SectionHeader({
  label,
  title,
  description,
  align = 'center',
  light = false,
}: SectionHeaderProps) {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={cn(
        'mb-8 md:mb-12 lg:mb-16',
        align === 'center' && 'text-center',
        !isInView && 'opacity-0'
      )}
    >
      {label && (
        <span
          className={cn(
            'inline-block text-xs sm:text-sm font-semibold tracking-wider uppercase mb-1.5 sm:mb-2',
            'text-accent',
            isInView && 'animate-fade-up'
          )}
        >
          {label}
        </span>
      )}
      <h2
        className={cn(
          'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] leading-tight',
          light ? 'text-white' : 'text-[var(--foreground)]',
          isInView && 'animate-fade-up delay-100'
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          'accent-line mt-2.5 sm:mt-3.5',
          align === 'center' && 'mx-auto',
          isInView && 'animate-fade-up delay-200'
        )}
      />
      {description && (
        <p
          className={cn(
            'mt-2.5 sm:mt-3.5 text-xs sm:text-sm md:text-base max-w-2xl leading-relaxed',
            align === 'center' && 'mx-auto',
            light ? 'text-gray-300' : 'text-muted',
            isInView && 'animate-fade-up delay-300'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
