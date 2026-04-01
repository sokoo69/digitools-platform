const ToggleButtons = ({ view, setView, cartCount }) => {
  return (
    <section id="products" className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
            Premium Digital Tools
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
          </p>
        </div>

        <div className="flex justify-center gap-3">
          <button
            onClick={() => setView('products')}
            className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${view === 'products'
                ? 'bg-purple-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
          >
            Products
          </button>
          <button
            onClick={() => setView('cart')}
            className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all flex items-center gap-2 ${view === 'cart'
                ? 'bg-purple-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
          >
            Cart
            {cartCount > 0 && (
              <span className={`text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center ${view === 'cart' ? 'bg-white text-purple-600' : 'bg-purple-600 text-white'
                }`}>
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ToggleButtons;
