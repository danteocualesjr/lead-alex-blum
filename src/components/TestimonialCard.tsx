
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, position }) => {
  return (
    <div className="glass-card p-6 flex flex-col h-full">
      <div className="mb-4 text-3xl text-teal">"</div>
      <p className="text-gray-700 italic mb-6 flex-grow">{quote}</p>
      <div>
        <p className="font-medium text-navy">{author}</p>
        {position && <p className="text-sm text-gray-500">{position}</p>}
      </div>
    </div>
  );
};

export default TestimonialCard;
