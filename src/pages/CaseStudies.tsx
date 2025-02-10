import { motion } from 'framer-motion';

const CaseStudies = () => {
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
              Case Studies
            </h1>
            <p className="text-xl text-gray-300">
              Explore how our sustainable solutions have transformed projects across industries
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                    <div className="flex items-center justify-center text-6xl">
                      {study.icon}
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
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900">Challenge</h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Solution</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Results</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                          {study.results.map((result, i) => (
                            <li key={i}>{result}</li>
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
              Client Testimonials
            </h2>
            <p className="text-gray-600">
              Hear what our clients have to say about their experience working with us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <div className="text-green-600 text-4xl mb-4">❝</div>
                <p className="text-gray-600 mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
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
    icon: '🏢',
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
    icon: '🏘️',
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
  },
  {
    quote: "The quality of their products and level of service exceeded our expectations. We're already planning to use their solutions in our upcoming projects.",
    name: 'Sarah Johnson',
    role: 'Architect, XYZ Designs',
  },
  {
    quote: "Working with Zuviron has transformed how we approach sustainable construction. Their materials are truly revolutionary.",
    name: 'Michael Brown',
    role: 'Director, Green Building Associates',
  },
];

export default CaseStudies; 