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
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-ambient-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/8 rounded-full blur-[100px] animate-ambient-pulse-delayed" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(168,85,247,0.06)_1px,transparent_0)] bg-[size:48px_48px] opacity-40" />

        {/* Noise texture */}
        <div className="absolute inset-0 premium-noise-texture opacity-[0.02] mix-blend-overlay" />
      </div>

      {/* Floating particles */}
      <div className="fixed inset-0 -z-30 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-float-slow"
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
      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        {/* Error Code with Cosmic Theme */}
        <div className="mb-8 inline-flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full" />
            <div className="relative text-[clamp(8rem,20vw,12rem)] font-light leading-none tracking-tighter">
              <span className="bg-gradient-to-b from-white via-purple-100 to-purple-300 bg-clip-text text-transparent">
                404
              </span>
            </div>
          </div>
        </div>

        {/* Cosmic Divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
          <div className="w-2 h-2 rounded-full bg-purple-400/60 animate-pulse" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent via-purple-500/50 to-transparent" />
        </div>

        {/* Main Message */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white mb-6">
          Lost in the Cosmic Void
        </h1>

        <p className="text-base md:text-lg text-zinc-400 font-light leading-relaxed max-w-lg mx-auto mb-12">
          The page you&apos;re searching for has drifted beyond our observable universe. Let&apos;s
          navigate you back to familiar space.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="group relative overflow-hidden rounded-lg border border-purple-500/30 bg-gradient-to-r from-purple-600/90 to-purple-500/90 px-8 py-3.5 text-sm font-medium text-white transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 tracking-wider uppercase">Return Home</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-400 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </Link>

          <Link
            href="/blog"
            className="rounded-lg border border-white/20 bg-white/5 backdrop-blur-2xl px-8 py-3.5 text-sm font-medium text-zinc-200 transition-all duration-500 hover:bg-white/10 hover:border-purple-500/30 hover:text-white hover:scale-105 active:scale-95"
          >
            <span className="tracking-wider uppercase">Explore Articles</span>
          </Link>
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 flex items-center justify-center gap-8 opacity-40">
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="flex gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400/20" />
          </div>
          <div className="w-20 h-px bg-gradient-to-l from-transparent via-white/20 to-transparent" />
        </div>
      </div>

      {/* Geometric Accents */}
      <div className="fixed inset-0 -z-20 pointer-events-none">
        {/* Corner brackets */}
        <div className="absolute top-8 left-8 w-12 h-12 border-l border-t border-purple-500/20" />
        <div className="absolute top-8 right-8 w-12 h-12 border-r border-t border-purple-500/20" />
        <div className="absolute bottom-8 left-8 w-12 h-12 border-l border-b border-purple-500/20" />
        <div className="absolute bottom-8 right-8 w-12 h-12 border-r border-b border-purple-500/20" />

        {/* Floating lines */}
        <div className="absolute top-1/3 left-12 w-px h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-1/3 right-12 w-px h-32 bg-gradient-to-t from-transparent via-purple-400/10 to-transparent" />
      </div>
    </main>
  );
}
