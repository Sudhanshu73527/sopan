import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/sopan2.jpg"
const stories = [
  {
    image: img1,
    title: "From Streets to School",
    description:
      "Ravi, a 10-year-old boy, was working on the streets to support his family. Today, he is attending school, dreaming to become a teacher and inspire others.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1532619187608-e5375cab36aa?auto=format&fit=crop&w=900&q=60",
    title: "Women Empowerment",
    description:
      "Through our skill development programs, Meena now runs her own tailoring business, supporting her family and mentoring other women in her community.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1576765608648-972c95b9a4c6?auto=format&fit=crop&w=900&q=60",
    title: "Healthy Futures",
    description:
      "Our health camps provided free check-ups and medicine to over 500 villagers, drastically reducing malnutrition and preventable diseases.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581092334607-3dff1b1b3fdd?auto=format&fit=crop&w=900&q=60",
    title: "Digital Literacy",
    description:
      "We introduced computer literacy workshops in rural areas, enabling children to learn coding and access modern opportunities.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Impactstoris = () => {
  return (
    <section className="relative bg-gradient-to-b from-yellow-50 via-white to-yellow-50 py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Decorative background accents */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 w-72 h-72 bg-yellow-300 rounded-full blur-3xl -z-10"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-400 rounded-full blur-3xl -z-10"
      />

      {/* Heading */}

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-yellow-500 text-center mb-6"
      >
        Impact Stories
      </motion.h2>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto text-center mb-12"
      >
        Real stories of hope and transformation. Every small effort creates a
        ripple of change — together we make it possible.
      </motion.p>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
      >
        {stories.map((story, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              rotateX: 3,
              rotateY: -3,
              boxShadow: "0px 12px 30px rgba(255, 193, 7, 0.3)",
            }}
            className="relative group bg-white/80 backdrop-blur-md border border-yellow-100 rounded-3xl overflow-hidden shadow-md transition-transform cursor-pointer"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-yellow-500 mb-2">
                {story.title}
              </h3>
              <p className="text-gray-600">{story.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-14"
      >
        <a
          href="/all-stories"
          className="bg-yellow-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-600 hover:shadow-xl transition"
        >
          Read More Stories
        </a>
      </motion.div>
    </section>
  );
};

export default Impactstoris;
