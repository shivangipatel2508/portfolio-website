import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiCode, FiDatabase, FiLayers, FiSmartphone } from 'react-icons/fi';

export default function Home() {
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Shivangi Patel</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
                MSc IT Student & Web Developer
              </p>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-lg">
                I'm a {age}-year-old IT professional from Ahmedabad, India, passionate about creating web and mobile applications that solve real-world problems.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link 
                  href="/projects"
                  className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors flex items-center gap-2 dark:bg-indigo-700 dark:hover:bg-indigo-600"
                >
                  View My Work <FiArrowRight />
                </Link>
                <Link 
                  href="/contact" 
                  className="px-6 py-3 bg-white text-indigo-600 border border-indigo-200 rounded-md hover:bg-gray-50 transition-colors dark:bg-gray-800 dark:text-indigo-400 dark:border-gray-700 dark:hover:bg-gray-750"
                >
                  Contact Me
                </Link>
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

      {/* Skills Section */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">My Expertise</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I've developed a diverse skill set throughout my academic and personal journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/40 rounded-lg flex items-center justify-center mb-4">
                <FiCode className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-medium mb-2 text-gray-900 dark:text-white">Web Development</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Next.js, React, Tailwind CSS, Node.js, Django, PHP
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/40 rounded-lg flex items-center justify-center mb-4">
                <FiSmartphone className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-medium mb-2 text-gray-900 dark:text-white">Mobile Development</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Flutter, Android, iOS
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-lg flex items-center justify-center mb-4">
                <FiDatabase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-medium mb-2 text-gray-900 dark:text-white">Databases</h3>
              <p className="text-gray-600 dark:text-gray-400">
                MySQL, PL/SQL, Data Structures
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-lg flex items-center justify-center mb-4">
                <FiLayers className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-medium mb-2 text-gray-900 dark:text-white">Other Technologies</h3>
              <p className="text-gray-600 dark:text-gray-400">
                C/C++, Python, Java, IOT, Machine Learning
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/skills"
              className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium"
            >
              View all my skills <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 md:px-6 bg-indigo-600 dark:bg-indigo-800 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="max-w-2xl mx-auto mb-8 opacity-90">
            I'm currently looking for new opportunities to showcase my skills and grow professionally.
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
