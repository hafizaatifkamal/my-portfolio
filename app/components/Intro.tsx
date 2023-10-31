"use client";
import React from "react";
import Image from "next/image";
import ScrollLink from "./ScrollLink";
import imgSrc from "@/assets/images/profile-pic (3).png";

interface IntroProps {
  id: string;
}

const HomeIntro: React.FC<IntroProps> = ({ id }) => {
  return (
    <section id={id} className="py-20">
      <div className="container mx-auto text-center">
        <div className="mb-auto md:mt-16 flex flex-col lg:flex-row justify-center">
          <Image
            src={imgSrc}
            alt="atif-kamal"
            width={500}
            height={500}
            className="mx-auto w-40 h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 scale-125 lg:scale-150"
          />
          <div className="m-8 lg:m-0 px-2 md:px-4 group/item">
            <p className="font-bold">Hello, my name is</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              Atif Kamal
            </h1>
            <p className="m-4 text-base md:text-lg text-gray-600 max-w-prose mx-auto">
              <span className="font-bold text-base md:text-2xl">{`I'm a full-stack developer,`}</span>{" "}
              passionate about crafting efficient and elegant solutions to
              complex problems. Expertise in{" "}
              <span className="font-bold italic">end-to-end</span> product
              development. Proficient in{" "}
              <span className="font-bold italic">API design</span>,{" "}
              <span className="font-bold italic">UI development</span>, and{" "}
              <span className="font-bold italic">deployment</span>. Ready to
              take on new challenges!
            </p>
            <div className="space-x-4">
              <button className="p-2 rounded text-white group/edit md:invisible transition ease-in-out delay-150 bg-gray-500 group-hover:translate-x-2 hover:scale-110 hover:bg-gray-800 duration-300 group-hover/item:visible">
                <ScrollLink href="#contact" className="flex gap-1">
                  Hire me{" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-5 mt-0.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>
                </ScrollLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeIntro;
