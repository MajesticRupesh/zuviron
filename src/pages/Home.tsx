import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ParallaxBackground from '../components/ui/ParallaxBackground';
import AnimatedCard from '../components/ui/AnimatedCard';
import FloatingElement from '../components/ui/FloatingElement';
import GradientText from '../components/ui/GradientText';
import BackgroundPattern from '../components/ui/BackgroundPattern';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <ParallaxBackground 
        imageUrl="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
        className="min-h-[90vh] flex items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Transforming Waste into{' '}
            <GradientText gradient="from-green-300 via-green-400 to-green-500">
              Sustainable Solutions
            </GradientText>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            We convert thermocol waste into high-quality building materials, creating a circular economy for a sustainable future.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/products"
              className="btn btn-primary group relative overflow-hidden"
            >
              <span className="relative z-10">Explore Products</span>
              <div className="absolute inset-0 bg-green-700 transform translate-y-full transition-transform group-hover:translate-y-0" />
            </Link>
            <Link
              to="/contact"
              className="btn btn-secondary text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </ParallaxBackground>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-50 relative">
        <BackgroundPattern />
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <GradientText className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Zuviron?
            </GradientText>
            <p className="text-gray-600 text-lg">
              Our innovative approach to waste management creates sustainable solutions for the construction industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedCard
                key={feature.title}
                delay={index * 0.2}
                className="group"
              >
                <div className="relative h-48 bg-gray-100">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-green-600/10 group-hover:bg-green-600/20 transition-colors duration-300" />
                </div>
                <div className="p-8">
                  <FloatingElement
                    className="text-green-600 mb-4 text-4xl"
                    delay={index * 0.2}
                  >
                    {feature.icon}
                  </FloatingElement>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ParallaxBackground 
        imageUrl="https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?auto=format&fit=crop&q=80"
        overlayColor="from-green-600/95 to-green-800/90"
        className="py-24 text-white"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make a Sustainable Impact?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in our mission to create a cleaner, more sustainable future through innovative waste management solutions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 rounded-lg text-green-600 bg-white font-semibold hover:bg-gray-100 hover:scale-105 transform transition-all duration-300"
          >
            Get Started Today
          </Link>
        </motion.div>
      </ParallaxBackground>
    </div>
  );
};

const features = [
  {
    title: 'Eco-Friendly Materials',
    description: 'Our products are made from 100% recycled thermocol waste, reducing landfill impact and carbon footprint.',
    icon: '🌱',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80'
  },
  {
    title: 'Superior Quality',
    description: 'Rigorous testing ensures our materials meet or exceed industry standards for durability and performance.',
    icon: '⭐',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80'
  },
  {
    title: 'Customizable Solutions',
    description: 'We work closely with clients to create tailored solutions that meet specific project requirements.',
    icon: '🎯',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80'
  },
];

export default Home; 