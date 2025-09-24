import React from "react";
import { motion } from "framer-motion";
import { FaBookOpen, FaGraduationCap, FaChalkboardTeacher } from "react-icons/fa";

const FreeEducationPrograms = () => {
  const programs = [
    {
      icon: FaBookOpen,
      title: "Scholarship Programs",
      description:
        "Providing need-based and merit-based scholarships for underprivileged students to ensure education is accessible to all.",
      color: "from-blue-100 to-blue-200",
    },
    {
      icon: FaGraduationCap,
      title: "Skill Development",
      description:
        "Offering free skill-building workshops in coding, communication, and career guidance to empower students for the future.",
      color: "from-green-100 to-green-200",
    },
    {
      icon: FaChalkboardTeacher,
      title: "Free Coaching Classes",
      description:
        "Organizing free evening classes for school children to strengthen their learning foundation and boost their confidence.",
      color: "from-purple-100 to-purple-200",
    },
  ];

  return (
    <section className="relative bg-gray-50 py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 opacity-30 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-200 opacity-30 rounded-full blur-3xl -z-10 animate-pulse"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 drop-shadow-sm">
          Free Education Programs
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mt-4 text-lg">
          Education is a right, not a privilege. Our special initiatives break
          financial barriers and unlock doors of opportunity for every child.
        </p>
      </motion.div>

      {/* Program Cards */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {programs.map((program, index) => {
          const Icon = program.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${program.color} rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:scale-105 transform transition-all duration-300`}
            >
              <div className="flex justify-center mb-6">
                <Icon className="text-5xl text-gray-800" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">
                {program.title}
              </h3>
              <p className="text-gray-700 text-center leading-relaxed">
                {program.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 text-lg font-semibold">
          Join Our Program
        </button>
      </motion.div>
    </section>
  );
};

export default FreeEducationPrograms;