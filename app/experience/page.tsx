import React from "react";
import { experiences } from "@/assets/data/experience";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-12">
      <div className="container mx-auto px-2 md:px-4">
        <h2 className="text-3xl font-semibold mb-4">My Work Experiences</h2>
        <div className="grid gap-6 md:grid-flow-row">
          {experiences.map((e, i) => (
            <div key={i} className="max-w-lg p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{e.company}</h3>
              <p className="text-gray-600">{e.role}</p>
              <p className="text-gray-600">{e.duration}</p>
              <p className="mt-2">{e.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
