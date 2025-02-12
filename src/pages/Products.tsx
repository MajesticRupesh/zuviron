import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';

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

const Products = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1565108475579-8074e4fc7874?auto=format&fit=crop&q=80"
            alt="Product showcase"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/75" />
        </div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Our Products
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-xl text-gray-300"
            >
              Innovative building materials made from recycled thermocol waste
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative aspect-w-16 aspect-h-9">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 text-6xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {product.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Applications:</h4>
                    <ul className="text-gray-600 space-y-2">
                      {product.applications.map((app) => (
                        <li key={app} className="flex items-center">
                          <span className="w-2 h-2 bg-green-600 rounded-full mr-2" />
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative bg-gray-50 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1635048424329-a9bfb146d7aa?auto=format&fit=crop&q=80"
            alt="Background pattern"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Product Features
            </h2>
            <p className="text-gray-600">
              Our products are designed to meet the highest standards of quality and sustainability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white p-6 rounded-lg shadow-md text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative w-16 h-16 mx-auto mb-4">
                  <div className="absolute inset-0 bg-green-100 rounded-full transform transition-transform duration-300 group-hover:scale-110" />
                  <div className="relative flex items-center justify-center h-full text-4xl text-green-600">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80"
            alt="Call to action background"
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
              Ready to Transform Your Next Project?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us to learn more about our products and how they can benefit your construction needs.
            </p>
            <Link
              to="/contact"
              className="btn bg-white text-green-600 hover:bg-gray-100 hover:scale-105 transform transition-all duration-300"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const products = [
  {
    title: 'Thermocol Sheets',
    description: 'High-quality sheets made from recycled thermocol, perfect for various construction applications.',
    icon: '📋',
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&q=80',
    applications: [
      'Wall cladding',
      'Ceiling panels',
      'Partition walls',
      'Decorative elements',
    ],
  },
  {
    title: 'Building Panels',
    description: 'Durable and lightweight panels that provide excellent insulation and structural support.',
    icon: '🏗️',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80',
    applications: [
      'External facades',
      'Interior walls',
      'Roofing systems',
      'Floor underlayment',
    ],
  },
  {
    title: 'Custom Solutions',
    description: 'Tailored products designed to meet specific project requirements and specifications.',
    icon: '⚡',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80',
    applications: [
      'Architectural features',
      'Specialized installations',
      'Unique design elements',
      'Bespoke applications',
    ],
  },
];

const features = [
  {
    title: 'Eco-Friendly',
    description: 'Made from 100% recycled materials',
    icon: '🌱',
  },
  {
    title: 'Durable',
    description: 'Long-lasting and weather-resistant',
    icon: '💪',
  },
  {
    title: 'Lightweight',
    description: 'Easy to transport and install',
    icon: '🪶',
  },
  {
    title: 'Customizable',
    description: 'Adaptable to various needs',
    icon: '🎨',
  },
];

export default Products; 