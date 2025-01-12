"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { GradientLetter } from "./GradientLetter"

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [showCompanyName, setShowCompanyName] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [mainContent, setMainContent] = useState<HTMLElement | null>(null)

  const namasteLetters = "Namaste".split("")

  useEffect(() => {
    setIsMounted(true)
    const content = document.getElementById('main-content')
    setMainContent(content)
    if (content) content.style.display = 'none'

    setTimeout(() => setShowCompanyName(true), 2000)
    
    const timer = setTimeout(() => {
      setIsLoading(false)
      if (content) content.style.display = 'block'
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  if (!isMounted) return null

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Elegant white background with subtle patterns */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0.03, 0.06, 0.03],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900/10 via-transparent to-transparent"
            />
          </motion.div>
          
          <div className="relative text-center space-y-20">
            <AnimatePresence>
              {!showCompanyName && (
                <motion.div
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                  className="space-x-4"
                >
                  {namasteLetters.map((letter, index) => (
                    <GradientLetter 
                      key={index} 
                      letter={letter} 
                      index={index} 
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showCompanyName && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200,
                    damping: 20
                  }}
                  className="space-y-8"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="relative"
                  >
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
                      className="text-8xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 text-transparent bg-clip-text bg-[length:200%_auto] tracking-tight"
                    >
                      HAMON INDIA
                    </motion.span>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col items-center space-y-3"
                  >
                    <span className="text-3xl font-light text-gray-600">
                      Cooling Solutions
                    </span>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "140px" }}
                      transition={{ delay: 0.6, duration: 0.8 }}
                      className="h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent"
                    />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}