import AboutSection from './components/AboutSection'
import AchievementsSection from './components/AchievementsSection'
import CertificationsSection from './components/CertificationsSection'
import ContactSection from './components/ContactSection'
import EducationSection from './components/EducationSection'
import ExperienceSection from './components/ExperienceSection'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-45" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-mesh" />
      <div className="pointer-events-none absolute -left-36 top-20 -z-10 h-80 w-80 rounded-full bg-[var(--color-glow-cyan)] blur-[110px]" />
      <div className="pointer-events-none absolute -right-20 top-56 -z-10 h-96 w-96 rounded-full bg-[var(--color-glow-purple)] blur-[140px]" />

      <Navbar />

      <main>
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <AchievementsSection />
        <CertificationsSection />
        <EducationSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}

export default App
