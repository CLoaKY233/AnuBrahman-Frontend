import Link from 'next/link';
import NavFrosted from '@/components/nav-frosted';

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <NavFrosted />

      {/* Animated Background Effects */}
      <div className="fixed inset-0 -z-40">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/20 to-black" />

        {/* Animated orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-purple-500/10 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] animate-ambient-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 bg-purple-400/8 rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px] animate-ambient-pulse-delayed" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(168,85,247,0.06)_1px,transparent_0)] bg-[size:32px_32px] sm:bg-[size:40px_40px] md:bg-[size:48px_48px] opacity-40" />

        {/* Noise texture */}
        <div className="absolute inset-0 premium-noise-texture opacity-[0.02] mix-blend-overlay" />
      </div>

      {/* Floating particles */}
      <div className="fixed inset-0 -z-30 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-purple-400/30 rounded-full animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-2xl px-4 sm:px-6 text-center">
        {/* Error Code with Cosmic Theme */}
        <div className="mb-6 sm:mb-8 inline-flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-purple-500/20 blur-2xl sm:blur-3xl rounded-full" />
            <div className="relative text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] font-light leading-none tracking-tighter">
              <span className="bg-gradient-to-b from-white via-purple-100 to-purple-300 bg-clip-text text-transparent">
                404
              </span>
            </div>
          </div>
        </div>

        {/* Cosmic Divider */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-purple-400/60 animate-pulse" />
          <div className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent via-purple-500/50 to-transparent" />
        </div>

        {/* Main Message */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white mb-4 sm:mb-6 px-2">
          Lost in the Cosmic Void
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-zinc-400 font-light leading-relaxed max-w-lg mx-auto mb-8 sm:mb-12 px-4">
          The page you&apos;re searching for has drifted beyond our observable universe. Let&apos;s
          navigate you back to familiar space.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
          <Link
            href="/"
            className="w-full sm:w-auto group relative overflow-hidden rounded-lg border border-purple-500/30 bg-gradient-to-r from-purple-600/90 to-purple-500/90 px-6 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-sm font-medium text-white transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 tracking-wider uppercase">Return Home</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-400 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </Link>

          <Link
            href="/blog"
            className="w-full sm:w-auto rounded-lg border border-white/20 bg-white/5 backdrop-blur-2xl px-6 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-sm font-medium text-zinc-200 transition-all duration-500 hover:bg-white/10 hover:border-purple-500/30 hover:text-white hover:scale-105 active:scale-95"
          >
            <span className="tracking-wider uppercase">Explore Articles</span>
          </Link>
        </div>

        {/* Decorative Elements */}
        <div className="mt-12 sm:mt-16 flex items-center justify-center gap-6 sm:gap-8 opacity-40 px-4">
          <div className="w-16 sm:w-20 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="flex gap-1.5 sm:gap-2">
            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-purple-400/60" />
            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-purple-400/40" />
            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-purple-400/20" />
          </div>
          <div className="w-16 sm:w-20 h-px bg-gradient-to-l from-transparent via-white/20 to-transparent" />
        </div>
      </div>

      {/* Geometric Accents */}
      <div className="fixed inset-0 -z-20 pointer-events-none">
        {/* Corner brackets - hidden on mobile */}
        <div className="hidden sm:block absolute top-6 sm:top-8 left-6 sm:left-8 w-8 h-8 sm:w-12 sm:h-12 border-l border-t border-purple-500/20" />
        <div className="hidden sm:block absolute top-6 sm:top-8 right-6 sm:right-8 w-8 h-8 sm:w-12 sm:h-12 border-r border-t border-purple-500/20" />
        <div className="hidden sm:block absolute bottom-6 sm:bottom-8 left-6 sm:left-8 w-8 h-8 sm:w-12 sm:h-12 border-l border-b border-purple-500/20" />
        <div className="hidden sm:block absolute bottom-6 sm:bottom-8 right-6 sm:right-8 w-8 h-8 sm:w-12 sm:h-12 border-r border-b border-purple-500/20" />

        {/* Floating lines - hidden on mobile */}
        <div className="hidden md:block absolute top-1/3 left-8 md:left-12 w-px h-24 md:h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <div className="hidden md:block absolute bottom-1/3 right-8 md:right-12 w-px h-24 md:h-32 bg-gradient-to-t from-transparent via-purple-400/10 to-transparent" />
      </div>
    </main>
  );
}
