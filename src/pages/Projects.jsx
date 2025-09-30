import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Quality Education for All",
    description:
      "Providing free education, digital learning kits, and scholarships for underprivileged children.",
    image: "https://source.unsplash.com/600x400/?education,children",
  },
  {
    title: "Health & Nutrition Drive",
    description:
      "Regular health checkups, nutrition awareness camps, and free distribution of supplements.",
    image: "https://source.unsplash.com/600x400/?health,kids",
  },
  {
    title: "Child Protection & Rights",
    description:
      "Awareness programs, rescue operations, and counselling sessions for child safety and rights.",
    image: "https://source.unsplash.com/600x400/?children,safety",
  },
  {
    title: "Women & Livelihood Empowerment",
    description:
      "Skill development and livelihood programs for women to ensure economic independence.",
    image: "https://source.unsplash.com/600x400/?women,empowerment",
  },
  {
    title: "Clean Water & Sanitation",
    description:
      "Installation of clean water filters, sanitation drives, and hygiene awareness workshops.",
    image: "https://source.unsplash.com/600x400/?water,sanitation",
  },
];

const Projects = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 px-6 md:px-16 lg:px-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Our Projects
          </h2>
          <p className="text-gray-600 mt-3 text-lg max-w-3xl mx-auto">
            We are committed to creating lasting impact through these ongoing projects
            that transform lives and communities.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden group"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition"
          >
            Support Our Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
