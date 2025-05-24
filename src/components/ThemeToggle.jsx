import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleDarkMode}
      className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-3 rounded-full shadow-lg hover:shadow-xl focus:outline-none transition-all duration-300"
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? (
        <Sun size={20} className="text-amber-500" />
      ) : (
        <Moon size={20} className="text-primary-600" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;