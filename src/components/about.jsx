"use client";
import { motion } from "framer-motion";
import { Target, Eye, Info } from "lucide-react";

export default function Abouts() {
  return (
    <section className="relative bg-amber-50 gradient-to-br from-amber-50 via-white to-blue-50 text-gray-800 overflow-hidden py-20">
      {/* Decorative pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern-light.png')] opacity-5 bg-cover bg-center"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center gap-14">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:w-5/12 text-left"
        >
          <p className="inline-block text-sm uppercase tracking-wide font-semibold text-pink-700 mb-3">
            About Us
          </p>

          <h1 className="text-2xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Who We Are
          </h1>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 0.6 }}
            className="h-1 bg-pink-700 rounded-full mb-8"
          ></motion.div>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            <span className="font-semibold text-blue-900">Utamaduni</span> is a
            community-based, non-profit organization dedicated to preserving{" "}
            <span className="font-medium text-blue-900">cultural heritage</span>{" "}
            while uplifting vulnerable families and children. Rooted in the richness
            of African culture, Utamaduni embodies{" "}
            <span className="italic text-blue-900">unity</span>,{" "}
            <span className="italic text-blue-900">compassion</span>, and{" "}
            <span className="italic text-blue-900">heritage</span> in all its
            charitable initiatives.
          </p>

          {/* Mission and Vision Cards */}
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="bg-white/80 backdrop-blur-sm border border-blue-100 rounded-2xl p-3 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="flex items-center mb-3">
                <Target className="w-6 h-6 text-pink-700 mr-2" />
                <h3 className="text-lg font-bold text-blue-900 font-serif">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-base">
                To preserve cultural heritage while providing humanitarian support through education,
              empowerment, and sustainable charitable initiatives for orphans, needy families, and
              communities in need.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="bg-white/80 backdrop-blur-sm border border-blue-100 rounded-2xl p-3 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="flex items-center mb-3">
                <Eye className="w-6 h-6 text-pink-700 mr-2" />
                <h3 className="text-lg font-bold text-blue-900 font-serif">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-base">
                To create a culturally inspired, compassionate society where vulnerable children and
              families can thrive with dignity and hope.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE + DID YOU KNOW */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2 flex flex-col items-center text-center"
        >
          <div className="relative group">
            <img
              src="/images/utamaduni at mathare/_DSC8999.jpg"
              alt="Community work"
              className="w-full max-wmd md:max-wlg lg:max-wxl rounded shadow-2xl border4 border-white grouphover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 rounded-3xl ring-2 ring-blue-700/30 group-hover:ring-yellow-400/50 transition-all duration-700"></div>
          </div>

          {/* DID YOU KNOW SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-8 bg-white/90 border border-blue-100 shadow-md rounded-2xl p-6 max-wmd hover:shadow-xl transition-all duration-500"
          >
            <div className="flex items-center justify-center mb-2">
              <Info className="w-6 h-6 text-pink-700 mr-2" />
              <h3 className="text-lg font-semibold text-blue-900 font-serif">Did You Know?</h3>
            </div>
            <p className="text-gray-700 text-base leading-relaxed text-left">
              The name "Utamaduni" means {" "}
              <span className="italic text-blue-800">“culture”</span>, in Swahili — a reflection of our belief that
            culture is the foundation of identity and a bridge to building stronger,
            compassionate communities.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
