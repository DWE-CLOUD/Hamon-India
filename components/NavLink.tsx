"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { navItemHover } from "@/lib/animations"

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <motion.div
      whileHover="hover"
      variants={navItemHover}
    >
      <Link 
        href={href} 
        className="relative text-white/90 hover:text-white transition-colors duration-200"
      >
        <span className="relative z-10">{children}</span>
        <motion.span
          className="absolute bottom-0 left-0 w-0 h-[2px] bg-white"
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.2 }}
        />
      </Link>
    </motion.div>
  )
}