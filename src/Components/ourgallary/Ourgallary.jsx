import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const galleryImages = [
  {
    src: "/edu.jpg",
    title: "Children Learning",
  },
  {
    src: "/sopan2.jpg",
    title: "Community Event",
  },
  {
    src: "/sopan3.jpg",
    title: "Charity Drive",
  },
  {
    src: "/sopan4.jpg",
    title: "Joyful Smiles",
  },
  {
    src: "/sopan5.jpg",
    title: "Creative Workshop",
  },
  {
    src: "/sopan6.jpg",
    title: "Team Efforts",
  },
  {
    src: "/sopan1.jpg",
    title: "Team Efforts",
  },
  {
    src: "/sopan7.jpg",
    title: "Team Efforts",
  },
  {
    src: "/food.jpg",
    title: "Team Efforts",
  },
];

const Ourgallary = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="relative bg-gray-50 py-16 px-6 md:px-12">
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-gray-800 mb-12"
      >
        📸 Our Gallery
      </motion.h2>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {galleryImages.map((item, idx) => (
          <motion.div
            key={idx}
            className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            onClick={() => setSelectedImage(item)}
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-semibold text-lg transition-opacity">
              {item.title}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Popup */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-h-[80vh] max-w-[90vw] rounded-2xl shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Ourgallary;
