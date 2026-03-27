import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import BrandStrip from './components/BrandStrip'
import Portfolio from './components/Portfolio'
import Reel from './components/Reel'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <Work />
      <BrandStrip />
      <Portfolio />
      <Reel />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
