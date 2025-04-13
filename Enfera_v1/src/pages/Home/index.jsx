import Navbar from "../../components/Navbar";
import ServiceCard from "../../components/ServiceCard";
import "../../styles/Home.css";
import servicesData from "../../data/servicesData";
import reasons from "../../data/reasonsData";
import { FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";
import AssistantCard from "../../components/AssistantCard";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="image-container">
          <img
            src="src/assets/images/HeroImage.jpeg"
            alt="Background"
            className="home-image"
          />
          <div className="overlay" />
          <div className="overlay-text">
            We craft exceptional digital products and AI solutions.
          </div>
        </div>
        <div className="top-line"></div>
        <section className="who-we-are">
          {/* Background Images */}
          <img
            src="src/assets/images/BlueEllipse.png"
            alt="blue background"
            className="bg-image blue"
          />
          <img
            src="src/assets/images/GrayEllipse.png"
            alt="gray background"
            className="bg-image gray"
          />

          <div className="container">
            <h2>
              <span className="highlight">Who</span> We Are
            </h2>
            <p className="company-description">
              Enferra is a leading software development company delivering
              innovative, scalable, and high-performance digital solutions. We
              specialize in custom software, web, and mobile app development,
              ensuring quality, security, and exceptional user experience to
              drive business growth.
            </p>
          </div>
          <div className="services">
            <h3 className="services-heading">Our Services</h3>
            <div className="services-cards">
              {servicesData.map((service, index) => (
                <ServiceCard
                  key={index}
                  number={service.number}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
          <div className="why-us">
            <h3>Why Us?</h3>
            <div className="reason-grid">
              {reasons.map((reason, index) => (
                <div className="reason-card" key={index}>
                  {reason}
                  <span className="icon-circle">
                    <FiCheck size={30} color="var(--blue-two)" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <AssistantCard />
        <Footer />
      </div>
    </>
  );
}
