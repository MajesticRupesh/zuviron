import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import ParallaxBackground from '../components/ui/ParallaxBackground';
import AnimatedCard from '../components/ui/AnimatedCard';
import FloatingElement from '../components/ui/FloatingElement';
import GradientText from '../components/ui/GradientText';
import BackgroundPattern from '../components/ui/BackgroundPattern';

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="relative overflow-x-hidden">
      {/* Hero Section with 3D Perspective */}
      <div className="relative min-h-screen perspective-1000">
        <motion.div 
          className="absolute inset-0 origin-top"
          style={{ scale, opacity }}
        >
          <ParallaxBackground 
            imageUrl="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
            className="h-full"
          >
            
            <div className="absolute inset-0 mix-blend-color-dodge opacity-30">
              <BackgroundPattern color="text-brand-300" />
            </div>
            
            <div className="relative w-full h-full flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="container mx-auto px-4 pt-20 md:pt-24"
              >
                <div className="text-center max-w-4xl mx-auto">
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-white"
                  >
                    Transform
                    <GradientText gradient="from-brand-300 via-brand-400 to-brand-500" className="mx-2 md:mx-4">
                      Waste
                    </GradientText>
                    into
                    <br className="hidden sm:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-200 via-brand-300 to-brand-100">
                      Future
                    </span>
                  </motion.h1>
                  
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-12 text-gray-200 max-w-2xl mx-auto px-4"
                  >
                    Revolutionizing construction with sustainable materials through innovative waste management solutions.
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                    className="flex flex-wrap gap-4 md:gap-6 justify-center"
                  >
                    <Link
                      to="/products"
                      className="group relative overflow-hidden rounded-full px-6 sm:px-8 py-3 sm:py-4 bg-brand-500 text-white hover:bg-brand-600 transition-all duration-300"
                    >
                      <span className="relative z-10 font-medium">Explore Products</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-brand-600 to-brand-400"
                        initial={{ x: '100%' }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                    <Link
                      to="/contact"
                      className="group relative overflow-hidden rounded-full px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white hover:border-brand-400 transition-all duration-300"
                    >
                      <span className="relative z-10">Contact Us</span>
                      <motion.div
                        className="absolute inset-0 bg-white/10"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </ParallaxBackground>
        </motion.div>
      </div>

      {/* Features Section with Glassmorphism */}
      <section className="relative py-32 md:py-40 bg-gradient-to-b from-gray-900 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <BackgroundPattern color="text-brand-200" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <GradientText 
              gradient="from-brand-200 via-brand-300 to-brand-100" 
              className="text-4xl md:text-5xl font-bold mb-8"
            >
              Why Choose Zuviron?
            </GradientText>
            <p className="text-gray-300 text-lg md:text-xl">
              Our innovative approach creates sustainable solutions for the future of construction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {features.map((feature, index) => (
              <AnimatedCard
                key={feature.title}
                delay={index * 0.2}
                className="group backdrop-blur-lg bg-white/10 border border-white/20 hover:border-brand-400/30 transition-colors duration-300"
              >
                <div className="p-8 md:p-10">
                  <FloatingElement
                    className="text-6xl mb-8 text-brand-300"
                    delay={index * 0.2}
                  >
                    {feature.icon}
                  </FloatingElement>
                  <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-brand-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-lg">{feature.description}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-500/0 via-brand-500/5 to-brand-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-white py-32 md:py-40 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
            Ready to Make a{' '}
            <GradientText gradient="from-brand-600 via-brand-500 to-brand-700" className="inline-block">
              Sustainable Impact?
            </GradientText>
          </h2>
          <p className="text-xl mb-12 text-gray-600 max-w-2xl mx-auto">
            Join us in our mission to create a cleaner, more sustainable future through innovative waste management solutions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-12 py-5 rounded-full text-white bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-700 hover:to-brand-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-brand-500/25"
          >
            Get Started Today
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

const features = [
  {
    title: 'Eco-Friendly Innovation',
    description: 'Revolutionary process converting waste into premium construction materials while reducing environmental impact.',
    icon: '🌱',
  },
  {
    title: 'Superior Performance',
    description: 'Engineered materials that exceed industry standards for durability, strength, and thermal efficiency.',
    icon: '⭐',
  },
  {
    title: 'Future-Ready Solutions',
    description: 'Customizable, scalable products designed to meet evolving construction needs and sustainability goals.',
    icon: '🎯',
  },
];

export default Home; 