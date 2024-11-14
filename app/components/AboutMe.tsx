"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, GitlabIcon as GitHub, Linkedin } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface AboutMeProps {
  name: string;
  title: string;
  description: string;
  skills: Skill[];
  email: string;
  github: string;
  linkedin: string;
}

const defaultProps: AboutMeProps = {
  name: "Alex Johnson",
  title: "Full Stack Developer",
  description:
    "Passionate about creating innovative web solutions. I thrive on learning cutting-edge technologies and tackling complex challenges in the ever-evolving world of web development.",
  skills: [
    { name: "React", level: 90, color: "bg-cyan-400" },
    { name: "TypeScript", level: 85, color: "bg-yellow-400" },
    { name: "Next.js", level: 80, color: "bg-fuchsia-400" },
    { name: "Node.js", level: 75, color: "bg-lime-400" },
    { name: "GraphQL", level: 70, color: "bg-orange-400" },
  ],
  email: "alex@example.com",
  github: "https://github.com/alexjohnson",
  linkedin: "https://linkedin.com/in/alexjohnson",
};

export default function VibrantAboutMe({
  name = defaultProps.name,
  title = defaultProps.title,
  description = defaultProps.description,
  skills = defaultProps.skills,
  email = defaultProps.email,
  github = defaultProps.github,
  linkedin = defaultProps.linkedin,
}: AboutMeProps) {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-violet-200 via-pink-200 to-yellow-200 flex items-center justify-center p-4"
    >
      <div className="container mx-auto">
        <motion.div
          className="bg-white bg-opacity-80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 max-w-4xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <motion.h1
                className="text-4xl font-bold mb-2 text-violet-600"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {name}
              </motion.h1>
              <motion.h2
                className="text-2xl mb-4 text-pink-500"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {title}
              </motion.h2>
              <motion.p
                className="text-lg mb-6 text-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {description}
              </motion.p>
              <motion.div
                className="flex space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <a
                  href={`mailto:${email}`}
                  className="text-violet-600 hover:text-violet-800 transition-colors"
                  aria-label="Email"
                >
                  <Mail size={24} />
                </a>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-600 hover:text-violet-800 transition-colors"
                  aria-label="GitHub"
                >
                  <GitHub size={24} />
                </a>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-600 hover:text-violet-800 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
              </motion.div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-violet-600">
                Skills
              </h3>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="mb-4 relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">
                      {skill.name}
                    </span>
                    <span className="text-sm font-medium text-gray-500">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                    <motion.div
                      className={`h-2.5 rounded-full ${skill.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                    />
                  </div>
                  {hoveredSkill === skill.name && (
                    <motion.div
                      className="absolute -top-8 left-0 bg-white text-violet-600 text-xs py-1 px-2 rounded shadow"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                    >
                      {`${skill.name} proficiency: ${skill.level}%`}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center px-4 py-2 bg-violet-600 text-white rounded-full hover:bg-violet-700 transition-colors"
            >
              Get in touch <ArrowRight className="ml-2" size={16} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
