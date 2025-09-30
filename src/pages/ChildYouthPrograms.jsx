import React from "react";
import { motion } from "framer-motion";
import { FaChild, FaBriefcase, FaFootballBall } from "react-icons/fa";

const youthPrograms = [
  {
    icon: FaChild,
    color: "text-indigo-600",
    title: "Child Protection",
    description:
      "Programs aimed at preventing child labor, child abuse, and ensuring every child’s safety and rights.",
  },
  {
    icon: FaBriefcase,
    color: "text-green-600",
    title: "Career Guidance & Counseling",
    description:
      "Helping children and youth plan their careers, make informed choices, and prepare for a successful future.",
  },
  {
    icon: FaFootballBall,
    color: "text-yellow-600",
    title: "Sports & Talent Development",
    description:
      "Encouraging physical fitness, team-building, and nurturing talents through sports and creative programs.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const ChildYouthPrograms = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-50 to-indigo-100 py-20 px-6 md:px-12 lg:px-24">
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-center text-indigo-700 mb-4"
      >
        Child & Youth Programs
      </motion.h2>

      {/* Section Description */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto mb-12"
      >
        We focus on protecting children, guiding their careers, and nurturing
        talents through sports and creative activities to ensure their holistic
        development.
      </motion.p>

      {/* Services Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {youthPrograms.map((program, index) => {
          const Icon = program.icon;
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.08, rotate: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="bg-white p-6 rounded-3xl shadow-md hover:shadow-2xl transition cursor-pointer border border-gray-100"
            >
              <div className="flex justify-center">
                <Icon className={`${program.color} text-6xl mb-4`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                {program.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {program.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default ChildYouthPrograms;
