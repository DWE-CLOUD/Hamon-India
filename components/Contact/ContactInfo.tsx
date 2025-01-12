"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["Plot No. 1, Industrial Area", "Phase II, New Delhi 110020", "India"]
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 11 2222 3333", "Monday - Friday: 9AM to 6PM"]
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@hamoncooling.in", "support@hamoncooling.in"]
  }
]

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="space-y-12"
    >
      {contactInfo.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="flex space-x-6"
        >
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl h-fit">
            <item.icon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-light text-white mb-4">{item.title}</h3>
            {item.details.map((detail, i) => (
              <p key={i} className="text-white/70 font-light">{detail}</p>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}