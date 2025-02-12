import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

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
      <section className="relative bg-gray-900 text-white py-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80"
            alt="Case Studies Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
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
              Case Studies
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-xl text-gray-300"
            >
              Explore how our sustainable solutions have transformed projects across industries
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <div className="relative h-80 overflow-hidden">
                      <img 
                        src={study.beforeImage} 
                        alt={`${study.title} - Before`}
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                      />
                      <img 
                        src={study.afterImage} 
                        alt={`${study.title} - After`}
                        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-black/70 text-white px-4 py-2 rounded-full text-sm">
                        Hover to see transformation
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 text-sm font-medium text-green-600 bg-green-100 rounded-full">
                        {study.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">{study.title}</h3>
                    <p className="text-gray-600 mb-6">{study.description}</p>
                    <div className="space-y-6">
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        whileInView={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <h4 className="font-semibold text-gray-900 flex items-center">
                          <span className="w-2 h-2 bg-red-500 rounded-full mr-2" />
                          Challenge
                        </h4>
                        <p className="text-gray-600 ml-4">{study.challenge}</p>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        whileInView={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        viewport={{ once: true }}
                      >
                        <h4 className="font-semibold text-gray-900 flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                          Solution
                        </h4>
                        <p className="text-gray-600 ml-4">{study.solution}</p>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        whileInView={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        <h4 className="font-semibold text-gray-900 flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                          Results
                        </h4>
                        <ul className="ml-4 space-y-2">
                          {study.results.map((result, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-center text-gray-600"
                            >
                              <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2" />
                              {result}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Client Testimonials
            </h2>
            <p className="text-gray-600">
              Hear what our clients have to say about their experience working with us
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                key={currentTestimonial}
                className="bg-white p-8 md:p-12 rounded-lg shadow-lg"
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                    <img 
                      src={testimonials[currentTestimonial].image} 
                      alt={testimonials[currentTestimonial].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-green-600 text-4xl mb-4">❝</div>
                    <p className="text-gray-600 text-lg mb-6 italic">
                      {testimonials[currentTestimonial].quote}
                    </p>
                    <div>
                      <p className="font-semibold text-gray-900 text-lg">
                        {testimonials[currentTestimonial].name}
                      </p>
                      <p className="text-gray-600">
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
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors duration-200"
                aria-label="Previous testimonial"
              >
                <FaArrowLeft className="w-6 h-6 text-gray-600" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors duration-200"
                aria-label="Next testimonial"
              >
                <FaArrowRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

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