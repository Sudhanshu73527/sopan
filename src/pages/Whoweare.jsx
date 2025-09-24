import React from "react";

const Whoweare = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
        Who We Are
      </h2>

      {/* Intro Description */}
      <p className="text-gray-700 text-lg md:text-xl mb-8 text-center max-w-3xl mx-auto">
        We are a dedicated nonprofit organization committed to transforming lives through education, healthcare, and community support. Our mission is to empower underprivileged communities and create sustainable opportunities for growth and development.
      </p>

      {/* Professional Prompts / Highlights */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-xl text-green-600 mb-2">Our Mission</h3>
          <p className="text-gray-600">
            To provide quality education and essential resources to every child, ensuring a brighter future.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-xl text-green-600 mb-2">Our Values</h3>
          <p className="text-gray-600">
            Transparency, compassion, and sustainability guide all our initiatives and partnerships.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-xl text-green-600 mb-2">Impact</h3>
          <p className="text-gray-600">
            Over the years, we have positively impacted thousands of lives through education programs, healthcare drives, and community projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Whoweare;
