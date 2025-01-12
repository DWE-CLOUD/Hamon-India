"use client"

import { motion } from "framer-motion"

interface ImageCardProps {
  title: string
  image: string
  description: string
  delay?: number
}

export function ImageCard({ title, image, description, delay = 0 }: ImageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      className="group relative overflow-hidden rounded-2xl"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 transition-all duration-500 group-hover:from-black/40 group-hover:to-black/80" />
      
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
        className="absolute bottom-8 left-8 right-8 z-10"
      >
        <h3 className="text-2xl font-light text-white mb-4">{title}</h3>
        <p className="text-white/80 font-light transform translate-y-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          {description}
        </p>
      </motion.div>

      <img 
        src={image} 
        alt={title}
        className="w-full h-[600px] object-cover transform scale-100 transition-all duration-700 group-hover:scale-105"
      />
    </motion.div>
  )
}