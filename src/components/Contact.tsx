import React, { useEffect, useRef } from 'react';
import { Mail, Send, MapPin, Phone, Linkedin } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Contact: React.FC = () => {
  const contactRef = useRef<HTMLDivElement>(null);

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

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Contact" 
          icon={<Mail className="text-blue-600 dark:text-blue-400" />} 
        />

        <div 
          ref={contactRef}
          className="max-w-5xl mx-auto mt-10 transform transition-all duration-1000 opacity-0 translate-y-10"
        >
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/5 bg-gradient-to-br from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-900 p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Mes coordonnées</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">Localisation</h4>
                      <p className="text-blue-100">Rabat, Maroc</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <a 
                        href="mailto:walidfath02@gmail.com"
                        className="text-blue-100 hover:text-white transition-colors duration-300"
                      >
                        walidfath02@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">Téléphone</h4>
                      <a 
                        href="tel:+212650190927"
                        className="text-blue-100 hover:text-white transition-colors duration-300"
                      >
                        06 50 19 09 27
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Linkedin className="mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">LinkedIn</h4>
                      <a 
                        href="https://www.linkedin.com/in/walid-fath-isga"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-100 hover:text-white transition-colors duration-300"
                      >
                        WALID FATH
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-3/5 p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Envoyez-moi un message
                </h3>

                <form
                  action="https://formsubmit.co/walidfath02@gmail.com"
                  method="POST"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Nom
                      </label>
                      <input 
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email
                      </label>
                      <input 
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Sujet
                    </label>
                    <input 
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea 
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 resize-none"
                    />
                  </div>

                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value="https://ton-site.com/merci" />

                  <button 
                    type="submit"
                    className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    <Send size={18} className="mr-2" />
                    Envoyer le message
                  </button>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
