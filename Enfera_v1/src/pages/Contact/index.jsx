import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    companyWebsite: "",
    email: "",
    phone: "",
    messageAbout: "",
    planningMessage: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 py-8">
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md w-full max-w-xl">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">Contact Us</h1>
          <p className="text-center text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
            Have an idea? Let&apos;s bring it to life!{" "}
            <span className="font-semibold">Send us a message</span> about what you're
            planning to build or 📧 Email us at{" "}
            <a href="mailto:enfera.official@gmail.com" className="text-blue-500 underline">
              enfera.official@gmail.com
            </a>{" "}
            for direct inquiries. <br />
            We&apos;re excited to hear from you! 🚀
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleChange}
                className="border p-2 rounded-lg w-full text-sm"
                required
              />
              <input
                type="text"
                name="companyWebsite"
                placeholder="Company website link"
                value={formData.companyWebsite}
                onChange={handleChange}
                className="border p-2 rounded-lg w-full text-sm"
              />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                className="border p-2 rounded-lg w-full text-sm"
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone (optional)"
                value={formData.phone}
                onChange={handleChange}
                className="border p-2 rounded-lg w-full text-sm"
              />
            </div>

            <div>
              <select
                name="messageAbout"
                value={formData.messageAbout}
                onChange={handleChange}
                className="border p-2 rounded-lg w-full text-sm"
                required
              >
                <option value="">Select topic</option>
                <option value="Web Development">Web Development</option>
                <option value="AI Solutions">AI Solutions</option>
                <option value="Consultation">Consultation</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <textarea
                name="planningMessage"
                placeholder="What are you planning to build?"
                value={formData.planningMessage}
                onChange={handleChange}
                maxLength={300}
                rows="4"
                className="border p-2 rounded-lg w-full text-sm"
                required
              />
              <div className="text-right text-xs text-gray-400 mt-1">
                Max 300 characters
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="mt-1 h-4 w-4"
                required
              />
              <p className="text-xs text-gray-600 leading-relaxed">
                I agree to provide the above personal data to Enfera. Enfera may use this data for
                evaluation, store it for further processing, and utilize anonymized data to enhance
                recruitment processes through model training.
              </p>
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full text-sm transition w-full"
            >
              Send 🚀
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
