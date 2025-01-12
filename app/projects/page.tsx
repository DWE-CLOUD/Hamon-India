import { ProjectsHero } from "@/components/Projects/ProjectsHero"
import { ProjectsGrid } from "@/components/Projects/ProjectsGrid"

export default function ProjectsPage() {
  return (
    <main className="bg-white">
      <ProjectsHero />
      <ProjectsGrid />
    </main>
  )
}