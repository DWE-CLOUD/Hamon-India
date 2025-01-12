"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function AboutHeader() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div ref={ref} className="py-24">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-sm uppercase tracking-[0.2em] text-gray-500 font-light"
      >
        WHO WE ARE
      </motion.span>
      
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-6xl font-light mt-8 mb-8 leading-tight max-w-4xl"
      >
          A leading provider of industrial cooling solutions
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-xl text-gray-500 max-w-3xl font-light leading-relaxed"
      >
          We are specialist manufacturers of Cooling Towers with 50 years of excellence in India, delivering comprehensive solutions for power-intensive industries. Our core competencies include design, manufacturing, and turnkey project execution of large-scale Mechanical Draft Cooling Towers. From RCC to FRP towers, we serve diverse sectors including Power, Oil & Gas, and Petrochemicals
      </motion.p>
    </div>
  )
}