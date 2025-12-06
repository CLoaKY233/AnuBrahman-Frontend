'use client';

import { useState, useMemo, memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Clock, User, Calendar, ChevronRight } from 'lucide-react';
import { Post } from '@/lib/notion';
import { calculateReadingTime, getWordCount } from '@/lib/utils'; // FIX: Correct import path
import { Reveal } from '@/components/blog/article-ux';

interface BlogClientContentProps {
  posts: Post[];
}

type CardViewMode = 'detailed' | 'compact';

const BlogCard = memo(({ post, viewMode }: { post: Post; viewMode: CardViewMode }) => {
  const wordCount = post.content ? getWordCount(post.content) : 0;
  const readingTime = calculateReadingTime(wordCount);
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  const isCompact = viewMode === 'compact';

  return (
    <Link href={`/blog/${post.slug}`}>
      <article
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg transition-all duration-300 hover:-translate-y-1.5 hover:border-purple-400/40 hover:bg-white/10 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer"
        role="article"
        aria-label={`Blog post: ${post.title}`}
      >
        <div className="absolute inset-0 bg-linear-to-br from-white/5 via-transparent to-white/10 opacity-70" />
        <div className="shine-sweep rounded-2xl" />

        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden transition-transform duration-500 ease-out">
          {post.coverImage && (
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              priority={false}
              loading="lazy"
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

          {post.category && (
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
              <span className="inline-flex items-center gap-1 rounded-full bg-black/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white border border-white/15 backdrop-blur">
                {post.category}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="relative flex flex-1 flex-col space-y-4 p-4 sm:p-5">
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-semibold leading-tight text-white line-clamp-2">
              {post.title}
            </h3>
            {!isCompact && (
              <p className="text-sm text-zinc-300 leading-relaxed line-clamp-3">{post.description}</p>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-3 text-[12px] text-zinc-400">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
              <User className="h-3.5 w-3.5 text-purple-200" />
              <span className="truncate">{post.author || 'Guest Author'}</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
              <Clock className="h-3.5 w-3.5 text-purple-200" />
              <span>{readingTime}</span>
            </div>
            {!isCompact && (
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                <Calendar className="h-3.5 w-3.5 text-purple-200" />
                <span>{formatDate(post.date)}</span>
              </div>
            )}
          </div>

          {!isCompact && post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {post.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-zinc-200"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-3">
            <div className="text-xs text-zinc-400">{isCompact ? 'View article' : 'Read more'}</div>
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:border-purple-400/50 group-hover:bg-purple-500/30">
              <ChevronRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
});

BlogCard.displayName = 'BlogCard';

export default function BlogClientContent({ posts }: BlogClientContentProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<CardViewMode>('detailed');

  // Extract unique categories
  const categories = useMemo(() => {
    // FIX: Filter out any undefined/null categories before creating the Set
    const cats = ['All', ...Array.from(new Set(posts.map((p) => p.category).filter(Boolean)))];
    return cats as string[];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags?.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [posts, searchQuery, selectedCategory]);

  const tagCount = useMemo(() => {
    const tagSet = new Set<string>();
    posts.forEach((post) => post.tags?.forEach((tag) => tagSet.add(tag)));
    return tagSet.size;
  }, [posts]);

  const averageReadTime = useMemo(() => {
    const totalWords = posts.reduce((acc, post) => acc + (post.content ? getWordCount(post.content) : 0), 0);
    if (!posts.length) return '—';
    const avgWords = Math.max(1, Math.round(totalWords / posts.length));
    return calculateReadingTime(avgWords);
  }, [posts]);

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
  };

  return (
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-36">
      <div className="pointer-events-none absolute inset-x-0 top-6 h-64 bg-linear-to-b from-purple-900/30 via-black/40 to-transparent blur-3xl" />

      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-white/5 via-black/60 to-purple-900/10 px-6 py-10 sm:px-10 sm:py-14 shadow-2xl shadow-black/40">
        <Reveal className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-300 backdrop-blur">
            <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Flight-ready knowledge
          </div>
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
              Aerospace & Physics Dispatch
            </h1>
            <p className="max-w-3xl text-base text-zinc-300 sm:text-lg">
              Deep-dives, mission logs, and practical breakdowns for modern aerospace teams and curious explorers. Built for clarity, speed, and focus.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120} className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Published</p>
            <p className="text-2xl font-semibold text-white">{posts.length}</p>
            <p className="text-xs text-zinc-400">In-depth articles</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Categories</p>
            <p className="text-2xl font-semibold text-white">{Math.max(categories.length - 1, 0)}</p>
            <p className="text-xs text-zinc-400">Curated focuses</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Tags</p>
            <p className="text-2xl font-semibold text-white">{tagCount}</p>
            <p className="text-xs text-zinc-400">Topics covered</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Avg. read</p>
            <p className="text-2xl font-semibold text-white">{averageReadTime}</p>
            <p className="text-xs text-zinc-400">Crafted for focus</p>
          </div>
        </Reveal>
      </section>

      {/* Search & Filter */}
      <section className="relative py-8 sm:py-12">
        <div className="mx-auto w-full max-w-6xl space-y-4 sm:space-y-5">
          <Reveal className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 shadow-lg shadow-black/30 backdrop-blur">
            <div className="absolute inset-0 bg-linear-to-r from-white/5 via-transparent to-purple-500/10 opacity-60" />
            <div className="relative flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-white">Search & Filters</div>
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-zinc-400">
                  <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">Live</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">Tags aware</span>
                </div>
              </div>
              <div className="relative flex items-center">
                <div className="pointer-events-none absolute left-0 pl-3 sm:pl-4 flex items-center">
                  <Search className="h-4 w-4 sm:h-5 sm:w-5 text-zinc-400 transition-colors duration-200 group-focus-within:text-purple-400" />
                </div>
                <input
                  type="search"
                  placeholder="Search articles, tags, topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl bg-black/20 border border-white/10 pl-9 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-3.5 text-sm placeholder-zinc-500 text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500/60 focus:border-purple-500/50"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl border border-white/5" />
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400">
                <span className="rounded-full bg-white/5 px-3 py-1">Filter title, description, tags</span>
                <span className="rounded-full bg-white/5 px-3 py-1">
                  {selectedCategory === 'All' ? 'All categories' : `Category: ${selectedCategory}`}
                </span>
                {searchQuery && (
                  <span className="rounded-full bg-purple-600/30 text-white px-3 py-1">
                    Query: “{searchQuery}”
                  </span>
                )}
              </div>
            </div>
          </Reveal>

          <Reveal delay={60} className="flex flex-wrap items-center gap-2 sm:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`group relative overflow-hidden px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-full border transition-all duration-200 backdrop-blur ${
                  selectedCategory === category
                    ? 'bg-purple-600/70 border-purple-300/70 text-white shadow-lg shadow-purple-500/30'
                    : 'bg-white/5 border-white/10 text-zinc-200 hover:bg-white/10 hover:border-white/20'
                }`}
                aria-pressed={selectedCategory === category}
              >
                <span className="relative z-10 tracking-wide uppercase">{category}</span>
                <span className="shine-sweep rounded-full" />
              </button>
            ))}
          </Reveal>

          <Reveal delay={120} className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-zinc-400">
            <span>
              Showing <strong className="text-white font-medium">{filteredPosts.length}</strong> of{' '}
              <strong className="text-white font-medium">{posts.length}</strong> articles
            </span>
            {(searchQuery || selectedCategory !== 'All') && (
              <button
                onClick={handleClearFilters}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-xs font-semibold text-purple-200 transition-colors hover:border-white/20 hover:bg-white/5"
              >
                Clear filters
              </button>
            )}
          </Reveal>

          <Reveal delay={140} className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-zinc-300">
            <span className="text-zinc-400">Card density</span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setViewMode('detailed')}
                className={`rounded-full px-3 py-1.5 border text-xs font-semibold transition-all duration-200 ${
                  viewMode === 'detailed'
                    ? 'border-purple-400/70 bg-purple-600/50 text-white shadow-lg shadow-purple-500/25'
                    : 'border-white/10 bg-white/5 text-zinc-300 hover:border-white/20 hover:bg-white/10'
                }`}
              >
                Detailed
              </button>
              <button
                type="button"
                onClick={() => setViewMode('compact')}
                className={`rounded-full px-3 py-1.5 border text-xs font-semibold transition-all duration-200 ${
                  viewMode === 'compact'
                    ? 'border-purple-400/70 bg-purple-600/50 text-white shadow-lg shadow-purple-500/25'
                    : 'border-white/10 bg-white/5 text-zinc-300 hover:border-white/20 hover:bg-white/10'
                }`}
              >
                Compact
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="relative py-8 sm:py-12">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {filteredPosts.map((post, index) => (
              <Reveal key={post.id} delay={index * 60}>
                <BlogCard post={post} viewMode={viewMode} />
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="text-center py-16 sm:py-24 px-4">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/5 border border-white/10 mb-4 sm:mb-6">
              <Search className="w-8 h-8 sm:w-10 sm:h-10 text-zinc-500" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 sm:mb-3">
              No articles found
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-zinc-400 mb-6 sm:mb-8">
              Try adjusting your search or filters to find what you&apos;re looking for.
            </p>
            <button
              onClick={handleClearFilters}
              className="px-6 sm:px-8 py-2.5 sm:py-3 text-sm font-semibold text-white bg-purple-600/80 border border-purple-400/50 rounded-lg hover:bg-purple-600 transition-all duration-200"
            >
              Clear all filters
            </button>
          </Reveal>
        )}
      </section>

      {/* Newsletter CTA */}
      {/*<section className="relative my-12 sm:my-16 lg:my-20 px-4 sm:px-0">
        <div className="relative rounded-2xl sm:rounded-3xl border border-white/10 bg-linear-to-br from-purple-950/20 via-black/40 to-black/60 backdrop-blur-xl overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-purple-500/5 to-transparent" />
          <div className="relative p-8 sm:p-12 md:p-16 text-center space-y-4 sm:space-y-6 z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
              Never Miss an Article
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
              Subscribe to our newsletter for the latest insights and breakthroughs in aerospace and
              space science.
            </p>
            <button
              type="button"
              className="inline-flex items-center rounded-lg sm:rounded-xl border border-purple-400/50 bg-linear-to-r from-purple-600 to-purple-500 px-6 sm:px-10 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25 active:scale-95"
            >
              <span className="tracking-wider uppercase">Subscribe Now</span>
            </button>
          </div>
        </div>
      </section>*/}
    </div>
  );
}
