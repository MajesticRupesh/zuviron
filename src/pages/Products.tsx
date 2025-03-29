import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaLeaf, FaShieldAlt, FaTools, FaRecycle, FaTimes } from 'react-icons/fa';
import GradientText from '../components/ui/GradientText';
import BackgroundPattern from '../components/ui/BackgroundPattern';
import { getProductCategories, ProductCategory } from '../services/productService';

const Products = () => {
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getProductCategories();
        console.log('Products page - category data:', data);
        setCategories(data);
      } catch (err) {
        setError('Failed to load product categories. Please try again later.');
        console.error('Error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleCardClick = (e: React.MouseEvent, categoryId: string) => {
    e.preventDefault(); // Prevent navigation
    setExpandedCard(expandedCard === categoryId ? null : categoryId);
  };

  const handleLearnMoreClick = (e: React.MouseEvent, slug: string) => {
    e.stopPropagation(); // Prevent card click handler
    window.location.href = `/products/${slug}`;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/80" />
          <div className="grid grid-cols-3 h-full">
            <div className="relative overflow-hidden">
              <img 
                src="/product.webp"
                alt="Sustainable materials"
                className="absolute inset-0 w-full h-full object-cover transform scale-110 hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative overflow-hidden">
              <img 
                src="/product.webp"
                alt="Construction materials"
                className="absolute inset-0 w-full h-full object-cover transform scale-110 hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative overflow-hidden">
              <img 
                src="/product.webp"
                alt="Eco-friendly solutions"
                className="absolute inset-0 w-full h-full object-cover transform scale-110 hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/80 to-gray-900/90" />
          <div className="absolute inset-0">
            <div className="h-full w-full" style={{ 
              background: `radial-gradient(circle at 50% 50%, rgba(8,145,178,0.1) 0%, rgba(0,0,0,0) 50%)` 
            }} />
          </div>
          <div className="absolute inset-0 mix-blend-multiply">
            <BackgroundPattern color="text-brand-500" />
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
              className="inline-block mb-6 px-6 py-2 rounded-full bg-brand-500/10 border border-brand-500/20"
            >
              <span className="text-brand-400">Sustainable Building Materials</span>
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sustainable Innovation for{' '}
              <GradientText gradient="from-brand-300 via-brand-400 to-brand-200">
                Every Space
              </GradientText>
            </h1>
            <p className="text-xl text-gray-300 mb-12">
              Customizable, durable, and eco-friendly building materials.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-brand-600 hover:bg-brand-700 rounded-full text-white transition-all duration-300 transform hover:scale-105"
              >
                Request a Quote
              </Link>
              
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />
        <div className="absolute left-1/2 bottom-0 w-px h-24 bg-gradient-to-t from-brand-500/20 to-transparent transform -translate-x-1/2" />
      </section>

      {/* Product Categories */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Product Categories
            </h2>
            <p className="text-gray-600 text-lg">
              Explore our range of sustainable building materials designed for various construction needs
            </p>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center min-h-[300px]">
              <div className="w-16 h-16 relative">
                <div className="absolute inset-0 border-4 border-brand-200 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-brand-600 rounded-full border-t-transparent animate-spin"></div>
              </div>
            </div>
          ) : error ? (
            <div className="text-center text-red-600 py-8">
              <p>{error}</p>
              <button 
                onClick={() => window.location.reload()} 
                className="mt-4 px-6 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <motion.div
                  key={category.$id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={(e) => handleCardClick(e, category.$id)}
                >
                  <div className="block h-full focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 rounded-2xl cursor-pointer">
                    <div className="relative w-full pb-[120%]">
                      <img 
                        src={category.image} 
                        alt={category.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-6">
                        <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                        
                        <motion.div
                          initial={false}
                          animate={{ height: expandedCard === category.$id ? 'auto' : '4.5rem' }}
                          className="overflow-hidden"
                        >
                          {expandedCard === category.$id ? (
                            <>
                              <div className="text-gray-200 mb-4 prose prose-sm prose-invert">
                                {category.details}
                              </div>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setExpandedCard(null);
                                }}
                                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                              >
                                <FaTimes className="w-4 h-4" />
                              </button>
                            </>
                          ) : (
                            <p className="text-gray-200 mb-4 line-clamp-2">{category.description}</p>
                          )}
                        </motion.div>
                        
                        {!expandedCard && (
                          <span className="inline-flex items-center text-brand-400 group-hover:text-brand-300 transition-colors">
                            {expandedCard === category.$id ? 'Show Less' : 'Learn More'}
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
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
                <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Product Applications
            </h2>
            <p className="text-gray-600 text-lg">
              Versatile solutions for commercial, residential, individual, and industrial applications
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {applications.map((app, index) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-3">
                  <img 
                    src={app.image} 
                    alt={app.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-center text-gray-800 font-medium group-hover:text-brand-600 transition-colors duration-300">
                  {app.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl overflow-hidden">
            <div className="relative px-6 py-24 md:px-12 text-center">
              <div className="absolute inset-0 mix-blend-multiply opacity-20">
                <BackgroundPattern color="text-brand-500" />
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
                  className="inline-flex items-center px-8 py-4 bg-brand-600 hover:bg-brand-700 rounded-full text-white transition-all duration-300 transform hover:scale-105"
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

const features = [
  {
    title: 'Eco-Friendly',
    description: 'Made from 100% recycled materials, reducing environmental impact.',
    icon: <FaLeaf className="w-6 h-6 text-brand-600" />
  },
  {
    title: 'Durable',
    description: 'Engineered for long-lasting performance and reliability.',
    icon: <FaShieldAlt className="w-6 h-6 text-brand-600" />
  },
  {
    title: 'Versatile',
    description: 'Adaptable for various construction applications.',
    icon: <FaTools className="w-6 h-6 text-brand-600" />
  },
  {
    title: 'Sustainable',
    description: 'Promotes circular economy and waste reduction.',
    icon: <FaRecycle className="w-6 h-6 text-brand-600" />
  }
];

const applications = [
  {
    title: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80'
  },
  {
    title: 'Wardrobe',
    image: 'https://images.unsplash.com/photo-1558997519-83c9716b1b07?auto=format&fit=crop&q=80'
  },
  {
    title: 'Bathroom',
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80'
  },
  {
    title: 'Office',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80'
  },
  {
    title: 'Living Room',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80'
  },
  {
    title: 'Outdoor',
    image: 'https://images.unsplash.com/photo-1621389061334-c06572c66f76?auto=format&fit=crop&q=80'
  },
  {
    title: 'Commercial',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80'
  },
  {
    title: 'Industrial',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80'
  },
  {
    title: 'Retail',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80'
  },
  {
    title: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80'
  },
  {
    title: 'Education',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80'
  },
  {
    title: 'Hospitality',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80'
  }
];

export default Products; 