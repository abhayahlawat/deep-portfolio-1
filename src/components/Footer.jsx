import React from 'react';
import { ChevronUp, Github } from 'lucide-react';

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold">
              <span className="text-primary-500">Deepanshu</span>
            </a>
            <p className="text-gray-400 mt-2 max-w-md">
              Creating beautiful digital experiences that make a difference. Let's bring your vision to life together.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={handleScrollToTop}
              className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full mb-4 transition-colors duration-300"
              aria-label="Scroll to top"
            >
              <ChevronUp size={24} />
            </button>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/deepanshu-singh-41986b2b7/"
                className="text-gray-400 hover:text-primary-500 transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="https://github.com/DeepanshuSingh2104"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-300"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Deepanshu. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;