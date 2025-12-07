'use client';

import { format } from 'date-fns';
import { Calendar, Clock, User } from 'lucide-react';
import type { ReactNode } from 'react';

type MetadataVariant = 'header' | 'sidebar';

interface ArticleMetadataProps {
  author: string;
  date: Date;
  readingTime: string;
  wordCount: number;
  tags?: string[];
  variant?: MetadataVariant;
  children?: ReactNode;
  className?: string;
}

export function ArticleMetadata({
  author,
  date,
  readingTime,
  wordCount,
  tags,
  variant = 'header',
  children,
  className = '',
}: ArticleMetadataProps) {
  const baseClass =
    variant === 'header'
      ? 'grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 backdrop-blur-md sm:grid-cols-2 lg:grid-cols-3'
      : 'rounded-2xl border border-white/10 bg-white/5 p-5 shadow-xl shadow-black/30';

  if (variant === 'sidebar') {
    return (
      <div className={className || baseClass}>
        <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
          Article dossier
        </h3>
        <div className="mt-4 space-y-3 text-sm text-zinc-300">
          <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2">
            <span>Published</span>
            <span className="font-semibold text-white">{format(date, 'dd MMM yyyy')}</span>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2">
            <span>Length</span>
            <span className="font-semibold text-white">{wordCount.toLocaleString()} words</span>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2">
            <span>Read time</span>
            <span className="font-semibold text-white">{readingTime}</span>
          </div>
          {tags && tags.length > 0 && (
            <div className="rounded-lg bg-white/5 px-3 py-2">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Key tags</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-zinc-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
        {children}
      </div>
    );
  }

  return (
    <div className={className || baseClass}>
      <div className="flex items-center gap-3 rounded-xl bg-white/5 px-3 py-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-purple-500 to-indigo-500 text-white shadow-lg shadow-purple-500/20">
          <User className="h-4 w-4" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.15em] text-zinc-500">Author</p>
          <p className="text-sm font-semibold text-white">{author}</p>
        </div>
      </div>

      <div className="flex items-center gap-3 rounded-xl bg-white/5 px-3 py-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-purple-500 to-indigo-500 text-white shadow-lg shadow-purple-500/20">
          <Calendar className="h-4 w-4" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.15em] text-zinc-500">Published</p>
          <p className="text-sm font-semibold text-white">{format(date, 'MMMM d, yyyy')}</p>
        </div>
      </div>

      <div className="flex items-center gap-3 rounded-xl bg-white/5 px-3 py-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-purple-500 to-indigo-500 text-white shadow-lg shadow-purple-500/20">
          <Clock className="h-4 w-4" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.15em] text-zinc-500">Read time</p>
          <p className="text-sm font-semibold text-white">{readingTime}</p>
        </div>
      </div>
      {children}
    </div>
  );
}
