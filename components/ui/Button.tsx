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
    'inline-flex items-center justify-center gap-1.5 font-bold tracking-wider uppercase rounded-lg transition-all duration-300 cursor-pointer select-none relative overflow-hidden group';

  const variants = {
    primary:
      'bg-[#0082C8] text-white hover:bg-[#006EA9] shadow-md hover:shadow-[0_2px_15px_rgba(0,130,200,0.35)] active:scale-[0.98]',
    secondary:
      'bg-[#131E35] border border-[#1E2E4E] text-white hover:bg-[#1A2644] hover:border-[#0082C8] shadow-sm active:scale-[0.98]',
    outline:
      'border border-[#0082C8] text-[#0082C8] hover:bg-[#0082C8] hover:text-white active:scale-[0.98]',
    ghost:
      'text-[#0082C8] hover:bg-[#0082C8]/10 active:scale-[0.98]',
    accent:
      'bg-gradient-to-r from-[#0082C8] to-[#1A4B75] text-white shadow-md hover:shadow-[0_2px_15px_rgba(0,130,200,0.35)] active:scale-[0.98]',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 sm:py-2.5 text-xs sm:text-sm',
    lg: 'px-5 py-2.5 sm:py-3 text-xs sm:text-sm',
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
