
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
  icon?: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, link, icon }) => {
  return (
    <div className="glass-card p-6 h-full flex flex-col">
      {icon && <div className="text-teal mb-4">{icon}</div>}
      <h3 className="text-xl font-serif font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <Link 
        to={link} 
        className="inline-flex items-center text-teal hover:text-teal-light font-medium transition-colors mt-auto"
      >
        Learn More <ArrowRight className="ml-2 w-4 h-4" />
      </Link>
    </div>
  );
};

export default ServiceCard;
