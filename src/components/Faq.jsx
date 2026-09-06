"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
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
    <section className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* HEADER - Center Aligned */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="w-8 h-0.5 bg-gradient-to-r from-blue-600 to-pink-600"></span>
            <p className="text-xs uppercase tracking-[0.25em] font-semibold text-slate-500">
              Questions & Answers
            </p>
            <span className="w-8 h-0.5 bg-gradient-to-l from-blue-600 to-pink-600"></span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-blue-600 to-pink-600 rounded-full mx-auto mb-4"
          />

          <p className="text-slate-600 max-w-2xl mx-auto text-sm">
            Have questions? We've got answers. Learn more about how we work and how you can get involved.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`
                rounded-xl border transition-all duration-300 overflow-hidden
                ${openIndex === index
                  ? "border-blue-200 bg-white shadow-md"
                  : "border-slate-200/60 bg-white hover:border-slate-300 hover:shadow-sm"
                }
              `}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center gap-4 px-5 py-4 text-left transition-colors"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle 
                    size={18} 
                    className={`mt-0.5 flex-shrink-0 transition-colors ${
                      openIndex === index ? "text-blue-600" : "text-slate-400"
                    }`}
                  />
                  <span className={`
                    text-sm font-medium transition-colors
                    ${openIndex === index ? "text-slate-900" : "text-slate-700"}
                  `}>
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  size={18}
                  className={`
                    flex-shrink-0 transition-all duration-300
                    ${openIndex === index 
                      ? "rotate-180 text-blue-600" 
                      : "text-slate-400"
                    }
                  `}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-5 pb-4 pt-1">
                      <div className="w-8 h-0.5 bg-gradient-to-r from-blue-600 to-pink-600 rounded-full mb-3"></div>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-10 text-center">
          <p className="text-slate-500 text-sm mb-3">
            Still have questions?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-pink-600 transition group"
          >
            <span className="border-b border-blue-200 group-hover:border-pink-300 pb-0.5">
              Contact Us
            </span>
            <span className="group-hover:translate-x-1 transition">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}