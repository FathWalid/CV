import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-xl font-bold text-blue-400">Walid FATH</p>
            <p className="text-gray-400 text-sm mt-1">Ingénierie Informatique & Réseaux</p>
          </div>
          
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a 
              href="https://github.com/walidfath" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="www.linkedin.com/in/walid-fath-isga" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:walidfath02@gmail.com" 
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
        
        <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Walid FATH. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;