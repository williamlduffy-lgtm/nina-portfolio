/**
 * Placeholder image component with labeled IDs for easy replacement.
 * Usage: <Placeholder id="1.1" label="Hero — Editorial" aspect="3/4" />
 *
 * IMAGE REFERENCE MAP:
 * ─────────────────────
 * 1.1   — Hero image (editorial, warm tones, strong presence)
 *
 * WORK TILES (square, models.com style):
 * 2.1   — Pampers — On the Box (Campaign)
 * 2.2   — L'Oréal Color Sonic (Campaign)
 * 2.3   — DKNY — Campaign
 * 2.4   — Campaign 4 (TBD)
 * 2.5   — Calvin Klein — Fit
 * 2.6   — Calvin Klein — Underwear
 * 2.7   — Coach — Accessories
 * 2.8   — Coach — RTW
 * 2.9   — Uniqlo — E-Com 1
 * 2.10  — Uniqlo — E-Com 2
 * 2.11  — Amazon — Swim
 * 2.12  — Amazon — Outerwear
 * 2.13  — Amazon — Intimates
 * 2.14  — Amazon — Activewear
 * 2.15  — Amazon — Loungewear
 * 2.16  — E-Com Brand TBD 1
 * 2.17  — E-Com Brand TBD 2
 * 2.18  — E-Com Brand TBD 3
 * 2.19  — E-Com Brand TBD 4
 * 2.20  — Editorial 1
 * 2.21  — Editorial 2
 * 2.22  — Editorial 3
 * 2.23  — Editorial 4
 * 2.24  — Editorial 5
 * 2.25  — Editorial 6
 *
 * 3.1   — About portrait (natural, personal register)
 * 4.1   — Acting headshot (if available)
 */

export default function Placeholder({ id, label, aspect = '3/4', className = '', imageUrl = null }) {
  if (imageUrl) {
    return (
      <div
        className={`relative bg-surface overflow-hidden ${className}`}
        style={{ aspectRatio: aspect }}
      >
        <img
          src={imageUrl}
          alt={label}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 border border-espresso/[0.04] rounded-sm" />
      </div>
    )
  }

  return (
    <div
      className={`relative bg-surface flex items-center justify-center overflow-hidden ${className}`}
      style={{ aspectRatio: aspect }}
    >
      {/* Decorative grain texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundSize: '128px 128px'
      }} />

      <div className="text-center z-10 px-3">
        <div className="font-sans text-[9px] tracking-[0.15em] uppercase text-muted/50 mb-1">
          Image {id}
        </div>
        <div className="font-sans text-[10px] tracking-[0.06em] uppercase text-muted/70 font-light leading-[1.4]">
          {label}
        </div>
      </div>

      {/* Subtle border */}
      <div className="absolute inset-0 border border-espresso/[0.04] rounded-sm" />
    </div>
  )
}
