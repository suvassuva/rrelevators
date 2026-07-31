import Image from 'next/image';

export default function Loading() {
  return (
    <div className="loading-screen">
      <div className="loading-logo flex flex-col items-center gap-4">
        <Image
          src="/images/logo.png"
          alt="Loading RRL Elevators"
          width={160}
          height={48}
          priority
          className="h-12 w-auto object-contain"
        />
        <div className="flex items-center gap-1.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-accent animate-pulse"
              style={{ animationDelay: `${i * 200}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
