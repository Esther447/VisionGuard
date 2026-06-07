"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, Globe, Code2, BarChart3, GraduationCap, Megaphone, Layers, CheckCircle, Calendar, User, Tag } from "lucide-react";
import { FadeUp } from "@/components/animations";

const categories = ["All", "Web Design", "Digital System", "Branding", "SEO", "Training"];

type Project = {
  id: number; title: string; client: string; category: string; year: string;
  tags: string[]; desc: string; longDesc: string; image: string; image2: string;
  size: string; results: string[]; duration: string; role: string;
};

const projects: Project[] = [
  {
    id: 1, title: "Sunrise Academy Website", client: "Sunrise Academy",
    category: "Web Design", year: "2024", size: "large",
    tags: ["Next.js", "Tailwind", "CMS"],
    image: "/images/Hero.jpg", image2: "/images/Hero1.jpg",
    desc: "A professional school website with online enrollment, staff profiles, and news sections.",
    longDesc: "We designed and developed a full school platform for Sunrise Academy — one of Kigali's growing private schools. The project included a custom CMS for staff to manage content, an online enrollment form, a news and events section, and a gallery. The design focused on building trust with parents through a clean, professional aesthetic.",
    results: ["3x increase in enrollment inquiries","Featured on Rwanda Education Board","Fully manageable by school staff","Loads in under 2 seconds"],
    duration: "4 weeks", role: "Design + Development",
  },
  {
    id: 2, title: "Restaurant Booking System", client: "Chez Lando Kigali",
    category: "Digital System", year: "2024", size: "small",
    tags: ["React", "Node.js", "DB"],
    image: "/images/Hero1.jpg", image2: "/images/Hero.jpg",
    desc: "Table reservation system with real-time availability and SMS confirmation.",
    longDesc: "Built a custom reservation platform for one of Kigali's most popular restaurants. The system handles real-time table availability, customer notifications via SMS, admin dashboard for reservation management, and a public-facing booking widget embedded on their website.",
    results: ["Zero double-bookings since launch","40% reduction in phone calls","Full admin control dashboard","SMS confirmations automated"],
    duration: "3 weeks", role: "Full-Stack Development",
  },
  {
    id: 3, title: "Brand Identity & Website", client: "GreenGrow Rwanda",
    category: "Branding", year: "2023", size: "small",
    tags: ["Figma", "Branding", "Web"],
    image: "/images/Hero.jpg", image2: "/images/Hero1.jpg",
    desc: "Complete digital identity for an agri-tech startup — logo, colours, and a modern landing page.",
    longDesc: "GreenGrow came to us with no digital presence and a vague idea of their brand. We ran a brand discovery workshop, developed their visual identity system (logo, color palette, typography), and built a modern landing page that successfully attracted their first round of investor interest.",
    results: ["Secured seed funding within 60 days","Brand recognized at Rwanda Agri-Tech Expo","Consistent identity across all platforms","Logo trademarked"],
    duration: "3 weeks", role: "Branding + Web Design",
  },
  {
    id: 4, title: "Google Visibility Campaign", client: "Nyamirambo Auto Parts",
    category: "SEO", year: "2023", size: "small",
    tags: ["SEO", "Google Maps", "Analytics"],
    image: "/images/Hero1.jpg", image2: "/images/Hero.jpg",
    desc: "Took a local auto shop from invisible to page 1 of Google for 12 local search terms.",
    longDesc: "Nyamirambo Auto Parts had been operating for 10 years but had zero online presence. We set up and optimised their Google Business Profile, built local citation links, produced keyword-targeted content, and ran a 3-month SEO campaign that produced dramatic ranking improvements.",
    results: ["Page 1 for 12 local keywords","200% increase in website visits","Phone calls up 80% in 3 months","5-star Google rating established"],
    duration: "3 months ongoing", role: "SEO + Digital Strategy",
  },
  {
    id: 5, title: "Patient Portal System", client: "Kigali Health Centre",
    category: "Digital System", year: "2024", size: "large",
    tags: ["React", "Auth", "Dashboard"],
    image: "/images/Hero.jpg", image2: "/images/Hero1.jpg",
    desc: "Secure patient management portal with appointment scheduling and medical record access.",
    longDesc: "A fully secure healthcare portal allowing patients to book appointments, view test results, and communicate with doctors. The admin dashboard gives clinic staff full visibility over patient queues, appointment history, and billing. Built with role-based authentication and data encryption throughout.",
    results: ["500+ patients onboarded in month 1","70% fewer missed appointments","Paperwork reduced by 60%","Secure HIPAA-aligned architecture"],
    duration: "6 weeks", role: "Full-Stack + Security",
  },
  {
    id: 6, title: "Developer Training Cohort", client: "VisionGuard Program",
    category: "Training", year: "2024", size: "small",
    tags: ["Training", "Mentorship", "Careers"],
    image: "/images/Hero1.jpg", image2: "/images/Hero.jpg",
    desc: "20 students trained over 3 months — 18 landed jobs or launched freelance careers.",
    longDesc: "Our flagship internship cohort brought together 20 students from across Rwanda for an intensive 3-month program. They worked on real client projects, attended weekly workshops, and received 1-on-1 mentorship. The curriculum covered React, Next.js, Tailwind, Node.js, and professional practices.",
    results: ["18 out of 20 placed in jobs or freelance","Average salary increase of 180%","4 students launched their own agencies","Program rated 4.9/5 by participants"],
    duration: "3 months", role: "Curriculum + Mentorship",
  },
  {
    id: 7, title: "E-Commerce Fashion Store", client: "Amara Styles",
    category: "Web Design", year: "2023", size: "small",
    tags: ["Next.js", "Stripe", "CMS"],
    image: "/images/Hero.jpg", image2: "/images/Hero1.jpg",
    desc: "A full e-commerce experience for a Kigali-based fashion brand with 200+ products.",
    longDesc: "Amara Styles needed an online store to complement their physical boutique. We built a complete e-commerce solution with a product catalogue of 200+ items, Stripe payment integration, order management, inventory tracking, and a stunning design that matched their premium brand positioning.",
    results: ["RWF 8M revenue in first 3 months online","200+ products listed at launch","Order fulfillment automated","Featured in Kigali Fashion Week"],
    duration: "5 weeks", role: "Design + E-Commerce Dev",
  },
  {
    id: 8, title: "NGO Digital Presence", client: "Youth4Change Rwanda",
    category: "Web Design", year: "2023", size: "small",
    tags: ["WordPress", "Donations", "Blog"],
    image: "/images/Hero1.jpg", image2: "/images/Hero.jpg",
    desc: "Built a donation-enabled website helping a youth NGO reach global supporters.",
    longDesc: "Youth4Change needed a platform that could tell their story compellingly and accept international donations. We built a WordPress site with a donation gateway, volunteer sign-up system, impact stories section, and a blog. The site helped them reach supporters in 14 countries within 6 months.",
    results: ["Donations from 14 countries","500% increase in volunteer applications","Featured on UN Youth Rwanda page","Site loads in 1.4 seconds"],
    duration: "3 weeks", role: "Web Design + CMS",
  },
];

