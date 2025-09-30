import React from "react";
import { motion } from "framer-motion";
import bgImage from "../../assets/child2.jpg"; // your background image

const thematicData = [
  {
    title: "Child Protection Care and Development",
    icons: ["/icon1.jpg", "/icon2.jpg", "icon3.jpg", "icon4.jpg"],
  },
  {
    title: "Livelihood Protection and Enhancement",
    icons: ["/icon5.jpg", "/icon6.jpg", "/icon7.jpg"],
  },
  {
    title: "Adolescent Issues and their Fullness of Life",
    icons: ["/icon1.jpg", "/icon2.jpg", "/icon8.jpg"],
  },
  {
    title: "Disaster Risk Reduction and NRM",
    icons: ["/icon9.jpg", "/icon10.jpg"],
  },
  {
    title: "Water Sanitation and Hygiene",
    icons: ["/icon11.jpg"],
  },
  {
    title: "Quality Education",
    icons: ["/icon12.jpg"],
  },
  {
    title: "Health & Nutrition",
    icons: ["/icon13.jpg"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ThematicFocus = () => {
  return (
    <section
      className="relative bg-cover bg-center py-16 px-4 md:px-20 overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-extrabold text-center text-yellow-400 mb-12 tracking-wider drop-shadow-lg"
        >
          THEMATIC FOCUS / DOMAINS
        </motion.h2>

        {/* List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {thematicData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col md:flex-row items-center md:items-center justify-between gap-4 
              border-b border-yellow-500 pb-4 group hover:bg-white/10 hover:rounded-xl transition-all duration-300 p-3"
            >
              {/* Icons */}
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {item.icons.map((icon, idx) => (
                  <motion.img
                    key={idx}
                    src={icon}
                    alt="SDG icon"
                    className="h-15 w-15 object-contain rounded-lg shadow-md"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  />
                ))}
              </div>

              {/* Title */}
              <motion.p
                className="text-lg md:text-xl text-white font-semibold text-center md:text-left tracking-wide group-hover:text-yellow-300 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {index + 1}. {item.title}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ThematicFocus;
