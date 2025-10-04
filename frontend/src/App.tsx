import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { AdminProvider, useAdmin } from './context/AdminContext';
import { Header } from './components/Header';
import { ProductGrid } from './components/ProductGrid';
import { CartSidebar } from './components/CartSidebar';
import { AdminLogin } from './components/AdminLogin';
import { AdminPanel } from './components/AdminPanel';
import { Shield } from 'lucide-react';

function AppContent() {
  const { isAdminAuthenticated } = useAdmin();
  const [showAdmin, setShowAdmin] = useState(false);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  const handleAdminClick = () => {
    if (isAdminAuthenticated) {
      setShowAdmin(true);
    } else {
      setShowLoginPrompt(true);
    }
  };

  const handleLoginSuccess = () => {
    setShowLoginPrompt(false);
    setShowAdmin(true);
  };

  const handleBackToShop = () => {
    setShowAdmin(false);
  };

  if (showLoginPrompt) {
    return <AdminLogin onLoginSuccess={handleLoginSuccess} />;
  }

  if (showAdmin) {
    return <AdminPanel onBackToShop={handleBackToShop} />;
  }

  return (
    <CartProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <Header />
        <ProductGrid />
        <CartSidebar />
        
        {/* Admin Access Button */}
        <button
          onClick={handleAdminClick}
          className="fixed bottom-6 left-6 flex items-center gap-2 px-4 py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 z-40"
          title="Admin Panel"
        >
          <Shield className="w-5 h-5" />
          <span className="hidden sm:inline">Admin</span>
        </button>
      </div>
    </CartProvider>
  );
}

function App() {
  return (
    <AdminProvider>
      <AppContent />
    </AdminProvider>
  );
}

export default App;