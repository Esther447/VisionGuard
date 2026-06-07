"use client";
import { motion } from "framer-motion";

export default function ProjectsHero() {
  return (
    <section className="relative bg-slate-900 overflow-hidden">
      <div className="absolute inset-0">
        <img src="/images/Hero.jpg" alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900" />
      </div>

      {/* grid pattern */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{backgroundImage:"linear-gradient(rgba(255,255,255,.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.3) 1px,transparent 1px)",backgroundSize:"60px 60px"}}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-28 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/8 border border-white/10 backdrop-blur-sm text-slate-300 text-xs font-semibold px-4 py-2 rounded-full mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          120+ Projects Delivered
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-white font-black text-6xl sm:text-7xl md:text-8xl leading-[0.95] tracking-tight"
        >
          Our <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">
            Projects.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-7 text-slate-400 text-lg leading-relaxed max-w-lg"
        >
          Real businesses, real results. Every project is a partnership built on trust, creativity, and a shared goal of growth.
        </motion.p>

        {/* stat row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-12 flex flex-wrap gap-10 border-t border-slate-700/60 pt-10"
        >
          {[["120+","Projects Delivered"],["6","Industries Served"],["100%","Client Satisfaction"],["5+","Years Experience"]].map(([val, label]) => (
            <div key={label}>
              <p className="text-4xl font-black text-white leading-none">{val}</p>
              <p className="text-slate-500 text-xs mt-1.5 font-medium">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
