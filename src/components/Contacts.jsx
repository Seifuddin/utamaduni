"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="relative bg-amber-50 text-gray-900 py-20 px-6 md:px-16 overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10 bg-cover"></div>

      {/* Header 
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-blue-700">
          Contact Us
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          We’d love to hear from you. Whether you want to volunteer, donate, or
          learn more about Utamaduni, we’re always happy to connect.
        </p>
      </motion.div>
      */}

      {/* Contact Info & Form */}
      <div className="relative grid md:grid-cols-2 gap-10 items-start">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">
              Get in Touch
            </h3>
            <p className="text-gray-700">
              You can reach us through any of the contact options below or send
              a message directly via the form.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <Phone className="text-blue-900" size={24} />
              </div>
              <p className="text-gray-700 font-medium">+254 712 345 678</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <Mail className="text-blue-900" size={24} />
              </div>
              <p className="text-gray-700 font-medium">
                info@utamadunicharity.org
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <MapPin className="text-blue-900" size={24} />
              </div>
              <p className="text-gray-700 font-medium">
                Nairobi, Kenya – Community Outreach Center
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-white shadow-xl p-8 rounded-2xl border border-blue-100 space-y-6"
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
              className="w-full bg-amber-50 text-gray-900 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border border-blue-100"
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
              className="w-full bg-amber-50 text-gray-900 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border border-blue-100"
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
              className="w-full bg-amber-50 text-gray-900 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border border-blue-100"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-md w-full transition duration-300"
          >
            <Send size={20} /> Send Message
          </button>
        </motion.form>
      </div>

      {/* Google Map Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="relative mt-20 rounded-2xl overflow-hidden shadow-lg border border-blue-100"
      >
        <iframe
          title="Utamaduni Charitable Organization Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8598659777323!2d36.82194641475394!3d-1.292065999051032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d0c7df3c91%3A0x36c4e5a1f8d60c52!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1685715227190!5m2!1sen!2ske"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0 w-full"
        ></iframe>
      </motion.div>
    </section>
  );
}
