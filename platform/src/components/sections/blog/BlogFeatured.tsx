"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, User } from "lucide-react";
import { FadeUp } from "@/components/animations";

export default function BlogFeatured() {
  return (
    <section className="bg-slate-950 py-16 px-6 md:px-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <FadeUp className="flex items-center justify-between mb-8 flex-wrap gap-3">
          <div>
            <span className="text-slate-500 text-xs font-semibold uppercase tracking-[0.25em] block mb-1">Editor's Pick</span>
            <h2 className="text-white font-bold text-2xl md:text-3xl">Featured Article</h2>
          </div>
        </FadeUp>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="group relative rounded-3xl overflow-hidden cursor-pointer bg-slate-900 border border-slate-800 hover:border-slate-600 transition-all duration-300"
          style={{ minHeight: 480 }}
        >
          <img src="/images/Hero.jpg" alt="Featured post" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-55 group-hover:scale-105 transition-all duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/98 via-slate-950/50 to-transparent" />

          <div className="absolute top-6 left-6 flex gap-2">
            <span className="bg-white text-slate-900 text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest">Featured</span>
            <span className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 text-slate-300 text-[10px] font-semibold px-3 py-1.5 rounded-full">Digital Growth</span>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="flex flex-wrap gap-4 text-slate-500 text-xs mb-4">
              <span className="flex items-center gap-1.5"><User size={11} /> Ngabi Blackiane</span>
              <span className="flex items-center gap-1.5"><Clock size={11} /> 8 min read</span>
              <span>March 15, 2025</span>
            </div>
            <h3 className="text-white font-black text-2xl sm:text-3xl md:text-4xl leading-tight max-w-3xl">
              Why 90% of Small Businesses in Rwanda Are Losing Customers Because of Their Online Presence
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mt-4 max-w-2xl">
              We analysed 200 local businesses across Kigali and found a shocking pattern — most are invisible online while their competitors capture every customer searching for their services.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className="group/btn inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-semibold px-6 py-3 rounded-full text-sm transition-colors duration-200"
              >
                Read Article
                <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
