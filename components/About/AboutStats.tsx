"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const stats = [
  { number: "100+", label: "Global Partners" },
  { number: "95%", label: "Clean Energy Usage" },
  { number: "24/7", label: "Support Available" },
  { number: "50+", label: "Countries Served" }
]

export function AboutStats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-32 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl font-light mb-4">{stat.number}</div>
              <div className="text-lg text-gray-400 font-light">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}