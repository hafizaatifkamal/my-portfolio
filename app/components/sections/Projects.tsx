import React from "react";
import { projects } from "@/assets/data/projects";

interface ProjectsProps {
  id: string;
}

const Projects: React.FC<ProjectsProps> = ({ id }) => {
  return (
    <section id={id} className="py-20">
      <div className="container mx-auto px-2 md:px-4">
        <h2 className="text-3xl font-semibold mb-4">Projects</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-md bg-gray-200 hover:bg-gradient-to-r from-gray-50 to-gray-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex space-x-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-gradient-to-r from-gray-50 to-gray-200 rounded-md text-gray-800 text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-gray-900 hover:underline"
              >
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
