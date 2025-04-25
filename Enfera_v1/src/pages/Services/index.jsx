import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import devTeamImage from "../../assets/images/nordwood-themes-kRNZiGKtz48-unsplash.jpg";
import devTeamImage2 from "../../assets/images/damian-zaleski-RYyr-k3Ysqg-unsplash.jpg";
import devTeamImage3 from "../../assets/images/leone-venter-VieM9BdZKFo-unsplash.jpg";
import devTeamImage4 from "../../assets/images/aidan-hancock-UtzrcidfCsk-unsplash.jpg";
import devTeamImage5 from "../../assets/images/david-svihovec-y625OUyhTG8-unsplash.jpg";
import devTeamImage6 from "../../assets/images/nordwood-themes-Cli7eZZzfyM-unsplash.jpg";

// Service Card Component for reusability
const ServiceCard = ({ number, title, description, image }) => {
  return (
    <div className="bg-gray-100 rounded-2xl overflow-hidden p-4 md:p-6 shadow-md flex relative border border-black w-full max-w-full md:max-w-md">
      <div className="w-full md:w-3/5 z-10">
        <div className="flex items-start mb-2">
          <span className="text-lg font-bold mr-2">{number}.</span>
          <h3 className="text-lg font-bold">{title}</h3>
        </div>
        <p className="text-gray-700 text-xs md:text-sm mb-4">
          {description}
        </p>
        <div className="mt-2">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1 px-4 md:px-6 rounded-full text-xs md:text-sm">
            Learn More
          </button>
        </div>
      </div>
      <div className="absolute top-0 right-0 h-full w-1/3 md:w-2/5">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default function Services() {
  // Service data array for easy management
  const services = [
    {
      number: "1",
      title: "Dedicated Development Teams",
      description: "Expand your team with top-tier professionals dedicated to accelerating your project's success!",
      image: devTeamImage
    },
    {
      number: "2",
      title: "User-Centric Design",
      description: "Transform user experiences with intuitive and engaging designs that captivate and delight!",
      image: devTeamImage2
    },
    {
      number: "3",
      title: "Flyer Post Design",
      description: "Make a lasting impression with visually compelling, high-impact flyers that boost your brand!",
      image: devTeamImage3
    },
    {
      number: "4",
      title: "AI and Automation",
      description: "Empower your business with cutting-edge AI and automation solutions that drive efficiency and innovation.",
      image: devTeamImage4
    },
    {
      number: "5",
      title: "Mobile App Development",
      description: "Build seamless high-performance mobile apps that connect, engage and grow your audience!",
      image: devTeamImage5
    },
    {
      number: "6",
      title: "Custom Web Solutions",
      description: "Turn your ideas into stunning, high-performance websites that leave a digital footprint!",
      image: devTeamImage6
    }
  ];

  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen flex flex-col items-center px-4 md:px-8 pt-20 pb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center">Our Services</h1>
        <p className="text-black text-lg md:text-xl text-center mt-3">
          Enfera Leads with Excellence In Every Endeavor.
        </p>
        <p className="text-black text-lg md:text-xl text-center mt-2">
          We are Committed To Delivering Superior Quality Products, Always
        </p>
        <p className="text-black text-lg md:text-xl text-center mt-2 mb-6">
          Surpassing Customer Expectations
        </p>
        
        {/* Services grid - responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5 w-full max-w-5xl">
  {services.map((service) => (
    <ServiceCard 
      key={service.number}
      number={service.number}
      title={service.title}
      description={service.description}
      image={service.image}
    />
  ))}
</div>
      </div>
      <Footer />
    </>
  );
}