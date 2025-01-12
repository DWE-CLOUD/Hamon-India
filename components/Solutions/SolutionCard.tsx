"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Expand } from "lucide-react"

interface SolutionCardProps {
  title: string
  image: string
  link: string
  expandIcon?: boolean
  delay?: number
}

export function SolutionCard({ title, image, link, expandIcon = false, delay = 0 }: SolutionCardProps) {
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
        
        {expandIcon && (
          <div className="absolute top-4 right-4 z-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: delay + 0.3 }}
              className="bg-white/10 backdrop-blur-md p-2 rounded-lg"
            >
              <Expand className="w-4 h-4 text-white" />
            </motion.div>
          </div>
        )}

        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center z-10"
        >
          <h3 className="text-2xl font-light text-white mb-4 transform translate-y-8 transition-all duration-300 group-hover:translate-y-0">
            {title}
          </h3>
          <span className="text-white/0 transform translate-y-4 transition-all duration-300 group-hover:translate-y-0 group-hover:text-white/80">
            Learn More →
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