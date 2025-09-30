const categories = [
  {
    title: 'Student Collaborations',
    desc: 'Explore articles written by and for the next generation of aerospace leaders.',
    gradient: 'from-blue-500/10 to-purple-500/10',
  },
  {
    title: 'Special Series',
    desc: 'Deep dives into pivotal topics, from mission histories to future technologies.',
    gradient: 'from-purple-500/10 to-pink-500/10',
  },
  {
    title: 'Astronomy',
    desc: 'Journey through the cosmos with insights into celestial events and discoveries.',
    gradient: 'from-indigo-500/10 to-blue-500/10',
  },
  {
    title: 'Astrophysics',
    desc: 'Uncover the fundamental laws that govern the universe, from dark matter to black holes.',
    gradient: 'from-purple-500/10 to-indigo-500/10',
  },
];

export default function CategoriesGrid() {
  return (
    <div className="relative">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-light tracking-tight text-white mb-4">
          Explore Our Universe
        </h2>
        <p className="text-base font-light text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Dive into a curated collection of knowledge across multiple domains of space science and
          aerospace technology.
        </p>
        <div className="mx-auto w-16 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent mt-6" />
      </div>

      {/* Categories Grid - Slim Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <article key={category.title} className="group relative h-48 cursor-pointer">
            {/* Card Background */}
            <div
              className={`relative h-full rounded-2xl border border-white/10 bg-gradient-to-br ${category.gradient} backdrop-blur-2xl overflow-hidden transition-all duration-500 hover:border-purple-500/30 hover:scale-105`}
            >
              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-6">
                <div className="space-y-3">
                  <h3 className="text-sm font-light tracking-widest text-purple-300 uppercase transition-colors duration-300 group-hover:text-purple-200">
                    {category.title}
                  </h3>
                  <p className="text-xs font-light leading-relaxed text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                    {category.desc}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="flex items-center justify-between">
                  <div className="h-px w-8 bg-gradient-to-r from-white/20 to-transparent transition-all duration-300 group-hover:w-16 group-hover:from-purple-400/50" />

                  {/* Arrow indicator */}
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

            {/* Hover glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 -z-10 blur-xl" />
          </article>
        ))}
      </div>

      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-64 h-32 bg-purple-500/5 rounded-full blur-3xl -z-10 transform -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-48 h-24 bg-blue-500/5 rounded-full blur-3xl -z-10 transform -translate-y-1/2" />
    </div>
  );
}
