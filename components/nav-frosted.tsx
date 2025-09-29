"use client";

import { Menu, Mail, Users, FileText, Info } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { key: "newsletter", label: "Newsletter", icon: Mail },
  { key: "team", label: "Team", icon: Users },
  { key: "blog", label: "Blog", icon: FileText },
  { key: "about", label: "About", icon: Info },
];

export default function NavFrosted() {
  return (
    <div className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        aria-label="Primary navigation"
        className="relative mx-auto max-w-6xl rounded-2xl border border-white/10 bg-black/40 backdrop-blur-3xl transition-all duration-500 hover:bg-black/50"
      >
        {/* Subtle glow effect */}
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-purple-500/10 via-transparent to-purple-500/10 opacity-50" />

        <div className="relative flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-sm font-light tracking-[0.3em] text-white">
              ANUBRAHMAN
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.key}
                type="button"
                className="group relative rounded-lg px-4 py-2 text-sm font-light text-zinc-300 transition-all duration-300 hover:text-white hover:bg-white/5"
              >
                <span className="relative z-10 tracking-wide uppercase">
                  {item.label}
                </span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </button>
            ))}
          </div>

          {/* Subscribe Button */}
          <button
            type="button"
            className="hidden sm:inline-flex items-center rounded-lg border border-purple-500/30 bg-gradient-to-r from-purple-600/80 to-purple-500/80 px-4 py-2 text-xs font-medium text-white transition-all duration-300 hover:shadow-md hover:shadow-purple-500/20 hover:scale-105 active:scale-95"
          >
            <span className="tracking-wider uppercase">Subscribe</span>
          </button>

          {/* Mobile Menu */}
          <div className="flex md:hidden">
            <Sheet>
              <SheetTrigger
                aria-label="Open navigation menu"
                className="inline-flex items-center justify-center rounded-lg p-2 text-zinc-300 transition-colors duration-300 hover:text-white hover:bg-white/10"
              >
                <Menu className="h-5 w-5" />
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-black/95 border-white/10 backdrop-blur-3xl text-white"
              >
                <SheetHeader>
                  <SheetTitle className="text-left font-light tracking-[0.25em] text-white">
                    ANUBRAHMAN
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-8 flex flex-col space-y-2">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.key}
                        type="button"
                        className="flex items-center space-x-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm font-light text-zinc-200 transition-all duration-300 hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-white"
                      >
                        <Icon className="h-4 w-4" />
                        <span className="tracking-wide uppercase">
                          {item.label}
                        </span>
                      </button>
                    );
                  })}
                  <button
                    type="button"
                    className="mt-4 rounded-lg border border-purple-500/40 bg-gradient-to-r from-purple-600/90 to-purple-500/90 px-4 py-3 text-sm font-medium text-white transition-all duration-300 hover:shadow-md hover:shadow-purple-500/20"
                  >
                    <span className="tracking-wider uppercase">Subscribe</span>
                  </button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </div>
  );
}
