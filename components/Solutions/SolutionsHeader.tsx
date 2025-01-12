"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function SolutionsHeader() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div ref={ref} className="mb-20">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-sm uppercase tracking-[0.2em] text-gray-500 font-light"
      >
        SOLUTIONS
      </motion.span>
      
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-6xl font-light mt-8 mb-8 leading-tight max-w-4xl"
      >
        Accelerating technological innovation, powered by clean energy
      </motion.h2>
    </div>
  )
}