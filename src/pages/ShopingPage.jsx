import { shopingData } from '../constants/shopingPage';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import { Rate } from 'antd';

const ShopingPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Our Collection
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {shopingData.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                {product.discount && (
                  <span className="absolute top-2 left-2 bg-rose-500 text-white px-2 py-1 rounded-md text-sm">
                    -{product.discount}%
                  </span>
                )}
                <button className="absolute top-2 right-2 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                  <FiHeart className="text-rose-500" />
                </button>
              </div>

              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.name}
                  </h3>
                  <span className="text-sm font-medium text-rose-600 bg-rose-50 px-2 py-1 rounded">
                    {product.category}
                  </span>
                </div>

                <p className="text-sm text-gray-600 mb-3">
                  {product.description}
                </p>

                <div className="flex items-center mb-3">
                  <Rate
                    disabled
                    defaultValue={product.rating}
                    className="text-sm text-yellow-400"
                  />
                  <span className="ml-2 text-sm text-gray-500">
                    ({product.rating})
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-gray-800">
                      ${product.price}
                    </span>
                    {product.discount && (
                      <span className="ml-2 text-sm text-gray-500 line-through">
                        $
                        {(product.price * (1 + product.discount / 100)).toFixed(
                          2
                        )}
                      </span>
                    )}
                  </div>
                  <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                    <FiShoppingCart />
                    Add
                  </button>
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
