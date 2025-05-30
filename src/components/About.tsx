import React, { useEffect, useRef } from 'react';
import { User, MapPin, Mail, Phone, Linkedin } from 'lucide-react';
import SectionTitle from './SectionTitle';

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  
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
        rootMargin: '-50px 0px',
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle title="À propos" icon={<User className="text-blue-600 dark:text-blue-400" />} />
        
        <div 
          ref={aboutRef}
          className="max-w-4xl mx-auto mt-10 transform transition-all duration-1000 opacity-0 translate-y-10"
        >
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-1 p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Walid FATH
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <MapPin size={18} className="mr-3 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                    <span>Rabat, Maroc</span>
                  </div>
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <Mail size={18} className="mr-3 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                    <span>walidfath02@gmail.com</span>
                  </div>
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <Phone size={18} className="mr-3 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                    <span>06 50 19 09 27</span>
                  </div>
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <Linkedin size={18} className="mr-3 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                    <span>WALID FATH</span>
                  </div>
                </div>
                
                <div className="prose dark:prose-invert">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Étudiant en 4ᵉ année à l'ISGA, passionné par le développement logiciel, 
                    DevOps, et les systèmes cloud. Motivé par l'apprentissage continu et 
                    la résolution de problèmes complexes, je cherche à approfondir mes connaissances 
                    et à acquérir de l'expérience dans le domaine de l'ingénierie informatique.
                  </p>
                </div>
              </div>
              
              <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-900 p-8 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-white mb-4">Profil Professionnel</h3>
                <ul className="space-y-2 text-white">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Développement Full Stack</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Architecture Cloud</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>DevOps & CI/CD</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Analyse de données</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Gestion de projets agile</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;