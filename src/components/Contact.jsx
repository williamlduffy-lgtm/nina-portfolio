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

  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const params = new URLSearchParams()
      params.append('name', formData.name)
      params.append('email', formData.email)
      params.append('role', formData.role)
      params.append('message', formData.message)
      await fetch(
        'https://script.google.com/macros/s/AKfycbw0lHW82Pw77QO_wZfwR3euM-FtFJKcykudnogYUiNATv_z9y13boIBIRutliKRH0si/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          body: params,
        }
      )
      setSubmitted(true)
      setFormData({ name: '', email: '', role: '', message: '' })
    } catch (err) {
      alert('Something went wrong — please try again.')
    }
    setSubmitting(false)
  }

  return (
    <section id="contact" className="bg-surface">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-28">
        <div className="reveal mb-10 md:mb-14">
          <span className="text-[11px] tracking-[0.2em] uppercase text-espresso/60 font-light">
            Contact
          </span>
        </div>

        {/* Representation + Social */}
        <div className="reveal mb-14 md:mb-18">
          {/* Representation */}
          <div className="mb-6">
            <p className="text-[12px] tracking-[0.15em] uppercase text-espresso/60 font-light mb-2">
              Representation
            </p>
            <p className="text-[15px] font-light text-espresso">
              State Mgmt &mdash;{' '}
              <a
                href="https://www.statemgmt.com/new-york/new-york-fit/women/1841393/nina-gamgort"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-hover inline-flex items-center gap-1 text-accent-blue hover:text-accent-blue/80 transition-colors duration-300 rounded-sm px-1 -mx-1"
              >
                Portfolio Link Here
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className="translate-y-[0.5px]">
                  <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1" />
                </svg>
              </a>
            </p>
          </div>

          {/* Social icons — below representation */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/ninagamgort/"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-hover w-14 h-14 rounded-full border border-espresso/15 flex items-center justify-center text-espresso/50 hover:text-espresso hover:border-espresso/30 transition-all duration-300"
              aria-label="Instagram"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>

            <a
              href="https://www.tiktok.com/@ninagamgort"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-hover w-14 h-14 rounded-full border border-espresso/15 flex items-center justify-center text-espresso/50 hover:text-espresso hover:border-espresso/30 transition-all duration-300"
              aria-label="TikTok"
            >
              <svg width="24" height="26" viewBox="0 0 15 16" fill="currentColor">
                <path d="M10.5 0C10.5 2.5 12.5 3.5 14 3.5V6C12.5 6 10.5 5 10.5 5V11C10.5 14 8 16 5.5 16C3 16 0.5 14 0.5 11C0.5 8 3 6 5.5 6V8.5C4 8.5 3 9.5 3 11C3 12.5 4 13.5 5.5 13.5C7 13.5 8 12.5 8 11V0H10.5Z" />
              </svg>
            </a>

            <a
              href="https://www.imdb.com/name/nm4795466/"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-hover w-14 h-14 rounded-full border border-espresso/15 flex items-center justify-center text-espresso/50 hover:text-espresso hover:border-espresso/30 transition-all duration-300"
              aria-label="IMDb"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <text x="12" y="15.5" textAnchor="middle" fill="#F7F4EF" fontSize="7" fontWeight="700" fontFamily="Arial, sans-serif">IMDb</text>
              </svg>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16">
          {/* Left — statement */}
          <div className="reveal flex flex-col justify-start">
            <p className="font-serif text-3xl md:text-4xl lg:text-[42px] text-espresso font-light leading-[1.2] mb-4">
              Available for campaigns, commercial, film, and TV.
            </p>
            <p className="font-serif text-xl md:text-2xl text-accent-amber font-light italic">
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
                  className="w-full bg-transparent border-b border-espresso/20 py-3 text-[14px] font-light text-espresso placeholder:text-espresso/40 tracking-[0.04em] transition-colors"
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
                  className="w-full bg-transparent border-b border-espresso/20 py-3 text-[14px] font-light text-espresso placeholder:text-espresso/40 tracking-[0.04em] transition-colors"
                />
              </div>

              <div>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-espresso/20 py-3 text-[14px] font-light text-espresso tracking-[0.04em] transition-colors appearance-none cursor-pointer"
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
                  className="w-full bg-transparent border-b border-espresso/20 py-3 text-[14px] font-light text-espresso placeholder:text-espresso/40 tracking-[0.04em] transition-colors resize-none"
                />
              </div>

              <div className="pt-4">
                {submitted ? (
                  <p className="text-[13px] tracking-[0.08em] text-accent-blue font-light">
                    Thank you — your message has been sent.
                  </p>
                ) : (
                  <button
                    type="submit"
                    disabled={submitting}
                    className="submit-glow group inline-flex items-center gap-3 text-[12px] tracking-[0.15em] uppercase font-light text-espresso hover:text-accent-blue transition-colors duration-300 px-5 py-2.5 rounded-full border border-transparent hover:border-accent-blue/15 glow-hover disabled:opacity-50"
                  >
                    <span>{submitting ? 'Sending...' : 'Contact Nina'}</span>
                    <svg width="20" height="8" viewBox="0 0 20 8" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                      <path d="M0 4H18M18 4L14 0.5M18 4L14 7.5" stroke="currentColor" strokeWidth="0.75" />
                    </svg>
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
