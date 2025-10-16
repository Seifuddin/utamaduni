"use client";

import { motion } from "framer-motion";
import { HandHeart, Users, Lightbulb, HeartHandshake } from "lucide-react";

const steps = [
  {
    title: "Identify Needs",
    description:
      "We begin by engaging with communities to understand their unique challenges and priorities.",
    icon: HandHeart,
  },
  {
    title: "Mobilize Resources",
    description:
      "Through collaboration and local partnerships, we gather the support and tools needed to make real change.",
    icon: Users,
  },
  {
    title: "Empower Communities",
    description:
      "We launch sustainable programs focused on education, health, and self-reliance to uplift every life we touch.",
    icon: Lightbulb,
  },
  {
    title: "Sustain Impact",
    description:
      "Our continuous follow-up ensures that each effort grows stronger and benefits future generations.",
    icon: HeartHandshake,
  },
];

export default function Steps() {
  return (
    <section className="py-20 bg-amber-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-1 text-center">
        {/* Section Tagline */}
        <p className="text-sm uppercase tracking-wide font-semibold text-blue-700 mb-2">
          Our Approach
        </p>

        {/* Main Title */}
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">
          Step-by-Step Path to Community Transformation
        </h2>

        {/* Intro Text */}
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          At Utamaduni, every project follows a clear and compassionate process —
          ensuring that every action brings hope, empowerment, and lasting impact.
        </p>

        {/* Steps */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all border border-gray-100"
                >
                  {/* Mobile vertical connector */}
                  {index !== steps.length - 1 && (
                    <div className="lg:hidden absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 w-[2px] h-[40px] bg-gradient-to-b from-blue-800 to-gray-800"></div>
                  )}

                  {/* Desktop horizontal connector */}
                  {index !== steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 right-[-32px] w-[64px] h-[2px] bg-gradient-to-r from-blue-800 to-gray-800"></div>
                  )}

                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="bg-gradient-to-r from-blue-900 to-gray-800 p-4 rounded-full shadow-lg shadow-blue-800/40">
                      <Icon className="w-8 h-8 text-amber-50" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-serif font-bold text-gray-800 mb-2">
                    {index + 1}. {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
