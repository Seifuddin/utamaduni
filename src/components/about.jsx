"use client";

import { motion } from "framer-motion";
import { Target, Eye, Info, Users, BookOpen  } from "lucide-react";

export default function Abouts() {
  return (
    <section className="relative bg-amber-50 gradient-to-br from-amber-50 via-white to-blue-50 text-gray-800 overflow-hidden py-20">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern-light.png')] opacity-10 bg-cover bg-center"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px12 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-2"
        >
          <p className="inline-block text-sm uppercase tracking-wider font-semibold text-pink-700 bgpink-100/60 px3 py1 rounded-full">
            About Us
          </p>

          <h1 className="text-2xl md:text-4xl fontserif font-bold text-gray-900 mb-3">
            Who We Are
          </h1>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 0.6 }}
            className="h-1 bg-pink-700 rounded-full mb-7"
          ></motion.div>

          <p className="font-base leading-relaxed text-gray-700">
            <span className="font-semibold text-gray-900">Utamaduni</span> is a
            community-based, non-profit organization committed to preserving{" "}
            <span className="font-medium text-gray-900">cultural heritage</span>{" "}
            while uplifting vulnerable families and children. Rooted in the
            richness of African culture, Utamaduni embodies{" "}
            <span className="italic text-gray-900">unity</span>,{" "}
            <span className="italic text-gray-900">compassion</span>, and{" "}
            <span className="italic text-gray-900">heritage</span> in all its
            initiatives.
          </p>

          <div className="grd sm:grid-cols-2 gap-5 mt-6 hidn">
            <FeaturePoint
              icon={<Users className="w-4 h-4 text-blue-800" />}
              title="Our Mission"
            >
              To preserve cultural heritage while empowering lives through education, compassion, and sustainable community initiatives.
            </FeaturePoint>

            <FeaturePoint
              icon={<BookOpen className="w-4 h-4 text-blue-800" />}
              title="Our Vission"
            >
              To build a culturally inspired, compassionate society where every family and child can thrive with dignity and hope.
            </FeaturePoint>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden flex flex-wrap gap-2 mt-10"
          >
            <div className="flex flex-col w-full sm:flex-row gap-4 justifycenter md: justify-start">
            <a
              href="/donate"
              className="bg-blue-800 text-center md:px-8 md:py-3 text-white font-semibold py-2 px-3 rounded-lg shadow-md hover:bg-gray-100 transition"
            >
              Donate
            </a>
            <a
              href="/volunteer"
              className="border text-center md:px-8 md:py-3 border-blue-700 text-blue-700 font-semibold py-2 px-3 rounded-lg hover:bg-white/10 transition"
            >
              Volunteer
            </a>
          </div>
          </motion.div>

          {/* Mission & Vision Cards 
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/90 backdrop-blur-sm border border-pink-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500"
            >
              <div className="flex items-center mb-3">
                <Target className="w-6 h-6 text-pink-700 mr-2" />
                <h3 className="text-lg font-bold text-blue-900 font-serif">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-base">
                To preserve cultural heritage while empowering communities
                through education, compassion, and sustainable charitable
                initiatives for orphans, families, and those in need.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/90 backdrop-blur-sm border border-pink-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500"
            >
              <div className="flex items-center mb-3">
                <Eye className="w-6 h-6 text-pink-700 mr-2" />
                <h3 className="text-lg font-bold text-blue-900 font-serif">
                  Our Vision
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-base">
                To create a culturally inspired, compassionate society where
                every vulnerable child and family can thrive with dignity,
                opportunity, and hope.
              </p>
            </motion.div>
          </div>
          */}
        </motion.div>
        

        {/* RIGHT SIDE — IMAGE + DID YOU KNOW */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center"
        >
          {/* Image */}
          <div className="relative group w-full max-wmd mx-auto overflow-hidden rounded shadow-2xl border border-white/80">
            <img
              src="/images/utamaduni at mathare/_DSC8999.jpg"
              alt="Community work"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>

          

          {/* Did You Know 
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-10 bg-white/95 border border-pink-100 shadow-lg rounded-2xl p-6 max-w-md hover:shadow-2xl transition-all duration-500 text-left"
          >
            <div className="flex items-center mb-3">
              <Info className="w-6 h-6 text-pink-700 mr-2" />
              <h3 className="text-lg font-semibold text-blue-900 font-serif">
                Did You Know?
              </h3>
            </div>
            <p className="text-gray-700 text-base leading-relaxed">
              The name <span className="font-medium">“Utamaduni”</span> means{" "}
              <span className="italic text-blue-800">“culture”</span> in Swahili
              — reflecting our belief that culture is the foundation of identity
              and a bridge to building stronger, more compassionate communities.
            </p>
          </motion.div>
          */}
        </motion.div>
      </div>
    </section>
  );
}


/* ----------------------
   Subcomponent
---------------------- */
function FeaturePoint({ icon, title, children }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="pl-2 bgwhite rounded-md bordr border-gray-200  shadow flex gap-3 items-start hover:shadow-lg transition"
    >
      <div className="p2 roundedfull borer border-pink-600 b-blue-50 hidden">{icon}</div>
      <div>
        <h4 className="text-left font-bold text-blue-800 fontserif md:text-lg my-2">{title}</h4>
        <p className="text-left text-base text-gray-700 mt-1 mb-4 md:mb-0">{children}</p>
      </div>
    </motion.div>
  );
}