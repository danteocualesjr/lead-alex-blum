
import React from 'react';
import { Link } from 'react-router-dom';

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  buttonVariant?: 'primary' | 'secondary';
}

const CTASection: React.FC<CTASectionProps> = ({ 
  title, 
  description, 
  buttonText, 
  buttonLink,
  buttonVariant = 'primary'
}) => {
  return (
    <section className="py-16 bg-navy text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-serif font-bold mb-4">{title}</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">{description}</p>
        <Link 
          to={buttonLink} 
          className={buttonVariant === 'primary' ? 'btn-primary' : 'btn-secondary'}
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
