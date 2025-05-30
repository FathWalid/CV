import React from 'react';

interface SectionTitleProps {
  title: string;
  icon: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, icon }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="inline-flex items-center justify-center p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mb-3">
        {icon}
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
        {title}
      </h2>
      <div className="w-24 h-1 bg-blue-600 dark:bg-blue-500 rounded-full mt-4"></div>
    </div>
  );
};

export default SectionTitle;