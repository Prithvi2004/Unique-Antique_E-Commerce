import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Scroll, Crown, Sparkles } from 'lucide-react';
import { Product } from '../../data/products';
import ProductCard from '../ui/ProductCard';

interface AntiqueInterfaceProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  isInWishlist: (id: string) => boolean;
}

const AntiqueInterface: React.FC<AntiqueInterfaceProps> = ({
  products,
  onAddToCart,
  onToggleWishlist,
  isInWishlist,
}) => {
  return (
    <div className="relative">
      {/* Vintage Paper Background */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 relative"
      >
        <div className="inline-flex items-center space-x-3 mb-4">
          <Scroll className="h-8 w-8 text-amber-600" />
          <h1 className="text-5xl font-serif font-bold bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800 bg-clip-text text-transparent">
            Antique Collection
          </h1>
          <Scroll className="h-8 w-8 text-amber-600 scale-x-[-1]" />
        </div>
        <p className="text-lg text-amber-700 dark:text-amber-300 font-medium">
          Timeless pieces with stories to tell • Est. centuries ago
        </p>
        <div className="mt-4 flex justify-center">
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
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
            variant="antique"
            index={index}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 opacity-10 pointer-events-none">
        <Crown className="h-32 w-32 text-amber-600 transform rotate-12" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-10 pointer-events-none">
        <Scroll className="h-24 w-24 text-amber-600 transform -rotate-12" />
      </div>
    </div>
  );
};

export default AntiqueInterface;