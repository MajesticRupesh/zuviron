import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaLeaf, FaShieldAlt, FaTools, FaRecycle } from 'react-icons/fa';
import GradientText from '../components/ui/GradientText';
import BackgroundPattern from '../components/ui/BackgroundPattern';

const Products = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/80" />
          <div className="grid grid-cols-3 h-full">
            <div className="relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1565108475579-8074e4fc7874?auto=format&fit=crop&q=80"
                alt="Sustainable materials"
                className="absolute inset-0 w-full h-full object-cover transform scale-110 hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80"
                alt="Construction materials"
                className="absolute inset-0 w-full h-full object-cover transform scale-110 hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80"
                alt="Eco-friendly solutions"
                className="absolute inset-0 w-full h-full object-cover transform scale-110 hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/80 to-gray-900/90" />
          <div className="absolute inset-0">
            <div className="h-full w-full" style={{ 
              background: `radial-gradient(circle at 50% 50%, rgba(34,197,94,0.1) 0%, rgba(0,0,0,0) 50%)` 
            }} />
          </div>
          <div className="absolute inset-0 mix-blend-multiply">
            <BackgroundPattern color="text-green-500/10" />
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6 px-6 py-2 rounded-full bg-green-500/10 border border-green-500/20"
            >
              <span className="text-green-400">Sustainable Building Materials</span>
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Innovative Solutions for{' '}
              <GradientText gradient="from-green-300 via-green-400 to-green-200">
                Sustainable Construction
              </GradientText>
            </h1>
            <p className="text-xl text-gray-300 mb-12">
              Transform waste into high-performance building materials with our cutting-edge technology
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-green-600 hover:bg-green-700 rounded-full text-white transition-all duration-300 transform hover:scale-105"
              >
                Request a Quote
              </Link>
              <Link
                to="/case-studies"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />
        <div className="absolute left-1/2 bottom-0 w-px h-24 bg-gradient-to-t from-green-500/20 to-transparent transform -translate-x-1/2" />
      </section>

      {/* Product Categories */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Product Categories
            </h2>
            <p className="text-gray-600 text-lg">
              Explore our range of sustainable building materials designed for various construction needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                  <p className="text-gray-200 mb-4">{category.description}</p>
                  <Link
                    to={`/products/${category.slug}`}
                    className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors"
                  >
                    Learn More
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Our Products?
            </h2>
            <p className="text-gray-600 text-lg">
              Our materials are engineered to deliver superior performance while maintaining environmental responsibility
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl overflow-hidden">
            <div className="relative px-6 py-24 md:px-12 text-center">
              <div className="absolute inset-0 mix-blend-multiply opacity-20">
                <BackgroundPattern color="text-green-500" />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Next Project?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Contact us to learn more about our products and how they can benefit your construction needs
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 rounded-full text-white transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const productCategories = [
  {
    title: 'Construction Panels',
    description: 'High-performance panels made from recycled materials for walls and partitions.',
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89',
    slug: 'construction-panels'
  },
  {
    title: 'Insulation Materials',
    description: 'Eco-friendly insulation solutions for superior thermal and acoustic performance.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12',
    slug: 'insulation-materials'
  },
  {
    title: 'Decorative Elements',
    description: 'Sustainable architectural elements that combine aesthetics with functionality.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122',
    slug: 'decorative-elements'
  }
];

const features = [
  {
    title: 'Eco-Friendly',
    description: 'Made from 100% recycled materials, reducing environmental impact.',
    icon: <FaLeaf className="w-6 h-6 text-green-600" />
  },
  {
    title: 'Durable',
    description: 'Engineered for long-lasting performance and reliability.',
    icon: <FaShieldAlt className="w-6 h-6 text-green-600" />
  },
  {
    title: 'Versatile',
    description: 'Adaptable for various construction applications.',
    icon: <FaTools className="w-6 h-6 text-green-600" />
  },
  {
    title: 'Sustainable',
    description: 'Promotes circular economy and waste reduction.',
    icon: <FaRecycle className="w-6 h-6 text-green-600" />
  }
];

export default Products; 