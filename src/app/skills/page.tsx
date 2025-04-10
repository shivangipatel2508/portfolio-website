'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SiC, SiCplusplus, SiPython, SiJavascript, SiTypescript, SiDart, SiR,
  SiNodedotjs, SiDjango, SiFlutter, SiReact, SiNextdotjs, SiTailwindcss, SiFramer,
  SiMysql, SiSqlite, SiOracle, SiAmazonaws, SiLinux, SiApache, 
  SiGit, SiDocker, SiJira, SiNpm, SiApachejmeter, SiArduino, SiRaspberrypi, 
  SiEspressif, SiJoomla, SiTensorflow, SiPytorch, SiJupyter, SiOpenai } from 'react-icons/si';
import { DiJava, DiPhp, DiMysql } from 'react-icons/di';
import { FiLayers, FiCode, FiDatabase, FiServer, FiCpu, FiHardDrive, FiChevronRight, FiSearch, FiX } from 'react-icons/fi';
import { FaBrain } from 'react-icons/fa';

// Define skill categories
const CATEGORIES = [
  {
    id: 'programming',
    name: 'Programming Languages',
    icon: <FiCode className="w-5 h-5" />,
    description: 'Core programming languages for software development'
  },
  {
    id: 'frameworks',
    name: 'Frameworks & Libraries',
    icon: <FiLayers className="w-5 h-5" />,
    description: 'Tools and frameworks for efficient application development'
  },
  {
    id: 'databases',
    name: 'Databases & Cloud',
    icon: <FiDatabase className="w-5 h-5" />,
    description: 'Data storage and cloud technologies'
  },
  {
    id: 'systems',
    name: 'Systems & Networks',
    icon: <FiServer className="w-5 h-5" />,
    description: 'Operating systems and network infrastructure'
  },
  {
    id: 'hardware',
    name: 'Hardware & IoT',
    icon: <FiCpu className="w-5 h-5" />,
    description: 'Physical computing and Internet of Things'
  },
  {
    id: 'software',
    name: 'Software Engineering',
    icon: <FiHardDrive className="w-5 h-5" />,
    description: 'Software development practices and methodologies'
  },
  {
    id: 'ai',
    name: 'Artificial Intelligence',
    icon: <FaBrain className="w-5 h-5" />,
    description: 'Machine learning and AI technologies'
  },
  {
    id: 'methodology',
    name: 'System Design & Architecture',
    icon: <SiJira className="w-5 h-5" />,
    description: 'Database, system modeling and architecture design'
  }
];

// Get icon component for a skill
function getSkillIcon(name: string) {
  const iconMap: Record<string, JSX.Element> = {
    'C': <SiC className="w-6 h-6" />,
    'C++': <SiCplusplus className="w-6 h-6" />,
    'Python': <SiPython className="w-6 h-6" />,
    'Java': <DiJava className="w-6 h-6" />,
    'PHP': <DiPhp className="w-6 h-6" />,
    'JavaScript': <SiJavascript className="w-6 h-6" />,
    'TypeScript': <SiTypescript className="w-6 h-6" />,
    'Dart': <SiDart className="w-6 h-6" />,
    'R-Programming': <SiR className="w-6 h-6" />,
    'Node.js': <SiNodedotjs className="w-6 h-6" />,
    'Django': <SiDjango className="w-6 h-6" />,
    'Flutter': <SiFlutter className="w-6 h-6" />,
    'React': <SiReact className="w-6 h-6" />,
    'Next.js': <SiNextdotjs className="w-6 h-6" />,
    'Tailwind CSS': <SiTailwindcss className="w-6 h-6" />,
    'Framer Motion': <SiFramer className="w-6 h-6" />,
    'PL/SQL': <SiOracle className="w-6 h-6" />,
    'SQLite': <SiSqlite className="w-6 h-6" />,
    'MySQL': <DiMysql className="w-6 h-6" />,
    'Cloud Computing': <SiAmazonaws className="w-6 h-6" />,
    'Linux Shell': <SiLinux className="w-6 h-6" />,
    'Advanced Networking': <SiApache className="w-6 h-6" />,
    'ESP WiFi': <SiEspressif className="w-6 h-6" />,
    'Security': <SiApache className="w-6 h-6" />,
    'IoT/Arduino': <SiArduino className="w-6 h-6" />,
    'Microprocessors': <SiRaspberrypi className="w-6 h-6" />,
    'Software Engineering': <SiGit className="w-6 h-6" />,
    'Data Structures': <SiDocker className="w-6 h-6" />,
    'System Design': <SiJira className="w-6 h-6" />,
    'Agile Dev': <SiJira className="w-6 h-6" />,
    'Maven': <SiApachejmeter className="w-6 h-6" />,
    'npm': <SiNpm className="w-6 h-6" />,
    'Joomla': <SiJoomla className="w-6 h-6" />,
    'AI': <SiTensorflow className="w-6 h-6" />,
    'Machine Learning': <SiPytorch className="w-6 h-6" />,
    'ML/Jupyter': <SiJupyter className="w-6 h-6" />,
    'Prompt Engineering': <SiOpenai className="w-6 h-6" />,
    'Database Design': <SiMysql className="w-6 h-6" />,
    'System Modeling': <SiDocker className="w-6 h-6" />,
    'System Analysis': <SiJira className="w-6 h-6" />,
    'System Testing': <SiApachejmeter className="w-6 h-6" />
  };
  
  return iconMap[name] || <FiCode className="w-6 h-6" />;
}

