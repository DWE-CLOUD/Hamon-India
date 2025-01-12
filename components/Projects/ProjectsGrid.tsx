"use client"

import { ProjectCard } from "./ProjectCard"

const projects = [
  {
    id: "USA 001",
    title: "Pennsylvania, USA",
    location: "Pennsylvania",
    capacity: "20 MW",
    industry: "AI Hosting",
    energy: "Nuclear",
    image: "https://images.unsplash.com/photo-1487875961445-47a00398c267?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    description: "The Pennsylvania-based AI data centre is engineered to support public cloud, GPU cloud, and AI workloads, utilising BE's advanced infrastructure tailored for AI training demands."
  },
  {
    id: "EUR 002",
    title: "Stockholm, Sweden",
    location: "Stockholm",
    capacity: "15 MW",
    industry: "Data Center",
    energy: "Hydroelectric",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    description: "A state-of-the-art data center powered by renewable hydroelectric energy, providing sustainable computing solutions for Nordic businesses."
  },
  {
    id: "ASIA 003",
    title: "Singapore Hub",
    location: "Singapore",
    capacity: "25 MW",
    industry: "Cloud Services",
    energy: "Solar",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    description: "Our Singapore facility leverages advanced solar technology to power cloud computing services, serving as a key hub for Southeast Asian markets."
  }
]

export function ProjectsGrid() {
  return (
    <div className="min-h-screen py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="space-y-32">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  )
}