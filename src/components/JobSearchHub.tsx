'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface JobSearchHubProps {
  isDark: boolean;
}

export function JobSearchHub({ isDark }: JobSearchHubProps) {
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const [isReducedMotion, setIsReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setIsReducedMotion(mediaQuery.matches)

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsReducedMotion(event.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  const handleTypingComplete = () => {
    setIsTypingComplete(true)
  }

  const handleStartSearch = () => {
    const howToSection = document.getElementById('how-to-section')
    if (howToSection) {
      howToSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className={`min-h-screen flex justify-center items-center ${
      isDark 
        ? 'bg-gradient-to-br from-[#2d3748] to-[#1a1a2e]' 
        : 'bg-gradient-to-br from-[#667eea] to-[#764ba2]'
    }`}>
      <main className="flex flex-col items-center justify-center w-full max-w-[800px] p-5 text-center pb-32">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 1.5
          }}
          className="mb-8"
        >
          <motion.div
            animate={{ 
              rotateX: [0, 360],
            }}
            transition={{
              duration: 2.5,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop"
            }}
            style={{ 
              transformStyle: "preserve-3d",
              perspective: "1000px"
            }}
            className="w-[100px] h-[100px] relative"
          >
            <img
              src="https://i.postimg.cc/MHY0z4Zz/Google-G-logo-svg.png"
              alt="Google Logo"
              className={`w-full h-full object-contain drop-shadow-2xl ${
                isDark ? 'brightness-95' : ''
              }`}
              style={{ 
                backfaceVisibility: "hidden",
                position: "absolute",
                top: 0,
                left: 0
              }}
            />
            <div 
              className={`w-full h-full rounded-full ${
                isDark ? 'bg-gray-800' : 'bg-white'
              } absolute top-0 left-0`}
              style={{ 
                transform: 'rotateX(180deg)',
                backfaceVisibility: "hidden"
              }}
            />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.5,
            duration: 0.8,
            ease: [0.21, 1.02, 0.73, 0.99]
          }}
          className="text-[clamp(32px,6vw,48px)] font-bold text-white mb-8 tracking-tight"
        >
          Job Search Hub
        </motion.h1>

        <motion.button
          className="group relative px-10 py-4 text-lg font-medium text-white bg-white/10 backdrop-blur-md border border-white/30 rounded-full overflow-hidden transition-colors hover:bg-white/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.7,
            duration: 0.8,
            ease: [0.21, 1.02, 0.73, 0.99]
          }}
          onClick={handleStartSearch}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.span 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "linear",
              repeatDelay: 0.5
            }}
          />
          <span className="relative flex items-center gap-2 px-2">
            Find your dream job ✨
          </span>
        </motion.button>

        <motion.div
          className="absolute bottom-16 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="white" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="opacity-80"
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </motion.svg>
        </motion.div>
      </main>
    </div>
  )
} 