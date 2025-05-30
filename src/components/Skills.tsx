import React, { useEffect, useRef } from 'react';
import { Code, Database, ServerCog, BarChart3 } from 'lucide-react';
import SectionTitle from './SectionTitle';

interface SkillType {
  name: string;
  level: number;
}

interface SkillCategoryType {
  title: string;
  icon: React.ReactNode;
  skills: SkillType[];
}

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          
          // Animate progress bars
          const progressBars = entry.target.querySelectorAll('.progress-bar');
          progressBars.forEach((bar, index) => {
            setTimeout(() => {
              (bar as HTMLElement).style.width = (bar as HTMLElement).dataset.width || '0%';
            }, index * 100);
          });
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-50px 0px',
      }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const skillCategories: SkillCategoryType[] = [
    {
      title: 'Langages de programmation',
      icon: <Code className="text-indigo-600 dark:text-indigo-400\" size={24} />,
      skills: [
        { name: 'Python', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'PHP', level: 75 },
        { name: 'JavaScript', level: 90 },
      ]
    },
    {
      title: 'Frameworks & Bibliothèques',
      icon: <ServerCog className="text-green-600 dark:text-green-400" size={24} />,
      skills: [
        { name: 'Laravel', level: 80 },
        { name: 'React.js', level: 85 },
        { name: 'Node.js (Express)', level: 75 },
      ]
    },
    {
      title: 'Bases de données',
      icon: <Database className="text-red-600 dark:text-red-400\" size={24} />,
      skills: [
        { name: 'PostgreSQL', level: 80 },
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 70 },
      ]
    },
    {
      title: 'Outils & Technologies',
      icon: <BarChart3 className="text-amber-600 dark:text-amber-400" size={24} />,
      skills: [
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'Power BI', level: 80 },
        { name: 'JWT', level: 75 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionTitle title="Compétences techniques" icon={<Code className="text-blue-600 dark:text-blue-400" />} />
        
        <div 
          ref={skillsRef}
          className="max-w-5xl mx-auto mt-10 transform transition-all duration-1000 opacity-0 translate-y-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  {category.icon}
                  <h3 className="text-xl font-bold ml-3 text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div 
                          className="progress-bar h-2.5 rounded-full bg-blue-600 dark:bg-blue-500 transition-all duration-1000 ease-out" 
                          style={{ width: '0%' }}
                          data-width={`${skill.level}%`}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;