const iconMap: Record<string, React.ElementType> = {
  "Web Design": Globe, "Digital System": Code2,
  "Branding": Megaphone, "SEO": BarChart3, "Training": GraduationCap,
};

export default function ProjectsGrid() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = active === "All" ? projects : projects.filter(p => p.category === active);

  return (
    <>
      <section id="all-projects" className="bg-slate-950 py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="mb-12">
            {/* filter tabs */}
            <div className="flex items-center justify-between flex-wrap gap-4 mb-10">
              <h2 className="text-white font-bold text-3xl md:text-4xl">All Work</h2>
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {filtered.map((project, i) => {
                const CatIcon = iconMap[project.category] || Layers;
                const isLarge = project.size === "large";
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    onClick={() => setSelected(project)}
                    className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-slate-900 border border-slate-800 hover:border-slate-600 transition-all duration-300 ${isLarge ? "sm:col-span-2" : ""}`}
                    style={{ height: isLarge ? 420 : 300 }}
                    whileHover={{ y: -4 }}
                  >
                    {/* image */}
                    <img
                      src={project.image} alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-500 group-hover:scale-105"
                    />
                    {/* gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent" />

                    {/* category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 bg-slate-900/70 backdrop-blur-md border border-slate-700 text-slate-300 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                        <CatIcon size={9} />{project.category}
                      </span>
                    </div>

                    {/* year */}
                    <div className="absolute top-4 right-4">
                      <span className="text-slate-500 text-[10px] font-medium">{project.year}</span>
                    </div>

                    {/* content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1.5">{project.client}</p>
                      <h3 className="text-white font-bold text-lg md:text-xl leading-tight">{project.title}</h3>
                      <p className="text-slate-400 text-xs leading-relaxed mt-2 line-clamp-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        {project.desc}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="text-[10px] bg-slate-800/80 border border-slate-700 text-slate-400 px-2 py-0.5 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <motion.div
                          whileHover={{ rotate: 45 }}
                          transition={{ duration: 0.2 }}
                          className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
                        >
                          <ArrowUpRight size={14} className="text-slate-900" />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── PROJECT MODAL ── */}
      <AnimatePresence>
        {selected && (
          <>
            {/* backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 bg-slate-950/85 backdrop-blur-sm z-50"
            />

            {/* modal panel */}
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.97 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-x-4 top-6 bottom-6 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-4xl z-50 bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* close button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-slate-800 border border-slate-700 hover:bg-slate-700 flex items-center justify-center transition-colors duration-200"
              >
                <X size={18} className="text-slate-300" />
              </button>

              {/* scrollable content */}
              <div className="overflow-y-auto flex-1">
                {/* hero image */}
                <div className="relative h-64 md:h-80 flex-shrink-0">
                  <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
                  <div className="absolute bottom-6 left-7">
                    <span className="inline-flex items-center gap-1.5 bg-slate-800/80 backdrop-blur-sm border border-slate-700 text-slate-300 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-3">
                      {(() => { const I = iconMap[selected.category] || Layers; return <I size={9} />; })()}
                      {selected.category}
                    </span>
                    <h2 className="text-white font-black text-2xl md:text-3xl leading-tight">{selected.title}</h2>
                    <p className="text-slate-400 text-sm mt-1">{selected.client}</p>
                  </div>
                </div>

                <div className="p-7 md:p-10">
                  {/* meta strip */}
                  <div className="flex flex-wrap gap-4 mb-8 pb-8 border-b border-slate-800">
                    {[
                      { icon: User, label: "Client", value: selected.client },
                      { icon: Calendar, label: "Duration", value: selected.duration },
                      { icon: Tag, label: "Role", value: selected.role },
                      { icon: Globe, label: "Year", value: selected.year },
                    ].map(({ icon: Icon, label, value }) => (
                      <div key={label} className="flex items-center gap-2.5 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3">
                        <Icon size={14} className="text-slate-400 flex-shrink-0" />
                        <div>
                          <p className="text-slate-500 text-[10px] uppercase tracking-wider font-semibold">{label}</p>
                          <p className="text-white text-xs font-semibold mt-0.5">{value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* left */}
                    <div>
                      <h3 className="text-white font-bold text-lg mb-3">About the Project</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{selected.longDesc}</p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {selected.tags.map(tag => (
                          <span key={tag} className="text-xs bg-slate-800 border border-slate-700 text-slate-300 px-3 py-1.5 rounded-full font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* right */}
                    <div>
                      <h3 className="text-white font-bold text-lg mb-3">Results & Impact</h3>
                      <ul className="flex flex-col gap-3">
                        {selected.results.map(r => (
                          <li key={r} className="flex items-start gap-3 text-sm text-slate-300">
                            <CheckCircle size={15} className="text-slate-400 flex-shrink-0 mt-0.5" />
                            {r}
                          </li>
                        ))}
                      </ul>

                      {/* second image */}
                      <div className="mt-6 rounded-2xl overflow-hidden h-36">
                        <img src={selected.image2} alt="" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
                    <motion.button
                      whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                      className="group inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-semibold px-7 py-3.5 rounded-full text-sm transition-colors duration-200"
                    >
                      Start a Similar Project
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                      onClick={() => setSelected(null)}
                      className="inline-flex items-center justify-center border border-slate-700 hover:border-slate-500 text-slate-400 hover:text-white font-semibold px-7 py-3.5 rounded-full text-sm transition-all duration-200"
                    >
                      Back to Projects
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
