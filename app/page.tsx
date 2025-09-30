import NavFrosted from '@/components/nav-frosted';
import SubscribeForm from '@/components/subscribe-form';
import FeaturedCarousel from '@/components/featured-carousel';
import MetricsStrip from '@/components/metrics-strip';
import CategoriesGrid from '@/components/categories-grid';
import Testimonials from '@/components/testimonials';

export default function HomePage() {
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
              <span className="block bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
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

            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                type="button"
                className="group relative overflow-hidden rounded-lg border border-purple-500/30 bg-gradient-to-r from-purple-600/90 to-purple-500/90 px-8 py-3.5 text-sm font-medium text-white transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 tracking-wider uppercase">Explore Articles</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-400 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </button>

              <button
                type="button"
                className="group relative rounded-lg border border-white/20 bg-white/5 backdrop-blur-2xl px-8 py-3.5 text-sm font-medium text-zinc-200 transition-all duration-500 hover:bg-white/10 hover:border-purple-500/30 hover:text-white hover:scale-105 active:scale-95"
              >
                <span className="tracking-wider uppercase">Join Community</span>
              </button>
            </div>
          </div>
        </section>

        {/* Premium Metrics Section */}
        <section className="relative py-16">
          <MetricsStrip />
        </section>

        {/* Featured Content */}
        <section className="relative py-16">
          <FeaturedCarousel />
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
        <div className="relative border-t border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm">
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
        <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-purple-950/20 via-black/40 to-black/60 backdrop-blur-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent" />
          <div className="relative p-12 text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-light tracking-tight text-white">
              Ready to Explore the Cosmos?
            </h2>
            <p className="text-base text-zinc-400 font-light max-w-xl mx-auto leading-relaxed">
              Begin your journey into aerospace education and connect with passionate space
              exploration enthusiasts.
            </p>
            <button
              type="button"
              className="inline-flex items-center rounded-lg border border-purple-500/40 bg-gradient-to-r from-purple-600/90 to-purple-500/90 px-8 py-3.5 text-sm font-medium text-white transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 active:scale-95"
            >
              <span className="tracking-wider uppercase">Start Your Journey</span>
            </button>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="relative mx-auto max-w-6xl px-6 pb-16 lg:px-8">
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-xs text-zinc-500 font-light tracking-wide">
            © {new Date().getFullYear()} ANUBRAHMAN — All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
