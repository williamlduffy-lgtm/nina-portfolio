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
              Nina is an actress and model based in New York City. With campaign, ecommerce, and fit work spanning Pampers, Uniqlo, Calvin Klein, Coach, and L'Oréal, she brings a grounded, instinctive quality to every frame.
            </p>

            <p className="text-[15px] md:text-[16px] leading-[1.8] text-espresso/85 font-light mb-6">
              That body of work covers a genuine range of brands and categories across commercial, fit, and ecommerce. As she expands into acting, that same presence carries into character work on screen. She's drawn to layered, complex roles and serious about the craft of building them.
            </p>

            <p className="text-[15px] md:text-[16px] leading-[1.8] text-espresso/85 font-light mb-10">
              Nina gravitates toward characters who feel like real people, ones that sit in ambiguity rather than serving as narrative devices. She's committed to the work and focused on character development.
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
