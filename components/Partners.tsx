"use client"

import { motion } from "framer-motion"
import { partnersContainer, partnerLogo } from "@/lib/animations"

export function Partners() {
  const partners = [
    { name: "Adani", image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Adani-power-logo.png" },
    { name: "Indian Oil", image: "https://companieslogo.com/img/orig/IOC.NS-081204c8.png?t=1727429249" },
    { name: "Reliance", image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Reliance_Industries_Logo.svg/640px-Reliance_Industries_Logo.svg.png" },
    { name: "L&T", image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/L%26T.png" },
    { name: "JSW", image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/JSW_Group_logo.svg/220px-JSW_Group_logo.svg.png" },
    { name: "GAIL", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/GAIL.svg/1200px-GAIL.svg.png" },
    { name: "NTPC", image: "https://upload.wikimedia.org/wikipedia/commons/2/27/National_Thermal_Power_logo.svg" },
    { name: "BHEL", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/BHEL_logo.svg/1200px-BHEL_logo.svg.png" }
  ]

  return (
    <motion.div 
      variants={partnersContainer}
      initial="initial"
      animate="animate"
      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent py-8"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between space-x-8 overflow-x-auto">
          {partners.map((partner) => (
            <motion.img
              key={partner.name}
              variants={partnerLogo}
              whileHover="hover"
              src={partner.image}
              alt={partner.name}
              className="h-14 w-auto object-contain filter brightness-0 invert"
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}