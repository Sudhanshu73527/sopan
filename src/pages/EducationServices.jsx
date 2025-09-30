import React from "react";
import { motion } from "framer-motion";
import { FaBook, FaLaptopCode, FaGraduationCap, FaChalkboardTeacher } from "react-icons/fa";

const educationServices = [
  {
    icon: <FaGraduationCap className="text-blue-600 text-5xl mx-auto mb-4" />,
    title: "Free Education Programs",
    description:
      "Providing free schooling and basic education for underprivileged children so they can build a brighter future.",
  },
  {
    icon: <FaBook className="text-green-600 text-5xl mx-auto mb-4" />,
    title: "Scholarships & Books",
    description:
      "Offering scholarships, books, and other study material to support students financially and academically.",
  },
  {
    icon: <FaLaptopCode className="text-purple-600 text-5xl mx-auto mb-4" />,
    title: "Digital Literacy Classes",
    description:
      "Teaching computer skills and internet usage to help students adapt to the modern digital world.",
  },
  {
    icon: <FaChalkboardTeacher className="text-orange-600 text-5xl mx-auto mb-4" />,
    title: "Adult Education",
    description:
      "Helping adults learn to read and write, giving them a chance to improve their lives and opportunities.",
  },
];

const EducationServices = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center text-blue-700 mb-6"
      >
        Education Services
      </motion.h2>

      {/* Section Description */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-lg md:text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12"
      >
        Education is the key to change. Here’s how we are empowering children
        and adults with knowledge and opportunities.
      </motion.p>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {educationServices.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer"
          >
            {service.icon}
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-center">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EducationServices;
