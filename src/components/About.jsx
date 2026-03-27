import Placeholder from './Placeholder'

export default function About() {
  return (
    <section id="about" className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-28">
      <div className="reveal mb-10 md:mb-14">
        <span className="text-[11px] tracking-[0.2em] uppercase text-muted font-light">
          About
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20">
        {/* Portrait */}
        <div className="reveal">
          <div className="w-full overflow-hidden rounded-sm">
            <img
              src="/portfolio/opt/ninagamgort43285_1_2.jpg"
              alt="Nina — Portrait"
              className="w-full h-full object-cover aspect-[3/4]"
              loading="lazy"
            />
          </div>
        </div>

        {/* Copy */}
        <div className="reveal flex flex-col justify-center">
          <div className="max-w-lg">
            <p className="text-[15px] md:text-[16px] leading-[1.8] text-espresso/85 font-light mb-6">
              Nina has built her career on the thing most people mistake for simplicity — knowing exactly how to be present. After years of fit and campaign work with brands like Calvin Klein, Coach, and L'Oréal, she brings a grounded, instinctive quality to every frame.
            </p>

            <p className="text-[15px] md:text-[16px] leading-[1.8] text-espresso/85 font-light mb-6">
              The Pampers box. The L'Oréal Color Sonic campaign. Amazon across swim, outerwear, and intimates. DKNY, Uniqlo, Coach — the range is there because the work ethic is there. But range without depth is just versatility for its own sake.
            </p>

            <p className="text-[15px] md:text-[16px] leading-[1.8] text-espresso/85 font-light mb-6">
              That's why she's moving deliberately into acting. The same presence that makes a campaign image stop someone mid-scroll translates to something richer on screen: the ability to inhabit a character without announcing it. She isn't interested in performing. She's interested in being believed.
            </p>

            <p className="text-[15px] md:text-[16px] leading-[1.8] text-espresso/85 font-light mb-10">
              Nina is drawn to layered, complex characters — the ones who sit in ambiguity, who feel like real people rather than narrative devices. She's serious about the craft, committed to the work, and ready for roles that ask for depth.
            </p>

            {/* Representation */}
            <div className="border-t border-border pt-6">
              <p className="text-[11px] tracking-[0.15em] uppercase text-muted font-light">
                Currently represented by State Management
              </p>
              <p className="text-[11px] tracking-[0.1em] uppercase text-muted/60 font-light mt-1">
                Fit Division &middot; Lifestyle &middot; Direct
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
