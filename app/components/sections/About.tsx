"use client";
import React, { useState } from "react";
import Image from "next/image";
import imageSrc from "@/assets/images/profile_linkedin.jpeg";
import { tabs } from "@/assets/data/tabs";

interface AboutProps {
  id: string;
}

const About: React.FC<AboutProps> = ({ id }) => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section id={id} className="py-20">
      <h2 className="text-3xl text-center font-semibold mb-4">About Me</h2>
      <div className="container mx-auto flex flex-col md:flex-row items-center text-center">
        <div className="w-1/3">
          <Image
            src={imageSrc}
            alt="Atif Kamal"
            width={500}
            height={500}
            className="mx-auto rounded-full scale-110 md:scale-125 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64"
          />
        </div>
        <div className="w-2/3 p-4">
          <p className="text-base md:text-lg text-gray-600">
            Experienced full-stack developer with an 18-month track record
            delivering end-to-end product solutions. Proficient in API design,
            UI development, and agile deployment. Expertise spans diverse
            technologies and frameworks for superior user experiences. Eager to
            contribute to cutting-edge projects with a focus on excellence.
            {/* Experienced full-stack developer with a proven track record of
            delivering end-to-end product solutions over 18 months. Proficient
            in API designing, UI development, and seamless deployment processes.
            Demonstrated expertise in various technologies and frameworks,
            ensuring optimal performance and user experience. Collaborative and
            adaptable, thriving in fast-paced, agile environments. Passionate
            about creating impactful products that exceed customer expectations.
            Seeking new challenges to leverage my skills and contribute to
            cutting-edge projects with a focus on delivering excellence. */}
          </p>
          <div className="flex justify-center space-x-6 md:space-x-10 m-4">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`text-lg font-semibold ${
                  activeTab === i ? "text-slate-500 underline" : "text-black"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          {/* Content for Tabs */}
          <div className="p-4 justify-center">{tabs[activeTab].content}</div>
        </div>
      </div>
    </section>
  );
};

export default About;
