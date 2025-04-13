import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Navigation Links */}
        <div className="footer-section links-section">
          <h4>Company</h4>
          <ul>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-section services-section">
          <h4>Our Services</h4>
          <p>Dedicated Development Teams</p>
          <p>User Centric Design</p>
          <p>AI and Automation</p>
          <p>Flyer Post Design</p>
          <p>Mobile App Development</p>
          <p>Custom Web Solutions</p>
        </div>

        {/* Logo and Description */}
        <div className=" footer-section logo-section left-section">
          <img
            src="src/assets/images/Logo.png"
            alt="EnFera Logo"
            className="footer-logo"
          />

          {/* Social Media Links */}
          <div className="footer-section social-section">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a
                href="https://facebook.com/enfera"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="src/assets/icons/fb.png" alt="Facebook" />
              </a>
              <a
                href="https://linkedin.com/company/enfera"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="src/assets/icons/linkedin.png" alt="LinkedIn" />
              </a>
              <a
                href="https://instagram.com/enfera"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="src/assets/icons/ig.png" alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} EnFera. All rights reserved.</p>
        <p>Privacy Policy | Terms and Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
