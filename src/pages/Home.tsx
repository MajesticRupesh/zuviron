import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';

const fadeIn: Variants = {
  initial: { 
    opacity: 0, 
    y: 20 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const stagger: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] bg-gray-900 text-white flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
            alt="Sustainable building" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-gray-900/90" />
        </div>
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="max-w-3xl"
          >
            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Transforming Waste into Sustainable Building Solutions
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-xl md:text-2xl mb-8 text-gray-200"
            >
              We convert thermocol waste into high-quality building materials, creating a circular economy for a sustainable future.
            </motion.p>
            <motion.div 
              variants={fadeIn}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/products"
                className="btn btn-primary"
              >
                Explore Products
              </Link>
              <Link
                to="/contact"
                className="btn btn-secondary text-white bg-white/10 hover:bg-white/20"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Zuviron?
            </h2>
            <p className="text-gray-600 text-lg">
              Our innovative approach to waste management creates sustainable solutions for the construction industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:-translate-y-2"
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
                  <div className="text-green-600 mb-4 text-4xl">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?auto=format&fit=crop&q=80"
            alt="Sustainable future" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-green-600/90" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Make a Sustainable Impact?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join us in our mission to create a cleaner, more sustainable future through innovative waste management solutions.
            </p>
            <Link
              to="/contact"
              className="btn bg-white text-green-600 hover:bg-gray-100 hover:scale-105 transform transition-all duration-300"
            >
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>
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