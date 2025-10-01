"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What does this organization do?",
    answer:
      "We are dedicated to improving lives by providing support in healthcare, education, and community development. Our goal is to create lasting change through sustainable programs.",
  },
  {
    question: "How can I make a donation?",
    answer:
      "You can donate directly through our website using our secure donation portal. We also accept bank transfers and in-kind contributions.",
  },
  {
    question: "Can I volunteer with you?",
    answer:
      "Yes! We welcome volunteers who want to give their time, skills, or expertise to support our programs. Visit our Volunteer page to learn how you can get involved.",
  },
  {
    question: "Where does my donation go?",
    answer:
      "Every donation goes directly into funding our projects, such as providing educational materials, healthcare supplies, and community outreach programs. Transparency is key—we publish annual impact reports.",
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
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-pink-600 font-serif text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg shadow-sm bg-white"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-left"
              >
                <span className="text-blue-950 font-serif font-semibold">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 pt-0 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
