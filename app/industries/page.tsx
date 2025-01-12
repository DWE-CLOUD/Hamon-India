import { IndustriesHero } from "@/components/Industries/IndustriesHero"
import { IndustriesGrid } from "@/components/Industries/IndustriesGrid"

export default function IndustriesPage() {
  return (
    <main className="bg-white">
      <IndustriesHero />
      <IndustriesGrid />
    </main>
  )
}