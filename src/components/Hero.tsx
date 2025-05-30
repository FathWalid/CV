import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="hero" 
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div 
        ref={heroRef}
        className="container mx-auto px-4 transform transition-all duration-1000 opacity-0 translate-y-10"
      >
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
            Walid <span className="text-blue-600 dark:text-blue-400">FATH</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
            Ingénierie Informatique & Réseaux
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <MapPin size={18} className="mr-2" />
              <span>Rabat, Maroc</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <Mail size={18} className="mr-2" />
              <span>walidfath02@gmail.com</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <span>06 50 19 09 27</span>
            </div>
          </div>
          
          <div className="flex justify-center space-x-5">
            <a 
              href="https://www.linkedin.com/in/walid-fath-isga" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} className="text-blue-600 dark:text-blue-400" />
            </a>
            <a 
              href="https://github.com/FathWalid" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={24} className="text-gray-800 dark:text-gray-300" />
            </a>
            <a 
              href="mailto:walidfath02@gmail.com" 
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={24} className="text-red-500 dark:text-red-400" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 text-center animate-bounce">
        <a 
          href="#about" 
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-block p-2 rounded-full bg-white dark:bg-gray-800 shadow-md"
          aria-label="Scroll down"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-blue-600 dark:text-blue-400" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;