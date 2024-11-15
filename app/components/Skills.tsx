import React from 'react'
import { motion } from "framer-motion";

interface Skill {
    name: string
  }
const Skills = () => {
  const skills: Skill[] = [
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "React.js"},
    { name: "Next.js" },
    { name: "Node.js" },
    { name: "Express.js" },
    { name: "MongoDB" },
  ];

  const specializations = ["Performance Optimization", "Animation"];

  const tools = [
    "Accessibility",
    "Framer Motion",
    "Jest",
    "Vitest",
    "React Testing Library",
  ];
  return (
    <div className="skills-area">
    <motion.div
      className="mb-6"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6 }}
    >
      <h2 className="text-2xl mb-4 text-black">
        🎯Goal: Top 1% in JavaScript and React
      </h2>
    </motion.div>
    <motion.div
      className="mb-6"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6 }}
    >
      <h3 className="text-2xl font-semibold mb-4 text-violet-600">
        Skills
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="bg-green-200 rounded-full px-3 py-1 text-base font-medium text-black border flex items-center space-x-1"
            whileHover={{ scale: 1.05 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
          >
            <span className="text-base">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>

    <motion.div
      className="mb-6"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.7 }}
    >
      <h3 className="text-2xl font-semibold mb-4 text-violet-600">
        Specializations
      </h3>
      <div className="flex flex-wrap gap-2">
        {specializations.map((spec) => (
          <motion.div
            key={spec}
            className="bg-pink-200 rounded-full px-3 py-1 text-base font-medium text-black"
            whileHover={{ scale: 1.05 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
          >
            {spec}
          </motion.div>
        ))}
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8 }}
    >
      <h3 className="text-2xl font-semibold mb-4 text-violet-600">
        Tools
      </h3>
      <div className="flex flex-wrap gap-2">
        {tools.map((tool) => (
          <motion.div
            key={tool}
            className="bg-yellow-200 rounded-full px-3 py-1 text-base font-medium text-black"
            whileHover={{ scale: 1.05 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
          >
            {tool}
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
  )
}

export default Skills
