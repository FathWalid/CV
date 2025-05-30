import React, { useEffect, useRef } from 'react';
import { Award, ExternalLink } from 'lucide-react';
import SectionTitle from './SectionTitle';

interface CertificationType {
  title: string;
  issuer: string;
  date: string;
  image: string;
  url?: string;
}

const Certifications: React.FC = () => {
  const certificationsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          
          // Animate cards
          const cards = entry.target.querySelectorAll('.cert-card');
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('opacity-100', 'translate-y-0');
              card.classList.remove('opacity-0', 'translate-y-10');
            }, index * 100);
          });
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-50px 0px',
      }
    );

    if (certificationsRef.current) {
      observer.observe(certificationsRef.current);
    }

    return () => {
      if (certificationsRef.current) {
        observer.unobserve(certificationsRef.current);
      }
    };
  }, []);

  const certifications: CertificationType[] = [
    {
      title: "Docker Foundations Professional Certificate",
      issuer: "Docker",
      date: "2025",
      image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      url: "https://media.licdn.com/dms/image/v2/D5622AQHOyyIYRL3EAw/feedshare-shrink_1280/B56ZYCq5UrHoAk-/0/1743801521705?e=1751500800&v=beta&t=h_3QT8CGMFReiv1oeeCM8cRJywr29NxdhxnOHYlNvU8"
    },
    {
      title: "LambdaTest Software Testing Professional Certificate",
      issuer: "LambdaTest",
      date: "2025",
      image: "https://blog.qasource.com/hs-fs/hubfs/what-is-lambda-testing-and-how-to-test-lambda-function.png?width=564&height=379&name=what-is-lambda-testing-and-how-to-test-lambda-function.png",
      url: "https://media.licdn.com/dms/image/v2/D5622AQFPJqvRqO4x0A/feedshare-shrink_1280/B56Zciu0GyGsAo-/0/1748634387230?e=1751500800&v=beta&t=iWPKeIiG0fAoHXhbF3LsWCiEhjxrRhhq9dDRYZ9tP98"
    },
    {
      title: "JavaScript Foundations Professional Certificate by Mozilla",
      issuer: "Mozilla",
      date: "2025",
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      url: "https://media.licdn.com/dms/image/v2/D5622AQF2JV9p7Afiyw/feedshare-shrink_1280/B56ZYHCwBWHEAk-/0/1743874883939?e=1751500800&v=beta&t=G0WFYhxAi1ftXojFJM-lsZeiPcwHECuoaZsC7W8GXfU"
    },
    {
      title: "OpenEDG Python Institute: Programming with Python Professional Certificate",
      issuer: "OpenEDG Python Institute",
      date: "2025",
      image: "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      url: "https://media.licdn.com/dms/image/v2/D5622AQEpiFiqS58cjg/feedshare-shrink_1280/B56ZYBhJAvHEAk-/0/1743782187307?e=1751500800&v=beta&t=YBpeXjM-pdn0WWH19zni8NwiOjCjL3jUunQEuYiTuFU"
    },
    {
      title: "Career Essentials in Data Analysis by Microsoft",
      issuer: "Microsoft",
      date: "2025",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      url: "https://media.licdn.com/dms/image/v2/D5622AQFZdJVFYuO0Iw/feedshare-shrink_1280/B56ZYGcg8tHEAk-/0/1743864860712?e=1751500800&v=beta&t=pQhsMKCzJYHTztJQRDCOnWxpjD58B2jarPWPiQaqxPo"
    },
    {
      title: "Atlassian Agile Project Management Professional Certificate",
      issuer: "Atlassian",
      date: "2025",
      image: "https://cdn.prod.website-files.com/5c29380b1110ec92a203aa84/5c43ff7e27353e502b27fe3a_corporate-deck%402x_V2.png",
      url: "https://media.licdn.com/dms/image/v2/D5622AQGSDfK_b60lWA/feedshare-shrink_1280/B56ZYIzy_rH0Ak-/0/1743904518421?e=1751500800&v=beta&t=1CavwHrkXwT2kpoV_V5WqK7JawooEMAZH8tM9uS8d2E"
    }
  ];

  return (
    <section id="certifications" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Certifications" 
          icon={<Award className="text-blue-600 dark:text-blue-400" />} 
        />
        
        <div 
          ref={certificationsRef}
          className="max-w-5xl mx-auto mt-10 transform transition-all duration-1000 opacity-0 translate-y-10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="cert-card bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-500 opacity-0 translate-y-10"
              >
                <div className="h-40 overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {cert.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                    {cert.issuer} • {cert.date}
                  </p>
                  
                  {cert.url && (
                    <a 
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium transition-colors duration-300"
                    >
                      <span>Voir le certificat</span>
                      <ExternalLink size={14} className="ml-1" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;