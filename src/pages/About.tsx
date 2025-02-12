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

const slideIn: Variants = {
  initial: {
    opacity: 0,
    x: -30
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 }
  }
};

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80"
            alt="Innovative building" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/70" />
        </div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
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
              variants={slideIn}
              initial="initial"
              whileInView="animate"
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
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80"
                alt="Sustainable mission"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-green-600/10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative bg-gray-50 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?auto=format&fit=crop&q=80"
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
                className="group bg-white p-8 rounded-lg shadow-md text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative w-20 h-20 mx-auto mb-6">
                  <img 
                    src={value.image}
                    alt={value.title}
                    className="w-full h-full object-cover rounded-full"
                  />
                  <div className="absolute inset-0 bg-green-600/10 rounded-full group-hover:bg-green-600/20 transition-colors duration-300" />
                  <div className="absolute -inset-1 border-2 border-green-600/20 rounded-full group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative py-16 md:py-24 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1536825211030-094de935f680?auto=format&fit=crop&q=80"
            alt="Future vision"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-green-600/90" />
        </div>
        <div className="container mx-auto px-4 relative">
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
    image: 'https://images.unsplash.com/photo-1535687911897-88a42f3cda4f?auto=format&fit=crop&q=80'
  },
  {
    title: 'Innovation',
    description: 'We continuously explore new technologies and methods to improve our products and processes.',
    icon: '💡',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80'
  },
  {
    title: 'Quality',
    description: 'We maintain the highest standards in our products and services to ensure customer satisfaction.',
    icon: '⭐',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80'
  },
];

export default About; 