"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What does this organization do?",
    answer:
      "We provide support in healthcare, education, and community development, creating lasting change through sustainable programs.",
  },
  {
    question: "How can I make a donation?",
    answer:
      "You can donate securely through our website. We also accept bank transfers and in-kind contributions.",
  },
  {
    question: "Can I volunteer with you?",
    answer:
      "Yes! We welcome volunteers who want to give their time, skills, or expertise. Visit our Volunteer page to learn more.",
  },
  {
    question: "Where does my donation go?",
    answer:
      "Every donation funds projects like educational materials, healthcare supplies, and outreach programs. We ensure transparency with annual impact reports.",
  },
  {
    question: "Do you partner with other organizations?",
    answer:
      "Yes, we collaborate with local and international partners to maximize impact and reach more people in need.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-amber-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto font-medium text-center md:text-lg mb-6">
            Have questions? We’ve got answers. Learn more about how we work and how you can get involved.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg shadow-sm bg-white overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-5 py-4 text-left hover:bg-amber-100 transition"
              >
                <span className="text-gray-900 font-serif font-medium text-base md:text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-pink-700 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 pb-4 text-gray-600 text-sm md:text-base leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
