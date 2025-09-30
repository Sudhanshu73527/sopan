import React from "react";
import { motion } from "framer-motion";
import { FaHandsHelping, FaHeart, FaGlobeAsia } from "react-icons/fa";

const Aboutus = () => {
  const infoCards = [
    {
      icon: FaHandsHelping,
      title: "Our Mission",
      description:
        "To empower communities with free education, medical care, and skill-building programs that lead to lasting, positive change and self-reliance.",
      hover: "hover:shadow-orange-300",
      color: "text-orange-500",
    },
    {
      icon: FaGlobeAsia,
      title: "Our Vision",
      description:
        "A compassionate society where every individual, regardless of background, has access to quality education, healthcare, and opportunities to live with dignity.",
      hover: "hover:shadow-green-300",
      color: "text-green-500",
    },
    {
      icon: FaHeart,
      title: "Core Values",
      description:
        "Compassion, transparency, inclusivity, and the courage to create sustainable solutions that uplift lives and inspire hope.",
      hover: "hover:shadow-red-300",
      color: "text-red-500",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-gray-50 via-orange-50 to-pink-50 py-20 md:py-28 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-300 rounded-full opacity-30 blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-300 rounded-full opacity-30 blur-3xl -z-10 animate-ping"></div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-6 leading-snug drop-shadow-sm"
      >
        Together  {" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-200">
         for Change
        </span>
        <br />
        Empowering Lives with {" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-200">Sopan NGO</span>
      </motion.h2>

      {/* Intro Paragraph */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        viewport={{ once: true }}
        className="text-lg md:text-xl text-center text-gray-700 max-w-3xl mx-auto leading-relaxed mb-16"
      >
        At <span className="font-semibold text-orange-600">Sopan NGO</span>, we
        believe every person deserves an opportunity to grow, learn, and thrive.
        Through education, healthcare, skill development, and compassionate
        support, we are building a future where dignity and equality are
        accessible to all.
      </motion.p>

      {/* Dynamic Mission/Vision/Values Cards */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {infoCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`bg-white rounded-3xl shadow-xl p-8 text-center ${card.hover} hover:shadow-2xl transition-all duration-300`}
            >
              <Icon className={`text-5xl ${card.color} mx-auto mb-5 animate-pulse`} />
              <h3 className="text-2xl font-bold mb-3 text-gray-800">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{card.description}</p>
            </motion.div>
          );
        })}
      </div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <a
          href="#donate"
          className="inline-block bg-gradient-to-r from-blue-500 to-blue-200 text-white px-10 py-4 rounded-full shadow-xl font-bold text-lg hover:scale-110 hover:shadow-2xl transition-all duration-300"
        >
           Join Our Mission 
        </a> 
      </motion.div>  
    </section> 
  );
};

export default Aboutus;