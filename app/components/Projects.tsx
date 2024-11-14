'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaPlay, FaGlobe, FaCode, FaServer, FaTimes } from 'react-icons/fa'
import Image from 'next/image'

interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string
  videoPreview?: string
  liveUrl?: string
  frontendUrl?: string
  backendUrl?: string
  color: 'blue' | 'green' | 'yellow' | 'red' | 'purple' | 'pink'
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Weather App',
    description: 'A full-stack e-commerce solution with real-time inventory management.',
    image: '/placeholder.svg?height=300&width=400',
    technologies: 'Next.js, TypeScript',
    videoPreview: 'https://example.com/ecommerce-preview.mp4',
    liveUrl: 'https://ecommerce.example.com',
    frontendUrl: 'https://github.com/yourusername/task-manager-frontend',
    color: 'blue',
  },
  {
    id: '2',
    title: 'Gaming House',
    description: 'A responsive weather application with location-based forecasts.',
    image: '/placeholder.svg?height=300&width=400',
    technologies: 'Next.js, TypeScript, Framer-motion',
    videoPreview: 'https://example.com/ecommerce-preview.mp4',
    liveUrl: 'https://weather.example.com',
    frontendUrl: 'https://github.com/yourusername/weather-app',
    color: 'green',
  },
  {
    id: '3',
    title: 'Mediuum',
    description: 'A collaborative task management tool with real-time updates.',
    image: '/placeholder.svg?height=300&width=400',
    technologies: 'React.js, Node.js, Express.js, MongoDB',
    videoPreview: 'https://example.com/task-manager-preview.mp4',
    liveUrl: 'https://tasks.example.com',
    frontendUrl: 'https://github.com/yourusername/task-manager-frontend',
    backendUrl: 'https://github.com/yourusername/task-manager-backend',
    color: 'yellow',
  },
  {
    id: '4',
    title: 'Image Gallery',
    description: 'A showcase of my projects and skills, built with Next.js and TypeScript.',
    image: '/placeholder.svg?height=300&width=400',
    technologies: 'React.js, Lazy-loading',
    videoPreview: 'https://example.com/task-manager-preview.mp4',
    liveUrl: 'https://portfolio.example.com',
    frontendUrl: 'https://github.com/yourusername/portfolio',
    color: 'red',
  },
//   {
//     id: '5',
//     title: 'Social Media Dashboard',
//     description: 'An analytics dashboard for social media performance tracking.',
//     image: '/placeholder.svg?height=300&width=400',
//     technologies: 'React, D3.js, Express, PostgreSQL',
//     liveUrl: 'https://social-dashboard.example.com',
//     frontendUrl: 'https://github.com/yourusername/social-dashboard',
//     backendUrl: 'https://github.com/yourusername/social-dashboard-api',
//     color: 'purple',
//   },
//   {
//     id: '6',
//     title: 'Fitness Tracker',
//     description: 'A mobile-first app for tracking workouts and nutrition.',
//     image: '/placeholder.svg?height=300&width=400',
//     technologies: 'React Native, GraphQL, Apollo Client',
//     videoPreview: 'https://example.com/fitness-tracker-preview.mp4',
//     liveUrl: 'https://fit-track.example.com',
//     frontendUrl: 'https://github.com/yourusername/fitness-tracker',
//     color: 'pink',
//   },
]

const colorClasses = {
  blue: 'bg-blue-500',
  green: 'bg-green-500',
  yellow: 'bg-yellow-500',
  red: 'bg-red-500',
  purple: 'bg-purple-500',
  pink: 'bg-pink-500',
}

const backgroundColors = {
  blue: 'bg-blue-100',
  green: 'bg-green-100',
  yellow: 'bg-yellow-100',
  red: 'bg-red-100',
  purple: 'bg-purple-100',
  pink: 'bg-pink-100',
}

const buttonVariants = {
  initial: { scale: 1, y: 0 },
  hover: { scale: 1.05, y: -5 },
  tap: { scale: 0.95, y: 0 },
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  return (
    <section className="py-16 bg-gradient-to-br from-gray-100 to-gray-200">
      <motion.div
      ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, staggerChildren: 0.2 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-5xl font-bold text-center mb-12 text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          My Colorful Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`rounded-lg overflow-hidden shadow-lg ${backgroundColors[project.color]} flex flex-col`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <motion.div
                className={`h-2 ${colorClasses[project.color]}`}
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.5 }}
              />
              <div className="relative overflow-hidden group">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-300 transform group-hover:scale-110"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex items-end justify-center p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.h3
                    className="text-white text-2xl font-bold text-center"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {project.title}
                  </motion.h3>
                </motion.div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-center items-center text-center">
                <div className="flex items-center space-x-2 text-base text-gray-600 mb-4">
                  <span>{project.technologies}</span>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {project.videoPreview && (
                    <motion.button
                      className={`px-4 py-2 rounded-full ${colorClasses[project.color]} text-white transition duration-300 flex items-center space-x-2`}
                      aria-label={`Watch video preview for ${project.title}`}
                      variants={buttonVariants}
                      initial="initial"
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <FaPlay />
                      <span>Watch Demo</span>
                    </motion.button>
                  )}
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-4 py-2 rounded-full ${colorClasses[project.color]} text-white transition duration-300 flex items-center space-x-2`}
                      aria-label={`Visit live project: ${project.title}`}
                      variants={buttonVariants}
                      initial="initial"
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <FaGlobe />
                      <span>Live Site</span>
                    </motion.a>
                  )}
                  {project.frontendUrl && (
                    <motion.a
                      href={project.frontendUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-4 py-2 rounded-full ${colorClasses[project.color]} text-white transition duration-300 flex items-center space-x-2`}
                      aria-label={`View frontend code for ${project.title}`}
                      variants={buttonVariants}
                      initial="initial"
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <FaCode />
                      <span>Frontend Code</span>
                    </motion.a>
                  )}
                  {project.backendUrl && (
                    <motion.a
                      href={project.backendUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-4 py-2 rounded-full ${colorClasses[project.color]} text-white transition duration-300 flex items-center space-x-2`}
                      aria-label={`View backend code for ${project.title}`}
                      variants={buttonVariants}
                      initial="initial"
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <FaServer />
                      <span>Backend Code</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}