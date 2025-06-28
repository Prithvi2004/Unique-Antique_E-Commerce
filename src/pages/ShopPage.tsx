import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Filter, Grid, List, Star, Heart, ShoppingCart } from 'lucide-react';
import { products, categories } from '../data/products';
import { useCartStore } from '../store/cartStore';
import { useWishlistStore } from '../store/wishlistStore';
import GlassCard from '../components/ui/GlassCard';
import Button from '../components/ui/Button';
import AntiqueInterface from '../components/themed/AntiqueInterface';
import LuxuryInterface from '../components/themed/LuxuryInterface';
import ThemeSelector from '../components/themed/ThemeSelector';
import { Link } from 'react-router-dom';

const ShopPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState([0, 300000]);
  const [showFilters, setShowFilters] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<'antique' | 'luxury'>('luxury');

  const { addItem: addToCart } = useCartStore();
  const { toggleItem: toggleWishlist, isInWishlist } = useWishlistStore();

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Category filter
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => 
        product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Theme-based filtering - more inclusive approach
    if (currentTheme === 'antique') {
      // Show antique/vintage items OR items from Home & Decor and Art categories
      filtered = filtered.filter(product => 
        product.tags.includes('antique') || 
        product.tags.includes('vintage') ||
        product.category === 'Home & Decor' || 
        product.category === 'Art' ||
        (product.yearMade && product.yearMade < 1980) ||
        product.name.toLowerCase().includes('antique') ||
        product.name.toLowerCase().includes('vintage') ||
        product.name.toLowerCase().includes('victorian') ||
        product.name.toLowerCase().includes('ming') ||
        product.name.toLowerCase().includes('georgian') ||
        product.name.toLowerCase().includes('fabergé') ||
        product.name.toLowerCase().includes('regency') ||
        product.name.toLowerCase().includes('cartier clock') ||
        product.name.toLowerCase().includes('samurai') ||
        product.name.toLowerCase().includes('louis xvi') ||
        product.name.toLowerCase().includes('renaissance')
      );
    } else {
      // Show luxury items OR items from Watches, Jewelry, Fashion categories
      filtered = filtered.filter(product => 
        product.tags.includes('luxury') ||
        product.category === 'Watches' || 
        product.category === 'Jewelry' || 
        product.category === 'Fashion' ||
        product.price > 5000 ||
        product.rarity === 'legendary' ||
        product.rarity === 'exclusive' ||
        product.name.toLowerCase().includes('patek') ||
        product.name.toLowerCase().includes('rolex') ||
        product.name.toLowerCase().includes('harry winston') ||
        product.name.toLowerCase().includes('hermès') ||
        product.name.toLowerCase().includes('cartier') ||
        product.name.toLowerCase().includes('audemars') ||
        product.name.toLowerCase().includes('chanel') ||
        product.name.toLowerCase().includes('baccarat') ||
        product.name.toLowerCase().includes('van cleef') ||
        product.name.toLowerCase().includes('louis vuitton') ||
        product.name.toLowerCase().includes('omega') ||
        product.name.toLowerCase().includes('bulgari')
      );
    }

    // Price filter
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        // Sort by year made (newest first) or by ID for newer items
        filtered.sort((a, b) => {
          const yearA = a.yearMade || 2024;
          const yearB = b.yearMade || 2024;
          return yearB - yearA;
        });
        break;
      default:
        // Featured - keep original order but prioritize legendary items
        filtered.sort((a, b) => {
          const rarityOrder = { legendary: 4, exclusive: 3, rare: 2, common: 1 };
          const rarityA = rarityOrder[a.rarity || 'common'];
          const rarityB = rarityOrder[b.rarity || 'common'];
          return rarityB - rarityA;
        });
        break;
    }

    return filtered;
  }, [selectedCategory, sortBy, priceRange, currentTheme]);

  // Get theme-appropriate categories
  const themeCategories = useMemo(() => {
    if (currentTheme === 'antique') {
      return ['All', 'Home & Decor', 'Art', 'Jewelry'];
    } else {
      return ['All', 'Watches', 'Jewelry', 'Fashion', 'Home & Decor'];
    }
  }, [currentTheme]);

  return (
    <div className={`min-h-screen py-8 transition-all duration-500 ${
      currentTheme === 'antique' 
        ? 'bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 dark:from-amber-900/10 dark:via-orange-900/10 dark:to-amber-800/10' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gold-50 dark:from-gray-900 dark:via-gray-800 dark:to-gold-900/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Theme Selector */}
        <ThemeSelector currentTheme={currentTheme} onThemeChange={setCurrentTheme} />

        {/* Filters and Controls */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <GlassCard className={`${
              currentTheme === 'antique' 
                ? 'bg-amber-50/50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-700' 
                : 'bg-white/50 dark:bg-gray-800/50 border-gold-200 dark:border-gold-700'
            }`}>
              <div className="space-y-6">
                {/* Categories */}
                <div>
                  <h3 className={`text-lg font-semibold mb-3 ${
                    currentTheme === 'antique' 
                      ? 'text-amber-900 dark:text-amber-100' 
                      : 'text-gray-900 dark:text-white'
                  }`}>
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {themeCategories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 ${
                          selectedCategory === category
                            ? currentTheme === 'antique'
                              ? 'bg-amber-500 text-white'
                              : 'bg-gold-500 text-white'
                            : currentTheme === 'antique'
                              ? 'text-amber-600 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-800'
                              : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className={`text-lg font-semibold mb-3 ${
                    currentTheme === 'antique' 
                      ? 'text-amber-900 dark:text-amber-100' 
                      : 'text-gray-900 dark:text-white'
                  }`}>
                    Price Range
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <input
                        type="number"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                        className={`w-full px-3 py-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white ${
                          currentTheme === 'antique'
                            ? 'border-amber-300 dark:border-amber-600 focus:ring-amber-500'
                            : 'border-gray-300 dark:border-gray-600 focus:ring-gold-500'
                        }`}
                        placeholder="Min"
                      />
                      <span className="text-gray-500">-</span>
                      <input
                        type="number"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 300000])}
                        className={`w-full px-3 py-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white ${
                          currentTheme === 'antique'
                            ? 'border-amber-300 dark:border-amber-600 focus:ring-amber-500'
                            : 'border-gray-300 dark:border-gray-600 focus:ring-gold-500'
                        }`}
                        placeholder="Max"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`lg:hidden flex items-center space-x-2 hover:text-opacity-80 ${
                    currentTheme === 'antique'
                      ? 'text-amber-600 dark:text-amber-400'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  <Filter className="h-5 w-5" />
                  <span>Filters</span>
                </button>
                <p className={`${
                  currentTheme === 'antique'
                    ? 'text-amber-600 dark:text-amber-400'
                    : 'text-gray-600 dark:text-gray-400'
                }`}>
                  {filteredProducts.length} items found
                </p>
              </div>

              <div className="flex items-center space-x-4">
                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className={`px-3 py-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white ${
                    currentTheme === 'antique'
                      ? 'border-amber-300 dark:border-amber-600'
                      : 'border-gray-300 dark:border-gray-600'
                  }`}
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>

                {/* View Mode */}
                <div className={`flex border rounded-lg overflow-hidden ${
                  currentTheme === 'antique'
                    ? 'border-amber-300 dark:border-amber-600'
                    : 'border-gray-300 dark:border-gray-600'
                }`}>
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${
                      viewMode === 'grid'
                        ? currentTheme === 'antique'
                          ? 'bg-amber-500 text-white'
                          : 'bg-gold-500 text-white'
                        : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                    }`}
                  >
                    <Grid className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${
                      viewMode === 'list'
                        ? currentTheme === 'antique'
                          ? 'bg-amber-500 text-white'
                          : 'bg-gold-500 text-white'
                        : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                    }`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Themed Product Display */}
            {currentTheme === 'antique' ? (
              <AntiqueInterface
                products={filteredProducts}
                onAddToCart={addToCart}
                onToggleWishlist={toggleWishlist}
                isInWishlist={isInWishlist}
              />
            ) : (
              <LuxuryInterface
                products={filteredProducts}
                onAddToCart={addToCart}
                onToggleWishlist={toggleWishlist}
                isInWishlist={isInWishlist}
              />
            )}

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className={`text-lg mb-4 ${
                  currentTheme === 'antique'
                    ? 'text-amber-600 dark:text-amber-400'
                    : 'text-gray-500 dark:text-gray-400'
                }`}>
                  No products found matching your criteria.
                </p>
                <Button
                  className={`${
                    currentTheme === 'antique'
                      ? 'bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800'
                      : 'bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700'
                  }`}
                  onClick={() => {
                    setSelectedCategory('All');
                    setPriceRange([0, 300000]);
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;