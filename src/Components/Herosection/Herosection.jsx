import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import images
import bgImg from "../../assets/child.jpeg";
import bgImg2 from "../../assets/child2.jpg";
import bgImg3 from "../../assets/child1.jpg";

const images = [bgImg, bgImg2, bgImg3];

const prompts = [
  <> <span className="text-blue-500 ">Nourishing every</span> child withlove and care.</>,
  <> Giving <span className="text-blue-500">hope through</span>  education and support.</>,
  <> Building <span className="text-blue-500 ">bright futures</span> with creativity and play.</>,
  <> Together, we <span className="text-green-400 font-bold">empower</span> <span className="text-yellow-300 font-bold">underprivileged children</span>.</>,
  <> Every <span className="text-pink-300 font-bold">smile</span> counts – <span className="text-yellow-300 font-bold">join</span> our <span className="text-blue-300 font-bold">mission</span> today!</>,
];

const paragraphs = [
  "Sopan Child NGO provides daily meals, ensuring no child goes to bed hungry and every child grows healthy and happy.",
  "We support education by providing free schooling, books, and scholarships to help every child reach their dreams.",
  "Through arts, sports, and creativity, we nurture hidden talents and give children confidence to express themselves.",
  "Our programs empower families, communities, and children to build a brighter and more self-reliant future.",
  "Join hands with us to spread smiles and create a world where every child has a chance to thrive.",
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
      {/* Background Image */}
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

      {/* Blue Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#001F3F]/70 via-[#001F3F]/60 to-[#001F3F]/80"></div>

      {/* Text Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
        <div className="space-y-6 max-w-3xl mx-auto">
          {/* Animated Prompt */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg leading-snug"
            >
              {prompts[currentIndex]}
            </motion.h1>
          </AnimatePresence>

          {/* Animated Paragraph */}
          <AnimatePresence mode="wait">
            <motion.p
              key={paragraphs[currentIndex]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto"
            >
              {paragraphs[currentIndex]}
            </motion.p>
          </AnimatePresence>

          {/* CTA Button */}
          <motion.a
            href="/donate"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 25px rgba(255, 220, 0, 0.9)",
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-blue-500 text-white text-lg px-8 py-3 rounded-full font-bold shadow-xl hover:bg-blue-300 transition-all duration-300"
          >
            ❤️ Support a Child
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
