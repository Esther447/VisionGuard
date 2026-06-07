"use client";
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

function Hero() {
  return (
    <div className="relative w-full">
      <div className="relative bg-[url('/images/Hero.jpg')] bg-cover bg-center min-h-[500px] h-[70vh] md:h-screen">

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40" />

        {/* Content */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center px-6 md:px-16 lg:px-24">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-slate-300 text-sm font-semibold tracking-[0.2em] uppercase mb-4"
          >
            Digital Solutions Company
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl"
          >
            Your Business,{" "}
            <br className="hidden sm:block" />
            <span className="text-slate-300">Seen Online.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed"
          >
            VisionGuard helps businesses become visible, trusted, and competitive
            in the digital world — through modern websites, smart systems, and
            tools built for real growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-800 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200 text-sm"
            >
              Start Your Project
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
            </motion.a>
            <motion.a
              href="/projects"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center border border-white/40 hover:border-white text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200 text-sm backdrop-blur-sm"
            >
              Explore Our Work
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-white/50 text-xs hidden md:flex"
        >
          <span>Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-white/30"
          />
        </motion.div>

      </div>
    </div>
  )
}

export default Hero
