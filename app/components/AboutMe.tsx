"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub,FaRegEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


interface Skill {
  name: string;
}

export default function AboutMe() {
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
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-violet-200 via-pink-200 to-yellow-200 flex items-center justify-center p-4"
    >
      <div className="container mx-auto">
        <motion.div
          className="bg-white bg-opacity-80 backdrop-blur-lg rounded-3xl shadow-2xl px-8 pt-10 pb-20 max-w-6xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="profile-area text-center">
              <motion.div
                className="flex space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="avatar mx-auto">
                  <div className="w-40 rounded-3xl">
                    <img src="/profile-picture.jpg" />
                  </div>
                </div>
              </motion.div>
              <motion.h1
                className="text-4xl font-bold mb-2 text-violet-600 mt-5 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Tahmid Emam
              </motion.h1>
              <motion.h2
                className="text-2xl mb-4 text-pink-500 text-center text-balance"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Software Engineer ( full-stack )
              </motion.h2>
              <motion.p
                className="text-lg mb-6 text-gray-700 text-balance"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                I'm a self-taught full-stack developer and love to work on the
                front-end design.
              </motion.p>
              <motion.div
                className="flex space-x-4 sm:ml-[33%] md:ml-[20%] lg:ml-[30%]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.a
                  href="https://github.com/tahmid0111"
                  target="_blank"
                  className="text-violet-600 hover:text-violet-800 transition-colors"
                  aria-label="GitHub"
                  whileHover={{ scale: 1.1 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                >
                  <FaGithub className="text-4xl" />
                </motion.a>
                <motion.a
                  href="https://x.com/tahmid_emam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-600 hover:text-violet-800 transition-colors"
                  aria-label="Twitter"
                  whileHover={{ scale: 1.1 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                >
                  <FaXTwitter className="text-4xl" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/tahmid-emam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-600 hover:text-violet-800 transition-colors"
                  aria-label="LinkedIn"
                  whileHover={{ scale: 1.1 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                >
                  <FaLinkedin className="text-4xl" />
                </motion.a>
                <motion.a
                  href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=0.1tahmidemam@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-600 hover:text-violet-800 transition-colors"
                  aria-label="Gmail"
                  whileHover={{ scale: 1.1 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                >
                  <FaRegEnvelope  className="text-4xl" />
                </motion.a>
              </motion.div>
            </div>
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
                  {skills.map((skill, index) => (
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
                  {specializations.map((spec, index) => (
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
                  {tools.map((tool, index) => (
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
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
