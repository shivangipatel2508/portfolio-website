'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView, useAnimation } from 'framer-motion';
import { 
  FiArrowRight, FiCode, FiShield, FiServer, FiGithub, 
  FiLinkedin, FiExternalLink, FiClock, FiMap, FiDatabase, FiSmartphone
} from 'react-icons/fi';
import { FaMedal, FaCode } from "react-icons/fa";
import { BiChip } from "react-icons/bi";
import { MdLightbulbOutline } from "react-icons/md";

export default function Home() {
  // Calculate age from birthdate - correctly using the date from the text file
  const calculateAge = () => {
    const birthDate = new Date('2004-08-25'); // From the personal data
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const age = calculateAge();
  
  // Refs for scroll animations
  const heroRef = useRef(null);
  
  // Animation controls
  const heroControls = useAnimation();
  
  // Check if elements are in view
  const heroInView = useInView(heroRef, { once: false, amount: 0.3 });
  
  // Parallax effect for hero section
  const { scrollY } = useScroll();
  const heroImageY = useTransform(scrollY, [0, 500], [0, 100]);
  const heroTextY = useTransform(scrollY, [0, 500], [0, 50]);
  
  // State for interactive elements in the digital brain visualization
  const [activeNode, setActiveNode] = useState<number | null>(null);
  
  // Digital Brain node data
  const brainNodes = [
    { id: 1, x: '20%', y: '30%', size: 36, label: 'Web Dev', icon: <FiCode className="w-4 h-4" />, color: 'from-blue-500 to-indigo-500' },
    { id: 2, x: '35%', y: '15%', size: 42, label: 'Mobile', icon: <FiSmartphone className="w-4 h-4" />, color: 'from-purple-500 to-pink-500' },
    { id: 3, x: '60%', y: '20%', size: 38, label: 'Data', icon: <FiDatabase className="w-4 h-4" />, color: 'from-green-500 to-teal-500' },
    { id: 4, x: '75%', y: '35%', size: 44, label: 'Security', icon: <FiShield className="w-4 h-4" />, color: 'from-red-500 to-orange-500' },
    { id: 5, x: '70%', y: '65%', size: 40, label: 'Backend', icon: <FiServer className="w-4 h-4" />, color: 'from-amber-500 to-yellow-600' },
    { id: 6, x: '40%', y: '75%', size: 46, label: 'IoT', icon: <BiChip className="w-4 h-4" />, color: 'from-cyan-500 to-blue-600' },
    { id: 7, x: '25%', y: '60%', size: 38, label: 'AI/ML', icon: <FiCode className="w-4 h-4" />, color: 'from-violet-500 to-purple-600' },
  ];

  // Use client-side effect for particle animations to avoid hydration mismatch
  const [isClient, setIsClient] = useState(false);
  
  // Run after hydration is complete
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Define fixed particle positions to avoid randomness during SSR
  const fixedParticlePositions = [
    { x: "20%", y: "30%" },
    { x: "45%", y: "15%" },
    { x: "70%", y: "25%" },
    { x: "85%", y: "40%" },
    { x: "65%", y: "70%" },
    { x: "30%", y: "80%" },
    { x: "15%", y: "60%" },
    { x: "50%", y: "50%" },
    { x: "75%", y: "65%" },
    { x: "40%", y: "35%" },
    { x: "10%", y: "45%" },
    { x: "90%", y: "20%" },
    { x: "60%", y: "85%" },
    { x: "25%", y: "10%" },
    { x: "80%", y: "55%" }
  ];

  return (
    <main className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen py-16 md:py-28 px-4 flex items-center">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/80 via-fuchsia-50/50 to-white dark:from-gray-900 dark:via-indigo-950/30 dark:to-gray-900 z-0"></div>
        
        {/* Background geometric elements */}
        <div className="absolute inset-0 opacity-10 dark:opacity-20 z-0">
          <div className="absolute -top-[40%] -left-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-700 dark:to-purple-700 blur-3xl"></div>
          <div className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-800 dark:to-pink-800 blur-3xl"></div>
          <div className="absolute bottom-[10%] left-[30%] w-[40%] h-[40%] rounded-full bg-gradient-to-r from-cyan-200 to-blue-200 dark:from-cyan-800 dark:to-blue-800 blur-3xl opacity-30"></div>
        </div>
        
        <motion.div 
          className="container mx-auto max-w-6xl relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
            {/* Text content */}
            <motion.div 
              className="space-y-6 md:col-span-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <motion.div 
                className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/10 to-fuchsia-500/10 dark:from-indigo-500/20 dark:to-fuchsia-500/20 text-sm font-medium text-indigo-700 dark:text-indigo-300 backdrop-blur-sm border border-indigo-100 dark:border-indigo-800/30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-fuchsia-600 dark:from-indigo-400 dark:to-fuchsia-400">MSc IT Student & Developer</span>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-gray-900 dark:text-white">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-600 dark:from-indigo-400 dark:via-purple-400 dark:to-fuchsia-400">Shivangi Patel</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl leading-relaxed">
                I'm a <span className="font-semibold">{age}-year-old</span> IT professional from Ahmedabad, India, passionate about creating digital experiences that matter.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Link 
                  href="/projects"
                  className="group relative px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2 shadow-md shadow-indigo-500/20 dark:shadow-indigo-900/30 overflow-hidden"
                >
                  <span className="relative z-10">View My Work</span>
                  <FiArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </Link>
                <Link 
                  href="/contact" 
                  className="px-6 py-3 bg-white/70 backdrop-blur-sm text-indigo-700 border border-indigo-200 rounded-lg hover:bg-white transition-all duration-300 dark:bg-gray-900/70 dark:text-indigo-400 dark:border-gray-700 dark:hover:bg-gray-800/90"
                >
                  Contact Me
                </Link>
              </div>
              
              <div className="flex gap-4 pt-6">
                <a 
                  href="https://github.com/shivangipatel2508" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 bg-white/70 backdrop-blur-sm rounded-full text-gray-700 hover:text-indigo-600 hover:bg-white transition-colors dark:bg-gray-800/50 dark:text-gray-300 dark:hover:text-indigo-400 dark:hover:bg-gray-800"
                >
                  <FiGithub className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/shivangi-patel-07b4ab317" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 bg-white/70 backdrop-blur-sm rounded-full text-gray-700 hover:text-indigo-600 hover:bg-white transition-colors dark:bg-gray-800/50 dark:text-gray-300 dark:hover:text-indigo-400 dark:hover:bg-gray-800"
                >
                  <FiLinkedin className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
            
            {/* Image container with 3D effect */}
            <motion.div 
              className="relative md:col-span-2 mx-auto order-first md:order-last"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              <div className="relative w-72 h-72 md:w-96 md:h-96 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                {/* Background glow */}
                <div className="absolute -top-4 -left-4 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-r from-indigo-400 via-purple-400 to-fuchsia-400 rounded-xl blur-xl opacity-30 dark:opacity-40 animate-pulse"></div>
                
                {/* Main profile image */}
                <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden z-10 backdrop-blur-sm border-4 border-white/70 dark:border-gray-700/50 transition-all duration-500 hover:shadow-indigo-500/30 hover:dark:shadow-indigo-500/20">
                  <Image 
                    src="/images/shivangi.JPG" 
                    alt="Shivangi Patel" 
                    width={400} 
                    height={400}
                    className="object-cover w-full h-full"
                    priority
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Badge */}
                <div className="absolute -bottom-6 right-6 bg-white/90 dark:bg-gray-800/90 rounded-lg px-5 py-3 shadow-lg backdrop-blur-sm z-20 border border-gray-100 dark:border-gray-700 transform -rotate-3">
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">MSc IT Student</p>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400">GLS University</p>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full z-10"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-fuchsia-500 to-pink-500 rounded-full z-0 opacity-70"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Professional Achievements Dashboard Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-950 dark:from-black dark:to-gray-950 relative overflow-hidden">
        {/* Digital circuit background */}
        <div className="absolute inset-0">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <path d="M50,0 L50,50 L0,50" fill="none" stroke="rgba(99,102,241,0.07)" strokeWidth="1"/>
              <path d="M100,0 L100,100 L0,100" fill="none" stroke="rgba(99,102,241,0.07)" strokeWidth="1"/>
              <path d="M150,0 L150,150 L0,150" fill="none" stroke="rgba(99,102,241,0.07)" strokeWidth="1"/>
              <path d="M200,0 L200,200 L0,200" fill="none" stroke="rgba(99,102,241,0.07)" strokeWidth="1"/>
              <circle cx="50" cy="50" r="2" fill="rgba(99,102,241,0.1)" />
              <circle cx="100" cy="100" r="2" fill="rgba(99,102,241,0.1)" />
              <circle cx="150" cy="150" r="2" fill="rgba(99,102,241,0.1)" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <motion.span 
              className="inline-block px-3 py-1 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 text-indigo-300 text-xs font-mono rounded-sm mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <span className="text-indigo-400">✓</span> VERIFIED CREDENTIALS
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Academic Excellence</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Recognized achievements throughout my academic journey in information technology
            </p>
          </div>
          
          <div className="relative">
            <motion.div 
              className="bg-gradient-to-b from-gray-800/80 via-gray-900/90 to-black/80 rounded-lg border border-indigo-500/30 overflow-hidden mb-6 shadow-xl relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="absolute inset-0 overflow-hidden opacity-10">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
              </div>
              
              <div className="grid md:grid-cols-2 items-center py-2">
                <div className="p-4 md:p-6 space-y-2 order-2 md:order-1">
                  <h3 className="text-xl font-bold text-white">Silver Medalist in BSc(IT)</h3>
                  <p className="text-gray-300 text-sm">
                    Achieved 2nd rank among 300+ students at GLS University (2021-2024)
                  </p>
                </div>
                
                <div className="relative h-36 md:h-40 bg-gradient-to-br from-gray-900 to-black overflow-hidden order-1 md:order-2">
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <motion.div 
                      className="relative w-32 h-32"
                      animate={{ rotateY: [0, 5, 0, -5, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {/* Simple, elegant silver medal design */}
                      <div className="relative h-full w-full">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-gray-200 to-gray-400 shadow-lg"></div>
                        
                        {/* Inner medal face with professional finish */}
                        <div className="absolute inset-3 rounded-full bg-gradient-to-br from-slate-100 to-slate-300 flex items-center justify-center">
                          {/* Clean, professional number display */}
                          <div className="flex flex-col items-center justify-center">
                            <div className="text-5xl font-bold text-gray-700">2</div>
                            <div className="text-[10px] uppercase tracking-wider font-medium text-gray-600 mt-1">RANK</div>
                          </div>
                        </div>
                        
                        {/* Simple highlight for dimension */}
                        <div className="absolute top-1 left-1/4 right-1/4 h-1 bg-white/40 rounded-full"></div>
                        
                        {/* Subtle ribbon */}
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3 h-10 bg-indigo-500 -z-10"></div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            
            {/* Simplified achievement cards grid - with academic icons */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Best Female Student */}
              <motion.div
                className="bg-gradient-to-b from-gray-800/60 to-gray-900/60 backdrop-blur rounded border border-purple-500/30 p-4 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute -right-6 -top-6 w-16 h-16 rounded-full bg-purple-500/20 blur-xl"></div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-900/60 flex items-center justify-center">
                    <FaMedal className="h-4 w-4 text-purple-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Best Female Student</h3>
                </div>
                <p className="text-gray-300 text-xs">GLS University, 2024</p>
              </motion.div>
              
              {/* IoT Project */}
              <motion.div
                className="bg-gradient-to-b from-gray-800/60 to-gray-900/60 backdrop-blur rounded border border-blue-500/30 p-4 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute -right-6 -top-6 w-16 h-16 rounded-full bg-blue-500/20 blur-xl"></div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-900/60 flex items-center justify-center">
                    <BiChip className="h-4 w-4 text-blue-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">2nd Prize IoT Project</h3>
                </div>
                <p className="text-gray-300 text-xs">Cybershadez, 2022</p>
              </motion.div>
              
              {/* IT Quiz */}
              <motion.div
                className="bg-gradient-to-b from-gray-800/60 to-gray-900/60 backdrop-blur rounded border border-emerald-500/30 p-4 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute -right-6 -top-6 w-16 h-16 rounded-full bg-emerald-500/20 blur-xl"></div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-900/60 flex items-center justify-center">
                    <MdLightbulbOutline className="h-4 w-4 text-emerald-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">2nd Prize IT Quiz</h3>
                </div>
                <p className="text-gray-300 text-xs">Cybershadez, 2025</p>
              </motion.div>
              
              {/* Position 2025 */}
              <motion.div
                className="bg-gradient-to-b from-gray-800/60 to-gray-900/60 backdrop-blur rounded border border-amber-500/30 p-4 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute -right-6 -top-6 w-16 h-16 rounded-full bg-amber-500/20 blur-xl"></div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-900/60 flex items-center justify-center">
                    <FaCode className="h-4 w-4 text-amber-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">2nd Price Code Snap</h3>
                </div>
                <p className="text-gray-300 text-xs">Cybershadez, 2025</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Navigation Cards - Replaces the simple journey button */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950 relative overflow-hidden">
        {/* Background patterns - responsive to light/dark mode */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
          <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-700 to-transparent opacity-50"></div>
          <div className="absolute left-2/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-700 to-transparent opacity-30"></div>
          <div className="absolute left-3/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-700 to-transparent opacity-50"></div>
          <div className="absolute -right-24 top-0 bottom-0 w-48 bg-indigo-500/10 dark:bg-indigo-500/5 blur-3xl rounded-full"></div>
          <div className="absolute -left-24 top-1/2 w-48 h-48 bg-purple-500/10 dark:bg-purple-500/5 blur-3xl rounded-full"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 dark:text-white">
                Explore More
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Discover my complete journey and comprehensive skill set
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Journey Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href="/journey" className="block">
                <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 h-full group-hover:border-indigo-300 dark:group-hover:border-indigo-700">
                  <div className="h-3 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
                  <div className="p-6 sm:p-8">
                    <div className="mb-4 flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center">
                          <FiClock className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">My Journey</h3>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/40 transition-colors">
                        <FiArrowRight className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-5">
                      Explore my educational background, work experiences, and the projects that have shaped my career in IT.
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-2.5 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-md text-xs font-medium">
                        BSc(IT) Silver Medalist
                      </span>
                      <span className="px-2.5 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-md text-xs font-medium">
                        MSc(IT) Student
                      </span>
                      <span className="px-2.5 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-md text-xs font-medium">
                        2025-Present
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
            
            {/* Skills Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href="/skills" className="block">
                <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 h-full group-hover:border-emerald-300 dark:group-hover:border-emerald-700">
                  <div className="h-3 bg-gradient-to-r from-emerald-600 to-teal-600"></div>
                  <div className="p-6 sm:p-8">
                    <div className="mb-4 flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center">
                          <FiCode className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Technical Skills</h3>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/40 transition-colors">
                        <FiArrowRight className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-5">
                      View my comprehensive skill set across development, databases, security, and specialized IT domains.
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-2.5 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-md text-xs font-medium">
                        Web Development
                      </span>
                      <span className="px-2.5 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 rounded-md text-xs font-medium">
                        Mobile Development
                      </span>
                      <span className="px-2.5 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300 rounded-md text-xs font-medium">
                        IoT & Security
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 px-4 md:px-6 bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-600 dark:from-indigo-800 dark:via-purple-800 dark:to-fuchsia-800 text-white relative overflow-hidden">
        {/* Background patterns */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute left-0 top-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.05" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,0 L100,0 L100,100 L0,100 L0,0 Z" fill="url(#gradient)" />
            <path fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" d="M0,20 Q25,10 50,20 T100,20" />
            <path fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" d="M0,40 Q25,50 50,40 T100,40" />
            <path fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" d="M0,60 Q25,70 50,60 T100,60" />
            <path fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" d="M0,80 Q25,90 50,80 T100,80" />
          </svg>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200">Collaborate?</span></h2>
            <p className="max-w-2xl mx-auto mb-10 opacity-90 text-lg">
              Let's connect and discuss how my skills and experience can contribute to your next project.
            </p>
            <Link 
              href="/contact"
              className="group relative px-8 py-4 bg-white text-indigo-700 rounded-lg overflow-hidden inline-flex items-center gap-2 font-medium"
            >
              <span className="relative z-10">Connect With Me</span>
              <FiArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-white to-indigo-100 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

// Add keyframes animation for elements
const globalStyles = `
@keyframes floatParticle {
  0% { transform: translateY(0) translateX(0); }
  33% { transform: translateY(-10px) translateX(10px); }
  66% { transform: translateY(10px) translateX(-10px); }
  100% { transform: translateY(0) translateX(0); }
}
@keyframes float {
  0% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0); }
}
@keyframes ping-slow {
  0% { transform: scale(1); opacity: 1; }
  75%, 100% { transform: scale(2); opacity: 0; }
}
.animation-delay-150 {
  animation-delay: 150ms;
}
.animation-delay-300 {
  animation-delay: 300ms;
}
`;

// Add styles to the document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = globalStyles;
  document.head.appendChild(styleElement);
}
