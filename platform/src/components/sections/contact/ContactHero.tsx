"use client";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative bg-slate-900 overflow-hidden py-28 md:py-36">
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.4) 1px,transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-slate-700/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/8 border border-white/10 text-slate-300 text-xs font-semibold px-4 py-2 rounded-full mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          We respond within 24 hours
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-white font-black text-6xl sm:text-7xl md:text-8xl leading-[0.95] tracking-tight"
        >
          Get in{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">
            Touch.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="mt-6 text-slate-400 text-lg leading-relaxed max-w-xl mx-auto"
        >
          Have a project in mind or just want to explore what's possible? We'd
          love to hear from you.
        </motion.p>
      </div>
    </section>
  );
}
