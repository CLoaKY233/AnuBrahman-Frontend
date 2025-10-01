'use client';

const metrics = [
  { value: '20+', label: 'Team Members' },
  { value: '14+', label: 'Published Editions' },
  { value: '300+', label: 'Topics Covered' },
  { value: '10k+', label: 'Reader Engagement' },
];

export default function AboutMetrics() {
  return (
    <div className="relative">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-light tracking-tight text-white mb-4">
          <span className="bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
            ANUBRAHMAN at a Glance
          </span>
        </h2>
        <p className="text-base text-zinc-400 font-light leading-relaxed">
          Our growth since launching in September 2023
        </p>
        <div className="mx-auto w-16 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent mt-6" />
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8">
        {metrics.map((metric, index) => (
          <div
            key={metric.label}
            className="group relative"
            style={{
              animation: `scaleIn 0.6s ease-out ${index * 0.1}s both`,
            }}
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-br from-purple-600/30 via-purple-500/20 to-transparent rounded-xl opacity-0 blur-lg transition-all duration-700 group-hover:opacity-100" />

            {/* Card Background */}
            <div className="relative h-32 rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-2xl transition-all duration-500 group-hover:border-purple-500/40 group-hover:from-purple-500/10 group-hover:to-transparent group-hover:scale-105">
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Content */}
              <div className="relative flex h-full flex-col items-center justify-center p-4 text-center">
                <div className="text-3xl md:text-4xl font-light text-white tracking-tight transition-all duration-300 group-hover:text-purple-100 group-hover:scale-110">
                  {metric.value}
                </div>
                <div className="mt-2 text-xs font-light tracking-widest text-zinc-400 uppercase transition-colors duration-300 group-hover:text-purple-300">
                  {metric.label}
                </div>
              </div>
            </div>

            {/* Accent line */}
            <div className="absolute -bottom-2 left-1/2 h-px w-8 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-500 group-hover:w-12 group-hover:via-purple-400/60" />
          </div>
        ))}
      </div>

      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-24 bg-purple-500/5 rounded-full blur-3xl -z-10" />

      <style jsx>{`
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
