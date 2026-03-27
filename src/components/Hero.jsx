export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col">
      {/* Hero images — two side by side */}
      <div className="anim-hero-img w-full pt-16 md:pt-20">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="w-full grid grid-cols-2 gap-3 md:gap-5">
            <div className="overflow-hidden rounded-sm">
              <img
                src="/portfolio/ninagamgort43260_2_hero.jpg"
                alt="Nina — Editorial"
                className="w-full h-full object-cover aspect-[3/4] md:aspect-[4/5]"
                style={{ imageRendering: 'auto', WebkitBackfaceVisibility: 'hidden' }}
                decoding="async"
                fetchPriority="high"
                sizes="(max-width: 768px) 50vw, 680px"
              />
            </div>
            <div className="overflow-hidden rounded-sm">
              <img
                src="/portfolio/ninagamgort43319_2_hero.jpg"
                alt="Nina — Editorial"
                className="w-full h-full object-cover aspect-[3/4] md:aspect-[4/5]"
                style={{ imageRendering: 'auto', WebkitBackfaceVisibility: 'hidden' }}
                decoding="async"
                fetchPriority="high"
                sizes="(max-width: 768px) 50vw, 680px"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Name + descriptor below image */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full mt-8 md:mt-12 mb-0">
        <h1 className="anim-hero-name font-serif text-5xl md:text-7xl lg:text-8xl font-light text-espresso tracking-[0.01em] leading-[0.95]">
          Nina
        </h1>
        <p className="anim-hero-sub text-[13px] md:text-[14px] tracking-[0.14em] uppercase font-light text-muted mt-3 md:mt-4">
          Model &middot; Actor
        </p>

        {/* Stats */}
        <div className="anim-hero-sub mt-6 md:mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-2.5 max-w-xl">
          <span className="text-[13px] md:text-[14px] tracking-[0.1em] uppercase font-light text-muted/70">Height: 5'6.5"</span>
          <span className="text-[13px] md:text-[14px] tracking-[0.1em] uppercase font-light text-muted/70">Waist: 25"</span>
          <span className="text-[13px] md:text-[14px] tracking-[0.1em] uppercase font-light text-muted/70">Hips: 35.5"</span>
          <span className="text-[13px] md:text-[14px] tracking-[0.1em] uppercase font-light text-muted/70">Bust: 32B</span>
          <span className="text-[13px] md:text-[14px] tracking-[0.1em] uppercase font-light text-muted/70">Shoe: 8</span>
          <span className="text-[13px] md:text-[14px] tracking-[0.1em] uppercase font-light text-muted/70">Eyes: Hazel</span>
          <span className="text-[13px] md:text-[14px] tracking-[0.1em] uppercase font-light text-muted/70">Hair: Brown</span>
        </div>
      </div>
    </section>
  )
}
