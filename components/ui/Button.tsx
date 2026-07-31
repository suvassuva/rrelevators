'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 cursor-pointer select-none relative overflow-hidden group';

  const variants = {
    primary:
      'bg-accent text-primary hover:bg-accent-hover shadow-lg hover:shadow-xl hover:shadow-accent/20 active:scale-[0.98]',
    secondary:
      'bg-primary text-white hover:bg-secondary shadow-lg active:scale-[0.98]',
    outline:
      'border-2 border-accent text-accent hover:bg-accent hover:text-primary active:scale-[0.98]',
    ghost:
      'text-accent hover:bg-accent/10 active:scale-[0.98]',
    accent:
      'bg-gradient-to-r from-accent to-accent-hover text-primary shadow-lg hover:shadow-xl hover:shadow-accent/30 active:scale-[0.98]',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm',
    md: 'px-4 py-2.5 text-xs sm:px-5 sm:py-3 sm:text-sm md:text-base',
    lg: 'px-5 py-3 text-sm sm:px-7 sm:py-3.5 sm:text-base md:text-lg',
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} className={classes}>
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
}
