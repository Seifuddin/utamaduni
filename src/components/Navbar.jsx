'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';

const gallery = [
  { label: 'Mathare Visit', href: '/ministries/youth' },
  { label: 'Oyugis Childrens Home', href: '/ministries/women' },
  { label: 'Malia Childrens Home', href: '/ministries/men' },
];

const resources = [
  { label: 'Bible Study', href: '/resources/bible-study' },
  { label: 'Devotionals', href: '/resources/devotionals' },
  { label: 'Podcasts', href: '/resources/podcasts' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/programz', label: 'Programs' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  const linkClasses = (href) =>
    `relative text-sm font-medium transition-colors duration-200 ${
      pathname === href
        ? 'text-blue-600'
        : 'text-slate-600 hover:text-blue-600'
    }`;

  const activeIndicator = (href) =>
    pathname === href ? 'opacity-100' : 'opacity-0';

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white shadow-sm'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 flex-shrink-0">
              <Image
                src="/images/logo.jpg"
                alt="Utamaduni Logo"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold tracking-tight text-slate-800 group-hover:text-blue-600 transition-colors">
                Utamaduni
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                Organization
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.href}
                  className={`
                    ${linkClasses(item.href)} 
                    px-4 py-2 rounded-lg hover:bg-slate-50 transition-all duration-200
                    flex items-center gap-1
                  `}
                >
                  {item.label}
                  <span className={`
                    absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-blue-600 rounded-full transition-all duration-300
                    ${activeIndicator(item.href)}
                  `} />
                </Link>
              </li>
            ))}
          </ul>

          {/* DESKTOP CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/donate"
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Donate
            </Link>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} className="text-slate-700" /> : <Menu size={24} className="text-slate-700" />}
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY */}
      <div
        className={`
          fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
        onClick={() => setIsOpen(false)}
      />

      {/* MOBILE PANEL */}
      <div
        className={`
          fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-white shadow-2xl transform transition-transform duration-300 ease-out md:hidden
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <Image
                src="/images/logo.jpg"
                alt="Logo"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <span className="font-bold text-slate-800">Utamaduni</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Close Menu"
          >
            <X size={22} className="text-slate-600" />
          </button>
        </div>

        <div className="px-6 py-6 space-y-1 overflow-y-auto h-[calc(100%-72px)]">
          {navLinks.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className={`
                block px-4 py-3 rounded-lg text-base font-medium transition-colors
                ${pathname === item.href
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-slate-700 hover:bg-slate-50 hover:text-blue-600'
                }
              `}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <div className="pt-4 mt-4 border-t border-slate-100">
            <Link
              href="/donate"
              className="block w-full text-center px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Donate Now
            </Link>
          </div>

          <div className="pt-4 mt-4 border-t border-slate-100">
            <p className="text-xs text-slate-400 text-center">
              © {new Date().getFullYear()} Utamaduni Organization
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}