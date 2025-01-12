"use client"

import { motion } from "framer-motion"
import { ContactForm } from "./ContactForm"
import { ContactInfo } from "./ContactInfo"

export function ContactSection() {
  return (
    <section className="py-32 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-sm uppercase tracking-[0.2em] text-white/60 font-light">
            GET IN TOUCH
          </span>
          <h2 className="text-5xl font-light text-white mt-6 mb-8">
            Let's Build Something Great Together
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  )
}