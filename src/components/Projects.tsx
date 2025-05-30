import React, { useState, useEffect, useRef } from 'react';
import { FolderKanban, ExternalLink, Code2 } from 'lucide-react';
import SectionTitle from './SectionTitle';

interface ProjectType {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number>(0);
  const projectsRef = useRef<HTMLDivElement>(null);
  
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

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  const projects: ProjectType[] = [
    {
      title: "ArenaGo",
      description: "Plateforme web de réservation d'espaces sportifs permettant aux utilisateurs de trouver et réserver des terrains de sport en fonction de leur localisation et disponibilité.",
      technologies: ["React.js", "Node.js", "MongoDB", "JWT", "FullCalendar", "Notifications email"],
      image: "https://i.ibb.co/39SbRw8j/Capture-d-cran-2025-05-30-194705.png",
      githubUrl: "https://github.com/FathWalid/ArenaGo",
      liveUrl: "https://arenago.vercel.app/"
    },
    {
      title: "Write4us",
      description: "Plateforme collaborative de rédaction permettant à plusieurs auteurs de travailler ensemble sur des projets d'écriture avec gestion des versions et commentaires en temps réel.",
      technologies: ["Laravel", "PHP", "Bootstrap", "MySQL"],
      image: "https://i.ibb.co/nssY20fX/Capture-d-cran-2025-05-27-195255.png",
      githubUrl: "https://github.com/FathWalid/Write4us"
    },
    {
      title: "🛒 Manage My Store ",
      description: "Application de gestion de stock et de ventes pour points de vente physiques.Développée en Java (Swing) avec PostgreSQL, cette application suit une architecture MVC en trois couches (interface, logique métier, base de données). Elle permet la gestion complète des produits, fournisseurs, clients et ventes",
      technologies: ["Java Swing", "PostgreSQL", "JDBC", "NetBeans"],
      image: "https://i.ibb.co/7NxrW5S9/Whats-App-Image-2025-05-30-at-19-54-57.jpg",
      githubUrl: "https://github.com/FathWalid/-Manage-My-Store"
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Projets" 
          icon={<FolderKanban className="text-blue-600 dark:text-blue-400" />} 
        />
        
        <div 
          ref={projectsRef}
          className="max-w-6xl mx-auto mt-10 transform transition-all duration-1000 opacity-0 translate-y-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`p-4 text-left rounded-lg transition-all duration-300 ${
                  activeProject === index 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-700'
                }`}
              >
                <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                <p className={`text-sm ${
                  activeProject === index ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'
                }`}>
                  {project.technologies.slice(0, 2).join(', ')}
                  {project.technologies.length > 2 ? ', ...' : ''}
                </p>
              </button>
            ))}
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="h-64 md:h-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
                  <img 
                    src={projects[activeProject].image} 
                    alt={projects[activeProject].title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
              
              <div className="md:w-1/2 p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {projects[activeProject].title}
                </h3>
                
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {projects[activeProject].description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Technologies utilisées:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[activeProject].technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  {projects[activeProject].githubUrl && (
                    <a 
                      href={projects[activeProject].githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300"
                    >
                      <Code2 size={18} className="mr-2" />
                      <span>Code</span>
                    </a>
                  )}
                  
                  {projects[activeProject].liveUrl && (
                    <a 
                      href={projects[activeProject].liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                      <ExternalLink size={18} className="mr-2" />
                      <span>Voir le projet</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;