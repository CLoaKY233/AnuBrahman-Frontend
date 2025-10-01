'use client';

const journeySteps = [
  {
    year: '2021',
    title: 'Newsletter Launch',
    description:
      'Started as a small newsletter focusing on space technology and aerospace passion.',
  },
  {
    year: '2022',
    title: 'First Edition',
    description: 'Published comprehensive magazine featuring expert insights and research.',
  },
  {
    year: '2023',
    title: 'Community Growth',
    description: 'Expanded reach with forums and webinars connecting aerospace enthusiasts.',
  },
  {
    year: '2024',
    title: 'Digital Platform',
    description: 'Launched interactive platform with expanded resources and engagement.',
  },
  {
    year: '2025',
    title: 'Partnerships',
    description: 'Established collaborations with aerospace organizations for exclusive content.',
  },
];

export default function JourneyTimeline() {
  return (
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
          {journeySteps.map((item) => (
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
                  {item.description}
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
          {journeySteps.map((item) => (
            <div key={item.year} className="group relative flex flex-col items-center">
              {/* Content - All positioned above the timeline */}
              <div className="mb-8 text-center space-y-3 h-24 flex flex-col justify-end">
                <h4 className="text-xs font-light tracking-widest text-white uppercase transition-colors duration-300 group-hover:text-purple-200">
                  {item.title}
                </h4>
                <p className="text-xs font-light text-zinc-500 leading-relaxed transition-colors duration-300 group-hover:text-zinc-400">
                  {item.description}
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
  );
}
