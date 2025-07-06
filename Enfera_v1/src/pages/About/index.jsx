import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import hasitha from "../../assets/images/Hasitha.jpg";
import Pamuda from "../../assets/images/Pamuda.jpg";
import Imasha from "../../assets/images/Imasha.jpg";
import Himashi from "../../assets/images/Himashi.jpg";
import Hashini from "../../assets/images/Hashini.jpg";

export default function About() {
  const teamMembers = [
    {
      src: hasitha,
      name: "Hasitha Sandeep",
      role: "Front-end Developer",
      description: "Crafting beautiful, responsive interfaces with the latest web technologies.",
      social: ["linkedin-in", "github", "twitter"]
    },
    {
      src: Himashi,
      name: "Himashi",
      role: "Project Manager",
      description: "Ensuring projects are delivered on time, within scope, and exceeding expectations.",
      social: ["linkedin-in", "twitter"]
    },
    {
      src: Imasha,
      name: "Imasha Williams",
      role: "Business Analyst",
      description: "Bridging the gap between business needs and technical solutions.",
      social: ["linkedin-in", "instagram"]
    },
    {
      src: Pamuda,
      name: "Pamuda Goonathilake",
      role: "Quality Assurance",
      description: "Ensuring every product meets the highest standards of quality and reliability.",
      social: ["linkedin-in", "github"]
    },
    {
      src: Hashini,
      name: "Hashini Nirupama",
      role: "UI/UX Designer",
      description: "Creating intuitive and engaging user experiences that delight customers.",
      social: ["linkedin-in", "dribbble", "behance"]
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <Navbar />
      
      {/* ... Rest of your About page content ... */}
      
      {/* Team Section */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-blue-600">Team</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12">
              The brilliant minds at Enfera who bring expertise, passion, and innovation
              to every project, delivering exceptional results and ensuring client success.
            </p>
          </motion.div>

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
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-4">{member.description}</p>
                    
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
          
          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-xl p-8 text-white max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">200+</div>
                <div className="text-blue-100">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-blue-100">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-blue-100">Expert Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-blue-100">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      
      
      <Footer />
    </div>
  );
}