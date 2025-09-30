"use client";

import type React from "react";
import { useState } from "react";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitted(true);
    setIsLoading(false);
  }

  if (submitted) {
    return (
      <div className="relative max-w-md mx-auto px-4">
        <div className="rounded-xl border border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-purple-400/10 backdrop-blur-xl p-5 text-center">
          {/* Success icon */}
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-500/20 mb-3">
            <svg
              className="w-5 h-5 text-purple-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h3 className="text-sm font-light text-white mb-1.5">
            Welcome aboard!
          </h3>
          <p className="text-xs font-light text-zinc-300 leading-relaxed">
            Check your inbox for cosmic updates and exclusive insights.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative max-w-md mx-auto px-4">
      <form onSubmit={onSubmit} className="relative group">
        {/* Background glow */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 via-purple-400/10 to-purple-500/20 rounded-xl blur-sm opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />

        {/* Form container */}
        <div className="relative flex flex-col sm:flex-row rounded-xl border border-white/20 bg-black/40 backdrop-blur-xl overflow-hidden transition-all duration-300 focus-within:border-purple-500/40 focus-within:bg-black/60">
          {/* Email input */}
          <div className="flex-1">
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              disabled={isLoading}
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent px-4 py-3 text-xs sm:text-sm font-light text-white placeholder:text-zinc-500 outline-none disabled:opacity-50 transition-colors duration-300 focus:placeholder:text-zinc-600"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={isLoading || !email}
            className="group/btn relative w-full sm:w-auto flex-shrink-0 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-xs sm:text-sm font-light text-white transition-all duration-300 hover:from-purple-500 hover:to-purple-400 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
          >
            {/* Button content */}
            <span className="relative z-10 flex items-center justify-center space-x-1.5 tracking-wide uppercase">
              {isLoading ? (
                <>
                  <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Subscribing</span>
                </>
              ) : (
                <>
                  <span>Subscribe</span>
                  <svg
                    className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </>
              )}
            </span>

            {/* Hover effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-300 opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100" />
          </button>
        </div>

        {/* Bottom accent line */}
        <div className="absolute -bottom-1.5 left-1/2 h-px w-12 -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-400/30 to-transparent transition-all duration-500 group-focus-within:w-24 group-focus-within:via-purple-400/50" />
      </form>
    </div>
  );
}
