import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import NavFrosted from '@/components/nav-frosted';
import BlogFooter from '@/components/blog/blog-footer';

export const metadata: Metadata = {
  title: 'Blog | AnuBrahman',
  description: 'Explore articles about space science, aerospace, and astrophysics.',
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <main className="relative min-h-screen overflow-x-hidden text-white selection:bg-purple-500/30">
      <NavFrosted />
      {children}
      <BlogFooter />
    </main>
  );
}
