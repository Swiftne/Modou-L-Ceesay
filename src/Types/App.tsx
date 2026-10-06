import { useEffect } from 'react'
import SiteNav from '../Componets/Layouts/SiteNav'
import AboutSection from '../Componets/Sections/AboutSection'
import ContactSection from '../Componets/Sections/ContactSection'
import Hero from '../Componets/Sections/Hero'
import SkillsSection from '../Componets/Sections/SkillsSection'
import WorkSection from '../Componets/Sections/WorkSection'

function App() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>('[data-scroll-reveal]')

    if (!('IntersectionObserver' in window) || targets.length === 0) return

    const root = document.documentElement
    root.classList.add('has-scroll-reveal')

    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return

        entry.target.classList.add('is-visible')
        currentObserver.unobserve(entry.target)
      })
    }, { threshold: 0.12 })

    targets.forEach((target) => observer.observe(target))

    return () => {
      observer.disconnect()
      root.classList.remove('has-scroll-reveal')
    }
  }, [])

  return (
    <main>
      <SiteNav />
      <Hero />
      <WorkSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
    </main>
  )
}

export default App
