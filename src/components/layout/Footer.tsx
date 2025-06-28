import React from 'react';
import { Link } from 'react-router-dom';
import { Crown, Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Crown className="h-8 w-8 text-gold-500" />
              <span className="font-serif text-xl font-bold">TimelessTreasures</span>
            </div>
            <p className="text-gray-400 text-sm">
              Discover curated luxury items where elegance meets excellence. Your journey to timeless sophistication begins here.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors duration-200">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-gray-400 hover:text-gold-500 transition-colors duration-200 text-sm">
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/collections" className="text-gray-400 hover:text-gold-500 transition-colors duration-200 text-sm">
                  Collections
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-gold-500 transition-colors duration-200 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-gold-500 transition-colors duration-200 text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop?category=watches" className="text-gray-400 hover:text-gold-500 transition-colors duration-200 text-sm">
                  Luxury Watches
                </Link>
              </li>
              <li>
                <Link to="/shop?category=jewelry" className="text-gray-400 hover:text-gold-500 transition-colors duration-200 text-sm">
                  Fine Jewelry
                </Link>
              </li>
              <li>
                <Link to="/shop?category=fashion" className="text-gray-400 hover:text-gold-500 transition-colors duration-200 text-sm">
                  Designer Fashion
                </Link>
              </li>
              <li>
                <Link to="/shop?category=home" className="text-gray-400 hover:text-gold-500 transition-colors duration-200 text-sm">
                  Home & Decor
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-gray-400 hover:text-gold-500 transition-colors duration-200 text-sm">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-400 hover:text-gold-500 transition-colors duration-200 text-sm">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-400 hover:text-gold-500 transition-colors duration-200 text-sm">
                  Returns
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-gold-500 transition-colors duration-200 text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 TimelessTreasures. All rights reserved. Crafted with elegance.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;