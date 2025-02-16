import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import CaseStudies from './pages/CaseStudies';
import Sustainability from './pages/Sustainability';
import Contact from './pages/Contact';
import AdminLogin from './pages/Admin/Login';
import AdminDashboard from './pages/Admin/Dashboard';
import SplashScreen from './components/SplashScreen';
import ScrollProgress from './components/ui/ScrollProgress';
import { preloadImages } from './utils/imagePreloader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Preload all images
        await preloadImages();
        
        // Add a minimum delay to show the splash screen
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (error) {
        console.error('Error initializing app:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeApp();
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollProgress />
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          
          {/* Public Routes */}
          <Route path="*" element={
            <>
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/products/:slug" element={<ProductDetails />} />
                  <Route path="/case-studies" element={<CaseStudies />} />
                  <Route path="/sustainability" element={<Sustainability />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </main>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
