import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaRecycle, FaIndustry, FaBuilding } from 'react-icons/fa';
import VideoBackground from '../components/ui/VideoBackground';
import AnimatedCard from '../components/ui/AnimatedCard';
import FloatingElement from '../components/ui/FloatingElement';
import GradientText from '../components/ui/GradientText';
import BackgroundPattern from '../components/ui/BackgroundPattern';

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.3]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.7]);

  return (
    <div className="relative overflow-x-hidden">
      {/* Hero Section with 3D Perspective */}
      <div className="relative min-h-screen perspective-1000">
        <motion.div 
          className="absolute inset-0 origin-top"
          style={{ scale, opacity }}
        >
          <VideoBackground 
            videoUrl="/hero-background.mp4"
            className="h-full"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="container mx-auto px-4 pt-20 md:pt-24"
              >
                <div className="text-center max-w-4xl mx-auto">
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-white space-y-2"
                  >
                    <div className="inline-flex flex-wrap items-center gap-2 md:gap-4 justify-center">
                      <span>Innovating </span>
                      <GradientText gradient="from-brand-300 via-brand-400 to-brand-500">
                        Sustainability
                      </GradientText><br />
                      <span>One Material</span>
                      <GradientText gradient="from-brand-200 via-brand-300 to-brand-100">
                        at a Time
                      </GradientText>
                    </div>
                  </motion.h1>
                  
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-12 text-gray-200 max-w-2xl mx-auto px-4"
                  >
                    Revolutionizing materials for a better tomorrow.
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                    className="flex flex-wrap gap-4 md:gap-6 justify-center"
                  >
                    <Link
                      to="/products"
                      className="group relative overflow-hidden rounded-md px-4 sm:px-4 py-3 sm:py-3 bg-brand-500/40 text-white hover:bg-brand-600 transition-all duration-300"
                    >
                      <span className="relative z-10 font-medium">Explore Products</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-brand-600 to-brand-400"
                        initial={{ x: '100%' }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                    <Link
                      to="/contact"
                      className="group relative overflow-hidden rounded-md px-4 sm:px-4 py-3 sm:py-3 bg-transparent border-2 border-white text-white hover:border-brand-400 transition-all duration-300"
                    >
                      <span className="relative z-10">Contact Us</span>
                      <motion.div
                        className="absolute inset-0 bg-white/10"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </VideoBackground>
        </motion.div>
      </div>

      {/* About Us Section */}
      <section className="relative py-32 md:py-40 bg-white overflow-hidden">
        

        {/* Content */}
        <div className="container mx-auto px-4 relative py-16" style={{backgroundRepeat: "no-repeat", backgroundImage: `linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1441986300917-64674bd600d8")`, backgroundSize: "300%"}}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6 px-6 py-2 rounded-full bg-brand-500/10 border border-brand-500/20"
            >
              <span className="text-brand-400">Our Story</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <GradientText gradient="from-brand-600 via-brand-500 to-brand-400">
                Who We Are
              </GradientText>
            </h2>
            
            <p className="text-gray-100 mb-8 text-xl !leading-[2]">
              Zuviron is redefining the future of materials by giving discarded materials a new purpose. We create innovative building solutions that embrace circular economy principles, extend material life cycles and reduce waste. We craft durable, high-quality materials that drive progress in architecture and design, fostering innovation and environmental responsibility in the industry.
            </p>

            {/* Decorative Elements */}
            <div className="relative">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section with Glassmorphism */}
      <section className="relative py-32 md:py-40 bg-gradient-to-b from-gray-900 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <BackgroundPattern color="text-brand-200" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <GradientText 
              gradient="from-brand-200 via-brand-300 to-brand-100" 
              className="text-4xl md:text-5xl font-bold mb-8"
            >
              Why Choose Zuviron?
            </GradientText>
            <p className="text-gray-300 text-lg md:text-xl !leading-[2] !mt-8">
              Our innovative approach creates sustainable solutions for the future of construction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="relative h-full p-8 md:p-10 rounded-2xl bg-gradient-to-br from-gray-800/95 via-gray-900/98 to-gray-900/95 shadow-lg transition-all duration-300 overflow-hidden backdrop-blur-sm">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
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

                  {/* Decorative Elements */}
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                  <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-brand-500/20 via-white/5 to-transparent" />
                  <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-brand-500/20 via-white/5 to-transparent" />
                  
                  {/* Diagonal Lines */}
                  <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-[0.03] pointer-events-none">
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

                  {/* Icon Container with Enhanced Glow */}
                  <div className="relative mb-8 !w-fit">
                    <div className="absolute -inset-2 bg-gradient-to-br from-brand-500/20 to-brand-400/10 blur-xl opacity-75" />
                    <div className="absolute -inset-1 bg-gradient-to-br from-brand-500/30 to-brand-400/20 blur-lg" />
                    <div className="relative p-4 rounded-xl bg-gradient-to-br from-brand-500/10 to-brand-400/5 border border-brand-400/20 backdrop-blur-sm">
                      <feature.icon className="w-10 h-10 text-brand-400" />
                      {/* Icon Background Accent */}
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-transparent rounded-xl" />
                    </div>
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500/50 to-brand-400/50 opacity-0 group-hover:opacity-20 blur transition-opacity duration-500" />
                  </div>

                  {/* Content with Enhanced Styling */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent group-hover:from-brand-300 group-hover:to-brand-100 transition-all duration-300">
                      {feature.title}
                      {/* Title Underline Accent */}
                      <div className="absolute -bottom-1 left-0 w-12 h-px bg-gradient-to-r from-brand-500/50 to-transparent" />
                    </h3>
                    <p className="text-gray-300 text-lg !leading-[2] group-hover:text-gray-200 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>

                  {/* Enhanced Hover Effects */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-brand-400/5 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-tl from-brand-500/5 via-brand-400/5 to-transparent" />
                    {/* Additional Hover Accent */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-white py-32 md:py-40 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
            Ready to Make a{' '}
            <GradientText gradient="from-brand-600 via-brand-500 to-brand-700" className="inline-block">
              Change?
            </GradientText>
          </h2>
          <p className="text-xl mb-12 text-gray-600 max-w-2xl mx-auto">
            Join us on this mission to redefine sustainability in architecture and design.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-12 py-5 rounded-full text-white bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-700 hover:to-brand-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-brand-500/25"
          >
            Get Started Today
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

const features = [
  {
    title: 'Waste to Value Approach',
    description: 'We give discarded materials a new purpose, reducing environmental impact.',
    icon: FaRecycle,
  },
  {
    title: 'Long-Term Applications',
    description: 'We make durable materials designed for long-lasting use and multiple applications in architecture and design.',
    icon: FaIndustry,
  },
  {
    title: 'Optimized for Every Need',
    description: 'Our materials are cost-effective, aesthetically appealing, and fully customizable to suit diverse architectural and design needs.',
    icon: FaBuilding,
  },
];

export default Home; 