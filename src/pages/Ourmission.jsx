import React from "react";
import { motion } from "framer-motion";
import { FaHandsHelping, FaBookReader, FaLeaf } from "react-icons/fa";

const missionData = [
  {
    icon: <FaBookReader className="text-green-600 text-5xl mx-auto mb-4" />,
    title: "Quality Education",
    description:
      "Providing free education programs, scholarships, and digital learning tools to every child in need.",
    delay: 0.2,
  },
  {
    icon: <FaHandsHelping className="text-green-600 text-5xl mx-auto mb-4" />,
    title: "Community Support",
    description:
      "Organizing health camps, food drives, and skill development workshops for marginalized communities.",
    delay: 0.4,
  },
  {
    icon: <FaLeaf className="text-green-600 text-5xl mx-auto mb-4" />,
    title: "Sustainable Future",
    description:
      "Promoting eco-friendly initiatives, tree plantation drives, and renewable energy solutions for a better tomorrow.",
    delay: 0.6,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Ourmission = () => {
  return (
    <section className="relative bg-gradient-to-b from-green-50 via-white to-green-50 py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Accent */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 w-72 h-72 bg-green-200 rounded-full blur-3xl -z-10"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute bottom-0 right-0 w-72 h-72 bg-green-300 rounded-full blur-3xl -z-10"
      />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-center text-yellow-500 mb-6"
      >
        Our Mission
      </motion.h2>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto text-center mb-12"
      >
        We are committed to empowering underprivileged communities by providing
        education, healthcare, and sustainable development opportunities — creating
        a future where every individual lives with dignity and hope.
      </motion.p>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {missionData.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 12px 30px rgba(0, 128, 0, 0.15)",
            }}
            className="bg-white p-8 rounded-2xl shadow-md cursor-pointer transition-transform duration-300"
          >
            {item.icon}
            <h3 className="font-bold text-xl text-yellow-500 mb-3 text-center">
              {item.title}
            </h3>
            <p className="text-gray-600 text-center">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Ourmission;
