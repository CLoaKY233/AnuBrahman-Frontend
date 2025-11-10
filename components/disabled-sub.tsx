'use client';

import Link from 'next/link';

export default function SubscribeForm() {
  return (
    <div className="relative max-w-md mx-auto px-4">
      <div className="relative group">
        {/* Background glow */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 via-purple-400/10 to-purple-500/20 rounded-xl blur-sm opacity-60" />

        {/* Container */}
        <div className="relative rounded-xl border border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-purple-400/10 backdrop-blur-xl p-6 text-center">
          {/* Beta badge */}
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 mb-4">
            <span className="text-xs font-light text-purple-300 uppercase tracking-wider">
              Coming Soon
            </span>
          </div>

          {/* Message */}
          <h3 className="text-base sm:text-lg font-light text-white mb-2">
            Newsletter Subscriptions Available Soon
          </h3>
          <p className="text-xs sm:text-sm font-light text-zinc-300 leading-relaxed mb-5">
            We&apos;re still in beta. Meanwhile, explore our latest insights and cosmic thoughts.
          </p>

          {/* CTA Button */}
          <Link
            href="/blogs"
            className="group/btn relative inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-500 rounded-lg text-xs sm:text-sm font-light text-white transition-all duration-300 hover:from-purple-500 hover:to-purple-400 overflow-hidden"
          >
            <span className="relative z-10 flex items-center space-x-2 tracking-wide uppercase">
              <span>Explore Blogs</span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-300 opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100" />
          </Link>
        </div>

        {/* Bottom accent line */}
        <div className="absolute -bottom-1.5 left-1/2 h-px w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />
      </div>
    </div>
  );
}
