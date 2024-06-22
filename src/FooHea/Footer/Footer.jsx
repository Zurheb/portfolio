import React from "react";
import { Typography } from "@material-tailwind/react";
import { FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";

export const Footer = () => {
  return (
    <div>
      <footer className="mt-20 bg-[#F5F5F5] dark:bg-[#191919]">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <Typography
            as="a"
            href="#Hero"
            data-aos="zoom-in-right"
            className="text-3xl font-bold cursor-pointer mb-4 md:mb-0"
          >
            <h1 className="Behruz ">Behruz</h1>
          </Typography>

          <div className="flex flex-col md:flex-row gap-4 items-center md:items-end" data-aos="zoom-in-left">
            <a
              href="tel:+998881373360"
              className="hover:text-blue-500 dark:hover:text-blue-500 text-[#666666] dark:text-[#A7A7A7]"
              
            >
              +998 88 137 33 60
            </a>
            <a
              href="mailto:behber84@icloud.com"
              className="hover:text-blue-500 dark:hover:text-blue-500 text-[#666666] dark:text-[#A7A7A7]"
              
            >
              behber84@icloud.com
            </a>
            <div className="flex space-x-6 text-[#666666] dark:text-[#A7A7A7] mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-500" >
                <FaTelegram size={25} />
              </a>
              <a
                href="https://www.instagram.com/beha_o7o/?utm_source=ig_web_button_share_sheet"
                className="hover:text-pink-500"
                
              >
                <FaInstagram size={25} />
              </a>
              <a href="#" className="hover:text-blue-900" >
                <FaGithub size={25} />
              </a>
            </div>
          </div>
        </div>
        <div className="container border-t-2 border-[#141414]  dark:border-[#A7A7A7] mt-8" >
          <p className="text-center text-gray-500 py-4"  >
            &copy; {new Date().getFullYear()} Designed and built by{" "}
            <span className="Zurheb">Behruz</span> with{" "}
            <span className="Zurheb">Love</span> &{" "}
            <span className="Zurheb">Coffee</span>
          </p>
        </div>
      </footer>
    </div>
  );
};
