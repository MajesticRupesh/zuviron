import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaArrowLeft, FaLeaf, FaRecycle, FaCheck } from 'react-icons/fa';
import { ProductCategory, getProductBySlug } from '../services/productService';
import { databases, DATABASE_ID, COLLECTIONS } from '../config/appwrite';
import GradientText from '../components/ui/GradientText';
import BackgroundPattern from '../components/ui/BackgroundPattern';

const ProductDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<ProductCategory | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!slug) {
        setError('Invalid product URL');
        setIsLoading(false);
        return;
      }

      try {
        const foundProduct = await getProductBySlug(slug);
        console.log('ProductDetails - Raw product data:', foundProduct); // Debug log
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setError('Product not found');
        }
      } catch (err) {
        console.error('Error fetching product:', err);
        setError('Failed to load product details');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

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

  if (error || !product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-red-600 mb-4">{error || 'Product not found'}</p>
        <button
          onClick={() => navigate('/products')}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          <FaArrowLeft /> Back to Products
        </button>
      </div>
    );
  }

  const renderHeroImage = () => {
    if (!product?.image) {
      console.log('No image URL found in product data');
      return null;
    }

    console.log('Attempting to render image with URL:', product.image);
    
    return (
      <div className="absolute inset-0 z-0">
        <img 
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            console.error('Image failed to load:', product.image);
            e.currentTarget.src = 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89';
          }}
        />
      </div>
    );
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-32">
        <div className="absolute inset-0">
          {renderHeroImage()}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-gray-900/20 to-gray-900/20" />
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-gray-900/70 via-gray-900/60 to-gray-900/70" />
          <div className="absolute inset-0 z-20">
            <div className="h-full w-full" style={{ 
              background: `radial-gradient(circle at 50% 50%, rgba(34,197,94,0.1) 0%, rgba(0,0,0,0) 50%)` 
            }} />
          </div>
          <div className="absolute inset-0 z-20 mix-blend-multiply opacity-40">
            <BackgroundPattern color="text-brand-500/10" />
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <button
              onClick={() => navigate('/products')}
              className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors mb-8"
            >
              <FaArrowLeft /> Back to Products
            </button>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <GradientText gradient="from-brand-300 via-brand-400 to-brand-200">
                {product.title}
              </GradientText>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {product.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-4xl mx-auto"
          >
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                <span className="text-brand-400">Product Details</span>
              </h2>
              <div className="text-gray-600 space-y-6 whitespace-pre-wrap">
                {product.details}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl overflow-hidden">
            <div className="relative px-6 py-24 md:px-12 text-center">
              <div className="absolute inset-0 mix-blend-multiply opacity-20">
                <BackgroundPattern color="text-brand-500" />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Interested in This Product?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Contact us to learn more about specifications, pricing, and customization options
                </p>
                <button
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center px-8 py-4 bg-brand-600 hover:bg-brand-700 rounded-full text-white transition-all duration-300 transform hover:scale-105"
                >
                  Get in Touch
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails; 