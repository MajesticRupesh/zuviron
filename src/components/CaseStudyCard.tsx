import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CaseStudy } from '../services/caseStudyService';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index: number;
}

const CaseStudyCard = ({ caseStudy, index }: CaseStudyCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <Link 
        to={`/blogs/${caseStudy.slug}`}
        className="block h-full focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 rounded-2xl"
      >
        <div className="relative w-full pb-[120%]">
          <img
            src={caseStudy.image}
            alt={caseStudy.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <h3 className="text-2xl font-bold text-white mb-2">{caseStudy.title}</h3>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-300">
                {new Date(caseStudy.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              <span className="inline-flex items-center text-brand-400 group-hover:text-brand-300 transition-colors">
                Read More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default CaseStudyCard; 