'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Phone, ArrowUpRight, Menu, X, ShieldCheck } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/Icons';
import { NAV_LINKS, CONTACT, SOCIAL_LINKS } from '@/lib/constants';


export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['home', 'about', 'services', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Handle ESC key to close drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(targetId);
        setMobileOpen(false);
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0F172A]/95 backdrop-blur-md border-b border-[#1E2E4E] shadow-xl py-2 sm:py-2.5'
            : 'bg-[#0F172A]/85 backdrop-blur-sm border-b border-white/5 py-2.5 sm:py-3'
        }`}
      >
        <div className="w-full px-3.5 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between h-12 sm:h-13 gap-2">
            {/* Logo Area: RR ELEVATORS branding - Mobile Responsive & Never Overflows */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2 sm:gap-3 group focus:outline-none shrink-0"
              aria-label="RR Elevators Home"
            >
              <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-white p-1 flex items-center justify-center shadow-[0_0_12px_rgba(0,130,200,0.35)] group-hover:scale-105 transition-all shrink-0 overflow-hidden">
                <Image
                  src="/images/logo.png"
                  alt="RR Elevators Logo"
                  width={44}
                  height={44}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>

              <div className="flex items-center gap-1 sm:gap-1.5 leading-none shrink-0">
                <span className="text-base sm:text-xl font-black tracking-tight text-white font-[family-name:var(--font-heading)]">
                  RR
                </span>
                <span className="text-base sm:text-xl font-bold tracking-wider text-[#0082C8] font-[family-name:var(--font-heading)]">
                  ELEVATORS
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links - Compact Pill Bar */}
            <nav className="hidden lg:flex items-center gap-0.5 bg-[#131E35]/70 p-1 rounded-full border border-[#1E2E4E]/80 backdrop-blur-md shadow-inner" aria-label="Main Navigation">
              {NAV_LINKS.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-[#0082C8] ${
                      isActive
                        ? 'bg-[#0082C8] text-white shadow-[0_0_10px_rgba(0,130,200,0.45)]'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Right Action Items: Instagram, Helpline Badge & CTA */}
            <div className="hidden lg:flex items-center gap-2 shrink-0">
              {/* Instagram Profile Quick Link */}
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="h-8.5 w-8.5 rounded-lg bg-[#131E35]/80 border border-[#1E2E4E] hover:border-[#E1306C]/70 text-gray-300 hover:text-white flex items-center justify-center transition-all group"
                title="Follow @rr_elevators on Instagram"
                aria-label="Instagram Profile"
              >
                <InstagramIcon size={15} className="group-hover:text-[#E1306C] transition-colors" />
              </a>

              {/* 24/7 Helpline Badge - Sleek Compact Inline Badge */}
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="h-8.5 px-3 rounded-lg bg-[#131E35]/80 border border-[#1E2E4E] hover:border-[#0082C8]/60 transition-all flex items-center gap-2 group shadow-sm hover:shadow-[0_0_12px_rgba(0,130,200,0.2)]"
                title="Call 24/7 Emergency Dispatch"
              >
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0082C8] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0082C8]"></span>
                </span>
                <div className="flex flex-col text-left justify-center">
                  <span className="text-[9px] uppercase font-bold tracking-wider text-[#0082C8] leading-none">
                    24/7 Helpline
                  </span>
                  <span className="text-[11px] font-semibold text-white tracking-wide leading-tight group-hover:text-[#38BDF8] transition-colors mt-0.5">
                    {CONTACT.phone}
                  </span>
                </div>
              </a>

              {/* Get a Quote Button - Sleek and Compact */}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="h-8.5 inline-flex items-center gap-1.5 px-3.5 rounded-lg bg-gradient-to-r from-[#0082C8] to-[#1A4B75] text-white text-[11px] font-bold uppercase tracking-wider hover:brightness-110 shadow-[0_2px_10px_rgba(0,130,200,0.3)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-1 focus:ring-[#0082C8]"
              >
                <span>Get a Quote</span>
                <ArrowUpRight size={13} className="text-[#38BDF8]" />
              </a>
            </div>

            {/* Mobile / Tablet Menu Buttons - Always Visible, Never Pushed Off-Screen */}
            <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden shrink-0">
              {/* Quick Helpline Dialer */}
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="w-8.5 h-8.5 rounded-lg bg-[#1A4B75]/30 text-[#0082C8] border border-[#0082C8]/30 flex items-center justify-center hover:bg-[#1A4B75]/50 transition-colors shrink-0"
                aria-label="Call Helpline"
                title={`Call ${CONTACT.phone}`}
              >
                <Phone size={15} />
              </a>

              {/* Instagram link on tablet / larger screens */}
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex w-8.5 h-8.5 rounded-lg bg-[#131E35] text-gray-300 hover:text-[#E1306C] border border-[#1E2E4E] items-center justify-center transition-colors shrink-0"
                aria-label="Instagram Profile"
              >
                <InstagramIcon size={14} />
              </a>

              {/* Hamburger Menu Toggle Button - High-Visibility Cyan Badge */}
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="w-9 h-9 rounded-lg bg-[#0082C8] text-white hover:bg-[#006EA9] flex items-center justify-center shadow-[0_0_12px_rgba(0,130,200,0.4)] active:scale-95 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#38BDF8] shrink-0"
                aria-label="Open Navigation Menu"
                aria-expanded={mobileOpen}
              >
                <Menu size={20} strokeWidth={2.4} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-[90] transition-opacity duration-300 lg:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer Content */}
      <aside
        className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#0F172A] border-l border-[#1E2E4E] z-[100] transition-transform duration-300 ease-out flex flex-col justify-between shadow-2xl lg:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Mobile Menu"
      >
        {/* Drawer Header */}
        <div className="p-4 border-b border-[#1E2E4E] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-11 h-11 rounded-xl bg-white p-1 flex items-center justify-center shadow-md overflow-hidden shrink-0">
              <Image
                src="/images/logo.png"
                alt="RR Elevators Logo"
                width={44}
                height={44}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex items-center gap-1 leading-none">
              <span className="text-lg font-black tracking-tight text-white font-[family-name:var(--font-heading)]">
                RR
              </span>
              <span className="text-lg font-bold tracking-wider text-[#0082C8] font-[family-name:var(--font-heading)]">
                ELEVATORS
              </span>
            </div>
          </div>

          <button
            onClick={() => setMobileOpen(false)}
            className="w-7 h-7 rounded-lg bg-[#131E35] text-gray-300 hover:text-white border border-[#1E2E4E] flex items-center justify-center transition-colors"
            aria-label="Close Navigation Drawer"
          >
            <X size={16} />
          </button>
        </div>

        {/* Drawer Navigation Links */}
        <nav className="p-4 space-y-1.5 overflow-y-auto flex-1">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                  isActive
                    ? 'bg-[#0082C8] text-white shadow-sm'
                    : 'text-gray-300 hover:bg-[#131E35] hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                <span className="text-[10px] opacity-60 font-mono">#{sectionId}</span>
              </a>
            );
          })}

          <div className="pt-3 border-t border-[#1E2E4E] mt-3 space-y-2.5">
            <div className="p-3 rounded-lg bg-[#131E35] border border-[#1E2E4E]">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0082C8] animate-ping" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0082C8]">
                  24/7 Rapid Breakdown Line
                </span>
              </div>
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="text-sm font-bold text-white hover:text-[#0082C8] transition-colors block"
              >
                {CONTACT.phone}
              </a>
              <p className="text-[10px] text-gray-400 mt-0.5">Target dispatch response time &lt; 30 mins</p>
            </div>

            <div className="flex items-center gap-1.5 text-[11px] text-gray-400 px-1">
              <ShieldCheck size={14} className="text-[#0082C8]" />
              <span>ISO 9001:2015 &amp; BIS Certified</span>
            </div>
          </div>
        </nav>

        {/* Drawer Footer CTA */}
        <div className="p-4 border-t border-[#1E2E4E] bg-[#0A101D]">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#0082C8] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#006EA9] shadow-md transition-all"
          >
            <span>Get a Quote</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </aside>
    </>
  );
}
