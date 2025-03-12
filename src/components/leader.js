"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "S.M. Saiful Islam",
    position: "Managing Director",
    image: "/saiful.jpg",
  },
  {
    name: "Engineer Md. Sheikh Forid Polok",
    position: "Chief Executive Officer (CEO)",
    image: "/polok.jpg",
  },
  {
    name: "S.M. Bahauddin Bahar",
    position: "Chief Advisor",
    image: "/bahar.jpg",
  },
  {
    name: "S.M. Jamal Hossain",
    position: "Chief Advisor",
    image: "/jamal.jpg",
  },
];

export default function TeamSection() {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <>
      <div className="flex justify-center gap-4 p-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`relative w-full h-1/2 overflow-hidden ${
              index & 1
                ? "rounded-bl-[60px] rounded-tr-[60px]"
                : "rounded-tl-[60px] rounded-br-[60px]"
            } shdw`}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            {/* Profile Image */}
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />

            {/* Left and Right Expanding Divs */}
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: hoverIndex === index ? "50%" : "0%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute left-0 top-0 h-full bg-blue-500 bg-opacity-80"
            />
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: hoverIndex === index ? "50%" : "0%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute right-0 top-0 h-full bg-blue-500 bg-opacity-80"
            />

            {/* Fading Text (Appears After Expansion) */}
            {hoverIndex === index && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-white text-center"
              >
                <p className="text-lg font-bold">{member.name}</p>
                <p className="text">{member.position}</p>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
