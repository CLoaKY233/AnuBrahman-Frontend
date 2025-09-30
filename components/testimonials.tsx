'use client';

import { Marquee } from '@/components/ui/marquee';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Dr. Keerti Raju Kanada',
    username: '@keerti_aerospace',
    body: 'Anubrahman has transformed how I approach aerospace engineering. The depth of technical content combined with cutting-edge research insights makes it essential reading for any serious professional in our field.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    role: 'Aerospace Engineer',
  },
  {
    name: 'Vaishnavi Nair',
    username: '@vaishnavcosmos',
    body: 'As a graduate student, Anubrahman bridges the gap between academic theory and real-world applications. Every edition fuels my curiosity about space exploration and astrophysics breakthroughs.',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face',
    role: 'Graduate Student',
  },
  {
    name: 'Aaron Alva',
    username: '@aaron_stellar',
    body: 'The way complex space missions are broken down into digestible, fascinating stories is incredible. Anubrahman makes astrophysics accessible without losing the scientific rigor.',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    role: 'Research Scientist',
  },
  {
    name: 'Jimit Ritesh Pathak',
    username: '@jimit_aero',
    body: "From propulsion systems to orbital mechanics, Anubrahman covers it all with remarkable clarity. It's become my go-to resource for staying updated with aerospace innovations.",
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    role: 'Propulsion Specialist',
  },
  {
    name: 'Dr. Priya Sharma',
    username: '@priya_astro',
    body: 'The interdisciplinary approach connecting aerospace engineering with pure astrophysics research is what sets Anubrahman apart. Brilliant technical journalism.',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    role: 'Astrophysicist',
  },
  {
    name: 'Arjun Spacetech',
    username: '@arjun_cosmos',
    body: 'Working in the space industry, I need reliable sources for technical updates. Anubrahman delivers cutting-edge content that directly impacts my professional development.',
    img: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face',
    role: 'Space Industry',
  },
];

// Split testimonials into columns for better visual flow
const firstColumn = testimonials.slice(0, 2);
const secondColumn = testimonials.slice(2, 4);
const thirdColumn = testimonials.slice(4, 6);

const TestimonialCard = ({
  img,
  name,
  username,
  body,
  role,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
  role: string;
}) => {
  return (
    <div className="group relative w-full max-w-sm mx-auto mb-4 sm:mb-6">
      <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-600/20 via-purple-900/10 to-transparent rounded-3xl opacity-0 blur-xl transition-all duration-700 group-hover:opacity-100 group-hover:-inset-1" />

      <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.03] via-black/40 to-black/60 backdrop-blur-2xl transition-all duration-700 group-hover:border-purple-500/30 group-hover:bg-gradient-to-br group-hover:from-white/[0.06] group-hover:via-purple-950/20 group-hover:to-black/70">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.02] via-transparent to-purple-900/[0.03] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/[0.03] to-transparent translate-x-[-100%] transition-transform duration-1000 group-hover:translate-x-[100%]" />

        <div className="relative p-6 sm:p-8 space-y-5">
          <div className="flex items-start justify-between">
            <svg
              className="w-8 h-8 text-purple-500/30 transition-all duration-500 group-hover:text-purple-400/50 group-hover:scale-110"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          <p className="text-sm sm:text-base font-light leading-relaxed text-zinc-200/90 transition-colors duration-500 group-hover:text-white">
            {body}
          </p>

          <div className="w-12 h-px bg-gradient-to-r from-purple-500/50 via-purple-400/30 to-transparent" />

          <div className="flex items-center gap-4">
            <div className="relative flex-shrink-0">
              <div className="absolute -inset-1 bg-gradient-to-br from-purple-500/40 via-purple-600/20 to-transparent rounded-full opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <Image
                  src={img || '/placeholder.svg'}
                  alt={name}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full border-2 border-white/10 object-cover transition-all duration-500 group-hover:border-purple-400/40"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="text-sm sm:text-base font-medium text-white transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-purple-100 group-hover:to-white group-hover:bg-clip-text group-hover:text-transparent truncate">
                {name}
              </h4>

              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs font-light text-purple-400/80 uppercase tracking-wider transition-colors duration-500 group-hover:text-purple-300 truncate">
                  {role}
                </span>
                <span className="text-xs text-zinc-600">•</span>
                <p className="text-xs font-light text-zinc-500 transition-colors duration-500 group-hover:text-zinc-400 truncate">
                  {username}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      </div>
    </div>
  );
};

export default function Testimonials() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-ambient-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl animate-ambient-pulse-delayed" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center rounded-full border border-purple-500/20 bg-gradient-to-r from-purple-600/10 via-purple-500/5 to-purple-600/10 backdrop-blur-xl px-5 py-2.5 mb-6 sm:mb-8 shadow-lg shadow-purple-500/5">
            <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse shadow-lg shadow-purple-400/50" />
            <span className="text-xs sm:text-sm font-light tracking-widest text-purple-300 uppercase">
              Community Voices
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
              What Our Cosmic Community Says
            </span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg font-light text-zinc-400 max-w-2xl mx-auto leading-relaxed px-4">
            From aerospace students to industry professionals, discover how ANUBRAHMAN is shaping
            the future of space science education.
          </p>

          <div className="mx-auto w-24 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent mt-6 sm:mt-8" />
        </div>

        <div className="relative">
          <div
            className="flex h-[500px] sm:h-[600px] lg:h-[700px] w-full flex-row gap-4 sm:gap-6 overflow-hidden"
            style={{
              maskImage:
                'linear-gradient(180deg, transparent 0%, black 10%, black 90%, transparent 100%)',
              WebkitMaskImage:
                'linear-gradient(180deg, transparent 0%, black 10%, black 90%, transparent 100%)',
            }}
          >
            <Marquee pauseOnHover vertical className="[--duration:25s] flex-1">
              {[...firstColumn, ...firstColumn].map((testimonial, index) => (
                <TestimonialCard key={`col1-${index}`} {...testimonial} />
              ))}
            </Marquee>

            <Marquee pauseOnHover vertical className="[--duration:30s] hidden sm:flex flex-1">
              {[...secondColumn, ...secondColumn].map((testimonial, index) => (
                <TestimonialCard key={`col2-${index}`} {...testimonial} />
              ))}
            </Marquee>

            <Marquee pauseOnHover vertical className="[--duration:28s] hidden lg:flex flex-1">
              {[...thirdColumn, ...thirdColumn].map((testimonial, index) => (
                <TestimonialCard key={`col3-${index}`} {...testimonial} />
              ))}
            </Marquee>
          </div>
        </div>

        <div className="flex justify-center mt-12 sm:mt-16 lg:mt-20">
          <button className="group relative overflow-hidden rounded-2xl border border-purple-500/30 bg-gradient-to-r from-purple-600/20 via-purple-500/10 to-purple-600/20 backdrop-blur-xl px-8 sm:px-10 py-4 sm:py-5 text-sm sm:text-base font-light text-white transition-all duration-700 hover:border-purple-500/50 hover:bg-gradient-to-r hover:from-purple-600/30 hover:via-purple-500/20 hover:to-purple-600/30 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 active:scale-95">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-400/10 to-purple-500/0 translate-x-[-100%] transition-transform duration-1000 group-hover:translate-x-[100%]" />

            <span className="relative z-10 flex items-center gap-3">
              <svg
                className="w-5 h-5 text-purple-400 transition-all duration-500 group-hover:text-purple-300 group-hover:rotate-12 group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
              <span className="tracking-widest uppercase">Share Your Experience</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
