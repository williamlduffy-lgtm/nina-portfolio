import { useState, useCallback, useEffect } from 'react'

/**
 * MODELING PORTFOLIO — All images from "Nina Approved" folder
 * ────────────────────────────────────────────────────────────
 * All 16 images loaded from /public/portfolio/
 * Masonry layout with varied aspect ratios for visual interest.
 */
const PORTFOLIO_ITEMS = [
  { id: '5.1',  src: '/portfolio/opt/ninagamgort43260_2.jpg',    label: 'Editorial' },
  { id: '5.2',  src: '/portfolio/opt/ninagamgort43319_2.jpg',    label: 'Editorial' },
  { id: '5.3',  src: '/portfolio/opt/ninagamgort43176_2.jpg',    label: 'Editorial' },
  { id: '5.4',  src: '/portfolio/opt/ninagamgort43256 (1).jpg',  label: 'Editorial' },
  { id: '5.5',  src: '/portfolio/opt/ninagamgort43364_2.jpg',    label: 'Editorial' },
  { id: '5.6',  src: '/portfolio/opt/ninagamgort43387.jpg',      label: 'Editorial' },
  { id: '5.7',  src: '/portfolio/opt/IMG_0325.PNG',               label: 'Portrait' },
  { id: '5.8',  src: '/portfolio/opt/ninagamgort43275_2.jpg',    label: 'Editorial' },
  { id: '5.9',  src: '/portfolio/opt/ninagamgort43285_1_2.jpg',  label: 'Portrait' },
  { id: '5.10', src: '/portfolio/opt/DSC_2798.JPG',              label: 'Portrait' },
  { id: '5.11', src: '/portfolio/opt/DSC_2517BW.JPG',            label: 'Portrait — B&W' },
  { id: '5.12', src: '/portfolio/opt/DSC_2556BW.JPG',            label: 'Portrait — B&W' },
  { id: '5.13', src: '/portfolio/opt/IMG_2189.JPG',              label: 'Lifestyle' },
  { id: '5.14', src: '/portfolio/opt/IMG_7534.jpeg',             label: 'Lifestyle' },
  { id: '5.15', src: '/portfolio/opt/nina1.jpg',                 label: 'Portfolio' },
  { id: '5.16', src: '/portfolio/opt/078.jpg',                   label: 'Editorial' },
  { id: '5.17', src: '/portfolio/opt/080.jpg',                   label: 'Editorial' },
  { id: '5.18', src: '/portfolio/opt/dsc_9523 (1).JPG',          label: 'Portrait' },
  { id: '5.19', src: '/portfolio/opt/dsc_9533 (1).JPG',          label: 'Portrait' },
  { id: '5.20', src: '/portfolio/opt/dsc_9643 (1).JPG',          label: 'Portrait' },
]

export default function Portfolio() {
  const [lightbox, setLightbox] = useState(null)

  const openLightbox = useCallback((item) => {
    setLightbox(item)
  }, [])

  const closeLightbox = useCallback(() => {
    setLightbox(null)
  }, [])

  const navigateLightbox = useCallback((direction) => {
    if (!lightbox) return
    const currentIndex = PORTFOLIO_ITEMS.findIndex((i) => i.id === lightbox.id)
    const nextIndex = direction === 'next'
      ? (currentIndex + 1) % PORTFOLIO_ITEMS.length
      : (currentIndex - 1 + PORTFOLIO_ITEMS.length) % PORTFOLIO_ITEMS.length
    setLightbox(PORTFOLIO_ITEMS[nextIndex])
  }, [lightbox])

  // Keyboard navigation
  useEffect(() => {
    if (!lightbox) return
    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') navigateLightbox('next')
      if (e.key === 'ArrowLeft') navigateLightbox('prev')
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [lightbox, closeLightbox, navigateLightbox])

  return (
    <section id="portfolio" className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
      {/* Section label */}
      <div className="reveal mb-10 md:mb-14">
        <span className="text-[11px] tracking-[0.2em] uppercase text-muted font-light">
          Modeling Portfolio
        </span>
      </div>

      {/* Uniform grid — all thumbnails same size, cropped to 3:4 */}
      <div className="reveal grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
        {PORTFOLIO_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => openLightbox(item)}
            className="glow-hover block w-full rounded-sm overflow-hidden cursor-pointer group relative aspect-[3/4]"
            data-image-id={item.id}
          >
            <img
              src={item.src}
              alt={item.label}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.025]"
              loading="lazy"
            />

            {/* Expand icon on hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
              <div className="w-10 h-10 rounded-full bg-ivory/80 backdrop-blur-sm flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-espresso/60">
                  <path d="M1 6V1H6" stroke="currentColor" strokeWidth="1" />
                  <path d="M15 6V1H10" stroke="currentColor" strokeWidth="1" />
                  <path d="M1 10V15H6" stroke="currentColor" strokeWidth="1" />
                  <path d="M15 10V15H10" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-espresso/90 backdrop-blur-sm animate-[fadeIn_0.3s_ease]" />

          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-ivory/10 hover:bg-ivory/20 flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" className="text-ivory/70">
              <line x1="2" y1="2" x2="14" y2="14" stroke="currentColor" strokeWidth="1" />
              <line x1="14" y1="2" x2="2" y2="14" stroke="currentColor" strokeWidth="1" />
            </svg>
          </button>

          {/* Image counter */}
          <div className="absolute top-7 left-6 z-10 text-[11px] tracking-[0.1em] uppercase text-ivory/40 font-light">
            {PORTFOLIO_ITEMS.findIndex((i) => i.id === lightbox.id) + 1} / {PORTFOLIO_ITEMS.length}
          </div>

          {/* Previous arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox('prev') }}
            className="absolute left-4 md:left-8 z-10 w-11 h-11 rounded-full bg-ivory/10 hover:bg-ivory/20 flex items-center justify-center transition-colors glow-hover"
            aria-label="Previous image"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 2L4 7L9 12" stroke="rgba(247,244,239,0.7)" strokeWidth="1" />
            </svg>
          </button>

          {/* Next arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox('next') }}
            className="absolute right-4 md:right-8 z-10 w-11 h-11 rounded-full bg-ivory/10 hover:bg-ivory/20 flex items-center justify-center transition-colors glow-hover"
            aria-label="Next image"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M5 2L10 7L5 12" stroke="rgba(247,244,239,0.7)" strokeWidth="1" />
            </svg>
          </button>

          {/* Full-screen image */}
          <div
            className="relative z-10 w-[90vw] h-[85vh] flex items-center justify-center animate-[fadeInUp_0.3s_ease]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.label}
              className="max-w-full max-h-full w-auto h-auto object-contain rounded-sm"
            />
          </div>

          {/* Image label */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-[11px] tracking-[0.1em] uppercase text-ivory/40 font-light">
            {PORTFOLIO_ITEMS.findIndex((i) => i.id === lightbox.id) + 1} / {PORTFOLIO_ITEMS.length} — {lightbox.label}
          </div>
        </div>
      )}
    </section>
  )
}
