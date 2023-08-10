import React from "react";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <section id="about" className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <div className="p-4 justify-center">
          <Image
            src="https://www.valuebound.com/sites/default/files/pictures/2023-04/IMG_20220718_170151_590.jpg"
            alt="Atif Kamal"
            width={500}
            height={500}
            className="rounded-full mx-auto w-40 h-40 md:w-48 md:h-48 lg:w-64 lg:h-64"
          />
          <div className="p-4 mx-auto">
            <p className="text-lg text-gray-600">
              I'm a passionate Software Development Engineer with a strong
              foundation in algorithms, data structures, and front-end
              development. My journey in software engineering began during my
              college days, and I've been honing my skills ever since. I enjoy
              tackling complex challenges and creating solutions that deliver
              meaningful impact. I'm a passionate Software Development Engineer
              with a strong foundation in algorithms, data structures, and
              front-end development. My journey in software engineering began
              during my college days, and I've been honing my skills ever since.
              I enjoy tackling complex challenges and creating solutions that
              deliver meaningful impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
