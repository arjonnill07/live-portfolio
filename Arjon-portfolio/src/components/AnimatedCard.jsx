import React from 'react';

const AnimatedCard = ({ children, className = "" }) => (
  <div className={`transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl rounded-xl p-6 ${className}`}>
    {children}
  </div>
);

export default AnimatedCard;
