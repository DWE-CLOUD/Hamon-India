"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function AboutMission() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm uppercase tracking-[0.2em] text-gray-500 font-light">
              OUR MISSION
            </span>
            <h2 className="text-5xl font-light mt-6 mb-8 leading-tight">
              Building a sustainable future through clean energy innovation
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              We're committed to revolutionizing the technology infrastructure landscape 
              by providing sustainable, efficient, and scalable solutions powered by 
              clean energy. Our mission is to enable businesses to thrive while 
              minimizing their environmental impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative h-[600px] rounded-2xl overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
              alt="Clean Energy"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}