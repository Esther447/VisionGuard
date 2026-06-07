"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Clock, User } from "lucide-react";
import { FadeUp } from "@/components/animations";

const categories = ["All", "Digital Growth", "Web Design", "SEO", "Business Tips", "Training"];

const posts = [
  {
    id: 1, category: "Digital Growth", readTime: "8 min", date: "Mar 15, 2025",
    author: "Ngabi Blackiane", image: "/images/Hero.jpg",
    title: "Why 90% of Small Businesses Are Invisible Online",
    excerpt: "We analysed 200 local businesses and found a shocking pattern — most are losing customers to competitors who simply show up online.",
  },
  {
    id: 2, category: "Web Design", readTime: "5 min", date: "Mar 8, 2025",
    author: "Alice Uwimana", image: "/images/Hero1.jpg",
    title: "5 Website Mistakes That Are Costing You Clients",
    excerpt: "From slow loading times to missing contact forms — these are the most common mistakes we fix on client websites every week.",
  },
  {
    id: 3, category: "SEO", readTime: "6 min", date: "Feb 28, 2025",
    author: "Patrick Nkurunziza", image: "/images/Hero.jpg",
    title: "How to Get Your Business on Page 1 of Google in Rwanda",
    excerpt: "A practical step-by-step guide to local SEO — from Google Business Profile to keyword research, written for non-technical business owners.",
  },
  {
    id: 4, category: "Business Tips", readTime: "4 min", date: "Feb 20, 2025",
    author: "Ngabi Blackiane", image: "/images/Hero1.jpg",
    title: "The Real Cost of Not Having a Website in 2025",
    excerpt: "Running a business without a website in 2025 is like having a shop with no sign. Here's what it's actually costing you.",
  },
  {
    id: 5, category: "Training", readTime: "7 min", date: "Feb 12, 2025",
    author: "Grace Mukamana", image: "/images/Hero.jpg",
    title: "From Student to Developer: Our Intern Alumni Stories",
    excerpt: "We spoke to 5 graduates of our training program — here's how they went from zero experience to landing their first tech jobs.",
  },
  {
    id: 6, category: "Web Design", readTime: "5 min", date: "Feb 5, 2025",
    author: "Alice Uwimana", image: "/images/Hero1.jpg",
    title: "What Makes a Great Business Website in 2025",
    excerpt: "Speed, trust signals, clear CTAs, and mobile-first design — the four pillars of a website that actually converts visitors into customers.",
  },
  {
    id: 7, category: "Digital Growth", readTime: "6 min", date: "Jan 28, 2025",
    author: "Patrick Nkurunziza", image: "/images/Hero.jpg",
    title: "How We Helped a Restaurant Get 200% More Bookings",
    excerpt: "A case study of how a simple digital system transformed Chez Lando's reservation process and nearly tripled their weekly bookings.",
  },
  {
    id: 8, category: "Business Tips", readTime: "4 min", date: "Jan 20, 2025",
    author: "Ngabi Blackiane", image: "/images/Hero1.jpg",
    title: "Why Your Brand Matters More Than Your Product",
    excerpt: "In a crowded market, the businesses that win aren't always the best — they're the most trusted. Here's how to build that trust online.",
  },
];

export default function BlogGrid() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? posts : posts.filter(p => p.category === active);

  return (
    <section className="bg-slate-950 py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <FadeUp className="mb-10">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h2 className="text-white font-bold text-2xl md:text-3xl">All Articles</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <motion.button
                  key={cat}
                  onClick={() => setActive(cat)}
                  whileTap={{ scale: 0.94 }}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                    active === cat
                      ? "bg-white text-slate-900 shadow-lg"
                      : "bg-slate-800 text-slate-400 border border-slate-700 hover:border-slate-500 hover:text-white"
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </div>
        </FadeUp>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {filtered.map((post, i) => (
              <motion.article
                key={post.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -5 }}
                className="group bg-slate-900 border border-slate-800 hover:border-slate-600 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 flex flex-col"
              >
                {/* image */}
                <div className="relative h-44 overflow-hidden flex-shrink-0">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm border border-slate-700 text-slate-300 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest">
                    {post.category}
                  </span>
                </div>

                {/* content */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-slate-600 text-[10px] mb-3">
                    <span className="flex items-center gap-1"><Clock size={9} />{post.readTime}</span>
                    <span>·</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-white font-bold text-sm leading-snug group-hover:text-slate-200 transition-colors flex-1">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed mt-2 line-clamp-2">{post.excerpt}</p>

                  <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-white text-[9px] font-black">
                        {post.author.charAt(0)}
                      </div>
                      <span className="text-slate-500 text-[10px]">{post.author.split(" ")[0]}</span>
                    </div>
                    <motion.div
                      whileHover={{ rotate: 45 }}
                      transition={{ duration: 0.2 }}
                      className="w-7 h-7 rounded-full bg-slate-800 border border-slate-700 group-hover:bg-white group-hover:border-white flex items-center justify-center transition-all duration-300"
                    >
                      <ArrowUpRight size={12} className="text-slate-400 group-hover:text-slate-900 transition-colors duration-300" />
                    </motion.div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
