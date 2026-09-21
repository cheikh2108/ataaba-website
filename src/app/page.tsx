import AmbientCanvas from '@/components/AmbientCanvas'
import BackgroundImage from '@/components/BackgroundImage'
import OrbitalOverlay from '@/components/OrbitalOverlay'
import Sidebar from '@/components/Sidebar'
import MobileNav from '@/components/MobileNav'
import Pagination from '@/components/Pagination'
import Hero from '@/components/Hero'
// import Stats from '@/components/Stats' // Section removed
import LogoStrip from '@/components/LogoStrip'
import AboutBento from '@/components/ui/about-bento'
import SolutionsPhares from '@/components/SolutionsPhares'
import ExperienceSection from '@/components/ExperienceSection'
import SolutionsJourneys from '@/components/SolutionsJourneys'
import WhyATAABA from '@/components/WhyATAABA'
import ProjectsPreview from '@/components/ProjectsPreview'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import GSAPAnimations from '@/components/GSAPAnimations'
import DecorativeLines from '@/components/DecorativeLines'
import GrainOverlay from '@/components/GrainOverlay'
import ScrollProgress from '@/components/ScrollProgress'
import LoaderCounter from '@/components/LoaderCounter'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <>
      {/* Skip Navigation - WCAG A requirement */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-cyan-400 focus:text-[#09090B] focus:font-semibold focus:rounded-lg focus:shadow-lg"
      >
        Aller au contenu principal
      </a>

      <LoaderCounter />

      <WhatsAppButton />

      <GrainOverlay />

      <ScrollProgress />

      <GSAPAnimations />

      <AmbientCanvas />

      <BackgroundImage />

      <OrbitalOverlay />

      <main id="main-content" className="relative z-10 flex w-full">
        <Sidebar />
        <MobileNav />

        <Hero />

        <Pagination />
      </main>

      <LogoStrip />

      <AboutBento />

      <SolutionsPhares />

      <ExperienceSection />

      <SolutionsJourneys />

      <WhyATAABA />

      <ProjectsPreview />

      <FinalCTA />

      <Footer />

      <DecorativeLines />
    </>
  )
}
