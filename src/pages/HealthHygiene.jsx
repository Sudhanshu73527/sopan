import React from "react";
import { motion } from "framer-motion";
import { FaClinicMedical, FaVirus, FaAppleAlt, FaToilet } from "react-icons/fa";

const healthServices = [
  {
    icon: FaClinicMedical,
    color: "text-red-600",
    title: "Medical Camps",
    description:
      "Free health check-ups, medicines, and consultations for underserved communities.",
  },
  {
    icon: FaVirus,
    color: "text-yellow-600",
    title: "Disease Awareness",
    description:
      "Campaigns for malaria, dengue, polio, and other preventable diseases to spread awareness.",
  },
  {
    icon: FaAppleAlt,
    color: "text-green-600",
    title: "Nutrition Awareness",
    description:
      "Programs focused on improving child and women’s nutrition for a healthier future.",
  },
  {
    icon: FaToilet,
    color: "text-blue-600",
    title: "Sanitation Projects",
    description:
      "Providing clean water and proper toilet facilities to promote hygiene and reduce diseases.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const HealthHygiene = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-6 md:px-12 lg:px-24">
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-center text-yellow-500 mb-4"
      >
        Health & Hygiene
      </motion.h2>

      {/* Section Description */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto mb-12"
      >
        We believe that good health is the foundation of a better life.  
        Our programs aim to create healthier, safer, and more aware communities.
      </motion.p>

      {/* Services Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
      >
        {healthServices.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.08, rotate: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="bg-white p-6 rounded-3xl shadow-md hover:shadow-2xl transition cursor-pointer border border-gray-100"
            >
              <div className="flex justify-center">
                <Icon className={`${service.color} text-6xl mb-4`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default HealthHygiene;
