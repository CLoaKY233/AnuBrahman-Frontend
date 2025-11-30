import Link from 'next/link';
import NavFrosted from '@/components/nav-frosted';
import { Rocket, Sparkles, Clock } from 'lucide-react';

export default function ComingSoon() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 sm:py-0">
      <NavFrosted />

      {/* Animated Background Effects */}
      <div className="fixed inset-0 -z-40">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/20 to-black" />

        {/* Animated orbs - more vibrant for "coming soon" */}
        <div className="absolute top-1/4 left-1/3 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-purple-500/15 rounded-full blur-[100px] sm:blur-[120px] md:blur-[140px] animate-ambient-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-purple-400/12 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] animate-ambient-pulse-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 bg-purple-600/8 rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px] animate-float-slow" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(168,85,247,0.08)_1px,transparent_0)] bg-[size:32px_32px] sm:bg-[size:36px_36px] md:bg-[size:40px_40px] opacity-50" />

        {/* Noise texture */}
        <div className="absolute inset-0 premium-noise-texture opacity-[0.02] mix-blend-overlay" />
      </div>

      {/* Floating particles - more abundant */}
      <div className="fixed inset-0 -z-30 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-purple-400/40 rounded-full animate-float-slow"
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
      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 text-center">
        {/* Animated Icon */}
        <div className="mb-6 sm:mb-8 inline-flex items-center justify-center">
          <div className="relative">
            {/* Pulsing rings */}
            <div className="absolute inset-0 rounded-full border border-purple-500/30 animate-ping" />
            <div className="absolute inset-0 rounded-full border border-purple-400/20 animate-pulse" />

            {/* Icon container */}
            <div className="relative rounded-full bg-gradient-to-br from-purple-500/20 to-purple-600/30 border border-purple-400/40 p-4 sm:p-6 backdrop-blur-xl">
              <Rocket
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-purple-300"
                strokeWidth={1.5}
              />
            </div>
          </div>
        </div>

        {/* Status Badge */}
        <div className="mb-4 sm:mb-6 inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-2xl px-3 sm:px-4 py-1.5 sm:py-2">
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400 mr-1.5 sm:mr-2 animate-pulse" />
          <span className="text-[10px] sm:text-xs font-medium tracking-wider text-purple-300 uppercase">
            Launching Soon
          </span>
        </div>

        {/* Main Message */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-4 sm:mb-6 px-2">
          <span className="bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
            Work In Progress
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
          We&apos;re engineering something extraordinary. This feature is currently in development
          and will launch very soon.
        </p>

        {/* Cosmic Divider */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          <div className="h-px w-16 sm:w-20 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
          <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400/60 animate-pulse" />
          <div className="h-px w-16 sm:w-20 bg-gradient-to-l from-transparent via-purple-500/50 to-transparent" />
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-lg blur-xl transition-all duration-500 group-hover:blur-2xl" />
            <div className="relative rounded-lg border border-white/10 bg-white/5 backdrop-blur-xl p-4 sm:p-6 transition-all duration-500 hover:border-purple-500/30 hover:bg-white/10">
              <div className="text-2xl sm:text-3xl font-light text-white mb-1 sm:mb-2">01</div>
              <div className="text-xs sm:text-sm text-zinc-400 font-light">Planning Phase</div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-lg blur-xl transition-all duration-500 group-hover:blur-2xl" />
            <div className="relative rounded-lg border border-purple-500/30 bg-purple-500/10 backdrop-blur-xl p-4 sm:p-6 transition-all duration-500 hover:border-purple-500/50 hover:bg-purple-500/20">
              <div className="text-2xl sm:text-3xl font-light text-white mb-1 sm:mb-2">02</div>
              <div className="text-xs sm:text-sm text-purple-300 font-medium">Development</div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-lg blur-xl transition-all duration-500 group-hover:blur-2xl" />
            <div className="relative rounded-lg border border-white/10 bg-white/5 backdrop-blur-xl p-4 sm:p-6 opacity-50 transition-all duration-500 hover:border-purple-500/20 hover:bg-white/10">
              <div className="text-2xl sm:text-3xl font-light text-white mb-1 sm:mb-2">03</div>
              <div className="text-xs sm:text-sm text-zinc-500 font-light">Launch Ready</div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 px-4">
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
            <span className="tracking-wider uppercase">Read Articles</span>
          </Link>
        </div>

        {/* Beta Notice */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-4 sm:px-6 py-2 sm:py-3 mx-4">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full animate-pulse" />
          <p className="text-[10px] sm:text-xs text-zinc-400 font-light tracking-wide">
            Currently in <span className="text-purple-300 font-medium">Beta</span> • More features
            coming
          </p>
        </div>
      </div>

      {/* Geometric Accents */}
      <div className="fixed inset-0 -z-20 pointer-events-none">
        {/* Corner brackets - more prominent, adjusted for mobile */}
        <div className="hidden sm:block absolute top-6 sm:top-8 left-6 sm:left-8 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 border-l-2 border-t-2 border-purple-500/30" />
        <div className="hidden sm:block absolute top-6 sm:top-8 right-6 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 border-r-2 border-t-2 border-purple-500/30" />
        <div className="hidden sm:block absolute bottom-6 sm:bottom-8 left-6 sm:left-8 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 border-l-2 border-b-2 border-purple-500/30" />
        <div className="hidden sm:block absolute bottom-6 sm:bottom-8 right-6 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 border-r-2 border-b-2 border-purple-500/30" />

        {/* Floating lines - hidden on mobile */}
        <div className="hidden md:block absolute top-1/4 left-8 md:left-12 w-px h-32 md:h-40 bg-gradient-to-b from-transparent via-purple-400/20 to-transparent" />
        <div className="hidden md:block absolute bottom-1/4 right-8 md:right-12 w-px h-32 md:h-40 bg-gradient-to-t from-transparent via-purple-400/20 to-transparent" />

        {/* Center crosshair - hidden on mobile */}
        <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-20 md:w-24 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-20 md:h-24 bg-gradient-to-b from-transparent via-purple-500/20 to-transparent" />
        </div>
      </div>
    </main>
  );
}
