"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { ProjectCard } from "./ProjectCard"
import { ProjectLightbox } from "./ProjectLightbox"
import { Project } from "./types"

const projects: Project[] = [
  {
    id: "USA 001",
    title: "Pennsylvania Data Center",
    description: "AI-optimized data center powered by nuclear energy, supporting advanced computing workloads.",
    image: "https://images.unsplash.com/photo-1487875961445-47a00398c267?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    stats: {
      capacity: "20 MW",
      industry: "AI Hosting",
      location: "Pennsylvania",
      energy: "Nuclear"
    }
  },
  {
    id: "EUR 002",
    title: "Stockholm Green Hub",
    description: "Sustainable data center leveraging hydroelectric power and natural cooling systems.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    stats: {
      capacity: "15 MW",
      industry: "Data Center",
      location: "Stockholm",
      energy: "Hydroelectric"
    }
  },
  {
    id: "ASIA 003",
    title: "Singapore Solar Hub",
    description: "Next-generation cloud computing facility powered by advanced solar technology.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    stats: {
      capacity: "25 MW",
      industry: "Cloud Services",
      location: "Singapore",
      energy: "Solar"
    }
  }
]

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const y = useTransform(scrollYProgress, [0, 0.2], [50, 0])

  return (
    <>
      <section 
        ref={sectionRef} 
        className="py-32 bg-gradient-to-b from-gray-50 to-white"
      >
        <motion.div 
          style={{ opacity, y }}
          className="container mx-auto px-4"
        >
          <div className="text-center mb-32">
            <span className="text-sm uppercase tracking-[0.2em] text-gray-500 font-light">
              FEATURED PROJECTS
            </span>
            <h2 className="text-5xl font-light mt-6 mb-8">
              Our Global Impact
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              Discover how we're transforming industries through sustainable infrastructure and clean energy solutions.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
                total={projects.length}
                onSelect={setSelectedProject}
              />
            ))}
          </div>
        </motion.div>
      </section>

      <ProjectLightbox 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </>
  )
}