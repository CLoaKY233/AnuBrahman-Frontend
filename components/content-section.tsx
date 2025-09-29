async function getPasted(): Promise<string> {
  try {
    const res = await fetch("https://blob.v0.app/rBZOT.txt", {
      // Cache a bit to avoid re-fetching constantly while editing
      cache: "force-cache",
      next: { revalidate: 60 },
    })
    if (!res.ok) return ""
    return await res.text()
  } catch (_e) {
    return ""
  }
}

export default async function ContentSection() {
  const text = (await getPasted()) || ""
  const parts = text
    .split(/\n\s*\n/g)
    .map((p) => p.trim())
    .filter(Boolean)

  if (!parts.length) {
    return (
      <section className="rounded-sm border border-white/10 bg-white/5 p-6 backdrop-blur-md">
        <h2 className="text-white text-lg font-semibold">About the Newsletter</h2>
        <p className="mt-2 text-white/70">Content will appear here shortly. We’re fetching your latest copy.</p>
      </section>
    )
  }

  return (
    <section className="rounded-sm border border-white/10 bg-white/5 p-6 backdrop-blur-md">
      <h2 className="text-white text-lg font-semibold">About the Newsletter</h2>
      <div className="mt-4 space-y-4 leading-relaxed text-white/80">
        {parts.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </div>
    </section>
  )
}
