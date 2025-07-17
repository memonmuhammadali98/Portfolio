 "use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

const HeroContent = dynamic(() => import("../sub/HeroContent"), { ssr: false });

// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative flex flex-col h-screen w-full items-center justify-center" id="aboutme">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute left-0 z-[1] object-cover h-full w-full 
                   top-0 md:top-[-250px] lg:top-[-300px] 
                   sm:top--5 xs:top-[-100px] hidden md:block" 
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>


      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-14 left-5 bg-gray-900 p-4 rounded-md shadow-lg z-20">
          <ul className="text-white space-y-2">
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about-me" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;
