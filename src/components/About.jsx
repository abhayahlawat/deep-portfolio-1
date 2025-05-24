import React, { useState, useEffect } from 'react';
import { Layout, Database, Gauge } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once triggered
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px' // Trigger earlier
      }
    );

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      name: 'Frontend Development',
      icon: <Layout className="w-6 h-6 text-primary-500" />,
      description:
        'Creating responsive and interactive user interfaces with modern frameworks and libraries.',
      technologies: ['React', 'JavaScript', 'Next.js', 'TailwindCSS'],
    },
    {
      name: 'Database Management',
      icon: <Database className="w-6 h-6 text-primary-500" />,
      description:
        'Designing and optimizing database schemas for efficient data storage.',
      technologies: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase'],
    },
    {
      name: 'Performance Optimization',
      icon: <Gauge className="w-6 h-6 text-primary-500" />,
      description:
        'Improving application speed and efficiency through advanced techniques.',
      technologies: ['Webpack', 'Lighthouse', 'Chrome DevTools', 'GTmetrix'],
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-primary-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className={`transition-all duration-700 ease-out delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">My Journey</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              I'm a passionate front-end developer with over 3 years of experience in creating modern web applications. My journey began with a fascination for how things work on the web, which led me to dive deep into both frontend and backend technologies.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I believe in clean, efficient code and user-centered design. My goal is to build applications that not only look great but also provide exceptional user experiences. I'm constantly learning and exploring new technologies to stay at the forefront of web development.
            </p>
            <div className="flex flex-wrap gap-2">
              {['JavaScript', 'React', 'Next.js', 'Python'].map((tech) => (
                <span key={tech} className="bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className={`relative aspect-square max-w-md mx-auto transition-all duration-700 ease-out delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-secondary-500 rounded-2xl transform rotate-6"></div>
            <img
              src="https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg"
              alt="Deepanshu Singh"
              className="relative z-10 object-cover w-full h-full rounded-2xl shadow-xl"
              loading="lazy"
            />
          </div>
        </div>

        {/* Skills Header */}
        <h3 className={`text-2xl font-bold text-center text-gray-900 dark:text-white mb-12 transition-all duration-700 ease-out delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          My Expertise
        </h3>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-700 ease-out border border-gray-100 dark:border-gray-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${500 + (index * 100)}ms`
              }}
            >
              <div className="bg-primary-50 dark:bg-primary-900/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                {skill.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {skill.name}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {skill.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech) => (
                  <span key={tech} className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
