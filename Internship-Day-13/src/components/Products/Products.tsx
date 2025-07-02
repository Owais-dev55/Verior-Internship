"use client";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 59.99,
    description: "High quality sound with noise cancellation.",
    image:
      "https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 89.99,
    description: "Track your health and stay connected.",
    image:
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 39.99,
    description: "Compact design with powerful sound.",
    image:
      "https://images.unsplash.com/photo-1589001181560-a8df1800e501?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Fitness Band",
    price: 29.99,
    description: "Perfect for tracking daily fitness goals.",
    image:
      "https://images.unsplash.com/photo-1690016424217-03f4d9427a6a?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Wireless Charger",
    price: 19.99,
    description: "Fast and safe wireless charging pad.",
    image:
      "https://images.unsplash.com/photo-1617975316514-69cd7e16c2a4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Noise Cancelling Earbuds",
    price: 49.99,
    description: "Enjoy music with zero distractions.",
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
const Products = () => {
  return (
  <div className="py-10 px-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
  <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
    Featured Products
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {products.map((product) => (
      <div
        key={product.id}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
      >
        <img
          src={product.image}
          alt={product.name}
          width={500}
          height={300}
          className="w-full h-56 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            {product.name}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
            {product.description}
          </p>
          <p className="text-md font-semibold text-gray-700 dark:text-gray-200 mt-2">
            ${product.price}
          </p>
          <button
            className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};


export default Products;