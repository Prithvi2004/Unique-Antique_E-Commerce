import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, X, ArrowLeft } from 'lucide-react';
import { useWishlistStore } from '../store/wishlistStore';
import { useCartStore } from '../store/cartStore';
import GlassCard from '../components/ui/GlassCard';
import Button from '../components/ui/Button';

const WishlistPage: React.FC = () => {
  const { items, removeItem } = useWishlistStore();
  const { addItem: addToCart } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="min-h-screen py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <Heart className="h-24 w-24 text-gray-300 mx-auto mb-6" />
            <h1 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">
              Your Wishlist is Empty
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Save your favorite luxury items to your wishlist for easy access later.
            </p>
            <Link to="/shop">
              <Button size="lg">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Discover Items
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/shop"
            className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gold-500 mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Continue Shopping</span>
          </Link>
          <h1 className="text-4xl font-serif font-bold text-gray-900 dark:text-white">
            My Wishlist
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            {items.length} {items.length === 1 ? 'item' : 'items'} saved for later
          </p>
        </div>

        {/* Wishlist Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="group relative">
                <button
                  onClick={() => removeItem(item.id)}
                  className="absolute top-4 right-4 z-10 p-2 bg-white/80 dark:bg-gray-800/80 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200"
                >
                  <X className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                </button>

                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Heart className="h-6 w-6 text-red-500 fill-current" />
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {item.category}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gold-600">
                      ${item.price.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex space-x-2 pt-4">
                    <Button
                      className="flex-1"
                      onClick={() => addToCart(item)}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                    <Link to={`/product/${item.id}`} className="flex-1">
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;