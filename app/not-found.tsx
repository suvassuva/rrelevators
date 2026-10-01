import Link from 'next/link';
import { Home, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0F172A] text-white">
      <div className="text-center space-y-6 px-6">
        <div className="text-8xl md:text-9xl font-extrabold font-[family-name:var(--font-heading)] text-transparent bg-clip-text bg-gradient-to-r from-[#0082C8] via-[#38BDF8] to-[#1A4B75]">
          404
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-white font-[family-name:var(--font-heading)]">
          Page Not Found
        </h1>
        <p className="text-gray-400 max-w-md mx-auto text-sm">
          The elevator shaft you&apos;re looking for does not exist or has been relocated.
        </p>
        <div className="flex items-center justify-center gap-4 pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0082C8] text-white rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-[#006EA9] transition-colors shadow-lg"
          >
            <Home size={16} />
            Return Home
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#131E35] text-white border border-[#1E2E4E] rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-[#1A2644] transition-colors"
          >
            Contact Engineering <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
