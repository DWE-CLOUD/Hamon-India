import { HeroContent } from "@/components/HeroContent"
import { Partners } from "@/components/Partners"
import { AboutSection } from "@/components/AboutSection"
import { SolutionsSection } from "@/components/Solutions/SolutionsSection"
import { ProjectsSection } from "@/components/Projects/ProjectsSection"
import { ContactSection } from "@/components/Contact/ContactSection"
import { VideoBackground } from "@/components/VideoBackground"

export default function Home() {
  return (
    <main>
      <div className="relative min-h-screen hero-section">
        <VideoBackground />
        <HeroContent />
        <Partners />
      </div>
      
      <AboutSection />
      <SolutionsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}