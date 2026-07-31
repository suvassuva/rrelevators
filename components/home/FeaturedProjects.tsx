'use client';

import { SectionHeader } from '@/components/ui/SectionHeader';
import { useInView } from '@/hooks/useInView';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin } from 'lucide-react';

const PROJECTS = [
  {
    title: 'Skyline Corporate Tower',
    category: 'commercial',
    location: 'New Delhi',
    elevators: '6 Passenger Elevators',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'City General Hospital',
    category: 'hospital',
    location: 'Mumbai',
    elevators: '4 Hospital Elevators',
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Grandview Luxury Hotel',
    category: 'hotel',
    location: 'Jaipur',
    elevators: '3 Capsule Elevators',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Metro City Mall',
    category: 'mall',
    location: 'Chandigarh',
    elevators: '8 Escalators + 4 Lifts',
    image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?q=80&w=1000&auto=format&fit=crop',
  },
];

export function FeaturedProjects() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-[var(--background)]">
      <div className="container-custom">
        <SectionHeader
          label="Our Projects"
          title="Featured Installations"
          description="Explore our portfolio of premium elevator installations across commercial, residential, and industrial projects."
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-6">
          {PROJECTS.map((project, i) => (
            <div
              key={project.title}
              className={`group relative bg-gradient-to-br from-primary to-secondary rounded-xl sm:rounded-2xl overflow-hidden aspect-[16/10] card-hover ${
                isInView ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Background Image */}
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              )}

              {/* Content overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-4 sm:p-6 z-10">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-accent/20 text-accent text-[10px] sm:text-xs font-semibold uppercase mb-1.5 sm:mb-3 w-fit backdrop-blur-sm border border-accent/20">
                  {project.category}
                </span>
                <h3 className="text-base sm:text-xl font-bold text-white font-[family-name:var(--font-heading)] mb-1 sm:mb-2 drop-shadow-md">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-300">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-accent" /> {project.location}
                  </span>
                  <span className="text-gray-200">{project.elevators}</span>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity z-20" />
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-8 sm:py-3 bg-primary text-white rounded-lg text-xs sm:text-sm font-semibold hover:bg-secondary transition-colors shadow-lg"
          >
            View All Projects <ArrowRight size={14} className="sm:w-4 sm:h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
