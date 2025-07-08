import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Service Images
import devTeamImage from "../../assets/images/nordwood-themes-kRNZiGKtz48-unsplash.jpg";
import devTeamImage2 from "../../assets/images/damian-zaleski-RYyr-k3Ysqg-unsplash.jpg";
import devTeamImage3 from "../../assets/images/leone-venter-VieM9BdZKFo-unsplash.jpg";
import devTeamImage4 from "../../assets/images/aidan-hancock-UtzrcidfCsk-unsplash.jpg";
import devTeamImage5 from "../../assets/images/david-svihovec-y625OUyhTG8-unsplash.jpg";
import devTeamImage6 from "../../assets/images/nordwood-themes-Cli7eZZzfyM-unsplash.jpg";
import ctaImage from "../../assets/images/photo-1556761175-5973dc0f32e7.avif";
// Service Card Component
const ServiceCard = ({ number, title, description, image, onClick }) => {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      className="group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl cursor-pointer h-72"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black/90"></div>
      </div>

      <div className="relative p-6 h-full flex flex-col justify-end text-white z-10">
        <div className="flex items-center mb-2">
          <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">
            {number}
          </div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-gray-200 mb-4 text-sm">{description}</p>
        <div className="flex justify-between items-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-full text-xs transition-all group-hover:px-6">
            Learn More
          </button>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Services Page Component
export default function Services() {
  const navigate = useNavigate();

  // Services Data
  const services = [
    {
      number: "1",
      title: "Dedicated Development Teams",
      description:
        "Expand your team with top-tier professionals dedicated to accelerating your project's success!",
      image: devTeamImage,
      path: "/services/dedicated-development-team",
    },
    {
      number: "2",
      title: "User-Centric Design",
      description:
        "Transform user experiences with intuitive and engaging designs that captivate and delight!",
      image: devTeamImage2,
      path: "/services/user-centric-design",
    },
    {
      number: "3",
      title: "Flyer Post Design",
      description:
        "Make a lasting impression with visually compelling, high-impact flyers that boost your brand!",
      image: devTeamImage3,
      path: "/services/service-unavailable",
    },
    {
      number: "4",
      title: "AI and Automation",
      description:
        "Empower your business with cutting-edge AI and automation solutions that drive efficiency and innovation.",
      image: devTeamImage4,
      path: "/services/service-unavailable",
    },
    {
      number: "5",
      title: "Mobile App Development",
      description:
        "Build seamless high-performance mobile apps that connect, engage and grow your audience!",
      image: devTeamImage5,
      path: "/services/mobile-app-development",
    },
    {
      number: "6",
      title: "Custom Web Solutions",
      description:
        "Turn your ideas into stunning, high-performance websites that leave a digital footprint!",
      image: devTeamImage6,
      path: "/services/custom-web-solutions",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative overflow-hidden py-24 md:py-32 bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+')]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Premium Services
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Enfera leads with excellence in every endeavor. We are committed
              to delivering superior quality products, always surpassing
              customer expectations.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center mb-4">
            <div className="w-10 h-0.5 bg-blue-600 mr-4"></div>
            <span className="text-blue-600 font-bold uppercase tracking-wider">
              What We Offer
            </span>
            <div className="w-10 h-0.5 bg-blue-600 ml-4"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Excellence In Every Endeavor
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We deliver innovative solutions tailored to your business needs,
            driving growth and success.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.number}
              number={service.number}
              title={service.title}
              description={service.description}
              image={service.image}
              onClick={() => {
                if (service.path) {
                  navigate(service.path);
                }
              }}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex items-center">
            <div className="md:w-2/3 p-8 md:p-12">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-blue-100 mb-6 max-w-xl">
                Contact us today to discuss how our services can help you
                achieve your goals and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {/* <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition duration-300">
                  Get Started
                </button> */}
                <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-full transition duration-300">
                  Schedule a Call
                </button>
              </div>
            </div>
            <div className="md:w-1/3 hidden md:block">
              <img
                src={ctaImage}
                alt="Business Transformation"
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-xl p-8 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">20+</div>
            <div className="text-blue-100 font-medium">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">92%</div>
            <div className="text-blue-100 font-medium">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">15+</div>
            <div className="text-blue-100 font-medium">Expert Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">2+</div>
            <div className="text-blue-100 font-medium">Years Experience</div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
