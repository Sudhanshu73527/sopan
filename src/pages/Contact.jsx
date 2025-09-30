import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendOnWhatsApp = () => {
    const phoneNumber = "91XXXXXXXXXX"; // Replace with your WhatsApp number
    const text = `Hello, I am ${form.name} (${form.email}).%0A%0A${form.message}`;
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  // Animations
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20 px-6 md:px-16 lg:px-32 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.header
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Let’s Connect
          </h2>
          <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
            We’d love to hear from you! Reach out for any questions, support, or
            collaborations.
          </p>
        </motion.header>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white shadow-2xl rounded-3xl p-10 hover:shadow-purple-200 transition"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-8">
              Contact Information
            </h3>
            <ul className="space-y-6 text-gray-700 text-lg">
              <li className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-purple-600 text-2xl" />
                <span>123 Street, City, State, ZIP</span>
              </li>
              <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-purple-600 text-2xl" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-4">
                <FaEnvelope className="text-purple-600 text-2xl" />
                <span>info@example.com</span>
              </li>
              <li className="flex items-center gap-4">
                <FaWhatsapp className="text-green-600 text-2xl" />
                <span>+91 98765 43210</span>
              </li>
            </ul>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white shadow-2xl rounded-3xl p-10 hover:shadow-blue-200 transition"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-8">
              Submit 
            </h3>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-5"
            >
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none shadow-sm"
              />
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none shadow-sm"
              />
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                required
                className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none shadow-sm"
              ></motion.textarea>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={sendOnWhatsApp}
                className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition"
              >
                <FaWhatsapp /> Submit
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
