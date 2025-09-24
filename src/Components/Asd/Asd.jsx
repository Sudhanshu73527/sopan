import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import sopan from "../../assets/asd.jpg"
import sopan1 from "../../assets/asd1.jpg"
import sopan2 from "../../assets/asd2.jpg"
import sopan3 from "../../assets/asd3.webp"
import sopan4 from "../../assets/asd4.webp"

const cards = [
  {
    key: "asd",
    title: "Autism Spectrum Disorder (ASD)",
    short: "Social communication differences, restricted/repetitive behaviors.",
    details: {
      signs: [
        "Delayed speech or non‑verbal in some children",
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
        "Early screening and play‑based learning",
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

  const prev = () => setIndex((i) => (i - 1 + cards.length) % cards.length);
  const next = () => setIndex((i) => (i + 1) % cards.length);

  const card = cards[index];

  return (
    <section className="bg-gradient-to-br from-white via-blue-50 to-purple-50 py-12 px-6 md:px-12 lg:px-24 rounded-xl shadow-inner">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            We Support Children & Adults with Special Needs
          </h2>
          <p className="text-gray-700 mt-3 max-w-2xl mx-auto">
            We work compassionately across ASD, ADHD, Down's Syndrome, Cerebral
            Palsy and Intellectual Disabilities — personalized care, evidence‑based
            therapies, and community support.
          </p>
        </header>

        {/* Slider */}
        <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 items-center">
            {/* Left: Media */}
            <div className="flex items-center justify-center">
              {/* Replace src with the GIF/image path you prefer */}
              <img
                src={card.media}
                alt={card.title}
                className="w-full max-w-md rounded-xl object-cover shadow-md"
              />
            </div>

            {/* Right: Content */}
            <motion.div
              key={card.key}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45 }}
              className="py-4"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{card.title}</h3>
              <p className="text-gray-600 mb-4">{card.short}</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold text-gray-800">Signs</h4>
                  <ul className="text-gray-600 mt-2 list-disc list-inside">
                    {card.details.signs.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800">Therapies</h4>
                  <ul className="text-gray-600 mt-2 list-disc list-inside">
                    {card.details.therapies.map((t, i) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800">How We Help</h4>
                  <ul className="text-gray-600 mt-2 list-disc list-inside">
                    {card.details.howWeHelp.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={prev}
                  className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 transition"
                >
                  <FaChevronLeft /> Previous
                </button>

                <button
                  onClick={next}
                  className="ml-auto flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full hover:scale-105 transition"
                >
                  Next <FaChevronRight />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-3 p-4 bg-gradient-to-t from-white/60 to-transparent">
            {cards.map((c, i) => (
              <button
                key={c.key}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full ${i === index ? "bg-blue-600" : "bg-gray-300"}`}
                aria-label={`Go to ${c.title}`}
              />
            ))}
          </div>
        </div>

        {/* Slide-wise quick list */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-4">
          {cards.map((c, i) => (
            <button
              key={c.key}
              onClick={() => setIndex(i)}
              className={`text-left p-3 rounded-lg transition border ${i === index ? "bg-blue-50 border-blue-200" : "bg-white border-gray-100 hover:shadow-sm"}`}
            >
              <h5 className="font-semibold text-gray-800">{c.title}</h5>
              <p className="text-sm text-gray-500 mt-1">{c.short}</p>
            </button>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-8 text-center">
          <p className="text-gray-700">Want a personalised plan for a child or adult?</p>
          <a
            href="#contact"
            className="inline-block mt-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            Request Assessment
          </a>
        </div>
      </div>
    </section>
  );
};

export default AsdSection;