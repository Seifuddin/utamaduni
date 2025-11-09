"use client";

import { motion } from "framer-motion";

export default function DonatePage() {
  return (
    <section className="py-16 bg-amber-50 min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        {/* Heading */}
        <motion.h1
          className="text-2xl md:text-4xl font-bold text-blue-900 mb-4 font-serif"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Make a Donation
        </motion.h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-base">
          Every contribution brings hope. Your support helps us provide food,
          shelter, education, and care for orphans, vulnerable children, and
          struggling families.
        </p>

        {/* Placeholder donation form */}
        <div className="bg-white shadow-md border border-gray-300 rounded-xl p-8 max-w-lg mx-auto">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-200 text-gray-700"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-200 text-gray-700"
            />
            <input
              type="number"
              placeholder="Amount (KES)"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-200 text-gray-700"
            />
            <button
              type="submit"
              className="w-full bg-blue-900 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Donate Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
