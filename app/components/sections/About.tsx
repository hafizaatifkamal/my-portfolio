import React from "react";
import Image from "next/image";
import imageSrc from "../../../assets/images/image_01.jpg";

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
            // src="https://www.valuebound.com/sites/default/files/pictures/2023-04/IMG_20220718_170151_590.jpg"
            alt="Atif Kamal"
            width={500}
            height={500}
            className="rounded-full mx-auto w-40 h-40 md:w-48 md:h-48 lg:w-64 lg:h-64"
          />
          <div className="p-4 mx-auto">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
