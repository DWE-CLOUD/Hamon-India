"use client"

import { Wind } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "./ui/button"
import { useScrollBackground } from "@/hooks/useScrollBackground"
import { usePathname } from "next/navigation"

const navVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    }
  }
}

const linkVariants = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 }
  }
}

export function Navbar() {
  const { scrolled, isOverWhite } = useScrollBackground()
  const pathname = usePathname()

  const navClasses = `navbar-glass ${scrolled ? 'scrolled' : ''}`
  const textColor = (isOverWhite || pathname !== "/") ? 'text-gray-800' : 'text-white'
  const textColorWithOpacity = (isOverWhite || pathname !== "/") ? 'text-gray-600' : 'text-white/90'

  const navItems = ['Home', 'About', 'Solutions', 'Projects', 'Industries']

  return (
    <div className="navbar-container">
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className={navClasses}
      >
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/" className={`flex items-center space-x-2 ${textColor}`}>
                <Wind className="h-6 w-6" />
                <span className="text-xl font-light">Hamon Cooling India</span>
              </Link>
            </motion.div>

            <div className="flex items-center space-x-2">
              <AnimatePresence>
                {navItems.map((item) => (
                  <motion.div
                    key={item}
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    <Link
                      href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                      className={`
                        nav-link ${textColorWithOpacity}
                        ${pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`) ? 'active' : ''}
                      `}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  variant="ghost"
                  className={`nav-button ${textColor} ml-4`}
                >
                  GET IN TOUCH
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>
    </div>
  )
}