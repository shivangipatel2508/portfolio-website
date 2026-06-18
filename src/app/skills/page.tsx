'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SiC, SiCplusplus, SiPython, SiDjango, SiLaravel, 
  SiSqlite, SiPostgresql, SiArduino, SiGit, SiDocker, 
  SiJira, SiJoomla, SiWordpress, SiJupyter, SiPytorch, SiOpenai 
} from 'react-icons/si';
import { DiPhp, DiMysql, DiDatabase } from 'react-icons/di';
import { FiChevronRight, FiSearch, FiX } from 'react-icons/fi';

interface Skill {
  name: string;
  icon: React.ReactNode;
  description: string;
}

const skillsData: Skill[] = [
  { name: "C", icon: <SiC className="w-6 h-6" />, description: "Core programming and logic building." },
  { name: "C++", icon: <SiCplusplus className="w-6 h-6" />, description: "Object-oriented programming and competitive coding." },
  { name: "Python", icon: <SiPython className="w-6 h-6" />, description: "Data analysis, ML, and backend development." },
  { name: "Django", icon: <SiDjango className="w-6 h-6" />, description: "Web framework for rapid backend development." },
  { name: "PHP", icon: <DiPhp className="w-6 h-6" />, description: "Server-side scripting and web APIs." },
  { name: "Laravel", icon: <SiLaravel className="w-6 h-6" />, description: "PHP framework for elegant web applications." },
  { name: "MySQL", icon: <DiMysql className="w-6 h-6" />, description: "Relational database management system." },
  { name: "SQLite", icon: <SiSqlite className="w-6 h-6" />, description: "Lightweight, embedded relational database." },
  { name: "PostgreSQL", icon: <SiPostgresql className="w-6 h-6" />, description: "Advanced open-source relational database." },
  { name: "IoT", icon: <SiArduino className="w-6 h-6" />, description: "Internet of Things hardware integration." },
  { name: "Software Engineering", icon: <SiGit className="w-6 h-6" />, description: "SDLC, requirements, and testing practices." },
  { name: "Data Structures", icon: <SiDocker className="w-6 h-6" />, description: "Algorithmic problem solving and data organization." },
  { name: "System Design", icon: <SiJira className="w-6 h-6" />, description: "Scalable architecture and system modeling." },
  { name: "Joomla", icon: <SiJoomla className="w-6 h-6" />, description: "Content management system for building websites." },
  { name: "WordPress", icon: <SiWordpress className="w-6 h-6" />, description: "Website building and content management platform." },
  { name: "ML/Jupyter", icon: <SiJupyter className="w-6 h-6" />, description: "Data analysis and visualization notebooks." },
  { name: "Machine Learning", icon: <SiPytorch className="w-6 h-6" />, description: "Predictive models and classification." },
  { name: "Prompt Engineering", icon: <SiOpenai className="w-6 h-6" />, description: "LLM fine-tuning and AI content generation." },
  { name: "Database Design", icon: <DiDatabase className="w-6 h-6" />, description: "Efficient and scalable database schemas." },
];

export default function SkillsPage() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  return (
    <div className="bg-white dark:bg-gray-950">
      {/* Immersive Hero Section with Tech Elements */}
      <section className="relative py-24 md:py-32 px-4 md:px-6 overflow-hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        {/* Digital circuit pattern background */}
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
        
        {/* Animated gradient blobs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 dark:from-indigo-600/10 dark:to-purple-600/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 dark:from-blue-600/10 dark:to-cyan-600/10 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-block rounded-full bg-indigo-100 dark:bg-indigo-900/40 px-4 py-1.5 mb-6">
              <span className="text-sm font-medium text-indigo-800 dark:text-indigo-300 flex items-center">
                <span className="inline-block h-2 w-2 rounded-full bg-indigo-500 mr-2"></span>
                My Toolkit
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">
              Technical Skills
            </h1>
            
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              A comprehensive list of the technologies, languages, and tools I use to build amazing products.
            </p>
          </motion.div>
        </div>
      </section>
      

      
      {/* Skills Display */}
      <div className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="container mx-auto px-4">
          

          
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-6"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            initial="hidden"
            animate="visible"
          >
            {skillsData.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { 
                    y: 0, 
                    opacity: 1,
                    transition: { type: 'spring', stiffness: 100 }
                  }
                }}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group relative flex flex-col items-center justify-center p-8 text-center"
                onClick={() => setSelectedSkill(skill)}
              >
                {/* Decorative background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -bottom-1 -right-1 w-12 h-12 bg-gradient-to-tl from-indigo-100 to-transparent dark:from-indigo-900/30 dark:to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="w-16 h-16 flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-2xl group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30 transition-colors duration-300 mb-5 shadow-inner">
                  <div className="text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                </div>
                
                <h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors relative z-10">
                  {skill.name}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Skill Detail Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <div 
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedSkill(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-sm w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 flex flex-col items-center border-b border-indigo-100 dark:border-indigo-900/30 relative">
                <button 
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 bg-white/50 dark:bg-black/20 rounded-full p-1 transition-colors"
                  onClick={() => setSelectedSkill(null)}
                >
                  <FiX className="w-5 h-5" />
                </button>
                <div className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-sm text-indigo-600 dark:text-indigo-400 mb-4">
                  {React.cloneElement(selectedSkill.icon as React.ReactElement<{ className?: string }>, { className: 'w-10 h-10' })}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center">{selectedSkill.name}</h3>
              </div>
              
              <div className="p-6 text-center">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {selectedSkill.description}
                </p>
                <button 
                  className="mt-6 w-full py-2.5 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-colors"
                  onClick={() => setSelectedSkill(null)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
