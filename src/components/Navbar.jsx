import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = ({ cartCount }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-extrabold text-purple-600 tracking-tight">DigiTools</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-purple-600 font-medium transition-colors text-sm">Products</a>
            <a href="#features" className="text-gray-600 hover:text-purple-600 font-medium transition-colors text-sm">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-purple-600 font-medium transition-colors text-sm">Pricing</a>
            <a href="#testimonials" className="text-gray-600 hover:text-purple-600 font-medium transition-colors text-sm">Testimonials</a>
            <a href="#faq" className="text-gray-600 hover:text-purple-600 font-medium transition-colors text-sm">FAQ</a>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <button className="p-2 rounded-full hover:bg-purple-50 transition-colors relative">
                <ShoppingCart size={22} className="text-gray-600" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center leading-none">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

            <button className="hidden md:block text-gray-600 hover:text-purple-600 font-medium text-sm transition-colors px-3 py-1.5">
              Login
            </button>

            <button className="hidden md:block btn btn-primary bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm px-5 py-2 rounded-lg transition-colors shadow-sm border-0">
              Get Started
            </button>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 pt-3 space-y-2">
            <a href="#home" className="block px-3 py-2 text-gray-600 hover:text-purple-600 font-medium text-sm">Products</a>
            <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-purple-600 font-medium text-sm">Features</a>
            <a href="#pricing" className="block px-3 py-2 text-gray-600 hover:text-purple-600 font-medium text-sm">Pricing</a>
            <a href="#testimonials" className="block px-3 py-2 text-gray-600 hover:text-purple-600 font-medium text-sm">Testimonials</a>
            <a href="#faq" className="block px-3 py-2 text-gray-600 hover:text-purple-600 font-medium text-sm">FAQ</a>
            <div className="flex gap-3 px-3 pt-2">
              <button className="btn btn-outline text-gray-600 font-medium text-sm px-4 py-2 rounded-lg">Login</button>
              <button className="btn btn-primary bg-purple-600 text-white font-semibold text-sm px-5 py-2 rounded-lg border-0">Get Started</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
