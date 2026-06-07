"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check } from "lucide-react";
import { FadeUp } from "@/components/animations";

export default function BlogNewsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSent(true); setEmail(""); }
  };

  return (
    <section className="bg-slate-900 border-t border-slate-800 py-20 px-6 md:px-10">
      <div className="max-w-2xl mx-auto text-center">
        <FadeUp>
          <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center mx-auto mb-6">
            <Send size={22} className="text-slate-300" />
          </div>
          <h2 className="text-white font-bold text-3xl md:text-4xl">Stay in the Loop</h2>
          <p className="mt-4 text-slate-400 text-sm leading-relaxed">
            Get our latest articles, digital tips, and business growth insights — delivered to your inbox every two weeks. No spam, ever.
          </p>

          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-8 inline-flex items-center gap-2 bg-slate-800 border border-slate-700 text-slate-200 px-6 py-4 rounded-2xl text-sm font-medium"
            >
              <Check size={16} className="text-green-400" />
              You're subscribed! Welcome aboard.
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 bg-slate-800 border border-slate-700 hover:border-slate-500 focus:border-slate-400 text-white placeholder-slate-500 text-sm px-5 py-3.5 rounded-full outline-none transition-colors duration-200"
              />
              <motion.button
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-semibold px-6 py-3.5 rounded-full text-sm transition-colors duration-200 flex-shrink-0"
              >
                Subscribe <Send size={13} />
              </motion.button>
            </form>
          )}
          <p className="mt-4 text-slate-600 text-xs">Join 500+ business owners already subscribed.</p>
        </FadeUp>
      </div>
    </section>
  );
}
