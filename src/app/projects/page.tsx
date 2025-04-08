'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode, FiLayers, FiDatabase, FiServer, FiSmartphone } from 'react-icons/fi';

// Project data structure
const projects = [
  {
    id: 'barkbuddy',
    title: 'BarkBuddy',
    year: '2025',
    description: 'A comprehensive Flutter app for dog owners and dog lovers with multiple modules including dog boarding, borrowing dogs, creating and joining events, and appointment booking for vaccinations.',
    imageSrc: '/images/projects/barkbuddy.jpg',
    imageAlt: 'BarkBuddy App UI showcasing various screens',
    liveLink: '#',
    githubLink: '#',
    featured: true,
    technologies: [
      { name: 'Flutter', icon: <FiSmartphone /> },
      { name: 'PHP Backend API', icon: <FiServer /> },
      { name: 'MySQL', icon: <FiDatabase /> },
      { name: 'Google Maps API', icon: <FiLayers /> },
      { name: 'Geoapify API', icon: <FiLayers /> }
    ],
    highlights: [
      'Implemented dog boarding module to connect dog owners with care centers',
      'Created a system for dog lovers to borrow dogs for companionship',
      'Built an events platform for dog-related activities',
      'Integrated appointment booking for dog vaccinations',
      'Developed a PHP backend API to connect with MySQL database',
      'Integrated Google Maps and Geoapify for location services',
      'Release APK ready for public launch'
    ],
    category: 'Mobile App'
  },
  {
    id: 'agl-showroom',
    title: 'AGL Showroom Website',
    year: '2024',
    description: 'A fully cart-based dynamic website for a showroom with automatic employee allocation built as a team project for my Bachelor\'s mini project.',
    imageSrc: '/images/projects/agl-showroom.jpg',
    imageAlt: 'AGL Showroom Website Interface',
    liveLink: '#',
    githubLink: '#',
    featured: true,
    technologies: [
      { name: 'Django', icon: <FiCode /> },
      { name: 'Python', icon: <FiCode /> },
      { name: 'HTML/CSS', icon: <FiCode /> },
      { name: 'JavaScript', icon: <FiCode /> },
      { name: 'Database', icon: <FiDatabase /> }
    ],
    highlights: [
      'Implemented complete e-commerce functionality with cart system',
      'Developed automatic employee allocation algorithm',
      'Built responsive frontend for multiple device compatibility',
      'Created user authentication and authorization systems',
      'Implemented inventory management features',
      'Collaborative project completed as a team of 3'
    ],
    category: 'Web Development'
  },
  {
    id: 'dam-water-system',
    title: 'Dam Water Overflow System',
    year: '2022',
    description: 'An IoT project using Arduino Uno that monitors and manages water levels in dams to prevent overflow and potential flooding disasters.',
    imageSrc: '/images/projects/dam-water-system.jpg',
    imageAlt: 'Dam Water Overflow System with Arduino components',
    liveLink: '#',
    githubLink: '#',
    featured: true,
    technologies: [
      { name: 'Arduino Uno', icon: <FiLayers /> },
      { name: 'IoT', icon: <FiLayers /> },
      { name: 'C++', icon: <FiCode /> },
      { name: 'Hardware Sensors', icon: <FiLayers /> }
    ],
    highlights: [
      'Designed a system to monitor water levels in dams',
      'Implemented automatic alerts for potential overflow situations',
      'Created emergency response protocols based on water level data',
      'Built a physical prototype with Arduino Uno and sensors',
      'Won 2nd prize at GLS Cybershadez competition'
    ],
    category: 'IoT'
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12
    }
  }
};

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Projects</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
              Showcasing my work spanning mobile development, web applications, and IoT solutions
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="space-y-24"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
                variants={itemVariants}
              >
                {/* Project Image */}
                <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 relative group">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    {/* Replace with actual image when available */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 dark:from-indigo-500/10 dark:to-purple-500/10"></div>
                    <div className="text-center text-gray-500 dark:text-gray-400">
                      <FiLayers className="w-16 h-16 mx-auto mb-2" />
                      <p>{project.category} Project</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/80 to-purple-600/80 dark:from-indigo-800/80 dark:to-purple-800/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <a href={project.liveLink} className="p-3 bg-white rounded-full text-indigo-600 hover:bg-gray-100 transition-colors" aria-label="View live project">
                        <FiExternalLink className="w-6 h-6" />
                      </a>
                      <a href={project.githubLink} className="p-3 bg-white rounded-full text-indigo-600 hover:bg-gray-100 transition-colors" aria-label="View source code">
                        <FiGithub className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="w-full md:w-1/2">
                  <div className="flex items-center gap-2 mb-2">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{project.title}</h2>
                    <span className="px-2 py-1 text-xs bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 rounded-md">{project.year}</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Technologies Used:</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm flex items-center gap-1"
                        >
                          {tech.icon}
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      {project.highlights.slice(0, 4).map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Used Section */}
      <section className="py-16 px-4 md:px-6 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Skills Demonstrated
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Technologies and methodologies showcased through these projects
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Flutter", "PHP", "MySQL", "Django", 
              "Python", "Google Maps API", "Geoapify API", 
              "Arduino", "IoT", "C++", "UX/UI Design", 
              "System Architecture", "Database Design", "RESTful APIs"
            ].map((skill, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
              >
                <span className="text-gray-800 dark:text-gray-200 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 md:px-6 bg-indigo-600 dark:bg-indigo-800 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Collaborating?</h2>
          <p className="max-w-2xl mx-auto mb-8 opacity-90">
            I'm always open to discussing new projects, creative ideas, or opportunities to work together on innovative applications.
          </p>
          <Link 
            href="/contact"
            className="px-8 py-3 bg-white text-indigo-700 rounded-md hover:bg-gray-100 transition-colors inline-flex items-center gap-2 font-medium"
          >
            Get in Touch <FiExternalLink className="ml-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
