import { AboutHero } from "@/components/About/AboutHero"
import { AboutMission } from "@/components/About/AboutMission"
import { AboutValues } from "@/components/About/AboutValues"
import { AboutTeam } from "@/components/About/AboutTeam"
import { AboutStats } from "@/components/About/AboutStats"
import { AboutCTA } from "@/components/About/AboutCTA"

export default function AboutPage() {
  return (
    <main className="bg-white">
      <AboutHero />
      <AboutMission />
      <AboutValues />
      <AboutStats />
      <AboutTeam />
      <AboutCTA />
    </main>
  )
}