/**
 * Shared style tokens for blog surfaces.
 */
export const BLOG_CARD_STYLES = {
  container:
    'group rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-200 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10',
  title: 'mt-3 line-clamp-2 text-base font-semibold text-white group-hover:text-purple-100',
  description: 'mt-2 line-clamp-2 text-sm text-zinc-400',
  meta: 'mt-3 flex items-center gap-3 text-xs text-zinc-400',
  category: 'flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-purple-200',
  tags: 'inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-zinc-200',
  actionButton:
    'inline-flex items-center gap-2 rounded-full bg-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-purple-500',
  secondaryButton:
    'inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/25',
} as const;

export const REVEAL_STYLES = {
  base: 'reveal',
  visible: 'reveal-visible',
} as const;

export const TYPOGRAPHY = {
  prose:
    'article-prose prose prose-invert prose-headings:text-white prose-a:text-purple-100 prose-a:underline-offset-4 max-w-none',
  heading1:
    'max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl',
  heading2: 'text-lg font-semibold text-white',
  subtitle: 'max-w-3xl text-base text-zinc-300 sm:text-lg lg:text-xl',
  body: 'text-[15px] leading-relaxed text-zinc-200',
} as const;
