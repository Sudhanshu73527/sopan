import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#28286b] text-white pt-12 pb-6 px-6 md:px-12 lg:px-24">
      {/* Top Section */}
      <div className="grid md:grid-cols-4 gap-10 border-b border-white/20 pb-10">
        {/* About Sopan NGO */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-orange-400">Sopan NGO</h3>
          <p className="text-sm leading-relaxed text-gray-200">
            Sopan NGO is dedicated to transforming lives through education, healthcare, 
            and skill-building programs. We aim to empower communities and create a 
            compassionate, equal world for all.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-orange-400">Quick Links</h4>
          <ul className="space-y-2">
            {["About Us", "Causes", "Media", "Highlights", "Partner With Us", "Contact Us"].map(
              (link, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="hover:text-yellow-300 transition duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* What We Provide */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-orange-400">What We Provide</h4>
          <ul className="space-y-2">
            {[
              "Free Education Programs",
              "Medical Camps & Surgeries",
              "Skill Development Training",
              "Food & Nutrition Drives",
              "Women Empowerment",
              "Disability Support"
            ].map((item, idx) => (
              <li key={idx} className="text-sm text-gray-200">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-orange-400">Stay Connected</h4>
          <p className="text-sm mb-3 text-gray-200">
            Subscribe to get updates on our activities, events, and success stories.
          </p>
          <div className="flex items-center bg-white rounded-full overflow-hidden shadow-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 w-full text-black focus:outline-none"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 font-semibold transition">
              Subscribe
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-orange-400 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-orange-400 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-orange-400 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-orange-400 transition">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-orange-400 transition">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-gray-300 text-sm">
        <p>© {new Date().getFullYear()} Sopan NGO. All Rights Reserved.</p>
        <p className="mt-2 md:mt-0">
          Powered by{" "}
          <a
            href="https://webala.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 font-semibold hover:text-yellow-300 transition"
          >
            Webala
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
