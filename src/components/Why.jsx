"use client";
import { motion } from "framer-motion";
import { HeartHandshake, Users, GraduationCap } from "lucide-react"; // icons

export default function WhyWeExist() {
  return (
    <section className="bg-amber-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl fontserif font-black leading-tight text-gray-800"
        >
          Why We Exist
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-700 max-w-3xl mx-auto"
        >
          Our organization was founded to bring hope, dignity, and opportunity
          to children and families facing poverty and vulnerability. We believe
          that every child deserves access to education, healthcare, and daily
          necessities, and that together we can create lasting change in our
          communities.
        </motion.p>
      </div>

      {/* Benefits Grid */}
      <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
        {/* 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition"
        >
          <HeartHandshake className="w-12 h-12 mx-auto text-blue-700 mb-4" />
          <h3 className="font-bold text-gray-800 fontserif text-lg my-2">
            Transforming Lives
          </h3>
          <p className="text-gray-600">
            Your giving provides food, shelter, and healthcare to those who
            need it most, bringing hope and dignity to vulnerable children.
          </p>
        </motion.div>

        {/* 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition"
        >
          <Users className="w-12 h-12 mx-auto text-blue-700 mb-4" />
          <h3 className="font-bold text-gray-800 fontserif text-lg my-2">
            Building Strong Communities
          </h3>
          <p className="text-gray-600">
            Every contribution strengthens families and communities, creating a
            ripple effect that benefits generations to come.
          </p>
        </motion.div>

        {/* 3 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition"
        >
          <GraduationCap className="w-12 h-12 mx-auto text-blue-700 mb-4" />
          <h3 className="font-bold text-gray-800 fontserif text-lg my-2">
            Education for the Future
          </h3>
          <p className="text-gray-600">
            Sponsorships and donations fund education, giving children the
            chance to break the cycle of poverty and achieve their dreams.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
