"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // 👉 connect to backend API (Flask, Node, etc.)
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <footer className="relative bg-[#0a2540] text-gray-200 pt-20 pb-10 overflow-hidden">
      {/* Background Overlay with Patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-[#0a2540]/90 to-blue-800/70 z-0"></div>
      <div className="absolute inset-0 bg-[url('/images/patterns.png')] opacity-10 bg-cover bg-center z-0"></div>

      <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-12 z-10">
        {/* Logo & About */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/images/logo.jpg"
              alt="Utamaduni Logo"
              width={40}
              height={40}
              className="rounded-md"
            />
            <h2 className="text-2xl font-bold text-white font-serif">
              Utamaduni
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-gray-300">
            Supporting orphans and vulnerable children, empowering communities
            through cultural-driven initiatives, and strengthening unity through
            our values and traditions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 font-serif">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/programz", label: "Programs" },
              { href: "/gallery", label: "Gallery" },
              { href: "/contact", label: "Contact" },
            ].map((link, i) => (
              <li key={i}>
                <Link
                  href={link.href}
                  className="hover:text-blue-400 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 font-serif">
            Contact Us
          </h3>
          <p className="text-sm">📍 Nairobi, Kenya </p>
          <p className="text-sm">📞 +254 704 337 351 </p>
          <p className="text-sm">✉️ utamadunicharity@gmail.com </p>
          {/* Social Media Links */}
          <div className="flex mt-4 space-x-3">
            <Link
              href="https://www.facebook.com/profile.php?id=61570938634560"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition shadow-md"
            >
              <FaFacebookF size={18} />
            </Link>
            <Link
              href="https://www.instagram.com/utamaduni_organization"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full transition shadow-md"
            >
              <FaInstagram size={18} />
            </Link>
            <Link
              href="https://www.youtube.com/@utamadunifoundation"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-red-600 hover:bg-red-700 text-white rounded-full transition shadow-md"
            >
              <FaYoutube size={18} />
            </Link>
            <Link
              href="https://www.tiktok.com/@utamaduni01_org?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-black hover:bg-gray-800 text-white rounded-full transition shadow-md"
            >
              <FaTiktok size={18} />
            </Link>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 font-serif">
            Newsletter
          </h3>
          <p className="text-sm mb-3 text-gray-300">
            Stay updated with our latest events and community initiatives.
          </p>
          {submitted ? (
            <p className="text-green-400 text-sm">
              ✅ Thank you for subscribing!
            </p>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-2"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="w-full px-3 py-2 text-sm rounded-md border border-gray-600 bg-[#0f2e4f] text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-600 text-white text-sm rounded-md transition"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400 z-10 space-y-2">
        <p>
          © {new Date().getFullYear()} Utamaduni Organization. All Rights
          Reserved.
        </p>
        <p className="text-gray-500">
          Designed & Powered by{" "}
          <Link
            href="https://lapsa.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-blue-400 font-semibold transition-all duration-300 
                       after:content-[''] after:absolute after:left-0 after:-bottom-1 
                       after:w-0 after:h-[2px] after:bg-blue-400 
                       hover:after:w-full after:transition-all after:duration-300"
          >
            Lapsa Web and Graphics
          </Link>
        </p>
      </div>
    </footer>
  );
}
