import { motion } from 'framer-motion';
import { FaLeaf, FaUsers, FaLightbulb, FaGlobeAmericas, FaRecycle, FaShieldAlt, FaAward, FaChartLine, FaUniversity, FaHandshake, FaLandmark } from 'react-icons/fa';
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
              Rethinking Waste, <br/>
              <GradientText gradient="from-brand-300 via-brand-400 to-brand-200">
                Reshaping the Future
              </GradientText>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              For us, waste holds endless potential.
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
              <p className="text-gray-600 mb-4 text-lg">
                Our mission is to transform waste into high-value building materials by adhering to circular economy practices. We have started this journey by repurposing thermocol waste, turning it into a durable and innovative alternative to pre-existing construction materials. We continue to explore new ways to redefine discarded materials.
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                Our vision is to be pioneers in sustainable material solutions for the architecture and design sectors, continuously advancing eco-conscious change. Our goal is to make the usage of recycled materials the norm and contribute to the greater purpose of increasing India’s recycling rates from 5% to 20% in the next three years.
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
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborations Section */}
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
              Our{' '}
              <GradientText gradient="from-brand-300 via-brand-400 to-brand-200">
                Collaborations
              </GradientText>
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              We're proud to work with leading institutions and receive support from government bodies that share our vision for a sustainable future.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {collaborations.map((collab, index) => (
                <motion.div
                  key={collab.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                    <div className="absolute inset-0" style={{ 
                      backgroundImage: `radial-gradient(circle at 1rem 1rem, rgba(255,255,255,0.1) 0.15rem, transparent 0.15rem)`,
                      backgroundSize: '3rem 3rem'
                    }} />
                  </div>

                  {/* Decorative Corner Lines */}
                  <div className="absolute top-4 left-4 w-8 h-8">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-brand-500/40 to-transparent" />
                    <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-brand-500/40 to-transparent" />
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8">
                    <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-brand-500/40 to-transparent" />
                    <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-brand-500/40 to-transparent" />
                  </div>
                  <div className="absolute bottom-4 left-4 w-8 h-8">
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-brand-500/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 h-full w-px bg-gradient-to-t from-brand-500/40 to-transparent" />
                  </div>
                  <div className="absolute bottom-4 right-4 w-8 h-8">
                    <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-brand-500/40 to-transparent" />
                    <div className="absolute bottom-0 right-0 h-full w-px bg-gradient-to-t from-brand-500/40 to-transparent" />
                  </div>

                  {/* Card Border Gradients */}
                  <div className="absolute inset-0">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-brand-500/20 via-white/10 to-transparent" />
                    <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-brand-500/20 via-white/10 to-transparent" />
                  </div>

                  {/* Diagonal Lines */}
                  <div className="absolute inset-0 overflow-hidden opacity-[0.03] pointer-events-none">
                    <div className="absolute top-0 left-0 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2" style={{ 
                      backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 30px)` 
                    }} />
                  </div>

                  {/* Enhanced Glowing Corner Accents */}
                  <div className="absolute top-0 left-0 w-32 h-32">
                    <div className="absolute w-24 h-24 bg-brand-500/10 blur-2xl rounded-full -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute w-16 h-16 bg-brand-400/15 blur-xl rounded-full -translate-x-1/4 -translate-y-1/4" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-32 h-32">
                    <div className="absolute w-24 h-24 bg-brand-400/10 blur-2xl rounded-full translate-x-1/2 translate-y-1/2" />
                    <div className="absolute w-16 h-16 bg-brand-500/15 blur-xl rounded-full translate-x-1/4 translate-y-1/4" />
                  </div>

                  {/* Content Container */}
                  <div className="relative">
                    {/* Enhanced Icon Container */}
                    <div className="relative w-16 h-16 mb-6 mx-auto">
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-500/20 to-brand-400/10 blur-xl opacity-75" />
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-500/30 to-brand-400/20 blur-lg" />
                      <div className="relative h-full bg-brand-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {collab.icon}
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-transparent rounded-xl" />
                      </div>
                    </div>

                    {/* Title with Underline Effect */}
                    <div className="relative">
                      <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-brand-300 transition-colors duration-300">
                        {collab.title}
                        <div className="absolute -bottom-1 left-0 w-12 h-px bg-gradient-to-r from-brand-500/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 relative z-10">
                      {collab.description}
                    </p>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-brand-400/5 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-tl from-brand-500/5 via-brand-400/5 to-transparent" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />
      </section>
    </div>
  );
};

const missionPoints = [
  {
    title: 'Sustainability & Environmental Responsibility',
    description: 'We reduce waste through eco-friendly processes with minimal carbon footprint.',
    icon: <FaLightbulb className="w-4 h-4 text-brand-600" />
  },
  {
    title: 'Innovation & Design Excellence',
    description: 'We create high-quality, functional, and visually appealing materials.',
    icon: <FaGlobeAmericas className="w-4 h-4 text-brand-600" />
  },
  {
    title: 'Affordability & Accessibility',
    description: 'We make sustainable materials cost-effective for broader adoption.',
    icon: <FaUsers className="w-4 h-4 text-brand-600" />
  }
];

const values = [
  {
    title: 'Sustainable Innovation',
    description: 'We reduce waste through eco-conscious processes, extend material life cycles, and reduce the carbon footprint.',
    icon: <FaLeaf className="w-8 h-8 text-brand-600" />
  },
  {
    title: 'Ethical Responsibility',
    description: 'We support local recyclers, artisans, and fair labour practices while maintaining transparency in our materials and processes.',
    icon: <FaLightbulb className="w-8 h-8 text-brand-600" />
  },
  {
    title: 'Quality & Accessibility',
    description: 'Our materials are durable, cost-effective, and customizable to meet the diverse needs of modern architecture and design.',
    icon: <FaAward className="w-8 h-8 text-brand-600" />
  }
];

const collaborations = [
  {
    title: 'IIT Kanpur Partnership',
    description: 'Strategic collaboration with IIT Kanpur for research and development in sustainable material innovation.',
    icon: <FaUniversity className="w-8 h-8 text-brand-400" />
  },
  {
    title: 'Government Support',
    description: 'Received significant funding and support from government initiatives promoting sustainable technologies.',
    icon: <FaLandmark className="w-8 h-8 text-brand-400" />
  },
  {
    title: 'Industry Alliances',
    description: 'Partnerships with leading construction and recycling companies to implement our solutions at scale.',
    icon: <FaHandshake className="w-8 h-8 text-brand-400" />
  }
];

export default About; 