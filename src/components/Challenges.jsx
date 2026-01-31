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
    <section className="relative bg-amber-50 gradient-to-b from-blue-50 via-white to-amber-50 text-gray-800 px6 py-10 overflow-hidden">
      {/* Decorative background 
      <div className="absolute inset-0 bg-[url('/images/pattern-light.png')] opacity-5 bg-cover bg-center"></div>
*/}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
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
          <h2 className="text-2xl md:text-4xl fontserif font-bold text-gray-900 mb-4">
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
              className="flex items-start gap-4 bgwhite/80 border-b border-gray-200 rounded-lg p-2 shadowhover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="p-2 rounded -full border border-blue-800 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900">{item.icon}</div>
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
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="relativ text-center mt-14 bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-xl wfull p-4 py-10 shadow2xl max-w-7xl mx-auto"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-2 fontserif">
            Together, We Can Overcome
          </h3>
          <p className="text-base text-blue-50 mb-5">
            Each challenge is a call to action — an opportunity to uplift lives,
            restore hope, and strengthen the foundation of our shared humanity.
          </p>
           <div className="flex flex-col w-full sm:flex-row gap-4 justify-center md: justifystart">
            <a
              href="/donate"
              className="bg-pink-600 text-center md:px-8 md:py-3 text-white font-semibold py-2 px-3 rounded-lg shadow-md hover:bg-gray-100 transition"
            >
              Support Us
            </a>
            <a
              href="/contact"
              className="border border-white text-center md:px-8 md:py-3 text-white font-semibold py-2 px-3 rounded-lg hover:bg-white/10 transition"
            >
              Join Us
            </a>
          </div>
        </motion.div>
      </div>
      
    </section>
  );
}
