import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Crown, Diamond, Scroll, Star, ArrowRight, Clock, Award, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassCard from '../components/ui/GlassCard';
import Button from '../components/ui/Button';
import { products } from '../data/products';

const CollectionsPage: React.FC = () => {
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null);

  const collections = [
    {
      id: 'vintage-timepieces',
      name: 'Vintage Timepieces',
      description: 'Exquisite watches that have stood the test of time',
      image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Clock,
      theme: 'antique',
      products: products.filter(p => p.category === 'Watches' || p.tags.includes('vintage')),
      color: 'from-amber-600 to-amber-800',
      bgColor: 'from-amber-50 to-orange-50',
    },
    {
      id: 'precious-gems',
      name: 'Precious Gems',
      description: 'Rare diamonds and gemstones of unparalleled beauty',
      image: 'https://images.pexels.com/photos/1395306/pexels-photo-1395306.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Diamond,
      theme: 'luxury',
      products: products.filter(p => p.category === 'Jewelry'),
      color: 'from-gold-500 to-gold-700',
      bgColor: 'from-gold-50 to-yellow-50',
    },
    {
      id: 'heritage-artifacts',
      name: 'Heritage Artifacts',
      description: 'Authentic pieces with rich historical significance',
      image: 'https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Scroll,
      theme: 'antique',
      products: products.filter(p => p.category === 'Home & Decor' || p.tags.includes('antique')),
      color: 'from-amber-700 to-orange-800',
      bgColor: 'from-amber-100 to-orange-100',
    },
    {
      id: 'couture-fashion',
      name: 'Couture Fashion',
      description: 'Designer pieces from the world\'s most prestigious fashion houses',
      image: 'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Crown,
      theme: 'luxury',
      products: products.filter(p => p.category === 'Fashion'),
      color: 'from-purple-600 to-pink-600',
      bgColor: 'from-purple-50 to-pink-50',
    },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Sparkles className="h-8 w-8 text-gold-500" />
            <h1 className="text-5xl md:text-6xl font-serif font-bold bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent">
              Curated Collections
            </h1>
            <Sparkles className="h-8 w-8 text-gold-500" />
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Discover our meticulously curated collections, each telling a unique story of craftsmanship, 
            heritage, and timeless elegance. From vintage treasures to modern luxury, find pieces that 
            speak to your soul.
          </p>
        </motion.div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedCollection(selectedCollection === collection.id ? null : collection.id)}
            >
              <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${collection.bgColor} dark:from-gray-800 dark:to-gray-900 p-8 border-2 border-transparent hover:border-gold-300 dark:hover:border-gold-600 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div 
                    className="w-full h-full"
                    style={{
                      backgroundImage: collection.theme === 'antique' 
                        ? `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                        : `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFD700' fill-opacity='0.1'%3E%3Cpath d='M20 20l10-10v20l-10-10zm-10 0L0 10v20l10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                  />
                </div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`p-4 rounded-2xl bg-gradient-to-r ${collection.color} text-white shadow-lg`}>
                        <collection.icon className="h-8 w-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-2">
                          {collection.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {collection.products.length} exclusive pieces
                        </p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: selectedCollection === collection.id ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-gold-500 transition-colors duration-300" />
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {collection.products.slice(0, 3).map((product, i) => (
                      <div key={product.id} className="relative overflow-hidden rounded-xl">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      </div>
                    ))}
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {collection.description}
                  </p>

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: selectedCollection === collection.id ? 'auto' : 0,
                      opacity: selectedCollection === collection.id ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {collection.products.slice(0, 4).map((product) => (
                          <Link
                            key={product.id}
                            to={`/product/${product.id}`}
                            className="flex items-center space-x-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg hover:bg-white/80 dark:hover:bg-gray-800/80 transition-colors duration-200"
                          >
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-12 h-12 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                                {product.name}
                              </h4>
                              <div className="flex items-center space-x-2">
                                <span className="text-gold-600 font-bold text-sm">
                                  ${product.price.toLocaleString()}
                                </span>
                                <div className="flex items-center">
                                  <Star className="h-3 w-3 text-gold-500 fill-current" />
                                  <span className="text-xs text-gray-500 ml-1">
                                    {product.rating}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-4">
                        <Link to={`/shop?collection=${collection.id}`}>
                          <Button className="w-full" variant="outline">
                            View Full Collection
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Collection Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 dark:from-black dark:via-gray-900 dark:to-black p-12 text-center"
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=1920)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 to-navy-800/80"></div>
          
          <div className="relative z-10">
            <Award className="h-16 w-16 text-gold-500 mx-auto mb-6" />
            <h2 className="text-4xl font-serif font-bold text-white mb-4">
              Collector's Choice
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our exclusive membership program and gain access to rare, one-of-a-kind pieces 
              before they're available to the public. Curated specifically for discerning collectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gold-500 hover:bg-gold-600">
                Become a Member
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-navy-900">
                Learn More
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CollectionsPage;