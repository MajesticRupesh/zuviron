import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPlus, FaEdit, FaTrash, FaSignOutAlt } from 'react-icons/fa';
import { account } from '../../config/appwrite';
import { ProductCategory, getProductCategories, deleteProductCategory } from '../../services/productService';
import ProductCategoryModal from './ProductCategoryModal';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | null>(null);

  useEffect(() => {
    checkAuth();
    fetchCategories();
  }, []);

  const checkAuth = async () => {
    try {
      await account.get();
    } catch (err) {
      navigate('/admin/login');
    }
  };

  const fetchCategories = async () => {
    try {
      const data = await getProductCategories();
      setCategories(data);
    } catch (err) {
      setError('Failed to load categories');
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await account.deleteSession('current');
      navigate('/admin/login');
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  const handleAddNew = () => {
    setSelectedCategory(null);
    setIsModalOpen(true);
  };

  const handleEdit = (category: ProductCategory) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const handleDelete = async (category: ProductCategory) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      try {
        await deleteProductCategory(category.$id);
        await fetchCategories(); // Refresh the list
      } catch (err) {
        console.error('Delete error:', err);
        setError('Failed to delete category');
      }
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedCategory(null);
    fetchCategories(); // Refresh the list after changes
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

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            </div>
            <button
              onClick={handleLogout}
              className="inline-flex items-center px-4 py-2 text-gray-700 hover:text-red-600 transition-colors"
            >
              <FaSignOutAlt className="mr-2" />
              Logout
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Product Categories</h2>
            <button
              onClick={handleAddNew}
              className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <FaPlus className="mr-2" />
              Add New Category
            </button>
          </div>

          {error ? (
            <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg">
              {error}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Image
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Slug
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {categories.map((category) => (
                    <motion.tr
                      key={category.$id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <img
                          src={category.image}
                          alt={category.title}
                          className="h-10 w-10 rounded-lg object-cover"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {category.title}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{category.slug}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-500 truncate max-w-xs">
                          {category.description}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => handleEdit(category)}
                          className="text-green-600 hover:text-green-900 mr-4"
                        >
                          <FaEdit className="inline-block" />
                        </button>
                        <button
                          onClick={() => handleDelete(category)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <FaTrash className="inline-block" />
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      {isModalOpen && (
        <ProductCategoryModal
          category={selectedCategory}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
};

export default AdminDashboard; 