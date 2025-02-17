import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPlus, FaEdit, FaTrash, FaSignOutAlt, FaInbox, FaBoxes } from 'react-icons/fa';
import { account } from '../../config/appwrite';
import { ProductCategory, getProductCategories, deleteProductCategory } from '../../services/productService';
import { ContactMessage, getContactMessages, deleteContactMessage } from '../../services/contactService';
import ProductCategoryModal from './ProductCategoryModal';

type TabType = 'products' | 'messages';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabType>('products');
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | null>(null);

  useEffect(() => {
    checkAuth();
    if (activeTab === 'products') {
      fetchCategories();
    } else {
      fetchMessages();
    }
  }, [activeTab]);

  const checkAuth = async () => {
    try {
      await account.get();
    } catch (err) {
      navigate('/admin/login');
    }
  };

  const fetchCategories = async () => {
    setIsLoading(true);
    setError(null);
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

  const fetchMessages = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getContactMessages();
      setMessages(data);
    } catch (err) {
      setError('Failed to load messages');
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
        await fetchCategories();
      } catch (err) {
        console.error('Delete error:', err);
        setError('Failed to delete category');
      }
    }
  };

  const handleDeleteMessage = async (message: ContactMessage) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      try {
        await deleteContactMessage(message.$id);
        await fetchMessages();
      } catch (err) {
        console.error('Delete error:', err);
        setError('Failed to delete message');
      }
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedCategory(null);
    fetchCategories();
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
          {/* Tabs */}
          <div className="border-b border-gray-200 mb-6">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('products')}
                className={`${
                  activeTab === 'products'
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium flex items-center`}
              >
                <FaBoxes className="mr-2" />
                Products
              </button>
              <button
                onClick={() => setActiveTab('messages')}
                className={`${
                  activeTab === 'messages'
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium flex items-center`}
              >
                <FaInbox className="mr-2" />
                Messages
              </button>
            </nav>
          </div>

          {activeTab === 'products' ? (
            <>
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
            </>
          ) : (
            <>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Contact Messages</h2>
              </div>

              {error ? (
                <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg">
                  {error}
                </div>
              ) : (
                <div className="space-y-6">
                  {messages.map((message) => (
                    <motion.div
                      key={message.$id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white rounded-lg shadow p-6"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{message.subject}</h3>
                          <p className="text-sm text-gray-500 mt-1">
                            From: {message.name} ({message.email})
                          </p>
                          <p className="text-sm text-gray-500">Phone: {message.phone}</p>
                          <p className="text-sm text-gray-500">
                            Sent: {new Date(message.createdAt).toLocaleString()}
                          </p>
                        </div>
                        <button
                          onClick={() => handleDeleteMessage(message)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <FaTrash />
                        </button>
                      </div>
                      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                        <p className="text-gray-700 whitespace-pre-wrap">{message.message}</p>
                      </div>
                    </motion.div>
                  ))}
                  {messages.length === 0 && (
                    <div className="text-center py-12 bg-white rounded-lg shadow">
                      <FaInbox className="mx-auto h-12 w-12 text-gray-400" />
                      <h3 className="mt-2 text-sm font-medium text-gray-900">No messages</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        You haven't received any contact messages yet.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </>
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