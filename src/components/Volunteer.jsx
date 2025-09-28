"use client";
import { motion } from "framer-motion";

export default function VolunteerWithUs() {
  return (
    <section className="bg-blue-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-maroon-700"
        >
          Volunteer With Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-3 text-blue-700 max-w-2xl mx-auto"
        >
          Join hands with Utamaduni Organization to support orphans,
          vulnerable children, and communities in need. Your time and skills
          can bring hope, change, and lasting impact.
        </motion.p>
      </div>

      <motion.form
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-maroon-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="mt-2 w-full border border-blue-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-maroon-600 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-maroon-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-2 w-full border border-blue-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-maroon-600 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-maroon-700">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="+254 700 000 000"
              className="mt-2 w-full border border-blue-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-maroon-600 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-maroon-700">
              Area of Interest
            </label>
            <select
              className="mt-2 w-full border border-blue-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-maroon-600 outline-none"
              required
            >
              <option>Community Support</option>
              <option>Children Care</option>
              <option>Skills Training</option>
              <option>Event Organization</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-maroon-700">
            Short Message
          </label>
          <textarea
            rows="4"
            placeholder="Tell us why you’d love to volunteer..."
            className="mt-2 w-full border border-blue-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-maroon-600 outline-none"
            required
          ></textarea>
        </div>

        <div className="mt-8 text-center">
          <button
            type="submit"
            className="bg-maroon-700 hover:bg-maroon-800 text-white font-semibold px-8 py-3 rounded-full shadow-md transition duration-300"
          >
            Become a Volunteer
          </button>
        </div>
      </motion.form>
    </section>
  );
}
