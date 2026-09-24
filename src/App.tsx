import SiteNav from './Componets/Layouts/SiteNav'
import AboutSection from './Componets/Sections/AboutSection'
import ContactSection from './Componets/Sections/ContactSection'
import Hero from './Componets/Sections/Hero'
import SkillsSection from './Componets/Sections/SkillsSection'
import WorkSection from './Componets/Sections/WorkSection'

function App() {
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
