
import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="bg-navy text-white py-20 pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-center mb-4 fade-in">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-300 text-center max-w-3xl mx-auto fade-in">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
