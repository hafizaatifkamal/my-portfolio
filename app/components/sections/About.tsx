import React from "react";
import Image from "next/image";
import imageSrc from "../../../assets/images/profile-pic (2).png";

interface AboutProps {
  id: string;
}

const About: React.FC<AboutProps> = ({ id }) => {
  return (
    <section id={id} className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <div className="p-4 justify-center">
          <Image
            src={imageSrc}
            alt="Atif Kamal"
            width={500}
            height={500}
            className="rounded-full mx-auto w-40 h-40 md:w-48 md:h-48 lg:w-64 lg:h-64"
          />
          <div className="p-4 mx-auto lg:mx-40">
            <p className="text-lg text-gray-600">
              Experienced full-stack developer with a proven track record of
              delivering end-to-end product solutions over 18 months. Proficient
              in API designing, UI development, and seamless deployment
              processes. Demonstrated expertise in various technologies and
              frameworks, ensuring optimal performance and user experience.
              Collaborative and adaptable, thriving in fast-paced, agile
              environments. Passionate about creating impactful products that
              exceed customer expectations. Seeking new challenges to leverage
              my skills and contribute to cutting-edge projects with a focus on
              delivering excellence.
            </p>
            <button className="px-4 py-2 mt-2 rounded text-white transition ease-in-out delay-150 bg-gray-500 hover:-translate-y-1 hover:scale-110 hover:bg-gray-800 duration-300">
              <a href="/Resume.pdf" download="Resume" className="flex gap-1">
                Resume
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </span>
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
