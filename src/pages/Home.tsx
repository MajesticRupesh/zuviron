import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaRecycle, FaIndustry, FaBuilding } from 'react-icons/fa';
import VideoBackground from '../components/ui/VideoBackground';
import GradientText from '../components/ui/GradientText';
import BackgroundPattern from '../components/ui/BackgroundPattern';

const Home = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.7]);

  return (
    <div className="relative overflow-x-hidden" >
      {/* Hero Section with 3D Perspective */}
      <div className="relative min-h-screen perspective-1000">
        <motion.div 
          className="absolute inset-0 origin-top"
          style={{  opacity }}
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

      <div className='w-full relative h-full'>
        <video autoPlay loop muted className='w-full h-[200px] lg:h-[300px] xl:h-[400px] object-cover'>
          <source src='/hero-background.mp4' type='video/mp4'></source>
        </video>
        <div className='flex flex-col absolute top-0 left-0 bg-white striped-bg w-full h-full text-cyan-500 flex items-start justify-end mix-blend-screen'>
          <h1 className='text-3xl lg:text-5xl pl-1 lg:pl-4'>Waste</h1>
          <h1 className='text-5xl lg:text-[180px] xl:text-[240px] lg:font-black'>Redefined.</h1>
        </div>
        
      </div>

      <div className='w-full mb-32'>
        <div className='flex flex-col md:flex-row text-black justify-around px-4 md:px-12 md:pr-32'>
          <div className='flex flex-col'>
            <p className='text-lg font-bold'>380+</p>
            <p>Petabytes Data Stored</p>
          </div>
          <div className='flex flex-col'>
            <p className='text-lg font-bold'>{'>'}$60B</p>
            <p>AUM</p>
          </div>
          <div className='flex flex-col'>
            <p className='text-lg font-bold'>5 Billion +</p>
            <p>Trades since inception</p>
          </div>
        </div>
      </div>

      

      {/* About Us Section */}
      <section className="relative pb-32 md:pb-40 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <BackgroundPattern color="text-brand-200" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-500/5 to-transparent" />

        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative px-4 lg:px-8 py-12 lg:py-24"
            >
              <div className="relative">
                {/* Section Title with Enhanced Styling */}
                <div className="inline-block mb-6">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    <GradientText gradient="!text-[#041e42]">
                      What We Do
                    </GradientText>
                  </h2>
                  <div className="h-1 w-24 bg-gradient-to-r from-brandpantone-900 to-blue-100 rounded-full mt-2" />
                </div>

                {/* Main Content with Enhanced Typography */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 mb-8 font-bold text-lg !leading-[1] relative">
                    <span className="absolute -left-4 top-0 text-4xl text-brand-400/20 font-serif">"</span>
                    Redefining the future of materials by transforming waste into innovative, sustainable solutions.
                    <span className="text-4xl text-brand-400/20 font-serif">"</span>
                  </p>
                  <p className="text-gray-600 mb-8 text-lg !leading-[2]">
                    Creating innovative Building Materials that embrace circular economy principles, extend material life cycles, and reduce waste. Our durable, high quality solutions drive architectural and design innovation, fostering greater environmental responsibility across the industry.
                  </p>
                </div>


                {/* Call to Action Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="mt-12"
                >
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-brandpantone-900 text-white rounded-lg hover:bg-brand-600 transition-colors duration-300 group"
                  >
                    <span>Learn More</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative w-full h-[600px] lg:h-full"
            >
              {/* Image Container with Enhanced Effects */}
              <div className="relative w-3/4 group float-right">
                <img 
                  src="/triangle.webp"
                  alt="About Zuviron"
                  className="w-full h-full object-cover duration-700"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative pb-16 overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="mx-auto text-center">
            <div className="relative flex flex-col items-center">
             
              {/* Quote Text */}
              <blockquote className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-600 mb-8 leading-relaxed">
                <p>"Sustainability can scale - bridging technology,</p> <p>earth-friendliness, and business."</p>
              </blockquote>

              {/* Author */}
              <div className="text-gray-500 font-medium mb-6">
                - Madhura Jadhav, Founder
              </div>

              <img className='h-16 w-16 rounded-full' src="/product.webp" alt="" srcSet="" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Glassmorphism */}
      <section className="relative py-32 md:py-40 bg-gradient-to-b from-gray-900 to-gray-900 overflow-hidden" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/whyus.jpg")`, backgroundSize: "200%"}}>
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            
            <div>
              <GradientText 
                gradient="from-brand-200 via-brand-300 to-brand-100" 
                className="text-4xl md:text-5xl font-bold mb-8"
              >
                Why Choose Zuviron?
              </GradientText>
            </div>
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
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-brand-400/5 rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-brand-500/30 transition-all duration-300 h-full">
                  {/* <div className="w-16 h-16 bg-brand-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-500/20 transition-colors duration-300">
                    <feature.icon className="w-8 h-8 text-brand-400" />
                  </div> */}
                  <h3 className="flex text-xl font-semibold mb-4 text-white group-hover:text-brand-300 transition-colors duration-300">
                    <feature.icon className="w-8 h-8 text-brand-400" />
                    <span className='pl-2'>{feature.title}</span>
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                  
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-10 md:py-12 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="text-4xl md:text-7xl font-bold mb-8 text-gray-900 !leading-[1.5]">
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
            className="group relative overflow-hidden rounded-md px-4 sm:px-4 py-3 sm:py-3 bg-brandpantone-900 text-white hover:bg-brand-600 transition-all duration-300"
          >
            <span className="relative z-10 font-medium">Get in Touch</span>
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