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
      className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
    >
      <Link to={`/case-studies/${caseStudy.slug}`} className="block">
        <div className="relative pt-[56.25%]">
          <img
            src={caseStudy.image}
            alt={caseStudy.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-bold text-white mb-2">{caseStudy.title}</h3>
            <p className="text-gray-200 line-clamp-2 text-sm">{caseStudy.description}</p>
          </div>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">
              {new Date(caseStudy.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
            <span className="text-green-600 font-medium group-hover:text-green-700 transition-colors">
              Read More →
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default CaseStudyCard; 