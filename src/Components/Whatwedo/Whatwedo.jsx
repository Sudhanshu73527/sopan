import React from "react";
import { motion } from "framer-motion";

import eduImage from "../../assets/edu1.png";
import healthImage from "../../assets/health.jpg";
import smileImage from "../../assets/sopan3.jpg";

const Whatwedo = () => {
  const cards = [
    {
      title: "Quality Education",
      image: eduImage,
      description:
        "We provide free education, books, and learning resources so every child can dream big and shape a bright future.",
    },
    {
      title: "Health & Nutrition",
      image: healthImage,
      description:
        "Nutritious meals, health checkups, and hygiene programs to ensure every child grows strong and healthy.",
    },
    {
      title: "Spreading Smiles",
      image: smileImage,
      description:
        "From fun activities to emotional care, we work to bring happiness and hope to children in need every day.",
    },
  ];

  return (
    <section className="bg-[#f3f4f6] py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#28286b] mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What We Do
        </motion.h2>
        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-10 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our mission is to empower children through education, health, and happiness.
          Together, we can create a future where every child thrives.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Card Image */}
              <div className="h-52 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#28286b] mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Whatwedo;
