import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setScrolled(scrollY > 50);
  }, []);

  useEffect(() => {
    // Throttle scroll events for better performance
    let ticking = false;
    
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [handleScroll]);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const handleNavClick = useCallback((sectionId) => {
    setIsOpen(false);
    
    // Use setTimeout to ensure menu closes before scrolling
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({ 
          top: elementPosition, 
          behavior: 'smooth' 
        });
      }
    }, 50); // Reduced timeout for snappier feel
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('header')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className={`transform transition-all duration-500 ${
              scrolled ? 'scale-100' : 'scale-100'
            }`}>
              <button
                className="text-2xl font-bold text-gray-900 dark:text-white outline-none transition-all duration-200 hover:scale-105"
                onClick={() => handleNavClick('home')}
                aria-label="Go to home section"
              >
                <span className="text-primary-500">Deepanshu</span>
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item, index) => (
                <button
                  key={item.id}
                  className={`text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 font-medium transition-all duration-200 outline-none rounded-md px-3 py-2 relative group transform transition-transform duration-200 hover:scale-105 ${
                    scrolled ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'
                  }`}
                  onClick={() => handleNavClick(item.id)}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animation: 'fadeInDown 0.6s ease-out forwards'
                  }}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                className="text-gray-700 dark:text-gray-300 outline-none p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                onClick={toggleMenu}
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
              >
                <div className="relative w-6 h-6">
                  <span className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                    isOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
                  }`}>
                    <Menu size={24} />
                  </span>
                  <span className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                    isOpen ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'
                  }`}>
                    <X size={24} />
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden overflow-hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 py-2">
            {navigationItems.map((item, index) => (
              <button
                key={item.id}
                className={`flex items-center w-full py-3 text-left text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 font-medium outline-none hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md px-3 transition-all duration-200 transform ${
                  isOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                }`}
                onClick={() => handleNavClick(item.id)}
                style={{ 
                  transitionDelay: isOpen ? `${index * 50}ms` : '0ms'
                }}
              >
                <ChevronRight size={16} className="mr-2 transition-transform duration-200 group-hover:translate-x-1" />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className={`fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden z-30 transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Add required keyframes */}
      <style jsx>{`
        @keyframes fadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Header;