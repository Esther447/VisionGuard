"use client";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations";
import { motion } from "framer-motion";
import { Link2, Share2 } from "lucide-react";

const team = [
  { name: "Esther Mushimiyimana", role: "CEO — Strategic Leadership & Business Development", initials: "EM", desc: "Drives the company vision, secures clients, builds partnerships, and leads product direction based on market needs." },
  { name: "Diane Ingabire", role: "CTO — Technical Leadership & System Architecture", initials: "DI", desc: "Leads all technical development, designs system architecture, and ensures quality across platforms, websites, and IoT solutions." },
  { name: "Kelia Iradukunda", role: "Backend & Training Lead — Fullstack", initials: "KI", desc: "Develops and maintains backend systems, leads company training programs, and drives internal knowledge sharing." },
  { name: "Chantalle Uwitonze", role: "Fullstack Engineer & Business Management", initials: "CU", desc: "Leads frontend development, builds responsive interfaces, and collaborates on fullstack integration across all projects." },
  { name: "Gervais Tumukunde", role: "Marketing & Growth Lead", initials: "GT", desc: "Manages brand identity, content, and campaigns — generating leads and supporting business growth alongside the CEO." },
];

export default function AboutTeam() {
  return (
    <section className="bg-white py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <FadeUp className="text-center mb-16">
          <span className="text-slate-500 text-xs font-semibold uppercase tracking-[0.25em] block mb-3">The People</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800">Meet Our Team</h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="w-12 h-1 bg-slate-700 rounded-full" />
            <div className="w-3 h-1 bg-slate-400 rounded-full" />
            <div className="w-1.5 h-1 bg-slate-300 rounded-full" />
          </div>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {team.map(({ name, role, initials, desc }) => (
            <StaggerItem key={name}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="group flex flex-col items-center text-center bg-slate-50 hover:bg-slate-800 rounded-2xl p-7 border border-slate-100 transition-colors duration-300"
              >
                {/* Avatar */}
                <div className="relative mb-5">
                  <div className="w-20 h-20 rounded-full bg-slate-700 group-hover:bg-slate-600 flex items-center justify-center text-white text-2xl font-black transition-colors duration-300">
                    {initials}
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-400 border-2 border-white" />
                </div>
                <h3 className="text-slate-800 group-hover:text-white font-bold text-base transition-colors duration-300">{name}</h3>
                <span className="text-slate-500 group-hover:text-slate-300 text-xs font-medium mt-1 transition-colors duration-300">{role}</span>
                <p className="text-slate-400 group-hover:text-slate-400 text-xs leading-relaxed mt-3 transition-colors duration-300">{desc}</p>
                <div className="mt-5 flex gap-3">
                  {[Link2, Share2].map((Icon, i) => (
                    <a key={i} href="#" className="w-8 h-8 rounded-full bg-slate-200 group-hover:bg-slate-700 flex items-center justify-center transition-colors duration-300">
                      <Icon size={13} className="text-slate-600 group-hover:text-white transition-colors duration-300" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
