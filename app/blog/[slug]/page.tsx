import { getPostsFromCache } from '@/lib/notion';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';
import { Badge } from '@/components/ui/badge';
import { calculateReadingTime, getWordCount } from '@/lib/utils';
import { getMarkdownComponents } from '@/components/blog/mdx-component';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { ArrowLeft, BookOpen, Clock, Link as LinkIcon, Sparkles, User } from 'lucide-react';
import Link from 'next/link';
import { extractHeadings } from '@/lib/post-helpers';
import TableOfContents from '@/components/blog/table-of-contents';
import { ArticleActionRail, Reveal } from '@/components/blog/article-ux';
import { ArticleMetadata } from '@/components/blog/article-metadata';
import { TYPOGRAPHY } from '@/lib/styles';

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const posts = getPostsFromCache();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!siteUrl) {
    throw new Error('NEXT_PUBLIC_SITE_URL is not configured. Set it in .env.local');
  }

  const baseUrl = siteUrl || 'https://anubrahman.com';

  return {
    title: post.title,
    description: post.summary,
    alternates: {
      canonical: `${baseUrl}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.summary,
      type: 'article',
      url: `${baseUrl}/blog/${post.slug}`,
      publishedTime: new Date(post.date).toISOString(),
      authors: post.author ? [post.author] : [],
      tags: post.tags,
      images: [
        {
          url: post.coverImage || `${baseUrl}/opengraph-image.png`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: [
        {
          url: post.coverImage || `${baseUrl}/opengraph-image.png`,
          alt: post.title,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  const posts = getPostsFromCache();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const posts = getPostsFromCache();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const wordCount = post.content ? getWordCount(post.content) : 0;
  const readingTime = calculateReadingTime(wordCount);
  const headings = post.content ? extractHeadings(post.content) : [];
  const markdownComponents = getMarkdownComponents();
  const recommendedPosts = posts.filter((p) => p.slug !== slug).slice(0, 3);

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!siteUrl) {
    console.warn('NEXT_PUBLIC_SITE_URL is not configured for JSON-LD schema');
  }

  const baseUrl = siteUrl || 'https://anubrahman.com';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.summary,
    image: post.coverImage || `${baseUrl}/opengraph-image.png`,
    datePublished: new Date(post.date).toISOString(),
    author: {
      '@type': 'Person',
      name: post.author || 'Guest Author',
    },
    publisher: {
      '@type': 'Organization',
      name: 'AnuBrahman',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArticleActionRail title={post.title} slug={post.slug} />

      <article className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-x-8 top-6 h-64 rounded-[120px] bg-linear-to-r from-purple-900/20 via-indigo-800/12 to-blue-800/12 blur-xl" />
        </div>

        <div className="relative mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12 pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-24">
          <Reveal className="flex flex-col gap-3 pb-6 sm:pb-10">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-zinc-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to all articles</span>
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14 xl:gap-16">
            <div className="space-y-10 min-w-0">
              <Reveal className="space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  {post.category && (
                    <Badge className="rounded-full bg-purple-500/90 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-lg shadow-purple-500/25">
                      {post.category}
                    </Badge>
                  )}
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
                    <BookOpen className="h-4 w-4 text-purple-200" />
                    <span>
                      {readingTime} • {wordCount.toLocaleString()} words
                    </span>
                  </div>
                </div>

                <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                  {post.title}
                </h1>

                <ArticleMetadata
                  author={post.author || 'Guest Author'}
                  date={new Date(post.date)}
                  readingTime={readingTime}
                  wordCount={wordCount}
                  variant="header"
                />
              </Reveal>

              {post.coverImage && (
                <Reveal className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40">
                  <div className="relative aspect-video w-full">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out will-change-transform"
                      priority
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 896px"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />
                  </div>
                </Reveal>
              )}

              {post.summary && (
                <Reveal className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 lg:p-7 space-y-3">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-purple-100">
                    Summary
                  </div>
                  <p className="text-[15px] leading-relaxed text-zinc-200 sm:text-base lg:text-lg">
                    {post.summary}
                  </p>
                </Reveal>
              )}

              {post.tags && post.tags.length > 0 && (
                <Reveal className="flex flex-wrap items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-4">
                  {post.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="rounded-full border-white/20 bg-white/5 px-3 py-1.5 text-xs font-semibold text-zinc-200 hover:border-white/30 hover:bg-white/10"
                    >
                      #{tag}
                    </Badge>
                  ))}
                </Reveal>
              )}

              <section
                id="article-body"
                className={`${TYPOGRAPHY.prose} prose-base sm:prose-lg lg:prose-xl prose-p:text-[1.02rem] sm:prose-p:text-[1.05rem] lg:prose-p:text-[1.08rem] prose-p:leading-relaxed wrap-break-words w-full min-w-0`}
              >
                <ReactMarkdown
                  components={markdownComponents}
                  remarkPlugins={[remarkMath, remarkGfm]}
                  rehypePlugins={[rehypeRaw, rehypeKatex]}
                >
                  {post.content}
                </ReactMarkdown>
              </section>

              <div className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 sm:grid-cols-2 sm:gap-6 sm:p-6">
                <div className="flex flex-col gap-2">
                  <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">Footnotes</p>
                  <p className="text-sm text-zinc-300">
                    Footnotes and citations in this article are interactive — tap to jump and resume
                    reading without losing your place.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">Math friendly</p>
                  <p className="text-sm text-zinc-300">
                    Equations render with code-friendly styling. For best results, wrap formulas in
                    backticks or fenced blocks.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-linear-to-r from-purple-600/15 via-black/60 to-indigo-700/20 p-6 shadow-2xl shadow-black/40">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-white">Enjoying the read?</h3>
                    <p className="max-w-xl text-sm text-zinc-300">
                      Share this article with teammates or save it for later. Your support helps us
                      keep publishing deep-dives without the fluff.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/blog"
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/25"
                    >
                      <ArrowLeft className="h-4 w-4 rotate-180" />
                      More articles
                    </Link>
                    <Link
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`${baseUrl}/blog/${post.slug}`)}`}
                      className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-purple-500"
                    >
                      <Sparkles className="h-4 w-4" />
                      Share
                    </Link>
                  </div>
                </div>
              </div>

              {recommendedPosts.length > 0 && (
                <Reveal className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                      <Sparkles className="h-5 w-5 text-purple-200" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Next up</h3>
                      <p className="text-sm text-zinc-400">
                        Handpicked reads to continue the journey
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {recommendedPosts.map((item) => {
                      const wc = item.content ? getWordCount(item.content) : 0;
                      const rt = calculateReadingTime(wc);

                      return (
                        <Link
                          key={item.slug}
                          href={`/blog/${item.slug}`}
                          className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-200 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
                        >
                          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-purple-200">
                            {item.category || 'Article'}
                          </div>
                          <h4 className="mt-3 line-clamp-2 text-base font-semibold text-white group-hover:text-purple-100">
                            {item.title}
                          </h4>
                          <p className="mt-2 line-clamp-2 text-sm text-zinc-400">{item.summary}</p>
                          <div className="mt-3 flex items-center gap-3 text-xs text-zinc-400">
                            <div className="flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5" />
                              <span>{rt}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <User className="h-3.5 w-3.5" />
                              <span>{item.author || 'Guest'}</span>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </Reveal>
              )}
            </div>

            <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              <Reveal>
                <ArticleMetadata
                  author={post.author || 'Guest Author'}
                  date={new Date(post.date)}
                  readingTime={readingTime}
                  wordCount={wordCount}
                  tags={post.tags}
                  variant="sidebar"
                />
              </Reveal>

              <TableOfContents headings={headings} />
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
