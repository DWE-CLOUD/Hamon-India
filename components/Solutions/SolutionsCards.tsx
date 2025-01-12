"use client"

import { motion } from "framer-motion"
import { SolutionCard } from "./SolutionCard"

const solutions = [
  {
    title: "Data Center Solutions",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    link: "https://www.bec.uk/solutions/colocation-hosting",
    expandIcon: true
  },
  {
    title: "Smart Infrastructure",
    image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1",
    link: "/solutions/smart-infrastructure",
    expandIcon: true
  },
  {
    title: "Clean Energy Systems",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7",
    link: "/solutions/clean-energy",
    expandIcon: true
  }
]

export function SolutionsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {solutions.map((solution, index) => (
        <SolutionCard
          key={solution.title}
          {...solution}
          delay={index * 0.2}
        />
      ))}
    </div>
  )
}