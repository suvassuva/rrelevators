'use client';

import { useInView } from '@/hooks/useInView';
import { useCounter } from '@/hooks/useCounter';

interface CounterProps {
  end: number;
  suffix?: string;
  label: string;
  light?: boolean;
}

export function Counter({ end, suffix = '', label, light = false }: CounterProps) {
  const { ref, isInView } = useInView({ threshold: 0.5 });
  const count = useCounter({ end, enabled: isInView });

  return (
    <div ref={ref} className="text-center">
      <div className={`text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] ${light ? 'text-white' : 'text-accent'}`}>
        {count}
        <span className="text-accent">{suffix}</span>
      </div>
      <p className={`mt-2 text-sm md:text-base font-medium ${light ? 'text-gray-300' : 'text-muted'}`}>
        {label}
      </p>
    </div>
  );
}
