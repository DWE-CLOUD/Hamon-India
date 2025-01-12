"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const links = {
  Solutions: [
    { name: "Data Centers", href: "/solutions/data-centers" },
    { name: "Smart Infrastructure", href: "/solutions/smart-infrastructure" },
    { name: "Clean Energy", href: "/solutions/clean-energy" }
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" }
  ],
  Resources: [
    { name: "Blog", href: "/blog" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Documentation", href: "/docs" }
  ]
}

export function FooterLinks() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-20">
      {Object.entries(links).map(([category, items], index) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <h3 className="text-white text-xl font-light mb-6">{category}</h3>
          <ul className="space-y-4">
            {items.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200 font-light"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  )
}