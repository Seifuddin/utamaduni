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
} from "lucide-react";

export default function About() {
  return (
    <main className="min--screen bg-amber-50 to-white text-gray-700">

      {/* MISSION / VISION / VALUES 
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4"
          >
            Our Mission & Values
          </motion.h3>
          <div className="mx-auto h-1 w-24 bg-blue-700 rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Compassion, inclusion, and sustainable impact guide everything we do.
          </p>

          <div className="grid sm:grid-cols-3 gap-8">
            <ValueCard
              icon={<HeartHandshake className="w-7 h-7 text-pink-700" />}
              title="Mission"
            >
              To preserve cultural heritage while providing humanitarian support through education,
              empowerment, and sustainable charitable initiatives for orphans, needy families, and
              communities in need.
            </ValueCard>

            <ValueCard
              icon={<Globe className="w-7 h-7 text-pink-700" />}
              title="Vision"
            >
              To create a culturally inspired, compassionate society where vulnerable children and
              families can thrive with dignity and hope.
            </ValueCard>

            <ValueCard
              icon={<Award className="w-7 h-7 text-pink-700" />}
              title="Values"
            >
              Compassion, Integrity, Culture, Community Work, and Sustainability.
            </ValueCard>
          </div>
        </div>
      </section>
      */}

      {/* OUR STORY */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
              Our Story
            </h2>
            <div className="w-24 h-1 bg-blue-700 rounded-full"></div>

            <p className="text-gray-700 leading-relaxed">
              Founded on the principles of community, culture, and compassion, Utamaduni grew from a small group of volunteers
              into a trusted organization supporting thousands across regions. Our work embraces local cultural identity while
              delivering modern solutions in education, health, and livelihoods.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-5">
              <FeatureBox
                icon={<Users className="w-5 h-5 text-pink-700" />}
                title="Community Driven"
              >
                We co-design programs with local leaders to ensure dignity and relevance.
              </FeatureBox>

              <FeatureBox
                icon={<BookOpen className="w-5 h-5 text-pink-700" />}
                title="Sustainable Learning"
              >
                Education initiatives that equip children and adults for tomorrow’s opportunities.
              </FeatureBox>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
          >
            <Image
              src="/images/utamaduni at mathare/_DSC8943.jpg"
              alt="Community meeting"
              width={800}
              height={600}
              className="object-cover w-full h-80 md:h-[420px] rounded-2xl"
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
}

/* ----------------------
   Subcomponents
---------------------- */

function FeatureBox({ icon, title, children }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="p-5 bg-white rounded-xl shadow-md flex gap-3 items-start hover:shadow-lg transition"
    >
      <div className="p-3 rounded-lg bg-pink-50">{icon}</div>
      <div>
        <h4 className="font-bold text-gray-800 font-serif">{title}</h4>
        <p className="text-sm text-gray-700 mt-1">{children}</p>
      </div>
    </motion.div>
  );
}

function ValueCard({ icon, title, children }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="p-3 bg-pink-50 rounded-lg">{icon}</div>
        <h4 className="text-xl font-serif font-bold text-gray-900">{title}</h4>
      </div>
      <p className="text-sm text-gray-700 leading-relaxed">{children}</p>
    </motion.div>
  );
}
