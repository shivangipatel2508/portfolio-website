'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiMessageSquare, FiSend, FiUser, FiFileText } from 'react-icons/fi';

// Animation variants for staggered children
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
  hidden: { y: 20, opacity: 0 },
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

export default function Contact() {
  // Form state
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // This is a placeholder for actual form submission
    // In a real application, you would send this data to a server
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Reset form on success
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setFormStatus('success');
      
      // Reset status after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    } catch (error) {
      setFormStatus('error');
      // Reset status after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
              Have a question or want to work together? I'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Contact Form */}
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md border border-gray-100 dark:border-gray-700"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Me a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiUser className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 pl-10 py-3 px-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiMail className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 pl-10 py-3 px-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiFileText className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 pl-10 py-3 px-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                      placeholder="Project Inquiry"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 py-3 px-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                    placeholder="Hello! I'd like to discuss a potential collaboration..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className={`w-full py-3 px-6 rounded-md flex items-center justify-center gap-2 font-medium transition-colors ${
                    formStatus === 'submitting' 
                      ? 'bg-indigo-400 dark:bg-indigo-600 cursor-not-allowed' 
                      : 'bg-indigo-600 dark:bg-indigo-700 hover:bg-indigo-700 dark:hover:bg-indigo-600'
                  } text-white`}
                >
                  {formStatus === 'submitting' ? (
                    <>Sending... <span className="animate-spin">⟳</span></>
                  ) : (
                    <>Send Message <FiSend /></>
                  )}
                </button>
                
                {formStatus === 'success' && (
                  <p className="text-green-600 dark:text-green-400 text-center">
                    Your message has been sent successfully!
                  </p>
                )}
                
                {formStatus === 'error' && (
                  <p className="text-red-600 dark:text-red-400 text-center">
                    There was an error sending your message. Please try again.
                  </p>
                )}
              </form>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              variants={containerVariants}
            >
              <motion.div 
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md border border-gray-100 dark:border-gray-700"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 rounded-lg">
                      <FiMail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Email</h3>
                      <a 
                        href="mailto:shivangipatel2508@gmail.com" 
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                      >
                        shivangipatel2508@gmail.com
                      </a>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        I'll respond to your email within 24-48 hours.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 rounded-lg">
                      <FiLinkedin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">LinkedIn</h3>
                      <a 
                        href="https://www.linkedin.com/in/shivangi-patel-07b4ab317" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                      >
                        https://www.linkedin.com/in/shivangi-patel-07b4ab317
                      </a>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Connect with me professionally.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-lg">
                      <FiGithub className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">GitHub</h3>
                      <a 
                        href="https://github.com/shivangipatel2508" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                      >
                        github.com/shivangipatel2508
                      </a>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Check out my code repositories.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 rounded-lg">
                      <FiMessageSquare className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Discord</h3>
                      <a 
                        href="https://discord.com/users/903870869967867934" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                      >
                        @patelshivangi
                      </a>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        For quick discussions and informal chats.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md border border-gray-100 dark:border-gray-700"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Location</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Based in Ahmedabad, Gujarat, India
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Available for remote work and collaborations worldwide
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-6 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Quick answers to common inquiries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                What kind of projects do you work on?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                I specialize in web and mobile development, with experience in building Flutter applications, web platforms using Next.js/React, and IoT projects with Arduino.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Are you available for freelance work?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Yes, I'm available for freelance projects, both short-term and long-term collaborations. Feel free to reach out with your requirements.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                How quickly do you respond to inquiries?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                I typically respond to all emails and messages within 24-48 hours. For urgent matters, please mention it in your message.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Do you provide ongoing support after project completion?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Yes, I offer post-project support and maintenance services. The specifics can be discussed based on your project requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
