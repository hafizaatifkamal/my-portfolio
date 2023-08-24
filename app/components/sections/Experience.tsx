import React from "react";
import { experiences } from "@/assets/data/experience";
import Link from "next/link";
import Image from "next/image";

interface ExperienceProps {
  id: string;
}

const Experience: React.FC<ExperienceProps> = ({ id }) => {
  return (
    <section id={id} className="py-20">
      <div className="container mx-auto px-2 md:px-4">
        <h2 className="text-3xl font-semibold mb-4">Experience</h2>
        <div className="grid gap-6 md:grid-flow-row">
          {experiences.map((e, i) => (
            <div
              key={i}
              className="max-w-lg p-6 rounded-lg shadow-md hover:bg-gray-200"
            >
              <Link
                href={e.src}
                target="_blank"
                className="text-xl sm:flex font-semibold items-center"
              >
                <Image
                  width={500}
                  height={500}
                  className="w-8 h-8 mr-2 sm:mb-0 rounded"
                  src={e.imgSrc}
                  alt={e.company.toLowerCase()}
                />
                {e.company}
              </Link>
              <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-4">
                {e.details.map((d, j) => (
                  <li key={j} className="mt-4 ml-4">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full -left-3">
                      <svg
                        className="w-2.5 h-2.5 text-gray-800"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                      </svg>
                    </span>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      {d.duration}
                    </time>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {d.role}
                    </h3>
                    <p className="mb-4 text-base font-normal text-gray-500">
                      {d.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
