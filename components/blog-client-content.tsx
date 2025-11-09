'use client';

import { useState, useMemo, memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Clock, User, Calendar, ChevronRight } from 'lucide-react';
import { Post } from '@/lib/notion';
import { calculateReadingTime, getWordCount } from '@/lib/utils'; // FIX: Correct import path

interface BlogClientContentProps {
  posts: Post[];
}

const BlogCard = memo(({ post }: { post: Post }) => {
  const wordCount = post.content ? getWordCount(post.content) : 0;
  const readingTime = calculateReadingTime(wordCount);
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  return (
    <Link href={`/blog/${post.slug}`}>
      <article
        className="group relative h-[26rem] sm:h-[28rem] rounded-xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:shadow-xl hover:shadow-black/50 cursor-pointer"
        role="article"
        aria-label={`Blog post: ${post.title}`}
      >
        {/* Image Container */}
        <div className="relative h-1/2 overflow-hidden transition-all duration-500 ease-in-out group-hover:h-full">
          {post.coverImage && (
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:blur-sm"
              priority={false}
              loading="lazy"
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80 transition-all duration-300 group-hover:from-black/50 group-hover:via-black/60 group-hover:to-black/80" />

          {/* Category Badge */}
          {post.category && (
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-30 transition-opacity duration-300 group-hover:opacity-0">
              <span className="inline-block px-3 py-1 text-xs font-medium tracking-wide uppercase rounded-lg bg-purple-500/80 text-white backdrop-blur-sm">
                {post.category}
              </span>
            </div>
          )}
        </div>

        {/* Default Content */}
        <div className="relative h-1/2 p-4 sm:p-6 flex flex-col justify-between transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:pointer-events-none">
          <div className="space-y-2 sm:space-y-3">
            <h3 className="text-base sm:text-lg font-medium leading-tight text-white line-clamp-2">
              {post.title}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed line-clamp-2">
              {post.description}
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center justify-between text-xs text-zinc-400 border-t border-white/10 pt-3">
              <div className="flex items-center gap-1.5">
                <User className="w-3 h-3" />
                <span className="truncate">{post.author || 'Guest Author'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3 h-3" />
                <span>{readingTime}</span>
              </div>
            </div>

            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-2 sm:px-2.5 py-0.5 sm:py-1 text-xs font-medium rounded-md bg-white/10 text-zinc-300 border border-white/20"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between opacity-0 pointer-events-none transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:pointer-events-auto z-20">
          <div className="space-y-3 sm:space-y-4">
            {post.category && (
              <div className="text-xs font-semibold text-purple-300 tracking-wide uppercase">
                {post.category}
              </div>
            )}
            <h3 className="text-lg sm:text-xl font-semibold leading-tight text-white">
              {post.title}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed line-clamp-4">
              {post.description}
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-end justify-between">
              <div className="space-y-1.5 sm:space-y-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-white">
                  <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-300" />
                  <span className="truncate max-w-[150px] sm:max-w-none">
                    {post.author || 'Guest Author'}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-zinc-300">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{readingTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                </div>
              </div>
              <div className="p-2 rounded-full bg-purple-500/20 border border-purple-400/30 backdrop-blur-sm">
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
            </div>

            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2 sm:pt-3 border-t border-white/20">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-2 sm:px-2.5 py-0.5 sm:py-1 text-xs font-medium rounded-md bg-white/15 text-white border border-white/30 backdrop-blur-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
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

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
  };

  return (
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="relative pt-24 pb-8 sm:pt-32 sm:pb-12 md:pt-40 md:pb-16">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-4 sm:space-y-6">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-2 sm:px-5 sm:py-2.5">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full mr-2 sm:mr-3 animate-pulse" />
            <span className="text-[10px] sm:text-xs font-medium tracking-widest text-zinc-300 uppercase">
              Insights • Research • Discovery
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none">
            <span className="block bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              Cosmic Insights
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-zinc-300 max-w-2xl leading-relaxed px-4">
            Exploring the latest breakthroughs in aerospace, astrophysics, and space technology
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="relative py-6 sm:py-8 md:py-12">
        <div className="space-y-4 sm:space-y-6">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 sm:pl-5 flex items-center pointer-events-none">
              <Search className="h-4 w-4 sm:h-5 sm:w-5 text-zinc-400 transition-colors duration-200 group-focus-within:text-purple-400" />
            </div>
            <input
              type="search"
              placeholder="Search articles, tags, topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg sm:rounded-xl pl-11 sm:pl-14 pr-4 sm:pr-6 py-3 sm:py-4 text-sm placeholder-zinc-500 text-white transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-purple-500/40 focus:border-purple-500/40 focus:bg-white/10 backdrop-blur-xl"
            />
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-lg border transition-all duration-200 backdrop-blur-xl ${
                  selectedCategory === category
                    ? 'bg-purple-600/40 border-purple-400/50 text-white'
                    : 'bg-white/5 border-white/10 text-zinc-300 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <span className="tracking-wide uppercase">{category}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between text-xs sm:text-sm text-zinc-400">
            <span>
              Showing <strong className="text-white font-medium">{filteredPosts.length}</strong> of{' '}
              <strong className="text-white font-medium">{posts.length}</strong> articles
            </span>
            {(searchQuery || selectedCategory !== 'All') && (
              <button
                onClick={handleClearFilters}
                className="text-purple-400 hover:text-purple-300 underline underline-offset-2 transition-colors duration-200"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="relative py-8 sm:py-12">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 sm:py-24 px-4">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/5 border border-white/10 mb-4 sm:mb-6">
              <Search className="w-8 h-8 sm:w-10 sm:h-10 text-zinc-500" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 sm:mb-3">
              No articles found
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-zinc-400 mb-6 sm:mb-8">
              {/* FIX: Used &apos; for apostrophe to fix JSX warning */}
              Try adjusting your search or filters to find what you&apos;re looking for.
            </p>
            <button
              onClick={handleClearFilters}
              className="px-6 sm:px-8 py-2.5 sm:py-3 text-sm font-medium text-white bg-purple-600/80 border border-purple-400/50 rounded-lg hover:bg-purple-600 transition-all duration-200"
            >
              Clear all filters
            </button>
          </div>
        )}
      </section>

      {/* Newsletter CTA */}
      <section className="relative my-12 sm:my-16 lg:my-20 px-4 sm:px-0">
        <div className="relative rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-br from-purple-950/20 via-black/40 to-black/60 backdrop-blur-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent" />
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
              className="inline-flex items-center rounded-lg sm:rounded-xl border border-purple-400/50 bg-gradient-to-r from-purple-600 to-purple-500 px-6 sm:px-10 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25 active:scale-95"
            >
              <span className="tracking-wider uppercase">Subscribe Now</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
