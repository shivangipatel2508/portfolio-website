'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/skills', label: 'Skills' },
  { href: '/journey', label: 'Journey' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle theme toggling
  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  // Check user's theme preference on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'py-2 backdrop-blur-lg' 
        : 'py-4'
    }`}>
      <div className="absolute inset-0 overflow-hidden">
        {isScrolled && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/90 to-white/70 dark:from-gray-900/70 dark:via-gray-900/90 dark:to-gray-900/70 border-b border-gray-200/40 dark:border-gray-800/40 shadow-sm"
          ></motion.div>
        )}
      </div>

      <div className="container mx-auto px-5 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group relative z-10 flex items-center">
            <div className="absolute -left-1 -top-1 w-8 h-8 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-lg transform rotate-12 group-hover:rotate-45 transition-transform duration-300"></div>
            <div className="absolute -left-2 -top-2 w-8 h-8 border border-indigo-500/30 rounded-lg transform rotate-12 group-hover:rotate-6 transition-transform duration-300 delay-75"></div>
            <span className="text-xl font-bold text-gray-900 dark:text-white ml-3">
              Shivangi<span className="text-indigo-600 dark:text-indigo-400">.works</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="flex items-center space-x-1 bg-gradient-to-r from-gray-100/50 to-white/30 dark:from-gray-800/50 dark:to-gray-900/30 backdrop-blur-sm rounded-full pl-6 pr-3 py-1.5 border border-gray-200/50 dark:border-gray-700/50 shadow-sm">
                {/* Nav Links */}
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`relative px-3 py-1.5 text-sm font-medium transition-all duration-200 rounded-full
                        ${isActive 
                          ? 'text-white' 
                          : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                        }
                      `}
                    >
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-500 dark:to-violet-500 rounded-full"
                          layoutId="navBackgroundActive"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{link.label}</span>
                    </Link>
                  );
                })}
                
                {/* Theme Toggle Button - Enhanced Version */}
                <div className="ml-2">
                  <button
                    onClick={toggleTheme}
                    className="group relative flex items-center justify-center w-12 h-6 rounded-full overflow-hidden"
                    aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                  >
                    {/* Background container */}
                    <div className="absolute inset-0 rounded-full">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-indigo-950 dark:to-blue-950"></div>
                      
                      {/* Stars (visible in dark mode) */}
                      <div className="absolute inset-0 transition-opacity duration-500"
                           style={{ opacity: isDarkMode ? 1 : 0 }}>
                        <div className="absolute top-1 left-1.5 w-0.5 h-0.5 bg-white rounded-full animate-twinkle"></div>
                        <div className="absolute top-2 left-3 w-1 h-1 bg-white rounded-full animate-twinkle animation-delay-300"></div>
                        <div className="absolute bottom-1.5 left-4 w-0.5 h-0.5 bg-white rounded-full animate-twinkle animation-delay-150"></div>
                        <div className="absolute top-1 right-2 w-0.5 h-0.5 bg-white rounded-full animate-twinkle animation-delay-200"></div>
                      </div>
                      
                      {/* Enhanced clouds with floating animation */}
                      <div className="absolute inset-0 transition-opacity duration-500"
                           style={{ opacity: isDarkMode ? 0 : 1 }}>
                        {/* First cloud group */}
                        <div className="absolute top-0.5 left-1.5 flex animate-float-slow">
                          <div className="w-2 h-1.5 bg-gradient-to-b from-white to-blue-50 rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.1)]"></div>
                          <div className="-ml-1 w-2.5 h-2 bg-gradient-to-b from-white to-blue-50 rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.1)]"></div>
                          <div className="-ml-1 mt-0.5 w-1.5 h-1.5 bg-gradient-to-b from-white to-blue-50 rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.1)]"></div>
                        </div>
                        
                        {/* Second cloud group */}
                        <div className="absolute bottom-1 right-2 flex animate-float-slow animation-delay-150">
                          <div className="w-2 h-1.5 bg-gradient-to-b from-white to-blue-50 rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.1)]"></div>
                          <div className="-ml-0.5 w-2.5 h-2 bg-gradient-to-b from-white to-blue-50 rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.1)]"></div>
                        </div>
                        
                        {/* Sky tint for better contrast */}
                        <div className="absolute inset-0 bg-gradient-to-r from-sky-100/40 to-blue-100/40 rounded-full"></div>
                        
                        {/* Animated sun rays */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-full h-full animate-spin-slow opacity-20">
                            {[...Array(6)].map((_, i) => (
                              <div 
                                key={i}
                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-full bg-yellow-300/50 rounded-full"
                                style={{ transform: `translate(-50%, -50%) rotate(${i * 30}deg)` }}
                              ></div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Toggle knob with enhanced animations */}
                    <motion.div 
                      className={`absolute w-5 h-5 rounded-full z-10 shadow-md flex items-center justify-center ${
                        isDarkMode 
                          ? 'bg-gradient-to-br from-indigo-500 to-blue-700 shadow-inner-dark' 
                          : 'bg-gradient-to-br from-amber-300 to-orange-500 shadow-inner-light'
                      }`}
                      animate={{ 
                        x: isDarkMode ? 8 : -8,
                        rotate: isDarkMode ? -180 : 0,
                        scale: [1, 1.15, 1]
                      }}
                      transition={{ 
                        x: { type: "spring", stiffness: 500, damping: 30 },
                        rotate: { duration: 0.5 },
                        scale: { duration: 0.5 }
                      }}
                    >
                      <div className="relative">
                        <AnimatePresence mode="wait">
                          {isDarkMode ? (
                            <motion.div
                              key="moon-icon"
                              initial={{ scale: 0.5, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0.5, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="text-white"
                            >
                              <FiMoon className="w-2.5 h-2.5" />
                              {/* Moon crater with pulse effect */}
                              <motion.div 
                                className="absolute top-0.5 -right-0.5 h-1 w-1 bg-blue-200 rounded-full"
                                animate={{ 
                                  opacity: [0.6, 1, 0.6],
                                  scale: [1, 1.2, 1]
                                }}
                                transition={{
                                  duration: 4,
                                  repeat: Infinity,
                                  ease: "easeInOut"
                                }}
                              ></motion.div>
                            </motion.div>
                          ) : (
                            <motion.div
                              key="sun-icon"
                              initial={{ scale: 0.5, opacity: 0, rotate: 45 }}
                              animate={{ 
                                scale: 1, 
                                opacity: 1, 
                                rotate: 0
                              }}
                              exit={{ scale: 0.5, opacity: 0, rotate: -45 }}
                              transition={{ duration: 0.2 }}
                              className="text-white"
                            >
                              {/* Sun with pulse glow */}
                              <motion.div
                                className="absolute inset-0 rounded-full bg-yellow-400/30"
                                animate={{
                                  opacity: [0, 0.5, 0],
                                  scale: [1, 1.3, 1]
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "easeInOut"
                                }}
                              />
                              <FiSun className="w-2.5 h-2.5" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile navigation controls */}
          <div className="flex md:hidden items-center gap-2">
            {/* Mobile theme toggle */}
            <button
              onClick={toggleTheme}
              className="relative w-9 h-8 flex items-center justify-center rounded-md overflow-hidden border border-gray-200/80 dark:border-gray-700/80"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              <div className="absolute inset-0 transition-all duration-700">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900"
                  animate={{ opacity: isDarkMode ? 1 : 0 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-b from-amber-50 to-orange-50 dark:from-indigo-900 dark:to-blue-900"
                  animate={{ opacity: isDarkMode ? 0 : 1 }}
                />
              </div>
              
              <div className="relative z-10">
                <div className="relative w-5 h-5">
                  <AnimatePresence mode="wait" initial={false}>
                    {isDarkMode ? (
                      <motion.div 
                        key="night-mode"
                        initial={{ rotateY: -90 }}
                        animate={{ rotateY: 0 }}
                        exit={{ rotateY: 90 }}
                        transition={{ duration: 0.3 }}
                        style={{ backfaceVisibility: 'hidden' }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <FiMoon className="w-3.5 h-3.5 text-indigo-200 drop-shadow-glow-blue" />
                      </motion.div>
                    ) : (
                      <motion.div 
                        key="day-mode"
                        initial={{ rotateY: -90 }}
                        animate={{ rotateY: 0 }}
                        exit={{ rotateY: 90 }}
                        transition={{ duration: 0.3 }}
                        style={{ backfaceVisibility: 'hidden' }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <FiSun className="w-3.5 h-3.5 text-amber-500 drop-shadow-glow-yellow" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-10 h-10 flex items-center justify-center rounded-md"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 to-white/30 dark:from-gray-800/50 dark:to-gray-900/30 rounded-md border border-gray-200/50 dark:border-gray-700/50"></div>
              
              <div className="relative w-5 h-4 flex flex-col justify-between">
                <motion.span 
                  className="w-full h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full block"
                  animate={{ 
                    rotate: isMenuOpen ? 45 : 0,
                    y: isMenuOpen ? 6 : 0,
                    width: isMenuOpen ? '100%' : '100%'
                  }}
                  transition={{ duration: 0.3 }}
                ></motion.span>
                <motion.span 
                  className="w-3/4 h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full block"
                  animate={{ 
                    opacity: isMenuOpen ? 0 : 1,
                    x: isMenuOpen ? 20 : 0
                  }}
                  transition={{ duration: 0.3 }}
                ></motion.span>
                <motion.span 
                  className="w-full h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full block"
                  animate={{ 
                    rotate: isMenuOpen ? -45 : 0,
                    y: isMenuOpen ? -6 : 0,
                    width: isMenuOpen ? '100%' : '80%'
                  }}
                  transition={{ duration: 0.3 }}
                ></motion.span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-b border-gray-200 dark:border-gray-800 shadow-xl"
            initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            exit={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="container mx-auto py-6 px-5">
              <div className="grid grid-cols-2 gap-2">
                {navLinks.map((link, idx) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05, duration: 0.3 }}
                    >
                      <Link 
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block p-4 rounded-xl transition-all relative overflow-hidden ${
                          isActive 
                            ? 'shadow-md' 
                            : 'hover:bg-gray-100/70 dark:hover:bg-gray-800/70'
                        }`}
                      >
                        {isActive && (
                          <motion.div 
                            className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 opacity-90 dark:opacity-80"
                            layoutId="mobileActiveBackground"
                            initial={false}
                          />
                        )}
                        
                        <div className="relative z-10 flex flex-col">
                          <span className={`text-lg font-medium ${
                            isActive 
                              ? 'text-white' 
                              : 'text-gray-900 dark:text-gray-200'
                          }`}>
                            {link.label}
                          </span>
                          <span className={`text-xs ${
                            isActive 
                              ? 'text-white/80' 
                              : 'text-gray-500 dark:text-gray-400'
                          }`}>
                            {idx === 0 ? 'Main' : idx === 1 ? 'My expertise' : idx === 2 ? 'My story' : 
                             idx === 3 ? 'My work' : 'Get in touch'}
                          </span>
                        </div>
                        
                        {isActive && (
                          <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-white/70"></div>
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

const globalStyles = `
.drop-shadow-glow-blue {
  filter: drop-shadow(0 0 2px rgba(129, 140, 248, 0.7));
}
.drop-shadow-glow-yellow {
  filter: drop-shadow(0 0 2px rgba(251, 191, 36, 0.7));
}
.shadow-inner-light {
  box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.4), 0 2px 4px rgba(0, 0, 0, 0.1);
}
.shadow-inner-dark {
  box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.2), 0 2px 4px rgba(0, 0, 0, 0.3);
}
@keyframes twinkle {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
}
@keyframes float-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-1px); }
}
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.animate-twinkle {
  animation: twinkle 3s ease-in-out infinite;
}
.animate-float-slow {
  animation: float-slow 4s ease-in-out infinite;
}
.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}
.animation-delay-150 {
  animation-delay: 1.5s;
}
.animation-delay-200 {
  animation-delay: 2s;
}
.animation-delay-300 {
  animation-delay: 3s;
}
`;

if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = globalStyles;
  document.head.appendChild(styleElement);
}
