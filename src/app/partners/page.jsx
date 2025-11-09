"use client";

import { motion } from "framer-motion";

export default function PartnersPage() {
  return (
    <section className="py-16 bg-amber-50 min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        {/* Heading */}
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-serif"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Partner With Us
        </motion.h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-base">
          Together, we can achieve greater impact. Partner with Utamaduni
          through corporate sponsorships, cultural collaborations, or community
          initiatives.
        </p>

        {/* Partnership form */}
        <div className="bg-white shadow-md border border-gray-300 rounded-xl p-8 max-w-lg mx-auto">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Organization / Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-200 text-gray-700"
            />
            <input
              type="email"
              placeholder="Contact Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-200 text-gray-700"
            />
            <textarea
              placeholder="How would you like to partner with us?"
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-200 text-gray-700"
            />
            <button
              type="submit"
              className="w-full bg-blue-900 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Proposal
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
