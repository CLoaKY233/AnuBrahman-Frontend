import Link from 'next/link';
import NavFrosted from '@/components/nav-frosted';
import { ArrowRight, ChevronRight, Rocket, Construction } from 'lucide-react';

export default function ComingSoon() {
  return (
    <main className="relative min-h-screen flex flex-col bg-black selection:bg-purple-500/30">
      <NavFrosted />

      {/* Background Grid System */}
      <div className="fixed inset-0 -z-20 pointer-events-none">
        {/* Base Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Spotlight Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-purple-500/10 blur-[120px] rounded-full opacity-50 mix-blend-screen" />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-32 pb-16 relative z-10">
        {/* Technical Badge */}
        <div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          <span className="text-[10px] font-mono font-medium tracking-widest text-purple-300 uppercase">
            System Construction
          </span>
        </div>

        {/* Main Typography */}
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white">
            Engineering the <br />
            <span className="text-transparent bg-clip-text bg-linear-to-b from-white via-white to-white/40">
              Future Frontier.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-lg mx-auto font-light">
            This module is currently under active development.
          </p>
        </div>

        {/* Progress Indicators */}
        <div className="mt-16 w-full max-w-sm mx-auto space-y-8">
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono text-zinc-500 uppercase tracking-wider">
              <span>Status</span>
              <span>45%</span>
            </div>
            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-purple-500 w-[45%] rounded-full" />
            </div>
          </div>

          {/* Action Area */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/"
              className="group flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all duration-200"
            >
              <ArrowRight className="w-4 h-4 rotate-180 transition-transform group-hover:-translate-x-1" />
              <span>Return Home</span>
            </Link>

            <Link
              href="/blog"
              className="group flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-black bg-white rounded-lg hover:bg-zinc-200 transition-all duration-200"
            >
              <span>Read blogs</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Metadata */}
      <div className="w-full max-w-7xl mx-auto px-6 py-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-600 font-mono uppercase tracking-widest">
        <div className="flex items-center gap-2">
          <Rocket className="w-3 h-3" />
          <span>Est. Launch: Q1 2026</span>
        </div>
        <div className="flex items-center gap-2">
          <Construction className="w-3 h-3" />
          <span>Build v0.9.4-alpha</span>
        </div>
      </div>
    </main>
  );
}
