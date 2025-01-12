"use client"

import { motion } from "framer-motion"
import Link from "next/link"

interface IndustryCardProps {
  title: string
  image: string
  link: string
  delay?: number
}

export function IndustryCard({ title, image, link, delay = 0 }: IndustryCardProps) {
  return (
    <Link href={link}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay }}
        className="group relative overflow-hidden rounded-2xl h-[400px]"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 transition-all duration-500 group-hover:from-black/40 group-hover:to-black/80" />
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
          className="absolute inset-0 flex flex-col justify-center items-center z-10"
        >
          <h3 className="text-3xl font-light text-white mb-4 transform translate-y-8 transition-all duration-300 group-hover:translate-y-0">
            {title}
          </h3>
          <span className="text-white/0 transform translate-y-4 transition-all duration-300 group-hover:translate-y-0 group-hover:text-white/80">
            View Details →
          </span>
        </motion.div>

        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform scale-100 transition-all duration-700 group-hover:scale-105"
        />
      </motion.div>
    </Link>
  )
}