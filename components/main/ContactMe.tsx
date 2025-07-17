 "use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import emailjs from "emailjs-com";  
import Image from "next/image";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string
      );

      setSuccessMessage("Message sent successfully! ✅");
      setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" }); // Reset form
    } catch (error) {
      setErrorMessage("Failed to send message. ❌ Please try again.");
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10" id="contactme">
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-center px-6 sm:px-10 py-10 w-full text-white max-w-6xl mx-auto"
      >
        {/* Title */}
        <motion.h2
          variants={slideInFromTop}
          className="text-5xl font-bold text-center mb-6"
        >
          Get in <span className="text-purple-500">touch</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={slideInFromLeft(0.5)}
          className="text-lg text-gray-400 text-center mb-4 max-w-[600px]"
        >
          Reach out, and let s create a universe of possibilities together!
        </motion.p>

        {/* Form and Image Container */}
        <div className="flex flex-col md:flex-row gap-10 w-full h-full items-center justify-center">
          {/* Form */}
          <div className="relative z-40 w-full md:w-1/2 flex items-center justify-center">
            <form
              onSubmit={handleSubmit}
              className="relative flex flex-col gap-5 w-full bg-[#1a1a2e] p-8 rounded-lg shadow-xl h-full"
            >
              <h3 className="text-2xl font-semibold mb-4">Lets link our constellations and bring ideas to light.</h3>
              <p className="text-gray-400 mb-6">Lets connect and create something extraordinary together, we can turn ideas into brilliance.</p>
              
              {/* Name Input */}
              <div className="flex gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-1/2 p-3 bg-[#23233a] border border-[#7042f88b] rounded-lg focus:outline-none focus:border-purple-500 text-white"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-1/2 p-3 bg-[#23233a] border border-[#7042f88b] rounded-lg focus:outline-none focus:border-purple-500 text-white"
                />
              </div>

              {/* Email Input */}
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 bg-[#23233a] border border-[#7042f88b] rounded-lg focus:outline-none focus:border-purple-500 text-white"
              />

              {/* Phone Number Input */}
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-3 bg-[#23233a] border border-[#7042f88b] rounded-lg focus:outline-none focus:border-purple-500 text-white"
              />

              {/* Message Input */}
              <textarea
                name="message"
                rows={4}
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 bg-[#23233a] border border-[#7042f88b] rounded-lg focus:outline-none focus:border-purple-500 text-white"
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={`py-3 px-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg text-white font-bold hover:opacity-80 transition-all duration-300 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Sending..." : "Send it to the moon"}
              </button>

              {/* Success & Error Messages */}
              {successMessage && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center justify-center mt-4 text-green-400"
                >
                  <svg
                    className="w-6 h-6 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <p>{successMessage}</p>
                </motion.div>
              )}
              {errorMessage && <p className="text-red-400 text-center mt-4">{errorMessage}</p>}
            </form>
          </div>

          {/* Image */}
          <div className="relative z-40 w-full md:w-1/2 flex items-center justify-center h-full">
            <Image
              src="/ast.png"
              alt="Astronaut"
              width={500}
              height={600}
              className="rounded-lg shadow-xl h-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactMe;