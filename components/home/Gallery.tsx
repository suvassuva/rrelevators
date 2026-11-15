'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  MapPin,
  X,
  Maximize2,
  Building2,
  ExternalLink,
  Play,
} from 'lucide-react';
import { InstagramIcon } from '@/components/ui/Icons';
import { GALLERY_PROJECTS, SOCIAL_LINKS } from '@/lib/constants';
import { useInView } from '@/hooks/useInView';
import type { GalleryCategory, GalleryProject } from '@/types';

const CATEGORIES: GalleryCategory[] = ['All', 'Videos', 'Interiors', 'Residential', 'Commercial'];

export function Gallery() {
  const { ref } = useInView({ threshold: 0.1 });

  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All');
  const [selectedProject, setSelectedProject] = useState<GalleryProject | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const filteredProjects =
    activeCategory === 'All'
      ? GALLERY_PROJECTS
      : GALLERY_PROJECTS.filter((p) => p.category === activeCategory);

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="gallery" ref={ref} className="py-14 sm:py-20 bg-[#F8FAFC] text-[#0F172A] relative overflow-hidden">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-grid-light opacity-50 pointer-events-none" />

      <div className="relative z-10 container-custom">
        {/* Section Header - Compact & Aligned */}
        <div className="max-w-2xl xl:max-w-3xl mx-auto text-center space-y-3 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#1A4B75]/10 border border-[#0082C8]/30 text-[#0082C8] text-[11px] font-bold uppercase tracking-wider">
            <Building2 size={13} className="text-[#0082C8]" />
            <span>Portfolio of Excellence</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#0F172A] font-[family-name:var(--font-heading)] leading-tight">
            Featured Projects &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0082C8] to-[#1A4B75]">
              Architectural Installations
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
            Explore our curated showcase of residential towers, panoramic capsule atriums, hospital mobility wings,
            and luxury interior cabin suites across India.
          </p>
        </div>

        {/* Filter Pills - Sleek & Compact */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 sm:mb-10">
          {CATEGORIES.map((category) => {
            const count =
              category === 'All'
                ? GALLERY_PROJECTS.length
                : GALLERY_PROJECTS.filter((p) => p.category === category).length;
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#0082C8] text-white shadow-sm'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 shadow-xs'
                }`}
              >
                <span>{category}</span>
                <span
                  className={`text-[9px] px-1.5 py-0.2 rounded-full font-mono ${
                    isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid - Compact & Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {filteredProjects.map((project, idx) => {
            const hasError = imageErrors[project.id];

            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#131E35] border border-gray-200/80 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-1.5"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {project.video ? (
                  <div className="relative w-full h-full">
                    <video
                      src={project.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    />
                    {/* Sleek Live Video Indicator Badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <div className="px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-white flex items-center gap-1.5 shadow-md">
                        <Play size={10} fill="white" className="text-white" />
                        <span className="text-[10px] font-bold font-mono tracking-wider uppercase">Video</span>
                      </div>
                    </div>
                  </div>
                ) : !hasError ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    unoptimized
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-108 transition-transform duration-700"
                    onError={() => handleImageError(project.id)}
                  />
                ) : (
                  <div className="absolute inset-0 bg-[#131E35] flex flex-col items-center justify-center p-4 text-center text-white">
                    <div className="w-10 h-10 rounded-lg bg-[#0082C8]/20 border border-[#0082C8]/40 flex items-center justify-center mb-2 text-[#38BDF8]">
                      <Building2 size={18} />
                    </div>
                    <span className="text-xs font-bold text-white">{project.title}</span>
                  </div>
                )}

                {/* Quick Expand Hover Icon */}
                <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center border border-white/20 shadow-md">
                    <Maximize2 size={14} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ─── Instagram Live Project Footage Showcase Banner ─── */}
        <div className="mt-10 sm:mt-12 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#0F172A] via-[#131E35] to-[#0A101D] border border-[#1E2E4E] shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#833AB4] flex items-center justify-center text-white shrink-0 shadow-[0_0_15px_rgba(225,48,108,0.4)]">
              <InstagramIcon size={20} />
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <h4 className="text-xs sm:text-sm font-bold text-white font-[family-name:var(--font-heading)]">
                  Live Rigging &amp; On-Site Hoisting Footage
                </h4>
                <span className="text-[10px] bg-pink-500/20 text-pink-300 font-mono px-2 py-0.5 rounded-full font-bold">
                  @rr_elevators
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-gray-300 mt-0.5 leading-snug">
                Follow our official Instagram for daily elevator installations, cabin laser craft, and customer handovers across Bengaluru.
              </p>
            </div>
          </div>

          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white text-[11px] font-bold uppercase tracking-wider hover:brightness-110 shadow-md hover:shadow-lg transition-all shrink-0 active:scale-95"
          >
            <InstagramIcon size={13} />
            <span>Follow on Instagram</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </div>

      {/* Project Lightbox Inspection Modal - Sleek & Compact */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[120] bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-[#0F172A] border border-[#0082C8]/50 rounded-xl max-w-xl w-full overflow-hidden shadow-2xl relative text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header: Video or Image */}
            {selectedProject.video ? (
              <div className="relative aspect-[16/9] w-full bg-black">
                <video
                  src={selectedProject.video}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                />
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-3 right-3 z-20 w-8 h-8 rounded-lg bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors"
                  aria-label="Close Project Modal"
                >
                  <X size={16} />
                </button>
              </div>
            ) : (
              <div className="relative aspect-[16/9] w-full bg-[#131E35]">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="object-cover"
                />
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-3 right-3 w-7 h-7 rounded-lg bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors"
                  aria-label="Close Project Modal"
                >
                  <X size={15} />
                </button>

                <div className="absolute bottom-3 left-4 right-4">
                  <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase tracking-wider bg-[#0082C8] text-white">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-black font-[family-name:var(--font-heading)] text-white mt-0.5">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>
            )}

            {/* Modal Body */}
            <div className="p-4 sm:p-5 space-y-3.5">
              <div className="flex items-center gap-1.5 text-xs text-gray-300">
                <MapPin size={13} className="text-[#0082C8]" />
                <span className="font-semibold">{selectedProject.location}</span>
              </div>

              <p className="text-xs text-gray-300 leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Technical Specifications Grid */}
              <div className="grid grid-cols-3 gap-2.5 p-3 rounded-lg bg-[#131E35] border border-[#1E2E4E]">
                <div>
                  <div className="text-[9px] uppercase font-mono text-gray-400">Total Travel</div>
                  <div className="text-xs font-bold text-white mt-0.5">{selectedProject.stops}</div>
                </div>
                <div>
                  <div className="text-[9px] uppercase font-mono text-gray-400">Rated Speed</div>
                  <div className="text-xs font-bold text-[#0082C8] mt-0.5">{selectedProject.speed}</div>
                </div>
                <div>
                  <div className="text-[9px] uppercase font-mono text-gray-400">Capacity</div>
                  <div className="text-xs font-bold text-white mt-0.5">{selectedProject.capacity}</div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-1 flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedProject(null);
                    const contact = document.getElementById('contact');
                    if (contact) contact.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-4 py-2 rounded-lg bg-[#0082C8] hover:bg-[#006EA9] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                >
                  Consult Similar Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
