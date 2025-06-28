import React from 'react';
import { motion } from 'framer-motion';
import { Star, Heart, ShoppingCart, Eye, MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../../data/products';
import Button from './Button';
import RarityBadge from './RarityBadge';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  isInWishlist: (id: string) => boolean;
  variant?: 'default' | 'luxury' | 'antique';
  index?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onToggleWishlist,
  isInWishlist,
  variant = 'default',
  index = 0,
}) => {
  const isAntique = variant === 'antique';
  const isLuxury = variant === 'luxury';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group"
    >
      <div className={`relative overflow-hidden rounded-3xl p-6 shadow-2xl transition-all duration-500 backdrop-blur-sm ${
        isAntique 
          ? 'bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-2 border-amber-200 dark:border-amber-700 hover:border-amber-300 dark:hover:border-amber-600'
          : isLuxury
            ? 'bg-gradient-to-br from-white via-gray-50 to-gold-50 dark:from-gray-900 dark:via-gray-800 dark:to-gold-900/20 border border-gold-200 dark:border-gold-700 hover:shadow-gold-500/20'
            : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
      }`}>
        
        {/* Luxury Glow Effect */}
        {isLuxury && (
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-gold-400/10 to-gold-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        )}

        {/* Antique Corner Decorations */}
        {isAntique && (
          <>
            <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-amber-400"></div>
            <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-amber-400"></div>
            <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-amber-400"></div>
            <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-amber-400"></div>
          </>
        )}

        {/* Badges */}
        <div className="absolute top-4 left-4 z-10 flex flex-col space-y-2">
          {product.rarity && (
            <RarityBadge rarity={product.rarity} />
          )}
          {product.seller.verified && (
            <span className="inline-flex items-center space-x-1 px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 rounded-full text-xs font-medium">
              <span>✓</span>
              <span>Verified</span>
            </span>
          )}
        </div>

        {/* Product Image */}
        <div className="relative overflow-hidden rounded-2xl mb-6 group-hover:shadow-2xl transition-shadow duration-500">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700 ${
              isAntique ? 'sepia-[0.3]' : ''
            }`}
          />
          
          {/* Shimmer Effect for Luxury */}
          {isLuxury && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          )}
          
          {/* Floating Action Buttons */}
          <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onToggleWishlist(product)}
              className="p-3 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Heart
                className={`h-5 w-5 ${
                  isInWishlist(product.id)
                    ? 'text-red-500 fill-current'
                    : 'text-gray-600 dark:text-gray-400'
                }`}
              />
            </motion.button>
            
            <Link to={`/product/${product.id}`}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Eye className={`h-5 w-5 ${
                  isAntique ? 'text-amber-600' : isLuxury ? 'text-gold-600' : 'text-gray-600'
                }`} />
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-4 relative z-20">
          <div>
            <h3 className={`text-xl font-serif font-bold mb-2 group-hover:text-opacity-80 transition-colors duration-300 ${
              isAntique 
                ? 'text-amber-900 dark:text-amber-100 group-hover:text-amber-700'
                : isLuxury
                  ? 'text-gray-900 dark:text-white group-hover:text-gold-600'
                  : 'text-gray-900 dark:text-white'
            }`}>
              {product.name}
            </h3>
            
            {/* Origin and Year */}
            <div className="flex items-center space-x-4 text-sm mb-2">
              {product.origin && (
                <div className="flex items-center space-x-1">
                  <MapPin className={`h-3 w-3 ${
                    isAntique ? 'text-amber-600' : isLuxury ? 'text-gold-500' : 'text-gray-500'
                  }`} />
                  <span className={`${
                    isAntique ? 'text-amber-700 dark:text-amber-300' : 'text-gray-600 dark:text-gray-400'
                  }`}>
                    {product.origin}
                  </span>
                </div>
              )}
              {product.yearMade && (
                <div className="flex items-center space-x-1">
                  <Calendar className={`h-3 w-3 ${
                    isAntique ? 'text-amber-600' : isLuxury ? 'text-gold-500' : 'text-gray-500'
                  }`} />
                  <span className={`${
                    isAntique ? 'text-amber-700 dark:text-amber-300' : 'text-gray-600 dark:text-gray-400'
                  }`}>
                    {product.yearMade}
                  </span>
                </div>
              )}
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating)
                        ? isAntique ? 'text-amber-500 fill-current' : 'text-gold-500 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className={`text-sm ${
                isAntique ? 'text-amber-600 dark:text-amber-400' : 'text-gray-600 dark:text-gray-400'
              }`}>
                ({product.reviews} reviews)
              </span>
            </div>
          </div>

          {/* Price with Animation */}
          <motion.div 
            className="flex items-center justify-between"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center space-x-3">
              <span className={`text-2xl font-bold ${
                isAntique 
                  ? 'bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent'
                  : isLuxury
                    ? 'bg-gradient-to-r from-gold-600 to-gold-700 bg-clip-text text-transparent'
                    : 'text-gray-900 dark:text-white'
              }`}>
                ${product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-gray-500 line-through">
                  ${product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
          </motion.div>

          {/* Description */}
          <p className={`leading-relaxed text-sm ${
            isAntique ? 'text-amber-700 dark:text-amber-300' : 'text-gray-600 dark:text-gray-400'
          }`}>
            {product.description.substring(0, 120)}...
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-2">
            {product.features.slice(0, 2).map((feature, i) => (
              <span
                key={i}
                className={`px-3 py-1 text-xs rounded-full font-medium ${
                  isAntique
                    ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300'
                    : isLuxury
                      ? 'bg-gold-100 dark:bg-gold-900/30 text-gold-700 dark:text-gold-300'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                }`}
              >
                {feature}
              </span>
            ))}
          </div>

          {/* Seller Info */}
          <div className="flex items-center space-x-3 pt-2 border-t border-gray-200 dark:border-gray-700">
            <img
              src={product.seller.avatar}
              alt={product.seller.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="flex-1">
              <p className={`text-sm font-medium ${
                isAntique ? 'text-amber-900 dark:text-amber-100' : 'text-gray-900 dark:text-white'
              }`}>
                {product.seller.name}
              </p>
              <div className="flex items-center space-x-1">
                <Star className={`h-3 w-3 fill-current ${
                  isAntique ? 'text-amber-500' : 'text-gold-500'
                }`} />
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {product.seller.rating}
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3 pt-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1"
            >
              <Button
                onClick={() => onAddToCart(product)}
                className={`w-full border-0 shadow-lg hover:shadow-xl ${
                  isAntique
                    ? 'bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white'
                    : isLuxury
                      ? 'bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white'
                      : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white'
                }`}
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
            </motion.div>
            
            <Link to={`/product/${product.id}`} className="flex-shrink-0">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className={`px-6 border-2 ${
                    isAntique
                      ? 'border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white'
                      : isLuxury
                        ? 'border-gold-500 text-gold-600 hover:bg-gold-500 hover:text-white'
                        : 'border-gray-500 text-gray-600 hover:bg-gray-500 hover:text-white'
                  }`}
                >
                  View
                </Button>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;