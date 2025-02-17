import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import GradientText from '../components/ui/GradientText';
import BackgroundPattern from '../components/ui/BackgroundPattern';
import CaseStudyCard from '../components/CaseStudyCard';
import { CaseStudy, getCaseStudies, getCaseStudyBySlug } from '../services/caseStudyService';

const CaseStudies = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Reset states when slug changes
    setSelectedCase(null);
    setError(null);
    setIsLoading(true);

    if (slug) {
      fetchSingleCaseStudy();
    } else {
      fetchCaseStudies();
    }
  }, [slug]); // Only depend on slug changes

  const fetchCaseStudies = async () => {
    try {
      const data = await getCaseStudies();
      setCaseStudies(data);
      setSelectedCase(null); // Clear selected case when viewing list
    } catch (err) {
      setError('Failed to load case studies');
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchSingleCaseStudy = async () => {
    if (!slug) return;
    try {
      const data = await getCaseStudyBySlug(slug);
      if (data) {
        setSelectedCase(data);
        // Don't clear caseStudies here to maintain list state
      } else {
        setError('Case study not found');
      }
    } catch (err) {
      setError('Failed to load case study');
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    navigate('/case-studies');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 relative">
          <div className="absolute inset-0 border-4 border-green-200 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-green-600 rounded-full border-t-transparent animate-spin"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={handleBack}
            className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <FaArrowLeft className="mr-2" /> Back to Case Studies
          </button>
        </div>
      </div>
    );
  }

  if (selectedCase) {
    return (
      <div>
        {/* Hero Section */}
        <section className="relative bg-gray-900 text-white py-32">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/80" />
            <img 
              src={selectedCase.image}
              alt={selectedCase.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0">
              <BackgroundPattern color="text-green-500/10" />
            </div>
          </div>
          
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <button
                onClick={handleBack}
                className="flex items-center text-green-400 hover:text-green-300 transition-colors mb-8"
              >
                <FaArrowLeft className="mr-2" /> Back to Case Studies
              </button>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {selectedCase.title}
              </h1>
              <p className="text-xl text-gray-300 mb-4">
                {selectedCase.description}
              </p>
              <p className="text-gray-400">
                Published on {new Date(selectedCase.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="prose prose-lg max-w-none"
              >
                <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg">
                  <div className="text-gray-600 space-y-6 whitespace-pre-wrap">
                    {selectedCase.description}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/80" />
          <img 
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80"
            alt="Case Studies"
            className="w-full h-full object-cover"
          />
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Success{' '}
              <GradientText gradient="from-green-300 via-green-400 to-green-200">
                Stories
              </GradientText>
            </h1>
            <p className="text-xl text-gray-300">
              Discover how we've helped businesses transform their waste management and construction practices
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <CaseStudyCard
                key={caseStudy.$id}
                caseStudy={caseStudy}
                index={index}
              />
            ))}
          </div>

          {caseStudies.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No case studies available at the moment.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CaseStudies; 