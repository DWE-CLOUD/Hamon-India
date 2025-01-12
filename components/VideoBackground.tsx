"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export function VideoBackground() {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.75
        }
    }, [])

    return (
        <div className="absolute inset-0 z-0">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"
            />

            <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                onLoadedData={() => setIsLoaded(true)}
                className={`absolute inset-0 w-full h-full object-cover`}
            >
                <source src="/hn.mp4" type="video/mp4" />
            </video>
        </div>
    )
}
