import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Socials from "../../components/Socials"; // 👈 import socials

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setFormData({ ...formData, phone: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    const web3FormData = new FormData();
    web3FormData.append("access_key", "2ca99f30-48c0-4f12-bd67-3e40d558864f");
    web3FormData.append("from_name", "Alvin's Portfolio");
    web3FormData.append(
      "subject",
      `New Contact Request from ${formData.firstName} ${formData.lastName}`
    );
    web3FormData.append(
      "message",
      `
      Name: ${formData.firstName} ${formData.lastName}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Subject: ${formData.subject}
      Message: ${formData.message}
    `
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: web3FormData
      });

      if (response.ok) {
        setSuccess(" Thanks for reaching out! I’ll get back to you as soon as possible.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        });
        document.querySelectorAll("input, textarea").forEach(
          (field) => (field.value = "")
        );
      } else {
        setError("❌ Something went wrong while sending your message. Please try again in a moment.");
      }
    } catch (error) {
      setError("⚠️ Network issue detected. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full bg-primary">
      <div className="container mx-auto py-20 md:py-28 xl:py-32 text-center xl:text-left flex items-center justify-center h-full px-4">
        <div className="flex flex-col w-full max-w-[700px]">
          
          {/* socials directly under logo, before heading */}
          <div className="flex justify-center mb-10">
            {/* <Socials className="flex gap-x-6 text-xl sm:text-2xl" /> */}
          </div>

          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-center mb-4"
          >
            Let’s <span className="text-accent">Connect.</span>
          </motion.h2>

          {/* tagline */}
          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-sm sm:text-base text-white/70 max-w-[500px] mx-auto mb-12"
          >
            I’d love to hear about your project and explore how we can bring it to life together.
          </motion.p>

          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            {/* Name Fields */}
            <div className="flex flex-col sm:flex-row gap-6 w-full">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="input"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="input"
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone & Email Fields */}
            <div className="flex flex-col sm:flex-row gap-6 w-full">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="input"
                onChange={handlePhoneChange}
                required
              />
            </div>

            {/* Subject & Message */}
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input"
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Message"
              className="textarea"
              onChange={handleChange}
              required
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group relative"
            >
              {loading ? (
                <span className="animate-spin border-t-2 border-white rounded-full w-5 h-5"></span>
              ) : (
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                  Let’s talk
                </span>
              )}
              <BsArrowRight className="absolute text-[22px] -translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300" />
            </button>
          </motion.form>

          {/* Success & Error */}
          {success && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-green-500 text-white p-3 rounded-md mt-4"
            >
              {success}
            </motion.div>
          )}

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-red-500 text-white p-3 rounded-md mt-4"
            >
              {error}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
