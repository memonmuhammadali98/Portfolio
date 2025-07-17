 "use client";

import Image from "next/image";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-5 md:px-10">
      <div className="w-full h-full flex items-center justify-between">
        {/* Logo */}
        <a href="#about-me" className="flex items-center">
          <Image
            src="/Navbarlogo.png"
            alt="logo"
            width={90}
            height={25}
            className="cursor-pointer hover:animate-slowspin"
          />
          {/* <span className="font-bold ml-1 hidden md:block text-gray-300">
            Muhammad Ali
          </span> */}
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-between border border-[#7042f861] bg-[#0300145e] px-6 py-2 rounded-full text-gray-200">
          {["About me", "Skills", "Projects", "Contact Me"].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(" ", "")}`} className="px-4 cursor-pointer">
              {item}
            </a>
          ))}
        </div>

        {/* Hardcoded Social Icons */}
        <div className="hidden md:flex gap-4">
          <a href="https://github.com/memonmuhammadali98" target="_blank" rel="noopener noreferrer">
            <Image src="/gitwhite.png" alt="GitHub" width={24} height={24} />
          </a>
          <a href="https://www.linkedin.com/in/muhammadali-memon99" target="_blank" rel="noopener noreferrer">
            <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} />
          </a>
          
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 bg-gray-900 rounded-md text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-[65px] left-0 w-full bg-[#030014] text-white flex flex-col items-center py-4 shadow-lg"
          >
            {["About me", "Skills", "Projects", "Contact Me"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="py-2 text-lg"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}

            {/* Hardcoded Social Icons in Mobile Menu */}
            <div className="flex gap-5 mt-4">
              <a href="https://github.com/memonmuhammadali98" target="_blank" rel="noopener noreferrer">
                <Image src="/gitwhite.png" alt="GitHub" width={24} height={24} />
              </a>
              <a href="https://www.linkedin.com/in/muhammadali-memon99" target="_blank" rel="noopener noreferrer">
                <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
