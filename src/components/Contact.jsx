import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Replace with Formspree or Netlify Forms action
    console.log('Form submitted:', formData)
    alert('Message sent — thank you.')
    setFormData({ name: '', email: '', role: '', message: '' })
  }

  return (
    <section id="contact" className="bg-surface">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-28">
        <div className="reveal mb-10 md:mb-14">
          <span className="text-[11px] tracking-[0.2em] uppercase text-muted font-light">
            Contact
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
          {/* Left — statement */}
          <div className="reveal flex flex-col justify-center">
            <p className="font-serif text-3xl md:text-4xl lg:text-[42px] text-espresso font-light leading-[1.2] mb-6">
              Available for campaigns, commercial, film, and TV.
            </p>
            <p className="font-serif text-xl md:text-2xl text-accent-amber/80 font-light italic">
              I can't wait to meet you.
            </p>
          </div>

          {/* Right — form */}
          <div className="reveal">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-espresso/10 py-3 text-[14px] font-light text-espresso placeholder:text-muted/40 tracking-[0.04em] transition-colors"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-espresso/10 py-3 text-[14px] font-light text-espresso placeholder:text-muted/40 tracking-[0.04em] transition-colors"
                />
              </div>

              <div>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-espresso/10 py-3 text-[14px] font-light text-espresso tracking-[0.04em] transition-colors appearance-none cursor-pointer"
                  style={{
                    color: formData.role ? undefined : 'rgba(122, 116, 108, 0.4)',
                  }}
                >
                  <option value="" disabled>I am a...</option>
                  <option value="casting-director">Casting Director</option>
                  <option value="agent">Agent</option>
                  <option value="brand">Brand / Marketing</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full bg-transparent border-b border-espresso/10 py-3 text-[14px] font-light text-espresso placeholder:text-muted/40 tracking-[0.04em] transition-colors resize-none"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="submit-glow group inline-flex items-center gap-3 text-[12px] tracking-[0.15em] uppercase font-light text-espresso hover:text-accent-blue transition-colors duration-300 px-5 py-2.5 rounded-full border border-transparent hover:border-accent-blue/15 glow-hover"
                >
                  <span>Contact Nina</span>
                  <svg width="20" height="8" viewBox="0 0 20 8" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M0 4H18M18 4L14 0.5M18 4L14 7.5" stroke="currentColor" strokeWidth="0.75" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
