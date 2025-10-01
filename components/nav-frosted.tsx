'use client';
import Link from 'next/link';
import { Menu, X, Mail, Users, FileText, Info } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const navItems = [
  { key: 'newsletter', label: 'Newsletter', icon: Mail, href: '/' },
  { key: 'team', label: 'Team', icon: Users, href: '/' },
  { key: 'blog', label: 'Blog', icon: FileText, href: '/' },
  { key: 'about', label: 'About', icon: Info, href: '/about' },
];

export default function NavFrosted() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  // Close menu handler
  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle Escape key
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  // Handle focus trap
  useEffect(() => {
    if (!isMobileMenuOpen || !dialogRef.current) return;

    // Store previously focused element
    previousFocusRef.current = document.activeElement as HTMLElement;

    // Get all focusable elements
    const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    // Focus first element (close button)
    closeButtonRef.current?.focus();

    const handleTab = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return;

      if (event.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstFocusable) {
          event.preventDefault();
          lastFocusable?.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastFocusable) {
          event.preventDefault();
          firstFocusable?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleTab);

    return () => {
      document.removeEventListener('keydown', handleTab);
      // Restore focus to previously focused element
      previousFocusRef.current?.focus();
    };
  }, [isMobileMenuOpen]);

  // Handle scroll lock
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Save current scroll position
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
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
              <span className="text-sm font-light tracking-[0.3em] text-white">ANUBRAHMAN</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="group relative rounded-lg px-4 py-2 text-sm font-light text-zinc-300 transition-all duration-300 hover:text-white hover:bg-white/5"
                >
                  <span className="relative z-10 tracking-wide uppercase">{item.label}</span>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </Link>
              ))}
            </div>

            {/* Subscribe Button */}
            <button
              type="button"
              className="hidden sm:inline-flex items-center rounded-lg border border-purple-500/30 bg-gradient-to-r from-purple-600/80 to-purple-500/80 px-4 py-2 text-xs font-medium text-white transition-all duration-300 hover:shadow-md hover:shadow-purple-500/20 hover:scale-105 active:scale-95"
            >
              <span className="tracking-wider uppercase">Subscribe</span>
            </button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-zinc-300 transition-all duration-300 hover:text-white hover:bg-white/10 hover:scale-110 active:scale-95"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          {/* Backdrop with blur */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-xl"
            onClick={closeMenu}
            aria-hidden="true"
          />

          <div
            ref={dialogRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
            className="absolute inset-y-0 right-0 w-full max-w-xs"
          >
            {/* Animated slide-in panel with frosted glass */}
            <div
              className="relative h-full bg-gradient-to-br from-black/95 via-purple-950/30 to-black/95 backdrop-blur-3xl border-l border-white/10 shadow-2xl shadow-purple-500/10"
              style={{
                animation: 'slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {/* Ambient glow effects */}
              <div className="absolute top-20 right-10 w-64 h-64 bg-purple-600/20 rounded-full blur-[100px] animate-ambient-pulse" />
              <div className="absolute bottom-40 left-10 w-48 h-48 bg-purple-500/15 rounded-full blur-[80px] animate-ambient-pulse-delayed" />

              {/* Content Container */}
              <div className="relative h-full flex flex-col">
                <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-white/5">
                  <div className="flex flex-col">
                    <span className="text-base font-light tracking-[0.3em] text-white">
                      ANUBRAHMAN
                    </span>
                    <span className="text-[10px] text-zinc-500 tracking-wider mt-0.5">
                      NAVIGATION
                    </span>
                  </div>
                  <button
                    ref={closeButtonRef}
                    type="button"
                    onClick={closeMenu}
                    aria-label="Close navigation menu"
                    className="inline-flex items-center justify-center rounded-lg p-1.5 text-zinc-400 transition-all duration-300 hover:text-white hover:bg-white/10 hover:rotate-90 active:scale-90"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="flex-1 px-5 py-6 space-y-2 overflow-y-auto">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.key}
                        href={item.href}
                        onClick={closeMenu}
                        className="group relative w-full flex items-center space-x-3 rounded-lg border border-white/5 bg-white/[0.02] backdrop-blur-2xl px-4 py-3 text-left transition-all duration-500 hover:border-purple-500/30 hover:bg-gradient-to-r hover:from-purple-600/15 hover:to-purple-500/5 hover:scale-[1.01] hover:shadow-md hover:shadow-purple-500/5 active:scale-[0.99]"
                        style={{
                          animation: `fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s both`,
                        }}
                      >
                        <div className="relative flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-br from-purple-600/20 to-purple-500/10 border border-purple-500/20 transition-all duration-500 group-hover:scale-105 group-hover:shadow-md group-hover:shadow-purple-500/20">
                          <Icon className="h-4 w-4 text-purple-300 transition-colors duration-500 group-hover:text-white" />
                        </div>

                        <div className="flex-1">
                          <span className="block text-sm font-light text-zinc-300 tracking-wide uppercase transition-colors duration-500 group-hover:text-white">
                            {item.label}
                          </span>
                        </div>

                        {/* Arrow indicator */}
                        <div className="opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0.5">
                          <svg
                            className="w-3.5 h-3.5 text-purple-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                <div className="px-5 pb-6 pt-3 border-t border-white/5 space-y-3">
                  <button
                    type="button"
                    onClick={closeMenu}
                    className="w-full relative overflow-hidden rounded-lg border border-purple-500/30 bg-gradient-to-r from-purple-600/90 to-purple-500/90 px-5 py-3 text-xs font-medium text-white transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <span className="relative z-10 tracking-wider uppercase">Subscribe Now</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-400 opacity-0 transition-opacity duration-500 hover:opacity-100" />
                  </button>

                  {/* Tagline */}
                  <p className="text-center text-[10px] text-zinc-500 tracking-wide">
                    Engineering infinity: Core to Cosmos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

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
    </>
  );
}
