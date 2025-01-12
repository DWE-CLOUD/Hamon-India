"use client"

import { motion } from "framer-motion"

interface GradientLetterProps {
  letter: string
  index: number
}

export function GradientLetter({ letter, index }: GradientLetterProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      className="inline-block relative"
    >
      <motion.span
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ 
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "linear",
          delay: index * 0.1
        }}
        className="inline-block text-9xl font-bold bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 text-transparent bg-clip-text bg-[length:200%_auto]"
        style={{
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}
      >
        {letter}
      </motion.span>
    </motion.span>
  )
}