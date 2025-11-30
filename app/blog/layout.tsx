import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import NavFrosted from '@/components/nav-frosted';

export const metadata: Metadata = {
  title: 'Blog | AnuBrahman',
  description: 'Explore articles about space science, aerospace, and astrophysics.',
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <main className="relative min-h-screen overflow-x-hidden text-white selection:bg-purple-500/30">
      <NavFrosted />
      {children}

      <footer className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 mt-12 sm:mt-20">
        <div className="border-t border-white/10 pt-6 sm:pt-8 text-center">
          <p className="text-xs text-zinc-500 tracking-wide">
            © {new Date().getFullYear()} ANUBRAHMAN — All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
