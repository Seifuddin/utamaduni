"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    // { href: "/leadership", label: "Our Leadership" },
    { href: "/programs", label: "Our Programs" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact Us" },
  ];

  const linkClasses = (href) =>
    `transition-colors font-semibold ${
      pathname === href
        ? "text-amber-700 underline underline-offset-4"
        : "text-gray-700 hover:text-amber-700"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-6 py-5">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/image-removebg-preview (2).png"
            alt="Utamaduni Logo"
            width={55}
            height={55}
            className="rounded-full"
          />
          <span className="hidden md:flex text-xl font-bold text-amber-700 font-serif tracking-wide">
            Utamaduni
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          {navLinks.map((item, i) => (
            <li key={i}>
              <Link href={item.href} className={linkClasses(item.href)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-amber-700"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
          <h2 className="text-lg font-bold text-pink-700">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <X size={22} className="text-gray-600" />
          </button>
        </div>

        <div className="px-6 py-6 space-y-4 bg-gradient-to-br from-blue-900/60 via-[#0a2540]/90 to-blue-800/70">
          {navLinks.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block text-gray-200 text-lg font-medium hover:text-amber-700 transition ${
                pathname === item.href ? "text-pink-700 underline" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
