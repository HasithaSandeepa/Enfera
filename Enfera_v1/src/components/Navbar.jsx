import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-900 to-purple-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
       <img 
  src="src/assets/images/Logo.png" 
  alt="Enferra Logo" 
  className="w-32 max-h-12 object-contain"  // w-32 = width, max-h-12 (~48px) = height cap
/>


        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-8 text-white font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-300 underline underline-offset-4"
                    : "hover:text-blue-300 transition"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink to="/create-account">
              <button className="px-4 py-2 bg-white text-blue-700 rounded-full font-semibold hover:bg-blue-100 transition">
                Create Account
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <button className="px-4 py-2 border border-white text-white rounded-full hover:bg-white hover:text-blue-800 transition">
                Contact Us
              </button>
            </NavLink>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-gradient-to-br from-blue-900 to-purple-900 text-white border-t border-white/10 shadow-md">
          <ul className="flex flex-col space-y-4 mt-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "block text-blue-300 font-semibold"
                      : "block hover:text-blue-300"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink to="/create-account" onClick={() => setIsOpen(false)}>
                <button className="w-full px-4 py-2 bg-white text-blue-700 rounded-full hover:bg-blue-100 transition font-semibold">
                  Create Account
                </button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setIsOpen(false)}>
                <button className="w-full px-4 py-2 border border-white text-white rounded-full hover:bg-white hover:text-blue-800 transition">
                  Contact Us
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
