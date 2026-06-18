'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FiCode, FiLayers, FiDatabase, FiServer, FiSmartphone, FiArrowRight, FiX, FiUsers, FiZap, FiStar } from 'react-icons/fi';

interface TeamMember {
  name: string;
  role: string;
}

interface Project {
  id: string;
  title: string;
  year: string;
  description: string;
  longDescription: string;
  imageSrc: string;
  imageAlt: string;
  featured: boolean;
  technologies: { name: string; icon: React.ReactNode }[];
  highlights: string[];
  teamMembers: TeamMember[];
  category: string;
}

// Project data structure
const projects: Project[] = [
  {
    id: 'dam-water-system',
    title: 'Dam Water Overflow System',
    year: '2022',
    description: 'An IoT project using Arduino Uno that monitors and manages water levels in dams to prevent overflow and potential flooding disasters.',
    longDescription: 'An IoT project during the GLS Cybershadez university competition using Arduino Uno to monitor and prevent dam water overflow, earning 2nd place. The system featured real-time water level monitoring, with live data accessible through a mobile app. It automatically triggered buzzer alerts and sent notifications to users based on critical water levels, ensuring timely warnings and proactive safety measures.',
    imageSrc: '/images/projects/dam-water-system.webp',
    imageAlt: 'Dam Water Overflow System with Arduino components',
    featured: true,
    technologies: [
      { name: 'Arduino Uno', icon: <FiLayers /> },
      { name: 'IoT Sensors', icon: <FiLayers /> },
      { name: 'Blynk', icon: <FiCode /> },
      { name: 'ESP8266', icon: <FiCode /> },
    ],
    highlights: [
      '2nd place in university competition',
      'Real-time monitoring system',
      'Emergency alert mechanism',
      'Mobile app integration',
    ],
    teamMembers: [
      { name: 'Nirmal', role: 'Team Member' },
      { name: 'Shivangi', role: 'Team Member' },
      { name: 'Punit', role: 'Team Member' },
    ],
    category: 'IoT',
  },
  {
    id: 'agl-showroom',
    title: 'AGL Showroom Website',
    year: '2024',
    description: 'A fully cart-based dynamic website for a showroom with automatic employee allocation built as a team project for my Bachelor\'s mini project.',
    longDescription: 'Developed a Django-based showroom e-commerce and visitor handling system as a bachelor\'s mini project. The system allowed customers to scan a QR code on entry, submit their preferences, and get dynamically assigned to employees. Features included real-time cart management, product tracking, employee notifications, admin dashboards, and automated invoice generation — all aimed at enhancing the in-store shopping experience.',
    imageSrc: '/images/projects/agl-showroom.webp',
    imageAlt: 'AGL Showroom Website Interface',
    featured: true,
    technologies: [
      { name: 'Django', icon: <FiCode /> },
      { name: 'SQLite', icon: <FiDatabase /> },
      { name: 'JavaScript', icon: <FiCode /> },
      { name: 'Bootstrap', icon: <FiLayers /> },
      { name: 'Django Allauth', icon: <FiCode /> },
    ],
    highlights: [
      'QR code entry system',
      'Real-time customer assignment',
      'Automated invoice generation',
      'Admin dashboard analytics',
    ],
    teamMembers: [
      { name: 'Nirmal', role: 'Backend + Frontend Developer' },
      { name: 'Shivangi', role: 'Backend + Frontend Developer' },
      { name: 'Punit', role: 'Frontend Developer' },
    ],
    category: 'Web Development',
  },
  {
    id: 'barkbuddy',
    title: 'BarkBuddy',
    year: '2024–2025',
    description: 'A comprehensive Flutter app for dog owners and dog lovers with multiple modules including dog boarding, borrowing dogs, events, and vaccination appointments.',
    longDescription: 'A Flutter-based Android app for dog owners, featuring dog boarding, borrowing, vaccination bookings, and event participation. Connects owners with reliable caretakers during travel, ensuring consistent pet care. Includes event funding and vaccination scheduling. Backend uses PHP APIs, MySQL, Google Maps, and Geoapify. Admin portal built with Django REST Framework, Django Channels, and Jazzmin for easy platform management. Ready release APK available.',
    imageSrc: '/images/projects/barkbuddy.webp',
    imageAlt: 'BarkBuddy App UI showcasing various screens',
    featured: true,
    technologies: [
      { name: 'Flutter', icon: <FiSmartphone /> },
      { name: 'PHP API', icon: <FiServer /> },
      { name: 'MySQL', icon: <FiDatabase /> },
      { name: 'Google Maps', icon: <FiLayers /> },
      { name: 'Django REST', icon: <FiCode /> },
    ],
    highlights: [
      'Cross-platform mobile app',
      'Geolocation services',
      'Integrated payment system',
      'Admin portal with analytics',
    ],
    teamMembers: [
      { name: 'Nirmal', role: 'Backend + Frontend Developer' },
      { name: 'Shivangi', role: 'Backend + Frontend Developer' },
      { name: 'Bansi', role: 'Backend + Frontend Developer' },
      { name: 'Rena', role: 'Communicator + Designer' },
    ],
    category: 'Mobile App',
  },
  {
    id: 'portfolio-website',
    title: 'Personal Portfolio Website',
    year: '2025',
    description: 'My portfolio — built with Next.js, React, Tailwind CSS, and Framer Motion. Fast, responsive, and designed to feel interactive with smooth animations and dark/light mode.',
    longDescription: 'My portfolio at shivangi.works — built with Next.js, React, Tailwind CSS, and Framer Motion. It\'s fast, responsive, and designed to feel interactive with smooth animations and dark/light mode. This site is where I share my journey in tech — from building apps like BarkBuddy, and working on real-world IoT and software projects. It includes direct links to my GitHub, LinkedIn and more. Everything here runs on a lightweight Server, built with performance and personality in mind.',
    imageSrc: '/images/projects/portfolio-website.webp',
    imageAlt: 'Personal portfolio website showcasing projects and skills',
    featured: true,
    technologies: [
      { name: 'Next.js', icon: <FiCode /> },
      { name: 'React', icon: <FiCode /> },
      { name: 'Tailwind CSS', icon: <FiCode /> },
      { name: 'Framer Motion', icon: <FiLayers /> },
      { name: 'TypeScript', icon: <FiCode /> },
    ],
    highlights: [
      'Built with Next.js and React for optimal performance',
      'Responsive UI with Tailwind CSS',
      'Framer Motion animations',
      'Dark/light mode support',
    ],
    teamMembers: [
      { name: 'Shivangi', role: 'Designer & Developer' },
    ],
    category: 'Web Development',
  },
  {
    id: 'sitegpt-clone',
    title: 'SiteGPT Clone',
    year: '2026',
    description: 'A robust starter project using Laravel 12 for rapid, modern API development with a clean structure, best practices, authentication, and a full suite of developer tools.',
    longDescription: 'A robust starter project using Laravel 12 for rapid, modern API development. Built with clean architecture and industry best practices, it includes authentication via Laravel Passport, role & permission management via Spatie, media management, auto-generated API documentation with L5-Swagger, request monitoring via Telescope, log management, queue monitoring via Horizon, and performance monitoring via Pulse. Features a universal developer panel with protected routes, pre-commit code quality checks, and a robust notification system with database, email, and custom channels.',
    imageSrc: '/images/projects/siteGPTCloneWebsite.webp',
    imageAlt: 'SiteGPT Clone — Laravel Boilerplate',
    featured: true,
    technologies: [
      { name: 'Laravel 12', icon: <FiCode /> },
      { name: 'PHP', icon: <FiCode /> },
      { name: 'MySQL', icon: <FiDatabase /> },
      { name: 'L5-Swagger', icon: <FiLayers /> },
      { name: 'Telescope', icon: <FiServer /> },
      { name: 'Laravel Horizon', icon: <FiServer /> },
    ],
    highlights: [
      'Authentication with Laravel Passport & Spatie Permissions',
      'Auto-generated Swagger API docs with custom processors',
      'Developer panel: Telescope, Log Viewer, Horizon, Pulse',
      'Notification system: database, email & custom channels',
      'Pre-commit hooks with Pint, PHPStan & Husky',
    ],
    teamMembers: [
      { name: 'Shivangi', role: 'Backend Developer' },
    ],
    category: 'Backend Development',
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  // State for the detailed project modal
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeProjectModal();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  // Filter projects
  const getFilteredProjects = () => {
    if (activeFilter === 'all') return projects;
    return projects.filter(p => p.category.toLowerCase().includes(activeFilter.toLowerCase()));
  };

  // Get unique categories
  const categories = ['all', ...new Set(projects.map(p => p.category.toLowerCase()))];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950 overflow-hidden">
      {/* Immersive Hero Section */}
      <section className="relative py-24 md:py-32 px-4 md:px-6 overflow-hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M20,0 L20,100 M40,0 L40,100 M60,0 L60,100 M80,0 L80,100 M0,20 L100,20 M0,40 L100,40 M0,60 L100,60 M0,80 L100,80"
                    stroke="currentColor" strokeWidth="0.5" fill="none" />
                  <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.3" />
                  <circle cx="60" cy="20" r="2" fill="currentColor" opacity="0.3" />
                  <circle cx="20" cy="60" r="2" fill="currentColor" opacity="0.3" />
                  <circle cx="60" cy="60" r="2" fill="currentColor" opacity="0.3" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#circuit)" />
            </svg>
          </div>
        </div>
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 dark:from-indigo-600/10 dark:to-purple-600/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 dark:from-blue-600/10 dark:to-cyan-600/10 rounded-full filter blur-3xl"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ opacity: headerOpacity }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-block rounded-full bg-indigo-100 dark:bg-indigo-900/40 px-4 py-1.5 mb-6">
              <span className="text-sm font-medium text-indigo-800 dark:text-indigo-300 flex items-center">
                <span className="inline-block h-2 w-2 rounded-full bg-indigo-500 mr-2"></span>
                Project Portfolio
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">
              My Tech Creations
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Exploring the intersection of innovation and problem-solving through carefully crafted solutions
            </p>
            <motion.div
              className="mt-12 flex flex-wrap gap-3 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === category
                    ? 'bg-indigo-600 text-white shadow-md dark:bg-indigo-700'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
                    }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 sm:py-12 md:py-16 px-3 sm:px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            initial="hidden"
            animate="visible"
          >
            {getFilteredProjects().map((project, index) => (
              <motion.div
                key={project.id}
                className="group cursor-pointer"
                variants={{
                  hidden: { y: 40, opacity: 0 },
                  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 70, damping: 15 } }
                }}
                onClick={() => openProjectModal(project)}
              >
                <div className="relative bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl overflow-hidden shadow-sm sm:shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:-translate-y-1 h-full flex flex-col">
                  {/* Project category badge */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
                    <span className="inline-block px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-indigo-700 dark:text-indigo-400 shadow-sm border border-indigo-100 dark:border-indigo-800/50">
                      {project.category}
                    </span>
                  </div>

                  {/* Project image */}
                  <div className="h-44 xs:h-52 sm:h-60 md:h-64 relative overflow-hidden flex-shrink-0">
                    <div className="relative w-full h-full">
                      <Image
                        src={project.imageSrc}
                        alt={project.imageAlt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        priority={index === 0}
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          if (target.parentElement) target.parentElement.classList.add('image-error');
                        }}
                      />
                      <div className="hidden image-error:flex absolute inset-0 bg-gray-100 dark:bg-gray-800 items-center justify-center">
                        <div className="text-center text-gray-500 dark:text-gray-400">
                          {project.category === 'Mobile App' ? (
                            <FiSmartphone className="w-10 h-10 sm:w-12 sm:h-12 mx-auto text-indigo-500/70" />
                          ) : (
                            <FiCode className="w-10 h-10 sm:w-12 sm:h-12 mx-auto text-indigo-500/70" />
                          )}
                          <p className="text-xs sm:text-sm font-medium mt-2">{project.title}</p>
                        </div>
                      </div>
                      {/* Hover overlay — hidden on touch devices by default */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end pb-4 sm:pb-6">
                        <span className="text-white text-sm font-medium px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/20 backdrop-blur-sm flex items-center gap-2 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                          <FiZap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          View Details
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Project content */}
                  <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-1">
                    <div className="mb-2">
                      <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white leading-tight">{project.title}</h2>
                      <span className="text-xs sm:text-sm text-indigo-600 dark:text-indigo-400">{project.year}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm line-clamp-2 mb-3 flex-1">{project.description}</p>
                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span key={i} className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-md text-[10px] sm:text-xs flex items-center gap-1">
                          {tech.icon}
                          {tech.name}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-md text-[10px] sm:text-xs">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    {/* Team avatars + View More */}
                    <div className="flex items-center justify-between gap-2 pt-2.5 sm:pt-3 border-t border-gray-100 dark:border-gray-800">
                      <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                        <FiUsers className="text-gray-400 w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                        <div className="flex -space-x-1.5">
                          {project.teamMembers.slice(0, 3).map((m, i) => (
                            <div key={i} title={m.name} className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 border-2 border-white dark:border-gray-900 flex items-center justify-center text-white text-[10px] sm:text-xs font-bold">
                              {m.name[0]}
                            </div>
                          ))}
                        </div>
                        <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 truncate">{project.teamMembers.length} member{project.teamMembers.length > 1 ? 's' : ''}</span>
                      </div>
                      <button
                        className="flex-shrink-0 flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/30 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 px-2.5 py-1.5 sm:px-3 rounded-lg transition-all whitespace-nowrap"
                        onClick={(e) => { e.stopPropagation(); openProjectModal(project); }}
                      >
                        View More
                        <FiArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-violet-700 dark:from-indigo-700 dark:to-violet-900">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundSize: '40px 40px', backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)' }}></div>
          </div>
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Build Something Amazing?</h2>
                <p className="text-indigo-100 mb-6 leading-relaxed">
                  I&apos;m passionate about creating innovative solutions and always looking for exciting new projects and collaborations.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="px-6 py-3 bg-white text-indigo-700 hover:bg-indigo-50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium flex items-center">
                    Let&apos;s Connect
                    <FiArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <motion.div className="relative h-72 p-1" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <div className="absolute inset-0 rounded-xl overflow-hidden bg-gray-900 border border-indigo-500/30 shadow-2xl">
                    <div className="bg-gray-800 p-2 flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <div className="ml-4 text-sm text-gray-400 font-mono">collaboration.tsx</div>
                    </div>
                    <div className="p-4 font-mono text-xs md:text-sm text-left">
                      <div className="text-blue-400">function <span className="text-green-400">startProject</span>&#40;<span className="text-yellow-400">idea</span>: string&#41; &#123;</div>
                      <div className="pl-4 text-gray-300">// Let&apos;s build something great together</div>
                      <div className="pl-4 text-purple-400">const <span className="text-indigo-300">collaboration</span> = <span className="text-green-400">new</span> Project&#40;&#41;;</div>
                      <div className="pl-4 text-purple-400">collaboration.<span className="text-blue-400">addTechnology</span>&#40;<span className="text-orange-400">&apos;React&apos;</span>&#41;;</div>
                      <div className="pl-4 text-purple-400">collaboration.<span className="text-blue-400">addTechnology</span>&#40;<span className="text-orange-400">&apos;Next.js&apos;</span>&#41;;</div>
                      <div className="pl-4 text-indigo-400">return</div>
                      <div className="pl-8 text-indigo-300">&#123; <span className="text-red-400">success:</span> <span className="text-green-400">true</span> &#125;;</div>
                      <div className="text-blue-400">&#125;</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-black/70 backdrop-blur-sm"
            onClick={closeProjectModal}
          >
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 60, scale: 0.97 }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="relative bg-white dark:bg-gray-900 rounded-t-2xl sm:rounded-2xl shadow-2xl w-full sm:max-w-2xl md:max-w-3xl max-h-[92vh] sm:max-h-[90vh] overflow-y-auto overscroll-contain"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Drag handle on mobile */}
              <div className="sm:hidden flex justify-center pt-2.5 pb-1">
                <div className="w-10 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></div>
              </div>

              {/* Modal Header Image */}
              <div className="relative h-44 xs:h-52 sm:h-56 md:h-64 w-full flex-shrink-0 overflow-hidden sm:rounded-t-2xl">
                <Image
                  src={selectedProject.imageSrc}
                  alt={selectedProject.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 768px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                {/* Category & Year badges */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex flex-wrap gap-1.5 sm:gap-2">
                  <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-indigo-600 text-white shadow">
                    {selectedProject.category}
                  </span>
                  <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-white/20 backdrop-blur-sm text-white">
                    {selectedProject.year}
                  </span>
                </div>
                {/* Close Button */}
                <button
                  onClick={closeProjectModal}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 bg-black/40 hover:bg-black/70 rounded-full text-white transition-colors touch-manipulation"
                  aria-label="Close"
                >
                  <FiX className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                {/* Title over image */}
                <div className="absolute bottom-3 left-3 right-12 sm:bottom-4 sm:left-4 sm:right-4">
                  <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-white leading-tight">{selectedProject.title}</h2>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-4 sm:p-5 md:p-6 space-y-5 sm:space-y-6">
                {/* About the Project */}
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2 mb-2">
                    <FiCode className="text-indigo-500 flex-shrink-0" />
                    About the Project
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-xs sm:text-sm">{selectedProject.longDescription}</p>
                </div>

                {/* Key Highlights */}
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2 mb-2.5 sm:mb-3">
                    <FiStar className="text-indigo-500 flex-shrink-0" />
                    Key Highlights
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                    {selectedProject.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/60 rounded-lg px-2.5 sm:px-3 py-2">
                        <span className="mt-1 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-indigo-500 flex-shrink-0"></span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Used */}
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2 mb-2.5 sm:mb-3">
                    <FiLayers className="text-indigo-500 flex-shrink-0" />
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {selectedProject.technologies.map((tech, i) => (
                      <span key={i} className="flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-lg text-[11px] sm:text-sm font-medium border border-indigo-100 dark:border-indigo-800/40">
                        {tech.icon}
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Team Members */}
                {selectedProject.teamMembers.length > 0 && (
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2 mb-2.5 sm:mb-3">
                      <FiUsers className="text-indigo-500 flex-shrink-0" />
                      Team Members
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                      {selectedProject.teamMembers.map((member, i) => (
                        <div key={i} className="flex items-center gap-2 sm:gap-3 bg-gray-50 dark:bg-gray-800/60 rounded-xl p-2.5 sm:p-3 border border-gray-100 dark:border-gray-700/50">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm sm:text-base flex-shrink-0">
                            {member.name[0]}
                          </div>
                          <div className="min-w-0">
                            <p className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white truncate">{member.name}</p>
                            <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 truncate leading-tight">{member.role}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Close button at bottom for mobile */}
                <div className="sm:hidden pt-1 pb-safe">
                  <button
                    onClick={closeProjectModal}
                    className="w-full py-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
