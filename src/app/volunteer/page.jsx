"use client";

import { motion } from "framer-motion";

export default function VolunteerPage() {
  return (
    <section className="py-16 bg-amber-50 min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        {/* Heading */}
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-serif"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Become a Volunteer
        </motion.h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-base">
          Volunteers are the heartbeat of Utamaduni. Join us to mentor children,
          support cultural events, or share your skills with the community.
        </p>

        {/* Placeholder volunteer form */}
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
            <textarea
              placeholder="How would you like to volunteer?"
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-200 text-gray-700"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
