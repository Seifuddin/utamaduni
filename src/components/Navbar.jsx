"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

// Example dropdowns
const branches = [
  { label: "Nairobi HQ", href: "/branches/nairobi" },
  { label: "Mombasa Branch", href: "/branches/mombasa" },
  { label: "Kisumu Branch", href: "/branches/kisumu" },
];

const programs = [
  { label: "Education", href: "/programs/education" },
  { label: "Food Security", href: "/programs/food-security" },
  { label: "Women & Youth Empowerment", href: "/programs/empowerment" },
];

const resources = [
  { label: "Publications", href: "/resources/publications" },
  { label: "Reports", href: "/resources/reports" },
  { label: "Media", href: "/resources/media" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/leadership", label: "Our Leadership" },
    { href: "/programs", label: "Our Programs" },
    { label: "Branches", dropdown: branches },
    { label: "Programs", dropdown: programs },
    { label: "Resources", dropdown: resources },
    { href: "/gallery", label: "Gallery" },
    { href: "/events", label: "Events" },
    { href: "/contact", label: "Contact" },
  ];

  const linkClasses = (href) =>
    `block font-medium transition-colors ${
      pathname === href
        ? "text-blue-700 underline underline-offset-4"
        : "text-gray-700 hover:text-maroon-700"
    }`;

  return (
    <nav className="bg-white py-2 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo & Brand */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/image-removebg-preview (2).png" // Place your logo in public folder
            alt="Utamaduni Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-lg font-bold text-pink-600 text-maroon-700 font-serif">
            Utamaduni
          </span>
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          {navLinks.map((item, i) =>
            item.dropdown ? (
              <li
                key={i}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 text-gray-700 hover:text-maroon-700 font-medium">
                  {item.label} <ChevronDown size={16} />
                </button>
                {openDropdown === item.label && (
                  <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-56 py-2 z-50 border border-gray-100">
                    {item.dropdown.map((subItem) => (
                      <li key={subItem.href}>
                        <Link
                          href={subItem.href}
                          className={linkClasses(subItem.href) + " px-4 py-2 text-sm hover:bg-blue-50"}
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={i}>
                <Link href={item.href} className={linkClasses(item.href)}>
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-blue-700"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile slide-in panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-lg font-bold text-maroon-700">Menu</h2>
          <button onClick={() => setIsOpen(false)} aria-label="Close Menu">
            <X size={24} className="text-gray-700" />
          </button>
        </div>

        <div className="px-6 py-6 space-y-4">
          {navLinks.map((item, i) =>
            item.dropdown ? (
              <div key={i} className="border-b pb-2">
                <button
                  className="flex justify-between items-center w-full text-left text-gray-700 font-medium"
                  onClick={() =>
                    setOpenDropdown(openDropdown === item.label ? null : item.label)
                  }
                >
                  {item.label}
                  <ChevronDown
                    size={18}
                    className={`transform transition-transform ${
                      openDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === item.label && (
                  <ul className="mt-2 pl-3 space-y-2">
                    {item.dropdown.map((subItem) => (
                      <li key={subItem.href}>
                        <Link
                          href={subItem.href}
                          className="block text-gray-600 hover:text-blue-700"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link
                key={i}
                href={item.href}
                className="block text-gray-700 font-medium hover:text-maroon-700"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
}
