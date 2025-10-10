'use client';

const values = [
  {
    title: 'Accessibility',
    description:
      'Making aerospace knowledge accessible and engaging, especially for students in rural or underserved areas.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
  {
    title: 'Authenticity',
    description:
      'Providing easily accessible and authentic information that students can rely on for their projects and learning.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: 'Creativity',
    description:
      'Researching deeply and writing creatively to make complex aerospace concepts engaging for all readers.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    title: 'Community',
    description:
      'Building a platform that supports learning, discovery, and collaboration in aerospace and beyond.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
];

export default function ValuesGrid() {
  return (
    <div className="relative">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-light tracking-tight text-white mb-4">
          Our Values
        </h2>
        <p className="text-base text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
          The core principles guiding our content and community
        </p>
        <div className="mx-auto w-16 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent mt-6" />
      </div>

      {/* Values Grid */}
      <div className="grid sm:grid-cols-2 gap-6">
        {values.map((value, index) => (
          <div
            key={value.title}
            className="group relative"
            style={{
              animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
            }}
          >
            {/* Glow effect on hover */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-600/20 via-purple-900/10 to-transparent rounded-2xl opacity-0 blur-xl transition-all duration-700 group-hover:opacity-100" />

            {/* Card */}
            <div className="relative h-full rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] via-black/40 to-black/60 backdrop-blur-2xl p-8 transition-all duration-500 group-hover:border-purple-500/30">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.02] via-transparent to-purple-900/[0.03] rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Content */}
              <div className="relative space-y-4">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600/20 to-purple-500/10 border border-purple-500/20 text-purple-300 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/20">
                  {value.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-light text-white transition-colors duration-300 group-hover:text-purple-100">
                  {value.title}
                </h3>

                {/* Divider */}
                <div className="w-12 h-px bg-gradient-to-r from-purple-400/50 to-transparent transition-all duration-500 group-hover:w-16" />

                {/* Description */}
                <p className="text-sm text-zinc-400 leading-relaxed font-light transition-colors duration-300 group-hover:text-zinc-300">
                  {value.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
