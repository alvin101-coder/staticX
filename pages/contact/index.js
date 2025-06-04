import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Contact = () => {
  // ✅ Initialize state with new fields
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

  // ✅ Validate Phone Number (Only Numbers Allowed)
  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    setFormData({ ...formData, phone: value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setSuccess("");
  setError("");

  const web3FormData = new FormData();
  web3FormData.append("access_key", "2ca99f30-48c0-4f12-bd67-3e40d558864f"); // Replace with your Web3Forms key
  web3FormData.append("from_name", "Alvin's Portfolio"); 
  web3FormData.append("subject", `New Contact Request from ${formData.firstName} ${formData.lastName}`);
  web3FormData.append("message", `
    Name: ${formData.firstName} ${formData.lastName}
    Email: ${formData.email}
    Phone: ${formData.phone}
    Subject: ${formData.subject}
    Message: ${formData.message}
  `);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: web3FormData
    });

    if (response.ok) {
      setSuccess("✅ Message sent successfully!");

      // ✅ Correct way to reset the form fields
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });

      // ✅ Also reset input fields by targeting their values directly
      document.querySelectorAll("input, textarea").forEach(field => field.value = "");
    } else {
      setError("❌ Error sending message. Please try again.");
    }
  } catch (error) {
    setError("⚠️ Network error. Please check your connection.");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let's <span className="text-accent">Connect.</span>
          </motion.h2>

          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            {/* Name Fields */}
            <div className="flex gap-x-6 w-full">
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
            <div className="flex gap-x-6 w-full">
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

            {/* Subject & Message Fields */}
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

            {/* Submit Button with Loading Animation */}
            <button type="submit" className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
              {loading ? (
                <span className="animate-spin border-t-2 border-white rounded-full w-5 h-5"></span>
              ) : (
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">Let's talk</span>
              )}
              <BsArrowRight className="absolute text-[22px] -translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300" />
            </button>
          </motion.form>

          {/* Success & Error Notifications */}
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
