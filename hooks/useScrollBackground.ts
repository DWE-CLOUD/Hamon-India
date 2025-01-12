"use client"

import { useState, useEffect } from 'react'

export function useScrollBackground() {
  const [scrolled, setScrolled] = useState(false)
  const [isOverWhite, setIsOverWhite] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 20)
      
      // Check if we've scrolled past the hero section
      const heroSection = document.querySelector('.hero-section')
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom
        setIsOverWhite(heroBottom < 0)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { scrolled, isOverWhite }
}