'use client';

import { 
  FiCode, FiDatabase, FiGlobe, FiSmartphone, FiServer, 
  FiTool, FiCpu, FiShield, FiBarChart, FiAward 
} from 'react-icons/fi';
import { motion } from 'framer-motion';

// Define the skills with categories for organization
const skillCategories = [
  {
    id: 'languages',
    title: 'Programming Languages',
    icon: <FiCode className="w-6 h-6" />,
    skills: [
      { name: 'C', level: 90 },
      { name: 'C++', level: 85 },
      { name: 'Java', level: 75 },
      { name: 'Python', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'R-programming', level: 65 },
    ]
  },
  {
    id: 'web',
    title: 'Web Development',
    icon: <FiGlobe className="w-6 h-6" />,
    skills: [
      { name: 'HTML5/CSS3', level: 95 },
      { name: 'Next.js', level: 85 },
      { name: 'React', level: 85 },
      { name: 'Node.js', level: 75 },
      { name: 'PHP', level: 70 },
      { name: 'Django', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Joomla (CMS)', level: 65 },
      { name: 'Framer Motion', level: 70 },
    ]
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    icon: <FiSmartphone className="w-6 h-6" />,
    skills: [
      { name: 'Flutter', level: 85 },
      { name: 'Android', level: 70 },
      { name: 'iOS', level: 65 },
    ]
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: <FiDatabase className="w-6 h-6" />,
    skills: [
      { name: 'MySQL', level: 85 },
      { name: 'PL/SQL', level: 80 },
      { name: 'Data Structures', level: 90 },
    ]
  },
  {
    id: 'tools',
    title: 'Tools & Technologies',
    icon: <FiTool className="w-6 h-6" />,
    skills: [
      { name: 'npm', level: 85 },
      { name: 'Maven', level: 70 },
      { name: 'Linux Shell', level: 75 },
      { name: 'Git/GitHub', level: 80 },
      { name: 'VS Code', level: 95 },
    ]
  },
  {
    id: 'hardware',
    title: 'Hardware & IoT',
    icon: <FiCpu className="w-6 h-6" />,
    skills: [
      { name: 'Arduino Uno', level: 80 },
      { name: 'ESP WiFi Module', level: 75 },
      { name: 'Microprocessor & Assembly', level: 60 },
      { name: 'IoT', level: 75 },
    ]
  },
  {
    id: 'devops',
    title: 'Cloud & DevOps',
    icon: <FiServer className="w-6 h-6" />,
    skills: [
      { name: 'Cloud Computing', level: 70 },
      { name: 'Agile Development', level: 80 },
      { name: 'System Analysis & Design', level: 85 },
    ]
  },
  {
    id: 'security',
    title: 'Security & Networking',
    icon: <FiShield className="w-6 h-6" />,
    skills: [
      { name: 'Cryptography', level: 75 },
      { name: 'Network Security', level: 70 },
      { name: 'Advanced Networking', level: 65 },
    ]
  },
  {
    id: 'ai',
    title: 'AI & Machine Learning',
    icon: <FiBarChart className="w-6 h-6" />,
    skills: [
      { name: 'Machine Learning', level: 70 },
      { name: 'Artificial Intelligence', level: 65 },
      { name: 'Jupyter Notebook', level: 80 },
    ]
  },
];

// Animation variants for Framer Motion
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Skills() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Skills & Expertise</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
              A comprehensive overview of my technical abilities and competencies
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {skillCategories.map((category) => (
              <motion.div 
                key={category.id}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-700"
                variants={item}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 rounded-lg">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h2>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div 
                          className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 h-2.5 rounded-full" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Other Technical Proficiencies */}
      <section className="py-16 px-4 md:px-6 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Certifications & Achievements
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Recognition of my technical expertise and continuous learning
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center"
              variants={item}
            >
              <div className="p-4 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-full mb-4">
                <FiAward className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">2nd Rank in Bachelor's Degree</h3>
              <p className="text-gray-600 dark:text-gray-400">Silver Medal as Best Female Student (2024)</p>
            </motion.div>

            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center"
              variants={item}
            >
              <div className="p-4 bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 rounded-full mb-4">
                <FiAward className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">2nd Position in Code Snap</h3>
              <p className="text-gray-600 dark:text-gray-400">GLS Cybershadez-2025 Competition</p>
            </motion.div>

            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center"
              variants={item}
            >
              <div className="p-4 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 rounded-full mb-4">
                <FiAward className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">2nd Prize for IoT Project</h3>
              <p className="text-gray-600 dark:text-gray-400">Dam Water Overflow System (2022)</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 md:px-6 bg-indigo-600 dark:bg-indigo-800 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Build Something Amazing Together</h2>
          <p className="max-w-2xl mx-auto mb-8 opacity-90">
            With my diverse skill set and experience, I can help bring your ideas to life.
          </p>
          <a 
            href="/contact"
            className="px-8 py-3 bg-white text-indigo-700 rounded-md hover:bg-gray-100 transition-colors inline-flex items-center gap-2 font-medium"
          >
            Contact Me
          </a>
        </div>
      </section>
    </div>
  );
}
