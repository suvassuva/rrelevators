'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutGrid, Info, Activity, PhoneCall } from 'lucide-react';
import { cn } from '@/lib/utils';

export function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    {
      label: 'HOME',
      href: '/',
      icon: LayoutGrid,
    },
    {
      label: 'ABOUT',
      href: '/about',
      icon: Info,
    },
    {
      label: 'SERVICES',
      href: '/services',
      icon: Activity,
    },
    {
      label: 'CONTACTS',
      href: '/contact',
      icon: PhoneCall,
    },
  ];

  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-[85] bg-[#0b1220]/95 backdrop-blur-lg border-t border-white/10 px-2 py-1.5 pb-[calc(0.375rem+env(safe-area-inset-bottom))]"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.href === '/'
              ? pathname === '/'
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                'relative flex flex-col items-center justify-center flex-1 py-1.5 px-1 rounded-lg transition-all duration-200 group active:scale-95',
                isActive ? 'text-accent' : 'text-gray-400 hover:text-gray-200'
              )}
            >
              {/* Active top accent indicator bar (matching reference design) */}
              {isActive && (
                <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-8 h-1 bg-accent rounded-full shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
              )}

              {/* Icon */}
              <Icon
                size={20}
                className={cn(
                  'transition-transform duration-200 mb-1',
                  isActive ? 'scale-110 stroke-[2.2px]' : 'stroke-[1.75px]'
                )}
              />

              {/* Label */}
              <span
                className={cn(
                  'text-[10px] font-bold tracking-wider font-[family-name:var(--font-heading)] uppercase leading-none',
                  isActive ? 'text-accent font-extrabold' : 'text-gray-400'
                )}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
