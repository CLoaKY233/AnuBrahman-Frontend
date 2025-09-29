"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  vertical?: boolean;
  children?: ReactNode;
}

export function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  vertical = false,
  children,
  ...props
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden",
        vertical ? "flex-col" : "flex-row",
        className,
      )}
      style={{ "--gap": "1rem" } as React.CSSProperties}
      {...props}
    >
      <div
        className={cn(
          "flex shrink-0 gap-4",
          vertical
            ? "flex-col animate-marquee-vertical"
            : "flex-row animate-marquee",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
          reverse &&
            (vertical
              ? "animate-marquee-vertical-reverse"
              : "animate-marquee-reverse"),
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex shrink-0 gap-4",
          vertical
            ? "flex-col animate-marquee-vertical"
            : "flex-row animate-marquee",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
          reverse &&
            (vertical
              ? "animate-marquee-vertical-reverse"
              : "animate-marquee-reverse"),
        )}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}
