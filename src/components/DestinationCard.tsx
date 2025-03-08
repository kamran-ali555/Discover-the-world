import React from 'react';

interface DestinationCardProps {
  title: string;
  description: string;
  image: string;
  price: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ title, description, image, price }) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-1 rounded-full text-white font-semibold transform -translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
          ${price}
        </div>
      </div>
      <div className="p-6 bg-gradient-to-b from-white to-gray-50">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 rounded-lg transform hover:translate-y-[-2px] hover:shadow-lg transition-all duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default DestinationCard;