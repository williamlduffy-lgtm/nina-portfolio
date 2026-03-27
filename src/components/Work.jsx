import { useState, useRef, useEffect, useCallback } from 'react'
import Placeholder from './Placeholder'

/**
 * E-COMMERCE TILE REFERENCE
 * ─────────────────────────
 * Each tile has:
 *   id        — Image placeholder ID (e.g., "2.1") for easy reference
 *   label     — Placeholder label shown inside the tile
 *   category  — Filter category
 *   brand     — Brand name displayed below the image
 *   desc      — Product/campaign description displayed between image and brand
 *   ecomLink  — Replace with actual product URL
 *
 * To swap an image: "Replace Image 2.1 with this image"
 * To swap a link:   Update the ecomLink value for the matching id
 */
const WORK_ITEMS = [
  // ── Live products ──────────────────────────────────────────────────────
  { id: '2.1',  category: 'E-Commerce', brand: 'Amazon',  desc: 'Lightweight Waterproof Hooded Rain Jacket',                ecomLink: 'https://a.co/d/046aZUDp',   imageUrl: 'https://m.media-amazon.com/images/I/711D86u66RL._AC_SL1500_.jpg' },
  { id: '2.2',  category: 'E-Commerce', brand: 'Amazon',  desc: 'Long-Sleeve Cardigan with Bell Sleeves',                   ecomLink: 'https://www.amazon.com/dp/B0FG8ZN9Y9',  imageUrl: 'https://m.media-amazon.com/images/I/81kdy-cROXL._AC_SL1500_.jpg' },
  { id: '2.3',  category: 'Campaign',   brand: 'Pampers', desc: 'Swaddlers Active Baby Diapers — Size 2',                   ecomLink: 'https://www.target.com/p/pampers-swaddlers-active-baby-diapers-enormous-pack-size-2-148ct/-/A-53461379', imageUrl: 'https://target.scene7.com/is/image/Target/GUEST_eeb66126-6f42-4c7c-9f36-25c26fc8fdc6' },
  { id: '2.4',  category: 'E-Commerce', brand: 'Amazon',  desc: 'High-Rise Wide Leg Crop Jeans',                             ecomLink: 'https://www.amazon.com/dp/B0DX22NT2F',  imageUrl: 'https://m.media-amazon.com/images/I/61UuQ-yi8DL._AC_SL1500_.jpg' },
  { id: '2.5',  category: 'E-Commerce', brand: 'Amazon',  desc: 'One-Shoulder One-Piece Swimsuit',                          ecomLink: 'https://www.amazon.com/dp/B0FJS525NM',  imageUrl: 'https://m.media-amazon.com/images/I/81ZC-ASCYNL._AC_SL1500_.jpg' },
  { id: '2.6',  category: 'E-Commerce', brand: 'Amazon',  desc: 'Stretch Modal Pajama Set — Light Blue Geese',              ecomLink: 'https://www.amazon.com/dp/B0FFJW7N2P',  imageUrl: 'https://m.media-amazon.com/images/I/81Ie+9BIkLL._AC_SL1500_.jpg' },
  { id: '2.7',  category: 'E-Commerce', brand: 'Amazon',  desc: 'Lettuce Edge Ankle Socks, 6 Pairs',                        ecomLink: 'https://www.amazon.com/dp/B0FDS8QRNC',  imageUrl: 'https://m.media-amazon.com/images/I/61NqO+vPKqL._AC_SL1500_.jpg' },
  { id: '2.8',  category: 'E-Commerce', brand: 'Amazon',  desc: 'Athletic Performance Low Cut Running Socks',                ecomLink: 'https://www.amazon.com/dp/B0FDRZTBL7',  imageUrl: 'https://m.media-amazon.com/images/I/61F1LDP9r7L._AC_SL1500_.jpg' },
  { id: '2.9',  category: 'E-Commerce', brand: 'Amazon',  desc: 'Thin Strap One-Piece Swimsuit',                             ecomLink: 'https://www.amazon.com/dp/B0FJS5SNTL',  imageUrl: 'https://m.media-amazon.com/images/I/61rqD7I-+WL._AC_SL1500_.jpg' },
  { id: '2.10', category: 'E-Commerce', brand: 'Amazon',  desc: 'High-Leg Swim Bikini Bottom',                              ecomLink: 'https://www.amazon.com/dp/B0FJS5T2J7',  imageUrl: 'https://m.media-amazon.com/images/I/61TcIg-7YhL._AC_SL1500_.jpg' },
  { id: '2.11', category: 'E-Commerce', brand: 'Amazon',  desc: 'Cozy Fuzzy Slipper Socks, 5 Pairs',                        ecomLink: 'https://www.amazon.com/dp/B0FDSD5MWG',  imageUrl: 'https://m.media-amazon.com/images/I/6195bk371tL._AC_SL1500_.jpg' },
  { id: '2.12', category: 'E-Commerce', brand: 'Amazon',  desc: 'Soccer Socks with Zone Cushioning',                        ecomLink: 'https://www.amazon.com/dp/B0FDSCYCZK',  imageUrl: 'https://m.media-amazon.com/images/I/612rghtvVSL._AC_SL1500_.jpg' },
]

const LinkArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-muted/50 group-hover:text-espresso transition-colors duration-300">
    <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1" />
  </svg>
)

export default function Work() {
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const filtered = WORK_ITEMS

  const checkScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 10)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
  }, [])

  useEffect(() => {
    checkScroll()
  }, [checkScroll])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.addEventListener('scroll', checkScroll, { passive: true })
    window.addEventListener('resize', checkScroll, { passive: true })
    checkScroll()
    return () => {
      el.removeEventListener('scroll', checkScroll)
      window.removeEventListener('resize', checkScroll)
    }
  }, [checkScroll])

  const scroll = (direction) => {
    const el = scrollRef.current
    if (!el) return
    // Scroll by ~3 tiles worth
    const tileWidth = el.querySelector('a')?.offsetWidth || 220
    const amount = tileWidth * 3 + 48 // 3 tiles + gaps
    el.scrollBy({ left: direction === 'right' ? amount : -amount, behavior: 'smooth' })
  }

  return (
    <section id="work" className="pt-10 md:pt-14 pb-16 md:pb-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section label + scroll arrows on same line */}
        <div className="reveal flex items-center justify-between mb-5 md:mb-6">
          <span className="text-[11px] tracking-[0.2em] uppercase text-muted font-light">
            Selected Work
          </span>
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <button
              onClick={() => scroll('left')}
              className={`glow-hover w-10 h-10 rounded-full border border-border flex items-center justify-center transition-all duration-300 ${
                canScrollLeft
                  ? 'text-espresso hover:border-espresso/30 cursor-pointer'
                  : 'text-muted/25 cursor-default'
              }`}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className={`glow-hover w-10 h-10 rounded-full border border-border flex items-center justify-center transition-all duration-300 ${
                canScrollRight
                  ? 'text-espresso hover:border-espresso/30 cursor-pointer'
                  : 'text-muted/25 cursor-default'
              }`}
              disabled={!canScrollRight}
              aria-label="Scroll right"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="1" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal scroll track — bleeds to the right edge */}
      <div className="relative">
        {/* Right fade gradient */}
        {canScrollRight && (
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 z-10 pointer-events-none bg-gradient-to-l from-ivory to-transparent" />
        )}
        {/* Left fade gradient */}
        {canScrollLeft && (
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 z-10 pointer-events-none bg-gradient-to-r from-ivory to-transparent" />
        )}

        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-5 overflow-x-auto pl-6 md:pl-12 pr-16 md:pr-32 scrollbar-hide pb-2"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {filtered.map((item) => (
            <a
              key={item.id}
              href={item.ecomLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group portfolio-item glow-hover block rounded-sm shrink-0"
              style={{ width: 'clamp(180px, 18vw, 240px)' }}
              data-ecom-link={item.ecomLink}
              data-image-id={item.id}
            >
              {/* Square image tile */}
              <div className="relative overflow-hidden rounded-sm">
                <Placeholder
                  id={item.id}
                  label={item.desc}
                  aspect="1/1"
                  className="w-full"
                  imageUrl={item.imageUrl}
                />

                {/* Arrow indicator — top right */}
                <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-ivory/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <LinkArrowIcon />
                </div>

                {/* Subtle hover overlay */}
                <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/[0.03] transition-colors duration-300 rounded-sm" />
              </div>

              {/* Text below tile */}
              <div className="mt-2.5 pr-1">
                <p className="text-[12px] leading-[1.4] font-light text-accent-blue/70 group-hover:text-accent-blue transition-colors duration-300 flex items-center gap-1.5">
                  <span>Link Here</span>
                  <span className="inline-block w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-[0.5px]">
                    <LinkArrowIcon />
                  </span>
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Mobile scroll arrow — fixed right */}
        {canScrollRight && (
          <button
            onClick={() => scroll('right')}
            className="md:hidden absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-ivory/90 backdrop-blur-sm border border-border flex items-center justify-center glow-hover"
            aria-label="Scroll right"
          >
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="1" />
            </svg>
          </button>
        )}
      </div>

    </section>
  )
}
