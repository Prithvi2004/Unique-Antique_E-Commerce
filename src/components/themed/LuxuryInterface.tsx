import React from 'react';
import { motion } from 'framer-motion';
import { Diamond, Sparkles, Crown } from 'lucide-react';
import { Product } from '../../data/products';
import ProductCard from '../ui/ProductCard';

interface LuxuryInterfaceProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  isInWishlist: (id: string) => boolean;
}

const LuxuryInterface: React.FC<LuxuryInterfaceProps> = ({
  products,
  onAddToCart,
  onToggleWishlist,
  isInWishlist,
}) => {
  return (
    <div className="relative overflow-hidden">
      {/* Luxury Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFD700' fill-opacity='0.1'%3E%3Cpath d='M20 20l10-10v20l-10-10zm-10 0L0 10v20l10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 relative"
      >
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="inline-block mb-4"
        >
          <Diamond className="h-12 w-12 text-gold-500" />
        </motion.div>
        
        <h1 className="text-6xl font-serif font-bold bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent mb-4">
          LUXURY COLLECTION
        </h1>
        
        <div className="flex items-center justify-center space-x-4 mb-4">
          <Sparkles className="h-6 w-6 text-gold-500" />
          <p className="text-xl text-gray-700 dark:text-gray-300 font-light tracking-wide">
            Exquisite • Exclusive • Extraordinary
          </p>
          <Sparkles className="h-6 w-6 text-gold-500" />
        </div>
        
        <div className="flex justify-center">
          <div className="w-48 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
        </div>
      </motion.div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            onToggleWishlist={onToggleWishlist}
            isInWishlist={isInWishlist}
            variant="luxury"
            index={index}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-32 left-16 opacity-10 pointer-events-none"
      >
        <Diamond className="h-40 w-40 text-gold-500" />
      </motion.div>
      
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-32 right-16 opacity-10 pointer-events-none"
      >
        <Crown className="h-32 w-32 text-gold-500" />
      </motion.div>
    </div>
  );
};

export default LuxuryInterface;