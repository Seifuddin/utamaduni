"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  HeartHandshake,
  Users,
  BookOpen,
  Globe,
  Award,
  MapPin
} from "lucide-react";

// ABOUT US - Elegant Nonprofit Styled React Component
// Usage: Place this file in components/AboutUs.jsx and import into a page.
// Requirements: Tailwind CSS, Framer Motion, lucide-react, Next.js Image setup.

export default function About() {
  return (
    <main className="minh-screen bg-gradient-to-b from-white to-amber-50 text-gray-800"> 
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -left-20 -top-12 w-72 h-72 bg-pink-200 opacity-30 rounded-full blur-3xl" />
          <div className="absolute right-0 top-0 w-96 h-96 bg-blue-100 opacity-30 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight text-blue-900"
            >
              Who we are
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.6 }}
              className="mt-4 text-gray-600 max-w-xl"
            >
              Utamaduni is a community-based, non-profit organization dedicated to
              preserving cultural heritage while uplifting vulnerable families and children. Inspired by
              the richness of African culture, Utamaduni integrates values of unity, compassion, and
              heritage into its charitable initiatives.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.6 }}
              className="mt-4 text-gray-600 max-w-xl"
            >
              The name "utamaduni" means culture in Swahili, reflecting our belief that culture is the
              foundation of identity and a bridge for building stronger, caring communities.
            </motion.p>

            <div className="mt-6 flex flex-wrap gap-3">
              <motion.a
                href="#programs"
                whileHover={{ scale: 1.03 }}
                className="inline-flex items-center gap-3 bg-blue-900 text-white px-5 py-3 rounded-full shadow-lg font-medium"
              >
                Get Involved
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                className="inline-flex items-center gap-2 border border-blue-900 text-blue-900 px-4 py-3 rounded-full font-medium"
              >
                Contact Us
              </motion.a>
            </div>
            {/* HERO 
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <StatCard value="5,000+" label="Children Helped" />
              <StatCard value="20,000+" label="Meals Provided" />
              <StatCard value="1,200+" label="Volunteers" />
              <StatCard value="15+ yrs" label="Service" />
            </div>
            */}
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mx-auto w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/WhatsApp Image 2025-10-04 at 23.11.07.jpeg"
                alt="Children smiling with volunteers"
                width={1200}
                height={800}
                className="object-cover w-full h-64 sm:h-80 lg:h-96"
              />
            </motion.div>
          </div>
        </div>
      </section>

       {/* MISSION / VISION / VALUES */}
      <section className="bg-gradient-to-b from-white to-blue-50 py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <h3 className="text-xl font-serif font-bold text-blue-900">Our Mission & Values</h3>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Compassion, inclusion, and sustainable impact guide everything we do.</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <ValueCard icon={<HeartHandshake className="w-6 h-6 text-pink-500" />} title="Mission">
              To preserve cultural heritage while providing humanitarian support through education,
              empowerment, and sustainable charitable initiatives for orphans, needy families, and
              communities in need.
            </ValueCard>

            <ValueCard icon={<Globe className="w-6 h-6 text-blue-500" />} title="Vision">
              To create a culturally inspired, compassionate society where vulnerable children and
              families can thrive with dignity and hope.
            </ValueCard>

            <ValueCard icon={<Award className="w-6 h-6 text-yellow-500" />} title="Values">
              Compassion, Integrity, Culture, Community work, and Sustainability.
            </ValueCard>
          </div>
        </div>
      </section>

       {/* CALL TO ACTION */}
      <section className="bg-blue-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-serif font-bold">Join Us in Making a Difference</h3>
          <p className="mt-2 text-gray-200 max-w-2xl mx-auto">Volunteer, donate or partner — your support helps transform lives and communities.</p>

          <div className="mt-6 flex justify-center gap-4">
            <a href="/donate" className="bg-amber-400 text-blue-900 px-5 py-3 rounded-full font-semibold shadow">Donate</a>
            <a href="/volunteer" className="border border-white px-5 py-3 rounded-full">Volunteer</a>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="max-w-6xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-serif font-bold text-blue-900">Our Story</h2>
            <p className="text-gray-700">
              Founded on the principles of community, culture, and compassion, Utamaduni grew from a small group of volunteers
              into a trusted organization supporting thousands across regions. Our work embraces local cultural identity while
              delivering modern solutions in education, health, and livelihoods.
            </p>

            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <FeatureBox icon={<Users className="w-5 h-5 text-blue-800" />} title="Community Driven">
                We co-design programs with local leaders to ensure dignity and relevance.
              </FeatureBox>

              <FeatureBox icon={<BookOpen className="w-5 h-5 text-blue-800" />} title="Sustainable Learning">
                Education initiatives that equip children and adults for tomorrow's opportunities.
              </FeatureBox>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="/images/WhatsApp Image 2025-10-04 at 23.11.56.jpeg"
              alt="Community meeting"
              width={800}
              height={600}
              className="object-cover w-full h-72 sm:h-96"
            />
          </motion.div>
        </div>
      </section>

     

      {/* IMPACT HIGHLIGHTS 
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-serif font-bold text-blue-900 mb-3">Impact Highlights</h3>
            <p className="text-gray-700 mb-6">Numbers tell a part of the story — behind them are lives changed, families supported and stronger communities.</p>

            <div className="grid grid-cols-2 gap-4">
              <MiniStat label="Children Helped" value="5,000+" />
              <MiniStat label="Meals Provided" value="20,000+" />
              <MiniStat label="Volunteers" value="1,200+" />
              <MiniStat label="Years of Service" value="15+" />
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image src="/images/impact.jpg" alt="Distribution event" width={800} height={600} className="object-cover w-full h-64 sm:h-96" />
          </div>
        </div>
      </section>
      */}

     

      {/* FOOTER (minimal) 
      <footer className="py-8 text-center text-sm text-gray-600">
        <div className="max-w-6xl mx-auto px-6">© {new Date().getFullYear()} Utamaduni Charitable Organization. All rights reserved.</div>
      </footer>
      */}
    </main>
  );
}

/* ----------------------
   Small subcomponents
   ---------------------- */

function StatCard({ value, label }) {
  return (
    <div className="bg-white rounded-lg p-3 shadow-sm flex flex-col items-start">
      <p className="text-sm font-medium text-gray-600">{label}</p>
      <p className="mt-1 text-lg font-serif font-bold text-blue-900">{value}</p>
    </div>
  );
}

function FeatureBox({ icon, title, children }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm flex gap-3 items-start">
      <div className="p-2 rounded-md bg-blue-50 text-blue-800">{icon}</div>
      <div>
        <h4 className="font-semibold text-gray-800">{title}</h4>
        <p className="text-sm text-gray-600 mt-1">{children}</p>
      </div>
    </div>
  );
}

function ValueCard({ icon, title, children }) {
  return (
    <div className="p-5 bg-white rounded-xl shadow-md">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-md bg-white/30">{icon}</div>
        <h4 className="font-semibold text-blue-900">{title}</h4>
      </div>
      <p className="text-sm text-gray-600 mt-3">{children}</p>
    </div>
  );
}

function MiniStat({ label, value }) {
  return (
    <div className="bg-amber-50 border border-gray-100 rounded-lg p-4 text-left">
      <p className="text-sm text-gray-600">{label}</p>
      <p className="mt-1 text-lg font-bold text-blue-900 font-serif">{value}</p>
    </div>
  );
}
