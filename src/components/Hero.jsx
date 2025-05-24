import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16 pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/80 to-secondary-50/80 dark:from-primary-950/30 dark:to-secondary-950/30"></div>
        <div className="absolute -top-48 -right-48 w-96 h-96 bg-primary-100 dark:bg-primary-900/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-secondary-100 dark:bg-secondary-900/20 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-xl md:text-2xl font-medium text-primary-600 dark:text-primary-400 mb-4">
              Hello, I'm
            </h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              <TypeAnimation
                sequence={[ 'Deepanshu Singh', 2000 ]}
                wrapper="span"
                speed={45}
                repeat={Infinity}
              />
            </h1>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <h3 className="text-xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
                Front End Developer
              </span>{' '}
              & UI Designer
            </h3>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-10 text-lg"
          >
            I create beautiful, responsive, and user-friendly web applications
            with modern technologies. Let's build something amazing together.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="flex flex-wrap gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-full transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 bg-white dark:bg-gray-800 text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 font-medium rounded-full border border-primary-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-gray-600 transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View My Work
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="flex gap-6 mt-12">
            <a
              href="https://github.com/DeepanshuSingh2104"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/deepanshu-singh-41986b2b7/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={handleScrollDown}
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={32} className="text-gray-600 dark:text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;