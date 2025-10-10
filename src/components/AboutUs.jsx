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
    <main className="minh-screen bg-amber-50 text-gray-700"> 
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl fontserif font-black leading-tight text-gray-800">Our Story</h2>
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

       {/* MISSION / VISION / VALUES */}
      <section className="bg-amber-50 py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl lg:text-5xl fontserif font-black leading-tight text-gray-800">Our Mission & Values</h3>
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
          <h3 className="text-3xl md:text-4xl lg:text-5xl fontserif font-black leading-tight text-gray-200">Join Us in Making a Difference</h3>
          <p className="mt-2 text-gray-300 max-w-2xl mx-auto">Volunteer, donate or partner — your support helps transform lives and communities.</p>

          <div className="mt-6 flex justify-center gap-4">
            <a href="/donate" className="bg-amber-400 text-blue-900 px-5 py-3 rounded-full font-semibold shadow">Donate</a>
            <a href="/volunteer" className="border border-white px-5 py-3 rounded-full">Volunteer</a>
          </div>
        </div>
      </section>
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
