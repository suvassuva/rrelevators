'use client';

export function ClientLogos() {
  const clients = [
    'Tata Group',
    'Reliance',
    'Adani',
    'L&T',
    'DLF',
    'Oberoi',
    'AIIMS',
    'Fortis',
    'Marriott',
    'Hilton',
    'Wipro',
    'Infosys',
  ];

  return (
    <section className="py-8 sm:py-16 bg-[var(--background)] overflow-hidden">
      <div className="container-custom mb-5 sm:mb-8">
        <p className="text-center text-xs sm:text-sm text-muted font-medium uppercase tracking-wider">
          Trusted by Leading Organizations
        </p>
      </div>

      {/* Infinite scroll */}
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...clients, ...clients].map((client, i) => (
            <div
              key={`${client}-${i}`}
              className="inline-flex items-center justify-center mx-3 sm:mx-8 px-4 py-2.5 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] min-w-[120px] sm:min-w-[160px]"
            >
              <span className="text-xs sm:text-sm font-semibold text-muted whitespace-nowrap">
                {client}
              </span>
            </div>
          ))}
        </div>

        {/* Gradient masks */}
        <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-[var(--background)] to-transparent z-10" />
        <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-[var(--background)] to-transparent z-10" />
      </div>
    </section>
  );
}
