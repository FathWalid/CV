import React, { useEffect, useRef } from 'react';
import { Globe, Languages as LanguagesIcon } from 'lucide-react';
import SectionTitle from './SectionTitle';

interface LanguageType {
  name: string;
  level: string;
  percentage: number;
}

const Languages: React.FC = () => {
  const languagesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          
          // Animate progress circles
          const circles = entry.target.querySelectorAll('.progress-circle');
          circles.forEach((circle, index) => {
            setTimeout(() => {
              const percentage = parseInt((circle as HTMLElement).dataset.percentage || '0');
              const circumference = 2 * Math.PI * 45;
              const strokeDashoffset = circumference - (percentage / 100) * circumference;
              (circle as SVGCircleElement).style.strokeDashoffset = String(strokeDashoffset);
            }, index * 200);
          });
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-50px 0px',
      }
    );

    if (languagesRef.current) {
      observer.observe(languagesRef.current);
    }

    return () => {
      if (languagesRef.current) {
        observer.unobserve(languagesRef.current);
      }
    };
  }, []);

  const languages: LanguageType[] = [
    {
      name: "Arabe",
      level: "Natif",
      percentage: 100
    },
    {
      name: "Français",
      level: "Courant",
      percentage: 90
    },
    {
      name: "Anglais",
      level: "Intermédiaire",
      percentage: 75
    }
  ];

  return (
    <section id="languages" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Langues" 
          icon={<LanguagesIcon className="text-blue-600 dark:text-blue-400" />} 
        />
        
        <div 
          ref={languagesRef}
          className="max-w-4xl mx-auto mt-10 transform transition-all duration-1000 opacity-0 translate-y-10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {languages.map((language, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-all duration-300"
              >
                <div className="relative w-32 h-32 flex items-center justify-center mb-4">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    {/* Background circle */}
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="45" 
                      fill="none" 
                      stroke="#e5e7eb" 
                      strokeWidth="8" 
                      className="dark:stroke-gray-700"
                    />
                    {/* Progress circle */}
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="45" 
                      fill="none" 
                      stroke="#3b82f6" 
                      strokeWidth="8" 
                      strokeLinecap="round" 
                      strokeDasharray={`${2 * Math.PI * 45}`} 
                      strokeDashoffset={`${2 * Math.PI * 45}`} 
                      className="progress-circle dark:stroke-blue-500 transition-all duration-1000 ease-out" 
                      data-percentage={language.percentage}
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center justify-center">
                    <Globe className="text-blue-600 dark:text-blue-400 mb-1" size={24} />
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      {language.percentage}%
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {language.name}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  {language.level}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;