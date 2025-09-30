import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import sopan from "../../assets/asd.jpg";
import sopan1 from "../../assets/asd1.jpg";
import sopan2 from "../../assets/asd2.jpg";
import sopan3 from "../../assets/asd3.webp";
import sopan4 from "../../assets/asd4.webp";

const cards = [
  {
    key: "asd",
    title: "Autism Spectrum Disorder (ASD)",
    short: "Social communication differences, restricted/repetitive behaviors.",
    details: {
      signs: [
        "Delayed speech or non-verbal in some children",
        "Difficulty in social interaction or eye contact",
        "Repetitive movements or strict routines",
      ],
      therapies: [
        "Behavioural therapy (ABA)",
        "Speech & language therapy",
        "Occupational therapy for sensory support",
      ],
      howWeHelp: [
        "Individualized learning plans",
        "Parent training & resource pack",
        "Structured classroom support and peer integration",
      ],
    },
    media: sopan,
  },
  {
    key: "adhd",
    title: "ADHD (Attention Deficit Hyperactivity Disorder)",
    short: "Inattention, hyperactivity, and impulsivity affecting learning.",
    details: {
      signs: [
        "Short attention span for tasks",
        "Easily distracted and forgetful",
        "Restlessness or difficulty staying seated",
      ],
      therapies: [
        "Behavioural therapy & structured routines",
        "Parent & teacher coaching",
        "Classroom accommodations (short tasks, breaks)",
      ],
      howWeHelp: [
        "Custom activity plans to channel energy",
        "Homework & focus strategies",
        "Regular progress reports for parents and teachers",
      ],
    },
    media: sopan1,
  },
  {
    key: "downs",
    title: "Down's Syndrome",
    short: "A genetic condition affecting development and learning pace.",
    details: {
      signs: [
        "Delayed motor milestones",
        "Mild to moderate intellectual disability",
        "Distinctive facial features (medical evaluation needed)",
      ],
      therapies: [
        "Early intervention & physiotherapy",
        "Speech therapy & special education",
        "Family counselling and community programs",
      ],
      howWeHelp: [
        "Early screening and play-based learning",
        "Fine motor skill groups",
        "Inclusive classroom plans and caregiver training",
      ],
    },
    media: sopan2,
  },
  {
    key: "cp",
    title: "Cerebral Palsy (CP)",
    short: "Movement disorders caused by early brain injury.",
    details: {
      signs: [
        "Stiff or floppy muscle tone",
        "Delayed walking or unusual gait",
        "Difficulty with fine motor tasks",
      ],
      therapies: [
        "Physiotherapy & orthotics",
        "Occupational therapy",
        "Assistive technology (adapted seating, communication aids)",
      ],
      howWeHelp: [
        "Customized physiotherapy plans",
        "Adaptive equipment recommendations",
        "School accessibility assessments",
      ],
    },
    media: sopan3,
  },
  {
    key: "id",
    title: "Intellectual Disabilities",
    short: "General delays in intellectual functioning and adaptive skills.",
    details: {
      signs: [
        "Difficulty learning at expected pace",
        "Challenges with daily living skills",
        "Needs support for planning and problem solving",
      ],
      therapies: [
        "Special education & life skills training",
        "Speech & occupational therapy",
        "Vocational training for older youth",
      ],
      howWeHelp: [
        "Individual education & vocational plans",
        "Supported internships and community integration",
        "Regular caregiver workshops",
      ],
    },
    media: sopan4,
  },
];

const AsdSection = () => {
  const [index, setIndex] = useState(0);
  const card = cards[index];

  const prev = () => setIndex((i) => (i - 1 + cards.length) % cards.length);
  const next = () => setIndex((i) => (i + 1) % cards.length);

  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 py-16 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Decorative background animation */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full opacity-30 blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 bg-purple-200 rounded-full opacity-30 blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 drop-shadow-sm">
            We Support Children & Adults with Special Needs
          </h2>
          <p className="text-gray-700 mt-3 max-w-2xl mx-auto text-lg">
            Compassionate care across ASD, ADHD, Down's Syndrome, Cerebral Palsy
            and Intellectual Disabilities — <span className="font-semibold text-blue-700">personalized therapy</span>, 
            <span className="font-semibold text-purple-700"> inclusive education</span>, and 
            <span className="font-semibold text-pink-700"> family support</span>.
          </p>
        </motion.header>

        {/* Slider */}
        <div className="relative bg-white/90 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 items-center">
            {/* Left Media with Animation */}
            <motion.div
              key={card.key + "-media"}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center"
            >
              <img
                src={card.media}
                alt={card.title}
                className="w-full max-w-md rounded-xl object-cover shadow-lg hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            {/* Right Content with Smooth Transition */}
            <AnimatePresence mode="wait">
              <motion.div
                key={card.key}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5 }}
                className="py-4"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-600 mb-4">{card.short}</p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  {["Signs", "Therapies", "How We Help"].map((heading, idx) => {
                    const items =
                      heading === "Signs"
                        ? card.details.signs
                        : heading === "Therapies"
                        ? card.details.therapies
                        : card.details.howWeHelp;
                    return (
                      <motion.div
                        key={heading}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <h4 className="font-semibold text-gray-800">{heading}</h4>
                        <ul className="text-gray-600 mt-2 list-disc list-inside space-y-1">
                          {items.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={prev}
                    className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 hover:scale-105 transition"
                  >
                    <FaChevronLeft /> Previous
                  </button>
                  <button
                    onClick={next}
                    className="ml-auto flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition"
                  >
                    Next <FaChevronRight />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-3 p-4 bg-gradient-to-t from-white/70 to-transparent">
            {cards.map((c, i) => (
              <motion.button
                key={c.key}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === index ? "bg-blue-600 scale-125" : "bg-gray-300"
                }`}
                whileHover={{ scale: 1.3 }}
                aria-label={`Go to ${c.title}`}
              />
            ))}
          </div>
        </div>

        {/* Quick Select Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-4"
        >
          {cards.map((c, i) => (
            <motion.button
              key={c.key}
              onClick={() => setIndex(i)}
              className={`text-left p-4 rounded-xl border transition hover:shadow-md ${
                i === index
                  ? "bg-gradient-to-r from-blue-50 to-purple-50 border-blue-300"
                  : "bg-white border-gray-100"
              }`}
              whileHover={{ scale: 1.03 }}
            >
              <h5 className="font-semibold text-gray-800">{c.title}</h5>
              <p className="text-sm text-gray-500 mt-1">{c.short}</p>
            </motion.button>
          ))}
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-10 text-center"
        >
          <p className="text-gray-700 text-lg">
            Want a personalised plan for a child or adult?
          </p>
          <a
            href="#contact"
            className="inline-block mt-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-110 hover:shadow-xl transition-transform"
          >
            Request Assessment
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AsdSection;
