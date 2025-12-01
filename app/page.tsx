import NavFrosted from '@/components/nav-frosted';
import SubscribeForm from '@/components/home/disabled-sub';
import FeaturedCarousel from '@/components/home/featured-carousel';
import MetricsStrip from '@/components/home/metrics-strip';
import CategoriesGrid from '@/components/home/categories-grid';
import Testimonials from '@/components/home/testimonials';
import { getFeaturedPostsFromCache } from '@/lib/notion';
import Footer from '@/components/footer';
import Link from 'next/link';

export default function HomePage() {
  // Fetch featured posts at build time
  const featuredPosts = getFeaturedPostsFromCache(5);

  return (
    <main className="relative min-h-screen overflow-x-hidden text-white selection:bg-purple-500/30">
      {/* Premium Floating Navbar */}
      <NavFrosted />

      {/* Main Content Container */}
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* Premium Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
            {/* Status Badge */}
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl px-4 py-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse" />
              <span className="text-xs font-medium tracking-wider text-zinc-300 uppercase">
                Aerospace • Astrophysics • Innovation
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-none">
              <span className="block bg-linear-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
                ANUBRAHMAN
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl lg:text-2xl font-light text-zinc-300 max-w-2xl leading-relaxed">
              Engineering infinity: from Core to Cosmos
            </p>

            {/* Description */}
            <p className="text-base text-zinc-400 max-w-2xl leading-relaxed font-light">
              A comprehensive platform for space science enthusiasts and professionals, providing
              cutting-edge insights into aerospace innovation and cosmic discovery.
            </p>

            <div className="pt-6">
              <Link href="/blog">
                <button
                  type="button"
                  className="group relative overflow-hidden rounded-full border border-purple-500/20 bg-linear-to-r from-purple-600/10 via-purple-500/10 to-purple-600/10 backdrop-blur-xl px-10 py-4 text-sm font-medium text-white transition-all duration-700 hover:border-purple-400/40 hover:shadow-2xl hover:shadow-purple-500/20 active:scale-95"
                >
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-linear-to-r from-purple-600 via-purple-500 to-purple-600 opacity-0 transition-opacity duration-700 group-hover:opacity-90" />

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

                  {/* Button content */}
                  <span className="relative z-10 flex items-center gap-3 tracking-wider uppercase">
                    Explore Articles
                    <svg
                      className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Premium Metrics Section */}
        <section className="relative py-16">
          <MetricsStrip />
        </section>

        {/* Featured Content - Now powered by Notion */}
        <section className="relative py-16">
          <FeaturedCarousel featuredPosts={featuredPosts} />
        </section>

        {/* Categories Grid */}
        <section className="relative py-16">
          <CategoriesGrid />
        </section>

        {/* Community Testimonials */}
        <section className="relative py-16">
          <Testimonials />
        </section>
      </div>

      {/* Premium Newsletter Section */}
      <section className="relative mt-20">
        <div className="relative border-t border-white/10 bg-linear-to-b from-white/5 to-transparent backdrop-blur-sm">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
            <div className="mx-auto max-w-2xl text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">
                Stay Ahead of the Cosmos
              </h2>
              <p className="text-base text-zinc-400 font-light leading-relaxed">
                Subscribe for cutting-edge articles, cosmic discoveries, and exclusive insights
                delivered to your inbox.
              </p>
              <div className="pt-4">
                <SubscribeForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="relative rounded-2xl border border-white/10 bg-linear-to-br from-purple-950/20 via-black/40 to-black/60 backdrop-blur-2xl overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-purple-500/5 to-transparent" />
          <div className="relative p-12 text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-light tracking-tight text-white">
              Ready to Explore the Cosmos?
            </h2>
            <p className="text-base text-zinc-400 font-light max-w-xl mx-auto leading-relaxed">
              Begin your journey into aerospace education and connect with passionate space
              exploration enthusiasts.
            </p>
            {/*<button
              type="button"
              className="inline-flex items-center rounded-lg border border-purple-500/40 bg-linear-to-r from-purple-600/90 to-purple-500/90 px-8 py-3.5 text-sm font-medium text-white transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 active:scale-95"
            >
              <span className="tracking-wider uppercase">Start Your Journey</span>
            </button>*/}
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <Footer />
    </main>
  );
}
