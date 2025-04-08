'use client';

import { FiCalendar, FiAward, FiCode, FiBookOpen, FiCpu } from 'react-icons/fi';
import { motion } from 'framer-motion';

// Timeline data structure
const timeline = [
  {
    id: 1,
    year: '2021',
    title: 'Started BSc IT at GLS University',
    description: 'Began my integrated Bachelor of Science in Information Technology program.',
    icon: <FiBookOpen />,
    category: 'education',
    highlight: 'Participated in Gujarat SSIP where I learned valuable teamwork skills.'
  },
  {
    id: 2,
    year: '2022',
    title: 'IoT Project Success',
    description: 'Created a Dam Water Overflow System using Arduino Uno at GLS Cybershadez.',
    icon: <FiCpu />,
    category: 'project',
    highlight: 'Won 2nd Prize in the competition with my team.'
  },
  {
    id: 3,
    year: '2023',
    title: 'IT Quiz Competition',
    description: 'Participated in the GLS Cybershadez IT Quiz competition.',
    icon: <FiAward />,
    category: 'achievement',
    highlight: 'Secured 3rd Prize in the competition.'
  },
  {
    id: 4,
    year: '2024',
    title: 'AGL Showroom Website',
    description: 'Developed a fully cart-based dynamic website with auto employee allocation as a team of 3.',
    icon: <FiCode />,
    category: 'project',
    highlight: 'Built using Django framework as a Bachelor\'s mini project.'
  },
  {
    id: 5,
    year: '2024',
    title: 'Graduated BSc IT with Honors',
    description: 'Completed my Bachelor\'s degree at GLS University.',
    icon: <FiAward />,
    category: 'achievement',
    highlight: 'Achieved 2nd Rank and received a Silver Medal as the best female student out of 300 students.'
  },
  {
    id: 6,
    year: '2024',
    title: 'Started MSc IT at GLS University',
    description: 'Began my Master\'s program in Information Technology.',
    icon: <FiBookOpen />,
    category: 'education',
    highlight: 'Continuing my academic journey to enhance my skills and knowledge.'
  },
  {
    id: 7,
    year: '2025',
    title: 'BarkBuddy App Development',
    description: 'Working on final year project - a comprehensive app for dog owners built with Flutter.',
    icon: <FiCode />,
    category: 'project',
    highlight: 'Integrated multiple APIs including Google Maps, Geoapify, and created a PHP backend to connect with MySQL.'
  },
  {
    id: 8,
    year: '2025',
    title: 'GLS Cybershadez Competition',
    description: 'Participated in the annual tech competition at GLS University.',
    icon: <FiAward />,
    category: 'achievement',
    highlight: 'Secured 2nd position in both Code Snap and IT Quiz competitions.'
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.2
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

// Helper function to get appropriate color based on category
const getCategoryColor = (category: string) => {
  switch(category) {
    case 'education':
      return 'from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700';
    case 'project':
      return 'from-purple-500 to-pink-600 dark:from-purple-600 dark:to-pink-700';
    case 'achievement':
      return 'from-green-500 to-teal-600 dark:from-green-600 dark:to-teal-700';
    default:
      return 'from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700';
  }
};

export default function Journey() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Journey</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
              Exploring my academic path, achievements, and professional development
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            className="relative"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Center line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-300 to-purple-500 dark:from-indigo-600 dark:to-purple-800 rounded-full"></div>
            
            {timeline.map((item, index) => (
              <motion.div 
                key={item.id}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} relative`}
                variants={itemVariants}
              >
                {/* Year bubble */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">{item.year}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className={`bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700 transform hover:-translate-y-1 hover:bg-gradient-to-br hover:bg-opacity-5 hover:${getCategoryColor(item.category)}`}>
                    <div className="flex items-center gap-3 mb-3 justify-end">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                      <div className={`p-2 rounded-full bg-gradient-to-r ${getCategoryColor(item.category)} text-white`}>
                        {item.icon}
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">{item.description}</p>
                    <p className="text-sm bg-gradient-to-r bg-clip-text text-transparent font-medium from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">{item.highlight}</p>
                  </div>
                </div>
                
                {/* Empty space for the other side */}
                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 px-4 md:px-6 bg-gradient-to-br from-indigo-600 to-purple-700 dark:from-indigo-800 dark:to-purple-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <blockquote className="text-2xl md:text-3xl font-light italic mb-8">
            "Every achievement starts with the decision to try and the determination to keep pushing forward."
          </blockquote>
          <p className="text-lg opacity-80">
            My journey continues as I explore new technologies and expand my skill set in the world of IT.
          </p>
        </div>
      </section>

      {/* Future Plans Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Looking Forward
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              My goals and aspirations for the future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/40 rounded-lg flex items-center justify-center mb-4">
                <FiCode className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-medium mb-2 text-gray-900 dark:text-white">Launch BarkBuddy App</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Release the completed Flutter application to help dog owners and dog lovers connect.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/40 rounded-lg flex items-center justify-center mb-4">
                <FiBookOpen className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-medium mb-2 text-gray-900 dark:text-white">Complete MSc with Excellence</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Graduate with top rankings and contribute meaningful research to the field of Information Technology.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-lg flex items-center justify-center mb-4">
                <FiCalendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-medium mb-2 text-gray-900 dark:text-white">Professional Growth</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Enter the industry as a skilled developer working on challenging projects that make a difference.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
