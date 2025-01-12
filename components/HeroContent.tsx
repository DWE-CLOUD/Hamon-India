"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { staggerContainer, heroText, heroButton } from "@/lib/animations"

export function HeroContent() {
  return (
    <motion.div 
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="relative z-10 container mx-auto px-4 pt-32"
    >
      <div className="max-w-4xl mt-20">
        <motion.h1 
          variants={heroText}
          className="text-6xl font-bold text-white leading-tight mb-6"
        >
          <motion.span 
            variants={heroText}
            className="block"
          >
            Cooling Power
          </motion.span>
          <motion.span 
            variants={heroText}
            className="block"
          >
            Engineering Your
          </motion.span>
          <motion.span 
            variants={heroText}
            className="block"
          >
            Tomorrow Today
          </motion.span>
        </motion.h1>
        
        <motion.p 
          variants={heroText}
          className="text-xl text-white/90 mb-8 max-w-2xl"
        >
          We Build Engineering Excellence Into Every Cooling Tower, Powering Industries And Shaping The Future Of Nations
        </motion.p>

        <motion.div variants={heroButton}>
          <Button 
            variant="outline" 
            size="lg"
            className="text-white border-white transition-all duration-200"
          >
            GET IT TOUCH +
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}