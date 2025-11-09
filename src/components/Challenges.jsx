"use client";
import { motion } from "framer-motion";
import { HeartCrack, Users, Droplet, School, Leaf } from "lucide-react";

export default function Challenges() {
  const challenges = [
    {
      icon: <HeartCrack className="w-6 h-6 text-pink-700" />,
      title: "Poverty & Vulnerability",
      description:
        "Many families struggle to afford basic needs such as food, shelter, and healthcare, leaving children especially vulnerable.",
    },
    {
      icon: <School className="w-6 h-6 text-pink-700" />,
      title: "Limited Access to Education",
      description:
        "Numerous children lack access to quality education due to financial hardship and limited resources.",
    },
    {
      icon: <Droplet className="w-6 h-6 text-pink-700" />,
      title: "Clean Water & Sanitation",
      description:
        "Some communities still face water scarcity and sanitation challenges that affect health and well-being.",
    },
    {
      icon: <Users className="w-6 h-6 text-pink-700" />,
      title: "Youth Unemployment",
      description:
        "High unemployment rates among youth lead to frustration, hopelessness, and social instability.",
    },
    {
      icon: <Leaf className="w-6 h-6 text-pink-700" />,
      title: "Environmental Degradation",
      description:
        "Deforestation and poor waste management continue to threaten the environment and community sustainability.",
    },
  ];

  return (
    <section className="relative bg-amber-50 gradient-to-b from-blue-50 via-white to-amber-50 text-gray-800 py-16 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[url('/images/pattern-light.png')] opacity-5 bg-cover bg-center"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-sm uppercase tracking-wide font-semibold text-pink-700 mb-2">
            Our Challenges
          </p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">
            The Realities We Face
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ duration: 0.5 }}
            className="h-1 bg-pink-700 rounded-full mx-auto mb-6"
          ></motion.div>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto font-medium text-center md:text-lg mb-6">
            At <span className="font-semibold text-gray-800">Utamaduni</span>, we face
            several pressing challenges that shape our mission and deepen our commitment
            to empowering communities and preserving culture.
          </p>
        </motion.div>

        {/* Challenges Points */}
        <div className="space-y-5 text-left max-w-3xl mx-auto">
          {challenges.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 bg-white/80 border border-blue-100 rounded-2xl p-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex-shrink-0 mt-1">{item.icon}</div>
              <div>
                <h3 className="font-bold text-blue-900 font-serif md:text-lg my-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-14 bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-2xl p-8 shadow-2xl max-w3xl mx-auto"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-2 font-serif">
            Together, We Can Overcome
          </h3>
          <p className="text-base text-blue-50 mb-5">
            Each challenge is a call to action — an opportunity to uplift lives,
            restore hope, and strengthen the foundation of our shared humanity.
          </p>
          <button className="bg-white text-blue-700 px-6 py-3 rounded-full font-medium shadow-md hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300">
            Join Our Mission
          </button>
        </motion.div>
      </div>
    </section>
  );
}
