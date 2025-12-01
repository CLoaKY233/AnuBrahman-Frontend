/** @type {import('next').NextConfig} */
const nextConfig = {
  // MODERN FEATURES (Top-level in Next.js 16)
  reactCompiler: true, // Enable React 19 Compiler
  cacheComponents: true, // Enable Partial Prerendering caching
  typedRoutes: true, // Enable experimental typed routes

  // EXISTING CONFIG
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
