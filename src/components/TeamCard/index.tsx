import React from 'react';

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  gradient: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, role, image, gradient }) => {
  return (
    <div className="group cursor-pointer w-full max-w-sm mx-auto">
      {/* Gradient border wrapper */}
      <div 
        className="p-1 rounded-3xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        style={{ background: gradient }}
      >
        {/* Inner card with white background for border effect */}
        <div className="bg-white rounded-3xl overflow-hidden">
          {/* Main content area with full-width image */}
          <div className="aspect-square relative overflow-hidden">
            {/* Full-width profile image */}
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
            
            {/* Gradient overlay for better text contrast */}
            <div 
              className="absolute"
              style={{ background: gradient }}
            ></div>
            
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-white/30"></div>
            <div className="absolute top-4 right-10 w-2 h-2 rounded-full bg-white/20"></div>
            <div className="absolute bottom-4 left-4 w-4 h-4 rounded-full bg-white/20"></div>
          </div>
          
          {/* White bottom section with text */}
          <div className="bg-white px-6 py-6 text-center">
            <h3 className="text-gray-900 text-xl font-bold mb-1">
              {name}
            </h3>
            <p className="text-gray-600 text-sm font-medium">
              {role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
