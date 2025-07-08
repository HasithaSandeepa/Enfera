import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import dev2 from "../../assets/images/eranga.png";

import hasitha from "../../assets/images/Hasitha.jpg";
import Pamuda from "../../assets/images/Pamuda.jpg";
import Imasha from "../../assets/images/Imasha.jpg";
import Himashi from "../../assets/images/Himashi.jpg";
import Hashini from "../../assets/images/Hashini.jpg";
import missionImage from "../../assets/images/photo-1681949101473-9aea8b928a55.avif";
import Sachintha from "../../assets/images/WhatsApp Image 2025-07-06 at 19.08.51_685e65c5.jpg";
import Nimsara from "../../assets/images/Screenshot 2025-07-06 191049.png";
import Nimesh from "../../assets/images/WhatsApp Image 2025-07-06 at 19.21.23_e1e93901.jpg";

// E:\company projects\EnFera web site\Enfera\Enfera_v1\src\assets\images\photo-1681949101473-9aea8b928a55.avif
export default function About() {
  const teamMembers = [
    {
      src: hasitha,
      name: "Hasitha Sandeep",
      role: "Front-end Developer",
      description:
        "Crafting beautiful, responsive interfaces with the latest web technologies.",
      social: ["linkedin-in", "github", "twitter"],
    },
    {
      src: Himashi,
      name: "Himasha Gimhani",
      role: "Project Manager",
      description:
        "Ensuring projects are delivered on time, within scope, and exceeding expectations.",
      social: ["linkedin-in", "twitter"],
    },
    {
      src: Imasha,
      name: "Imasha Williams",
      role: "Business Analyst",
      description:
        "Bridging the gap between business needs and technical solutions.",
      social: ["linkedin-in", "instagram"],
    },
    {
      src: Pamuda,
      name: "Pamuda Goonathilake",
      role: "Quality Assurance",
      description:
        "Ensuring every product meets the highest standards of quality and reliability.",
      social: ["linkedin-in", "github"],
    },
    {
      src: Hashini,
      name: "Hashini Nirupama",
      role: "UI/UX Designer",
      description:
        "Creating intuitive and engaging user experiences that delight customers.",
      social: ["linkedin-in", "dribbble", "behance"],
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-20 px-4 bg-gradient-to-r from-blue-100 to-indigo-100"
      >
        <h1 className="text-5xl font-bold text-gray-900">
          About <span className="text-blue-600">ENFERA</span>
        </h1>
        <p className="text-xl text-gray-700 mt-4 max-w-2xl mx-auto">
          Your trusted software development partner, delivering innovative and
          tailored digital solutions.
        </p>
      </motion.div>

      {/* Leader Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white py-20"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <img
              src={dev2}
              alt="Eranga Madushan"
              className="rounded-full w-48 h-48 object-cover border-4 border-blue-600 shadow-lg"
            />
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                A Word from Our Leader
              </h2>
              <p className="text-lg text-gray-600 italic mb-4">
                "At ENFERA, we empower businesses with AI-driven automation and
                cutting-edge web solutions. Our mission is to help companies
                streamline operations, boost sales, and stay ahead in the
                digital era. From intelligent automation to custom web
                development, we deliver innovative solutions that drive growth
                and efficiency."
              </p>
              <h3 className="text-xl font-bold text-gray-800">
                Eranga Madushan
              </h3>
              <p className="text-blue-600 font-semibold">
                Founder & CEO, ENFERA
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mission, Vision, Image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-r from-blue-50 to-indigo-100"
      >
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700">
              We are Enfera, a global software development company leveraging AI
              to craft tailored solutions with speed and precision. Our
              commitment goes beyond technology—we prioritize building lasting
              trust with our clients through innovation and reliability.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={missionImage}
              alt="Mission"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700">
              To drive meaningful change through technology and help businesses
              scale, adapt, and lead in their industries. Enfera envisions a
              world where digital innovation becomes a bridge to success.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Team Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-b from-white to-blue-50"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-blue-600">Team A</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            The brilliant minds at Enfera who bring expertise, passion, and
            innovation to every project.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-2xl">
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30"></div>
                    <img
                      src={member.src}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm mb-4">
                      {member.description}
                    </p>
                    <div className="flex justify-center space-x-3">
                      {member.social.map((platform, i) => (
                        <a
                          key={i}
                          href="#"
                          className="text-gray-500 hover:text-blue-600 transition-colors"
                        >
                          <i className={`fab fa-${platform}`}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Team B Section */}
          <div className="mt-24">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-blue-600">Team B</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12">
              Another passionate group of professionals dedicated to delivering
              innovation and excellence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
              {[
                {
                  src: Sachintha,
                  name: "Sachintha Nadeeshan",
                  role: "Back-end Developer",
                  description:
                    "Specializing in server-side logic, APIs, and scalable systems.",
                  social: ["linkedin-in", "github"],
                },
                {
                  src: Nimsara,
                  name: "Nimsara Themel",
                  role: "Front-end Developer",
                  description:
                    "Building clean, interactive, and responsive user interfaces.",
                  social: ["linkedin-in", "twitter"],
                },
                {
                  src: Nimesh,
                  name: "Nimesh Shaminda",
                  role: "UI/UX Designer",
                  description:
                    "Designing user-centered interfaces that blend creativity and usability.",
                  social: ["linkedin-in", "behance"],
                },
                {
                  src: "https://via.placeholder.com/300x300.png?text=Member+D",
                  name: "Member D",
                  role: "Role",
                  description: "Brief description about this team member.",
                  social: [],
                },
                {
                  src: "https://via.placeholder.com/300x300.png?text=Member+E",
                  name: "Member E",
                  role: "Role",
                  description: "Brief description about this team member.",
                  social: [],
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-2xl">
                    <div className="relative h-64 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30"></div>
                      <img
                        src={member.src}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-blue-600 font-medium mb-3">
                        {member.role}
                      </p>
                      <p className="text-gray-600 text-sm mb-4">
                        {member.description}
                      </p>
                      <div className="flex justify-center space-x-3">
                        {member.social.map((platform, i) => (
                          <a
                            key={i}
                            href="#"
                            className="text-gray-500 hover:text-blue-600 transition-colors"
                          >
                            <i className={`fab fa-${platform}`}></i>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-xl p-8 text-white max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">20+</div>
                <div className="text-blue-100">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">92%</div>
                <div className="text-blue-100">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-blue-100">Expert Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">2+</div>
                <div className="text-blue-100">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}
