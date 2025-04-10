'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiMessageSquare, FiSend, FiUser, FiFileText, FiMapPin, FiCode, FiLayers } from 'react-icons/fi';

export default function Contact() {
  // Form state
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);
  const isFormInView = useInView(formRef, { 
    once: true, 
    amount: 0.1, // Reduced threshold to trigger earlier
    root: undefined
  });
  const formAnimation = useAnimation();
  
  useEffect(() => {
    // Start animation immediately when component mounts as a fallback
    const timer = setTimeout(() => {
      formAnimation.start('visible');
    }, 500);
    
    // Also trigger animation when form comes into view
    if (isFormInView) {
      formAnimation.start('visible');
    }
    
    return () => clearTimeout(timer);
  }, [isFormInView, formAnimation]);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission with Formspree
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    try {
      // Replace YOUR_FORMSPREE_FORM_ID with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/xdkeypjg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
          message: formState.message
        })
      });
      
      const data = await response.json();
      
      if (data.ok) {
        setFormState({ name: '', email: '', subject: '', message: '' });
        setFormStatus('success');
      } else {
        console.error('Form submission error:', data);
        setFormStatus('error');
      }
      
      setTimeout(() => setFormStatus('idle'), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900">
      {/* Animated Circuit Pattern Background */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.02] dark:opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M20,0 L20,40 M20,60 L20,100 M40,0 L40,100 M60,0 L60,40 M60,60 L60,100 M80,0 L80,100 M0,20 L40,20 M60,20 L100,20 M0,40 L100,40 M0,60 L40,60 M60,60 L100,60 M0,80 L100,80" 
                  stroke="currentColor" strokeWidth="0.5" fill="none" />
            <circle cx="20" cy="20" r="2" fill="currentColor" />
            <circle cx="20" cy="60" r="2" fill="currentColor" />
            <circle cx="60" cy="20" r="2" fill="currentColor" />
            <circle cx="60" cy="60" r="2" fill="currentColor" />
            <rect x="36" y="36" width="8" height="8" fill="currentColor" opacity="0.5" />
            <rect x="56" y="56" width="8" height="8" fill="currentColor" opacity="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
        </svg>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 dark:from-indigo-600/5 dark:to-purple-600/5 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 dark:from-blue-600/5 dark:to-cyan-600/5 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 mb-6">
              <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
              <span className="text-sm font-medium text-indigo-800 dark:text-indigo-300">
                Let's start a conversation
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">Connect</span> with Me
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Whether you have a project in mind, a question about my work, or just want to say hello — I'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="relative z-10 pb-24 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Contact Information */}
            <motion.div
              className="lg:col-span-5 space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-3xl p-8 border border-gray-100/50 dark:border-gray-700/50 shadow-xl relative overflow-hidden">
                {/* Digital circuit decorative element */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 opacity-10">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
                    <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="1" />
                    <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="1" />
                    <path d="M100,20 L100,60 M100,140 L100,180 M20,100 L60,100 M140,100 L180,100" stroke="currentColor" strokeWidth="1" />
                    <circle cx="100" cy="20" r="4" fill="currentColor" />
                    <circle cx="100" cy="180" r="4" fill="currentColor" />
                    <circle cx="20" cy="100" r="4" fill="currentColor" />
                    <circle cx="180" cy="100" r="4" fill="currentColor" />
                  </svg>
                </div>

                {/* Blurred gradient decorative element */}
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-indigo-500/20 dark:bg-indigo-500/10 rounded-full filter blur-2xl opacity-60"></div>
                
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 relative">Connect With Me</h2>
                
                <div className="space-y-6 relative">
                  {/* Email */}
                  <motion.div 
                    className="flex items-start gap-5"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <div className="p-3.5 bg-gradient-to-br from-indigo-400/80 to-indigo-600/80 dark:from-indigo-500/30 dark:to-indigo-700/30 text-white rounded-2xl shadow-sm">
                      <FiMail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h3>
                      <a 
                        href="mailto:shivangipatel2508@gmail.com" 
                        className="text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-1 group"
                      >
                        shivangipatel2508@gmail.com
                        <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
                      </a>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Response within 24-48 hours
                      </p>
                    </div>
                  </motion.div>
                  
                  {/* LinkedIn */}
                  <motion.div 
                    className="flex items-start gap-5"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <div className="p-3.5 bg-gradient-to-br from-blue-500/80 to-blue-700/80 dark:from-blue-600/30 dark:to-blue-800/30 text-white rounded-2xl shadow-sm">
                      <FiLinkedin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">LinkedIn</h3>
                      <a 
                        href="https://www.linkedin.com/in/shivangi-patel-07b4ab317" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-1 group"
                      >
                        @shivangi-patel
                        <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
                      </a>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        For professional connections
                      </p>
                    </div>
                  </motion.div>
                  
                  {/* GitHub */}
                  <motion.div 
                    className="flex items-start gap-5"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <div className="p-3.5 bg-gradient-to-br from-gray-700/80 to-gray-900/80 dark:from-gray-600/30 dark:to-gray-800/30 text-white rounded-2xl shadow-sm">
                      <FiGithub className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">GitHub</h3>
                      <a 
                        href="https://github.com/shivangipatel2508" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-1 group"
                      >
                        @shivangipatel2508
                        <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
                      </a>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Check out my repositories
                      </p>
                    </div>
                  </motion.div>
                  
                  {/* Discord */}
                  <motion.div 
                    className="flex items-start gap-5"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <div className="p-3.5 bg-gradient-to-br from-purple-500/80 to-purple-700/80 dark:from-purple-600/30 dark:to-purple-800/30 text-white rounded-2xl shadow-sm">
                      <FiMessageSquare className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Discord</h3>
                      <a 
                        href="https://discord.com/users/903870869967867934" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-1 group"
                      >
                        @patelshivangi
                        <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
                      </a>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        For quick discussions
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-3xl overflow-hidden border border-gray-100/50 dark:border-gray-700/50 shadow-xl">
                <div className="bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-700 dark:to-violet-700 p-5 text-white flex items-center gap-3">
                  <FiMapPin className="w-5 h-5" />
                  <h3 className="font-medium">Location</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    Ahmedabad, Gujarat, India
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                    Available for remote work worldwide and local collaborations
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div 
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Modern 3D-style form container */}
              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100/50 dark:border-gray-700/50 relative overflow-hidden">
                {/* Decorative code pattern */}
                <div className="absolute top-0 right-0 w-40 h-40 opacity-5">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <text x="20" y="30" className="text-xs" fill="currentColor">{`function sendMessage() {`}</text>
                    <text x="30" y="50" className="text-xs" fill="currentColor">{`  if (isValid) {`}</text>
                    <text x="40" y="70" className="text-xs" fill="currentColor">{`    connect();`}</text>
                    <text x="40" y="90" className="text-xs" fill="currentColor">{`    deliver();`}</text>
                    <text x="30" y="110" className="text-xs" fill="currentColor">{`  }`}</text>
                    <text x="20" y="130" className="text-xs" fill="currentColor">{`}`}</text>
                  </svg>
                </div>
                
                {/* Glowing accent */}
                <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-indigo-500/30 dark:bg-indigo-500/10 rounded-full filter blur-3xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow-md">
                      <FiSend className="h-5 w-5" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Send Me a Message</h2>
                  </div>
                  
                  <form 
                    ref={formRef} 
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                    action="https://formspree.io/f/YOUR_FORMSPREE_FORM_ID"
                    method="POST"
                  >
                    {/* Honeypot field to prevent spam */}
                    <input type="text" name="_gotcha" style={{ display: 'none' }} />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={formAnimation}
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          visible: { 
                            opacity: 1, 
                            y: 0, 
                            transition: { 
                              delay: 0.1,
                              duration: 0.4,
                              ease: "easeOut"
                            } 
                          }
                        }}
                      >
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Your Name
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <FiUser className="text-gray-400" />
                          </div>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            required
                            className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-gray-100 pl-10 py-3.5 px-4 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 shadow-sm"
                            placeholder="Your name"
                          />
                        </div>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={formAnimation}
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          visible: { 
                            opacity: 1, 
                            y: 0, 
                            transition: { 
                              delay: 0.2,
                              duration: 0.4,
                              ease: "easeOut"
                            } 
                          }
                        }}
                      >
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Email Address
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <FiMail className="text-gray-400" />
                          </div>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                            required
                            className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-gray-100 pl-10 py-3.5 px-4 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 shadow-sm"
                            placeholder="your@email.com"
                          />
                        </div>
                      </motion.div>
                    </div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={formAnimation}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { 
                          opacity: 1, 
                          y: 0, 
                          transition: { 
                            delay: 0.3,
                            duration: 0.4,
                            ease: "easeOut"
                          } 
                        }
                      }}
                    >
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Subject
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <FiFileText className="text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          required
                          className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-gray-100 pl-10 py-3.5 px-4 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 shadow-sm"
                          placeholder="What's this about?"
                        />
                      </div>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={formAnimation}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { 
                          opacity: 1, 
                          y: 0, 
                          transition: { 
                            delay: 0.4,
                            duration: 0.4,
                            ease: "easeOut"
                          } 
                        }
                      }}
                    >
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-gray-100 py-3.5 px-4 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 shadow-sm"
                        placeholder="Tell me about your project, idea, or just say hello!"
                      ></textarea>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={formAnimation}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { 
                          opacity: 1, 
                          y: 0, 
                          transition: { 
                            delay: 0.5,
                            duration: 0.4,
                            ease: "easeOut"
                          } 
                        }
                      }}
                    >
                      <button
                        type="submit"
                        disabled={formStatus === 'submitting'}
                        className={`w-full py-4 px-6 rounded-xl flex items-center justify-center gap-2 font-medium text-base transition-all ${
                          formStatus === 'submitting' 
                            ? 'bg-indigo-400 dark:bg-indigo-600 cursor-not-allowed' 
                            : 'bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 dark:from-indigo-500 dark:to-violet-600 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0'
                        } text-white`}
                      >
                        {formStatus === 'submitting' ? (
                          <>
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </>
                        ) : (
                          <>Send Message <FiSend className="ml-1" /></>
                        )}
                      </button>
                      
                      {formStatus === 'success' && (
                        <motion.p 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-4 text-center text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 p-3 rounded-lg"
                        >
                          Your message has been sent successfully! I'll get back to you soon.
                        </motion.p>
                      )}
                      
                      {formStatus === 'error' && (
                        <motion.p 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-4 text-center text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg"
                        >
                          There was an error sending your message. Please try again or contact me directly via email.
                        </motion.p>
                      )}
                    </motion.div>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
