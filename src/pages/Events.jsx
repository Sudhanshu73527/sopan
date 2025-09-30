import React from "react";
import { motion } from "framer-motion";

const events = [
  {
    title: "Health & Nutrition Camp",
    date: "March 15, 2025",
    description:
      "A free medical and nutrition awareness camp for underprivileged children and families.",
    image: "https://source.unsplash.com/600x400/?health,kids",
  },
  {
    title: "Educational Workshop",
    date: "April 10, 2025",
    description:
      "Interactive learning sessions with volunteers to support primary education for children.",
    image: "https://source.unsplash.com/600x400/?education,children",
  },
  {
    title: "Child Protection Awareness Rally",
    date: "May 5, 2025",
    description:
      "Street rally and awareness drive on child rights and protection laws.",
    image: "https://source.unsplash.com/600x400/?children,awareness",
  },
  {
    title: "Summer Camp",
    date: "June 20, 2025",
    description:
      "Fun and learning activities: art, music, dance, and storytelling for children.",
    image: "https://source.unsplash.com/600x400/?summer,camp,kids",
  },
];

const Events = () => {
  return (
    <section className="relative bg-gradient-to-br from-yellow-50 via-white to-pink-50 py-20 px-6 md:px-16 lg:px-32 overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Our Events
          </h2>
          <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
            We organize impactful events for child protection, education,
            health, and community awareness.
          </p>
        </motion.div>

        {/* Event Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{event.date}</p>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition"
          >
            Join Our Next Event
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
