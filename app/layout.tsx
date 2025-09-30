import type React from 'react';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'AnuBrahman - Aerospace & Astrophysics Innovation',
  description:
    'Engineering infinity: from Core to Cosmos. A comprehensive platform for space science enthusiasts and professionals.',
  authors: [{ name: 'Lay Sheth', url: 'https://github.com/cloaky233' }],
  creator: 'Lay Sheth',
  keywords: ['aerospace', 'astrophysics', 'space science', 'astronomy', 'innovation'],
  openGraph: {
    type: 'website',
    title: 'AnuBrahman - Aerospace & Astrophysics Innovation',
    description: 'Engineering infinity: from Core to Cosmos',
    siteName: 'AnuBrahman',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AnuBrahman - Aerospace & Astrophysics Innovation',
    description: 'Engineering infinity: from Core to Cosmos',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth antialiased">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} relative min-h-screen`}
      >
        {/* LAYER 1: Pure Matte Black Foundation */}
        <div className="fixed inset-0 -z-50 bg-black" aria-hidden="true" />

        {/* LAYER 2: Subtle Matte Black Gradient for Depth */}
        <div
          className="fixed inset-0 -z-49 bg-gradient-to-br from-black via-[#0a0a0a] to-black"
          aria-hidden="true"
        />

        {/* LAYER 3: Rich Noise Texture Overlay */}
        <div
          className="fixed inset-0 -z-48 premium-noise-texture opacity-[0.015] mix-blend-overlay"
          aria-hidden="true"
        />

        {/* LAYER 4: Purple Gradient Accents - Strategic Placement */}
        <div className="fixed inset-0 -z-47 overflow-hidden" aria-hidden="true">
          {/* Top-left purple ambient */}
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-purple-950/[0.15] rounded-full blur-[120px]" />

          {/* Bottom-right purple ambient */}
          <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-purple-900/[0.12] rounded-full blur-[100px]" />

          {/* Center subtle glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-950/[0.08] rounded-full blur-[140px]" />
        </div>

        {/* LAYER 5: Animated Ambient Lighting Effects */}
        <div className="fixed inset-0 -z-46 overflow-hidden pointer-events-none" aria-hidden="true">
          {/* Pulsing glow - top area */}
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/[0.08] rounded-full blur-[100px] animate-ambient-pulse" />

          {/* Pulsing glow - bottom area with delay */}
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-purple-400/[0.06] rounded-full blur-[90px] animate-ambient-pulse-delayed" />

          {/* Floating ambient light */}
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-600/[0.05] rounded-full blur-[80px] animate-float-slow" />
        </div>

        {/* LAYER 6: Subtle Radial Gradient Grid Pattern */}
        <div
          className="fixed inset-0 -z-45 bg-[radial-gradient(circle_at_1px_1px,rgba(168,85,247,0.04)_1px,transparent_0)] bg-[size:48px_48px] opacity-30"
          aria-hidden="true"
        />

        {/* LAYER 7: Decorative Geometric Accents */}
        <div className="fixed inset-0 -z-44 pointer-events-none" aria-hidden="true">
          {/* Top-left vertical line */}
          <div className="absolute top-32 left-12 w-px h-40 bg-gradient-to-b from-transparent via-white/[0.08] to-transparent" />

          {/* Bottom-right horizontal line */}
          <div className="absolute bottom-32 right-16 w-32 h-px bg-gradient-to-r from-transparent via-purple-400/[0.12] to-transparent" />

          {/* Center diamond accent */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-white/[0.06] rotate-45" />

          {/* Additional corner accents */}
          <div className="absolute top-1/3 right-1/4 w-6 h-6 border border-purple-500/[0.08] rounded-full" />
          <div className="absolute bottom-1/3 left-1/4 w-4 h-4 border border-purple-400/[0.06]" />
        </div>

        {/* Main Content */}
        <Suspense>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
