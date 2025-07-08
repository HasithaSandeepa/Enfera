import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Images
import img1 from '../../assets/images/Screenshot 2025-07-06 105226.png';
import img2 from '../../assets/images/Screenshot 2025-07-06 105253.png';
import img3 from '../../assets/images/Screenshot 2025-07-06 105313.png';
import img4 from '../../assets/images/Screenshot 2025-07-06 105651.png';
import img5 from '../../assets/images/Screenshot 2025-07-06 105713.png';
import img6 from '../../assets/images/Screenshot 2025-07-06 105732.png';
import img7 from '../../assets/images/Screenshot 2025-07-06 105804.png';
import img8 from '../../assets/images/Screenshot 2025-07-06 111539.png';
import img9 from '../../assets/images/Screenshot 2025-07-06 111630.png';
import img10 from '../../assets/images/Screenshot 2025-07-06 111859.png';
import img11 from '../../assets/images/Screenshot 2025-07-06 111917.png';
import img12 from '../../assets/images/Screenshot 2025-07-06 111940.png';
import img13 from '../../assets/images/Screenshot 2025-07-06 112001.png';
import img14 from '../../assets/images/Screenshot 2025-07-06 112152.png';
import img15 from '../../assets/images/Screenshot 2025-07-06 112201.png';

const SampleProjects = () => {
  const carouselImages = [img10, img11, img12, img13, img14, img15];
  const ecommerceImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  
  const [currentImage, setCurrentImage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % carouselImages.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, carouselImages.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  // Project categories
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ecommerce', name: 'E-Commerce' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'enterprise', name: 'Enterprise' },
    { id: 'design', name: 'UI/UX Design' }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative py-24 md:py-32 bg-gradient-to-r from-blue-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iMiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz48L3N2Zz4=')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-200">
                Our Portfolio
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Explore our innovative solutions that showcase our expertise in creating exceptional digital experiences.
            </p>
            <div className="flex justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300 mr-4">
                Get Started
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-3 px-8 rounded-full transition duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center mb-4">
              <div className="w-12 h-0.5 bg-blue-500 mr-4"></div>
              <span className="text-blue-600 font-bold uppercase tracking-wider">Showcase</span>
              <div className="w-12 h-0.5 bg-blue-500 ml-4"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Sample Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our portfolio of innovative solutions that demonstrate our expertise and creativity.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Featured Projects Carousel */}
          <div className="mb-20">
            <div className="flex items-center justify-center mb-8">
              <div className="w-12 h-0.5 bg-blue-500 mr-4"></div>
              <h2 className="text-3xl font-bold text-center text-gray-800">Featured Projects</h2>
              <div className="w-12 h-0.5 bg-blue-500 ml-4"></div>
            </div>
            
            <div className="relative max-w-6xl mx-auto overflow-hidden rounded-2xl shadow-2xl border-4 border-white">
              <div className="relative h-[500px]">
                {carouselImages.map((img, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === currentImage ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`Featured ${index}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-3 transition-all backdrop-blur-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-3 transition-all backdrop-blur-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {/* Play/Pause Button */}
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="absolute bottom-4 right-4 bg-black/30 hover:bg-black/50 text-white rounded-full p-3 transition-all backdrop-blur-sm"
                >
                  {isPlaying ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </button>
                
                {/* Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentImage ? 'bg-white w-6' : 'bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Project Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Enterprise Management System</h3>
                <p className="text-blue-300 mb-3">React, Node.js, PostgreSQL</p>
                <p className="max-w-xl">
                  A comprehensive business solution with real-time analytics, workflow automation, 
                  and seamless integration across departments.
                </p>
              </div>
            </div>
          </div>

          {/* E-Commerce Solutions Grid */}
          <div className="mb-20">
            <div className="flex items-center justify-center mb-8">
              <div className="w-12 h-0.5 bg-blue-500 mr-4"></div>
              <h2 className="text-3xl font-bold text-center text-gray-800">E-Commerce Solutions</h2>
              <div className="w-12 h-0.5 bg-blue-500 ml-4"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {ecommerceImages.map((img, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all bg-white"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={img}
                      alt={`E-commerce ${index}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <div>
                        <h4 className="text-white text-xl font-bold mb-1">
                          {index === 0 ? "Fashion Retail" : 
                           index === 1 ? "Electronics Store" : 
                           index === 2 ? "Grocery Delivery" : 
                           index === 3 ? "Home Decor" : 
                           index === 4 ? "Health & Beauty" : 
                           index === 5 ? "Fitness Equipment" : 
                           index === 6 ? "Bookstore" : 
                           index === 7 ? "Jewelry" : "Pet Supplies"}
                        </h4>
                        <p className="text-blue-300 text-sm">
                          {index % 3 === 0 ? "React, Node.js, MongoDB" : 
                           index % 3 === 1 ? "Vue.js, Python, PostgreSQL" : 
                           "Next.js, Express, MySQL"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-800">
                        {index === 0 ? "Luxury Fashion Platform" : 
                         index === 1 ? "Electronics Marketplace" : 
                         index === 2 ? "Grocery Delivery App" : 
                         index === 3 ? "Home Decor Collection" : 
                         index === 4 ? "Beauty Products Store" : 
                         index === 5 ? "Fitness Equipment Shop" : 
                         index === 6 ? "Online Bookstore" : 
                         index === 7 ? "Fine Jewelry Boutique" : "Pet Supplies"}
                      </h4>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {index % 2 === 0 ? "UI/UX" : "Fullstack"}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {index === 0 ? "Personalized shopping with virtual try-on" : 
                       index === 1 ? "AI-powered product recommendations" : 
                       index === 2 ? "Real-time inventory tracking" : 
                       index === 3 ? "3D room visualization tools" : 
                       index === 4 ? "Skin analysis integration" : 
                       index === 5 ? "Workout plan customization" : 
                       index === 6 ? "Personalized reading recommendations" : 
                       index === 7 ? "Custom jewelry design tool" : "Pet health tracking"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-xl p-8 mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">100+</div>
                <div className="text-blue-100 font-medium">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">92%</div>
                <div className="text-blue-100 font-medium">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">20+</div>
                <div className="text-blue-100 font-medium">Expert Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">4+</div>
                <div className="text-blue-100 font-medium">Years Experience</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex items-center">
              <div className="md:w-1/2 p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Ready to Start Your Project?
                </h3>
                <p className="text-gray-600 mb-6 max-w-xl">
                  Contact us today to discuss your project requirements and let our experts bring your vision to life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-lg">
                    Schedule a Consultation
                  </button>
                  <button className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-full transition duration-300">
                    View Full Portfolio
                  </button>
                </div>
              </div>
              <div className="md:w-1/2 hidden md:block">
                <div className="bg-gradient-to-br from-blue-400 to-indigo-600 h-full flex items-center justify-center p-12">
                  <div className="bg-white/20 backdrop-blur-sm p-8 rounded-2xl border border-white/30">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <h4 className="text-white text-xl font-bold text-center mt-4">Let's Build Something Amazing</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SampleProjects;