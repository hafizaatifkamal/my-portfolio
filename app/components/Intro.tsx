"use client";
import React from "react";
import Image from "next/image";
import ScrollLink from "./ScrollLink";

interface IntroProps {
  id: string;
}

const HomeIntro: React.FC<IntroProps> = ({ id }) => {
  return (
    <section id={id} className="py-20">
      <div className="container mx-auto text-center">
        <div className="mb-auto md:mt-16 flex flex-col md:flex-row justify-center">
          <Image
            src="https://www.valuebound.com/sites/default/files/pictures/2023-04/IMG_20220718_170151_590.jpg"
            alt="atif-kamal"
            width={500}
            height={500}
            className="rounded-full mx-auto w-40 h-40 md:w-48 md:h-48 lg:w-64 lg:h-64"
          />
          <div className="m-8 px-2 md:px-4 group/item">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              {`I'm Atif Kamal`}
            </h2>
            <p className="m-4 text-lg text-gray-600 max-w-prose mx-auto">
              An experienced Software Development Engineer (SDE-I) passionate
              about crafting efficient and elegant solutions to complex
              problems. Expertise in end-to-end product development. Proficient
              in API design, UI development, and deployment. Ready to take on
              new challenges!
            </p>
            <div className="space-x-4">
              <button className="px-4 py-2 rounded text-white group/edit invisible transition ease-in-out delay-150 bg-gray-500 hover:-translate-y-1 hover:scale-110 hover:bg-gray-800 duration-300 group-hover/item:visible">
                <ScrollLink href="#contact">Hire Me!</ScrollLink>
              </button>
              <button className="px-4 py-2 rounded text-white group/edit invisible transition ease-in-out delay-150 bg-gray-500 hover:-translate-y-1 hover:scale-110 hover:bg-gray-800 duration-300 group-hover/item:visible">
                Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeIntro;
