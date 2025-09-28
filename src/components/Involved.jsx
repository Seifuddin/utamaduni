"use client";

import { motion } from "framer-motion";
import { HeartHandshake, Users, HandCoins } from "lucide-react";
import Link from "next/link";

const involvementOptions = [
  {
    icon: <HandCoins className="w-10 h-10 text-blue-600" />,
    title: "Donate",
    description:
      "Your contribution provides food, shelter, and education for orphans and vulnerable families. Every gift makes a lasting difference.",
    cta: "Make a Donation",
    href: "/donate",
  },
  {
    icon: <Users className="w-10 h-10 text-maroon-700" />,
    title: "Volunteer",
    description:
      "Join our team of compassionate volunteers to mentor children, support events, or share your skills to empower communities.",
    cta: "Become a Volunteer",
    href: "/volunteer",
  },
  {
    icon: <HeartHandshake className="w-10 h-10 text-blue-600" />,
    title: "Partner With Us",
    description:
      "Together we are stronger. Collaborate with Utamaduni through corporate, institutional, or cultural partnerships that create lasting impact.",
    cta: "Partner Today",
    href: "/partners",
  },
];

export default function GetInvolvedPage() {
  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        {/* Page Heading */}
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-red-700 mb-4 font-serif"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get Involved
        </motion.h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          At Utamaduni, we believe in the power of unity. Whether you give,
          serve, or collaborate, your involvement fuels hope and
          transformation. Choose a way to join us today.
        </p>

        {/* Involvement Options */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {involvementOptions.map((option, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-md shadow-md hover:shadow-xl p-6 flex flex-col items-center text-center transition-transform transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full">
                {option.icon}
              </div>
              <h3 className="text-lg font-bold text-red-700 font-serif mb-2">
                {option.title}
              </h3>
              <p className="text-gray-600 text-sm mb-6">{option.description}</p>
              <Link
                href={option.href}
                className="px-5 py-2 rounded-md text-white font-semibold bg-red-700 hover:bg-blue-700 transition-colors shadow-md"
              >
                {option.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
