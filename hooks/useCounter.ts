'use client';

import { useEffect, useState } from 'react';

interface UseCounterOptions {
  end: number;
  duration?: number;
  start?: number;
  decimals?: number;
  enabled?: boolean;
}

export function useCounter({
  end,
  duration = 1800,
  start = 0,
  decimals = 0,
  enabled = true,
}: UseCounterOptions) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!enabled) return;

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * (end - start) + start;

      if (decimals > 0) {
        setCount(parseFloat(current.toFixed(decimals)));
      } else {
        setCount(Math.floor(current));
      }

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrameId);
  }, [end, duration, start, decimals, enabled]);

  return count;
}
