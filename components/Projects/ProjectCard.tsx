"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ProjectStats } from "./ProjectStats"
import { Project } from "./types"

interface ProjectCardProps {
  project: Project
  index: number
  total: number
  onSelect: (project: Project) => void
}

export function ProjectCard({ project, index, total, onSelect }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -100 * (index + 1)]
  )

  return (
    <motion.div
      ref={cardRef}
      style={{ 
        y,
        position: "relative",
        zIndex: total - index,
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="w-full mb-32"
    >
      <motion.div 
        onClick={() => onSelect(project)}
        whileHover={{ y: -10 }}
        className="group cursor-pointer bg-white rounded-2xl shadow-xl overflow-hidden"
      >
        <div className="relative h-[500px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 transition-all duration-500 group-hover:from-black/40 group-hover:to-black/80" />
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform scale-100 transition-all duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 p-12 flex flex-col justify-between text-white">
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-sm font-light mb-2 opacity-80"
              >
                {project.id}
              </motion.div>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl font-light mb-6"
              >
                {project.title}
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl font-light opacity-90 max-w-2xl"
              >
                {project.description}
              </motion.p>
            </div>
            <ProjectStats stats={project.stats} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}