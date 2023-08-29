import Image from "next/image";
import { skills } from "./skills";

export const tabs = [
  {
    label: "Skills",
    content: (
      <div className="flex flex-wrap gap-6 justify-center">
        <div>
          <h3 className="text-lg font-semibold">Primary Skills</h3>
          <ul className="p-4">
            {skills.primarySkills.map((skill, ps) => (
              <li className="flex flex-wrap p-2 space-x-1" key={ps}>
                <Image
                  src={skill.logo}
                  alt={skill.name}
                  width={24}
                  height={24}
                />
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Technical Skills</h3>
          <ul className="p-4">
            {skills.technicalSkills.map((skill, ts) => (
              <li className="flex flex-wrap p-2 space-x-1" key={ts}>
                <Image
                  src={skill.logo}
                  alt={skill.name}
                  width={24}
                  height={24}
                />
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Functional Skills</h3>
          <ul className="p-4">
            {skills.functionalSkills.map((skill, fs) => (
              <li className="flex flex-wrap p-2 space-x-1" key={fs}>
                <Image
                  src={skill.logo}
                  alt={skill.name}
                  width={24}
                  height={24}
                />
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    label: "Education",
    content: (
      <div>
        <h3 className="font-semibold">
          Bachelor of Technology in Information Technology
        </h3>
        <p className="text-base text-gray-600">
          Bengal Instiute of Technology (TIG), Kolkata
        </p>
        <p className="text-base">WBUT, 2021</p>
      </div>
    ),
  },
  // {
  //   label: "Certifications",
  //   content: (
  //     <div>
  //       <h3>Certification Name</h3>
  //       <p>Issuing Organization, Year</p>
  //     </div>
  //   ),
  // },
];
