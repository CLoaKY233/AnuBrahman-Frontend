'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ArrowUp, Copy, Link as LinkIcon, Share2 } from 'lucide-react';
import { cn } from '@/lib/utils';

type RevealProps<T extends React.ElementType = 'div'> = {
  as?: T;
  delay?: number;
  className?: string;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

/**
 * IntersectionObserver-powered reveal that only toggles classes,
 * keeping animation work on the CSS (transform/opacity) side.
 */
export function Reveal<T extends React.ElementType = 'div'>({
  as,
  delay = 0,
  className,
  children,
  ...props
}: RevealProps<T>) {
  const Component = (as || 'div') as React.ElementType;
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
    const payload = { title, url: shareUrl };

    // Prefer native share when available
    if (navigator.share) {
      try {
        await navigator.share(payload);
        return;
      } catch (err) {
        // fall through to social fallback/copy
      }
    }

    // Fallback: open Twitter intent; if blocked, copy link
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`;
    const opened = window.open(tweetUrl, '_blank', 'noopener,noreferrer');

    if (!opened) {
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
        className="pointer-events-auto inline-flex items-center justify-between gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white shadow-lg shadow-black/10 transition-all duration-150 hover:border-white/20 hover:bg-white/10 min-w-[116px]"
      >
        <Share2 className="h-4 w-4 text-purple-200" />
        <span>Share</span>
      </button>
      <button
        type="button"
        onClick={handleCopy}
        className="pointer-events-auto inline-flex items-center justify-between gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white shadow-lg shadow-black/10 transition-all duration-150 hover:border-white/20 hover:bg-white/10 min-w-[116px]"
      >
        {copied ? <LinkIcon className="h-4 w-4 text-emerald-300" /> : <Copy className="h-4 w-4 text-purple-200" />}
        <span>{copied ? 'Copied' : 'Copy link'}</span>
      </button>
      <button
        type="button"
        onClick={scrollTop}
        className="pointer-events-auto inline-flex items-center justify-between gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white shadow-lg shadow-black/10 transition-all duration-150 hover:border-white/20 hover:bg-white/10 min-w-[116px]"
      >
        <ArrowUp className="h-4 w-4 text-purple-200" />
        <span>Top</span>
      </button>
    </div>
  );
}


