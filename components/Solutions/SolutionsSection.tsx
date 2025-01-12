"use client"

import { SolutionsHeader } from "./SolutionsHeader"
import { SolutionsCards } from "./SolutionsCards"

export function SolutionsSection() {
  return (
    <section className="min-h-screen bg-white py-24">
      <div className="container mx-auto px-4">
        <SolutionsHeader />
        <SolutionsCards />
      </div>
    </section>
  )
}