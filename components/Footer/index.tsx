"use client"

import { MovingStrip } from "./MovingStrip"
import { FooterLinks } from "./FooterLinks"
import { FooterBottom } from "./FooterBottom"

export function Footer() {
  return (
    <footer className="bg-gray-900">
      <MovingStrip />
      <div className="container mx-auto px-4">
        <FooterLinks />
        <FooterBottom />
      </div>
    </footer>
  )
}