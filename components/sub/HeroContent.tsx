"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contactme");
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col-reverse md:flex-row items-center justify-center px-6 sm:px-10 md:px-20 mt-20 md:mt-40 w-full z-[20] relative"
    >
      {/* Left Content */}
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-center md:text-start">
        {/* Welcome Box */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-2 px-3 border border-[#7042f88b] opacity-90 flex justify-center md:justify-start items-center gap-2"
        >
          <SparklesIcon className="text-[#b49bff] h-5 w-5" />
          <h1 className="Welcome-text text-sm">Muhammad Ali Memon Portfolio</h1>
        </motion.div>

        {/* Heading */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 mt-6 text-4xl sm:text-5xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project experience
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg text-gray-400 my-5 max-w-[600px]"
        >
          <p className="text-base text-gray-300 leading-relaxed text-justify">
 I&apos;m a passionate Frontend Developer and UX Designer, focused on building responsive, accessible, and intuitive user interfaces. With a growing expertise in Python and a strong interest in Artificial Intelligence, I actively explore areas like Cloud-Applied Generative AI and Agentic AI. Every project I build reflects my commitment to innovation, performance, and user-centered design.
Lets collaborate to create something truly extraordinary.       
</p>

</motion.p>
       

        {/* Contact Button */}
        <div className="w-full flex justify-center md:justify-start mt-4">
          <motion.button
            variants={slideInFromLeft(1)}
            onClick={scrollToContact}
            className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[180px] sm:max-w-[300px] hover:opacity-90 transition-all duration-300 relative z-50"
            style={{ position: "relative", zIndex: 50 }}
          >
            Let&apos;s Have a Conversation!
          </motion.button>
        </div>
      </div>

      {/* Right Image */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center">
      
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
          className="max-w-[90%] sm:max-w-[650px] md:items-end mt-auto md:mt-0"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
