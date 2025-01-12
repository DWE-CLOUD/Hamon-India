"use client"

import { motion } from "framer-motion"

interface Stats {
  capacity: string
  industry: string
  location: string
  energy: string
}

export function ProjectStats({ stats }: { stats: Stats }) {
  return (
    <div className="grid grid-cols-2 gap-6 mt-8">
      {Object.entries(stats).map(([key, value], index) => (
        <motion.div
          key={key}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + index * 0.1 }}
          className="backdrop-blur-md bg-black/10 rounded-xl p-4 border border-white/10"
        >
          <div className="text-sm text-white/70 uppercase mb-1">{key}</div>
          <div className="font-light text-white text-lg">{value}</div>
        </motion.div>
      ))}
    </div>
  )
}