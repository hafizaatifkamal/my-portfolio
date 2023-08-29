import React from "react";
import Image from "next/image";
import { projects } from "@/assets/data/projects";

interface ProjectsProps {
  id: string;
}

const Projects: React.FC<ProjectsProps> = ({ id }) => {
  return (
    <section id={id} className="py-20">
      <div className="container mx-auto px-2 md:px-4">
        <h2 className="text-3xl font-semibold mb-4">Projects</h2>
        <div className="grid gap-6 lg:grid-cols-2 grid-flow-row">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-lg min-w-full bg-gradient-to-r from-gray-50 to-gray-200 hover:from-gray-200 hover:to-gray-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap md:space-x-2">
                {project.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex items-center space-x-1 p-2 rounded-full shadow-lg bg-gradient-to-r from-gray-50 to-gray-100"
                  >
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      width={24}
                      height={24}
                    />
                  </div>
                ))}
              </div>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex mt-4 text-sm gap-1 text-gray-900 hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
