import React from "react";
import { Link } from "react-router-dom";
import { FiCheck } from "react-icons/fi";
import { motion } from "framer-motion";
import CountUp from "react-countup";

import Navbar from "../../components/Navbar";
import ServiceCard from "../../components/ServiceCard";
import servicesData from "../../data/servicesData";
import reasons from "../../data/reasonsData";
import AssistantCard from "../../components/AssistantCard";
import Footer from "../../components/Footer";
import Client1 from "../../assets/images/PH2VQ26FQVEXPF3BKILGSEITSQ.jpg";
import Client2 from "../../assets/images/download (2).jpg";

export default function Home() {
  const stats = [
    { number: 20, label: "Projects Delivered" },
    { number: 92, label: "Client Satisfaction (%)" },
    { number: 10, label: "Clients" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="src/assets/images/HeroImage.jpeg"
            alt="Digital Innovation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-indigo-900/80" />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              We Craft{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Exceptional
              </span>{" "}
              Digital Products
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
              Transforming your vision into innovative digital experiences that
              drive business growth
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/services"
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-600 hover:to-purple-700"
              >
                Explore Services
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Who We Are */}
      <section className="py-20 relative overflow-hidden">
        {/* <div className="absolute -top-40 -left-40 w-[600px] h-[600px] opacity-30">
          <img src="src/assets/images/BlueEllipse.png" alt="blue background" className="w-full h-full object-contain" />
        </div> */}
        {/* <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] opacity-30">
          <img src="src/assets/images/GrayEllipse.png" alt="gray background" className="w-full h-full object-contain" />
        </div> */}

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                Who
              </span>{" "}
              We Are
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8" />
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Enferra delivers innovative, scalable, and high-performance
              digital solutions, specializing in custom software, web, and
              mobile app development.
            </p>
          </div>

          {/* Animated Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center"
              >
                <CountUp
                  end={stat.number}
                  duration={3}
                  className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-4"
                />
                <div className="text-xl font-medium text-gray-800">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Services Section */}
          <section id="services" className="py-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                  Services
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We offer custom-tailored digital solutions built for innovation,
                performance, and results.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl border border-gray-200 hover:border-blue-500 transition-all duration-300 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl p-3 mr-4">
                      <span className="text-xl font-bold">
                        {service.number}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Why Choose Us */}
          <div className="text-center pt-16">
            <h3 className="text-3xl font-bold mb-6">Why Choose Us?</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8" />
            <p className="text-gray-600 max-w-2xl mx-auto mb-12">
              Discover what makes us different from the rest
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition duration-300 group"
                >
                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-full p-3 mr-4 group-hover:from-blue-200 group-hover:to-purple-200">
                      <FiCheck size={24} className="text-blue-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      {reason}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials
      <section className="py-20 bg-gradient-to-br from-gray-900 to-indigo-900 text-white ">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {["Sarah Johnson", "Michael Chen"].map((name, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.3 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
              >
                <p className="text-gray-200 mb-6 italic">
                  {i === 0
                    ? '"Enferra transformed our digital presence with their innovative solutions. Their team delivered beyond our expectations."'
                    : '"The attention to detail and commitment to quality sets Enferra apart. They truly understand business needs."'}
                </p>
                <div className="flex items-center">
                  <img
                    src={i === 0 ? Client1 : Client2}
                    alt={`Client ${i + 1}`}
                    className="w-16 h-16 rounded-xl object-cover mr-4"
                  />
                  <div>
                    <div className="font-bold">{name}</div>
                    <div className="text-gray-300">
                      {i === 0 ? "CTO, TechInnovate" : "CEO, Global Solutions"}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your digital goals
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3 bg-white text-blue-600 rounded-full font-medium shadow-lg hover:shadow-xl transition duration-300 hover:bg-gray-100"
            >
              Get in Touch
            </Link>
            <Link
              to="/portfolio"
              className="px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      <AssistantCard />
      <Footer />
    </div>
  );
}
