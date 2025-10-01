import NavFrosted from '@/components/nav-frosted';

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden text-white selection:bg-purple-500/30">
      {/* Premium Floating Navbar */}
      <NavFrosted />

      {/* Main Content Container */}
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
            {/* Status Badge */}
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl px-4 py-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse" />
              <span className="text-xs font-medium tracking-wider text-zinc-300 uppercase">
                Our Story
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
              Where Curiosity Takes Flight
            </p>

            {/* Description */}
            <p className="text-base text-zinc-400 max-w-2xl leading-relaxed font-light">
              The first aerospace newsletter at our university, created by students for everyone
              curious about the cosmos
            </p>
          </div>
        </section>

        <section className="relative py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
            {/* Large Story Card - spans 2 columns */}
            <article className="group relative md:col-span-2 min-h-[320px]">
              <div className="relative h-full rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-2xl overflow-hidden transition-all duration-500 hover:border-purple-500/30 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
                <div className="relative h-full flex flex-col justify-between p-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-light tracking-tight text-white transition-colors duration-300 group-hover:text-purple-100">
                      Our Story
                    </h3>
                    <div className="space-y-3 text-sm font-light leading-relaxed text-zinc-400">
                      <p className="transition-colors duration-300 group-hover:text-zinc-300">
                        ANUBRAHMAN took flight in September 2023 with a simple mission—to give voice
                        to the aerospace community at our University. By December 2023, we launched
                        our first edition.
                      </p>
                      <p className="transition-colors duration-300 group-hover:text-zinc-300">
                        What started with just a handful of students has now grown into a passionate
                        team of 20+ individuals. We cover aerospace engineering, space science,
                        mathematics, and industry trends.
                      </p>
                      <p className="text-xs italic text-purple-300/70 transition-colors duration-300 group-hover:text-purple-300">
                        We are a team of college students united by a shared love for aerospace,
                        space, and science communication.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-6">
                    <div className="h-px w-12 bg-gradient-to-r from-white/20 to-transparent transition-all duration-300 group-hover:w-20 group-hover:from-purple-400/50" />
                    <svg
                      className="w-5 h-5 text-white/30 transition-all duration-300 group-hover:text-purple-400 group-hover:translate-x-1"
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
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 -z-10 blur-xl" />
            </article>

            {/* Metrics Stack - 1 column */}
            <div className="space-y-6">
              <article className="group relative">
                <div className="relative h-[150px] rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-2xl transition-all duration-500 hover:border-purple-500/30 hover:scale-105">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative flex h-full flex-col items-center justify-center p-6 text-center space-y-2">
                    <div className="text-4xl font-light text-white tracking-tight transition-colors duration-300 group-hover:text-purple-100">
                      20+
                    </div>
                    <div className="text-xs font-light tracking-widest text-zinc-400 uppercase transition-colors duration-300 group-hover:text-zinc-300">
                      Team Members
                    </div>
                    <div className="h-px w-8 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-500 group-hover:w-12 group-hover:via-purple-400/50" />
                  </div>
                </div>
              </article>

              <article className="group relative">
                <div className="relative h-[150px] rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-2xl transition-all duration-500 hover:border-purple-500/30 hover:scale-105">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative flex h-full flex-col items-center justify-center p-6 text-center space-y-2">
                    <div className="text-4xl font-light text-white tracking-tight transition-colors duration-300 group-hover:text-purple-100">
                      14+
                    </div>
                    <div className="text-xs font-light tracking-widest text-zinc-400 uppercase transition-colors duration-300 group-hover:text-zinc-300">
                      Editions Published
                    </div>
                    <div className="h-px w-8 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-500 group-hover:w-12 group-hover:via-purple-400/50" />
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="relative py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-light tracking-tight text-white mb-4">
              Vision & Mission
            </h2>
            <div className="mx-auto w-16 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Vision Card */}
            <article className="group relative min-h-[280px]">
              <div className="relative h-full rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-2xl overflow-hidden transition-all duration-500 hover:border-purple-500/30 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
                <div className="relative h-full flex flex-col justify-between p-8">
                  <div className="space-y-4">
                    <h3 className="text-lg font-light tracking-widest text-purple-300 uppercase transition-colors duration-300 group-hover:text-purple-200">
                      Our Vision
                    </h3>
                    <p className="text-sm font-light leading-relaxed text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                      To make aerospace knowledge accessible, engaging, and inspiring—especially for
                      students in rural or underserved areas. We aim to support learners at every
                      level with content that&apos;s vivid, insightful, and never dull—where cosmic
                      wonder meets clarity.
                    </p>
                    <blockquote className="border-l-2 border-purple-400/30 pl-4 text-xs font-light italic leading-relaxed text-purple-300/80 transition-all duration-300 group-hover:border-purple-400/60 group-hover:text-purple-300">
                      We aspire to create that sublime sense of wonder, like standing on the edge of
                      infinity with stardust in your eyes.
                    </blockquote>
                  </div>
                  <div className="flex items-center justify-between mt-6">
                    <div className="h-px w-12 bg-gradient-to-r from-white/20 to-transparent transition-all duration-300 group-hover:w-20 group-hover:from-purple-400/50" />
                    <svg
                      className="w-5 h-5 text-white/30 transition-all duration-300 group-hover:text-purple-400 group-hover:translate-x-1"
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
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 -z-10 blur-xl" />
            </article>

            {/* Goal Card */}
            <article className="group relative min-h-[280px]">
              <div className="relative h-full rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 backdrop-blur-2xl overflow-hidden transition-all duration-500 hover:border-purple-500/30 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
                <div className="relative h-full flex flex-col justify-between p-8">
                  <div className="space-y-4">
                    <h3 className="text-lg font-light tracking-widest text-purple-300 uppercase transition-colors duration-300 group-hover:text-purple-200">
                      Our Goal
                    </h3>
                    <p className="text-sm font-light leading-relaxed text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                      Our goals evolve as we grow—but the core remains constant: to expand access to
                      quality knowledge, one step at a time. Currently, our focus is to strengthen
                      our foundation—building structured, reliable, and engaging content that can
                      scale across mediums and reach a wider audience.
                    </p>
                    <p className="text-xs font-light leading-relaxed text-zinc-500 transition-colors duration-300 group-hover:text-zinc-400">
                      We are working towards becoming a comprehensive knowledge platform that
                      supports learning, discovery, and collaboration in aerospace and beyond.
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-6">
                    <div className="h-px w-12 bg-gradient-to-r from-white/20 to-transparent transition-all duration-300 group-hover:w-20 group-hover:from-purple-400/50" />
                    <svg
                      className="w-5 h-5 text-white/30 transition-all duration-300 group-hover:text-purple-400 group-hover:translate-x-1"
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
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 -z-10 blur-xl" />
            </article>
          </div>
        </section>

        <section className="relative py-16">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-light tracking-tight text-white mb-4">
              Our Journey
            </h2>
            <p className="text-base font-light text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              From initial idea to growing student-led aerospace platform
            </p>
            <div className="mx-auto w-16 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent mt-6" />
          </div>

          {/* Mobile: Vertical Timeline */}
          <div className="relative md:hidden max-w-md mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/20 via-purple-400/40 to-purple-500/20" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {[
                { year: '2021', title: 'Newsletter Launch', desc: 'Started as a small newsletter' },
                { year: '2022', title: 'First Edition', desc: 'Published comprehensive magazine' },
                { year: '2023', title: 'Community Growth', desc: 'Expanded with forum & webinars' },
                {
                  year: '2024',
                  title: 'Digital Platform',
                  desc: 'Launched comprehensive platform',
                },
                { year: '2025', title: 'Partnerships', desc: 'Industry collaborations' },
              ].map((item) => (
                <div key={item.year} className="relative flex items-start gap-6 group">
                  {/* Node */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full border border-purple-500/30 bg-gradient-to-br from-purple-500/20 to-black/80 backdrop-blur-2xl flex items-center justify-center transition-all duration-500 group-hover:border-purple-400/60 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/30">
                      <span className="text-xs font-light text-purple-300 transition-colors duration-300 group-hover:text-purple-200">
                        {item.year}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2 space-y-2">
                    <h4 className="text-sm font-light tracking-widest text-white uppercase transition-colors duration-300 group-hover:text-purple-200">
                      {item.title}
                    </h4>
                    <p className="text-xs font-light text-zinc-500 leading-relaxed transition-colors duration-300 group-hover:text-zinc-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Horizontal Timeline */}
          <div className="hidden md:block relative max-w-5xl mx-auto">
            {/* Horizontal Line */}
            <div className="absolute top-20 left-0 right-0 h-px bg-gradient-to-r from-purple-500/20 via-purple-400/40 to-purple-500/20" />

            {/* Timeline Items */}
            <div className="relative grid grid-cols-5 gap-8">
              {[
                { year: '2021', title: 'Newsletter Launch', desc: 'Started as a small newsletter' },
                { year: '2022', title: 'First Edition', desc: 'Published comprehensive magazine' },
                { year: '2023', title: 'Community Growth', desc: 'Expanded with forum & webinars' },
                {
                  year: '2024',
                  title: 'Digital Platform',
                  desc: 'Launched comprehensive platform',
                },
                { year: '2025', title: 'Partnerships', desc: 'Industry collaborations' },
              ].map((item) => (
                <div key={item.year} className="group relative flex flex-col items-center">
                  {/* Content - All positioned above the timeline */}
                  <div className="mb-8 text-center space-y-3 h-24 flex flex-col justify-end">
                    <h4 className="text-xs font-light tracking-widest text-white uppercase transition-colors duration-300 group-hover:text-purple-200">
                      {item.title}
                    </h4>
                    <p className="text-xs font-light text-zinc-500 leading-relaxed transition-colors duration-300 group-hover:text-zinc-400">
                      {item.desc}
                    </p>
                  </div>

                  {/* Connecting Line */}
                  <div className="w-px h-8 bg-gradient-to-b from-purple-400/40 to-transparent transition-all duration-300 group-hover:from-purple-400/80" />

                  {/* Node */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-full border border-purple-500/30 bg-gradient-to-br from-purple-500/20 to-black/80 backdrop-blur-2xl flex items-center justify-center transition-all duration-500 group-hover:border-purple-400/60 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-purple-500/30">
                      <span className="text-sm font-light text-purple-300 transition-colors duration-300 group-hover:text-purple-200">
                        {item.year}
                      </span>
                    </div>
                    {/* Outer glow ring */}
                    <div className="absolute inset-0 rounded-full border border-purple-400/0 transition-all duration-500 group-hover:border-purple-400/20 group-hover:scale-125" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-light tracking-tight text-white mb-4">
              Our Values
            </h2>
            <p className="text-base font-light text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              The core principles guiding our content and community
            </p>
            <div className="mx-auto w-16 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent mt-6" />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Accessibility */}
            <article className="group relative h-48">
              <div className="relative h-full rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-2xl overflow-hidden transition-all duration-500 hover:border-purple-500/30 hover:scale-105">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
                <div className="relative h-full flex flex-col justify-between p-6">
                  <div className="space-y-3">
                    <h3 className="text-sm font-light tracking-widest text-purple-300 uppercase transition-colors duration-300 group-hover:text-purple-200">
                      Accessibility
                    </h3>
                    <p className="text-xs font-light leading-relaxed text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                      Making aerospace knowledge available to everyone, regardless of background
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="h-px w-8 bg-gradient-to-r from-white/20 to-transparent transition-all duration-300 group-hover:w-16 group-hover:from-purple-400/50" />
                    <svg
                      className="w-4 h-4 text-white/30 transition-all duration-300 group-hover:text-purple-400 group-hover:translate-x-1"
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
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 -z-10 blur-xl" />
            </article>

            {/* Authenticity */}
            <article className="group relative h-48">
              <div className="relative h-full rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-2xl overflow-hidden transition-all duration-500 hover:border-purple-500/30 hover:scale-105">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
                <div className="relative h-full flex flex-col justify-between p-6">
                  <div className="space-y-3">
                    <h3 className="text-sm font-light tracking-widest text-purple-300 uppercase transition-colors duration-300 group-hover:text-purple-200">
                      Authenticity
                    </h3>
                    <p className="text-xs font-light leading-relaxed text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                      Providing easily accessible and authentic information students can rely on
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="h-px w-8 bg-gradient-to-r from-white/20 to-transparent transition-all duration-300 group-hover:w-16 group-hover:from-purple-400/50" />
                    <svg
                      className="w-4 h-4 text-white/30 transition-all duration-300 group-hover:text-purple-400 group-hover:translate-x-1"
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
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 -z-10 blur-xl" />
            </article>

            {/* Creativity */}
            <article className="group relative h-48">
              <div className="relative h-full rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 backdrop-blur-2xl overflow-hidden transition-all duration-500 hover:border-purple-500/30 hover:scale-105">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
                <div className="relative h-full flex flex-col justify-between p-6">
                  <div className="space-y-3">
                    <h3 className="text-sm font-light tracking-widest text-purple-300 uppercase transition-colors duration-300 group-hover:text-purple-200">
                      Creativity
                    </h3>
                    <p className="text-xs font-light leading-relaxed text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                      Researching deeply and writing creatively to make aerospace engaging for all
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="h-px w-8 bg-gradient-to-r from-white/20 to-transparent transition-all duration-300 group-hover:w-16 group-hover:from-purple-400/50" />
                    <svg
                      className="w-4 h-4 text-white/30 transition-all duration-300 group-hover:text-purple-400 group-hover:translate-x-1"
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
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 -z-10 blur-xl" />
            </article>

            {/* Community */}
            <article className="group relative h-48">
              <div className="relative h-full rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 backdrop-blur-2xl overflow-hidden transition-all duration-500 hover:border-purple-500/30 hover:scale-105">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
                <div className="relative h-full flex flex-col justify-between p-6">
                  <div className="space-y-3">
                    <h3 className="text-sm font-light tracking-widest text-purple-300 uppercase transition-colors duration-300 group-hover:text-purple-200">
                      Community
                    </h3>
                    <p className="text-xs font-light leading-relaxed text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                      Building connections and creating a supportive learning environment
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="h-px w-8 bg-gradient-to-r from-white/20 to-transparent transition-all duration-300 group-hover:w-16 group-hover:from-purple-400/50" />
                    <svg
                      className="w-4 h-4 text-white/30 transition-all duration-300 group-hover:text-purple-400 group-hover:translate-x-1"
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
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 -z-10 blur-xl" />
            </article>
          </div>
        </section>

        <section className="relative py-16">
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-purple-950/20 via-black/40 to-black/60 backdrop-blur-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
            <div className="relative p-12 md:p-16 text-center space-y-6">
              <svg
                className="w-12 h-12 text-purple-400/30 mx-auto"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-lg md:text-2xl font-light text-zinc-200 leading-relaxed max-w-3xl mx-auto">
                Our aim is simple—spread knowledge, spark curiosity, and bring the aerospace world
                closer to everyone.
              </p>
              <p className="text-sm font-light italic text-purple-300/70">
                We wish to make you feel that sublime sense of wonder, like standing on the edge of
                infinity with stardust in your eyes.
              </p>
            </div>
          </div>
        </section>

        <section className="relative py-16">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            <div className="group relative">
              <div className="relative h-32 rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-2xl transition-all duration-500 hover:border-purple-500/30 hover:from-purple-500/5 hover:scale-105">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex h-full flex-col items-center justify-center p-4 text-center space-y-1">
                  <div className="text-3xl font-light text-white tracking-tight transition-colors duration-300 group-hover:text-purple-100">
                    300+
                  </div>
                  <div className="text-xs font-light tracking-widest text-zinc-400 uppercase transition-colors duration-300 group-hover:text-zinc-300">
                    Topics Covered
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-2 left-1/2 h-px w-8 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-500 group-hover:w-12 group-hover:via-purple-400/50" />
            </div>

            <div className="group relative">
              <div className="relative h-32 rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-2xl transition-all duration-500 hover:border-purple-500/30 hover:from-purple-500/5 hover:scale-105">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex h-full flex-col items-center justify-center p-4 text-center space-y-1">
                  <div className="text-3xl font-light text-white tracking-tight transition-colors duration-300 group-hover:text-purple-100">
                    10k+
                  </div>
                  <div className="text-xs font-light tracking-widest text-zinc-400 uppercase transition-colors duration-300 group-hover:text-zinc-300">
                    Reader Engagement
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-2 left-1/2 h-px w-8 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-500 group-hover:w-12 group-hover:via-purple-400/50" />
            </div>

            <div className="group relative">
              <div className="relative h-32 rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-2xl transition-all duration-500 hover:border-purple-500/30 hover:from-purple-500/5 hover:scale-105">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex h-full flex-col items-center justify-center p-4 text-center space-y-1">
                  <div className="text-3xl font-light text-white tracking-tight transition-colors duration-300 group-hover:text-purple-100">
                    50+
                  </div>
                  <div className="text-xs font-light tracking-widest text-zinc-400 uppercase transition-colors duration-300 group-hover:text-zinc-300">
                    Contributors
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-2 left-1/2 h-px w-8 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-500 group-hover:w-12 group-hover:via-purple-400/50" />
            </div>

            <div className="group relative">
              <div className="relative h-32 rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-2xl transition-all duration-500 hover:border-purple-500/30 hover:from-purple-500/5 hover:scale-105">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex h-full flex-col items-center justify-center p-4 text-center space-y-1">
                  <div className="text-3xl font-light text-white tracking-tight transition-colors duration-300 group-hover:text-purple-100">
                    5+
                  </div>
                  <div className="text-xs font-light tracking-widest text-zinc-400 uppercase transition-colors duration-300 group-hover:text-zinc-300">
                    Universities
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-2 left-1/2 h-px w-8 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-500 group-hover:w-12 group-hover:via-purple-400/50" />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16">
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-purple-950/20 via-black/40 to-black/60 backdrop-blur-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent" />
            <div className="relative p-12 text-center space-y-6">
              <h2 className="text-2xl md:text-3xl font-light tracking-tight text-white">
                Join Us in Exploring the Cosmos
              </h2>
              <p className="text-base text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
                Begin your journey into aerospace education and connect with passionate space
                exploration enthusiasts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <button
                  type="button"
                  className="group relative overflow-hidden rounded-lg border border-purple-500/30 bg-gradient-to-r from-purple-600/90 to-purple-500/90 px-8 py-3.5 text-sm font-medium text-white transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 active:scale-95"
                >
                  <span className="relative z-10 tracking-wider uppercase">Read Our Articles</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-400 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </button>

                <button
                  type="button"
                  className="group relative rounded-lg border border-white/20 bg-white/5 backdrop-blur-2xl px-8 py-3.5 text-sm font-medium text-zinc-200 transition-all duration-500 hover:bg-white/10 hover:border-purple-500/30 hover:text-white hover:scale-105 active:scale-95"
                >
                  <span className="tracking-wider uppercase">Get Involved</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

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
