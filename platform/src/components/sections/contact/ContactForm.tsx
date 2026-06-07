"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check, Mail, Phone, MapPin, Clock } from "lucide-react";
import { FadeUp, SlideLeft, SlideRight } from "@/components/animations";

const info = [
  { icon: Mail, label: "Email Us", value: "hello@visionguard.rw" },
  { icon: Phone, label: "Call Us", value: "+250 788 000 000" },
  { icon: MapPin, label: "Location", value: "Kigali, Rwanda" },
  { icon: Clock, label: "Working Hours", value: "Mon – Fri, 8am – 6pm" },
];

const services = [
  "Web Design & Development",
  "Digital Systems",
  "SEO & Digital Growth",
  "Branding & Identity",
  "Training Program",
  "Other",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputClass =
    "w-full bg-slate-800 border border-slate-700 hover:border-slate-500 focus:border-slate-400 text-white placeholder-slate-500 text-sm px-5 py-3.5 rounded-xl outline-none transition-colors duration-200";

  return (
    <section className="bg-slate-950 py-20 px-6 md:px-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">

        {/* Left — info */}
        <SlideLeft className="lg:col-span-2 flex flex-col gap-8">
          <div>
            <span className="text-slate-500 text-xs font-semibold uppercase tracking-[0.25em] block mb-2">
              Contact Info
            </span>
            <h2 className="text-white font-bold text-3xl md:text-4xl leading-tight">
              Let's start a<br />conversation.
            </h2>
            <p className="mt-4 text-slate-400 text-sm leading-relaxed">
              Whether you're ready to launch a project or still exploring your
              options — reach out and we'll help you figure out the best path
              forward.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {info.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-slate-300" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest">{label}</p>
                  <p className="text-white text-sm font-medium mt-0.5">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </SlideLeft>

        {/* Right — form */}
        <SlideRight className="lg:col-span-3">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-10">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-16 gap-4"
              >
                <div className="w-14 h-14 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                  <Check size={24} className="text-green-400" />
                </div>
                <h3 className="text-white font-bold text-xl">Message Sent!</h3>
                <p className="text-slate-400 text-sm max-w-xs">
                  Thanks for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", service: "", message: "" }); }}
                  className="mt-2 text-slate-400 hover:text-white text-xs underline transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <FadeUp>
                  <h3 className="text-white font-bold text-xl mb-1">Send us a message</h3>
                  <p className="text-slate-500 text-xs">Fill in the form and we'll be in touch shortly.</p>
                </FadeUp>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    className={inputClass}
                    placeholder="Your name"
                    required
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  />
                  <input
                    type="email"
                    className={inputClass}
                    placeholder="your@email.com"
                    required
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  />
                </div>

                <select
                  required
                  className={inputClass + " cursor-pointer"}
                  value={form.service}
                  onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                >
                  <option value="" disabled hidden>Select a service</option>
                  {services.map(s => <option key={s} value={s}>{s}</option>)}
                </select>

                <textarea
                  className={inputClass + " resize-none"}
                  rows={5}
                  placeholder="Tell us about your project..."
                  required
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                />

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-semibold px-8 py-3.5 rounded-full text-sm transition-colors duration-200 self-start"
                >
                  Send Message <Send size={14} />
                </motion.button>
              </form>
            )}
          </div>
        </SlideRight>
      </div>
    </section>
  );
}
