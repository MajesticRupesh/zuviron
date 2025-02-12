import { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  gradient?: string;
}

const GradientText = ({ 
  children, 
  className = '',
  gradient = 'from-green-400 via-green-600 to-green-800'
}: GradientTextProps) => {
  return (
    <span className={`bg-gradient-to-r ${gradient} text-transparent bg-clip-text ${className}`}>
      {children}
    </span>
  );
};

export default GradientText; 