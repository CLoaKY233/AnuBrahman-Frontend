'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowUp, Copy, Link as LinkIcon, Share2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const clamp = (value: number, min = 0, max = 1) => Math.min(Math.max(value, min), max);

type RevealProps<T extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>> = {
  as?: T;
  delay?: number;
  className?: string;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

/**
 * IntersectionObserver-powered reveal that only toggles classes,
 * keeping animation work on the CSS (transform/opacity) side.
 */
export function Reveal<T extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>>({
  as,
  delay = 0,
  className,
  children,
  ...props
}: RevealProps<T>) {
  const Component = (as || 'div') as any;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Component
      ref={ref}
      className={cn(
        'reveal will-change-transform',
        visible && 'reveal-visible',
        className
      )}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...props}
    >
      {children}
    </Component>
  );
}

type ReadingProgressProps = {
  targetId: string;
  className?: string;
};

/**
 * Lightweight scroll progress tracker using rAF + passive scroll listener.
 */
export function ReadingProgress({ targetId, className }: ReadingProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const target = document.getElementById(targetId);
    if (!target) return;

    let frame = 0;
    const update = () => {
      const rect = target.getBoundingClientRect();
      const start = window.scrollY + rect.top;
      const total = target.scrollHeight - window.innerHeight + rect.top;
      const pct = clamp((window.scrollY - start) / Math.max(total - start, 1));
      setProgress(pct);
    };

    const onScroll = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [targetId]);

  return (
    <div
      className={cn(
        'fixed inset-x-0 top-0 z-40 h-1.5 bg-black/40 backdrop-blur-md',
        'border-b border-white/5',
        className
      )}
      role="progressbar"
      aria-valuenow={Math.round(progress * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full origin-left bg-linear-to-r from-purple-500 via-indigo-400 to-cyan-300 transition-transform duration-200"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}

type ArticleActionRailProps = {
  title: string;
  slug: string;
};

/**
 * Floating quick actions for share, copy, and jump-to-top.
 */
export function ArticleActionRail({ title, slug }: ArticleActionRailProps) {
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState<string>('');

  useEffect(() => {
    const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://anubrahman.com';
    setShareUrl(typeof window !== 'undefined' ? window.location.href : `${base}/blog/${slug}`);
  }, [slug]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch (err) {
      console.error('Copy failed', err);
    }
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title, url: shareUrl });
      } else {
        await handleCopy();
      }
    } catch (err) {
      await handleCopy();
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pointer-events-none fixed right-4 top-1/3 z-30 hidden xl:flex flex-col gap-3">
      <button
        type="button"
        onClick={handleShare}
        className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white shadow-lg shadow-black/20 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 hover:shadow-black/30"
      >
        <Share2 className="h-4 w-4 text-purple-200" />
        <span>Share</span>
      </button>
      <button
        type="button"
        onClick={handleCopy}
        className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white shadow-lg shadow-black/20 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 hover:shadow-black/30"
      >
        {copied ? <LinkIcon className="h-4 w-4 text-emerald-300" /> : <Copy className="h-4 w-4 text-purple-200" />}
        <span>{copied ? 'Copied' : 'Copy link'}</span>
      </button>
      <button
        type="button"
        onClick={scrollTop}
        className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white shadow-lg shadow-black/20 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 hover:shadow-black/30"
      >
        <ArrowUp className="h-4 w-4 text-purple-200" />
        <span>Top</span>
      </button>
    </div>
  );
}


