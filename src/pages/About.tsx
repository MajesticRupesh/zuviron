import { motion } from 'framer-motion';

const About = () => {
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
              About Zuviron Innovations
            </h1>
            <p className="text-xl text-gray-300">
              Leading the way in sustainable building materials through innovative waste management solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                At Zuviron Innovations, we are committed to transforming waste materials into valuable building resources. Our focus begins with thermocol waste, but our vision extends to creating a comprehensive circular economy for various waste streams.
              </p>
              <p className="text-gray-600">
                Through innovative technology and sustainable practices, we aim to reduce landfill waste while providing high-quality, eco-friendly building materials to the construction industry.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-green-600/20" />
              {/* Add your image here */}
              <div className="absolute inset-0 flex items-center justify-center text-green-600">
                <span className="text-6xl">🌱</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-gray-600">
              Our core values guide everything we do at Zuviron Innovations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-md text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 md:py-24 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
            <p className="text-xl mb-8">
              We envision a future where waste is not a burden but a valuable resource, where sustainable practices are the norm, and where innovation drives positive environmental change.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const values = [
  {
    title: 'Sustainability',
    description: 'We are committed to environmental stewardship and reducing waste through innovative solutions.',
    icon: '🌍',
  },
  {
    title: 'Innovation',
    description: 'We continuously explore new technologies and methods to improve our products and processes.',
    icon: '💡',
  },
  {
    title: 'Quality',
    description: 'We maintain the highest standards in our products and services to ensure customer satisfaction.',
    icon: '⭐',
  },
];

export default About; 