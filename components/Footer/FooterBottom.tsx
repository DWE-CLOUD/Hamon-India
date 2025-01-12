"use client"

import { motion } from "framer-motion"
import { Wind } from "lucide-react"
import Link from "next/link"

export function FooterBottom() {
  return (
    <div className="border-t border-white/10 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2"
        >
          <Wind className="h-6 w-6 text-white" />
          <span className="text-white text-xl font-light">Hamon Cooling India</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex space-x-6 text-sm text-gray-400"
        >
          <Link href="/privacy" className="hover:text-white transition-colors duration-200">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white transition-colors duration-200">
            Terms of Service
          </Link>
          <Link href="/cookies" className="hover:text-white transition-colors duration-200">
            Cookie Policy
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-gray-400 font-light"
        >
          © 2024 Hamon Cooling India. All rights reserved.
        </motion.div>
      </div>
    </div>
  )
}