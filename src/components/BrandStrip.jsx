/**
 * Brand logo SVGs — simplified/approximated versions.
 * Replace with official SVGs when available.
 */

const logos = {
  'Calvin Klein': (
    <svg viewBox="0 0 200 40" fill="currentColor" className="h-10 md:h-12 w-auto">
      <text x="100" y="28" textAnchor="middle" fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif" fontSize="18" fontWeight="300" letterSpacing="4">CALVIN KLEIN</text>
    </svg>
  ),
  'Coach': (
    <svg viewBox="0 0 140 40" fill="currentColor" className="h-10 md:h-12 w-auto">
      <text x="70" y="28" textAnchor="middle" fontFamily="Georgia, 'Times New Roman', serif" fontSize="22" fontWeight="400" letterSpacing="3">COACH</text>
    </svg>
  ),
  'DKNY': (
    <svg viewBox="0 0 120 40" fill="currentColor" className="h-10 md:h-12 w-auto">
      <text x="60" y="29" textAnchor="middle" fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif" fontSize="26" fontWeight="700" letterSpacing="2">DKNY</text>
    </svg>
  ),
  'Uniqlo': (
    <svg viewBox="0 0 100 50" fill="currentColor" className="h-10 md:h-12 w-auto">
      <rect x="15" y="5" width="70" height="40" rx="2" fill="currentColor" opacity="0.9" />
      <text x="50" y="31" textAnchor="middle" fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif" fontSize="16" fontWeight="700" fill="#F7F4EF" letterSpacing="1">UNIQLO</text>
    </svg>
  ),
  'Amazon': (
    <svg viewBox="0 0 160 45" fill="currentColor" className="h-10 md:h-12 w-auto">
      <text x="80" y="26" textAnchor="middle" fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif" fontSize="20" fontWeight="400" letterSpacing="1">amazon</text>
      <path d="M45 32 Q80 42 115 32" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M108 29 L115 32 L110 36" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  'Pampers': (
    <svg viewBox="0 0 160 40" fill="currentColor" className="h-10 md:h-12 w-auto">
      <text x="80" y="28" textAnchor="middle" fontFamily="Georgia, 'Times New Roman', serif" fontSize="20" fontStyle="italic" fontWeight="400" letterSpacing="1">Pampers</text>
    </svg>
  ),
  "L'Oréal": (
    <svg viewBox="0 0 140 40" fill="currentColor" className="h-10 md:h-12 w-auto">
      <text x="70" y="28" textAnchor="middle" fontFamily="Georgia, 'Times New Roman', serif" fontSize="19" fontWeight="400" letterSpacing="1">L'ORÉAL</text>
    </svg>
  ),
  'Ted Baker': (
    <svg viewBox="0 0 180 40" fill="currentColor" className="h-10 md:h-12 w-auto">
      <text x="90" y="28" textAnchor="middle" fontFamily="Georgia, 'Times New Roman', serif" fontSize="18" fontWeight="400" letterSpacing="3">TED BAKER</text>
    </svg>
  ),
  'Danskin': (
    <svg viewBox="0 0 160 40" fill="currentColor" className="h-10 md:h-12 w-auto">
      <text x="80" y="28" textAnchor="middle" fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif" fontSize="19" fontWeight="300" letterSpacing="3">DANSKIN</text>
    </svg>
  ),
}

const BRANDS = ['Calvin Klein', 'Coach', 'DKNY', 'Uniqlo', 'Ted Baker', 'Amazon', 'Pampers', "L'Oréal", 'Danskin']

function BrandSequence() {
  return (
    <>
      {BRANDS.map((brand) => (
        <span key={brand} className="inline-flex items-center shrink-0 px-6 md:px-8">
          <span className="text-espresso/60">
            {logos[brand]}
          </span>
          <span className="text-espresso/35 mx-6 md:mx-8 text-xl select-none">&middot;</span>
        </span>
      ))}
    </>
  )
}

export default function BrandStrip() {
  return (
    <section className="reveal overflow-hidden py-6 md:py-8 border-t border-b border-border select-none">
      <div className="marquee-track flex whitespace-nowrap">
        {/* 4 copies for seamless infinite loop */}
        <div className="flex shrink-0 items-center animate-marquee">
          <BrandSequence />
        </div>
        <div className="flex shrink-0 items-center animate-marquee">
          <BrandSequence />
        </div>
        <div className="flex shrink-0 items-center animate-marquee">
          <BrandSequence />
        </div>
        <div className="flex shrink-0 items-center animate-marquee">
          <BrandSequence />
        </div>
      </div>
    </section>
  )
}
