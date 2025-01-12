"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"
import { Button } from "../ui/button"

export function ContactForm() {
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setSending(false)
    setSent(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-3xl" />
      
      <form onSubmit={handleSubmit} className="relative p-8 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-light text-white/80">Name</label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-200"
              placeholder="John Doe"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-light text-white/80">Email</label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-200"
              placeholder="john@example.com"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-light text-white/80">Message</label>
            <textarea
              required
              rows={4}
              className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-200 resize-none"
              placeholder="Tell us about your project..."
            />
          </div>
        </div>

        <Button
          type="submit"
          disabled={sending || sent}
          className="w-full bg-white text-gray-900 hover:bg-white/90 transition-all duration-200"
        >
          {sending ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center space-x-2"
            >
              <span>Sending</span>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <Send className="w-4 h-4" />
              </motion.div>
            </motion.div>
          ) : sent ? (
            "Message Sent!"
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </motion.div>
  )
}