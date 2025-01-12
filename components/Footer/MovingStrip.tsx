"use client"

import { motion } from "framer-motion"

const companies = [
  "Oracle", "Vodafone", "Telefonica", "TalkTalk", 
  "T-Mobile", "HP", "Cisco", "Microsoft",
  "Oracle", "Vodafone", "Telefonica", "TalkTalk" // Repeated for continuous scroll
]

export function MovingStrip() {
  return (
    <div className="bg-gray-900 py-8 overflow-hidden">
      <motion.div
        animate={{
          x: [0, -2000],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="flex space-x-12 whitespace-nowrap"
      >
        {companies.map((company, index) => (
          <span 
            key={`${company}-${index}`}
            className="text-white/60 text-xl font-light"
          >
            {company}
          </span>
        ))}
      </motion.div>
    </div>
  )
}