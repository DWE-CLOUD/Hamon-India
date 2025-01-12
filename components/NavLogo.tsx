"use client"

import { Wind } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { logoSpin } from "@/lib/animations"

export function NavLogo() {
  return (
    <Link href="/" className="flex items-center space-x-2 text-white">
      <motion.div
        whileHover="hover"
        variants={logoSpin}
      >
        <Wind className="h-6 w-6" />
      </motion.div>
      <span className="text-xl font-semibold">the be company</span>
    </Link>
  )
}