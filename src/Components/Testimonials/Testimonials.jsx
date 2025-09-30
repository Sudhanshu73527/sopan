import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Anita Sharma",
    role: "Volunteer",
    message:
      "Sopan NGO has given me an opportunity to contribute to society. The dedication towards children's education and well-being is truly inspiring.",
  },
  {
    name: "Ravi Kumar",
    role: "Donor",
    message:
      "I feel proud to support Sopan NGO. Every donation is used transparently, and I can see the real impact on the children’s lives.",
  },
  {
    name: "Meena Patel",
    role: "Parent",
    message:
      "Thanks to Sopan NGO, my child is receiving quality education and nutritious meals. I am forever grateful for their efforts.",
  },
];

const Testimonials = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#f9fafb] to-[#e6f2ff] py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/symphony.png')]"></div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-16 relative z-10"
      >
        What People Say About{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Sopan NGO
        </span>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"
        />
      </motion.h2>

      {/* Testimonials Grid */}
      <div className="grid gap-10 md:grid-cols-3 relative z-10">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.3 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="relative group bg-white shadow-2xl rounded-3xl p-8 border border-transparent 
                       bg-clip-padding hover:border-blue-400 transition-all duration-300 overflow-hidden"
          >
            {/* Gradient Border Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 blur-xl transition duration-500"></div>

            {/* Quote Icon */}
            <FaQuoteLeft className="text-blue-500 text-4xl mb-4 opacity-60" />

            {/* Message */}
            <p className="text-gray-700 italic mb-6 relative z-10 leading-relaxed">
              "{testimonial.message}"
            </p>

            {/* Name + Role */}
            <div className="text-right relative z-10">
              <h4 className="text-lg font-semibold text-gray-900">
                {testimonial.name}
              </h4>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
