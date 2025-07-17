import React from "react";
import Link from "next/link";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

const Footer: React.FC = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] relative z-40">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-col md:flex-row items-center justify-around flex-wrap">
          {/* Community Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start mb-4 md:mb-0">
            <div className="font-bold text-[16px] mb-2">Community</div>
            <div className="flex flex-wrap gap-x-8 gap-y-2 justify-center">
              <Link
                href="https://github.com/memonmuhammadali98"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center cursor-pointer"
              >
                <RxGithubLogo />
                <span className="text-[15px] ml-[6px]">Github</span>
              </Link>
              <Link
                href="https://discord.com/users/1237062445613453355"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center cursor-pointer"
              >
                <RxDiscordLogo />
                <span className="text-[15px] ml-[6px]">Discord</span>
              </Link>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start mb-4 md:mb-0">
            <div className="font-bold text-[16px] mb-2">Social Media</div>
            <div className="flex flex-wrap gap-x-8 gap-y-2 justify-center">
              
              <Link
                href="https://www.linkedin.com/in/muhammadali-memon99"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center cursor-pointer"
              >
                <RxLinkedinLogo />
                <span className="text-[15px] ml-[6px]">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* About Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px] mb-2">About</div>
            <div className="flex flex-wrap gap-x-8 gap-y-2 justify-center">
              <Link
                href="https://mail.google.com/mail/u/0/#inbox?compose=jrjtXSntbQrrFmNZvttKNNWSWTdpttgCJpQTHVZcmBJWMSKXvBCqxKzwkZzmfjkLqlCbkGCL"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center cursor-pointer"
              >
                <span className="text-[15px]">G-Mail</span>
              </Link>
              
              {/* <span className="text-[14px] text-gray-400 w-full text-center">Mail</span> */}
              <span className="flex flex-row items-center justify-center cursor-pointer w-full text-center">
                {/* <span className="text-[15px] text-center">memonmuhammadali39@gmail.com</span> */}
              </span>
            </div>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center mt-4 md:mt-8">
          &copy; Developed by Muhammad Ali. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
