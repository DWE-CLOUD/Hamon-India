"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Project } from "./types"
import { X } from "lucide-react"
import { ProjectStats } from "./ProjectStats"

interface ProjectLightboxProps {
  project: Project | null
  onClose: () => void
}

export function ProjectLightbox({ project, onClose }: ProjectLightboxProps) {
  if (!project) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/90 z-50 backdrop-blur-md overflow-y-auto"
      >
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={onClose}
          className="fixed top-8 right-8 text-white/80 hover:text-white p-2 rounded-full bg-white/10 backdrop-blur-md z-50"
        >
          <X className="w-6 h-6" />
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: "spring", damping: 25 }}
          onClick={(e) => e.stopPropagation()}
          className="container mx-auto px-4 py-24 min-h-screen flex items-center"
        >
          <div className="max-w-6xl mx-auto bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden">
            <div className="relative h-[70vh]">
              <div className="absolute inset-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
              </div>
              
              <div className="absolute inset-0 p-12 flex flex-col justify-between text-white">
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-sm font-light mb-2 opacity-80"
                  >
                    {project.id}
                  </motion.div>
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-6xl font-light mb-6"
                  >
                    {project.title}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl font-light opacity-90 max-w-2xl"
                  >
                    {project.description}
                  </motion.p>
                </div>
                <ProjectStats stats={project.stats} />
              </div>
            </div>

            <div className="p-12 text-white/90">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-2xl font-light mb-6">Project Details</h3>
                <p className="text-lg font-light leading-relaxed">
                  This state-of-the-art facility represents our commitment to sustainable technology infrastructure. 
                  Utilizing advanced {project.stats.energy.toLowerCase()} energy systems, we provide reliable and 
                  environmentally conscious solutions for {project.stats.industry.toLowerCase()} operations.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}