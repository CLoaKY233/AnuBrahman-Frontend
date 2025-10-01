'use client';

const journeySteps = [
  {
    year: '2021',
    title: 'Newsletter Launch',
    description:
      'Started as a small newsletter focusing on space technology articles for a niche audience of aerospace enthusiasts.',
  },
  {
    year: '2022',
    title: 'First Edition Release',
    description:
      'Published our first comprehensive magazine edition, featuring articles from industry experts and academics.',
  },
  {
    year: '2023',
    title: 'Community Growth',
    description:
      'Expanded to include a community forum and regular webinars connecting readers with aerospace professionals.',
  },
  {
    year: '2024',
    title: 'Digital Platform',
    description:
      'Launched our comprehensive digital platform with expanded resources, references, and interactive content.',
  },
  {
    year: '2025',
    title: 'Industry Partnerships',
    description:
      'Established formal partnerships with key aerospace organizations to provide exclusive insights to our readers.',
  },
];

export default function JourneyTimeline() {
  return (
    <div className="relative">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-light tracking-tight text-white mb-4">
          Our Journey
        </h2>
        <p className="text-base text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
          From initial idea to growing student-led aerospace platform
        </p>
        <div className="mx-auto w-16 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent mt-6" />
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Line - Desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/20 via-purple-400/40 to-purple-500/20 -translate-x-1/2" />

        {/* Timeline Items */}
        <div className="space-y-12 md:space-y-16">
          {journeySteps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={step.year}
                className="relative grid md:grid-cols-2 gap-8 md:gap-12 items-center"
              >
                {/* Left Side - Desktop */}
                <div
                  className={`${isEven ? 'md:text-right' : 'md:order-2 md:text-left'} space-y-3`}
                >
                  <div
                    className={`inline-block rounded-full border border-purple-500/30 bg-gradient-to-r from-purple-600/20 to-purple-500/10 backdrop-blur-xl px-4 py-1.5 ${
                      isEven ? 'md:float-right' : 'md:float-left'
                    }`}
                  >
                    <span className="text-sm font-light tracking-widest text-purple-300 uppercase">
                      {step.year}
                    </span>
                  </div>
                  <div className="clear-both" />
                  <h3 className="text-xl md:text-2xl font-light text-white">{step.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>

                {/* Center Node */}
                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    {/* Outer glow ring */}
                    <div className="absolute inset-0 w-6 h-6 rounded-full bg-purple-500/20 blur-md animate-pulse" />
                    {/* Middle ring */}
                    <div className="relative w-6 h-6 rounded-full border-2 border-purple-500/50 bg-black flex items-center justify-center">
                      {/* Inner dot */}
                      <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-purple-400 to-purple-600" />
                    </div>
                  </div>
                </div>

                {/* Right Side - Desktop (Empty for layout) */}
                <div className={`hidden md:block ${isEven ? 'md:order-2' : ''}`} />

                {/* Mobile Timeline Indicator */}
                <div className="md:hidden absolute -left-4 top-0">
                  <div className="relative">
                    <div className="absolute inset-0 w-4 h-4 rounded-full bg-purple-500/20 blur-sm animate-pulse" />
                    <div className="relative w-4 h-4 rounded-full border-2 border-purple-500/50 bg-black flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-purple-400 to-purple-600" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Vertical Line */}
        <div className="md:hidden absolute -left-4 top-2 bottom-2 w-px bg-gradient-to-b from-purple-500/20 via-purple-400/40 to-purple-500/20 translate-x-[7px]" />
      </div>

      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />
    </div>
  );
}
