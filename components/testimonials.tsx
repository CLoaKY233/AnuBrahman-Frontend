"use client";

import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";

const testimonials = [
  {
    name: "Dr. Keerti Raju Kanada",
    username: "@keerti_aerospace",
    body: "Anubrahman has transformed how I approach aerospace engineering. The depth of technical content combined with cutting-edge research insights makes it essential reading for any serious professional in our field.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    role: "Aerospace Engineer",
  },
  {
    name: "Vaishnavi Nair",
    username: "@vaishnavi_cosmos",
    body: "As a graduate student, Anubrahman bridges the gap between academic theory and real-world applications. Every edition fuels my curiosity about space exploration and astrophysics breakthroughs.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
    role: "Graduate Student",
  },
  {
    name: "Aaron Alva",
    username: "@aaron_stellar",
    body: "The way complex space missions are broken down into digestible, fascinating stories is incredible. Anubrahman makes astrophysics accessible without losing the scientific rigor.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    role: "Research Scientist",
  },
  {
    name: "Jimit Ritesh Pathak",
    username: "@jimit_aero",
    body: "From propulsion systems to orbital mechanics, Anubrahman covers it all with remarkable clarity. It's become my go-to resource for staying updated with aerospace innovations.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    role: "Propulsion Specialist",
  },
  {
    name: "Dr. Priya Sharma",
    username: "@priya_astro",
    body: "The interdisciplinary approach connecting aerospace engineering with pure astrophysics research is what sets Anubrahman apart. Brilliant technical journalism.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    role: "Astrophysicist",
  },
  {
    name: "Arjun Spacetech",
    username: "@arjun_cosmos",
    body: "Working in the space industry, I need reliable sources for technical updates. Anubrahman delivers cutting-edge content that directly impacts my professional development.",
    img: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face",
    role: "Space Industry",
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
    <div className="group relative w-80 mb-6">
      {/* Card */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-2xl p-6 transition-all duration-500 hover:border-purple-500/30 hover:from-purple-500/5">
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Quote content */}
        <div className="relative space-y-4">
          <p className="text-sm font-light leading-relaxed text-zinc-300 transition-colors duration-300 group-hover:text-zinc-200">
            &ldquo;{body}&rdquo;
          </p>

          {/* User info */}
          <div className="flex items-center space-x-3 pt-2 border-t border-white/10">
            <div className="relative">
              <Image
                src={img}
                alt={name}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full border border-white/20 object-cover"
              />
              {/* Avatar glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <h4 className="text-sm font-light text-white transition-colors duration-300 group-hover:text-purple-100">
                  {name}
                </h4>
                <span className="text-xs font-light text-zinc-500">•</span>
                <span className="text-xs font-light text-zinc-400 uppercase tracking-wide">
                  {role}
                </span>
              </div>
              <p className="text-xs font-light text-purple-400 transition-colors duration-300 group-hover:text-purple-300">
                {username}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 -z-10 blur-xl" />
    </div>
  );
};

export default function Testimonials() {
  return (
    <section className="relative py-20">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10 opacity-60">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-purple-500/5" />
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 backdrop-blur-xl px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse" />
            <span className="text-xs font-light tracking-wider text-purple-300 uppercase">
              Community Voices
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-light tracking-tight text-white mb-4">
            What Our Cosmic Community Says
          </h2>
          <p className="text-base font-light text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            From aerospace students to industry professionals, discover how
            ANUBRAHMAN is shaping the future of space science education.
          </p>
          <div className="mx-auto w-16 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent mt-6" />
        </div>

        {/* Testimonials Marquee */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

          {/* Testimonials Grid */}
          <div className="flex h-[600px] w-full flex-row gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
            {/* First column */}
            <Marquee pauseOnHover vertical className="[--duration:20s]">
              {[...firstColumn, ...firstColumn].map((testimonial, index) => (
                <TestimonialCard key={`col1-${index}`} {...testimonial} />
              ))}
            </Marquee>

            {/* Second column - hidden on mobile */}
            <Marquee
              reverse
              pauseOnHover
              vertical
              className="[--duration:25s] hidden md:flex"
            >
              {[...secondColumn, ...secondColumn].map((testimonial, index) => (
                <TestimonialCard key={`col2-${index}`} {...testimonial} />
              ))}
            </Marquee>

            {/* Third column - hidden on mobile and tablet */}
            <Marquee
              pauseOnHover
              vertical
              className="[--duration:30s] hidden lg:flex"
            >
              {[...thirdColumn, ...thirdColumn].map((testimonial, index) => (
                <TestimonialCard key={`col3-${index}`} {...testimonial} />
              ))}
            </Marquee>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-16">
          <button className="group relative overflow-hidden rounded-2xl border border-purple-500/30 bg-gradient-to-r from-purple-600/20 to-purple-500/20 backdrop-blur-xl px-8 py-4 text-sm font-light text-white transition-all duration-500 hover:border-purple-500/50 hover:from-purple-600/30 hover:to-purple-500/30 hover:scale-105 active:scale-95">
            {/* Button background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-purple-400/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <span className="relative z-10 flex items-center space-x-3">
              {/* Icon */}
              <svg
                className="w-4 h-4 text-purple-400 transition-colors duration-300 group-hover:text-purple-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>

              <span className="tracking-wider uppercase">
                Share Your Experience
              </span>
            </span>
          </button>
        </div>
      </div>

      {/* Background accents */}
      <div className="absolute top-20 left-0 w-64 h-32 bg-purple-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-0 w-48 h-24 bg-blue-500/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
