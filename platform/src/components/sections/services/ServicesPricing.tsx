"use client";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations";

const plans = [
  {
    name: "Starter",
    price: "$299",
    period: "one-time",
    desc: "Perfect for small businesses and local services just getting online.",
    features: ["5-page website", "Mobile responsive", "Contact form", "Google listing setup", "1 month support"],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$699",
    period: "one-time",
    desc: "For businesses ready to grow with a powerful digital presence.",
    features: ["Up to 10 pages", "Custom design", "SEO optimisation", "Blog setup", "Social media integration", "3 months support"],
    cta: "Most Popular",
    highlight: true,
  },
  {
    name: "Pro",
    price: "Custom",
    period: "quote",
    desc: "Full digital systems, platforms, and ongoing partnerships.",
    features: ["Unlimited pages", "Custom digital system", "Admin dashboard", "Training & onboarding", "Priority support", "Dedicated manager"],
    cta: "Contact Us",
    highlight: false,
  },
];

export default function ServicesPricing() {
  return (
    <section className="bg-white py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <FadeUp className="text-center mb-16">
          <span className="text-slate-500 text-xs font-semibold uppercase tracking-[0.25em] block mb-3">Transparent Pricing</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800">Simple, Honest Pricing</h2>
          <p className="mt-4 text-slate-500 text-sm max-w-md mx-auto">No hidden fees. No surprises. Just clear value for your investment.</p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="w-12 h-1 bg-slate-700 rounded-full" />
            <div className="w-3 h-1 bg-slate-400 rounded-full" />
            <div className="w-1.5 h-1 bg-slate-300 rounded-full" />
          </div>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map(({ name, price, period, desc, features, cta, highlight }) => (
            <StaggerItem key={name}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.22 }}
                className={`relative rounded-2xl p-8 flex flex-col gap-5 border ${
                  highlight
                    ? "bg-slate-800 border-slate-700 shadow-2xl shadow-slate-900/20 scale-[1.03]"
                    : "bg-white border-slate-100"
                }`}
              >
                {highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-700 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <div>
                  <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${highlight ? "text-slate-400" : "text-slate-500"}`}>{name}</p>
                  <div className="flex items-end gap-1">
                    <span className={`text-5xl font-black ${highlight ? "text-white" : "text-slate-800"}`}>{price}</span>
                    {period !== "quote" && <span className={`text-sm mb-2 ${highlight ? "text-slate-400" : "text-slate-400"}`}>/{period}</span>}
                  </div>
                  <p className={`text-sm mt-2 leading-relaxed ${highlight ? "text-slate-400" : "text-slate-500"}`}>{desc}</p>
                </div>

                <ul className="flex flex-col gap-2.5">
                  {features.map(f => (
                    <li key={f} className={`flex items-center gap-2.5 text-sm ${highlight ? "text-slate-300" : "text-slate-600"}`}>
                      <CheckCircle size={15} className={highlight ? "text-slate-400" : "text-slate-500"} />
                      {f}
                    </li>
                  ))}
                </ul>

                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className={`group mt-auto inline-flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-full text-sm transition-colors duration-200 ${
                    highlight
                      ? "bg-white text-slate-800 hover:bg-slate-100"
                      : "bg-slate-700 hover:bg-slate-800 text-white"
                  }`}
                >
                  {cta} <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
                </motion.a>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
