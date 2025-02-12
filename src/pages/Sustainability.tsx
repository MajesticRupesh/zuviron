import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

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

const Counter = ({ end, duration = 2, suffix = '' }: CounterProps) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000/60);
      return () => clearInterval(timer);
    }
  }, [inView, end, duration]);

  return (
    <span ref={ref} className="font-bold text-4xl md:text-5xl text-green-600">
      {count}{suffix}
    </span>
  );
};

const Sustainability = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1536147116438-62679a5e01f2?auto=format&fit=crop&q=80"
            alt="Sustainability Hero"
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
              Our Commitment to Sustainability
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-xl text-gray-300"
            >
              Leading the way in sustainable construction through innovative waste management
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Impact Statistics */}
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
              Our Environmental Impact
            </h2>
            <p className="text-gray-600">
              Making a measurable difference in waste reduction and sustainable construction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-lg shadow-lg"
              >
                <div className="mb-4">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{stat.title}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Sustainable Process
            </h2>
            <p className="text-gray-600">
              From waste collection to finished product, every step is designed with sustainability in mind
            </p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-green-200 -translate-y-1/2 hidden md:block" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-white p-6 rounded-lg shadow-lg text-center relative z-10">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  <div className="hidden md:block absolute top-1/2 left-1/2 w-6 h-6 bg-green-500 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-lg" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
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
              Our Certifications
            </h2>
            <p className="text-gray-600">
              Recognized for our commitment to environmental sustainability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white p-6 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="w-20 h-20 mx-auto mb-4 relative">
                  <div className="absolute inset-0 bg-green-100 rounded-full transform transition-transform duration-300 group-hover:scale-110" />
                  <div className="relative flex items-center justify-center h-full text-5xl">
                    {cert.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                <p className="text-gray-600">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const impactStats = [
  {
    value: 500,
    suffix: 'K',
    title: 'Waste Reduced',
    description: 'Kilograms of thermocol waste recycled',
  },
  {
    value: 30,
    suffix: '%',
    title: 'Energy Savings',
    description: 'Average reduction in building energy consumption',
  },
  {
    value: 100,
    suffix: '+',
    title: 'Projects',
    description: 'Sustainable construction projects completed',
  },
  {
    value: 5000,
    suffix: '',
    title: 'Trees Saved',
    description: 'Through our sustainable practices',
  },
];

const process = [
  {
    icon: '🔄',
    title: 'Collection',
    description: 'Gathering thermocol waste from various sources',
  },
  {
    icon: '🔍',
    title: 'Processing',
    description: 'Sorting and cleaning the collected materials',
  },
  {
    icon: '⚡',
    title: 'Innovation',
    description: 'Converting waste into building materials',
  },
  {
    icon: '✨',
    title: 'Implementation',
    description: 'Using materials in sustainable construction',
  },
];

const certifications = [
  {
    icon: '🌟',
    title: 'ISO 14001',
    description: 'Environmental Management System Certification',
  },
  {
    icon: '🌱',
    title: 'Green Building',
    description: 'LEED Certification Partner',
  },
  {
    icon: '♻️',
    title: 'Zero Waste',
    description: 'Certified Waste Management Process',
  },
];

export default Sustainability; 