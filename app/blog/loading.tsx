export default function Loading() {
  return (
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      {/* Blog header skeleton */}
      <div className="space-y-4 mb-12">
        <div className="h-8 w-48 bg-white/10 rounded animate-pulse" />
        <div className="h-12 w-full bg-white/10 rounded animate-pulse" />
        <div className="h-6 w-3/4 bg-white/10 rounded animate-pulse" />
      </div>

      {/* Search and filter skeleton */}
      <div className="mb-8 space-y-4">
        <div className="h-10 w-full bg-white/10 rounded-lg animate-pulse" />
        <div className="flex gap-2 flex-wrap">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-8 w-24 bg-white/10 rounded-full animate-pulse" />
          ))}
        </div>
      </div>

      {/* Post grid skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="space-y-4">
            {/* Image skeleton */}
            <div className="h-48 bg-white/10 rounded-lg animate-pulse" />

            {/* Category badge skeleton */}
            <div className="h-6 w-20 bg-white/10 rounded animate-pulse" />

            {/* Title skeleton */}
            <div className="h-6 w-3/4 bg-white/10 rounded animate-pulse" />

            {/* Description skeleton */}
            <div className="space-y-2">
              <div className="h-4 w-full bg-white/10 rounded animate-pulse" />
              <div className="h-4 w-5/6 bg-white/10 rounded animate-pulse" />
            </div>

            {/* Metadata skeleton */}
            <div className="flex gap-2 pt-2">
              <div className="h-4 w-16 bg-white/10 rounded animate-pulse" />
              <div className="h-4 w-16 bg-white/10 rounded animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
