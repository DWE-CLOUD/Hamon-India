"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Leaf, Lightbulb, Recycle, Users } from "lucide-react"

const values = [
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Committed to environmental stewardship in everything we do"
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Pushing boundaries to create cutting-edge solutions"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working together to achieve extraordinary results"
  },
  {
    icon: Recycle,
    title: "Efficiency",
    description: "Optimizing resources for maximum impact"
  }
]

export function AboutValues() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <span className="text-sm uppercase tracking-[0.2em] text-gray-500 font-light">
            OUR VALUES
          </span>
          <h2 className="text-5xl font-light mt-6 mb-8 leading-tight">
            What drives us forward
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <value.icon className="w-12 h-12 text-gray-800 mb-6" />
              <h3 className="text-2xl font-light mb-4">{value.title}</h3>
              <p className="text-gray-600 font-light">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}