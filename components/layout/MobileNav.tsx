'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, ChevronDown, Phone, FileText } from 'lucide-react';
import { NAV_LINKS, CONTACT } from '@/lib/constants';


interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 z-[90] transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-primary z-[100] transition-transform duration-300 ease-out overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <Link href="/" onClick={onClose} className="inline-block">
            <Image
              src="/images/logo.png"
              alt="RRL Elevators Logo"
              width={140}
              height={40}
              className="h-9 w-auto object-contain"
            />
          </Link>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-6 space-y-1">
          {NAV_LINKS.map((link) => (
            <div key={link.label}>
              {link.children ? (
                <>
                  <button
                    onClick={() => toggleDropdown(link.label)}
                    className="w-full flex items-center justify-between py-3 px-4 text-white hover:text-accent transition-colors rounded-lg hover:bg-white/5 cursor-pointer"
                  >
                    <span className="font-medium">{link.label}</span>
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${
                        openDropdown === link.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openDropdown === link.label ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="pl-4 space-y-1 pb-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={onClose}
                          className="block py-2 px-4 text-sm text-gray-400 hover:text-accent transition-colors rounded-lg hover:bg-white/5"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="block py-3 px-4 text-white font-medium hover:text-accent transition-colors rounded-lg hover:bg-white/5"
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="p-6 border-t border-white/10 space-y-3">
          <a
            href={`tel:${CONTACT.phoneRaw}`}
            className="flex items-center justify-center gap-2 w-full py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors"
          >
            <Phone size={18} />
            Call Now
          </a>
          <Link
            href="/contact"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full py-3 bg-accent text-primary rounded-lg font-semibold hover:bg-accent-hover transition-colors"
          >
            <FileText size={18} />
            Get Free Quote
          </Link>
        </div>
      </div>
    </>
  );
}
