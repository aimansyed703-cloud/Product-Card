
const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl">
      <div className="relative flex h-52 items-center justify-center overflow-hidden bg-slate-50 p-5 sm:h-56">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="text-sm text-slate-400">
            Product image coming soon
          </div>
        )}

        <span
          className={`absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-semibold ${
            product.inStock
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-600"
          }`}
        >
          {product.inStock ? "In Stock" : "Out of Stock"}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h2 className="mb-2 text-lg font-bold capitalize text-slate-800 transition-colors group-hover:text-indigo-600 sm:text-xl">
          {product.name}
        </h2>

        <p className="mb-5 text-2xl font-extrabold text-indigo-600">
          ${product.price}
        </p>

        <button
          className="mt-auto min-h-11 w-full rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-500 sm:text-base"
          disabled={!product.inStock}
          onClick={onAddToCart}
        >
          {product.inStock ? "Add to Cart +" : "Out of Stock"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
