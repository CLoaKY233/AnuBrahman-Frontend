import { getPostsFromCache } from '@/lib/notion';
import { format } from 'date-fns';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';
import { Badge } from '@/components/ui/badge';
import { calculateReadingTime, getWordCount } from '@/lib/utils';
import { components } from '@/components/mdx-component';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import Link from 'next/link';

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
    console.warn('NEXT_PUBLIC_SITE_URL is not configured');
  }

  const baseUrl = siteUrl || 'https://anubrahman.com';

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `${baseUrl}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
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
      description: post.description,
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

  // Calculate reading time from full content
  const wordCount = post.content ? getWordCount(post.content) : 0;
  const readingTime = calculateReadingTime(wordCount);

  // Ensure environment variable is set for build-time metadata
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!siteUrl) {
    console.warn('NEXT_PUBLIC_SITE_URL is not configured for JSON-LD schema');
  }

  const baseUrl = siteUrl || 'https://anubrahman.com';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
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
      <article className="space-y-8 sm:space-y-12">
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative pt-24 pb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-zinc-300 hover:text-white bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all duration-200"
            >
              <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Back to Articles</span>
            </Link>
          </div>

          <article className="space-y-8 sm:space-y-12">
            <header className="space-y-4 sm:space-y-6">
              <div>
                {post.category && (
                  <Badge className="bg-purple-500/80 hover:bg-purple-600 text-white border-0 px-3 py-1 text-xs font-medium tracking-wide uppercase">
                    {post.category}
                  </Badge>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white">
                {post.title}
              </h1>

              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-3xl">
                {post.description}
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 pt-4 sm:pt-6 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                    <User className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      {post.author || 'Guest Author'}
                    </span>
                    <span className="text-xs text-zinc-500">Author</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-400" />
                  <div className="flex flex-col">
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      {format(new Date(post.date), 'MMMM d, yyyy')}
                    </span>
                    <span className="text-xs text-zinc-500">Published</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-400" />
                  <div className="flex flex-col">
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      {readingTime}
                    </span>
                    <span className="text-xs text-zinc-500">Read time</span>
                  </div>
                </div>
              </div>
            </header>

            {post.coverImage && (
              <div className="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 896px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            )}

            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 sm:gap-3 pt-4 border-t border-white/10">
                {post.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="bg-white/5 text-zinc-300 border-white/20 hover:bg-white/10 hover:border-white/30 px-3 py-1.5 text-xs font-medium rounded-lg cursor-pointer transition-all duration-200"
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>
            )}

            <div className="prose dark:prose-invert max-w-none pt-4 sm:pt-8">
              <div className="space-y-6 sm:space-y-8 text-zinc-300">
                <ReactMarkdown
                  components={components}
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                >
                  {post.content}
                </ReactMarkdown>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8 sm:pt-12" />

            <section className="space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold text-white">About the Author</h3>
              <div className="flex gap-4 sm:gap-6 p-4 sm:p-6 rounded-lg sm:rounded-xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-white mb-1">{post.author || 'Guest Author'}</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {post.author || 'An author'} is a passionate researcher and writer in the fields
                    of {post.category?.toLowerCase() || 'science'} and space science. With years of
                    experience and expertise, they bring unique insights to complex topics in
                    aerospace and astrophysics.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4 sm:space-y-6 pt-8 sm:pt-12 border-t border-white/10">
              <h3 className="text-lg sm:text-xl font-semibold text-white">Continue Reading</h3>
              <p className="text-sm sm:text-base text-zinc-400">
                Explore more articles and insights from our collection of space science and
                aerospace topics.
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-white bg-purple-600/80 border border-purple-400/50 rounded-lg hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200 active:scale-95"
              >
                <span>View All Articles</span>
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 rotate-180" />
              </Link>
            </section>
          </article>
        </div>
      </article>
    </>
  );
}
