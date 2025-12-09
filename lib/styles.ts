/**
 * Shared style tokens for blog surfaces.
 */
export const BLOG_CARD_STYLES = {
  container:
    'group relative rounded-3xl border border-white/10 bg-[#0d0d12]/80 shadow-[0_18px_60px_-36px_rgba(0,0,0,0.75)] transition-all duration-250 ease-out hover:-translate-y-1.5 hover:shadow-[0_24px_80px_-40px_rgba(0,0,0,0.78)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/60',
  title:
    'text-lg sm:text-xl font-semibold leading-tight tracking-tight text-white transition-colors duration-200 group-hover:text-purple-50 line-clamp-2',
  description: 'text-sm text-zinc-300/95 leading-relaxed line-clamp-3',
  meta: 'flex items-center gap-2 text-[12px] text-zinc-300/90',
  category: 'flex items-center gap-1.5 text-[11px] uppercase tracking-[0.16em] text-purple-100',
  tags:
    'inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/[0.08] px-3 py-1 text-[11px] font-semibold text-white shadow-[0_12px_30px_-18px_rgba(0,0,0,0.65)]',
  actionButton:
    'inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-purple-500/40',
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
