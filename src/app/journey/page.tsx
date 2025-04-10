'use client';

import React, { useState, useEffect } from 'react';
import { FiCalendar, FiAward, FiCode, FiBookOpen, FiCpu, FiStar, FiTrendingUp, FiUser } from 'react-icons/fi';
import { RiMedalLine, RiMedalFill, RiTrophyLine } from 'react-icons/ri';
import { motion, useScroll, useTransform } from 'framer-motion';

// Timeline data structure
const timeline = [
  {
    id: 1,
    year: '2021',
    title: 'Started BSc IT at GLS University',
    description: 'Began my integrated Bachelor of Science in Information Technology program.',
    icon: <FiBookOpen className="w-5 h-5" />,
    category: 'education',
    highlight: 'Participated in Gujarat SSIP where I learned valuable teamwork skills.'
  },
  {
    id: 2,
    year: '2022',
    title: 'IoT Project Success',
    description: 'Created a Dam Water Overflow System using Arduino Uno at GLS Cybershadez.',
    icon: <FiCpu className="w-5 h-5" />,
    category: 'project',
    highlight: 'Won 2nd Prize in the competition with my team.'
  },
  {
    id: 3,
    year: '2023',
    title: 'IT Quiz Competition',
    description: 'Participated in the GLS Cybershadez IT Quiz competition.',
    icon: <FiAward className="w-5 h-5" />,
    category: 'achievement',
    highlight: 'Secured 3rd Prize in the competition.'
  },
  {
    id: 4,
    year: '2024',
    title: 'AGL Showroom Website',
    description: 'Developed a fully cart-based dynamic website with auto employee allocation as a team of 3.',
    icon: <FiCode className="w-5 h-5" />,
    category: 'project',
    highlight: 'Built using Django framework as a Bachelor\'s mini project.'
  },
  {
    id: 5,
    year: '2024',
    title: 'Graduated BSc IT with Honors',
    description: 'Completed my Bachelor\'s degree at GLS University with exceptional performance.',
    icon: <RiMedalFill className="w-5 h-5" />,
    category: 'milestone',
    highlight: 'Complete the bachelor as silver medalist and received award as the best female student out of 300 students.',
    special: true
  },
  {
    id: 6,
    year: '2024',
    title: 'Started MSc IT at GLS University',
    description: 'Began my Master\'s program in Information Technology.',
    icon: <FiBookOpen className="w-5 h-5" />,
    category: 'education',
    highlight: 'Continuing my academic journey to enhance my skills and knowledge.'
  },
  {
    id: 7,
    year: '2025',
    title: 'BarkBuddy App Development',
    description: 'Working on final year project - a comprehensive app for dog owners built with Flutter.',
    icon: <FiCode className="w-5 h-5" />,
    category: 'project',
    highlight: 'Integrated multiple APIs including Google Maps, Geoapify, and created a PHP backend to connect with MySQL.'
  },
  {
    id: 8,
    year: '2025',
    title: 'GLS Cybershadez Competition',
    description: 'Participated in the annual tech competition at GLS University.',
    icon: <FiAward className="w-5 h-5" />,
    category: 'achievement',
    highlight: 'Secured 2nd position in both Code Snap and IT Quiz competitions.'
  },
];

// Helper function to get appropriate color based on category
const getCategoryColor = (category: string) => {
  switch(category) {
    case 'education':
      return 'from-blue-500 to-indigo-600 dark:from-blue-500 dark:to-indigo-600';
    case 'project':
      return 'from-purple-500 to-pink-600 dark:from-purple-500 dark:to-pink-600';
    case 'achievement':
      return 'from-green-500 to-teal-600 dark:from-green-500 dark:to-teal-600';
    case 'milestone':
      return 'from-amber-400 to-orange-500 dark:from-amber-400 dark:to-orange-500';
    default:
      return 'from-indigo-500 to-purple-600 dark:from-indigo-500 dark:to-purple-600';
  }
};

