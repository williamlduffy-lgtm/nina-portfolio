export default function Footer() {
  return (
    <footer className="max-w-[1400px] mx-auto px-6 md:px-12 py-8 border-t border-border">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Name */}
        <span className="font-serif text-lg text-espresso/60 tracking-[0.02em]">
          Nina
        </span>

        {/* Nav + links */}
        <div className="flex items-center gap-6 md:gap-8">
          <a href="#work" className="text-[11px] tracking-[0.1em] uppercase font-light text-muted/60 hover:text-espresso transition-colors">
            Work
          </a>
          <a href="#portfolio" className="text-[11px] tracking-[0.1em] uppercase font-light text-muted/60 hover:text-espresso transition-colors">
            Portfolio
          </a>
          <a href="#reel" className="text-[11px] tracking-[0.1em] uppercase font-light text-muted/60 hover:text-espresso transition-colors">
            Reel
          </a>
          <a href="#about" className="text-[11px] tracking-[0.1em] uppercase font-light text-muted/60 hover:text-espresso transition-colors">
            About
          </a>
          <a href="#contact" className="text-[11px] tracking-[0.1em] uppercase font-light text-muted/60 hover:text-espresso transition-colors">
            Contact
          </a>
          {/* Instagram — replace # with actual handle */}
          <a
            href="https://www.instagram.com/ninagamgort/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] tracking-[0.1em] uppercase font-light text-muted/60 hover:text-espresso transition-colors"
            data-link-id="instagram"
          >
            Instagram
          </a>
        </div>

        {/* Copyright */}
        <span className="text-[10px] tracking-[0.1em] text-muted/30 font-light">
          &copy; {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  )
}
