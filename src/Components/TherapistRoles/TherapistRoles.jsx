import React from "react";
import { motion } from "framer-motion";
import { FaChild, FaHands, FaComments } from "react-icons/fa";

const therapists = [
  {
    title: "Special Therapist",
    icon: <FaChild className="text-4xl text-pink-500" />,
    points: [
      "Works with children and adults with developmental or learning challenges.",
      "Helps improve social, emotional, and adaptive skills.",
      "Supports individualized therapy plans to enhance overall functioning.",
      "Common conditions: Autism Spectrum Disorder, ADHD, Down Syndrome, Cerebral Palsy, Learning Disabilities.",
    ],
    color: "from-pink-50 to-pink-100",
  },
  {
    title: "Occupational Therapist",
    icon: <FaHands className="text-4xl text-blue-500" />,
    points: [
      "Assists individuals in performing daily activities independently.",
      "Focuses on fine motor skills, coordination, and sensory integration.",
      "Helps people adapt their environment or routines for better functioning.",
      "Common conditions: Cerebral Palsy, Intellectual Disability, Stroke, Traumatic Brain Injury, Autism Spectrum Disorder.",
    ],
    color: "from-blue-50 to-blue-100",
  },
  {
    title: "Speech Therapist",
    icon: <FaComments className="text-4xl text-green-500" />,
    points: [
      "Helps individuals with speech, language, and communication difficulties.",
      "Works on pronunciation, fluency, voice, and social communication skills.",
      "Supports use of communication devices or alternative methods if needed.",
      "Common conditions: Speech Delay, Stuttering, Aphasia, Dysarthria, Autism Spectrum Disorder.",
    ],
    color: "from-green-50 to-green-100",
  },
];

const TherapistRoles = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center text-gray-900 mb-12"
        >
          Roles of Special, Occupational & Speech Therapists
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {therapists.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className={`p-6 rounded-3xl shadow-lg bg-gradient-to-br ${t.color} hover:shadow-2xl transition`}
            >
              <div className="flex flex-col items-center text-center">
                {t.icon}
                <h3 className="text-2xl font-bold mt-4 text-gray-800">{t.title}</h3>
                <ul className="mt-4 text-gray-700 space-y-2 text-left">
                  {t.points.map((p, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-lg text-gray-500">•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TherapistRoles;