// Get color for skill proficiency level
function getProficiencyColor(level: string): string {
  switch (level) {
    case 'Advanced':
      return 'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800/50';
    case 'Intermediate':
      return 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800/50';
    case 'Learning':
      return 'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800/50';
    default:
      return 'bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700';
  }
}

// Skill data interface
interface Skill {
  name: string;
  icon: React.ReactNode;
  level: string;
  year: string;
  description: string;
  projects: string[];
}

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [proficiencyFilter, setProficiencyFilter] = useState<string | null>(null);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [view3D, setView3D] = useState(false);
  
  const skillsData = {
    programming: [
      { 
        name: "C", 
        icon: <SiC />, 
        level: "Advanced", 
        year: "2021", 
        description: "Learned during 1st semester in 2021, advanced knowledge gained through competitive exams.",
        projects: ["Data Structures Implementation", "Competitive Programming"]
      },
      { 
        name: "C++", 
        icon: <SiCplusplus />, 
        level: "Advanced", 
        year: "2022", 
        description: "Learned during 2nd semester in 2022, used in Dam Water Overflow IoT project.",
        projects: ["Dam Overflow Monitoring System"]
      },
      { 
        name: "Python", 
        icon: <SiPython />, 
        level: "Advanced", 
        year: "2023", 
        description: "Learned during 5th semester in 2023, used for data analysis and web development.",
        projects: ["Statistical Analysis", "Data Visualization with pandas", "Web Development with Django"]
      },
      { 
        name: "Java", 
        icon: <DiJava />, 
        level: "Advanced", 
        year: "2024", 
        description: "Learned during 6th semester in 2024, used in project Mentor Connect.",
        projects: ["Mentor Connect (Incomplete)"]
      },
      { 
        name: "PHP", 
        icon: <DiPhp />, 
        level: "Advanced", 
        year: "2023", 
        description: "Learned during 5th semester in 2023, created server-side APIs and dynamic websites.",
        projects: ["Server-Side APIs", "Dynamic Websites with MySQL"]
      },
      { 
        name: "JavaScript", 
        icon: <SiJavascript />, 
        level: "Advanced", 
        year: "2022", 
        description: "Learned during 2nd semester in 2022, used for interactive web applications and APIs.",
        projects: ["Interactive UIs", "Frontend Frameworks Integration", "RESTful Services"]
      },
      { 
        name: "TypeScript", 
        icon: <SiTypescript />, 
        level: "Learning", 
        year: "2025", 
        description: "Self-taught in 2025, building interactive UIs and backend APIs with Node.js.",
        projects: ["React UIs", "Node.js Backend APIs", "Ongoing Learning"]
      },
      { 
        name: "Dart", 
        icon: <SiDart />, 
        level: "Advanced", 
        year: "2025", 
        description: "Learned during 8th semester in 2025, used for Flutter development.",
        projects: ["BarkBuddy App", "Smart Gujarat Hackathon 2025", "Cross-Platform Development"]
      },
      { 
        name: "R-Programming", 
        icon: <SiR />, 
        level: "Intermediate", 
        year: "2025", 
        description: "Learned during 8th semester in 2025, used for data visualization and prediction.",
        projects: ["Data Visualization with ggplot2", "Data Prediction"]
      }
    ],
    frameworks: [
      { 
        name: "Node.js", 
        icon: <SiNodedotjs />, 
        level: "Learning", 
        year: "2025", 
        description: "Self-taught in 2025, currently learning through projects.",
        projects: ["API Development", "Backend Services"]
      },
      { 
        name: "Django", 
        icon: <SiDjango />, 
        level: "Advanced", 
        year: "2024", 
        description: "Learned during 7th semester in 2024, used for web apps and admin dashboards.",
        projects: ["AGL Visitor Management System", "TrashTrack Web App", "Admin Dashboard Development"]
      },
      { 
        name: "Flutter", 
        icon: <SiFlutter />, 
        level: "Advanced", 
        year: "2025", 
        description: "Learned during 8th semester in 2025, built cross-platform mobile apps.",
        projects: ["BarkBuddy App", "TrashTrack Mobile App", "Mobile UI/UX Design"]
      },
      { 
        name: "React", 
        icon: <SiReact />, 
        level: "Learning", 
        year: "2025", 
        description: "Self-taught in 2025, currently learning through projects.",
        projects: ["Personal Portfolio", "Web Applications"]
      },
      { 
        name: "Next.js", 
        icon: <SiNextdotjs />, 
        level: "Learning", 
        year: "2025", 
        description: "Self-taught in 2025, currently learning through projects.",
        projects: ["This Portfolio Website"]
      },
      { 
        name: "Tailwind CSS", 
        icon: <SiTailwindcss />, 
        level: "Learning", 
        year: "2025", 
        description: "Self-taught in 2025, currently learning through projects.",
        projects: ["Responsive Web Designs", "UI Components"]
      },
      { 
        name: "Framer Motion", 
        icon: <SiFramer />, 
        level: "Advanced", 
        year: "2025", 
        description: "Self-taught in 2025, used for animations in web projects.",
        projects: ["Interactive UI Elements", "Animated Transitions"]
      }
    ],
    databases: [
      { 
        name: "PL/SQL", 
        icon: <SiOracle />, 
        level: "Advanced", 
        year: "2023", 
        description: "Learned during 5th semester in 2023, used in various projects and applications.",
        projects: ["Database Design", "Stored Procedures"]
      },
      { 
        name: "SQLite", 
        icon: <SiSqlite />, 
        level: "Intermediate", 
        year: "2024", 
        description: "Used during bachelor's project for showroom visitor handling website.",
        projects: ["Showroom Visitor Handling Website"]
      },
      { 
        name: "MySQL", 
        icon: <DiMysql />, 
        level: "Advanced", 
        year: "2022", 
        description: "Learned during 2nd semester in 2022, used in BarkBuddy and TrashTrack.",
        projects: ["BarkBuddy App", "TrashTrack"]
      },
      { 
        name: "Cloud Computing", 
        icon: <SiAmazonaws />, 
        level: "Advanced", 
        year: "2024", 
        description: "Learned during 7th semester in 2024, continuously expanding knowledge.",
        projects: ["Ongoing Cloud Projects"]
      }
    ],
    systems: [
      { 
        name: "Linux Shell", 
        icon: <SiLinux />, 
        level: "Advanced", 
        year: "2023", 
        description: "Learned during 4th semester in 2023, used for testing commands on cloud servers.",
        projects: ["Cloud Server Management", "Command Automation"]
      },
      { 
        name: "Advanced Networking", 
        icon: <SiApache />, 
        level: "Advanced", 
        year: "2024", 
        description: "Learned during 7th semester in 2024, applied in various projects.",
        projects: ["Network Design", "Protocol Implementation"]
      },
      { 
        name: "ESP WiFi", 
        icon: <SiEspressif />, 
        level: "Advanced", 
        year: "2023", 
        description: "Learned during 4th semester in 2023, used in IoT projects for data transfer.",
        projects: ["Dam Water Overflow System", "TrashTrack IoT Communication"]
      },
      { 
        name: "Security", 
        icon: <SiApache />, 
        level: "Advanced", 
        year: "2024", 
        description: "Learned during 6th semester in 2024, applied in various projects.",
        projects: ["Secure Authentication Systems", "Data Encryption"]
      }
    ],
    hardware: [
      { 
        name: "IoT/Arduino", 
        icon: <SiArduino />, 
        level: "Advanced", 
        year: "2023", 
        description: "Learned during 4th semester in 2023, created projects like dam overflow monitoring.",
        projects: ["Dam Overflow Monitoring", "TrashTrack"]
      },
      { 
        name: "Microprocessors", 
        icon: <SiRaspberrypi />, 
        level: "Intermediate", 
        year: "2023", 
        description: "Learned during 4th semester in 2023, understanding of architecture and assembly.",
        projects: ["Assembly Language Programming", "Hardware Interfacing"]
      }
    ],
    software: [
      { 
        name: "Software Engineering", 
        icon: <SiGit />, 
        level: "Advanced", 
        year: "2024", 
        description: "Learned during 6th semester in 2024, applied in various projects.",
        projects: ["Requirements Engineering", "Software Testing"]
      },
      { 
        name: "Data Structures", 
        icon: <SiDocker />, 
        level: "Advanced", 
        year: "2022", 
        description: "Learned during 3rd semester in 2022, passionate about enhancing skills further.",
        projects: ["Algorithm Implementation", "Problem Solving"]
      },
      { 
        name: "System Design", 
        icon: <SiJira />, 
        level: "Advanced", 
        year: "2023", 
        description: "Learned during 5th semester in 2023, focus on scalability and efficiency.",
        projects: ["Architecture Design", "System Modeling"]
      },
      { 
        name: "Agile Development", 
        icon: <SiJira />, 
        level: "Advanced", 
        year: "2024", 
        description: "Learned during 7th semester in 2024, applied in team projects.",
        projects: ["Sprint Planning", "Agile Ceremonies"]
      },
      { 
        name: "Maven", 
        icon: <SiApachejmeter />, 
        level: "Intermediate", 
        year: "2024", 
        description: "Learned during 7th semester in 2024, used for Java project management.",
        projects: ["Java Project Build Automation"]
      },
      { 
        name: "npm", 
        icon: <SiNpm />, 
        level: "Learning", 
        year: "2025", 
        description: "Self-taught in 2025, used for JavaScript project dependencies.",
        projects: ["Package Management", "Dependency Management"]
      },
      { 
        name: "Joomla", 
        icon: <SiJoomla />, 
        level: "Advanced", 
        year: "2023", 
        description: "Learned during 5th semester in 2023, used for content management.",
        projects: ["CMS Websites", "Content Management"]
      }
    ],
    ai: [
      { 
        name: "AI", 
        icon: <SiTensorflow />, 
        level: "Advanced", 
        year: "2024", 
        description: "Learned during 6th semester in 2024, applied in various projects.",
        projects: ["AI Algorithms", "Decision Systems"]
      },
      { 
        name: "Machine Learning", 
        icon: <SiPytorch />, 
        level: "Advanced", 
        year: "2024", 
        description: "Learned during 6th semester in 2024, applied in prediction and classification tasks.",
        projects: ["Predictive Models", "Classification Systems"]
      },
      { 
        name: "ML/Jupyter", 
        icon: <SiJupyter />, 
        level: "Intermediate", 
        year: "2025", 
        description: "Learned during 8th semester in 2025, used for data analysis and visualization.",
        projects: ["Data Analysis Notebooks", "Visualization Projects"]
      },
      { 
        name: "Prompt Engineering", 
        icon: <SiOpenai />, 
        level: "Learning", 
        year: "2025", 
        description: "Self-taught in 2025 as AI has evolved, exploring LLM capabilities.",
        projects: ["AI Content Generation", "LLM Fine-tuning"]
      }
    ],
    methodology: [
      { 
        name: "Database Design", 
        icon: <SiMysql />, 
        level: "Advanced", 
        year: "2023", 
        description: "Developed skills in designing efficient and scalable database systems with normalization and relationships.",
        projects: ["Relational Database Design", "Data Integrity Systems"]
      },
      { 
        name: "System Modeling", 
        icon: <SiDocker />, 
        level: "Advanced", 
        year: "2023", 
        description: "Experience in creating ER diagrams, DFDs, and Use Case Diagrams for system visualization.",
        projects: ["ER Diagrams", "Data Flow Diagrams", "Use Case Diagrams"]
      },
      { 
        name: "System Analysis", 
        icon: <SiJira />, 
        level: "Advanced", 
        year: "2024", 
        description: "Conducted in-depth system analysis to map user requirements to technical specifications.",
        projects: ["Requirements Analysis", "User-Centered Design"]
      },
      { 
        name: "System Testing", 
        icon: <SiApachejmeter />, 
        level: "Advanced", 
        year: "2024", 
        description: "Participated in system testing including functionality checks and validation.",
        projects: ["Functional Testing", "Integration Testing", "Bug Fixing"]
      }
    ]
  };

  // Get all skills from all categories
  const getAllSkills = () => {
    return Object.values(skillsData).flatMap(skills => skills);
  };

  // Filter skills by active category and search query
  const getFilteredSkills = () => {
    let skills = activeCategory === 'all' 
      ? getAllSkills()
      : skillsData[activeCategory as keyof typeof skillsData] || [];
    
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      skills = skills.filter(skill => 
        skill.name.toLowerCase().includes(query) ||
        skill.description.toLowerCase().includes(query) ||
        skill.projects.some(project => project.toLowerCase().includes(query))
      );
    }
    
    // Add proficiency filter
    if (proficiencyFilter) {
      skills = skills.filter(skill => skill.level === proficiencyFilter);
    }
    
    return skills;
  };
  
  // Count skill proficiency levels
  const getSkillMetrics = () => {
    const skills = getFilteredSkills();
    const total = skills.length;
    const advanced = skills.filter(s => s.level === 'Advanced').length;
    const intermediate = skills.filter(s => s.level === 'Intermediate').length;
    const learning = skills.filter(s => s.level === 'Learning').length;
    
    return { total, advanced, intermediate, learning };
  };
  
  const metrics = getSkillMetrics();
  const filteredSkills = getFilteredSkills();
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Enhanced Hero Section with Professional Design */}
      <div className="relative bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 border-b border-gray-200 dark:border-gray-800 overflow-hidden py-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '24px 24px' 
          }} />
        </div>
        
        {/* Decorative code elements */}
        <div className="absolute opacity-20 -left-16 top-10 text-5xl font-mono text-indigo-500 dark:text-indigo-400 tracking-tight hidden md:block">
          &lt;skills&gt;
        </div>
        <div className="absolute opacity-20 -right-16 bottom-10 text-5xl font-mono text-indigo-500 dark:text-indigo-400 tracking-tight hidden md:block">
          &lt;/skills&gt;
        </div>
        
        {/* Floating tech icons */}
        <motion.div 
          className="absolute top-10 right-10 opacity-10 text-4xl text-indigo-600 dark:text-indigo-400"
          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        >
          <SiReact />
        </motion.div>
        <motion.div 
          className="absolute bottom-10 left-1/4 opacity-10 text-4xl text-green-600 dark:text-green-400"
          animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
        >
          <SiPython />
        </motion.div>
        <motion.div 
          className="absolute top-1/3 right-1/4 opacity-10 text-4xl text-amber-600 dark:text-amber-400"
          animate={{ y: [0, -8, 0], rotate: [0, 3, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
        >
          <SiJavascript />
        </motion.div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="relative z-10"
            >
              {/* Decorative Line */}
              <div className="flex justify-center items-center mb-6">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-indigo-500"></div>
                <div className="px-4">
                  <SiReact className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />
                </div>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-indigo-500"></div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 relative">
                <span className="text-gray-900 dark:text-white">Technical</span>
                <span className="relative mx-2">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Skills</span>
                  <motion.span 
                    className="absolute bottom-0 left-0 h-3 bg-indigo-500/20 dark:bg-indigo-500/30 w-full -z-10 rounded"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  />
                </span>
              </h1>
              
              <motion.p 
                className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Professional competencies developed through education and project experience
              </motion.p>
              
              {/* Animated Divider */}
              <motion.div 
                className="mt-8 flex justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
              >
                <div className="h-1 w-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full" />
              </motion.div>
              
              {/* Skill Level Indicators */}
              <div className="flex flex-wrap justify-center gap-2 mt-8">
                <div className="flex items-center bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 mr-2"></div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Advanced</span>
                </div>
                <div className="flex items-center bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Intermediate</span>
                </div>
                <div className="flex items-center bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm">
                  <div className="w-3 h-3 rounded-full bg-amber-500 mr-2"></div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Learning</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Filters and Search - Fixed Sticky Header */}
      <div className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-20 shadow-sm">
        <div className="container mx-auto px-4 py-2">
          {/* Mobile Filters Toggle */}
          <button 
            className="md:hidden w-full mb-2 flex items-center justify-between bg-gray-50 dark:bg-gray-900 px-4 py-2 rounded-lg"
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
          >
            <span className="text-gray-700 dark:text-gray-300 font-medium">Filters</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-5 w-5 transition-transform transform ${isFiltersOpen ? 'rotate-180' : ''}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {/* Responsive Filter Layout */}
          <div className={`flex flex-col md:flex-row md:items-center md:justify-between gap-2 ${isFiltersOpen || 'md:flex hidden'}`}>
            {/* Category Filters */}
            <div className="flex items-center space-x-1 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-3 py-1.5 text-sm whitespace-nowrap rounded-md transition-colors ${
                  activeCategory === 'all' 
                    ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300 shadow-sm' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                All Skills
              </button>
              
              {CATEGORIES.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-3 py-1.5 text-sm whitespace-nowrap rounded-md flex items-center gap-1.5 transition-all ${
                    activeCategory === category.id 
                      ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300 shadow-sm translate-y-[-1px]' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {category.icon}
                  {category.name}
                </button>
              ))}
            </div>
            
            {/* Search and Display Controls */}
            <div className="flex flex-wrap items-center gap-2 shrink-0">
              {/* Proficiency Level Filter */}
              <div className="flex items-center gap-1 mr-1">
                <button
                  onClick={() => setProficiencyFilter(proficiencyFilter === 'Advanced' ? null : 'Advanced')}
                  className={`px-2 py-1 text-xs rounded-md flex items-center gap-1 ${
                    proficiencyFilter === 'Advanced'
                      ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Advanced
                </button>
                
                <button
                  onClick={() => setProficiencyFilter(proficiencyFilter === 'Intermediate' ? null : 'Intermediate')}
                  className={`px-2 py-1 text-xs rounded-md flex items-center gap-1 ${
                    proficiencyFilter === 'Intermediate'
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  Intermediate
                </button>
                
                <button
                  onClick={() => setProficiencyFilter(proficiencyFilter === 'Learning' ? null : 'Learning')}
                  className={`px-2 py-1 text-xs rounded-md flex items-center gap-1 ${
                    proficiencyFilter === 'Learning'
                      ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  Learning
                </button>
              </div>
              
              {/* Search Input */}
              <div className="relative flex-1 min-w-[180px]">
                <input
                  type="text"
                  placeholder="Search skills..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                {searchQuery && (
                  <button 
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                    onClick={() => setSearchQuery('')}
                  >
                    <FiX />
                  </button>
                )}
              </div>
              
              {/* View Controls */}
              <div className="flex rounded-md overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' 
                    ? 'bg-indigo-500 text-white' 
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}
                  aria-label="Grid View"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' 
                    ? 'bg-indigo-500 text-white' 
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}
                  aria-label="List View"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Overview Metrics */}
      <div className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 pt-1">
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200/0 to-gray-200/30 dark:from-gray-800/0 dark:to-gray-800/20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <div className="relative z-10">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Total Skills</div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{metrics.total}</div>
              </div>
            </div>
            <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4 relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-200/0 to-emerald-200/30 dark:from-emerald-800/0 dark:to-emerald-800/20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <div className="relative z-10">
                <div className="text-sm text-emerald-700 dark:text-emerald-400 mb-1">Advanced</div>
                <div className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">{metrics.advanced}</div>
              </div>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200/0 to-blue-200/30 dark:from-blue-800/0 dark:to-blue-800/20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <div className="relative z-10">
                <div className="text-sm text-blue-700 dark:text-blue-400 mb-1">Intermediate</div>
                <div className="text-2xl font-bold text-blue-700 dark:text-blue-400">{metrics.intermediate}</div>
              </div>
            </div>
            <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4 relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-200/0 to-amber-200/30 dark:from-amber-800/0 dark:to-amber-800/20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <div className="relative z-10">
                <div className="text-sm text-amber-700 dark:text-amber-400 mb-1">Learning</div>
                <div className="text-2xl font-bold text-amber-700 dark:text-amber-400">{metrics.learning}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Category Description - shown when a single category is selected */}
      {activeCategory !== 'all' && (
        <div className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 rounded-lg">
                {CATEGORIES.find(c => c.id === activeCategory)?.icon}
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  {CATEGORIES.find(c => c.id === activeCategory)?.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {CATEGORIES.find(c => c.id === activeCategory)?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Skills Display */}
      <div className="py-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 min-h-screen">
        <div className="container mx-auto px-4">
          {/* Results Summary */}
          {filteredSkills.length > 0 && (
            <div className="mb-6">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Showing {filteredSkills.length} skill{filteredSkills.length !== 1 ? 's' : ''} 
                {activeCategory !== 'all' ? ` in ${CATEGORIES.find(c => c.id === activeCategory)?.name}` : ''}
                {proficiencyFilter ? ` with ${proficiencyFilter} proficiency` : ''}
                {searchQuery ? ` matching "${searchQuery}"` : ''}
              </p>
            </div>
          )}
          
          {/* No results message */}
          {filteredSkills.length === 0 && (
            <div className="py-16 text-center">
              <div className="w-16 h-16 mx-auto bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4">
                <FiSearch className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">No skills found</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                Try adjusting your search or filter criteria
              </p>
              <button 
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                  setProficiencyFilter(null);
                }}
                className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-lg hover:bg-indigo-200 dark:hover:bg-indigo-800/30 transition-colors"
              >
                Reset all filters
              </button>
            </div>
          )}
          
          {/* Grid View - Cleaner, more professional cards */}
          {viewMode === 'grid' && filteredSkills.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4">
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={`${skill.name}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden cursor-pointer hover:shadow-md transition-all hover:-translate-y-1 group relative"
                  onClick={() => setSelectedSkill(skill)}
                >
                  {/* Skill Proficiency Indicator */}
                  <div className="h-1 w-full bg-gray-100 dark:bg-gray-800">
                    <div 
                      className={`h-full ${
                        skill.level === 'Advanced' ? 'bg-emerald-500' : 
                        skill.level === 'Intermediate' ? 'bg-blue-500' : 
                        'bg-amber-500'
                      }`} 
                      style={{ width: 
                        skill.level === 'Advanced' ? '100%' : 
                        skill.level === 'Intermediate' ? '65%' : 
                        '35%' 
                      }}
                    ></div>
                  </div>
                  
                  {/* Arrow indicator - positioned in top right */}
                  <div className="absolute top-3 right-3 text-gray-300 dark:text-gray-700 opacity-40 group-hover:text-indigo-400 dark:group-hover:text-indigo-500 group-hover:opacity-100 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  
                  <div className="p-4 flex flex-col items-center justify-between h-full">
                    <div className="mb-3 flex flex-col items-center">
                      <div className="p-3 bg-gray-50 dark:bg-gray-800/80 rounded-full group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/20 transition-colors">
                        <div className="w-8 h-8 flex items-center justify-center">
                          {getSkillIcon(skill.name)}
                        </div>
                      </div>
                      
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mt-3 text-center">
                        {skill.name}
                      </h3>
                    </div>
                    
                    <div className="mt-auto">
                      <span className={`inline-block px-2.5 py-0.5 text-xs font-medium rounded-full ${getProficiencyColor(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
          
          {/* List View */}
          {viewMode === 'list' && filteredSkills.length > 0 && (
            <div className="space-y-4">
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={`${skill.name}-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03, duration: 0.3 }}
                  className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden cursor-pointer hover:shadow-md transition-all hover:border-indigo-300 dark:hover:border-indigo-700"
                  onClick={() => setSelectedSkill(skill)}
                >
                  <div className="h-1 w-full bg-gray-100 dark:bg-gray-800">
                    <div 
                      className={`h-full ${
                        skill.level === 'Advanced' ? 'bg-emerald-500' : 
                        skill.level === 'Intermediate' ? 'bg-blue-500' : 
                        'bg-amber-500'
                      }`} 
                      style={{ width: 
                        skill.level === 'Advanced' ? '100%' : 
                        skill.level === 'Intermediate' ? '65%' : 
                        '35%' 
                      }}
                    ></div>
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg shrink-0">
                        {getSkillIcon(skill.name)}
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">{skill.name}</h3>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 text-xs font-medium rounded-md ${getProficiencyColor(skill.level)}`}>
                            {skill.level}
                          </span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            Since {skill.year}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-gray-400 dark:text-gray-500 flex items-center gap-1">
                      <span className="text-xs text-indigo-600 dark:text-indigo-400 hidden md:inline">Details</span>
                      <FiChevronRight className="w-5 h-5" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
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
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 20 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Skill level indicator bar */}
              <div className="h-1.5 w-full bg-gray-100 dark:bg-gray-800">
                <div 
                  className={`h-full ${
                    selectedSkill.level === 'Advanced' ? 'bg-emerald-500' : 
                    selectedSkill.level === 'Intermediate' ? 'bg-blue-500' : 
                    'bg-amber-500'
                  }`} 
                  style={{ width: 
                    selectedSkill.level === 'Advanced' ? '100%' : 
                    selectedSkill.level === 'Intermediate' ? '65%' : 
                    '35%' 
                  }}
                ></div>
              </div>
              
              <div className="divide-y divide-gray-100 dark:divide-gray-800">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-5">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl">
                        {getSkillIcon(selectedSkill.name)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{selectedSkill.name}</h3>
                        <div className="flex items-center gap-3">
                          <span className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${getProficiencyColor(selectedSkill.level)}`}>
                            {selectedSkill.level}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            Since {selectedSkill.year}
                          </span>
                        </div>
                      </div>
                    </div>
                    <button 
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                      onClick={() => setSelectedSkill(null)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="space-y-5">
                    <div>
                      <h4 className="text-sm text-gray-500 dark:text-gray-400 uppercase font-medium mb-2">Description</h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        {selectedSkill.description}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-sm text-gray-500 dark:text-gray-400 uppercase font-medium mb-3">Projects</h4>
                  <ul className="space-y-3">
                    {selectedSkill.projects.map((project, idx) => (
                      <motion.li 
                        key={idx}
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-500 flex-shrink-0"></div>
                        <span className="text-gray-700 dark:text-gray-300">{project}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg">
                      <h4 className="text-xs text-gray-500 dark:text-gray-400 uppercase font-medium mb-1">Proficiency</h4>
                      <div className={`text-sm font-medium ${
                        selectedSkill.level === 'Advanced' ? 'text-emerald-700 dark:text-emerald-400' :
                        selectedSkill.level === 'Intermediate' ? 'text-blue-700 dark:text-blue-400' :
                        'text-amber-700 dark:text-amber-400'
                      }`}>
                        {selectedSkill.level}
                      </div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg">
                      <h4 className="text-xs text-gray-500 dark:text-gray-400 uppercase font-medium mb-1">Acquired</h4>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">{selectedSkill.year}</div>
                    </div>
                  </div>
                </div>
                
                {/* Related skills section - find skills in the same category */}
                <div className="p-6">
                  <h4 className="text-sm text-gray-500 dark:text-gray-400 uppercase font-medium mb-3">Related Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(skillsData).map(([category, skills]) => {
                      if (skills.some(s => s.name === selectedSkill.name)) {
                        // Find other skills in the same category
                        return skills
                          .filter(s => s.name !== selectedSkill.name)
                          .slice(0, 4)
                          .map((skill, idx) => (
                            <button 
                              key={idx}
                              className="px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/20 transition-colors rounded-lg text-gray-700 dark:text-gray-300 flex items-center gap-2"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedSkill(skill);
                              }}
                            >
                              <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                                {React.cloneElement(getSkillIcon(skill.name), { className: 'w-4 h-4' })}
                              </div>
                              <span>{skill.name}</span>
                            </button>
                          ));
                      }
                      return null;
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
