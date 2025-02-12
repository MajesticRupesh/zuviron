import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxBackgroundProps {
  imageUrl: string;
  overlayColor?: string;
  children: React.ReactNode;
  className?: string;
}

const ParallaxBackground = ({ 
  imageUrl, 
  overlayColor = 'from-gray-900/90 to-gray-900/70', 
  children,
  className = ''
}: ParallaxBackgroundProps) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section className={`relative overflow-hidden ${className}`}>
      <motion.div 
        className="absolute inset-0"
        style={{ y }}
      >
        <img 
          src={imageUrl}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${overlayColor}`} />
      </motion.div>
      <div className="relative container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

export default ParallaxBackground; 