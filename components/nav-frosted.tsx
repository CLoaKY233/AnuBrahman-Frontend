'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Mail, Users, FileText, Info, Home } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import type { Route } from 'next';

interface NavItem {
  key: string;
  label: string;
  icon: any;
  href: Route;
}

const navItems: NavItem[] = [
  { key: 'home', label: 'Home', icon: Home, href: '/' },
  { key: 'blog', label: 'Blog', icon: FileText, href: '/blog' },

  // CASTING: These pages don't exist yet (handled by Proxy), so we force the type
  { key: 'newsletter', label: 'Newsletter', icon: Mail, href: '/newsletter' as unknown as Route },
  { key: 'team', label: 'Team', icon: Users, href: '/team' as unknown as Route },
  { key: 'about', label: 'About', icon: Info, href: '/about' as unknown as Route },
];

export default function NavFrosted() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const textRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const updateUnderline = () => {
      const activeIndex = navItems.findIndex((item) => item.href === pathname);
      const targetIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;

      if (targetIndex !== -1 && textRefs.current[targetIndex] && containerRef.current) {
        const textElement = textRefs.current[targetIndex];
        const container = containerRef.current;

        if (textElement) {
          const containerRect = container.getBoundingClientRect();
          const textRect = textElement.getBoundingClientRect();

          // Calculate position relative to container
          const left = textRect.left - containerRect.left;
          const width = textRect.width;

          setUnderlineStyle({
            left,
            width,
            opacity: 1,
          });
        }
      } else {
        setUnderlineStyle((prev) => ({ ...prev, opacity: 0 }));
      }
    };

    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(() => {
      updateUnderline();
    });

    // Update on window resize
    window.addEventListener('resize', updateUnderline);
    return () => window.removeEventListener('resize', updateUnderline);
  }, [pathname, hoveredIndex]);

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
          <div className="absolute -inset-px rounded-2xl bg-linear-to-r from-purple-500/10 via-transparent to-purple-500/10 opacity-50" />

          <div className="relative flex items-center justify-between px-6 py-3">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-sm font-light tracking-[0.3em] text-white">ANUBRAHMAN</span>
            </div>

            {/* Desktop Navigation */}
            <div ref={containerRef} className="hidden md:flex items-center relative">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`relative px-4 py-2 text-sm font-light transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <span
                      ref={(el) => {
                        textRefs.current[index] = el;
                      }}
                      className="relative z-10 tracking-wide uppercase"
                    >
                      {item.label}
                    </span>
                  </Link>
                );
              })}

              <div
                className="absolute bottom-0 h-px bg-white/60 rounded-full transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                style={{
                  left: `${underlineStyle.left}px`,
                  width: `${underlineStyle.width}px`,
                  opacity: underlineStyle.opacity,
                }}
              />
            </div>

            {/* Subscribe Button */}
            {/*<button
              type="button"
              className="hidden sm:inline-flex items-center rounded-lg border border-purple-500/30 bg-linear-to-r from-purple-600/80 to-purple-500/80 px-4 py-2 text-xs font-medium text-white transition-all duration-300 hover:shadow-md hover:shadow-purple-500/20 hover:scale-105 active:scale-95"
            >
              <span className="tracking-wider uppercase">Subscribe</span>
            </button>*/}
            <button
              type="button"
              className="hidden sm:inline-flex items-center rounded-lg border border-purple-500/30 bg-linear-to-r from-purple-600/80 to-purple-500/80 px-4 py-2 text-xs font-medium text-white transition-all duration-300 hover:shadow-md hover:shadow-purple-500/20 hover:scale-105 active:scale-95 opacity-50 cursor-not-allowed"
              disabled
            >
              <svg
                className="w-3.5 h-3.5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
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
        <div className="fixed inset-0 z-100 md:hidden">
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
              className="relative h-full bg-linear-to-br from-black/95 via-purple-950/30 to-black/95 backdrop-blur-3xl border-l border-white/10 shadow-2xl shadow-purple-500/10"
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
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.key}
                        href={item.href}
                        onClick={closeMenu}
                        className={`group relative w-full flex items-center space-x-3 rounded-lg border backdrop-blur-2xl px-4 py-3 text-left transition-all duration-500 hover:border-purple-500/30 hover:bg-linear-to-r hover:from-purple-600/15 hover:to-purple-500/5 hover:scale-[1.01] hover:shadow-md hover:shadow-purple-500/5 active:scale-[0.99] ${
                          isActive
                            ? 'border-purple-500/30 bg-linear-to-r from-purple-600/20 to-purple-500/10'
                            : 'border-white/5 bg-white/2'
                        }`}
                        style={{
                          animation: `fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s both`,
                        }}
                      >
                        <div
                          className={`relative flex items-center justify-center w-8 h-8 rounded-md bg-linear-to-br border transition-all duration-500 group-hover:scale-105 group-hover:shadow-md group-hover:shadow-purple-500/20 ${
                            isActive
                              ? 'from-purple-600/30 to-purple-500/20 border-purple-500/40'
                              : 'from-purple-600/20 to-purple-500/10 border-purple-500/20'
                          }`}
                        >
                          <Icon
                            className={`h-4 w-4 transition-colors duration-500 group-hover:text-white ${
                              isActive ? 'text-white' : 'text-purple-300'
                            }`}
                          />
                        </div>

                        <div className="flex-1">
                          <span
                            className={`block text-sm font-light tracking-wide uppercase transition-colors duration-500 group-hover:text-white ${
                              isActive ? 'text-white' : 'text-zinc-300'
                            }`}
                          >
                            {item.label}
                          </span>
                        </div>

                        {/* Arrow indicator */}
                        <div
                          className={`transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0.5 ${
                            isActive ? 'opacity-100' : 'opacity-0'
                          }`}
                        >
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
                  {/*<button
                    type="button"
                    onClick={closeMenu}
                    className="w-full relative overflow-hidden rounded-lg border border-purple-500/30 bg-linear-to-r from-purple-600/90 to-purple-500/90 px-5 py-3 text-xs font-medium text-white transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <span className="relative z-10 tracking-wider uppercase">Subscribe Now</span>
                    <div className="absolute inset-0 bg-linear-to-r from-purple-500 to-purple-400 opacity-0 transition-opacity duration-500 hover:opacity-100" />
                  </button>*/}
                  <button
                    type="button"
                    onClick={closeMenu}
                    className="w-full relative overflow-hidden rounded-lg border border-purple-500/30 bg-linear-to-r from-purple-600/90 to-purple-500/90 px-5 py-3 text-xs font-medium text-white transition-all duration-500 opacity-50 cursor-not-allowed"
                    disabled
                  >
                    <div className="relative z-10 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                      <span className="tracking-wider uppercase">Subscribe Now</span>
                    </div>
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
