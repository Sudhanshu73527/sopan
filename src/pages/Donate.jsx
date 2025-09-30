import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaHandsHelping, FaWhatsapp, FaQrcode } from "react-icons/fa";

const Donate = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    amount: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = "918789348757"; // Replace with your NGO WhatsApp number
    const text = `🙏 Donation Request 🙏\n
Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Address: ${form.address}
Amount: ₹${form.amount}
Message: ${form.message}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section className="relative bg-gradient-to-r from-green-50 to-green-100 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center text-gray-800 mb-4"
        >
          <FaHandsHelping className="inline-block mr-3 text-green-600" />
          Support <span className="text-green-600">Sopan NGO</span>
        </motion.h2>

        {/* Highlight Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-green-600 text-white text-lg md:text-xl font-semibold py-4 px-6 rounded-xl text-center shadow-md mb-12"
        >
           "Your small step today can change a child’s tomorrow. Donate with
          love, donate with hope." 
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Donate Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white text-gray-800 rounded-2xl shadow-xl p-8 space-y-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={form.address}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>

            <input
              type="number"
              name="amount"
              placeholder="Donation Amount (₹)"
              value={form.amount}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />

            <textarea
              name="message"
              placeholder="Your Message (Optional)"
              value={form.message}
              onChange={handleChange}
              rows="3"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold shadow-md transform hover:scale-105 transition"
            >
              <FaWhatsapp className="text-xl" /> Donate 
            </button>
          </motion.form>

          {/* QR Code Donation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col items-center bg-white rounded-2xl shadow-xl p-8"
          >
            <FaQrcode className="text-green-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Scan & Donate Instantly
            </h3>
            <p className="text-gray-600 text-sm mb-4 text-center">
              Use your phone’s scanner to donate directly via WhatsApp Pay or
              UPI.
            </p>
            {/* Replace QR image path with your real QR */}
            <img
              src="/assets/whatsapp-qr.png"
              alt="Donation QR Code"
              className="w-48 h-48 object-contain border-4 border-green-500 rounded-lg shadow-md"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
