"use client"

import { motion } from "framer-motion"

export function AboutHero() {
  return (
    <div className="min-h-[80vh] flex items-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
          alt="About Hero"
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
          ABOUT US
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-7xl font-light text-white mt-8 mb-8 leading-tight max-w-4xl"
        >
            A leading provider of industrial cooling solutions
        </motion.h1>
      </div>
    </div>
  )
}