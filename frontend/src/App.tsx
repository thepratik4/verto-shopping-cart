import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { ProductGrid } from './components/ProductGrid';
import { CartSidebar } from './components/CartSidebar';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <Header />
        <ProductGrid />
        <CartSidebar />
      </div>
    </CartProvider>
  );
}

export default App;
