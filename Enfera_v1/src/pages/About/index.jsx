import Navbar from "../../components/Navbar";
import dev1 from "../../assets/images/IMG_0559.jpg";
import dev2 from "../../assets/images/eranga.png";
import missionImage from "../../assets/images/unsplash-image-w_zE6qlkQKA.jpg";
import { motion } from "framer-motion";
import meet from "../../assets/images/meet.jpg";
import hasitha from "../../assets/images/Hasitha.jpg";

import Pamuda from "../../assets/images/Pamuda.jpg";
import Imasha from "../../assets/images/Imasha.jpg";
import Himashi from "../../assets/images/Himashi.jpg";
import Hashini from "../../assets/images/Hashini.jpg";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center flex-col mt-10  text-center w-full">
        <h1 className="text-4xl font-bold mb-4">
          ABOUT <span className="text-blue-600">ENFERA</span>
        </h1>

        <p className="text-lg text-gray-700 font-medium max-w-xl">
          We are Enfera, your trusted software development partner, dedicated to
          delivering innovative and tailored digital solutions for your business
          needs.
        </p>

        <div className="card bg-primary text-primary-content w-[750px]  ">
          <div className="card-body bg-blue-800 h-60 mt-10 rounded-3xl shadow-lg text-white  items-start justify-start p-6">
            <h2 className="text-3xl font-bold mb-3 text-white">Who We Are?</h2>
            <p className="text-sm font-medium leading-relaxed mb-4">
              Since our inception, Enfera has been on a mission to revolutionize
              software development with cutting-edge solutions. We are not
              defined by titles or backgrounds — we are driven by innovation,
              results, and a passion for technology. At Enfera, we believe in
              the power of creativity, delivery, and collaboration to shape the
              future. We don't just adapt to change — we lead it.
            </p>
            <div className="flex justify-center w-full mt-auto">
              <img
                src="" // Replace with your logo URL
                alt="Enfera"
                className="rounded-full w-20 h-20 object-cover"
              />
            </div>
          </div>
        </div>
        <div className="card bg-primary text-primary-content w-[750px] mt-10 ">
          <div className="card-body bg-gray-200 h-60 rounded-3xl shadow-lg text-gray-500 p-6 flex gap-6 ">
            {/* Left: Image */}
            <div className="flex-shrink-0">
              <img
                src={dev2}
                alt="Eranga Madushan"
                className="rounded-full w-50 h-50 object-cover"
              />
            </div>

            {/* Right: Text Content */}
            <div className="flex flex-col justify-start">
              <h2 className="text-2xl font-bold text-black mb-1">
                A Word from Our Leader
              </h2>
              <p className="text-sm font-medium leading-snug mb-2">
                "At ENFERA, we empower businesses with AI-driven automation and
                cutting-edge web solutions. Our mission is to help companies
                streamline operations, boost sales, and stay ahead in the
                digital era. From intelligent automation to custom web
                development, we deliver innovative solutions that drive growth
                and efficiency. Together, we are shaping the future of business
                technology."
              </p>
              <h3 className="text-base font-bold text-black">
                Eranga Madushan
              </h3>
              <h4 className="text-sm font-semibold text-gray-500">
                Founder & CEO, ENFERA
              </h4>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-5 py-10 mt-5">
          {/* Box 1 - Our Mission (from left) */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.4 }}
            className="flex flex-col gap-5 mt-10"
          >
            <div dir="ltr">
              <div className="w-[280px] h-auto bg-black rounded-s-3xl shadow-lg text-white p-6 flex flex-col justify-between">
                <h2 className="text-xl font-bold mb-3">Our Mission</h2>
                <p className="text-sm">
                  We are Enfera, a global software development company
                  leveraging AI to craft tailored solutions with speed and
                  precision. Our commitment goes beyond technology—we prioritize
                  building lasting trust with our clients through innovation and
                  reliability.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Box 2 - Image Only (static) */}
          <div className="flex flex-col gap-5 mt-1">
            <div className="w-[280px] h-[320px] bg-blue-300 rounded-3xl shadow-lg overflow-hidden">
              <img
                src={missionImage}
                alt="Enfera Visual"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Box 3 - Our Vision (from right) */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.4 }}
            className="flex flex-col gap-5 mt-10"
          >
            <div dir="rtl">
              <div className="w-[280px] h-auto bg-black rounded-s-3xl shadow-lg text-white p-6 flex flex-col justify-between">
                <h2 className="text-xl font-bold mb-3">Our Vision</h2>
                <p className="text-sm">
                  To drive meaningful change through technology and help
                  businesses scale, adapt, and lead in their industries. Enfera
                  envisions a world where digital innovation becomes a bridge to
                  success.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className=" mt-1">
          <h1 className="text-4xl font-bold mb-4 mt-10">Meet Our Team</h1>
          <p className="text-sm text-2pxl mb-4 font-bold text-black">
            Meet some of the brilliant minds at Enfera who bring
            expertise,passsion,and innovation<br></br> to every project
            ,delivering exceptionel results and ensuring client success.
          </p>
        </div>
        <div className="flex justify-center py-10 ">
          <div className="relative w-[910px] ">
            {/* Background / Meet image */}
            <img
              src={meet}
              alt="Meet"
              className="w-1100 h-auto rounded-xl shadow-xl "
            />

            {/* Team Members Block */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap- px-6 py-4 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20 ">
              {[
                {
                  src: hasitha,
                  alt: "Hasitha",
                  name: "Hasitha Sandeep",
                  role: "Front-end Developer",
                },
                {
                  src: Himashi,
                  alt: "Hasitha",
                  name: "Hasitha Sandeep",
                  role: "Project Manager",
                },
                {
                  src: Imasha,
                  alt: "Imasha ",
                  name: "Imasha Williams",
                  role: "Business Analyst",
                },
                {
                  src: Pamuda,
                  alt: "Pamuda ",
                  name: "Pamuda Goonathilake",
                  role: "Quality Assurance",
                },
                {
                  src: Hashini,
                  alt: "Hashini",
                  name: "Hashini Nirupama",
                  role: "UI/UX Designer",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center text-white w-40  "
                >
                  <img
                    src={member.src}
                    alt={member.alt}
                    title={member.alt}
                    className="w-30 h-38 object-cover rounded-lg border-2 border-white shadow-md hover:scale-105 transition-transform duration-300 "
                  />
                  <p className="mt-2 font-semibold">{member.name}</p>
                  <p className="text-sm opacity-80">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
        <Footer />
    </>
  );
}
