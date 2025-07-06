import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Logo and Social */}
        <div className="space-y-4">
          <img
            src="src/assets/images/Logo.png"
            alt="EnFera Logo"
            className="w-32 h-auto object-contain"
          />
          <p className="text-sm text-gray-300">
            Delivering innovation and excellence through design and development.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com/enfera" target="_blank" rel="noopener noreferrer">
              <img src="src/assets/icons/fb.png" alt="Facebook" className="w-6 h-6 hover:scale-110 transition" />
            </a>
            <a href="https://linkedin.com/company/enfera" target="_blank" rel="noopener noreferrer">
              <img src="src/assets/icons/linkedin.png" alt="LinkedIn" className="w-6 h-6 hover:scale-110 transition" />
            </a>
            <a href="https://instagram.com/enfera" target="_blank" rel="noopener noreferrer">
              <img src="src/assets/icons/ig.png" alt="Instagram" className="w-6 h-6 hover:scale-110 transition" />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link to="/portfolio" className="hover:text-white transition">Portfolio</Link></li>
            <li><Link to="/blog" className="hover:text-white transition">Blog</Link></li>
            <li><Link to="/about" className="hover:text-white transition">About</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact Us</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Dedicated Development Teams</li>
            <li>User Centric Design</li>
            <li>AI and Automation</li>
            <li>Flyer Post Design</li>
            <li>Mobile App Development</li>
            <li>Custom Web Solutions</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} EnFera. All rights reserved.</p>
        <p className="mt-1">Privacy Policy | Terms and Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
 