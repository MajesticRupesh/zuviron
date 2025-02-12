import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { FaLeaf, FaRecycle, FaSeedling, FaSolarPanel, FaWind, FaTree } from 'react-icons/fa';
import GradientText from '../components/ui/GradientText';
import BackgroundPattern from '../components/ui/BackgroundPattern';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

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
    <span ref={ref} className="font-bold text-4xl md:text-5xl bg-gradient-to-r from-green-600 to-green-400 text-transparent bg-clip-text">
      {count}{suffix}
    </span>
  );
};

const Sustainability = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <div className="grid grid-cols-3 h-full">
            <div className="relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1536147116438-62679a5e01f2?auto=format&fit=crop&q=80"
                alt="Sustainability"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80"
                alt="Nature"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80"
                alt="Renewable Energy"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-gray-900/95" />
          <div className="absolute inset-0">
            <BackgroundPattern color="text-green-500/10" />
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
              className="inline-block mb-6 px-6 py-2 rounded-full bg-green-500/10 border border-green-500/20"
            >
              <span className="text-green-400">Environmental Impact</span>
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Building a{' '}
              <GradientText gradient="from-green-300 via-green-400 to-green-200">
                Greener Tomorrow
              </GradientText>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Our commitment to sustainability goes beyond products – we're creating a future where environmental responsibility meets innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Environmental{' '}
              <GradientText gradient="from-green-600 to-green-400">
                Impact
              </GradientText>
            </h2>
            <p className="text-gray-600 text-lg">
              Making measurable differences in waste reduction and sustainable construction
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
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="mb-6">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{stat.title}</h3>
                  <p className="text-gray-600">{stat.description}</p>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/5 to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <BackgroundPattern color="text-gray-900" />
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
              Our Sustainable{' '}
              <GradientText gradient="from-green-600 to-green-400">
                Process
              </GradientText>
            </h2>
            <p className="text-gray-600 text-lg">
              Every step of our process is designed with sustainability in mind
            </p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-green-200 via-green-400 to-green-200 -translate-y-1/2 hidden md:block" />
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
                  <div className="bg-white p-6 rounded-xl shadow-lg relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-center">{step.title}</h3>
                    <p className="text-gray-600 text-center">{step.description}</p>
                  </div>
                  <div className="hidden md:block absolute top-1/2 left-1/2 w-6 h-6 bg-green-500 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-lg z-20" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
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
              Our Green{' '}
              <GradientText gradient="from-green-300 via-green-400 to-green-200">
                Initiatives
              </GradientText>
            </h2>
            <p className="text-gray-300 text-lg">
              Comprehensive programs driving environmental sustainability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                    {initiative.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{initiative.title}</h3>
                  <p className="text-gray-400">{initiative.description}</p>
                  <ul className="mt-4 space-y-2">
                    {initiative.points.map((point, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-300">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
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
    description: 'Kilograms of thermocol waste recycled and repurposed'
  },
  {
    value: 30,
    suffix: '%',
    title: 'Energy Savings',
    description: 'Average reduction in building energy consumption'
  },
  {
    value: 100,
    suffix: '+',
    title: 'Projects',
    description: 'Sustainable construction projects completed'
  },
  {
    value: 5000,
    suffix: '',
    title: 'Trees Saved',
    description: 'Through our sustainable practices and initiatives'
  }
];

const process = [
  {
    icon: <FaRecycle className="w-8 h-8 text-green-600" />,
    title: 'Collection',
    description: 'Gathering thermocol waste from various sources'
  },
  {
    icon: <FaLeaf className="w-8 h-8 text-green-600" />,
    title: 'Processing',
    description: 'Sorting and cleaning the collected materials'
  },
  {
    icon: <FaSeedling className="w-8 h-8 text-green-600" />,
    title: 'Innovation',
    description: 'Converting waste into building materials'
  },
  {
    icon: <FaTree className="w-8 h-8 text-green-600" />,
    title: 'Implementation',
    description: 'Using materials in sustainable construction'
  }
];

const initiatives = [
  {
    icon: <FaRecycle className="w-6 h-6 text-green-400" />,
    title: 'Waste Management',
    description: 'Comprehensive recycling and waste reduction programs',
    points: [
      'Zero waste to landfill goal',
      'Advanced sorting technologies',
      'Circular economy approach'
    ]
  },
  {
    icon: <FaSolarPanel className="w-6 h-6 text-green-400" />,
    title: 'Renewable Energy',
    description: 'Commitment to clean energy in our operations',
    points: [
      'Solar-powered facilities',
      'Energy-efficient equipment',
      'Smart energy management'
    ]
  },
  {
    icon: <FaWind className="w-6 h-6 text-green-400" />,
    title: 'Carbon Reduction',
    description: 'Active measures to minimize carbon footprint',
    points: [
      'Carbon offset programs',
      'Sustainable transportation',
      'Green supply chain'
    ]
  }
];

export default Sustainability; 