import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
}

const FloatingElement = ({ 
  children, 
  className = '', 
  delay = 0,
  duration = 4,
  yOffset = 15
}: FloatingElementProps) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ 
        y: [-yOffset, yOffset, -yOffset]
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FloatingElement; 