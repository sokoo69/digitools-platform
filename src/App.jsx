import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Stats from './components/Stats';
import ToggleButtons from './components/ToggleButtons';
import ProductsGrid from './components/ProductsGrid';
import Cart from './components/Cart';
import Steps from './components/Steps';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import productsData from './data/products.json';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [view, setView] = useState('products');

  const handleAddToCart = (product) => {
    const existsInCart = cartItems.find(item => item.id === product.id);

    if (existsInCart) {
      toast.info('This item is already in your cart!', {
        position: 'top-right',
        autoClose: 2000,
      });
      return;
    }

    setCartItems([...cartItems, product]);
    toast.success(`${product.name} added to cart!`, {
      position: 'top-right',
      autoClose: 2000,
    });
  };

  const handleRemoveFromCart = (productId) => {
    const product = cartItems.find(item => item.id === productId);
    setCartItems(cartItems.filter(item => item.id !== productId));

    toast.error(`${product.name} removed from cart`, {
      position: 'top-right',
      autoClose: 2000,
    });
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    toast.success('Checkout successful! Your cart has been cleared.', {
      position: 'top-right',
      autoClose: 3000,
    });

    setCartItems([]);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar cartCount={cartItems.length} />
      <Banner />
      <Stats />
      <ToggleButtons view={view} setView={setView} cartCount={cartItems.length} />

      {view === 'products' ? (
        <ProductsGrid products={productsData} onAddToCart={handleAddToCart} />
      ) : (
        <Cart
          cartItems={cartItems}
          onRemove={handleRemoveFromCart}
          onCheckout={handleCheckout}
        />
      )}

      <Steps />
      <Pricing />
      <Footer />

      <ToastContainer />
    </div>
  );
}

export default App;
