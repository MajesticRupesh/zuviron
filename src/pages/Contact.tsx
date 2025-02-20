import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaInstagram, FaArrowRight } from 'react-icons/fa';
import GradientText from '../components/ui/GradientText';
import BackgroundPattern from '../components/ui/BackgroundPattern';
import { submitContactForm } from '../services/contactService';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
};

const Contact = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await submitContactForm(formData);
      setSuccess(true);
      setFormData(initialFormData);
    } catch (err) {
      console.error('Form submission error:', err);
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/80" />
          <div className="grid grid-cols-3 h-full">
            <div className="relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80"
                alt="Contact Us"
                className="absolute inset-0 w-full h-full object-cover transform scale-110 hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80"
                alt="Contact Us"
                className="absolute inset-0 w-full h-full object-cover transform scale-110 hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80"
                alt="Contact Us"
                className="absolute inset-0 w-full h-full object-cover transform scale-110 hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/80 to-gray-900/90" />
          <div className="absolute inset-0">
            <div className="h-full w-full" style={{ 
              background: `radial-gradient(circle at 50% 50%, rgba(8,145,178,0.1) 0%, rgba(0,0,0,0) 50%)` 
            }} />
          </div>
          <div className="absolute inset-0 mix-blend-multiply">
            <BackgroundPattern color="text-brand-500" />
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
              className="inline-block mb-6 px-6 py-2 rounded-full bg-brand-500/10 border border-brand-500/20"
            >
              <span className="text-brand-400">Get in Touch</span>
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Let's Start a{' '}
              <GradientText gradient="from-brand-300 via-brand-400 to-brand-200">
                Conversation
              </GradientText>
            </h1>
            <p className="text-xl text-gray-300">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />
        <div className="absolute left-1/2 bottom-0 w-px h-24 bg-gradient-to-t from-brand-500/20 to-transparent transform -translate-x-1/2" />
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl font-bold mb-8">
                  Contact{' '}
                  <GradientText gradient="from-brand-600 to-brand-400">
                    Information
                  </GradientText>
                </h2>
                <p className="text-gray-600 text-lg mb-12">
                  Feel free to reach out through any of our channels below. We're here to help!
                </p>
              </div>

              <div className="space-y-8">
                <motion.div 
                  className="flex items-start space-x-6 p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-14 h-14 bg-brand-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="w-7 h-7 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Location</h3>
                    <p className="text-gray-600">
                      Mumbai, Maharashtra, India
                    </p>
                  </div>
                </motion.div>

                <motion.a 
                  href="tel:+919821255584"
                  className="flex items-start space-x-6 p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  aria-label="Call us at +91 9821255584"
                >
                  <div className="w-14 h-14 bg-brand-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-200 transition-colors duration-300">
                    <FaPhone className="w-7 h-7 text-brand-600" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold mb-2">Phone</h3>
                    <div className="text-gray-600 group-hover:text-brand-600 transition-colors duration-300 flex items-center gap-2">
                      +91 9821255584
                      <FaArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </div>
                  </div>
                </motion.a>

                <motion.a 
                  href="mailto:admin@zuviron.com"
                  className="flex items-start space-x-6 p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  aria-label="Email us at admin@zuviron.com"
                >
                  <div className="w-14 h-14 bg-brand-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-200 transition-colors duration-300">
                    <FaEnvelope className="w-7 h-7 text-brand-600" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                    <div className="text-gray-600 group-hover:text-brand-600 transition-colors duration-300 flex items-center gap-2">
                      admin@zuviron.com
                      <FaArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </div>
                  </div>
                </motion.a>
              </div>

              {/* Social Media Links */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  <motion.a
                    href="#"
                    className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center text-brand-600 hover:bg-brand-200 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center text-brand-600 hover:bg-brand-200 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaTwitter className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center text-brand-600 hover:bg-brand-200 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaInstagram className="w-6 h-6" />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            >
              <h2 className="text-3xl font-bold mb-8">
                Send us a{' '}
                <GradientText gradient="from-brand-600 to-brand-400">
                  Message
                </GradientText>
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200"
                      placeholder="How can we help?"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 text-red-600 px-4 py-3 rounded-xl text-sm"
                  >
                    {error}
                  </motion.div>
                )}

                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-brand-50 text-brand-600 px-4 py-3 rounded-xl text-sm"
                  >
                    Message sent successfully! We'll get back to you soon.
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 px-6 rounded-xl text-white font-semibold transition-all duration-200 
                    ${isLoading 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-700 hover:to-brand-600'
                    }`}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      Send Message
                      <FaArrowRight className="ml-2 text-lg" />
                    </span>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 