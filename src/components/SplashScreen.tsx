import { motion } from 'framer-motion';
import { LOGO_NAME_ONLY_URL, LOGO_URL } from '../utils/constants';

const SplashScreen = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 z-50 flex items-center justify-center">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex flex-col items-center"
        >
          <img 
            src={LOGO_URL} 
            alt="Zuviron Logo" 
            className="w-24 h-24 mb-4"
          />
          <img 
            src={LOGO_NAME_ONLY_URL} 
            alt="Zuviron" 
            className="h-12 w-auto"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="w-16 h-16 mb-4 relative">
            <div className="absolute inset-0 border-4 border-brand-200 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-brand-600 rounded-full border-t-transparent animate-spin"></div>
          </div>
          <p className="text-gray-400">Loading amazing things...</p>
        </motion.div>
      </div>
    </div>
  );
};

export default SplashScreen; 