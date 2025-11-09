"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="relative bg-gradient-to-br from-amber-50 via-white to-blue-50 text-gray-900 py-20 px-6 md:px-16 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10 bg-cover"></div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Header 
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-extrabold text-blue-900 mb-4 font-serif">
            Get in Touch
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you want to collaborate, volunteer, or just say hello — we’d
            love to hear from you at <span className="font-semibold">Utamaduni Organization</span>.
          </p>
        </motion.div>
      */}
        {/* Contact Info + Form */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-10"
          >
            <h4 className="text-xl font-semibold text-blue-900 mb-4 font-serif">
                Contact Information
              </h4>
            <p className="text-gray-700 leading-relaxed">
              You can reach us directly through the contacts below or send a
              message using the form. We respond to all inquiries promptly.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-full shadow-sm">
                  <Phone className="text-blue-900" size={24} />
                </div>
                <p className="text-gray-800 font-medium text-lg">
                  +254 704 337 351
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-full shadow-sm">
                  <Mail className="text-blue-900" size={24} />
                </div>
                <p className="text-gray-800 font-medium text-lg">
                  utamadunicharity@gmail.com
                </p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-10">
              <h4 className="text-xl font-semibold text-blue-900 mb-4 font-serif">
                Follow Us
              </h4>
              <div className="flex gap-5">
                {[
                  {
                    icon: <FaInstagram size={22} />,
                    color: "hover:bg-pink-500",
                    link: "#",
                  },
                  {
                    icon: <FaTiktok size={22} />,
                    color: "hover:bg-black",
                    link: "#",
                  },
                  {
                    icon: <FaFacebookF size={22} />,
                    color: "hover:bg-blue-600",
                    link: "#",
                  },
                  {
                    icon: <FaYoutube size={22} />,
                    color: "hover:bg-red-600",
                    link: "#",
                  },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className={`p-3 bg-blue-100 text-blue-900 rounded-full shadow-md transition-all duration-300 ${social.color} hover:text-white`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>

              <p className="mt-10 text-2xl font-serif italic text-pink-600 textsm">
                @Utamaduni Organization
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-white shadow-2xl p-8 rounded-2xl border border-blue-100 space-y-6"
          >
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-amber-50 text-gray-900 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 border border-blue-100"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-amber-50 text-gray-900 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 border border-blue-100"
                placeholder="example@email.com"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Your Message
              </label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-amber-50 text-gray-900 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 border border-blue-100"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-md w-full transition-all duration-300 shadow-md"
            >
              <Send size={20} /> Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
