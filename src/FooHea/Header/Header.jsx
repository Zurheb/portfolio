import React, { useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
} from "@material-tailwind/react";
import { FaTelegram, FaInstagram, FaGithub } from "react-icons/fa";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../../Smth/darkmode";
import { useTranslation } from "react-i18next";

export function Header() {
  const [openNav, setOpenNav] = useState(false);
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme === "light" ? true : false);
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  const navItems = [
    { name: t("header.About"), href: "#Hero" },
    { name: t("header.TechStack"), href: "#MyTechStack" },
    { name: t("header.Project"), href: "#projects" },
    { name: t("header.Contact"), href: "#contact" },
  ];

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row items-center lg:gap-10" data-aos="zoom-out">
      {navItems.slice(0, 2).map((item) => (
        <li key={item.href}>
          <Typography
            as="a"
            variant="small"
            className="p-1 font-normal text-[#666666] dark:text-[#A7A7A7] nav-item"
            href={item.href}
            onClick={() => setOpenNav(false)} // Close mobile nav on click
          >
            {item.name}
          </Typography>
        </li>
      ))}
      <li className="hidden lg:block p-1 font-normal">
        <select
          onChange={handleLanguageChange}
          className="bg-[#F5F5F5] dark:bg-[#191919] dark:text-[#A7A7A7] dark:border-gray-700 border border-gray-300 rounded-md px-2 py-1 text-[#666666] focus:outline-none"
        >
          <option value="en">English</option>
          <option value="ru">Русский</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
          <option value="uz">Uzbek</option>
        </select>
      </li>
      {navItems.slice(2).map((item) => (
        <li key={item.href}>
          <Typography
            as="a"
            variant="small"
            className="p-1 font-normal text-[#666666] dark:text-[#A7A7A7] nav-item"
            href={item.href}
            onClick={() => setOpenNav(false)} // Close mobile nav on click
          >
            {item.name}
          </Typography>
        </li>
      ))}
    </ul>
  );

  return (
    <header>
      <Navbar className="fixed bg-[#F5F5F5] dark:bg-[#191919] border-none top-0 z-10 w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between">
          <Typography
            as="a"
            href="#Hero"
            className="mr-4 text-3xl cursor-pointer py-1.5 "
            data-aos="zoom-in-right"
          >
            <span className="Behruz">Behruz</span>
          </Typography>
          <div className="hidden lg:flex items-center gap-6">{navList}</div>
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex text-[#666666] dark:text-[#A7A7A7] items-center gap-10" data-aos="zoom-in-left">
              <a href="#" className="hover:text-blue-500">
                <FaTelegram size={25} />
              </a>
              <a href="https://www.instagram.com/beha_o7o/?utm_source=ig_web_button_share_sheet" className="hover:text-pink-500">
                <FaInstagram size={25} />
              </a>
              <a href="#" className="hover:text-blue-900">
                <FaGithub size={25} />
              </a>
              <a href="#">
                <DarkModeSwitch
                  checked={darkSide}
                  onChange={toggleDarkMode}
                  size={25}
                />
              </a>
            </div>
            <div
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              data-aos="zoom-in-left"
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill=""
                  className="h-6 w-6  text-black dark:text-white "
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-black dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
        <MobileNav open={openNav}>
          <div className="flex flex-col items-center justify-center">
            {navList}
            <div className="flex flex-col items-center gap-4 text-[#666666] dark:text-[#A7A7A7]">
              <a href="#" className="hover:text-blue-500">
                <FaTelegram size={20} />
              </a>
              <a href="https://www.instagram.com/beha_o7o/?utm_source=ig_web_button_share_sheet" className="hover:text-pink-500">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:text-blue-900">
                <FaGithub size={20} />
              </a>
              <a href="#">
                <DarkModeSwitch
                  checked={darkSide}
                  onChange={toggleDarkMode}
                  size={25}
                />
              </a>
              <select
                onChange={handleLanguageChange}
                className="bg-white dark:bg-[#333] dark:text-white dark:border-gray-700 border border-gray-300 rounded-md px-2 py-1 text-blue-gray-900 focus:outline-none"
              >
                <option value="en">English</option>
                <option value="ru">Русский</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="uz">Uzbek</option>
              </select>
            </div>
          </div>
        </MobileNav>
      </Navbar>
    </header>
  );
}

export default Header;
