
import { useState } from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "iphone 18 pro",
    price: 999,
    image:
      "https://www.istudiosg.com/cdn/shop/files/IMG-21443907_m_jpeg_1_298cbba3-b8b6-48a5-b537-5b81e8c6db1a.jpg?v=1788983147&width=823",
    inStock: false,
  },
  {
    id: 2,
    name: "Watch",
    price: 399,
    image: "https://nayabazar.pk/images/products/8sqc6RykQizdf3H.webp",
    inStock: true,
  },
  {
    id: 3,
    name: "lipstick",
    price: 8.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkcRQDZXcd8OMzKH56F9jLd-btp0N81TjRBq8FcG7rvg&s=10",
    inStock: false,
  },
  {
    id: 4,
    name: "Earburds",
    price: 29.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnNjnffbgjsDDz-_cdCFx2szvHT6HyPnK70g733VuV2A&s=10",
    inStock: true,
  },
  {
    id: 5,
    name: "Perfume",
    price: 39.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrXWOvpIR1yzCjn-dsxfrKTkhpLLhX9SMWykHSF-OVIw&s=10",
    inStock: true,
  },
  {
    id: 6,
    name: "Headphones",
    price: 59.99,
    image: "data:image/jpeg;base64,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",
    inStock: false,
  },
  {
    id: 7,
    name: "Sneakers",
    price: 79.99,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2lIoXtuOTVkFgPMByfcUz5Xrq8rRRaGB7GQRo5UIm2g&s=10",
    inStock: true,
  },
  {
    id: 8,
    name: "Sunglasses",
    price: 24.99,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmroH4kXMclbQ9A9_NV6RZ7EdCL5I-rSFEsvM-x51XHA&s=10",
    inStock: false,
  },
];

const ProductList = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const handleRemoveItem = (indexToRemove) => {
    setCartItems((prev) =>
      prev.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-8 sm:px-6 lg:px-10 lg:py-12">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-col items-center justify-between gap-4 rounded-2xl bg-white p-5 shadow-sm sm:flex-row sm:px-8">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              My Store
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Discover your favourite products
            </p>
          </div>

          <div className="rounded-xl bg-indigo-50 px-5 py-3 text-center">
            <p className="text-sm font-medium text-indigo-600">
              Shopping Cart
            </p>
            <h2 className="text-xl font-bold text-indigo-700">
              🛒 Cart: {cartItems.length} items
            </h2>
          </div>
        </header>
         <section>
          <h2 className="mb-5 text-xl font-bold text-slate-800 sm:text-2xl">
            Our Products
          </h2>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={() => handleAddToCart(product)}
              />
            ))}
          </div>
              <section className="mb-10 mt-8 rounded-2xl bg-white p-5 shadow-sm sm:p-6">
          <h2 className="mb-5 text-xl font-bold text-slate-900 sm:text-2xl">
            Your Cart ({cartItems.length})
          </h2>

          {cartItems.length === 0 ? (
            <p className="rounded-xl bg-slate-50 p-5 text-center text-slate-500">
              Your cart is empty. Add a product to get started!
            </p>
          ) : (
            <div className="space-y-3">
              {cartItems.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="flex flex-col gap-3 rounded-xl border border-slate-200 p-3 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 w-16 rounded-lg bg-slate-50 object-contain"
                    />

                    <div>
                      <h3 className="font-semibold capitalize text-slate-800">
                        {item.name}
                      </h3>
                      <p className="font-bold text-indigo-600">
                        ${item.price}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleRemoveItem(index)}
                    className="rounded-lg bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-100"
                  >
                    Remove Item
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
        </section>
      </div>
    </div>
  );
};

export default ProductList;
