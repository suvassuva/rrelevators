'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { HOME_PRODUCTS } from '@/lib/constants';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useInView } from '@/hooks/useInView';

export function ProductsShowcase() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-[var(--background)]">
      <div className="container-custom">
        <SectionHeader
          label="Our Products"
          title="Premium Elevator Solutions"
          description="Explore our comprehensive range of elevators and escalators designed for every application — from luxury residences to heavy industrial use."
        />

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {HOME_PRODUCTS.map((product, i) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className={`group relative bg-[var(--card-bg)] rounded-xl sm:rounded-2xl overflow-hidden border border-[var(--card-border)] card-hover ${
                isInView ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Product Image */}
              <div className="aspect-[4/3] bg-primary relative overflow-hidden img-zoom">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary to-secondary">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-accent/20 flex items-center justify-center">
                      <span className="text-lg sm:text-2xl font-bold text-accent font-[family-name:var(--font-heading)]">
                        {product.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                )}
                {/* Gradient dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-3 sm:p-5">
                <h3 className="text-sm sm:text-base font-semibold font-[family-name:var(--font-heading)] text-[var(--foreground)] mb-0.5 sm:mb-1 truncate">
                  {product.name}
                </h3>
                <p className="text-xs text-accent font-medium mb-2 truncate">{product.tagline}</p>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[11px] sm:text-xs text-muted mb-3 gap-0.5">
                  <span>Cap: {product.capacity}</span>
                  <span>Spd: {product.speed}</span>
                </div>

                <span className="inline-flex items-center gap-1 text-accent text-xs font-semibold group-hover:gap-1.5 transition-all">
                  View Details <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-8 sm:py-3 bg-primary text-white rounded-lg text-xs sm:text-sm font-semibold hover:bg-secondary transition-colors shadow-lg"
          >
            View All Products <ArrowRight size={14} className="sm:w-4 sm:h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
