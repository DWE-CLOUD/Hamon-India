import { SolutionsHero } from "@/components/Solutions/SolutionsHero"
import { SolutionsGrid } from "@/components/Solutions/SolutionsGrid"

export default function SolutionsPage() {
  return (
    <main className="bg-white">
      <SolutionsHero />
      <SolutionsGrid />
    </main>
  )
}