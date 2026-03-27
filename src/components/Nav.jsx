import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Reel', href: '#reel' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <>
      <nav
        className={`anim-nav fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ivory/90 backdrop-blur-md shadow-[0_1px_0_rgba(43,37,32,0.06)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
          {/* Name */}
          <a href="#" className="flex flex-col">
            <span className="font-serif text-xl md:text-2xl text-espresso tracking-[0.02em]">
              Nina
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link text-[13px] tracking-[0.1em] uppercase font-light text-espresso/80 hover:text-espresso transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span className="w-5 h-[1px] bg-espresso" />
            <span className="w-5 h-[1px] bg-espresso" />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-ivory transition-opacity duration-300 flex flex-col items-center justify-center gap-10 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          className="absolute top-6 right-6 p-2"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" className="text-espresso">
            <line x1="2" y1="2" x2="18" y2="18" stroke="currentColor" strokeWidth="1" />
            <line x1="18" y1="2" x2="2" y2="18" stroke="currentColor" strokeWidth="1" />
          </svg>
        </button>

        <span className="font-serif text-3xl text-espresso tracking-[0.02em]">Nina</span>

        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="text-[15px] tracking-[0.15em] uppercase font-light text-espresso/70 hover:text-espresso transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  )
}
