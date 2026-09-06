"use client";

import Link from "next/link";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTiktok, 
  FaYoutube, 
  FaLinkedinIn, 
  FaXTwitter 
} from "react-icons/fa6";
import { 
  IoLocationOutline, 
  IoCallOutline, 
  IoMailOutline,
  IoPaperPlaneOutline 
} from "react-icons/io5";
import Image from "next/image";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <footer className="relative bg-slate-900 text-slate-300 pt-16 pb-6">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/50 via-slate-900 to-slate-950/80 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-12 border-b border-slate-700/60">

          {/* BRAND */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">U</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white tracking-tight">
                  Utamaduni
                </h2>
                <p className="text-[11px] text-slate-400 tracking-wider uppercase">
                  Organization
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Supporting orphans and vulnerable children through cultural-driven initiatives, empowering communities, and strengthening unity through our values and traditions.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/programz", label: "Programs" },
                { href: "/gallery", label: "Gallery" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-blue-500 transition-all duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <IoLocationOutline className="text-blue-400 mt-0.5 flex-shrink-0" size={18} />
                <span>Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <IoCallOutline className="text-blue-400 flex-shrink-0" size={18} />
                <a href="tel:+254704337351" className="hover:text-white transition">
                  +254 704 337 351
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <IoMailOutline className="text-blue-400 flex-shrink-0" size={18} />
                <a href="mailto:utamaduniorganization@gmail.com" className="hover:text-white transition break-all">
                  utamaduniorganization@gmail.com
                </a>
              </li>
            </ul>

            {/* SOCIAL MEDIA */}
            <div className="flex mt-5 gap-2">
              <Link
                href="https://www.facebook.com/profile.php?id=61570938634560"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <FaFacebookF size={15} />
              </Link>
              <Link
                href="https://www.instagram.com/utamaduni_organization"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-pink-600 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <FaInstagram size={15} />
              </Link>
              <Link
                href="https://www.youtube.com/@utamadunifoundation"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-red-600 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <FaYoutube size={15} />
              </Link>
              <Link
                href="https://www.tiktok.com/@utamaduni01_org"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-white hover:text-slate-900 text-slate-400 flex items-center justify-center transition-all duration-300"
              >
                <FaTiktok size={15} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/utamaduni-organization-408a24345"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-700 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <FaLinkedinIn size={15} />
              </Link>
              <Link
                href="https://x.com/UTAMADUNIF23567"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-600 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <FaXTwitter size={15} />
              </Link>
            </div>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Newsletter
            </h3>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              Stay updated with our latest events and community initiatives.
            </p>
            {submitted ? (
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg px-4 py-3 text-sm text-emerald-400">
                ✅ Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                    className="w-full px-4 py-2.5 pr-11 text-sm rounded-lg border border-slate-700 bg-slate-800/50 text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition"
                  >
                    <IoPaperPlaneOutline size={15} />
                  </button>
                </div>
                <p className="text-[11px] text-slate-500">
                  No spam. Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Utamaduni Organization. All Rights Reserved.
          </p>
          <p>
            Designed & Built by{" "}
            <Link
              href="https://lapsa.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors font-medium"
            >
              Lapsa Web & Graphics
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}