export default function Reel() {
  return (
    <section id="reel" className="reveal max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
      <div className="text-center">
        <span className="text-[11px] tracking-[0.2em] uppercase text-muted font-light">
          Acting Reel
        </span>

        {/* Placeholder for reel — replace with <video> or embed when available */}
        <div className="mt-8 md:mt-12 w-full aspect-video bg-surface rounded-sm flex items-center justify-center relative overflow-hidden">
          {/* Grain texture */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundSize: '128px 128px'
          }} />

          <div className="z-10 text-center">
            {/* Play button */}
            <div className="w-16 h-16 rounded-full border border-espresso/15 flex items-center justify-center mx-auto mb-4 hover:border-espresso/30 transition-colors cursor-pointer">
              <svg width="18" height="20" viewBox="0 0 18 20" fill="none" className="ml-1">
                <path d="M1 1L17 10L1 19V1Z" stroke="currentColor" strokeWidth="1" className="text-espresso/40" />
              </svg>
            </div>
            <p className="text-[12px] tracking-[0.1em] uppercase text-muted/60 font-light">
              Reel coming soon
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
