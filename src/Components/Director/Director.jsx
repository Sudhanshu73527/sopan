import React from "react";
import { motion } from "framer-motion";
import directorImage from "../../assets/sopan1.jpg"; // Your director image path

const Director = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#f3f4f6] to-[#e0e7ff] py-20 px-6 md:px-20 overflow-hidden">
      {/* Decorative Circle behind Image */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-[#28286b]/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Director Image with animation */}
        <motion.div
          className="flex-shrink-0"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={directorImage}
            alt="Director"
            className="w-64 h-64 md:w-72 md:h-72 rounded-full object-cover shadow-2xl border-4 border-[#28286b] hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Director Message with animation */}
        <motion.div
          className="text-center md:text-left"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#28286b] mb-6 relative inline-block">
            Message from Our Director
            <span className="absolute -bottom-2 left-0 w-16 h-1 bg-[#facc15] rounded-full"></span>
          </h2>
          <p className="text-gray-700 text-lg md:text-xl mb-6 leading-relaxed">
            "At <span className="text-[#28286b] font-semibold">Sopan</span>, we strive to nurture hope, education, 
            and care for every child. With dedication, compassion, and community support, 
            we can create a brighter tomorrow. Join us in this journey to make a meaningful difference."
          </p>
          <p className="text-gray-500 font-semibold text-lg mt-4">— Supriya Kumari, Director</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Director;
