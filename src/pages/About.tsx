import { motion } from 'framer-motion';
import { FaLeaf, FaUsers, FaLightbulb, FaGlobeAmericas, FaRecycle } from 'react-icons/fa';
import GradientText from '../components/ui/GradientText';
import BackgroundPattern from '../components/ui/BackgroundPattern';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <div className="grid grid-cols-2 h-full">
            <div className="relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80"
                alt="Innovative building"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&q=80"
                alt="Sustainable solutions"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-gray-900/95" />
          <div className="absolute inset-0">
            <BackgroundPattern color="text-brand-500/10" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6 px-6 py-2 rounded-full bg-brand-500/10 border border-brand-500/20"
            >
              <span className="text-brand-400">Our Story</span>
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Building a{' '}
              <GradientText gradient="from-brand-300 via-brand-400 to-brand-200">
                Sustainable Future
              </GradientText>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Leading the way in sustainable building materials through innovative waste management solutions and eco-friendly practices.
            </p>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80"
                  alt="Our mission"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
              </div>
              <div className="absolute -bottom-8 left-8 right-8">
                <div className="bg-white rounded-xl p-6 shadow-xl">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center">
                      <FaLeaf className="w-5 h-5 text-brand-600" />
                    </div>
                    <h3 className="text-xl font-semibold">Environmental Impact</h3>
                  </div>
                  <p className="text-gray-600">
                    Reducing waste and carbon footprint through innovative recycling solutions.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Mission & Vision
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                At Zuviron Innovations, we are committed to transforming waste materials into valuable building resources. Our focus begins with thermocol waste, but our vision extends to creating a comprehensive circular economy for various waste streams.
              </p>
              <div className="space-y-6">
                {missionPoints.map((point, index) => (
                  <motion.div
                    key={point.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-8 h-8 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaLightbulb className="w-4 h-4 text-brand-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{point.title}</h3>
                      <p className="text-gray-600">{point.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <BackgroundPattern color="text-gray-900" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Core Values
              </h2>
              <p className="text-gray-600 text-lg">
                The principles that guide our mission and shape our approach to sustainable innovation
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative w-16 h-16 mb-6">
                  <div className="absolute inset-0 bg-brand-100 rounded-xl transform transition-transform duration-300 group-hover:rotate-6" />
                  <div className="absolute inset-0 bg-brand-50 rounded-xl transform transition-transform duration-300 group-hover:-rotate-6" />
                  <div className="relative h-full flex items-center justify-center">
                    <img 
                      src={value.image}
                      alt={value.title}
                      className="w-10 h-10 object-cover rounded-lg"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 mix-blend-multiply opacity-20">
          <BackgroundPattern color="text-brand-500" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Our Vision for the{' '}
              <GradientText gradient="from-brand-300 via-brand-400 to-brand-200">
                Future
              </GradientText>
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              We envision a world where waste is not a burden but a valuable resource, where sustainable practices are the norm, and where innovation drives positive environmental change.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {visionPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                >
                  <div className="w-12 h-12 bg-brand-500/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <FaRecycle className="w-6 h-6 text-brand-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{point.title}</h3>
                  <p className="text-gray-400">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const missionPoints = [
  {
    title: 'Sustainable Innovation',
    description: 'Developing cutting-edge solutions for waste management and recycling.',
    icon: <FaLightbulb className="w-4 h-4 text-brand-600" />
  },
  {
    title: 'Global Impact',
    description: 'Creating positive environmental change on a global scale.',
    icon: <FaGlobeAmericas className="w-4 h-4 text-brand-600" />
  },
  {
    title: 'Community Focus',
    description: 'Building strong relationships with communities and stakeholders.',
    icon: <FaUsers className="w-4 h-4 text-brand-600" />
  }
];

const values = [
  {
    title: 'Sustainability',
    description: 'Committed to environmental stewardship and reducing waste through innovative solutions.',
    image: 'https://images.unsplash.com/photo-1535687911897-88a42f3cda4f?auto=format&fit=crop&q=80'
  },
  {
    title: 'Innovation',
    description: 'Continuously exploring new technologies and methods to improve our products and processes.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80'
  },
  {
    title: 'Quality',
    description: 'Maintaining the highest standards in our products and services to ensure customer satisfaction.',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80'
  }
];

const visionPoints = [
  {
    title: 'Zero Waste Future',
    description: 'Creating a world where all waste is transformed into valuable resources.',
    icon: <FaRecycle className="w-6 h-6 text-brand-400" />
  },
  {
    title: 'Global Sustainability',
    description: 'Promoting sustainable practices across industries worldwide.',
    icon: <FaGlobeAmericas className="w-6 h-6 text-brand-400" />
  },
  {
    title: 'Innovation Leadership',
    description: 'Setting new standards in sustainable construction technology.',
    icon: <FaLightbulb className="w-6 h-6 text-brand-400" />
  }
];

export default About; 