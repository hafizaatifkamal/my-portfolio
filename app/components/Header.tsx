"use client";
import React, { useState } from "react";
import ScrollLink from "./ScrollLink";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="shadow-lg bg-gradient-to-r from-gray-400 to-gray-900 text-white py-4 top-0 sticky">
      <div className="container mx-auto px-2 md:px-24 flex justify-between items-center">
        <ScrollLink href="#intro" className="hover:text-gray-300">
          <h1 className="text-2xl font-semibold">Atif Kamal</h1>
        </ScrollLink>
        <nav className={`md:flex hidden ${isMenuOpen ? `hidden` : `block`}`}>
          <ul className="flex space-x-6">
            <li>
              <ScrollLink href="#about" className="hover:text-gray-300">
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink href="#projects" className="hover:text-gray-300">
                Projects
              </ScrollLink>
            </li>
            <li>
              <ScrollLink href="#experience" className="hover:text-gray-300">
                Experience
              </ScrollLink>
            </li>
            <li>
              <ScrollLink href="#contact" className="hover:text-gray-300">
                Contact
              </ScrollLink>
            </li>
          </ul>
        </nav>
        {/* <div>
          <Link href="/">LinkedIn</Link>
          <Link href="/">Twitter</Link>
          <Link href="/">Instagran</Link>
        </div> */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="mt-4 mx-4 md:hidden">
          <ul className="flex flex-col space-y-4">
            <li>
              <ScrollLink
                href="#about"
                className="hover:text-gray-300"
                onClick={toggleMenu}
              >
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                href="#projects"
                className="hover:text-gray-300"
                onClick={toggleMenu}
              >
                Projects
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                href="#experience"
                className="hover:text-gray-300"
                onClick={toggleMenu}
              >
                Experience
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                href="#contact"
                className="hover:text-gray-300"
                onClick={toggleMenu}
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
