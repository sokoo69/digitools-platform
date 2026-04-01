const CartItem = ({ item, onRemove }) => {
  return (
    <div className="flex items-center justify-between bg-white border border-gray-100 rounded-xl px-5 py-4 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="bg-purple-50 p-2 rounded-lg">
          <img
            src={item.icon}
            alt={item.name}
            className="w-9 h-9 object-contain"
          />
        </div>
        <div>
          <p className="font-semibold text-gray-900 text-sm">{item.name}</p>
          <p className="text-purple-600 font-bold text-sm">${item.price}</p>
        </div>
      </div>

      <button
        onClick={() => onRemove(item.id)}
        className="text-red-500 hover:text-red-700 font-semibold text-sm transition-colors"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
