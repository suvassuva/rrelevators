'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, FileText, Menu, ChevronDown } from 'lucide-react';
import { NAV_LINKS, CONTACT } from '@/lib/constants';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import { MegaMenu } from './MegaMenu';
import { MobileNav } from './MobileNav';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollDirection, isAtTop } = useScrollDirection();

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-[100] transition-all duration-300',
          isAtTop
            ? 'bg-transparent'
            : 'bg-[#0b1220] border-b border-white/10 shadow-2xl',
          scrollDirection === 'down' && !isAtTop && '-translate-y-full'
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <div className="bg-white p-1 sm:p-1.5 rounded-lg shadow-md flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="RRL Elevators Logo"
                  width={140}
                  height={40}
                  priority
                  className="h-7 sm:h-9 w-auto object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <div key={link.label} className="relative mega-menu-trigger">
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg text-white/90 hover:text-accent transition-colors"
                  >
                    {link.label}
                    {link.children && <ChevronDown size={14} className="mt-0.5" />}
                  </Link>
                  {link.children && <MegaMenu item={link} />}
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white hover:text-accent rounded-lg transition-colors"
              >
                <Phone size={16} />
                Call Now
              </a>
              <Link
                href="/contact"
                className="flex items-center gap-2 px-5 py-2.5 bg-accent text-primary text-sm font-semibold rounded-lg hover:bg-accent-hover transition-all shadow-md hover:shadow-lg"
              >
                <FileText size={16} />
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
