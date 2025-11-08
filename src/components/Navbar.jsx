"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/programs", label: "Our Programs" },
    { href: "/gallery", label: "Gallery" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact Us" },
  ];

  const linkClasses = (href) =>
    `relative font-medium transition-all duration-200 ${
      pathname === href
        ? "text-pink-700 after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-pink-700"
        : "text-gray-700 hover:text-pink-700"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white /90 backdrop-blur-md shadow-md">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-14 h-14">
            <Image
              src="/images/logo.jpg"
              alt="Utamaduni Logo"
              fill
              className="rounded-md object-contain"
            />
          </div>
          <span className="hidden mdflex text-lg md:text-xl font-bold tracking-wide text-blue-900 font-serif group-hover:text-pink-800 transition">
            Utamaduni
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 items-center">
          {navLinks.map((item, i) => (
            <li key={i}>
              <Link href={item.href} className={linkClasses(item.href)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-pink-700 hover:text-pink-800 transition"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Mobile Slide-in Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 sm:w-80 bg-blue-900 text-gray-300 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-5 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-white tracking-wide">
            Menu
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-200 hover:text-pink-700 transition"
          >
            <X size={24} />
          </button>
        </div>

        <div className="px-6 py-8 flex flex-col gap-5 bg-white">
          {navLinks.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-medium tracking-wide transition-all duration-200 ${
                pathname === item.href
                  ? "text-pink-700 underline underline-offset-4"
                  : "text-gray-700 hover:text-pink-700"
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
