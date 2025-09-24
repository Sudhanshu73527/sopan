import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import images
import bgImg from "../../assets/sopan13.png";
import bgImg2 from "../../assets/sopan12.png";
import bgImg3 from "../../assets/sopan11.png";

const images = [bgImg, bgImg2, bgImg3];
const prompts = [
  "🍲 Nourishing every child with love and care.",
  "📚 Giving hope through education and support.",
  "🎨 Building bright futures with creativity and play.",
  "🤝 Together, we empower underprivileged children.",
  "🎉 Every smile counts – join our mission today !",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[85vh] sm:h-[90vh] overflow-hidden">
      {/* Animated Background Image with Parallax Effect */}
      <AnimatePresence mode="wait">
        <motion.img
          key={images[currentIndex]}
          src={images[currentIndex]}
          alt={`Hero Background ${currentIndex + 1}`}
          className="absolute top-0 left-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Floating Icons - More Playful */}
      <motion.div
        className="absolute top-12 left-12 text-4xl"
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      > <br />
        👨‍👨‍👦‍👦
      </motion.div>
      <motion.div
        className="absolute bottom-12 right-12 text-4xl"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        🏏
      </motion.div>

      {/* Text Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
        <div className="space-y-8 max-w-4xl mx-auto">
          {/* Animated Prompt */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={prompts[currentIndex]}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
            >
              {prompts[currentIndex]}
            </motion.h1>
          </AnimatePresence>

          {/* Glowing CTA Button */}
          <motion.a
            href="/contact/Help"
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(255, 200, 0, 0.8)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-yellow-400 text-black text-lg px-8 py-3 rounded-full font-bold shadow-xl hover:bg-yellow-300 transition-all duration-300"
          >
            ❤️ Support a Child
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
