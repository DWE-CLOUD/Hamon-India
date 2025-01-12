"use client"

import { motion } from "framer-motion"
import { ImageCard } from "@/components/AboutSection/ImageCard"

const solutions = [
  {
    title: "Data Center Solutions",
    description: "High-performance, sustainable data centers powered by renewable energy sources, optimized for maximum efficiency and minimal environmental impact.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
  },
  {
    title: "Smart Infrastructure",
    description: "Intelligent infrastructure solutions that leverage IoT and advanced analytics to optimize energy distribution and consumption.",
    image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
  },
  {
    title: "Clean Energy Systems",
    description: "Comprehensive clean energy solutions including solar, wind, and hydroelectric power systems designed for industrial-scale applications.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
  }
]

export function SolutionsGrid() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {solutions.map((solution, index) => (
          <ImageCard
            key={solution.title}
            title={solution.title}
            description={solution.description}
            image={solution.image}
            delay={index * 0.2}
          />
        ))}
      </div>
    </div>
  )
}