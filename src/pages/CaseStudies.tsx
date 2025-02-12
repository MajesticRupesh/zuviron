import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaQuoteLeft, FaChartLine, FaStar, FaRecycle } from 'react-icons/fa';
import GradientText from '../components/ui/GradientText';
import BackgroundPattern from '../components/ui/BackgroundPattern';

const CaseStudies = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <div className="grid grid-cols-3 h-full">
            {caseStudies.slice(0, 3).map((study, index) => (
              <div key={index} className="relative overflow-hidden">
                <img 
                  src={study.afterImage}
                  alt={study.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent" />
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/95" />
          <div className="absolute inset-0">
            <BackgroundPattern color="text-green-500/10" />
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
              className="inline-block mb-6 px-6 py-2 rounded-full bg-green-500/10 border border-green-500/20"
            >
              <span className="text-green-400">Success Stories</span>
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transforming Ideas into{' '}
              <GradientText gradient="from-green-300 via-green-400 to-green-200">
                Reality
              </GradientText>
            </h1>
            <p className="text-xl text-gray-300">
              Discover how our sustainable solutions have revolutionized projects across industries
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-green-400 text-transparent bg-clip-text">
                    {stat.value}
                  </span>
                </div>
                <p className="text-gray-600 text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <div className="relative h-[400px] overflow-hidden">
                      <motion.img 
                        src={study.beforeImage} 
                        alt={`${study.title} - Before`}
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                      />
                      <motion.img 
                        src={study.afterImage} 
                        alt={`${study.title} - After`}
                        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="inline-block px-4 py-2 bg-green-500/90 text-white text-sm rounded-full">
                          {study.category}
                        </span>
                      </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black/70 text-white px-6 py-3 rounded-full text-sm backdrop-blur-sm">
                        Hover to see transformation
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{study.title}</h3>
                    <p className="text-gray-600 mb-6">{study.description}</p>
                    
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center">
                            <FaChartLine className="w-4 h-4 text-red-600" />
                          </div>
                          <h4 className="font-semibold text-gray-900">Challenge</h4>
                        </div>
                        <p className="text-gray-600 pl-11">{study.challenge}</p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                            <FaStar className="w-4 h-4 text-blue-600" />
                          </div>
                          <h4 className="font-semibold text-gray-900">Solution</h4>
                        </div>
                        <p className="text-gray-600 pl-11">{study.solution}</p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                            <FaRecycle className="w-4 h-4 text-green-600" />
                          </div>
                          <h4 className="font-semibold text-gray-900">Results</h4>
                        </div>
                        <ul className="space-y-2 pl-11">
                          {study.results.map((result, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-center gap-2 text-gray-600"
                            >
                              <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                              {result}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 mix-blend-multiply opacity-20">
          <BackgroundPattern color="text-green-500" />
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
              What Our Clients{' '}
              <GradientText gradient="from-green-300 via-green-400 to-green-200">
                Say
              </GradientText>
            </h2>
            <p className="text-gray-300 text-lg">
              Hear directly from the companies we've helped transform
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10"
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="relative">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden">
                      <img 
                        src={testimonials[currentTestimonial].image} 
                        alt={testimonials[currentTestimonial].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-green-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <FaQuoteLeft className="w-4 h-4 text-green-300" />
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-gray-300 text-lg mb-6 italic">
                      {testimonials[currentTestimonial].quote}
                    </p>
                    <div>
                      <p className="font-semibold text-white text-lg">
                        {testimonials[currentTestimonial].name}
                      </p>
                      <p className="text-gray-400">
                        {testimonials[currentTestimonial].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="flex justify-center mt-8 gap-4">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 transition-colors duration-200"
                aria-label="Previous testimonial"
              >
                <FaArrowLeft className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 transition-colors duration-200"
                aria-label="Next testimonial"
              >
                <FaArrowRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const stats = [
  {
    value: '50+',
    label: 'Successful Projects'
  },
  {
    value: '85%',
    label: 'Average Waste Reduction'
  },
  {
    value: '40%',
    label: 'Cost Savings Achieved'
  }
];

const caseStudies = [
  {
    title: 'Modern Office Complex Renovation',
    category: 'Commercial',
    beforeImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
    afterImage: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80',
    description: 'Complete interior renovation using sustainable materials for a leading tech company.',
    challenge: 'The client needed to renovate their 50,000 sq ft office space while maintaining their commitment to sustainability and reducing construction waste.',
    solution: 'We implemented our recycled thermocol panels for wall cladding and partitions, providing both aesthetic appeal and environmental benefits.',
    results: [
      '40% reduction in construction waste',
      'Improved thermal insulation resulting in 25% energy savings',
      'LEED certification achieved',
      'Project completed 2 weeks ahead of schedule',
    ],
  },
  {
    title: 'Luxury Residential Development',
    category: 'Residential',
    beforeImage: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80',
    description: 'High-end apartment complex utilizing eco-friendly building materials.',
    challenge: 'Creating luxury finishes while maintaining environmental sustainability and meeting strict building codes.',
    solution: 'Custom-designed thermocol-based panels with premium finishes for interior walls and decorative elements.',
    results: [
      'Achieved premium aesthetic while using recycled materials',
      '30% reduction in material costs',
      'Enhanced acoustic properties',
      'Positive feedback from residents on indoor comfort',
    ],
  },
  {
    title: 'Industrial Warehouse Conversion',
    category: 'Industrial',
    beforeImage: 'https://images.unsplash.com/photo-1565108475579-8074e4fc7874?auto=format&fit=crop&q=80',
    afterImage: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80',
    description: 'Transformation of an old warehouse into a modern manufacturing facility.',
    challenge: 'Upgrading the facility while minimizing environmental impact and maintaining operations.',
    solution: 'Phased implementation of sustainable materials and energy-efficient systems.',
    results: [
      '45% improvement in energy efficiency',
      'Zero waste to landfill during renovation',
      'Improved worker comfort and productivity',
      'ROI achieved within 18 months',
    ],
  }
];

const testimonials = [
  {
    quote: "Zuviron's innovative materials not only helped us achieve our sustainability goals but also provided superior performance in terms of insulation and durability.",
    name: 'John Smith',
    role: 'Project Manager, ABC Constructions',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
  },
  {
    quote: "The quality of their products and level of service exceeded our expectations. We're already planning to use their solutions in our upcoming projects.",
    name: 'Sarah Johnson',
    role: 'Architect, XYZ Designs',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
  },
  {
    quote: "Working with Zuviron has transformed how we approach sustainable construction. Their materials are truly revolutionary.",
    name: 'Michael Brown',
    role: 'Director, Green Building Associates',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
  },
];

export default CaseStudies; 