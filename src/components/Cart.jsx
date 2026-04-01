import CartItem from './CartItem';
import { ShoppingCart } from 'lucide-react';

const Cart = ({ cartItems, onRemove, onCheckout }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="bg-gray-50 py-10 pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-extrabold text-gray-900">Your Cart</h2>
          </div>

          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <ShoppingCart size={64} className="text-gray-200 mb-4" />
              <p className="text-gray-400 font-semibold text-lg">Your cart is empty</p>
              <p className="text-gray-400 text-sm mt-1">Add some products to get started!</p>
            </div>
          ) : (
            <>
              <div className="space-y-3 mb-6">
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} onRemove={onRemove} />
                ))}
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
                <div className="flex justify-between items-center mb-5">
                  <span className="text-base font-semibold text-gray-700">Total</span>
                  <span className="text-2xl font-extrabold text-gray-900">
                    ${total.toFixed(2)}
                  </span>
                </div>
                <button
                  onClick={onCheckout}
                  className="btn btn-primary w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl transition-all text-sm shadow-md hover:shadow-lg border-0"
                >
                  Proceed To Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cart;
