"use client";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations";
import { motion } from "framer-motion";

const values = [
  { num: "01", title: "Responsibility", desc: "Each member owns their role. We take accountability seriously and deliver on our commitments to clients and each other." },
  { num: "02", title: "Collaboration", desc: "We work as a unified team. Every project benefits from the combined expertise of leadership, engineering, and marketing." },
  { num: "03", title: "Growth", desc: "Continuous learning and improvement are core to who we are. We stay ahead so our clients always get modern, relevant solutions." },
  { num: "04", title: "Innovation", desc: "We build impactful and modern solutions — from AI-powered platforms to IoT systems — that solve real problems." },
  { num: "05", title: "Professionalism", desc: "Every website, system, and tool we deliver is crafted with care, tested thoroughly, and built to the highest standard." },
  { num: "06", title: "Real Impact", desc: "We measure success by how much our clients grow. We build long-term partnerships, not one-off transactions." },
];

export default function AboutValues() {
  return (
    <section className="bg-slate-50 py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <FadeUp className="text-center mb-16">
          <span className="text-slate-500 text-xs font-semibold uppercase tracking-[0.25em] block mb-3">What Drives Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800">Our Core Values</h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="w-12 h-1 bg-slate-700 rounded-full" />
            <div className="w-3 h-1 bg-slate-400 rounded-full" />
            <div className="w-1.5 h-1 bg-slate-300 rounded-full" />
          </div>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map(({ num, title, desc }) => (
            <StaggerItem key={num}>
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 16px 40px rgba(0,0,0,0.08)" }}
                transition={{ duration: 0.2 }}
                className="relative bg-white rounded-2xl p-7 border border-slate-100 overflow-hidden group"
              >
                <span className="absolute top-4 right-5 text-7xl font-black text-slate-50 group-hover:text-slate-100 transition-colors leading-none select-none">
                  {num}
                </span>
                <div className="relative z-10">
                  <div className="w-8 h-1 bg-slate-700 rounded-full mb-5" />
                  <h3 className="text-slate-800 font-bold text-lg mb-2">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
