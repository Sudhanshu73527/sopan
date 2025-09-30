import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
// Import your logo
import logo from "../../assets/sopan.png"; // <-- Replace this path with your actual logo path

const navLinks = [
  { name: "Home", path: "/" },
  {
    name: "About",
    path: "/about",
    submenu: [
      { name: "Who We Are", path: "/about/who-we-are" },
      { name: "Our Mission", path: "/about/our-mission" },
      { name: "Our Team", path: "/about/our-team" },
      { name: "Impact Stories", path: "/about/impact-stories" },
    ],
  },
  {
    name: "Service",
    path: "/service",
    submenu: [
      { name: "Education Services", path: "/service/Education Services" },
      { name: "Health & Hygiene", path: "/service/Health & Hygiene" },
      { name: "Child Youth Programs", path: "/service/Child & Youth Programs" },
    ],
  },
  {
    name: "Gallary",
    path: "/gallary",
    submenu: [
      { name: "Events", path: "/gallary/events" },
      { name: "Projects", path: "/gallary/projects" },
    ],
  },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);

  const toggleMobileSubmenu = (index) => {
    setActiveMobileSubmenu(activeMobileSubmenu === index ? null : index);
  };

  return (
    <nav className="bg-[#28286b] text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="h-15 w-30" /> {/* Replace with your logo path */}
        </Link>

        {/* Desktop NavLinks Center */}
        <ul className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map((link, index) => (
            <li key={index} className="relative group">
              <Link
                to={link.path}
                className="hover:text-gray-300 flex items-center gap-1"
              >
                {link.name} {link.submenu && <FaChevronDown />}
              </Link>

              {/* Desktop Submenu */}
              {link.submenu && (
                <ul className="absolute left-0 top-full mt-1 bg-gray-700 w-48 rounded shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200">
                  {link.submenu.map((sub, subIndex) => (
                    <li key={subIndex} className="px-4 py-2 hover:bg-orange-600">    
                      <Link to={sub.path}>{sub.name}</Link>     
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Donate Now Button */}
        <div className="hidden md:block">
          <Link
            to="/donate"
            className="bg-orange-400 hover:bg-green-700 text-white px-4 py-2 rounded font-semibold"
          >
            Donate Now ❤
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gray-800 px-4 py-4 space-y-1">
          {navLinks.map((link, index) => ( 
            <li key={index}> 
              <div 
                className="flex justify-between items-center py-2 cursor-pointer"
                onClick={() => link.submenu && toggleMobileSubmenu(index)}
              >  
                <Link to={link.path}>{link.name}</Link>
                {link.submenu && <FaChevronDown />}
              </div>

              {link.submenu && activeMobileSubmenu === index && (
                <ul className="pl-4 mt-1">
                  {link.submenu.map((sub, subIndex) => (
                    <li key={subIndex} className="py-1">
                      <Link to={sub.path}>{sub.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

          {/* Donate Now Button for Mobile */}
          <li className="pt-2">
            <Link
              to="/donate"
              className="block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded font-semibold text-center"
            >
              Donate Now❤
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
