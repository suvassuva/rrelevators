'use client';

import { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ShieldCheck,
  Headphones,
  RotateCcw,
  ExternalLink,
} from 'lucide-react';
import { CONTACT } from '@/lib/constants';
import { useInView } from '@/hooks/useInView';
import type { LeadFormData } from '@/types';

export function ContactForm() {
  const { ref } = useInView({ threshold: 0.1 });


  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    phoneNumber: '',
    projectType: 'Commercial',
    totalFloors: '',
    message: '',
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  const validate = (data: LeadFormData) => {
    const errs: Record<string, string> = {};

    if (!data.fullName.trim()) {
      errs.fullName = 'Full Name is required.';
    } else if (data.fullName.trim().length < 2) {
      errs.fullName = 'Name must be at least 2 characters.';
    }

    if (!data.phoneNumber.trim()) {
      errs.phoneNumber = 'Phone number is required.';
    } else {
      // Clean phone string to digits
      const digits = data.phoneNumber.replace(/\D/g, '');
      if (digits.length < 10) {
        errs.phoneNumber = 'Please enter a valid phone number (min 10 digits).';
      }
    }

    if (!data.totalFloors.trim()) {
      errs.totalFloors = 'Please enter total floors or stops.';
    } else {
      const floorsNum = parseInt(data.totalFloors, 10);
      if (isNaN(floorsNum) || floorsNum < 1 || floorsNum > 150) {
        errs.totalFloors = 'Enter a valid number between 1 and 150.';
      }
    }

    return errs;
  };

  const handleBlur = (field: keyof LeadFormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const validationErrors = validate(formData);
    setErrors(validationErrors);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);

    if (touched[name]) {
      const validationErrors = validate(updated);
      setErrors(validationErrors);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all required fields as touched
    setTouched({
      fullName: true,
      phoneNumber: true,
      projectType: true,
      totalFloors: true,
    });

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API submission
      await new Promise((resolve) => setTimeout(resolve, 1200));

      const generatedRef = `RR-${Math.floor(100000 + Math.random() * 900000)}`;
      setReferenceId(generatedRef);
      setIsSuccess(true);
    } catch {
      alert('An error occurred. Please call our 24/7 helpline directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phoneNumber: '',
      projectType: 'Commercial',
      totalFloors: '',
      message: '',
    });
    setTouched({});
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <section id="contact" ref={ref} className="py-14 sm:py-20 bg-[#0F172A] text-white relative overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#0082C8]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1A4B75]/20 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 container-custom">
        {/* Section Header - Compact & Aligned */}
        <div className="max-w-2xl xl:max-w-3xl mx-auto text-center space-y-3 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#1A4B75]/40 border border-[#0082C8]/40 text-[#0082C8] text-[11px] font-bold uppercase tracking-wider">
            <Headphones size={13} className="text-[#0082C8]" />
            <span>Engineering Consultation &amp; Dispatch</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white font-[family-name:var(--font-heading)] leading-tight">
            Schedule a Free Site Inspection &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0082C8] via-[#38BDF8] to-[#1A4B75]">
              Get a Fast Quote
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
            Whether planning a new residential installation, retrofitting an aging elevator shaft, or requiring
            24/7 AMC emergency support, our certified elevator engineers are ready to assist.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column (5 cols): Direct phone, 24/7 dispatch, office, email, hours */}
          <div className="lg:col-span-5 space-y-4">
            {/* 24/7 Emergency Dispatch Hero Card */}
            <div className="p-4.5 sm:p-5 rounded-xl bg-gradient-to-br from-[#131E35] to-[#0A101D] border border-[#0082C8]/40 shadow-lg relative overflow-hidden">
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0082C8] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0082C8]"></span>
                </span>
                <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-[#38BDF8]">
                  Live Breakdown Dispatch Unit
                </span>
              </div>

              <div className="text-xs text-gray-300 mb-1">24/7 Emergency Assistance Line:</div>

              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="text-xl sm:text-2xl font-black text-white hover:text-[#38BDF8] font-mono tracking-tight block transition-colors"
              >
                {CONTACT.phone}
              </a>

              <div className="text-[11px] text-gray-400 mt-1.5 flex items-center gap-1.5">
                <Clock size={12} className="text-[#0082C8]" />
                <span>Target dispatch response time &lt; 30 minutes</span>
              </div>
            </div>

            {/* Contact Details Stack - Compact & Refined */}
            <div className="p-4.5 sm:p-5 rounded-xl bg-[#131E35] border border-[#1E2E4E] space-y-3.5">
              {/* Direct Phone Numbers */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#0082C8]/15 border border-[#0082C8]/30 flex items-center justify-center text-[#0082C8] shrink-0 mt-0.5">
                  <Phone size={15} />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-mono text-gray-400">Direct Telephone</div>
                  <div className="space-y-0.5 mt-0.5">
                    <a
                      href={`tel:${CONTACT.phoneRaw}`}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-[#38BDF8] transition-colors block"
                    >
                      {CONTACT.phone} (Sales &amp; Projects)
                    </a>
                    <a
                      href={`tel:${CONTACT.dispatchPhone.replace(/\D/g, '')}`}
                      className="text-xs text-gray-300 hover:text-[#38BDF8] transition-colors block"
                    >
                      {CONTACT.dispatchPhone} (Service AMC)
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Addresses */}
              <div className="flex items-start gap-3 pt-2.5 border-t border-[#1E2E4E]">
                <div className="w-8 h-8 rounded-lg bg-[#0082C8]/15 border border-[#0082C8]/30 flex items-center justify-center text-[#0082C8] shrink-0 mt-0.5">
                  <Mail size={15} />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-mono text-gray-400">Official Correspondence</div>
                  <div className="space-y-0.5 mt-0.5">
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-[#38BDF8] transition-colors block"
                    >
                      {CONTACT.email}
                    </a>
                    <a
                      href={`mailto:${CONTACT.dispatchEmail}`}
                      className="text-[11px] text-gray-400 hover:text-[#38BDF8] transition-colors block"
                    >
                      {CONTACT.dispatchEmail}
                    </a>
                  </div>
                </div>
              </div>

              {/* Office Location */}
              <div className="flex items-start gap-3 pt-2.5 border-t border-[#1E2E4E]">
                <div className="w-8 h-8 rounded-lg bg-[#0082C8]/15 border border-[#0082C8]/30 flex items-center justify-center text-[#0082C8] shrink-0 mt-0.5">
                  <MapPin size={15} />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-mono text-[#38BDF8] font-bold">
                    Headquarters &amp; Engineering Center
                  </div>
                  <p className="text-xs text-gray-200 leading-relaxed mt-1 font-medium">
                    {CONTACT.address}
                  </p>
                  <a
                    href={CONTACT.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2 text-[11px] font-semibold text-[#0082C8] hover:text-[#38BDF8] transition-colors"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3 pt-2.5 border-t border-[#1E2E4E]">
                <div className="w-8 h-8 rounded-lg bg-[#0082C8]/15 border border-[#0082C8]/30 flex items-center justify-center text-[#0082C8] shrink-0 mt-0.5">
                  <Clock size={15} />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-mono text-gray-400">Operational Hours</div>
                  <p className="text-xs text-white font-semibold mt-0.5">
                    {CONTACT.workingHours}
                  </p>
                  <p className="text-[11px] text-[#38BDF8] font-mono mt-0.5">
                    Emergency Dispatch: 24/7/365 Open
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications Badge Card */}
            <div className="p-3 rounded-lg bg-[#131E35]/60 border border-[#1E2E4E] flex items-center gap-2.5">
              <ShieldCheck className="text-[#0082C8] w-5 h-5 shrink-0" />
              <div className="text-[11px] text-gray-300">
                <span className="font-bold text-white">Bureau of Indian Standards (BIS)</span> certified.
                Full adherence to IS 14665 elevator safety code.
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Clean inquiry form with validation states */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-7 rounded-xl bg-[#131E35] border border-[#1E2E4E] shadow-xl relative">
              {isSuccess ? (
                /* Success Confirmation State */
                <div className="py-12 px-4 text-center space-y-5 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-[#0082C8]/20 border-2 border-[#0082C8] text-[#0082C8] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(0,130,200,0.5)]">
                    <CheckCircle2 size={36} />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#38BDF8] uppercase">
                      Inquiry Logged Successfully
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black font-[family-name:var(--font-heading)] text-white">
                      Request Confirmed
                    </h3>
                    <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="text-white font-bold">{formData.fullName}</span>. An RR Elevators
                      senior application engineer has been dispatched to review your requirements.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0F172A] border border-[#1E2E4E] max-w-xs mx-auto text-center">
                    <div className="text-[11px] uppercase font-mono text-gray-400">Reference Tracking ID</div>
                    <div className="text-lg font-mono font-bold text-[#0082C8] mt-0.5">{referenceId}</div>
                  </div>

                  <p className="text-xs text-gray-400">
                    We will call you at <span className="text-white font-mono">{formData.phoneNumber}</span> within 2 hours.
                  </p>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0F172A] hover:bg-[#1E2E4E] text-white text-xs font-bold uppercase tracking-wider border border-[#1E2E4E] transition-colors"
                    >
                      <RotateCcw size={14} /> Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                /* Inquiry Lead Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="border-b border-[#1E2E4E] pb-3">
                    <h3 className="text-lg sm:text-xl font-bold font-[family-name:var(--font-heading)] text-white">
                      Inquire for Free Site Inspection
                    </h3>
                    <p className="text-xs text-gray-400 mt-0.5">
                      Fill out your shaft specifications below for a guaranteed direct engineering quote.
                    </p>
                  </div>

                  {/* Field 1: Full Name (required) */}
                  <div className="space-y-1">
                    <label htmlFor="fullName" className="text-[11px] font-bold uppercase tracking-wider text-gray-300 block">
                      Full Name <span className="text-[#0082C8]">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      onBlur={() => handleBlur('fullName')}
                      placeholder="e.g. Vikramaditya Singhania"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-[#0F172A] text-white text-xs sm:text-sm border focus:outline-none transition-all placeholder:text-gray-500 ${
                        touched.fullName && errors.fullName
                          ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                          : 'border-[#1E2E4E] focus:border-[#0082C8] focus:ring-1 focus:ring-[#0082C8]'
                      }`}
                      aria-required="true"
                      aria-invalid={!!(touched.fullName && errors.fullName)}
                      aria-describedby={touched.fullName && errors.fullName ? 'fullName-error' : undefined}
                    />
                    {touched.fullName && errors.fullName && (
                      <p id="fullName-error" className="text-[11px] text-red-400 flex items-center gap-1 mt-0.5">
                        <AlertCircle size={12} /> {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Field 2 & 3: Phone Number & Project Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Phone Number (required, phone format) */}
                    <div className="space-y-1">
                      <label htmlFor="phoneNumber" className="text-[11px] font-bold uppercase tracking-wider text-gray-300 block">
                        Phone Number <span className="text-[#0082C8]">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        onBlur={() => handleBlur('phoneNumber')}
                        placeholder="+91 96633 84455"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-[#0F172A] text-white text-xs sm:text-sm border focus:outline-none transition-all placeholder:text-gray-500 ${
                          touched.phoneNumber && errors.phoneNumber
                            ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                            : 'border-[#1E2E4E] focus:border-[#0082C8] focus:ring-1 focus:ring-[#0082C8]'
                        }`}
                        aria-required="true"
                        aria-invalid={!!(touched.phoneNumber && errors.phoneNumber)}
                        aria-describedby={touched.phoneNumber && errors.phoneNumber ? 'phone-error' : undefined}
                      />
                      {touched.phoneNumber && errors.phoneNumber && (
                        <p id="phone-error" className="text-[11px] text-red-400 flex items-center gap-1 mt-0.5">
                          <AlertCircle size={12} /> {errors.phoneNumber}
                        </p>
                      )}
                    </div>

                    {/* Project Type Dropdown */}
                    <div className="space-y-1">
                      <label htmlFor="projectType" className="text-[11px] font-bold uppercase tracking-wider text-gray-300 block">
                        Project Type <span className="text-[#0082C8]">*</span>
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#0F172A] text-white text-xs sm:text-sm border border-[#1E2E4E] focus:border-[#0082C8] focus:ring-1 focus:ring-[#0082C8] focus:outline-none transition-all cursor-pointer"
                      >
                        <option value="Residential">Residential Elevator</option>
                        <option value="Commercial">Commercial / High-Rise Lift</option>
                        <option value="Industrial">Industrial Freight Lift</option>
                        <option value="AMC">AMC &amp; Maintenance Contract</option>
                      </select>
                    </div>
                  </div>

                  {/* Field 4: Total Floors/Stops Input */}
                  <div className="space-y-1">
                    <label htmlFor="totalFloors" className="text-[11px] font-bold uppercase tracking-wider text-gray-300 block">
                      Total Floors / Stops <span className="text-[#0082C8]">*</span>
                    </label>
                    <input
                      type="number"
                      id="totalFloors"
                      name="totalFloors"
                      min={1}
                      max={150}
                      value={formData.totalFloors}
                      onChange={handleChange}
                      onBlur={() => handleBlur('totalFloors')}
                      placeholder="e.g. 8 stops (G + 7)"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-[#0F172A] text-white text-xs sm:text-sm border focus:outline-none transition-all placeholder:text-gray-500 ${
                        touched.totalFloors && errors.totalFloors
                          ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                          : 'border-[#1E2E4E] focus:border-[#0082C8] focus:ring-1 focus:ring-[#0082C8]'
                      }`}
                      aria-required="true"
                      aria-invalid={!!(touched.totalFloors && errors.totalFloors)}
                      aria-describedby={touched.totalFloors && errors.totalFloors ? 'floors-error' : undefined}
                    />
                    {touched.totalFloors && errors.totalFloors && (
                      <p id="floors-error" className="text-[11px] text-red-400 flex items-center gap-1 mt-0.5">
                        <AlertCircle size={12} /> {errors.totalFloors}
                      </p>
                    )}
                  </div>

                  {/* Field 5: Message Textarea */}
                  <div className="space-y-1">
                    <label htmlFor="message" className="text-[11px] font-bold uppercase tracking-wider text-gray-300 block">
                      Project Details &amp; Shaft Specifications <span className="text-gray-500 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={2}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Specify hoistway dimensions, cabin finish preferences, or timeline..."
                      className="w-full px-3.5 py-2 rounded-lg bg-[#0F172A] text-white text-xs sm:text-sm border border-[#1E2E4E] focus:border-[#0082C8] focus:ring-1 focus:ring-[#0082C8] focus:outline-none transition-all placeholder:text-gray-500 resize-none"
                    />
                  </div>

                  {/* Submit Request Button - Sleek & Compact */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-2.5 sm:py-3 px-5 rounded-lg font-bold uppercase tracking-wider text-xs sm:text-sm text-white flex items-center justify-center gap-2 transition-all shadow-[0_2px_12px_rgba(0,130,200,0.3)] cursor-pointer ${
                      isSubmitting
                        ? 'bg-[#1A4B75] opacity-80 cursor-wait'
                        : 'bg-gradient-to-r from-[#0082C8] to-[#1A4B75] hover:brightness-110 transform hover:-translate-y-0.5 active:translate-y-0'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={15} className="animate-spin text-[#38BDF8]" />
                        <span>Submitting Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Request</span>
                        <Send size={14} className="text-[#38BDF8]" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-[10px] text-gray-400 text-center">
                    <ShieldCheck size={12} className="text-[#0082C8]" />
                    <span>Your technical data is confidential. No spam guaranteed.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
