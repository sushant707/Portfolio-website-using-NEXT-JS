import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <motion.section
      className="flex items-center justify-center min-h-screen bg-gradient-to-tl from-teal-700 via-emerald-700 to-green-600"
      id="skills"
    >
      <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl">
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 mt-6 md:gap-x-16 lg:mt-8">
          {skills.map((skill) => (
            <Skill
              key={skill.name}
              name={skill.name}
              description={""}
              icon={skill.icon}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export const skills = [
  {
    name: "Javascript",
    icon: "https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png",
    category: "Mobile",
  },
  {
    name: "Bootstrap",
    icon: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
  },
  {
    name: "ReactJs",
    icon: "https://reactjs.org/logo-og.png",
    category: "Frontend",
  },
  {
    name: "NextJs",
    icon: "https://static-00.iconduck.com/assets.00/next-js-icon-512x512-zuauazrk.png",
    category: "ReactJS Framework",
  },
  {
    name: "Tailwind CSS",
    icon: "https://dmtgy0px4zdqn.cloudfront.net/images/integrations/tailwindcss.webp",
  },
  {
    name: "Github",
    icon: "https://seeklogo.com/images/G/github-logo-2E3852456C-seeklogo.com.png",
  },
  {
    name: "Vercel",
    icon: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
    category: "Full Stack",
  },
];

export const Skill = ({ name, description, icon }: any) => (
  <div className="flex items-center mb-6">
    <div className="flex flex-col items-center justify-center gap-2">
      <img
        src={icon}
        className="object-cover w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full hover:scale-110 transition-transform"
      />
      <h4 className="text-sm sm:text-base md:text-lg font-semibold">{name}</h4>
      <p className="text-center text-gray-600 text-xs sm:text-sm md:text-base">{description}</p>
    </div>
  </div>
);
