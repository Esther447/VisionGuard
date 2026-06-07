"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/animations";

const featured = [
  {
    label: "Web Design", title: "Sunrise Academy", year: "2024",
    desc: "Professional school website with enrollment system and CMS.",
    image: "/images/Hero.jpg", span: "lg:col-span-2 lg:row-span-2",
    height: "h-96 lg:h-full",
  },
  {
    label: "Digital System", title: "Chez Lando Booking", year: "2024",
    desc: "Real-time table reservation system with SMS.",
    image: "/images/Hero1.jpg", span: "", height: "h-52",
  },
  {
    label: "Branding", title: "GreenGrow Identity", year: "2023",
    desc: "Full brand identity for an agri-tech startup.",
    image: "/images/Hero.jpg", span: "", height: "h-52",
  },
];

export default function ProjectsFeatured() {
  return (
    <section className="bg-slate-950 py-16 px-6 md:px-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-slate-500 text-xs font-semibold uppercase tracking-[0.25em] block mb-1">Spotlight</span>
            <h2 className="text-white font-bold text-2xl md:text-3xl">Featured Projects</h2>
          </div>
          <a href="#all-projects" className="flex items-center gap-1.5 text-slate-400 hover:text-white text-xs font-semibold transition-colors duration-200">
            See all <ArrowUpRight size={13} />
          </a>
        </div>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-4 lg:min-h-[480px]">
          {featured.map(({ label, title, year, desc, image, span, height }) => (
            <StaggerItem key={title}>
              <motion.div
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.25 }}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-slate-900 border border-slate-800 hover:border-slate-600 transition-all duration-300 ${span} ${height} min-h-[200px]`}
              >
                <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-slate-900/70 backdrop-blur-sm border border-slate-700 text-slate-400 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest">
                    {label}
                  </span>
                </div>
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <h3 className="text-white font-bold text-base md:text-lg leading-tight">{title}</h3>
                    <p className="text-slate-400 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2 max-w-xs">{desc}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2 flex-shrink-0 ml-3">
                    <span className="text-slate-600 text-[10px]">{year}</span>
                    <motion.div
                      whileHover={{ rotate: 45 }}
                      transition={{ duration: 0.2 }}
                      className="w-8 h-8 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center shadow-lg"
                    >
                      <ArrowUpRight size={13} className="text-slate-900" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
