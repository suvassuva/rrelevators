import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-primary">
      <div className="text-center space-y-6 px-6">
        <div className="text-8xl md:text-9xl font-extrabold font-[family-name:var(--font-heading)] gradient-text">
          404
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-white font-[family-name:var(--font-heading)]">
          Page Not Found
        </h1>
        <p className="text-gray-400 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let us help you find the right direction.
        </p>
        <div className="flex items-center justify-center gap-4 pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-primary rounded-lg font-semibold hover:bg-accent-hover transition-colors"
          >
            <Home size={18} />
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/20 rounded-lg font-semibold hover:bg-white/20 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
