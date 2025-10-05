"use client";

import { motion } from "framer-motion";
import {
  Users,
  HeartPulse,
  Accessibility,
  Baby,
  Home,
  GraduationCap,
  HandHeart,
  Globe,
} from "lucide-react";

const projects = [
  {
    title: "Orphans and Vulnerable Children",
    description:
      "Providing shelter, education, and emotional support to children without families, helping them build a hopeful future.",
    icon: <Baby className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "Persons Living with HIV/AIDS",
    description:
      "Offering healthcare, counseling, and awareness programs to promote dignity, hope, and healthy living.",
    icon: <HeartPulse className="w-10 h-10 text-red-600" />,
  },
  {
    title: "Persons with Disabilities",
    description:
      "Supporting inclusion through accessibility programs, education, and skills empowerment for persons with disabilities.",
    icon: <Accessibility className="w-10 h-10 text-green-600" />,
  },
  {
    title: "Women and Single Mothers",
    description:
      "Empowering women and single mothers through entrepreneurship training, mentorship, and community-based initiatives.",
    icon: <HandHeart className="w-10 h-10 text-pink-600" />,
  },
  {
    title: "Elderly Persons",
    description:
      "Providing care, companionship, and medical assistance to elderly people who lack family or social support.",
    icon: <Home className="w-10 h-10 text-yellow-600" />,
  },
  {
    title: "Street Children and Youth",
    description:
      "Rehabilitating and educating street children and youth to help them become productive and confident members of society.",
    icon: <GraduationCap className="w-10 h-10 text-purple-600" />,
  },
  {
    title: "Refugees and Displaced Families",
    description:
      "Offering emergency support, education, and empowerment to families affected by displacement and conflict.",
    icon: <Globe className="w-10 h-10 text-indigo-600" />,
  },
  {
    title: "Marginalized and Remote Communities",
    description:
      "Improving access to healthcare, education, and clean water for people living in remote or marginalized areas.",
    icon: <Users className="w-10 h-10 text-teal-600" />,
  },
];

export default function Projects() {
  return (
    <section
      className="bg-gradient-to-b from-blue-50 via-white to-green-50 py-16 px-6"
      id="projects"
    >
      {/* Header */}
      <motion.div
        className="max-w-6xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Our Projects & Focus Areas
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We dedicate our programs to improving the lives of vulnerable and
          marginalized groups through compassion, empowerment, and sustainable
          support.
        </p>
      </motion.div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 p-6 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">{project.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 text-sm">{project.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition">
          See Our Impact
        </button>
      </motion.div>
    </section>
  );
}
