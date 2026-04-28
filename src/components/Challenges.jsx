"use client";
import { motion } from "framer-motion";
import { HeartCrack, Users, Droplet, School, Leaf } from "lucide-react";

export default function Challenges() {
  const challenges = [
    {
      icon: <HeartCrack className="w-5 h-5 text-white" />,
      title: "Poverty & Vulnerability",
      description:
        "Many families struggle to afford basic needs such as food, shelter, and healthcare, leaving children especially vulnerable.",
    },
    {
      icon: <School className="w-5 h-5 text-white" />,
      title: "Limited Access to Education",
      description:
        "Numerous children lack access to quality education due to financial hardship and limited resources.",
    },
    {
      icon: <Droplet className="w-5 h-5 text-white" />,
      title: "Clean Water & Sanitation",
      description:
        "Some communities still face water scarcity and sanitation challenges that affect health and well-being.",
    },
    {
      icon: <Users className="w-5 h-5 text-white" />,
      title: "Youth Unemployment",
      description:
        "High unemployment rates among youth lead to frustration, hopelessness, and social instability.",
    },
    {
      icon: <Leaf className="w-5 h-5 text-white" />,
      title: "Environmental Degradation",
      description:
        "Deforestation and poor waste management continue to threaten the environment and community sustainability.",
    },
  ];

  return (
    <section className="relative bg-amber-50 text-gray-800 overflow-hidden">
      {/* Decorative background 
      <div className="absolute inset-0 bg-[url('/images/pattern-light.png')] opacity-5 bg-cover bg-center"></div>
*/}
      <div className="relative bg-amber-50 z-10 max-w-7xl mx-auto px-6 pt-16 text-center">
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
          <h2 className="text-2xl md:text-3xl fontserif font-bold text-gray-900 mb-4">
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
        <div className="space-y-5 text-left max-w-5xl mx-auto">
          {challenges.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 bg-amber-50 border-b border-pink-200 rounded-lg p-2 shadowhover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="p-2 rounded -full borderborder-blue-800 bg-gradient-to-br from-pink-900 via-pink-700 to-pink-500">{item.icon}</div>
              <div>
                <h3 className="font-semibold text-gray-900 fontserif text-lg md:text-xl my-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="w-full text-center mt-14 bg-[#050b1a] text-white p-6 py-16 shadow2xl max-w-7xlmx-auto"
        >
          {/* Background */}
          {/* Soft cinematic glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.2),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(236,72,153,0.12),transparent_60%)]" />

      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('/images/patterns.png')] bg-cover bg-center" />
          <h3 className="text-xl md:text-2xl font-bold mb-2 fontserif">
            Together, We Can Overcome
          </h3>
          <p className="text-base text-blue-50 mb-5">
            Each challenge is a call to action — an opportunity to uplift lives,
            restore hope, and strengthen the foundation of our shared humanity.
          </p>
           {/* Buttons */}
        <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">

          <a
            href="/donate"
            className="
              px-7 py-2.5 rounded-full
              bg-white text-black text-sm font-medium
              hover:bg-pink-500 hover:text-white
              transition
            "
          >
            Donate
          </a>

          <a
            href="/contact"
            className="
              px-7 py-2.5 rounded-full
              border border-white/20 text-white/70 text-sm
              hover:border-white hover:text-white
              transition
            "
          >
            Get Involved
          </a>
        </div>
        {/* Micro trust line */}
        <p className="mt-6 text-[10px] text-white/40">
          Transparent • Verified impact • Community driven
        </p>
        </motion.div>
      
      
    </section>
  );
}
