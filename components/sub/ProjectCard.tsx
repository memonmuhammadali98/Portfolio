"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ src, title, description, link }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 100; // Maximum length for truncated text

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const displayText = isExpanded 
    ? description 
    : description.length > maxLength 
      ? `${description.substring(0, maxLength)}...` 
      : description;

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[#030014]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4 z-[40]">
        <h1 className="text-2xl font-semibold text-white mb-2">{title}</h1>
        <p className="mt-2 text-gray-300 mb-4">{displayText}</p>
        
        {description.length > maxLength && (
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleDescription();
            }}
            className="text-purple-500 hover:text-purple-400 transition-colors duration-300 text-sm font-medium relative z-[50]"
            style={{ 
              position: 'relative',
              zIndex: 50,
              pointerEvents: 'auto'
            }}
          >
            {isExpanded ? "Show Less" : "Read More"}
          </button>
        )}

        <div className="mt-4 pt-4 border-t border-[#2A0E61] relative z-[50]">
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full py-2 px-4 text-center text-white bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg hover:opacity-90 transition-all duration-300"
            style={{ 
              position: 'relative',
              zIndex: 50,
              pointerEvents: 'auto'
            }}
          >
            Visit Website
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
