import React from 'react'
import { Phone, Mail, Clock, MapPin } from 'lucide-react'

const footerLinks = {
  Company: [
    { label: "About Us",   href: "/about" },
    { label: "Our Team",   href: "/about" },
    { label: "Careers",    href: "#" },
    { label: "Blog",       href: "/blog" },
  ],
  Services: [
    { label: "Web Development",  href: "/services" },
    { label: "Digital Systems",  href: "/services" },
    { label: "Online Visibility",href: "/services" },
    { label: "Brand Identity",   href: "/services" },
  ],
  Programs: [
    { label: "Internships",      href: "/about" },
    { label: "Training",         href: "/about" },
    { label: "Student Projects", href: "#" },
    { label: "Apply Now",        href: "#" },
  ],
}

function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-400 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-white text-xl font-bold mb-3">VisionGuard</h2>
          <p className="text-sm leading-relaxed mb-5">
            Helping businesses become visible, trusted, and competitive in the digital world.
          </p>
          <div className="flex flex-col gap-2 text-sm">
            <span className="flex items-center gap-2"><Phone size={13} className="text-slate-300" /> +250 798 334 054</span>
            <span className="flex items-center gap-2"><Mail size={13} className="text-slate-300" /> ngabiblackiane02@gmail.com</span>
            <span className="flex items-center gap-2"><Clock size={13} className="text-slate-300" /> Sun–Fri, 9:00 AM – 5:00 PM</span>
            <span className="flex items-center gap-2"><MapPin size={13} className="text-slate-300" /> Kigali, Rwanda</span>
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-4">{title}</h3>
            <ul className="flex flex-col gap-2">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-sm hover:text-white transition-colors duration-200">{label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-700 px-6 md:px-10 py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-slate-400">
        <p>© {new Date().getFullYear()} VisionGuard. All rights reserved.</p>
        <div className="flex gap-4">
          {["Instagram", "Facebook", "Twitter"].map(s => (
            <a key={s} href="#" className="hover:text-white transition-colors duration-200">{s}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
