'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  MessageCircle,
  X,
  Send,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  CheckCheck,
} from 'lucide-react';
import { CONTACT } from '@/lib/constants';

const QUICK_INQUIRIES = [
  { label: '🏗️ Request New Lift Quote', message: 'Hi RR Elevators, I would like to request a quote for a new elevator installation in Bengaluru.' },
  { label: '🚨 Emergency Breakdown (24/7)', message: 'EMERGENCY: I require immediate breakdown assistance for an elevator.' },
  { label: '🛠️ AMC & Service Query', message: 'Hello, I would like details regarding Annual Maintenance Contract (AMC) packages.' },
  { label: '🏡 Villa & Capsule Lift', message: 'Hi, I am interested in a customized glass capsule / residential villa lift.' },
];

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [message, setMessage] = useState('');
  const popupRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Show a gentle greeting toast after 3.5 seconds if user hasn't opened yet
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setShowToast(true);
      }
    }, 3500);

    return () => clearTimeout(timer);
  }, [hasInteracted]);

  // Handle outside clicks to close popup
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Handle Escape key to close
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleToggle = () => {
    setHasInteracted(true);
    setShowToast(false);
    setIsOpen((prev) => {
      const next = !prev;
      if (next) {
        setTimeout(() => inputRef.current?.focus(), 150);
      }
      return next;
    });
  };

  const handleSend = (textToSend?: string) => {
    const text = (textToSend || message).trim() || 'Hi RR Elevators, I would like to inquire about your elevator solutions.';
    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/${CONTACT.whatsapp}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div ref={popupRef} className="fixed bottom-5 right-5 z-[70] font-sans antialiased">
      {/* ─── Preview Greeting Toast (Appears after 3.5s before opening) ─── */}
      {showToast && !isOpen && (
        <div className="absolute bottom-14 right-0 mb-2 w-72 sm:w-80 bg-[#0B1322] border border-[#1E2E4E] p-3 rounded-xl shadow-2xl backdrop-blur-md animate-fade-in flex items-start gap-2.5">
          <div className="w-8 h-8 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] shrink-0 mt-0.5">
            <MessageCircle size={16} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-white tracking-tight flex items-center gap-1">
                RR Elevators Bengaluru
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] inline-block"></span>
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowToast(false);
                  setHasInteracted(true);
                }}
                className="text-gray-400 hover:text-white p-0.5"
                aria-label="Dismiss toast"
              >
                <X size={12} />
              </button>
            </div>
            <p className="text-[11px] text-gray-300 mt-1 leading-snug">
              Need a quick quote or 24/7 elevator support in Bengaluru?
            </p>
            <button
              type="button"
              onClick={handleToggle}
              className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-[#25D366] hover:text-[#38BDF8] transition-colors"
            >
              <span>Chat with us on WhatsApp</span>
              <span>→</span>
            </button>
          </div>
        </div>
      )}

      {/* ─── WhatsApp Chat Popup Box ─── */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="WhatsApp Chat Support"
          className="absolute bottom-14 right-0 mb-2 w-[330px] sm:w-[360px] max-w-[calc(100vw-36px)] bg-[#0B1322] border border-[#1E2E4E] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col transition-all duration-300 animate-in fade-in zoom-in-95"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#128C7E] via-[#075E54] to-[#0A3D36] p-3.5 sm:p-4 text-white relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-white p-0.5 border border-white/30 flex items-center justify-center overflow-hidden shrink-0 shadow-sm">
                    <Image
                      src="/images/logo.png"
                      alt="RR Elevators"
                      width={36}
                      height={36}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#25D366] border-2 border-[#075E54]"></span>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-xs sm:text-sm font-bold tracking-tight text-white font-[family-name:var(--font-heading)]">
                      RR Elevators
                    </h3>
                    <span className="text-[9px] bg-white/20 text-white font-mono px-1.5 py-0.2 rounded font-semibold">
                      Bengaluru
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[10.5px] text-[#A7F3D0]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse"></span>
                    <span>Online • Typically replies in 5 mins</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded-lg bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-colors"
                aria-label="Close WhatsApp chat popup"
              >
                <X size={14} />
              </button>
            </div>

            {/* Address & Direct Phone strip inside header */}
            <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-emerald-100/90 font-mono">
              <span className="truncate max-w-[190px] flex items-center gap-1">
                <MapPin size={10} className="shrink-0 text-[#25D366]" />
                Munnekolala, Bengaluru
              </span>
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="hover:text-white font-bold text-[#38BDF8] flex items-center gap-1"
                title="Direct Call"
              >
                <Phone size={10} />
                {CONTACT.phone}
              </a>
            </div>
          </div>

          {/* Chat Body */}
          <div className="p-3 sm:p-3.5 bg-[#070D18] space-y-3 max-h-[380px] overflow-y-auto custom-scrollbar">
            {/* Timestamp tag */}
            <div className="text-center">
              <span className="text-[9.5px] font-mono text-gray-400 bg-[#131E35] px-2 py-0.5 rounded-full border border-[#1E2E4E]">
                Today • Live Engineering Assistance
              </span>
            </div>

            {/* Inbound Agent Message Bubble */}
            <div className="flex flex-col items-start max-w-[90%]">
              <div className="bg-[#131E35] border border-[#1E2E4E] text-gray-200 text-xs p-3 rounded-2xl rounded-tl-sm shadow-sm space-y-1.5">
                <p className="font-medium text-white">
                  Hello! 👋 Welcome to <span className="text-[#38BDF8] font-bold">RR Elevators</span>.
                </p>
                <p className="text-[11.5px] text-gray-300 leading-relaxed">
                  How can our Bengaluru engineering team assist you today?
                </p>
                <div className="pt-1 text-[10.5px] text-gray-400 space-y-0.5 font-mono">
                  <div className="flex items-center gap-1 text-[#25D366]">
                    <Sparkles size={11} />
                    <span>Free On-Site Inspection &amp; Fast Quote</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#38BDF8]">
                    <Clock size={11} />
                    <span>24/7 Breakdown Rapid Dispatch SLA &lt; 30m</span>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-1 pt-0.5 text-[9px] text-gray-400">
                  <span>Just now</span>
                  <CheckCheck size={12} className="text-[#25D366]" />
                </div>
              </div>
            </div>

            {/* Quick Action Inquiry Chips */}
            <div className="space-y-1 pt-1">
              <div className="text-[10px] uppercase font-mono text-gray-400 font-semibold tracking-wider">
                Select Quick Inquiry:
              </div>
              <div className="flex flex-col gap-1.5">
                {QUICK_INQUIRIES.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => handleSend(item.message)}
                    className="text-left text-[11px] font-medium text-gray-200 hover:text-white bg-[#0F172A] hover:bg-[#1E2E4E] border border-[#1E2E4E] hover:border-[#25D366]/60 px-2.5 py-1.5 rounded-lg transition-all flex items-center justify-between group active:scale-[0.98]"
                  >
                    <span>{item.label}</span>
                    <span className="text-[#25D366] text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Input & Start Chat CTA */}
          <div className="p-2.5 sm:p-3 bg-[#0B1322] border-t border-[#1E2E4E] space-y-2">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-1.5"
            >
              <input
                ref={inputRef}
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-[#0F172A] border border-[#1E2E4E] focus:border-[#25D366] focus:outline-none rounded-lg px-3 py-2 text-xs text-white placeholder:text-gray-500 transition-colors"
              />
              <button
                type="submit"
                className="h-8.5 px-3 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-lg flex items-center justify-center gap-1 text-xs font-bold transition-all shadow-md active:scale-95 shrink-0"
                title="Send message on WhatsApp"
              >
                <Send size={13} />
              </button>
            </form>

            {/* Direct Instant Action Bar */}
            <div className="flex items-center justify-between pt-1 text-[10px] text-gray-400">
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="flex items-center gap-1 hover:text-[#38BDF8] transition-colors"
              >
                <Phone size={10} className="text-[#0082C8]" />
                <span>Call: <strong className="text-white font-mono">{CONTACT.phone}</strong></span>
              </a>

              <a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[#25D366] hover:underline font-semibold"
              >
                <span>Direct WhatsApp</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ─── Floating WhatsApp Action Button ─── */}
      <div className="relative">
        <button
          type="button"
          onClick={handleToggle}
          aria-label={isOpen ? 'Close WhatsApp Chat' : 'Open WhatsApp Chat'}
          aria-expanded={isOpen}
          className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white shadow-xl transition-all duration-300 cursor-pointer active:scale-95 group ${
            isOpen
              ? 'bg-[#1E2E4E] hover:bg-[#2A3E68] border border-white/20'
              : 'bg-gradient-to-tr from-[#128C7E] to-[#25D366] hover:scale-105 shadow-[0_4px_20px_rgba(37,211,102,0.45)]'
          }`}
        >
          {isOpen ? (
            <X size={20} className="text-gray-200 group-hover:rotate-90 transition-transform" />
          ) : (
            <>
              {/* WhatsApp Icon */}
              <MessageCircle size={22} className="fill-white stroke-none drop-shadow" />

              {/* Pulsing ring indicator */}
              <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#25D366] border-2 border-[#0B1322] text-[8px] font-bold text-[#0B1322] items-center justify-center">
                  1
                </span>
              </span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
