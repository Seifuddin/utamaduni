"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Send, MapPin, Building2 } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn
} from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    setLoading(false);

    if (res.ok) {
      setStatus("Message sent successfully!");
      e.target.reset();
    } else {
      setStatus("Failed to send message. Try again.");
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-amber-50 via-white to-blue-50 text-gray-900 py-20 px-6 md:px-16 overflow-hidden">
      <div className="rounded-xl p6 md:p12 max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-5">

          {/* CONTACT INFORMATION */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 bg-gray-50 shadow-xl border border-blue-100 p-5 py-10 rounded-lg"
          >
            <h4 className="text-xl font-semibold text-gray-900 mb-6 fontserif">
              Contact Information
            </h4>

            <div className="flex items-start space-x-4">
              <Mail className="text-blue-800 mt-1" />
              <div>
                <h4 className="font-bold text-gray-700">Email</h4>
                <p className="text-gray-600">utamadunicharity@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="text-blue-800 mt-1" />
              <div>
                <h4 className="font-bold text-gray-700">Phone</h4>
                <p className="text-gray-600">+254 704 337 351</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="text-blue-800 mt-1" />
              <div>
                <h4 className="font-bold text-gray-700">Location</h4>
                <p className="text-gray-600">Nairobi, Kenya</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Building2 className="text-blue-800 mt-1" />
              <div>
                <h4 className="font-bold text-gray-700">Building</h4>
                <p className="text-gray-600">
                  Utamaduni Plaza, Nairobi
                </p>
              </div>
            </div>

            <h4 className="font-semibold text-gray-900 text-lg fontserif mt-5">
              Follow, Like and Subscribe: @Utamaduni Organization
            </h4>

            <div className="flex space-x-4 pt-4">
              <a href="https://www.facebook.com/profile.php?id=61570938634560">
                <FaFacebookF size={20} className="text-blue-700 hover:text-orange-500" />
              </a>
              <a href="https://www.instagram.com/utamaduni_organization">
                <FaInstagram size={20} className="text-pink-600 hover:text-orange-500" />
              </a>
              <a href="https://www.youtube.com/@utamadunifoundation">
                <FaYoutube size={20} className="text-red-700 hover:text-orange-500" />
              </a>
              <a href="https://x.com/UTAMADUNIF23567">
                <FaTwitter size={20} className="text-blue-400 hover:text-orange-500" />
              </a>
              <a href="https://www.tiktok.com/@utamaduni01_org">
                <FaTiktok size={20} className="text-black hover:text-orange-500" />
              </a>
              <a href="https://www.linkedin.com/in/utamaduni-organization-408a24345">
                <FaLinkedinIn size={20} className="text-blue-600 hover:text-orange-500" />
              </a>
            </div>
          </motion.div>

          {/* CONTACT FORM */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 border border-blue-100 p-5 rounded-lg shadow-xl space-y-4"
            onSubmit={handleSubmit}
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-6 fontserif">
              Send Us a Message
            </h2>

            <input
              type="text"
              name="name"
              className="w-full mt-1 p-2 border rounded-md bg-gray-50"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="email"
              className="w-full mt-1 p-2 border rounded-md bg-gray-50"
              placeholder="Your Email"
              required
            />

            <input
              type="tel"
              name="phone"
              className="w-full mt-1 p-2 border rounded-md bg-gray-50"
              placeholder="Your Phone Number"
            />

            <input
              type="text"
              name="subject"
              className="w-full mt-1 p-2 border rounded-md bg-gray-50"
              placeholder="Subject of Your Message"
            />

            <textarea
              name="message"
              rows="4"
              className="w-full mt-1 p-2 rounded-lg border bg-gray-50"
              placeholder="Your Message"
              required
            ></textarea>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-blue-800 hover:bg-blue-900 text-white font-semibold py-3 px-6 rounded-md w-full transition-all duration-300"
            >
              {loading ? "Sending..." : <> <Send size={20} /> Send Message </>}
            </button>

            {status && (
              <p className="text-center mt-2 text-green-700 font-semibold">
                {status}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </div>
  );
}
