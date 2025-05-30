import React, { useEffect, useRef } from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import SectionTitle from './SectionTitle';

interface EducationItemProps {
  period: string;
  degree: string;
  institution: string;
  description?: string;
  delay: number;
}

const EducationItem: React.FC<EducationItemProps> = ({ 
  period, 
  degree, 
  institution, 
  description,
  delay 
}) => {
  const itemRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('opacity-100', 'translate-x-0');
            entry.target.classList.remove('opacity-0', 'translate-x-10');
          }, delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-50px 0px',
      }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={itemRef}
      className="relative pl-8 pb-8 border-l-2 border-blue-500 dark:border-blue-700 transform transition-all duration-700 opacity-0 translate-x-10"
    >
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-500 border-4 border-white dark:border-gray-900"></div>
      
      <div className="flex items-center mb-2 text-gray-600 dark:text-gray-400">
        <Calendar size={16} className="mr-2" />
        <span className="text-sm">{period}</span>
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
        {degree}
      </h3>
      
      <p className="text-gray-700 dark:text-gray-300 mb-2">
        {institution}
      </p>
      
      {description && (
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          {description}
        </p>
      )}
    </div>
  );
};

const Education: React.FC = () => {
  const educationRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0');
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-50px 0px',
      }
    );

    if (educationRef.current) {
      observer.observe(educationRef.current);
    }

    return () => {
      if (educationRef.current) {
        observer.unobserve(educationRef.current);
      }
    };
  }, []);

  const educationItems = [
    {
      period: "2023 - aujourd'hui",
      degree: "Ingénierie Informatique et Réseaux",
      institution: "ISGA",
      description: "Spécialisation en développement Web et Mobile",
      delay: 0
    },
    {
      period: "2020 - 2023",
      degree: "Licence en Sciences Économiques et Gestion",
      institution: "FSJES Agdal",
      description: "Administration et gestion d'entreprise",
      delay: 200
    },
    {
      period: "2019 - 2020",
      degree: "Bac Sciences Physiques",
      institution: "Lycée Mohammed VI, Oulmès",
      delay: 400
    }
  ];

  return (
    <section id="education" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Formation" 
          icon={<GraduationCap className="text-blue-600 dark:text-blue-400" />} 
        />
        
        <div 
          ref={educationRef}
          className="max-w-3xl mx-auto mt-10 transform transition-all duration-1000 opacity-0"
        >
          {educationItems.map((item, index) => (
            <EducationItem 
              key={index}
              period={item.period}
              degree={item.degree}
              institution={item.institution}
              description={item.description}
              delay={item.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;