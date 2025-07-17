"use client";

import React, { useState } from "react";
import ProjectCard from "../sub/ProjectCard";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const allProjects = [
    {
      src: "/myw11.png",
      title: "Modern Next.js BootCamp Website",
      description: "A comprehensive learning platform built with Next.js 13, featuring interactive course modules, real-time progress tracking, and a modern UI/UX design. Includes authentication, course management, and student dashboard.",
      link: "https://www.minhajaiacademy.com/"
    },
    {
      src: "/my1.svg",
      title: "Donation Website For FRGF Org",
      description: "A charitable platform built with WordPress, featuring secure donation processing, campaign tracking, and donor management. Includes custom animations, dynamic content loading, and optimized performance for better user engagement.",
      link: "https://www.fgrfafrica.org/"
    },
    {
      src: "/my4.png",
      title: "Space Themed Website",
      description: "An immersive space-themed portfolio showcasing cosmic animations, parallax effects, and interactive elements. Built with modern web technologies, featuring smooth transitions and responsive design for an engaging user experience.",
      link: "/"
    },
    {
      src: "/my3.svg",
      title: "Custom Printing marketplace Website",
      description: "A comprehensive printing marketplace platform with product customization tools, order management, and secure payment processing. Features real-time preview, multiple printing options, and efficient order tracking system.",
      link: "https://www.glacierpunch.com/"
    },
    {
      src: "/my6.svg",
      title: "Barbar Shop Website with Marketplace",
      description: "A comprehensive barbershop platform with integrated marketplace functionality. Features online booking system, product catalog, secure payment processing, and customer management system.",
      link: "https://barbershop-marketplace.vercel.app"
    },
    {
      src: "/my7.svg",
      title: "WooCommerce Website, FullFludget Marketplace",
      description: "A full-featured e-commerce marketplace built with WooCommerce. Includes multi-vendor support, advanced product filtering, secure payment gateways, and responsive design for all devices.",
      link: "https://fullfludget.com"
    },
    {
      src: "/my5.svg",
      title: "Redesigned Restaurant Website with Wordpress",
      description: "A modern restaurant website featuring online ordering, table reservations, menu management, and customer reviews. Includes responsive design and integration with popular food delivery services.",
      link: "https://restaurant-website.com"
    },
    {
      src: "/my10.svg",
      title: "Food Ordering Website",
      description: "A dynamic food delivery platform with real-time order tracking, menu management, and secure payment processing. Features restaurant search, user reviews, and seamless delivery integration.",
      link: "https://food-ordering.vercel.app"
    },
    {
      src: "/my11.svg",
      title: "Gaming themed Website",
      description: "An immersive gaming platform showcasing game reviews, community features, and gaming news. Features custom animations, game showcases, and interactive UI elements for an engaging user experience.",
      link: "https://gaming-portal.vercel.app"
    }
  ];

  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 6);

  return (
    <div
      className="flex flex-col items-center justify-center py-10 relative"
      id="projects"
    >
      <motion.h1
        variants={slideInFromTop}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10"
      >
        My Projects
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        {displayedProjects.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            title={project.title}
            description={project.description}
            link={project.link || "#"}
          />
        ))}
      </div>

      {allProjects.length > 6 && (
        <motion.button
          variants={slideInFromTop}
          onClick={() => setShowAll(!showAll)}
          className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[180px] mt-10 hover:opacity-90 transition-all duration-300 relative z-50"
          style={{ position: 'relative', zIndex: 50 }}
        >
          {showAll ? "Show Less" : "Show More"}
        </motion.button>
      )}
    </div>
  );
};

export default Projects;
