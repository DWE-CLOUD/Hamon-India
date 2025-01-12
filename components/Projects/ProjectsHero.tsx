"use client"

import { motion } from "framer-motion"

export function ProjectsHero() {
  return (
    <div className="min-h-[80vh] flex items-center relative overflow-hidden bg-gray-900">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        <img
          src="https://images.unsplash.com/photo-1487875961445-47a00398c267?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
          alt="Projects Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm uppercase tracking-[0.2em] text-white/80 font-light"
        >
          OUR PROJECTS
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-7xl font-light text-white mt-8 mb-8 leading-tight max-w-4xl"
        >
          Transforming industries through sustainable infrastructure
        </motion.h1>
      </div>
    </div>
  )
}