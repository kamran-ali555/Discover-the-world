import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  text: string;
  rating: number;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, text, rating, image }) => {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
      <div className="flex items-center mb-4">
        <div className="relative">
          <img 
            src={image} 
            alt={name} 
            className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-blue-600 ring-offset-2"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/20 to-transparent"></div>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <div className="flex text-yellow-400">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 italic relative">
        <span className="absolute -top-2 -left-2 text-4xl text-blue-600/20">"</span>
        {text}
        <span className="absolute -bottom-4 -right-2 text-4xl text-blue-600/20">"</span>
      </p>
    </div>
  );
};

export default TestimonialCard;