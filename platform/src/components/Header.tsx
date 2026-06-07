"use client";
import React, { useState, useEffect } from 'react'
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../public/images/logo.jpeg";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home",       href: "/" },
  { label: "About Us",   href: "/about" },
  { label: "Services",   href: "/services" },
  { label: "Projects",   href: "/projects" },
  { label: "Blog",       href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 bg-white font-sans transition-shadow duration-300 ${scrolled ? "shadow-md" : "border-b border-gray-100"}`}>
      <div className="flex items-center justify-between px-4 md:px-10 py-3">
        {/* Logo */}
        <div className="w-36 h-10 relative flex-shrink-0">
          <Image src={logo} alt="VisionGuard logo" placeholder="blur" fill className="object-contain object-left" />
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="relative px-3 py-2 text-sm text-slate-600 font-medium hover:text-slate-900 transition-colors duration-200 group"
            >
              {label}
              <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-slate-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full" />
            </a>
          ))}
        </nav>

        <button className="hidden md:inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-800 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors duration-200">
          Let&apos;s Talk
        </button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-1 rounded-md text-slate-700 hover:bg-slate-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-t border-gray-100 px-4 py-4 flex flex-col gap-1 bg-white overflow-hidden"
          >
            {navLinks.map(({ label, href }, i) => (
              <motion.a
                key={label}
                href={href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="py-2.5 px-3 text-sm text-slate-700 font-medium hover:bg-slate-50 rounded-md transition-colors"
              >
                {label}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-3 bg-slate-700 hover:bg-slate-800 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors w-full"
            >
              Let&apos;s Talk
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
