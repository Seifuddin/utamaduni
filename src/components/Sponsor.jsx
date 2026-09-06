"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  HeartHandshake, 
  GraduationCap, 
  Stethoscope, 
  Utensils, 
  ArrowRight,
  Sparkles,
  Shield,
  Users
} from "lucide-react";
import { useRef } from "react";

const features = [
  {
    icon: HeartHandshake,
    title: "Care & Support",
    description: "Providing emotional and social support for every child.",
    color: "from-rose-400 to-rose-600",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Access to quality education and school essentials.",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    description: "Medical care and regular health support.",
    color: "from-emerald-400 to-emerald-600",
  },
  {
    icon: Utensils,
    title: "Nutrition",
    description: "Access to balanced meals for healthy growth.",
    color: "from-amber-400 to-amber-600",
  },
];

const stats = [
  { value: "200+", label: "Children Sponsored", icon: Users },
  { value: "95%", label: "School Attendance", icon: GraduationCap },
  { value: "100%", label: "Healthcare Access", icon: Stethoscope },
];

export default function SponsorProgram() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-12 md:py-16 px-6 lg:px-20 overflow-hidden bg-white"
    >
      {/* Decorative Elements - Removed */}
      
      {/* Floating Orbs - Made smaller */}
      <div className="absolute top-20 left-10 w-48 h-48 bg-pink-300/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-56 h-56 bg-purple-300/20 rounded-full blur-3xl animate-float-delayed" />

      <motion.div 
        style={{ opacity, scale }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-lg shadow-pink-200/50 mb-4 border border-white/50"
          >
            <Sparkles className="w-3.5 h-3.5 text-pink-500" />
            <span className="text-xs font-medium text-pink-700 tracking-wider">CHILD SPONSORSHIP</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">
            Sponsor a Child Today,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-500 to-pink-700">
              Transform a Future
            </span>
          </h2>

          <div className="w-16 h-0.5 bg-gradient-to-r from-pink-400 to-rose-500 mx-auto rounded-full mb-4" />

          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Your support provides education, healthcare, and essential needs for children in vulnerable communities.
          </p>
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* LEFT - IMAGE WITH STATS OVERLAY */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full h-[280px] md:h-[350px] rounded-2xl overflow-hidden shadow-xl shadow-pink-300/20">
              <Image
                src="/images/childsupport.webp"
                alt="Child Sponsorship"
                fill
                className="object-cover hover:scale-110 transition-transform duration-1000"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              {/* Stats Overlay on Image */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="grid grid-cols-3 gap-3">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                        className="text-center bg-blue-50 backdrop-blur-md rounded -xl p-2 border border-gray-200"
                      >
                        <Icon className="w-4 h-4 text-pink-500 mx-auto mb-0.5" />
                        <p className="text-blue-900 font-bold text-base">{stat.value}</p>
                        <p className="text-gray-700 text-[10px]">{stat.label}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Decorative floating badge - Made smaller */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute -top-3 -right-3 bg-white rounded-2xl shadow-2xl px-4 py-3 hidden lg:block border border-pink-100"
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
                  <HeartHandshake className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-800">Making Impact</p>
                  <p className="text-[10px] text-gray-500">Together we can change lives</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT - CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-2 md:p-4 shadow-xl shadow-pink-200/20 border border-white/50">
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                Through sponsorship, you directly impact a child's future by ensuring access to education, healthcare, and daily care.
              </p>

              {/* FEATURES - Now with icon and title in same row */}
              <div className="grid sm:grid-cols-2 gap-2 mb-3">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                      className="group p-2 rounded -xl bg-white/50 hover:bg-white transition-all duration-300 hover:shadow-lg hover:shadow-pink-200/20 border border-gray-100 hover:border-pink-100"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg shadow-${feature.color.split(' ')[1]}/30 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <h4 className="text-base font-semibold text-gray-900">{feature.title}</h4>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed pl-10">{feature.description}</p>
                    </motion.div>
                  );
                })}
              </div>

              {/* QUOTE WITH BORDER */}
              <div className="hiddn relative bg-white/50 rounded-xl p-4 mb-6 border-l-4 border-pink-400">
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center shadow-lg shadow-pink-300/50">
                  <span className="text-white text-[12px] font-bold">"</span>
                </div>
                <p className="text-gray-700 text-xs italic leading-relaxed pl-3">
                  Whoever welcomes one of these little children in my name welcomes me.
                </p>
                <p className="text-[12px] text-gray-500 mt-1 pl-3">— Matthew 18:5</p>
              </div>

              {/* BUTTONS */}
              <div className="hidden flex flex-wrap gap-3">
                <Link
                  href="/donate"
                  className="group relative px-6 py-2.5 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-medium rounded-full shadow-lg shadow-pink-400/30 hover:shadow-pink-400/50 transition-all duration-300 flex items-center gap-2 overflow-hidden text-sm"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Support Us
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>

                <Link
                  href="/contact"
                  className="px-6 py-2.5 bg-white text-pink-700 font-medium rounded-full border-2 border-pink-200 hover:border-pink-400 hover:bg-pink-50 transition-all duration-300 shadow-md hover:shadow-lg text-sm"
                >
                  Join Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-5deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}