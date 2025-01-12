"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"

export function ImageGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div ref={ref} className="grid grid-cols-2 gap-8 my-20">
      <Link href="/solutions">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="group relative overflow-hidden rounded-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 transition-all duration-500 group-hover:from-black/40 group-hover:to-black/80" />
          
          <motion.div
            className="absolute inset-0 flex flex-col justify-center items-center z-10"
          >
            <span className="text-3xl font-light text-white transform translate-y-8 transition-all duration-300 group-hover:translate-y-0">
              Solutions
            </span>
            <span className="text-white/0 transform translate-y-4 transition-all duration-300 group-hover:translate-y-0 group-hover:text-white/80">
              View Solutions →
            </span>
          </motion.div>

          <img 
            src="https://images.unsplash.com/photo-1589276944686-5c1c3a755c93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
            alt="Hydroelectric dam"
            className="w-full h-[600px] object-cover transform scale-100 transition-all duration-700 group-hover:scale-105"
          />
        </motion.div>
      </Link>

      <Link href="/about">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="group relative overflow-hidden rounded-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 transition-all duration-500 group-hover:from-black/40 group-hover:to-black/80" />
          
          <motion.div
            className="absolute inset-0 flex flex-col justify-center items-center z-10"
          >
            <span className="text-3xl font-light text-white transform translate-y-8 transition-all duration-300 group-hover:translate-y-0">
              About Us
            </span>
            <span className="text-white/0 transform translate-y-4 transition-all duration-300 group-hover:translate-y-0 group-hover:text-white/80">
              Learn More →
            </span>
          </motion.div>

          <img 
            src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
            alt="Wind turbine in fog"
            className="w-full h-[600px] object-cover transform scale-100 transition-all duration-700 group-hover:scale-105"
          />
        </motion.div>
      </Link>
    </div>
  )
}