'use client';

export default function Footer() {
  return (
    <footer className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 mt-12 sm:mt-20">
      <div className="border-t border-white/10 pt-6 sm:pt-8 text-center">
        <p className="text-xs text-zinc-500 tracking-wide">
          © {new Date().getFullYear()} ANUBRAHMAN — All rights reserved.
        </p>
      </div>
    </footer>
  );
}