// Awards section data
const awards = [
  {
    id: "silver-medal",
    title: "Silver Medal",
    description: "Awarded for achieving 2nd rank in Bachelor's program at GLS University",
    icon: <RiMedalLine className="w-8 h-8" />,
    year: "2024"
  },
  {
    id: "best-female",
    title: "Best Female Student",
    description: "Recognized as the outstanding female student among 300 students",
    icon: <FiStar className="w-8 h-8" />,
    year: "2024"
  },
  {
    id: "cybershadez-iot",
    title: "GLS Cybershadez",
    description: "Second prize for IoT project - Dam Water Overflow System",
    icon: <FiTrendingUp className="w-8 h-8" />,
    year: "2022"
  }
];

export default function Journey() {
  const [activeTimelineItem, setActiveTimelineItem] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const backgroundOpacity = useTransform(scrollY, [0, 300], [0.7, 0]);
  
  // Intersection Observer to highlight timeline items
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = parseInt(entry.target.getAttribute('data-id') || '0');
          setActiveTimelineItem(id);
        }
      });
    }, options);
    
    const elements = document.querySelectorAll('.timeline-item');
    elements.forEach(el => observer.observe(el));
    
    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Hero Section with Digital Circuit Theme */}
      <section className="relative py-20 px-4 md:px-6 overflow-hidden">
        {/* Fixed circuit pattern background (no random values) */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg className="w-full h-full opacity-[0.03] dark:opacity-[0.05]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
            <rect fill="none" stroke="currentColor" strokeWidth="3" width="800" height="800"></rect>
            {/* Fixed grid lines */}
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <React.Fragment key={i}>
                <line fill="none" stroke="currentColor" strokeWidth="3" x1={i * 80} y1="0" x2={i * 80} y2="800"></line>
                <line fill="none" stroke="currentColor" strokeWidth="3" x1="0" y1={i * 80} x2="800" y2={i * 80}></line>
              </React.Fragment>
            ))}
            {/* Fixed circuit nodes instead of random circles */}
            <circle fill="currentColor" cx="120" cy="160" r="4"></circle>
            <circle fill="currentColor" cx="280" cy="240" r="3"></circle>
            <circle fill="currentColor" cx="480" cy="120" r="5"></circle>
            <circle fill="currentColor" cx="580" cy="320" r="4"></circle>
            <circle fill="currentColor" cx="220" cy="400" r="3"></circle>
            <circle fill="currentColor" cx="640" cy="520" r="4"></circle>
            <circle fill="currentColor" cx="400" cy="640" r="3"></circle>
            <circle fill="currentColor" cx="120" cy="720" r="4"></circle>
            <circle fill="currentColor" cx="720" cy="160" r="3"></circle>
            <circle fill="currentColor" cx="320" cy="80" r="4"></circle>
            {/* Fixed circuit paths instead of random paths */}
            <path fill="none" stroke="currentColor" strokeWidth="3" d="M120 160 L280 240"></path>
            <path fill="none" stroke="currentColor" strokeWidth="3" d="M280 240 L480 120"></path>
            <path fill="none" stroke="currentColor" strokeWidth="3" d="M480 120 L580 320"></path>
            <path fill="none" stroke="currentColor" strokeWidth="3" d="M580 320 L640 520"></path>
            <path fill="none" stroke="currentColor" strokeWidth="3" d="M640 520 L400 640"></path>
            <path fill="none" stroke="currentColor" strokeWidth="3" d="M400 640 L120 720"></path>
            <path fill="none" stroke="currentColor" strokeWidth="3" d="M320 80 L480 120"></path>
            <path fill="none" stroke="currentColor" strokeWidth="3" d="M220 400 L580 320"></path>
          </svg>
        </div>
        
        {/* Enhanced 3D Tech Journey Title */}
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            {/* Binary code floating in background */}
            <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none select-none">
              <div className="absolute -left-20 top-10 text-2xl font-mono">01001010</div>
              <div className="absolute right-10 top-5 text-3xl font-mono">10110</div>
              <div className="absolute left-5 bottom-10 text-xl font-mono">01001</div>
              <div className="absolute right-20 bottom-20 text-2xl font-mono">10101</div>
            </div>
            
            {/* 3D Tech Journey Title */}
            <div className="relative mb-6">
              <h1 className="text-5xl md:text-7xl font-bold relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">My Journey</span>
                {/* 3D layered text effect */}
                <span className="absolute -left-1 -bottom-1 text-indigo-200 dark:text-indigo-900 z-[-1] select-none opacity-70 blur-[1px]">My Journey</span>
                <span className="absolute -left-2 -bottom-2 text-indigo-100 dark:text-indigo-950 z-[-2] select-none opacity-50 blur-[2px]">My Journey</span>
              </h1>
              <motion.div 
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 w-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </div>
            
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
              The path of continuous growth and achievement in technology
            </p>
            
            {/* Achievement badges with tech-inspired design */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-2 px-4 py-2 bg-white bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80 backdrop-blur-sm rounded-full shadow-md border border-indigo-100 dark:border-indigo-900/30"
              >
                <div className="p-1.5 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full">
                  <RiMedalFill className="text-white w-4 h-4" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">Silver Medalist</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-2 px-4 py-2 bg-white bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80 backdrop-blur-sm rounded-full shadow-md border border-indigo-100 dark:border-indigo-900/30"
              >
                <div className="p-1.5 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full">
                  <FiTrendingUp className="text-white w-4 h-4" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">2nd Rank, BSc IT</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-2 px-4 py-2 bg-white bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80 backdrop-blur-sm rounded-full shadow-md border border-indigo-100 dark:border-indigo-900/30"
              >
                <div className="p-1.5 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full">
                  <FiUser className="text-white w-4 h-4" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">Best Female Student</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NEW: Interactive Tech Journey Timeline */}
      <section className="py-24 px-4 md:px-6 bg-white dark:bg-gray-900 relative overflow-hidden">
        {/* Technical background pattern */}
        <div className="absolute inset-0 z-0">
          <div className="absolute left-0 top-0 w-full h-full opacity-[0.02] dark:opacity-[0.03]">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M0 50 H30 M70 50 H100 M50 0 V30 M50 70 V100" stroke="currentColor" strokeWidth="1" fill="none"/>
                  <circle cx="50" cy="50" r="3" fill="currentColor"/>
                  <circle cx="30" cy="50" r="1.5" fill="currentColor"/>
                  <circle cx="70" cy="50" r="1.5" fill="currentColor"/>
                  <circle cx="50" cy="30" r="1.5" fill="currentColor"/>
                  <circle cx="50" cy="70" r="1.5" fill="currentColor"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#circuit-pattern)"/>
            </svg>
          </div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3">
              <span className="w-8 h-1 bg-indigo-500 rounded-full"></span>
              <span className="text-gray-900 dark:text-white">My Technical Journey</span>
              <span className="w-8 h-1 bg-indigo-500 rounded-full"></span>
            </div>
          </motion.h2>
          
          {/* Interactive Timeline */}
          <div className="relative mt-24">
            {/* Central timeline track with glowing effect */}
            <motion.div 
              className="absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <div className="h-full w-full bg-gradient-to-b from-indigo-400 via-purple-500 to-pink-500 dark:from-indigo-500 dark:via-purple-600 dark:to-pink-600 rounded-full">
                {/* Glowing effect */}
                <div className="absolute inset-0 blur-sm bg-gradient-to-b from-indigo-400 via-purple-500 to-pink-500 dark:from-indigo-500 dark:via-purple-600 dark:to-pink-600 opacity-75"></div>
              </div>
            </motion.div>
            
            {/* Timeline entries */}
            {timeline.map((item, index) => (
              <motion.div
                key={item.id}
                className={`timeline-item relative mb-28 flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 50
                }}
                data-id={item.id}
              >
                {/* Year badge on timeline */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20">
                  <motion.div 
                    className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${
                        item.special 
                          ? 'rgb(251, 191, 36), rgb(245, 158, 11)' 
                          : 'rgb(99, 102, 241), rgb(139, 92, 246)'
                      })`,
                    }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="text-white font-mono font-bold">{item.year}</div>
                  </motion.div>
                </div>
                
                {/* Content column - alternating sides */}
                <div className={`w-full md:w-1/2 flex ${index % 2 === 0 ? 'justify-end pr-12' : 'justify-start pl-12'} mt-10`}>
                  <motion.div 
                    className={`relative w-full max-w-md ${
                      item.special 
                        ? 'bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/20 border-2 border-amber-200 dark:border-amber-700/30' 
                        : 'bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700'
                    } rounded-2xl shadow-lg p-6 transition-all duration-300`}
                    whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                  >
                    {/* Tech corners decoration */}
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-indigo-300 dark:border-indigo-700 rounded-tr-lg opacity-60"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-indigo-300 dark:border-indigo-700 rounded-bl-lg opacity-60"></div>
                    
                    {/* Category badge */}
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide mb-3 ${
                      getCategoryBadgeStyle(item.category)
                    }`}>
                      {item.icon}
                      <span className="ml-1.5">{item.category}</span>
                    </div>
                    
                    {/* Title with hover effect */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group">
                      {item.title}
                      <span className="block h-1 w-0 group-hover:w-full bg-indigo-500 dark:bg-indigo-400 transition-all duration-300"></span>
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {item.description}
                    </p>
                    
                    {/* Highlight box */}
                    {item.special ? (
                      <div className="mt-4 bg-amber-100/60 dark:bg-amber-900/20 border-l-4 border-amber-500 pl-4 py-3 rounded-r-md">
                        <div className="flex items-start">
                          <RiMedalFill className="text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
                          <p className="text-amber-800 dark:text-amber-300 font-medium text-sm">
                            {item.highlight}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="mt-4 flex items-start">
                        <FiStar className="text-indigo-500 dark:text-indigo-400 mt-0.5 mr-2 flex-shrink-0" />
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {item.highlight}
                        </p>
                      </div>
                    )}
                    
                    {/* Connection line to timeline */}
                    <div className={`absolute top-1/2 hidden md:block ${
                      index % 2 === 0 
                        ? 'right-0 w-12 translate-x-full' 
                        : 'left-0 w-12 -translate-x-full'
                    } h-px bg-gradient-to-${index % 2 === 0 ? 'r' : 'l'} from-transparent to-indigo-400 dark:to-indigo-500`}></div>
                  </motion.div>
                </div>
                
                {/* Empty column for layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
            
            {/* End node */}
            <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2">
              <motion.div 
                className="w-6 h-6 bg-indigo-600 dark:bg-indigo-500 rounded-full shadow-lg flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </motion.div>
            </div>
          </div>
          
          {/* Visual legend */}
          <div className="mt-32 flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              <span className="text-gray-600 dark:text-gray-400">Education</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              <span className="text-gray-600 dark:text-gray-400">Project</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <span className="text-gray-600 dark:text-gray-400">Achievement</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500"></div>
              <span className="text-gray-600 dark:text-gray-400">Milestone</span>
            </div>
          </div>
        </div>
      </section>

      

      {/* Future Goals Section with Tech-Inspired Design */}
      <section className="py-16 px-4 md:px-6 bg-gradient-to-br from-slate-50 via-gray-50 to-indigo-50 dark:from-slate-950 dark:via-gray-900 dark:to-indigo-950 relative overflow-hidden">
        {/* Enhanced tech pattern background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Animated gradient orb */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-indigo-300/20 to-purple-300/10 dark:from-indigo-600/10 dark:to-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-blue-300/10 to-cyan-300/5 dark:from-blue-600/5 dark:to-cyan-500/5 rounded-full blur-3xl"></div>
          
          {/* Digital circuit grid */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="future-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                  <circle cx="0" cy="0" r="1" fill="currentColor" opacity="0.3" />
                  <circle cx="40" cy="0" r="1" fill="currentColor" opacity="0.3" />
                  <circle cx="0" cy="40" r="1" fill="currentColor" opacity="0.3" />
                  <circle cx="40" cy="40" r="1" fill="currentColor" opacity="0.3" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#future-grid)" />
            </svg>
          </div>
          
          {/* Floating digital elements */}
          <div className="absolute top-1/4 left-1/4 w-1 h-16 bg-gradient-to-b from-indigo-400/20 to-transparent dark:from-indigo-400/10 rounded-full"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-24 bg-gradient-to-b from-blue-400/20 to-transparent dark:from-blue-400/10 rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/5 w-1 h-20 bg-gradient-to-b from-purple-400/20 to-transparent dark:from-purple-400/10 rounded-full"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Looking Forward
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              The next chapters in my technological journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            <motion.div 
              className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Decorative top line */}
              <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 to-indigo-600"></div>
              <div className="p-8">
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                  <FiCode className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Launch BarkBuddy App</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Release the completed Flutter application to help dog owners and dog lovers connect.
                </p>
                
                {/* Tech line decoration */}
                <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs font-medium text-gray-600 dark:text-gray-400">Flutter</span>
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs font-medium text-gray-600 dark:text-gray-400">API Integration</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              {/* Decorative top line */}
              <div className="h-1.5 w-full bg-gradient-to-r from-purple-500 to-pink-600"></div>
              <div className="p-8">
                <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-6">
                  <FiBookOpen className="w-7 h-7 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Complete MSc with Excellence</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Graduate with top rankings and contribute meaningful research to the field of Information Technology.
                </p>
                
                {/* Tech line decoration */}
                <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs font-medium text-gray-600 dark:text-gray-400">Research</span>
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs font-medium text-gray-600 dark:text-gray-400">Academic Excellence</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              {/* Decorative top line */}
              <div className="h-1.5 w-full bg-gradient-to-r from-green-500 to-teal-600"></div>
              <div className="p-8">
                <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-6">
                  <FiTrendingUp className="w-7 h-7 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Professional Growth</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Enter the industry as a skilled developer working on challenging projects that make a difference.
                </p>
                
                {/* Tech line decoration */}
                <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs font-medium text-gray-600 dark:text-gray-400">Development</span>
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs font-medium text-gray-600 dark:text-gray-400">Innovation</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Inspiration Quote with Animated Code Background */}
      <section className="py-20 px-4 md:px-6 relative bg-indigo-600 dark:bg-indigo-800 overflow-hidden">
        {/* Animated code background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-indigo-600 dark:to-indigo-800 z-10"></div>
          <pre className="absolute inset-0 opacity-10 font-mono text-xs overflow-hidden whitespace-pre text-white" style={{ fontFamily: 'monospace' }}>
            {`
function journey() {
  const passion = "Technology";
  const achievements = [];
  const growth = continuous();
  
  while (learning) {
    skills.improve();
    achievements.push(new Milestone());
    experience.push(new Challenge());
  }
  
  return success;
}

journey();
            `}
          </pre>
        </div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <blockquote className="text-2xl md:text-3xl text-white font-light text-center italic mb-6">
            "Every achievement starts with the decision to try and the determination to keep pushing forward."
          </blockquote>
          <p className="text-lg text-center text-indigo-200">
            My journey continues as I explore new technologies and expand my skill set in the world of IT.
          </p>
        </div>
      </section>
    </div>
  );
}

// Helper function for category badge styling
function getCategoryBadgeStyle(category: string): string {
  switch(category) {
    case 'education':
      return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300';
    case 'project':
      return 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300';
    case 'achievement':
      return 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300';
    case 'milestone':
      return 'bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
  }
}
