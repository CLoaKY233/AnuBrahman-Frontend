"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils"; // Make sure you have this utility function

const slides = [
  {
    title: "The PROBA Mission: Small Satellites, Big Impact",
    category: "Indian AeroSpace",
    author: "Editor",
    date: "5/8/2025",
    read: "15 min read",
    img: "/images/proba-mission.jpg",
    alt: "Two small satellites flying in precise formation near the Sun's corona",
    accent: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "The Fermi Paradox: The Silence of the Cosmos",
    category: "Astrophysics",
    author: "Editor",
    read: "25 min",
    img: "/images/fermi-paradox.jpg",
    alt: "Vast silent cosmos with scanning signals across a starfield",
    accent: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Don't Get Left in the Dark, Shed Some Light on Dark Energy",
    category: "Astrophysics",
    author: "Editor",
    read: "15 min",
    img: "/images/dark-energy.jpg",
    alt: "Dark energy visualization with cosmic web filaments",
    accent: "from-indigo-500/20 to-blue-500/20",
  },
  {
    title: "Black Holes: Where Time Stands Still and Space Bends",
    category: "Astrophysics",
    author: "Editor",
    read: "10 min",
    img: "/images/black-holes.jpg",
    alt: "Minimal black hole with accretion disk",
    accent: "from-purple-500/20 to-indigo-500/20",
  },
  {
    title: "Death of a Giant: The Explosive Physics Behind Supernovae",
    category: "Astronomy",
    author: "Editor",
    read: "18 min",
    img: "/images/supernova.jpg",
    alt: "Expanding supernova shockwave in space",
    accent: "from-pink-500/20 to-purple-500/20",
  },
];

export default function FeaturedCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="relative py-12">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-light tracking-tight text-white mb-4">
          Featured Articles
        </h2>
        <p className="text-base font-light text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Discover our most impactful and cutting-edge content in space science
          and technology.
        </p>
        <div className="mx-auto w-16 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent mt-6" />
      </div>

      <Carousel
        setApi={setApi}
        className="relative mx-auto max-w-[90rem] px-4 sm:px-6 md:px-16" // The Carousel now wraps everything
        opts={{
          loop: true,
          align: "center",
        }}
      >
        <div className="relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <CarouselContent className="-ml-8 py-12">
            {slides.map((slide, index) => {
              const isActive = index === current;
              return (
                <CarouselItem
                  key={slide.title}
                  className="pl-8 basis-[90%] md:basis-1/2 lg:basis-1/3"
                >
                  <div
                    className={cn(
                      "h-full w-full transition-all duration-500 ease-in-out",
                      isActive ? "opacity-100" : "opacity-50 scale-90",
                    )}
                  >
                    <article className="group relative h-96 cursor-pointer">
                      <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-950/50">
                        {/* Background Image */}
                        <div className="absolute inset-0">
                          <Image
                            src={slide.img || "/placeholder.svg"}
                            alt={slide.alt}
                            fill
                            priority={index < 3}
                            className="object-cover opacity-60 transition-all duration-700 group-hover:opacity-75 group-hover:scale-110"
                          />
                          <div
                            className={`absolute inset-0 bg-gradient-to-t ${slide.accent} via-black/60 to-black/80`}
                          />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 flex h-full flex-col justify-between p-6">
                          <div className="flex justify-between items-start mb-4">
                            <span className="inline-block rounded-full border border-purple-400/30 bg-purple-500/20 backdrop-blur-sm px-3 py-1 text-xs font-light tracking-wider text-purple-300 uppercase">
                              {slide.category}
                            </span>
                            <span className="text-xs font-light text-zinc-400">
                              {slide.read}
                            </span>
                          </div>
                          <div className="flex-1 flex items-end">
                            <h3 className="text-lg font-light leading-snug text-white transition-colors duration-300 group-hover:text-purple-100 line-clamp-3">
                              {slide.title}
                            </h3>
                          </div>
                          <div className="flex items-center justify-between pt-4 border-t border-white/10">
                            <div className="flex items-center space-x-2 text-xs font-light text-zinc-400">
                              <span>{slide.author}</span>
                              {slide.date && (
                                <>
                                  <span>•</span>
                                  <span>{slide.date}</span>
                                </>
                              )}
                            </div>
                            <svg
                              className="w-4 h-4 text-white/40 transition-all duration-300 group-hover:text-purple-400 group-hover:translate-x-1"
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
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 -z-10 blur-2xl" />
                      </div>
                    </article>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </div>

        {/*
          CORRECTED PLACEMENT:
          The navigation buttons are now direct children of the <Carousel /> component,
          allowing them to correctly access the carousel's context and function as intended.
        */}
        <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-lg transition-all duration-300 hover:border-purple-500/30 hover:bg-purple-900/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-0" />
        <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-lg transition-all duration-300 hover:border-purple-500/30 hover:bg-purple-900/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-0" />
      </Carousel>

      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-purple-500/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
