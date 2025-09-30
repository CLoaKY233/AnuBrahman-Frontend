const metrics = [
  { value: '20+', label: 'Team Members' },
  { value: '14+', label: 'Published Editions' },
  { value: '300+', label: 'Topics Covered' },
  { value: '10k+', label: 'Reader Engagement' },
];

export default function MetricsStrip() {
  return (
    <div className="relative">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-light tracking-tight text-white mb-4">
          By the Numbers
        </h2>
        <div className="mx-auto w-16 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />
      </div>

      {/* Metrics Grid - Slimmer Design */}
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8">
        {metrics.map((metric) => (
          <div key={metric.label} className="group relative">
            {/* Card Background */}
            <div className="relative h-24 rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-2xl transition-all duration-500 hover:border-purple-500/30 hover:from-purple-500/5 hover:to-transparent hover:scale-105">
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Content */}
              <div className="relative flex h-full flex-col items-center justify-center p-4 text-center">
                <div className="text-2xl md:text-3xl font-light text-white tracking-tight transition-colors duration-300 group-hover:text-purple-100">
                  {metric.value}
                </div>
                <div className="mt-1 text-xs font-light tracking-widest text-zinc-400 uppercase transition-colors duration-300 group-hover:text-zinc-300">
                  {metric.label}
                </div>
              </div>
            </div>

            {/* Accent line */}
            <div className="absolute -bottom-2 left-1/2 h-px w-8 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-500 group-hover:w-12 group-hover:via-purple-400/50" />
          </div>
        ))}
      </div>

      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-24 bg-purple-500/5 rounded-full blur-3xl -z-10" />
    </div>
  );
}
