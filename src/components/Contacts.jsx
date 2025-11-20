"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Send, MapPin, Building2 } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  return (
    <div
      className="relative bg-gradient-to-br from-amber-50 via-white to-blue-50 text-gray-900 py-20 px-6 md:px-16 overflow-hidden">
      {/* style={{
        backgroundImage: `url('/images/pngwng.com (7).png')`,
      }}
        */}
      <div className="rounded-xl p-6 md:p-12 max-w-6xl mx-auto">
        {/* Header 
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950">
            Contact <span className="text-orange-500">Us</span>
          </h1>
          <p className="text-gray-700 mt-4 text-lg">
            Have a project in mind? We'd love to hear from you.
          </p>
        </motion.div>
        */}
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 bg-gray-50 shadow-xl border border-blue-100 p-5 py-10 rounded-lg"
          >
            <h4 className="hiddn text-xl font-bold text-blue-800 mb-6 fontserif">Contact Information</h4>
            <div className="flex items-start space-x-4 shadowmd p1">
              <Mail className="text-pink-600 mt-1" />
              <div>
                <h4 className="font-bold text-gray-800">Email</h4>
                <p className="text-gray-600">utamadunicharity@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 shadowmd p1">
              <Phone className="text-pink-600 mt-1" />
              <div>
                <h4 className="font-bold text-gray-800">Phone</h4>
                <p className="text-gray-600">+254 704 337 351</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 shadowmd p1">
              <MapPin className="text-pink-600 mt-1" />
              <div>
                <h4 className="font-bold text-gray-800">Location</h4>
                <p className="text-gray-600">Nairobi, Kenya</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 shadowmd p1">
              <Building2 className="text-pink-600 mt-1" />
              <div>
                <h4 className="font-bold text-gray-800">Building</h4>
                <p className="text-gray-600">Moi Avenue, Utamaduni House, First Floor, Room No. 1</p>
              </div>
            </div>

            {/* Social Media Icons */}
            <h4 className="font-bold text-blue-800 text-lg fontserif mt-5">Follow, Like and Subscribe: @Utamaduni Organization</h4>
            <div className="flex space-x-4 pt-4">
              <a href="https://www.facebook.com/profile.php?id=61570938634560" aria-label="Facebook" className="text-blue-700 hover:text-orange-500 shadow-md p-1">
                <FaFacebookF size={20} />
              </a>
              <a href="https://www.instagram.com/utamaduni_organization" aria-label="Instagram" className="text-pink-600 hover:text-orange-500 shadow-md p-1">
                <FaInstagram size={20} />
              </a>
              <a href="https://www.youtube.com/@utamadunifoundation" aria-label="Youtube" className="text-red-700 hover:text-orange-500 shadow-md p-1">
                <FaYoutube size={20} />
              </a>
              <a href="https://x.com/UTAMADUNIF23567?t=rjVT0oXFEUwkKdPeiYyDKg&s=09" aria-label="Twitter" className="text-blue-400 hover:text-orange-500 shadow-md p-1">
                <FaTwitter size={20} />
              </a>
              <a href="https://www.tiktok.com/@utamaduni01_org?is_from_webapp=1&sender_device=pc" aria-label="TikTok" className="text-black hover:text-orange-500 shadow-md p-1">
                <FaTiktok size={20} />
              </a>
              <a href="https://www.linkedin.com/in/utamaduni-organization-408a24345?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" aria-label="LinkedIn" className="text-blue-600 hover:text-orange-500 shadow-md p-1">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 border border-blue-100 p-6 rounded-lg shadow-xl space-y-4"
            onSubmit={(e) => {
              epreventDefault();
              // Handle submission
            }}
          >
          8<h2 className="hiddn text-xl font-bold text-blue-900 mb-6 fontserif">Send Us a Message</h2>

            <div>
              <label className="block font-semibold text-gray-800">Full Name</label>
              <input
                type="text"
                name="name"
                className="w-full text-blue-900 mt-1 p-2 border border-blue-100 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 shadowmd"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label className="block font-semibold  text-gray-800">Email Address</label>
              <input
                type="email"
                name="email"
                className="w-full text-blue-900 mt-1 p-2 border border-blue-100 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 shadowmd"
                placeholder="Your Email"
                required
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-800">Phone Number</label>
              <input
                type="tel"
                name="phone"
                className="w-full text-blue-900 mt-1 p-2 border border-blue-100 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 shadowmd"
                placeholder="Your Phone Number"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-800">Subject</label>
              <input
                type="text"
                name="subject"
                className="w-full text-blue-900 mt-1 p-2 border border-blue-100 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 shadowmd"
                placeholder="Subject of Your Message"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-800">Message</label>
              <textarea
                name="message"
                rows="4"
                className="w-full text-blue-900 mt-1 p-2 rounded-lg border border-blue-100 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 shadowmd"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-md w-full transition-all duration-300 shadow-md"
            >
              <Send size={20} /> Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}