"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Linkedin, Twitter } from "lucide-react"

const team = [
  {
    name: "Sarah Chen",
    role: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
  },
  {
    name: "Michael Rodriguez",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
  },
  {
    name: "Emma Thompson",
    role: "Head of Sustainability",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
  }
]

export function AboutTeam() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <span className="text-sm uppercase tracking-[0.2em] text-gray-500 font-light">
            OUR TEAM
          </span>
          <h2 className="text-5xl font-light mt-6 mb-8 leading-tight">
            Meet our leadership
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-[3/4] object-cover transform scale-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-full group-hover:translate-y-0 transition-all duration-300">
                  <div className="flex space-x-4">
                    <Twitter className="w-5 h-5 cursor-pointer hover:text-gray-300" />
                    <Linkedin className="w-5 h-5 cursor-pointer hover:text-gray-300" />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-light mb-2">{member.name}</h3>
              <p className="text-gray-600 font-light">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}