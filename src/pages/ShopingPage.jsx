import { useState, useEffect } from 'react';
import { getDatabase, ref, get } from 'firebase/database'; // Realtime Database import
import { FaHeart, FaShoppingCart } from 'react-icons/fa'; // Importing heart and cart icons

const ShopingPage = () => {
  const [flowers, setFlowers] = useState([]);
  const [favorites, setFavorites] = useState([]); // Track favorites
  const [cart, setCart] = useState([]); // Track cart items

  useEffect(() => {
    const fetchFlowers = async () => {
      const db = getDatabase(); // Get the database instance
      const flowersRef = ref(db, 'flowers'); // Reference to the 'flowers' node in Realtime Database
      const snapshot = await get(flowersRef); // Get data from the reference

      if (snapshot.exists()) {
        setFlowers(Object.values(snapshot.val()).slice(0, 10)); // Only get the first 10 items
      } else {
        console.log('No data available');
      }
    };

    fetchFlowers();
  }, []);

  const handleFavorite = (product) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(product)) {
        return prevFavorites.filter((item) => item !== product); // Remove from favorites if already there
      } else {
        return [...prevFavorites, product]; // Add to favorites
      }
    });
  };

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]); // Add to cart
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Our Collection
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {flowers.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative"
            >
              <div className="relative">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-2 right-2 flex space-x-2">
                  <button
                    onClick={() => handleFavorite(product)}
                    className={`p-2 rounded-full ${favorites.includes(product) ? 'text-red-500' : 'text-white'}`}
                  >
                    <FaHeart size={24} />
                  </button>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="p-2 rounded-full text-white"
                  >
                    <FaShoppingCart size={24} />
                  </button>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-800">
                    ${product.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopingPage;
