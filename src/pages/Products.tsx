import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Products
            </h1>
            <p className="text-xl text-gray-300">
              Innovative building materials made from recycled thermocol waste
            </p>
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
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                  <div className="flex items-center justify-center text-6xl">
                    {product.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <ul className="text-gray-600 mb-4 space-y-2">
                    {product.applications.map((app) => (
                      <li key={app} className="flex items-center">
                        <span className="mr-2">•</span>
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
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
                className="text-center"
              >
                <div className="text-4xl mb-4 text-green-600">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
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
              className="btn bg-white text-green-600 hover:bg-gray-100"
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