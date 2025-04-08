import Image from 'next/image';
import Link from 'next/link';
import { FiDownload, FiArrowRight, FiAward, FiBookOpen, FiCode } from 'react-icons/fi';

export default function About() {
  // Calculate age from birthdate
  const calculateAge = () => {
    const birthDate = new Date('2004-08-25');
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const age = calculateAge();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Me</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
                IT Professional & Web Developer
              </p>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-lg">
                Hello! I'm Patel Shivangi Ajaykumar, a {age}-year-old IT professional from Ahmedabad, India. I'm passionate about creating innovative solutions that solve real-world problems.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link 
                  href="/contact"
                  className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors flex items-center gap-2 dark:bg-indigo-700 dark:hover:bg-indigo-600"
                >
                  Get In Touch <FiArrowRight />
                </Link>
                <a 
                  href="/resume.pdf" 
                  target="_blank"
                  className="px-6 py-3 bg-white text-indigo-600 border border-indigo-200 rounded-md hover:bg-gray-50 transition-colors flex items-center gap-2 dark:bg-gray-800 dark:text-indigo-400 dark:border-gray-700 dark:hover:bg-gray-750"
                >
                  Download Resume <FiDownload />
                </a>
              </div>
            </div>
            
            <div className="relative animate-fade-in order-first md:order-last mx-auto">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                <Image 
                  src="/images/shivangi.JPG" 
                  alt="Shivangi Patel" 
                  width={320} 
                  height={320}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-lg px-4 py-2 shadow-md">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">MSc IT Student</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">GLS University</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Background Section */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Education & Background</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My academic journey and professional development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-slide-up">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/40 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <FiBookOpen className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-gray-900 dark:text-white">MSc in Information Technology</h3>
                  <p className="text-gray-700 dark:text-gray-300">GLS University</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">2024 - Present</p>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Currently working on my final year project in Flutter, creating an app named BarkBuddy.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/40 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <FiBookOpen className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-gray-900 dark:text-white">BSc in Information Technology</h3>
                  <p className="text-gray-700 dark:text-gray-300">GLS University</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">2021 - 2024</p>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Graduated with 2nd rank and received a silver medal as the best female student out of 300 students.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <FiAward className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-gray-900 dark:text-white">Key Achievements</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                    <li>2nd Rank in Bachelor's degree with Silver Medal (2024)</li>
                    <li>2nd Position in GLS Cybershadez-2025 Code Snap competition</li>
                    <li>3rd Prize in IT Quiz competition at GLS Cybershadez (2023)</li>
                    <li>2nd Prize for IOT Project in GLS Cybershadez (2022)</li>
                    <li>Participated in Gujarat SSIP (2021)</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <FiCode className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-gray-900 dark:text-white">Projects</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                    <li>BarkBuddy - Flutter mobile app for dog owners (2025)</li>
                    <li>AGL Showroom - Dynamic cart-based website using Django (2024)</li>
                    <li>Dam Water Overflow System - IOT project with Arduino (2022)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 md:px-6 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">My Skills</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Technologies and tools I've worked with
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-slide-up">
            {[
              "C", "C++", "PL/SQL", "Python", "Django", "Flutter", 
              "Linux Shell", "Java", "Maven", "Data Structures", 
              "IOT", "Arduino", "ESP Wifi Module", "System Analysis", 
              "Agile Development", "Cloud Computing", "Networking", 
              "PHP", "Joomla", "AI", "Cryptography", "Network Security", 
              "R-programming", "Machine Learning", "MySQL", "Next.js", 
              "React", "Framer Motion", "Node.js", "npm", "TypeScript"
            ].map((skill, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
              >
                <span className="text-gray-800 dark:text-gray-200 font-medium">{skill}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/skills"
              className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium"
            >
              View detailed skills <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 md:px-6 bg-indigo-600 dark:bg-indigo-800 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Working Together?</h2>
          <p className="max-w-2xl mx-auto mb-8 opacity-90">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <Link 
            href="/contact"
            className="px-8 py-3 bg-white text-indigo-700 rounded-md hover:bg-gray-100 transition-colors inline-flex items-center gap-2 font-medium"
          >
            Get in Touch <FiArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
}
