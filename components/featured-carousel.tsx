'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Post } from '@/lib/notion';
import { calculateReadingTime, getWordCount } from '@/lib/utils';

interface FeaturedCarouselProps {
  featuredPosts: Post[];
}

export default function FeaturedCarousel({ featuredPosts }: FeaturedCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on('select', onSelect);

    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  // Failsafe: If no featured posts, show a placeholder message
  if (!featuredPosts || featuredPosts.length === 0) {
    return (
      <section className="relative py-8 sm:py-12">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light tracking-tight text-white mb-3 sm:mb-4">
            Featured Articles
          </h2>
          <p className="text-sm sm:text-base font-light text-zinc-400 max-w-2xl mx-auto leading-relaxed px-4">
            Discover our most impactful and cutting-edge content in space science and technology.
          </p>
          <div className="mx-auto w-16 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent mt-4 sm:mt-6" />
        </div>

        {/* Empty state */}
        <div className="relative mx-auto max-w-[90rem] px-2 sm:px-4 md:px-8 lg:px-16">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-12 sm:p-16 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 border border-white/20 mb-6">
              <svg
                className="w-8 h-8 sm:w-10 sm:h-10 text-zinc-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
              No Featured Articles Yet
            </h3>
            <p className="text-sm sm:text-base text-zinc-400 mb-6">
              Mark posts as featured in Notion to display them here on the homepage carousel.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-white bg-purple-600/80 border border-purple-400/50 rounded-lg hover:bg-purple-600 transition-all duration-200"
            >
              View All Articles
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-96 h-24 sm:h-32 bg-purple-500/5 rounded-full blur-3xl -z-10" />
      </section>
    );
  }

  return (
    <section className="relative py-8 sm:py-12">
      {/* Section Header */}
      <div className="text-center mb-8 sm:mb-12 lg:mb-16 px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-light tracking-tight text-white mb-3 sm:mb-4">
          Featured Articles
        </h2>
        <p className="text-sm sm:text-base font-light text-zinc-400 max-w-2xl mx-auto leading-relaxed px-4">
          Discover our most impactful and cutting-edge content in space science and technology.
        </p>
        <div className="mx-auto w-16 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent mt-4 sm:mt-6" />
      </div>

      <Carousel
        setApi={setApi}
        className="relative mx-auto max-w-[90rem] px-2 sm:px-4 md:px-8 lg:px-16"
        opts={{
          loop: true,
          align: 'center',
        }}
      >
        <div className="relative [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] sm:[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <CarouselContent className="-ml-2 sm:-ml-4 lg:-ml-8 py-6 sm:py-8 lg:py-12">
            {featuredPosts.map((post, index) => {
              const isActive = index === current;
              const wordCount = post.content ? getWordCount(post.content) : 0;
              const readingTime = calculateReadingTime(wordCount);

              return (
                <CarouselItem
                  key={post.slug}
                  className="pl-2 sm:pl-4 lg:pl-8 basis-[85%] sm:basis-[75%] md:basis-1/2 lg:basis-1/3"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div
                      className={cn(
                        'h-full w-full transition-all duration-500 ease-in-out',
                        isActive ? 'opacity-100' : 'opacity-50 sm:scale-90'
                      )}
                    >
                      <article className="group relative h-80 sm:h-96 cursor-pointer">
                        <div className="relative h-full overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-950/50">
                          {/* Background Image */}
                          <div className="absolute inset-0">
                            {post.coverImage && (
                              <Image
                                src={post.coverImage}
                                alt={post.title}
                                fill
                                priority={index < 3}
                                className="object-cover opacity-60 transition-all duration-700 group-hover:opacity-75 group-hover:scale-110"
                              />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-purple-400/10 via-black/60 to-black/80" />
                          </div>

                          {/* Content */}
                          <div className="relative z-10 flex h-full flex-col justify-between p-4 sm:p-5 lg:p-6">
                            {/* Top Section - Category and Read Time */}
                            <div className="flex justify-between items-start gap-2 mb-3 sm:mb-4">
                              <div className="flex items-center gap-2">
                                {post.category && (
                                  <span className="inline-block rounded-full border border-purple-400/30 bg-purple-500/20 backdrop-blur-sm px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-light tracking-wider text-purple-300 uppercase truncate max-w-[65%] sm:max-w-none">
                                    {post.category}
                                  </span>
                                )}
                                {post.featured && (
                                  <span className="inline-block rounded-full border border-yellow-400/30 bg-yellow-500/20 backdrop-blur-sm px-2 sm:px-2.5 py-0.5 text-[8px] sm:text-[10px] font-semibold tracking-wider text-yellow-300 uppercase whitespace-nowrap">
                                    Featured
                                  </span>
                                )}
                              </div>
                              <span className="text-[10px] sm:text-xs font-light text-zinc-400 whitespace-nowrap flex-shrink-0">
                                {readingTime}
                              </span>
                            </div>

                            {/* Middle Section - Title */}
                            <div className="flex-1 flex items-end pb-2 sm:pb-3">
                              <h3 className="text-base sm:text-lg lg:text-xl font-light leading-snug sm:leading-snug text-white transition-colors duration-300 group-hover:text-purple-100 line-clamp-3 sm:line-clamp-3">
                                {post.title}
                              </h3>
                            </div>

                            {/* Bottom Section - Author and Arrow */}
                            <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-white/10 gap-2">
                              <div className="flex items-center space-x-1.5 sm:space-x-2 text-[10px] sm:text-xs font-light text-zinc-400 min-w-0 flex-1">
                                <span className="truncate">{post.author || 'Guest Author'}</span>
                                <span className="hidden xs:inline flex-shrink-0">•</span>
                                <span className="hidden xs:inline truncate">
                                  {new Date(post.date).toLocaleDateString('en-US', {
                                    month: 'short',
                                    day: 'numeric',
                                  })}
                                </span>
                              </div>
                              <svg
                                className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/40 transition-all duration-300 group-hover:text-purple-400 group-hover:translate-x-1 flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={1.5}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 -z-10 blur-2xl" />
                        </div>
                      </article>
                    </div>
                  </Link>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </div>

        {/* Navigation Buttons - Hidden on very small screens */}
        <CarouselPrevious className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 h-10 w-10 sm:h-12 sm:w-12 rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-lg transition-all duration-300 hover:border-purple-500/30 hover:bg-purple-900/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-0" />
        <CarouselNext className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 h-10 w-10 sm:h-12 sm:w-12 rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-lg transition-all duration-300 hover:border-purple-500/30 hover:bg-purple-900/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-0" />
      </Carousel>

      {/* Dot Indicators for Mobile */}
      <div className="flex sm:hidden justify-center gap-2 mt-6">
        {featuredPosts.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => api?.scrollTo(index)}
            className={cn(
              'h-1.5 rounded-full transition-all duration-300',
              index === current ? 'w-8 bg-purple-500' : 'w-1.5 bg-white/30'
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-96 h-24 sm:h-32 bg-purple-500/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
