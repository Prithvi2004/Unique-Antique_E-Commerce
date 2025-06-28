import React from 'react';
import { motion } from 'framer-motion';
import { Scroll, Diamond, Palette } from 'lucide-react';

interface ThemeSelectorProps {
  currentTheme: 'antique' | 'luxury';
  onThemeChange: (theme: 'antique' | 'luxury') => void;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ currentTheme, onThemeChange }) => {
  return (
    <div className="flex items-center justify-center mb-8">
      <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-lg rounded-2xl p-2 border border-white/20 dark:border-gray-700/20">
        <div className="flex space-x-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onThemeChange('antique')}
            className={`flex items-center space-x-3 px-6 py-3 rounded-xl transition-all duration-300 ${
              currentTheme === 'antique'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg'
                : 'text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/20'
            }`}
          >
            <Scroll className="h-5 w-5" />
            <span className="font-medium">Antique Collection</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onThemeChange('luxury')}
            className={`flex items-center space-x-3 px-6 py-3 rounded-xl transition-all duration-300 ${
              currentTheme === 'luxury'
                ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-white shadow-lg'
                : 'text-gold-600 dark:text-gold-400 hover:bg-gold-50 dark:hover:bg-gold-900/20'
            }`}
          >
            <Diamond className="h-5 w-5" />
            <span className="font-medium">Luxury Collection</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ThemeSelector;