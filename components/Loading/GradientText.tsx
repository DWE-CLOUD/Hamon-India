"use client"

import { motion } from "framer-motion"

export function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ 
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{ 
        duration: 5,
        repeat: Infinity,
        ease: "linear"
      }}
      className="inline-block bg-gradient-to-r from-orange-500 via-pink-500 to-orange-500 text-transparent bg-clip-text bg-[length:200%_auto]"
      style={{
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
      }}
    >
      {children}
    </motion.span>
  )
}