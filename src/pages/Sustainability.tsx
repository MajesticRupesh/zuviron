import { motion } from 'framer-motion';

const Sustainability = () => {
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
              Our Commitment to Sustainability
            </h1>
            <p className="text-xl text-gray-300">
              Building a better future through innovative waste management and sustainable practices
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-white rounded-lg shadow-md"
              >
                <div className="text-4xl text-green-600 mb-4">{stat.icon}</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600">{stat.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Sustainable Process
            </h2>
            <p className="text-gray-600">
              How we transform waste into valuable building materials
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-4xl text-green-600 mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-green-600"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Benefits */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Environmental Benefits
            </h2>
            <p className="text-gray-600">
              The positive impact of choosing our sustainable solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <div className="flex items-start">
                  <div className="text-4xl text-green-600 mr-4">{benefit.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-8">Our Certifications</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="text-center"
                >
                  <div className="text-4xl mb-2">{cert.icon}</div>
                  <p className="font-medium text-gray-900">{cert.name}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const impactStats = [
  {
    title: 'Tons of Waste Recycled',
    value: '1000+',
    icon: '♻️',
  },
  {
    title: 'CO₂ Emissions Reduced',
    value: '500+',
    icon: '🌱',
  },
  {
    title: 'Sustainable Projects',
    value: '100+',
    icon: '🏗️',
  },
];

const process = [
  {
    title: 'Collection',
    description: 'Gathering thermocol waste from various sources',
    icon: '🔄',
  },
  {
    title: 'Processing',
    description: 'Converting waste into raw material',
    icon: '⚙️',
  },
  {
    title: 'Manufacturing',
    description: 'Creating high-quality building materials',
    icon: '🏭',
  },
  {
    title: 'Distribution',
    description: 'Delivering sustainable solutions',
    icon: '🚛',
  },
];

const benefits = [
  {
    title: 'Waste Reduction',
    description: 'Significantly reduces landfill waste by recycling thermocol materials that would otherwise take hundreds of years to decompose.',
    icon: '🗑️',
  },
  {
    title: 'Energy Efficiency',
    description: 'Our products provide excellent insulation, reducing energy consumption in buildings.',
    icon: '⚡',
  },
  {
    title: 'Carbon Footprint',
    description: 'Lower carbon emissions compared to traditional building materials manufacturing processes.',
    icon: '👣',
  },
  {
    title: 'Resource Conservation',
    description: 'Reduces the need for new raw materials by utilizing recycled content.',
    icon: '🌍',
  },
];

const certifications = [
  {
    name: 'ISO 14001',
    icon: '🏅',
  },
  {
    name: 'Green Building Certified',
    icon: '🏆',
  },
  {
    name: 'Eco-Friendly Product',
    icon: '🌿',
  },
];

export default Sustainability; 