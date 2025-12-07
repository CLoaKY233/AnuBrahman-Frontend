'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ArrowUp, Copy, Link as LinkIcon, Share2 } from 'lucide-react';
import { cn } from '@/lib/utils';

type RevealProps<T extends React.ElementType = 'div'> = {
  as?: T;
  delay?: number;
  className?: string;
  lazy?: boolean;
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
  lazy = true,
  children,
  ...props
}: RevealProps<T>) {
  const Component = (as || 'div') as React.ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(!lazy);

  useEffect(() => {
    if (!lazy) {
      setVisible(true);
      return;
    }

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
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [lazy]);

  return (
    <Component
      ref={ref}
      className={cn('reveal will-change-transform', visible && 'reveal-visible', className)}
      style={delay ? ({ '--reveal-delay': `${delay}ms` } as React.CSSProperties) : undefined}
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
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setShareUrl(window.location.href);
  }, [slug]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const copyToClipboard = async (text: string) => {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return;
    }

    // Fallback for browsers without async clipboard API
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);

    const selection = document.getSelection();
    const selectedRange = selection && selection.rangeCount > 0 ? selection.getRangeAt(0) : null;

    textarea.select();
    const success = document.execCommand('copy');
    document.body.removeChild(textarea);

    if (selectedRange && selection) {
      selection.removeAllRanges();
      selection.addRange(selectedRange);
    }

    if (!success) {
      throw new Error('Copy command failed');
    }
  };

  const handleCopy = async () => {
    const url = shareUrl || window.location.href;
    try {
      await copyToClipboard(url);
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
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
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
        {copied ? (
          <LinkIcon className="h-4 w-4 text-emerald-300" />
        ) : (
          <Copy className="h-4 w-4 text-purple-200" />
        )}
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
